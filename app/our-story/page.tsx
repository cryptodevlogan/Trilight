"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronDown } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import MobileMenu from "@/components/mobile-menu"
import Cart from "@/components/cart"
import SupportDialog from "@/components/support-dialog"

export default function OurStoryPage() {
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

      {/* Spacer to account for fixed header */}
      <div className="h-[96px]"></div>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/our-story-hero-background.png"
            alt="TRILIGHT safety demonstration on desert highway"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 inline-block mb-6">
              <span className="text-sm font-medium text-white">FOUNDED BY A TRUCKER</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-8 tracking-tight font-bold leading-tight">OUR STORY</h1>
            <p className="text-xl sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-gray-200">
              Built by truckers, for truckers. This is the story of how one driver's vision became a mission to save
              lives on America's roads.
            </p>
          </div>
        </div>
      </section>

      {/* The American Dream */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              THE AMERICAN DREAM, REALIZED
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p className="text-xl leading-relaxed">
              Twenty-four years ago, Willy took an oath that changed his life forever. Standing in a courthouse in
              Virginia, he raised his right hand and became an American citizen. It was a moment he'd dreamed of since
              arriving in this country with nothing but determination and an unshakeable work ethic.
            </p>
            <p>
              Like so many who come to America seeking opportunity, Willy didn't wait for success to find him. He built
              it with his own hands, starting a stoneworking business in Virginia that became his pride and joy. For
              years, he crafted beautiful stonework that still stands today. It's a testament to his commitment to
              quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* The Call of the Road */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight text-gray-900">THE CALL OF THE ROAD</h2>
              <div className="w-24 h-1 bg-black mb-8"></div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  But Willy had always been drawn to trucks. There was something about the power, the precision, the
                  responsibility of moving America's goods that called to him. Later in life, when most people are
                  thinking about slowing down, Willy made a bold decision. He became a professional truck driver.
                </p>
                <p>
                  The road became his office, his classroom, and his inspiration. Mile after mile, Willy discovered what
                  every trucker knows. Life on the road gives you time to think, to observe, and to see problems that
                  others miss. And Willy had always had a business mind, an eye for solutions.
                </p>
              </div>
            </div>
            <div className="relative h-[450px] lg:h-[550px]">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
                <Image
                  src="/willy-founder-walmart-truck.png"
                  alt="Willy, TRITTECH Founder and Professional Truck Driver"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black text-white p-6 rounded-xl shadow-xl max-w-[200px]">
                <p className="text-sm font-medium">Willy, TRITTECH Founder</p>
                <p className="text-xs text-gray-300">Professional Driver</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              THE PROBLEM THAT CHANGED EVERYTHING
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-gray-700 mb-16">
            <p className="text-xl leading-relaxed">
              Every year, hundreds of truck drivers lose their lives in roadside accidents. These deaths aren't from
              mechanical failures or driver error, but from being struck by passing vehicles while pulled over on the
              shoulder. Willy saw it happen. He lived the fear every time he had to step out of his cab on a dark
              highway.
            </p>
            <p>
              The traditional reflective triangles that truckers are required to use? They're practically invisible in
              today's world of distracted driving, bad weather, and high-speed traffic. Willy knew there had to be a
              better way. He knew there had to be a way to make sure drivers could see a stopped truck from far enough
              away to react safely.
            </p>
          </div>
          <div className="bg-gradient-to-r from-gray-900 to-black text-white p-12 rounded-2xl text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">THE MISSION WAS CLEAR</h3>
            <p className="text-xl font-light">
              Save lives. Make the roads safer. Protect the drivers who keep America moving.
            </p>
          </div>
        </div>
      </section>

      {/* The Innovation */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">INNOVATION BORN FROM NECESSITY</h2>
          <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p>
              That's when TRILIGHT was born. Not in a corporate boardroom or a Silicon Valley garage, but in the mind of
              a working trucker who refused to accept that roadside deaths were just "part of the job."
            </p>
            <p>
              Willy envisioned something revolutionary: an LED-powered safety triangle that could be seen from over a
              mile away, bright enough to cut through fog and rain, reliable enough to work when lives depended on it.
              Something that could be deployed in seconds, not minutes, because every second counts when you're
              vulnerable on the shoulder.
            </p>
            <p>
              TRILIGHT isn't just a product. It's a promise. A promise that no driver should have to choose between
              doing their job and staying safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TRILIGHT FEATURES</h3>
              <ul className="space-y-3">
                <li>Visible over 1 mile away</li>
                <li>48-hour battery life</li>
                <li>Magnetic mounting system</li>
                <li>Weatherproof & impact-resistant</li>
                <li>DOT-compliant design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">THE DIFFERENCE</h3>
              <p className="text-lg leading-relaxed">
                Traditional triangles rely on reflected light. TRILIGHT creates its own light. It's powerful,
                unmistakable, and impossible to ignore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Business Values */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">A FAMILY BUSINESS WITH A PURPOSE</h2>
          <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p>
              TRITTECH is a family business built on the values of hard work, integrity, and genuine care for the
              trucking community. Every product we create is designed by people who understand the road because we live
              it every day. Our mission is simple: create products that make life on the road safer, easier, and more
              efficient for professional drivers.
            </p>
            <p>
              TRITTECH represents everything great about American entrepreneurship: seeing a problem, refusing to accept
              the status quo, and working tirelessly to create solutions that make a real difference. We've worked hard
              to bring something truly innovative and transformative to the market. It's a solution that can change how
              dangerous our roads are for the people who keep our economy moving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">FAMILY OWNED</h3>
              <p>Built on values of hard work, integrity, and genuine care for the trucking community.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">BY TRUCKERS</h3>
              <p>Designed by people who understand the road because we live it every day.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">FOR TRUCKERS</h3>
              <p>Creating products that make life on the road safer, easier, and more efficient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">THIS IS JUST THE BEGINNING</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              TRILIGHT is our first product, but it won't be our last. We're excited about a whole lineup of innovative
              products on the way. These are solutions that truckers need and will love, designed by people who
              understand the challenges because we face them ourselves.
            </p>
            <p>
              Every product we develop will carry the same DNA as TRILIGHT: practical innovation born from real-world
              experience, built to the highest standards, and designed to make life better for professional drivers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">SUPPORT A BUSINESS THAT GETS IT</h2>
          <p className="text-xl leading-relaxed mb-12">
            When you shop with TRITTECH, you're not just buying a product. You're supporting a family business that's
            made by truckers, for truckers. You're investing in innovation that comes from the road, not the boardroom.
            You're helping us continue our mission to make America's highways safer for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product/trilight"
              className="bg-white text-black py-4 px-8 text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              SHOP TRILIGHT TODAY
            </Link>
            <Link
              href="/enterprise"
              className="border-2 border-white text-white py-4 px-8 text-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              FLEET SOLUTIONS
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
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 011.853-.748 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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
