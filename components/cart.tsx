"use client"

import { useState } from "react"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, total, itemCount, updateQuantity, removeItem } = useCart()
  const { t } = useLanguage()

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      })

      if (!response.ok) throw new Error("Failed to create checkout session")
      const { url } = await response.json()
      window.open(url, "_blank")
    } catch (error) {
      console.error("Error during checkout:", error)
      alert("There was an error processing your request. Please try again.")
    }
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="relative">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">{t("cart.title")}</h2>
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">{t("cart.empty")}</p>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 border-b pb-4">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} width={60} height={60} className="rounded" />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          {item.variant && <p className="text-xs text-gray-500">{item.variant}</p>}
                          <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-100 rounded">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-100 rounded">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total: ${total.toFixed(2)}</span>
                  </div>
                  <button onClick={handleCheckout} className="w-full bg-black text-white py-3 px-4 hover:bg-gray-800 transition-colors">
                    {t("cart.checkout")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
