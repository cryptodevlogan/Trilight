"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { PRODUCTS, formatPrice, type Product } from "@/lib/products"

export default function BuyBox({
  selectedId: controlledId,
  onSelectProduct,
}: {
  selectedId?: string
  onSelectProduct?: (product: Product) => void
}) {
  // Default to the middle option (Vehicle Kit) as the suggested choice.
  // Works controlled (parent passes selectedId) or standalone (internal state).
  const [internalId, setInternalId] = useState(PRODUCTS[1]?.id ?? PRODUCTS[0].id)
  const selectedId = controlledId ?? internalId
  const [loading, setLoading] = useState(false)

  const selected = PRODUCTS.find((p) => p.id === selectedId) ?? PRODUCTS[0]

  const handleBuy = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // We only send the id + quantity. The server decides the price.
        body: JSON.stringify({ items: [{ id: selected.id, quantity: 1 }] }),
      })

      const data = await res.json()
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed")
      }

      // Hand the customer off to Stripe's secure payment page.
      window.location.href = data.url
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong starting checkout. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="mb-8">
      <p className="text-sm font-semibold tracking-wide text-gray-900 mb-3">Choose your kit</p>

      <div className="space-y-3">
        {PRODUCTS.map((product) => {
          const isSelected = product.id === selectedId
          return (
            <button
              key={product.id}
              type="button"
              onClick={() => {
                setInternalId(product.id)
                onSelectProduct?.(product)
              }}
              className={`w-full text-left rounded-lg border-2 p-4 transition-all ${
                isSelected
                  ? "border-[#E67E22] bg-[#E67E22]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* Radio indicator */}
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                      isSelected ? "border-[#E67E22] bg-[#E67E22]" : "border-gray-300"
                    }`}
                  >
                    {isSelected && <Check className="h-3 w-3 text-white" />}
                  </span>
                  {/* Product thumbnail */}
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500 mb-2">{product.tagline}</p>
                    <ul className="space-y-1">
                      {product.includes.map((line) => (
                        <li key={line} className="flex items-start text-xs text-gray-600">
                          <span className="mr-1.5 mt-0.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
                  {formatPrice(product.priceCents)}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={handleBuy}
        disabled={loading}
        className="cta-glow mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#E67E22] px-6 py-4 font-medium text-white transition-colors hover:bg-[#D35400] disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Redirecting to checkout…
          </>
        ) : (
          <>Buy {selected.name} — {formatPrice(selected.priceCents)}</>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-gray-500">
        Secure checkout powered by Stripe
      </p>
    </div>
  )
}
