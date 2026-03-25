"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronDown } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import MobileMenu from "@/components/mobile-menu"
import Cart from "@/components/cart"

export default function ShopAllPage() {
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

      {/* Page Header */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              SHOP ALL PRODUCTS
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Professional-grade LED safety equipment designed for truckers, fleets, and everyday drivers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* TRILIGHT */}
            <Link
              href="/product/trilight"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="/trilight-product-main.png"
                  alt="TRILIGHT LED Safety Triangle"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 tracking-tight leading-tight">
                    TRILIGHT
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-tight">LED Safety Triangle</p>
                </div>
              </div>
            </Link>

            {/* ACCESSORIES */}
            <Link
              href="#accessories"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="/safety-equipment-case.png"
                  alt="TRILIGHT Accessories"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 tracking-tight leading-tight">
                    ACCESSORIES
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-tight">Cases, Mounts & More</p>
                </div>
              </div>
            </Link>

            {/* COMING SOON */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/5] relative bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 tracking-tight leading-tight">
                      COMING SOON
                    </h2>
                    <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-tight">
                      New Products in Development
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Be the first to know about new products, special offers, and safety innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                SUBSCRIBE
              </button>
            </div>
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
                <li>
                  <Link href="/shop-all" className="text-gray-400 hover:text-white transition-colors">
                    Shop All
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4 font-bold">ABOUT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/our-story" className="text-gray-400 hover:text-white transition-colors">
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
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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
