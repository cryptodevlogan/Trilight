"use client"

import { useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Plus, Minus, Play, X } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import AnnouncementBar from "@/components/announcement-bar"
import MobileMenu from "@/components/mobile-menu"
import Cart from "@/components/cart"
import SupportDialog from "@/components/support-dialog"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const productMedia = [
  { type: "image", src: "/trilight-truck-mounted.png", alt: "TRILIGHT mounted on truck" },
  { type: "image", src: "/trilight-road-deployment.png", alt: "TRILIGHT road deployment" },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4",
    alt: "Roadside Emergency Deployment",
    thumbnail: "/trilight-road-deployment.png",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4",
    alt: "Wearable Safety System",
    thumbnail: "/trilight-truck-mounted.png",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4",
    alt: "Loading Dock Positioning",
    thumbnail: "/trilight-truck-highway-setup.png",
  },
]

const reviews = [
  {
    id: 1,
    name: "Mike Rodriguez",
    rating: 5,
    comment: "Game changer for our fleet. Drivers love how easy these are to deploy.",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    rating: 5,
    comment: "Incredibly bright and visible. Much better than traditional triangles.",
    verified: true,
  },
  {
    id: 3,
    name: "David Thompson",
    rating: 5,
    comment: "Professional quality. The magnetic mount is genius.",
    verified: true,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`h-4 w-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

export default function TrilightProductPage() {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState("Standard")
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState(0)
  const [selectedConfig, setSelectedConfig] = useState("standard")
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")

  const price = 20.0 // Fixed price of $20

  const handleAddToCart = () => {
    addItem({
      id: `trilight-${selectedConfig}`,
      name: "TRILIGHT LED Safety Triangle",
      price: 20.0,
      quantity: quantity,
      image: productMedia[0].src,
      variant: selectedConfig === "standard" ? "Standard Configuration" : "With Accessories",
    })
    alert("Added to cart!")
  }

  const handleBuyNow = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: "trilight-led-safety-triangle",
              name: "TRILIGHT LED Safety Triangle",
              price: price,
              quantity: quantity,
              variant: selectedVariant,
              image: "/trilight-truck-mounted.png",
            },
          ],
        }),
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          console.error("Error redirecting to checkout:", error)
        }
      }
    } catch (error) {
      console.error("Error during checkout:", error)
      alert("There was an error processing your request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVideoPlay = (videoSrc: string) => {
    setCurrentVideo(videoSrc)
    setVideoModalOpen(true)
  }

  const handleMediaClick = (index: number) => {
    const media = productMedia[index]
    if (media.type === "video") {
      handleVideoPlay(media.src)
    } else {
      setSelectedMedia(index)
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Navigation */}
        <nav className="bg-white flex items-center justify-between border-b relative h-[64px] px-10">
          <div className="w-1/3 flex items-center justify-start">
            <MobileMenu />
            <div className="hidden lg:flex items-center space-x-8 ml-4">
              <Link href="#" className="nav-link text-sm">
                TRILIGHT
              </Link>
              <Link href="/enterprise" className="nav-link text-sm">
                ENTERPRISE
              </Link>
              <Link href="#" className="nav-link text-sm text-red-600">
                SALE
              </Link>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center h-full">
            <Link href="/">
              <Image src="/tritech-logo.png" alt="TriTech" width={200} height={50} className="h-[45px] w-auto" />
            </Link>
          </div>

          <div className="w-1/3 flex items-center justify-end space-x-6">
            <button className="hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            {/* SupportDialog wrapper for SUPPORT button */}
            <SupportDialog>
              <button className="hidden sm:block nav-link text-sm">SUPPORT</button>
            </SupportDialog>
            <button className="flex items-center">
              <Image src="/us-flag.png" alt="US" width={24} height={16} className="h-4 w-auto" />
              <ArrowLeft className="h-4 w-4 ml-1" />
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 7v4a4 4 0 0 1-4 4H6l-3 3V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <Cart />
          </div>
        </nav>
      </div>

      {/* Spacer to account for fixed header */}
      <div className="h-[96px]"></div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
              <video controls autoPlay className="w-full h-auto" src={currentVideo}>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Product Page Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="text-xs sm:text-sm mb-4 sm:mb-6">
          <Link href="/" className="text-gray-500 hover:text-black">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/product" className="text-gray-500 hover:text-black">
            Products
          </Link>{" "}
          / <span className="font-medium">TRILIGHT LED Safety Triangle</span>
        </div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-16">
          {/* Product Images/Videos */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative">
              {productMedia[selectedMedia]?.type === "image" ? (
                <Image
                  src={productMedia[selectedMedia]?.src || "/placeholder.svg"}
                  alt={productMedia[selectedMedia]?.alt || "TRILIGHT LED Safety Triangle"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={productMedia[selectedMedia]?.thumbnail || "/placeholder.svg"}
                    alt={productMedia[selectedMedia]?.alt || "Video thumbnail"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button
                      onClick={() => handleVideoPlay(productMedia[selectedMedia]?.src || "")}
                      className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all"
                    >
                      <Play className="h-8 w-8 text-black ml-1" />
                    </button>
                  </div>
                </div>
              )}
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Star className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-6 gap-1 sm:gap-2">
              {productMedia.map((media, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 rounded-lg overflow-hidden aspect-square relative cursor-pointer border-2 ${
                    selectedMedia === index ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => handleMediaClick(index)}
                >
                  <Image
                    src={media.type === "image" ? media.src : media.thumbnail || "/placeholder.svg"}
                    alt={media.alt}
                    fill
                    className="object-cover"
                  />
                  {media.type === "video" && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">TRILIGHT LED Safety Triangle</h1>
              <div className="flex items-center mb-2">
                <StarRating rating={5} />
                <span className="text-sm">4.9 (128 reviews)</span>
              </div>
              <p className="text-sm text-gray-600">Magnetic LED-powered safety triangle for roadside visibility.</p>
            </div>

            <div className="border-t border-b py-6 mb-6">
              <div className="flex flex-wrap items-baseline mb-2">
                <span className="text-2xl sm:text-3xl font-bold mr-3">${price.toFixed(2)}</span>
                <span className="text-base sm:text-lg text-gray-500 line-through">$29.99</span>
              </div>
              <div className="flex items-center text-sm text-green-600 mb-4">
                <span className="font-medium">Save $9.99 (33% off)</span>
              </div>
              <div className="flex items-center text-sm mb-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Lifetime warranty included</span>
              </div>
            </div>

            {/* Product Options */}
            <div className="space-y-6 mb-8">
              {/* Variant Selector */}
              <div>
                <label className="block text-sm font-medium mb-2">Configuration</label>
                <div className="relative">
                  <select
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option>Standard</option>
                    <option>With Elevation Pole (+$10)</option>
                    <option>With Carrying Case (+$15)</option>
                    <option>Complete Kit (+$20)</option>
                  </select>
                  <ArrowLeft className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none" />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex">
                  <button
                    className="border border-gray-300 rounded-l-md px-3 py-2 flex items-center justify-center min-w-[40px]"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    type="button"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="border-t border-b border-gray-300 w-16 text-center"
                  />
                  <button
                    className="border border-gray-300 rounded-r-md px-3 py-2 flex items-center justify-center min-w-[40px]"
                    onClick={() => setQuantity(quantity + 1)}
                    type="button"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-yellow-500 text-black font-medium py-3 px-4 rounded-md hover:bg-yellow-400 transition-colors text-sm sm:text-base"
              >
                Add to Cart - ${(price * quantity).toFixed(2)}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={isLoading}
                className="w-full bg-black text-white font-medium py-3 px-4 rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base disabled:opacity-50"
              >
                {isLoading ? "Processing..." : `Buy Now - $${(price * quantity).toFixed(2)}`}
              </button>
              <button className="w-full bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-md hover:bg-gray-300 transition-colors text-sm sm:text-base">
                Request Fleet Quote
              </button>
            </div>

            {/* Fleet Pricing Info */}
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-medium mb-2">Fleet Pricing Available</h3>
              <ul className="text-sm space-y-1">
                <li>• 10+ units: $18/each</li>
                <li>• 25+ units: $16/each</li>
                <li>• 50+ units: $14/each</li>
              </ul>
              <a
                href="mailto:willy@trilight.store?subject=Bulk Order Inquiry"
                className="text-sm font-medium underline mt-2 inline-block hover:text-blue-600"
              >
                Contact for bulk orders
              </a>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Be Seen Before It's Too Late.</h3>
              <p className="mb-4">
                TRILIGHT is a magnetic, LED-powered safety triangle designed to replace outdated, hard-to-see roadside
                reflectors. With 360° visibility, rugged waterproof housing, and up to 48 hours of battery life, it
                keeps you and your crew visible in the moments that matter.
              </p>
              <p className="mb-6">
                Whether you're backing into a dark loading dock, broken down on the highway shoulder, or helping a
                friend move at night — TRILIGHT turns risk into visibility, instantly.
              </p>

              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Visible over 1,000 ft</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p>48-hour rechargeable battery</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Magnetic mount system</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Weatherproof & impact-resistant</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Two modes: solid & flashing</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p>DOT-compliant design</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold mb-4">What's Included</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-sm">1x TRILIGHT LED Safety Triangle</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-sm">1x USB-C Charging Cable</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-sm">1x Quick Start Guide</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-sm">Lifetime Warranty Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 border-t pt-16">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={review.rating} />
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified Purchase</span>
                  )}
                </div>
                <p className="text-sm text-gray-700 mb-3">"{review.comment}"</p>
                <p className="text-sm font-medium">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg mb-4">SHOP</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Trilight
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">ABOUT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <a href="mailto:willy@trilight.store" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Warranty
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">STAY CONNECTED</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get special offers, free giveaways, and new product announcements.
              </p>
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-900 border border-gray-700 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-white"
                />
                <button className="bg-white text-black px-4 py-2">SIGN UP</button>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153-1.772c-.636.247-1.363.416-2.427.465-1.067.048-1.407.60-4.123.06h-.63c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.504-.207-1.857-.344-.467-.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.023-.058 1.351-.058 4.047v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© 2025 TRITTECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
