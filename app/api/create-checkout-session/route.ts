import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { getProduct } from "@/lib/products"

// This runs on YOUR server, never in the customer's browser. That's why it can
// safely hold the secret key and decide the real prices.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  // Fail loudly (in the server logs) if the key isn't set up yet, instead of a
  // confusing crash. See .env.local.
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local." },
      { status: 500 },
    )
  }

  try {
    // The page only sends WHICH product and HOW MANY. Never the price.
    const { items } = (await request.json()) as {
      items: { id: string; quantity: number }[]
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Your cart is empty." }, { status: 400 })
    }

    // Build the line items by looking up each product in our own catalog, so
    // the price always comes from the server — never from the request.
    const line_items = items.map((item) => {
      const product = getProduct(item.id)
      if (!product) {
        throw new Error(`Unknown product: ${item.id}`)
      }
      const quantity = Math.max(1, Math.min(20, Math.floor(item.quantity || 1)))

      // If this product has a real Stripe Price ID, charge that. Otherwise build
      // the price inline from our catalog. Both keep pricing server-controlled.
      if (product.stripePriceId) {
        return { price: product.stripePriceId, quantity }
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.includes.join(" · "),
          },
          unit_amount: product.priceCents, // trusted, from our server
        },
        quantity,
      }
    })

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      // Physical product -> we need to know where to ship it.
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      // Let Stripe email the customer a receipt.
      // (Requires receipts to be enabled in the Stripe dashboard.)
      success_url: `${request.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/checkout/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 500 })
  }
}
