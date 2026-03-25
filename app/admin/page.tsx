"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronDown } from "lucide-react"
import ProductCarousel from "@/components/product-carousel"
import AnnouncementBar from "@/components/announcement-bar"
import MobileMenu from "@/components/mobile-menu"
import Cart from "@/components/cart"

export default function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Navigation */}
        <nav className="bg-white flex items-center justify-between border-b relative h-[64px] px-4 sm:px-10">
          <div className="w-1/3 flex items-center justify-start">
            <MobileMenu />
            <div className="hidden lg:flex items-center space-x-8 ml-4">
              <Link href="/product/trilight" className="nav-link text-sm">
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
              <Image
                src="/tritech-logo.png"
                alt="TriTech"
                width={200}
                height={50}
                className="h-[35px] sm:h-[45px] w-auto"
              />
            </Link>
          </div>

          <div className="w-1/3 flex items-center justify-end space-x-3 sm:space-x-6">
            <button className="hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            <Link href="#" className="hidden sm:block nav-link text-sm">
              SUPPORT
            </Link>
            <button className="hidden sm:flex items-center">
              <Image src="/us-flag.png" alt="US" width={24} height={16} className="h-4 w-auto" />
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <button>
              <User className="h-5 w-5" />
            </button>
            <Cart />
          </div>
        </nav>
      </div>

      {/* Spacer to account for fixed header */}
      <div className="h-[96px]"></div>

      {/* Admin Page Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">ADMIN DASHBOARD</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Manage products, collections, and accessories from this central admin panel.
            </p>
          </div>
        </div>
      </section>

      {/* Shop By Product Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 tracking-wide">SHOP BY PRODUCT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative" style={{ aspectRatio: "1/1.25" }}>
              <Image
                src="/trucking-trilight.png"
                alt="Trucking Trilight - LED warning triangle mounted on truck trailer"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="product-category-title text-white text-2xl">
                  <Link href="/product/trilight" className="text-white hover:underline">
                    TRUCKING TRILIGHT
                  </Link>
                </h3>
              </div>
            </div>
            <div className="relative" style={{ aspectRatio: "1/1.25" }}>
              <Image
                src="/everyday-trilight.png"
                alt="Everyday Trilight - LED warning triangle for passenger vehicles"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="product-category-title text-white text-2xl">
                  <Link href="/product/trilight" className="text-white hover:underline">
                    EVERYDAY TRILIGHT
                  </Link>
                </h3>
              </div>
            </div>
            <div className="relative" style={{ aspectRatio: "1/1.25" }}>
              <Image
                src="/extended-trilight.png"
                alt="Extended Trilight - Elevated LED warning triangle with tripod stand"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="product-category-title text-white text-2xl">
                  <Link href="/product/trilight" className="text-white hover:underline">
                    EXTENDED TRILIGHT
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Life on the Road Section */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/built-for-life-on-road-promo.png"
            alt="Truck Driver with Green Truck - Built for Life on the Road"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-md">
            <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight text-white font-bold">
              BUILT FOR LIFE ON THE ROAD
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white">
              Be seen when it matters most. Lightweight. Magnetic. Rechargeable.
            </p>
            <Link
              href="/product/trilight"
              className="button inline-block bg-white text-black py-4 px-10 sm:px-12 text-center text-sm hover:bg-gray-100 transition-colors"
            >
              STAY SEEN – SAVE 20% NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Grade Safety Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/trucker-promo.png"
            alt="Professional Truck Driver with Trilight Warning Triangle"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-md">
            <p className="text-sm font-bold tracking-wider mb-2 text-white">BUILT BY TRUCKERS FOR TRUCKERS</p>
            <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight text-white font-bold">PROFESSIONAL GRADE SAFETY</h2>
            <p className="text-lg sm:text-xl mb-8 text-white">Safety equipment that works as hard as you do.</p>
            <Link
              href="/product/trilight"
              className="button inline-block bg-white text-black py-4 px-10 sm:px-12 text-center text-sm hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel (Accessories) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <ProductCarousel />
        </div>
      </section>

      {/* Shop By Collection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl mb-8 tracking-wide font-bold">SHOP BY COLLECTION</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link href="#" className="group relative overflow-hidden block aspect-[3/4]">
              <Image
                src="/placeholder.svg?key=q8d1d"
                alt="Fleets Collection"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-2xl sm:text-3xl font-bold">FLEETS</h3>
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden block aspect-[3/4]">
              <Image
                src="/placeholder.svg?key=b6tey"
                alt="Truckers Collection"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-2xl sm:text-3xl font-bold">TRUCKERS</h3>
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden block aspect-[3/4]">
              <Image
                src="/car-driver-safety.png"
                alt="Drivers Collection"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-2xl sm:text-3xl font-bold">DRIVERS</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg mb-4 font-bold">SHOP</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/product/trilight" className="text-gray-400 hover:text-white transition-colors">
                    Trilight
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4 font-bold">ABOUT</h3>
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
              <h3 className="text-lg mb-4 font-bold">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
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
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg mb-4 font-bold">STAY CONNECTED</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get special offers, free giveaways, and new product announcements.
              </p>
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-900 border border-gray-700 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-white"
                />
                <button className="bg-white text-black px-4 py-2 whitespace-nowrap">SIGN UP</button>
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
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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
