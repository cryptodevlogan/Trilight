import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

// Stripe's SDK needs the Node runtime (not Edge).
export const runtime = "nodejs"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

/**
 * Stripe calls THIS url after events happen (e.g. a payment succeeds). It's how
 * your server learns an order is really paid — the browser redirect to /success
 * is just a convenience and can't be trusted on its own (a customer could close
 * the tab or fake it). Fulfillment (ship the product, send an email) should key
 * off this webhook.
 *
 * Set STRIPE_WEBHOOK_SECRET in .env.local — see that file for how to get it.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set.")
    return NextResponse.json({ error: "Webhook not configured." }, { status: 500 })
  }

  // Signature verification requires the RAW request body, so read it as text.
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, signature ?? "", secret)
  } catch (err) {
    // A bad signature means the request didn't really come from Stripe.
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 })
  }

  // Handle the events we care about.
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session
      await fulfillOrder(session)
      break
    }
    default:
      // Other event types are fine to ignore for now.
      break
  }

  // Always 200 quickly so Stripe knows we received it (otherwise it retries).
  return NextResponse.json({ received: true })
}

/**
 * This is where you actually fulfill the order. Right now it logs everything you
 * need to ship it. Later, this is the spot to send yourself/the customer an
 * email, or write the order to a database.
 */
async function fulfillOrder(session: Stripe.Checkout.Session) {
  // What did they buy? (Line items aren't included in the event by default.)
  // Wrapped in try/catch so a synthetic test event without real line items
  // still logs the order instead of erroring the whole webhook.
  let items: string[] = []
  try {
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      limit: 100,
    })
    items = lineItems.data.map((li) => `${li.quantity} × ${li.description}`)
  } catch (err) {
    console.warn("Could not fetch line items for", session.id, err)
  }

  const shipping = session.customer_details?.address

  console.log("✅ New paid order:", {
    sessionId: session.id,
    email: session.customer_details?.email,
    name: session.customer_details?.name,
    amountTotal: session.amount_total != null ? `$${(session.amount_total / 100).toFixed(2)}` : null,
    items,
    shipTo: shipping
      ? `${shipping.line1 ?? ""} ${shipping.line2 ?? ""}, ${shipping.city ?? ""} ${shipping.state ?? ""} ${shipping.postal_code ?? ""}`.trim()
      : null,
  })

  // TODO(fulfillment): email the customer / notify yourself / save to a database.
}
