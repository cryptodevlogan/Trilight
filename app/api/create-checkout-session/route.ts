import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    // Calculate total amount (Stripe expects amounts in cents)
    const totalAmount = items.reduce((sum: number, item: any) => {
      return sum + item.price * item.quantity * 100 // Convert to cents
    }, 0)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "TRILIGHT LED Safety Triangle",
              description: "Professional-grade LED warning triangle for roadside safety",
            },
            unit_amount: 2000, // $20.00 in cents
          },
          quantity: items.reduce((sum: number, item: any) => sum + item.quantity, 0),
        },
      ],
      mode: "payment",
      success_url: `${request.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/checkout/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 })
  }
}
