"use client"

import { useEffect } from "react"
import { useCart } from "@/contexts/cart-context"

// Empties the basket once the order is confirmed, so a completed purchase
// doesn't leave the same items sitting in the cart.
export default function ClearCartOnSuccess() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
    // Run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
