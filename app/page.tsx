"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronDown } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import MobileMenu from "@/components/mobile-menu"
import Cart from "@/components/cart"
import SupportDialog from "@/components/support-dialog"

export default function Home() {
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
            <SupportDialog>
              <button className="hidden sm:block nav-link text-sm">SUPPORT</button>
            </SupportDialog>
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

      {/* Spacer to account for fixed header - with black background */}
      <div className="h-[96px] bg-black"></div>

      {/* Hero Section with Video */}
      <section className="relative bg-black text-white h-[calc(100vh-112px)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trilight_ThirdDraft-hGK1WK1Q47zhqL9VQvkziLEHL6KBPJ.mov" type="video/mp4" />
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trilight_ThirdDraft-hGK1WK1Q47zhqL9VQvkziLEHL6KBPJ.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          {/* Main Heading - now stays visible */}
          <div className="max-w-md ml-0 md:ml-12 lg:ml-24">
            <h1 className="text-5xl sm:text-6xl mb-4 tracking-tight whitespace-nowrap font-bold">
              STAY SAFE. STAY SEEN.
            </h1>
          </div>

          {/* Description - stays in original position */}
          <div className="max-w-md ml-0 md:ml-12 lg:ml-24 mt-0">
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 font-light leading-relaxed">
              Meet TRILIGHT: The cutting-edge LED warning triangle that redefines roadside safety for cars and trucks
              alike.
            </p>
          </div>

          {/* Shop Now Button - stays in original position */}
          <div className="ml-0 md:ml-12 lg:ml-24">
            <Link
              href="/product/trilight"
              className="button inline-block bg-white text-black py-4 px-10 sm:px-12 text-center text-sm hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Features - Removed top padding */}
      <section className="bg-black text-white pt-0 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center py-4">
              <div className="mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7L12 3L4 7L12 11L20 7Z" fill="white" />
                  <path
                    d="M20 7V17L12 21L4 17V7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-sm tracking-wide">HIGH-GRADE MATERIALS</h3>
            </div>
            <div className="flex flex-col items-center py-4">
              <div className="mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6L11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12L13 6Z"
                    fill="white"
                  />
                  <path
                    d="M13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16L11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18L13 16Z"
                    fill="white"
                  />
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 12 5.37258 12 24Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 12 6.47715 12 22Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="text-sm tracking-wide">LIFETIME WARRANTY</h3>
            </div>
            <div className="flex flex-col items-center py-4">
              <div className="mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 3H1V16H16V3Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 8H20L23 11V16H16V8Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="5.5" cy="18.5" r="2.5" stroke="white" strokeWidth="1.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-sm tracking-wide">FREE SHIPPING</h3>
            </div>
          </div>
        </div>
      </section>

      {/* TRILIGHT Product Explanation Section - Redesigned */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">REVOLUTIONIZING ROADSIDE SAFETY</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              TRILIGHT replaces outdated reflective triangles with cutting-edge LED technology, providing 360°
              visibility that can be seen from over a mile away.
            </p>
          </div>

          {/* Use Case 1: Truck Mounting for Roadside Safety */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Turn Traditional Triangles Into Unmissable Beacons
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mount TRILIGHT directly to your truck's trailer or bumper for instant roadside visibility. The
                  powerful LED array creates a bright, flashing warning that's impossible to miss - even in heavy rain,
                  fog, or snow conditions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Magnetic mount attaches instantly</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Visible from over 1 mile away</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Weatherproof construction</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">48-hour battery life</span>
                  </div>
                </div>
              </div>

              {/* Right: Video */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">Roadside Emergency Deployment</p>
              </div>
            </div>
          </div>

          {/* Use Case 2: Wearable Harness for Walking Safety */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Video */}
              <div className="relative lg:order-1 order-2">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">Wearable Safety System</p>
              </div>

              {/* Right: Text Content */}
              <div className="lg:order-2 order-1 space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">Stay Visible While You Work</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  TRILIGHT comes with a comfortable harness system that lets you wear the LED triangle while walking
                  around your truck at night. Perfect for pre-trip inspections, loading, or any time you need to be seen
                  in low-light conditions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Lightweight, adjustable harness</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">360° visibility while working</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Hands-free operation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Quick-release mechanism</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case 3: Hook/Magnet Placement for Loading Dock Navigation */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Perfect for Tight Spaces & Loading Docks
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Use TRILIGHT's magnetic base or hook attachment to guide your backing maneuvers. Place it
                  strategically around loading docks, tight parking spaces, or anywhere you need a bright reference
                  point for precise positioning.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Multiple mounting options</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Reduces accidents & damage</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Precision positioning aid</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Industrial-strength magnets</span>
                  </div>
                </div>
              </div>

              {/* Right: Video */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">Loading Dock Positioning</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="/product/trilight"
              className="inline-block bg-black text-white py-4 px-8 text-base font-medium hover:bg-gray-800 transition-colors tracking-wide"
            >
              LEARN MORE ABOUT TRILIGHT
            </Link>
          </div>
        </div>
      </section>

      {/* Safety at Scale Section */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fleet-partnership-sunset.png"
            alt="Fleet managers discussing safety solutions with trucks at sunset"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight text-white font-bold">SAFETY AT SCALE</h2>
            <p className="text-lg sm:text-xl mb-6 text-white leading-relaxed">
              Give your entire fleet the protection it deserves.
            </p>
            <p className="text-base sm:text-lg mb-8 text-white/90 leading-relaxed">
              Bulk purchasing, custom branding, and driver-first solutions. Partner with us to protect what drives your
              business.
            </p>
            <a
              href="mailto:willy@trilight.store?subject=Enterprise Sales Inquiry"
              className="button inline-block bg-blue-600 text-white py-4 px-10 sm:px-12 text-center text-sm hover:bg-blue-700 transition-colors"
            >
              CONTACT ENTERPRISE SALES
            </a>
          </div>
        </div>
      </section>

      {/* Road Safety Promo */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/truck-driver-promo.png"
            alt="Truck Driver with Green Truck"
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

      {/* Values Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl mb-6 tracking-tight font-bold">MADE TO PROTECT. BUILT TO LAST.</h2>
              <p className="text-lg leading-relaxed">
                TRILIGHT isn't just gear — it's your guardrail in the dark. Engineered for the moments that matter, it
                replaces outdated triangles with high-visibility, high-trust performance. This is safety you can deploy
                in seconds, designed for the people who put their lives on the line every mile.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <p className="text-xl mb-4">Built to endure. For life.</p>
                <div className="h-px bg-white/30 w-full"></div>
              </div>
              <div className="mb-8">
                <p className="text-xl mb-4">Lifetime Warranty.</p>
                <div className="h-px bg-white/30 w-full"></div>
              </div>
              <div className="mb-8">
                <p className="text-xl mb-4">Fast & Free Shipping</p>
                <div className="h-px bg-white/30 w-full"></div>
              </div>
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
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427a4.902 4.902 0 01-1.772 1.153A4.902 4.902 0 715.45 2.525c.636-.247 1.363-.416 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023-.058-1.351-.058-4.041v-.468c0-2.456.011-2.784.058-3.807.045-.975.207-1.504-.344-1.858a3.097 3.097 0 00-.748-.748"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
