import Link from "next/link"
import { CheckCircle } from "lucide-react"
import Stripe from "stripe"
import ClearCartOnSuccess from "@/components/clear-cart-on-success"

// This is a server component, so it can safely read the order details from
// Stripe using the secret key and show the customer exactly what they bought.

async function getOrder(sessionId: string | undefined) {
  if (!sessionId || !process.env.STRIPE_SECRET_KEY) return null
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    })
    return session
  } catch {
    return null
  }
}

export default async function CheckoutSuccess({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const order = await getOrder(searchParams.session_id)
  const email = order?.customer_details?.email
  const lineItems = order?.line_items?.data ?? []
  const total = order?.amount_total != null ? (order.amount_total / 100).toFixed(2) : null

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <ClearCartOnSuccess />
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Thank you for your order!</h1>
        <p className="text-gray-600 mb-6">
          Your payment went through and your order is confirmed.
          {email ? ` A receipt is on its way to ${email}.` : ""}
        </p>

        {lineItems.length > 0 && (
          <div className="text-left border-t border-b py-4 mb-6 space-y-2">
            {lineItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-700">
                  {item.quantity} × {item.description}
                </span>
                <span className="font-medium text-gray-900">
                  ${((item.amount_total ?? 0) / 100).toFixed(2)}
                </span>
              </div>
            ))}
            {total && (
              <div className="flex justify-between text-sm font-bold pt-2 border-t">
                <span>Total</span>
                <span>${total}</span>
              </div>
            )}
          </div>
        )}

        <Link
          href="/"
          className="block w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
