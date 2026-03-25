import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "TRITECH - Advanced LED Safety Solutions",
  description:
    "Revolutionary LED warning triangles and safety equipment for professional drivers and fleets.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen flex flex-col">{children}</main>
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  fontFamily: "'Oswald', sans-serif",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.03em",
                },
              }}
            />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
