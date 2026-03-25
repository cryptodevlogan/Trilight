"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronDown, Shield, TrendingUp, CheckCircle, Phone, Mail } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import MobileMenu from "@/components/mobile-menu"
import Cart from "@/components/cart"
import SupportDialog from "@/components/support-dialog"

export default function EnterprisePage() {
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
            {/* SupportDialog wrapper for SUPPORT button */}
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
      <section className="relative bg-gray-900 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fleet-manager-trilight-handoff.png"
            alt="Fleet manager providing TRILIGHT safety equipment to truck driver"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              ENTERPRISE SOLUTION
            </div>
            <h1 className="text-4xl sm:text-5xl mb-6 tracking-tight font-bold leading-tight">
              Reduce Fleet Risk with Advanced LED Safety Technology
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-200">
              TRILIGHT delivers measurable safety improvements and cost savings for transportation fleets.
              DOT-compliant, driver-approved, and backed by comprehensive enterprise support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#contact"
                className="bg-black text-white py-3 px-8 text-center font-medium hover:bg-gray-800 transition-colors"
              >
                REQUEST ENTERPRISE QUOTE
              </Link>
              <Link
                href="#roi-calculator"
                className="border-2 border-white text-white py-3 px-8 text-center font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                CALCULATE ROI
              </Link>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Volume discounts available • Custom implementation support • 30-day pilot program</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Fleets Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">40%</div>
              <div className="text-sm text-gray-600">Accident Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$50K</div>
              <div className="text-sm text-gray-600">Avg. Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">99.8%</div>
              <div className="text-sm text-gray-600">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fleet Managers Choose TRILIGHT */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">WHY FLEET MANAGERS CHOOSE TRILIGHT</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results across transportation, logistics, and construction fleets nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">REDUCE LIABILITY EXPOSURE</h3>
              <p className="text-gray-600 leading-relaxed">
                360° LED visibility exceeds DOT requirements by 500%, significantly reducing the risk of secondary
                accidents and insurance claims.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">FASTER DEPLOYMENT</h3>
              <p className="text-gray-600 leading-relaxed">
                Magnetic mounting system deploys 80% faster than traditional triangles, reducing driver exposure time on
                dangerous roadways.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">PROVEN DURABILITY</h3>
              <p className="text-gray-600 leading-relaxed">
                Weatherproof construction and 48-hour battery life ensure reliable performance in the harshest
                conditions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">DRIVER CONFIDENCE</h3>
              <p className="text-gray-600 leading-relaxed">
                95% driver approval rating with improved confidence in roadside safety operations and reduced stress
                during breakdowns.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">REGULATORY COMPLIANCE</h3>
              <p className="text-gray-600 leading-relaxed">
                DOT-compliant design with comprehensive documentation makes regulatory compliance straightforward and
                audit-ready.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">COMPREHENSIVE SUPPORT</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated enterprise support team with lifetime warranty and priority replacement program ensures
                maximum uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi-calculator" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Calculate Your ROI</h2>
              <p className="text-lg text-gray-600">
                See how TRILIGHT can impact your fleet's safety costs and operational efficiency.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Fleet Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Vehicles</label>
                      <input
                        type="number"
                        placeholder="50"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Annual Safety Incidents</label>
                      <input
                        type="number"
                        placeholder="12"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Average Incident Cost</label>
                      <input
                        type="number"
                        placeholder="25000"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Projected Savings</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Incident Reduction (40%)</span>
                        <span className="font-semibold text-green-600">$120,000</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Insurance Premium Savings</span>
                        <span className="font-semibold text-green-600">$18,000</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Operational Efficiency</span>
                        <span className="font-semibold text-green-600">$12,000</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">Total Annual Savings</span>
                        <span className="font-bold text-blue-600 text-xl">$150,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-black text-white py-3 px-8 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  Get Detailed ROI Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Enterprise Pricing</h2>
            <p className="text-lg text-gray-600">
              Transparent volume pricing with flexible payment terms and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Fleet */}
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">STARTER FLEET</h3>
                <p className="text-gray-600 mb-4">10-49 Units</p>
                <div className="text-3xl font-bold mb-2 text-gray-900">
                  $18<span className="text-lg text-gray-600">/unit</span>
                </div>
                <p className="text-sm text-gray-500">10% volume discount</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Standard 2-year warranty
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Email support & training materials
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  DOT compliance documentation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  30-day pilot program
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium">
                Request Quote
              </button>
            </div>

            {/* Growth Fleet */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-black relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">RECOMMENDED</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">GROWTH FLEET</h3>
                <p className="text-gray-600 mb-4">50-199 Units</p>
                <div className="text-3xl font-bold mb-2 text-gray-900">
                  $16<span className="text-lg text-gray-600">/unit</span>
                </div>
                <p className="text-sm text-gray-500">20% volume discount</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Extended 3-year warranty
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Priority phone & email support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  On-site training & implementation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Quarterly business reviews
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom reporting dashboard
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium">
                Request Quote
              </button>
            </div>

            {/* Enterprise Fleet */}
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">ENTERPRISE FLEET</h3>
                <p className="text-gray-600 mb-4">200+ Units</p>
                <div className="text-3xl font-bold mb-2 text-gray-900">
                  $14<span className="text-lg text-gray-600">/unit</span>
                </div>
                <p className="text-sm text-gray-500">30% volume discount</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Lifetime warranty coverage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom training programs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Priority replacement program
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom branding options
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              All plans include free shipping, DOT compliance documentation, and 24/7 technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Proven Results</h2>
            <p className="text-lg text-gray-600">
              Real outcomes from fleet managers who have implemented TRILIGHT safety solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Midwest Logistics Corp</h3>
                  <p className="text-gray-600">500+ Vehicle Fleet</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "TRILIGHT reduced our roadside incident response time by 60% and eliminated equipment-related delays.
                The ROI was clear within the first quarter of implementation."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-black">60%</div>
                  <div className="text-xs text-gray-600">Faster Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">$50K</div>
                  <div className="text-xs text-gray-600">Annual Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-xs text-gray-600">Driver Approval</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">National Freight Solutions</h3>
                  <p className="text-gray-600">1,200+ Vehicle Fleet</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "The visibility improvement is remarkable. We've seen a 40% reduction in secondary accidents and our
                insurance premiums dropped by 15% after implementing TRILIGHT fleet-wide."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">40%</div>
                  <div className="text-xs text-gray-600">Fewer Accidents</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">15%</div>
                  <div className="text-xs text-gray-600">Insurance Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">99.8%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-300">
                Speak with our enterprise team to discuss your fleet's specific safety requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Enterprise Sales Team</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">1-800-TRILIGHT</p>
                      <p className="text-sm text-gray-400">Mon-Fri 8AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <a href="mailto:willy@trilight.store" className="font-medium hover:text-blue-400">
                        willy@trilight.store
                      </a>
                      <p className="text-sm text-gray-400">Response within 2 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">What to Expect:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Fleet assessment and custom pricing</li>
                    <li>• ROI analysis and implementation timeline</li>
                    <li>• 30-day pilot program options</li>
                    <li>• Training and support planning</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Request Enterprise Quote</h3>
                <form
                  action="mailto:willy@trilight.store?subject=Enterprise Quote Request"
                  method="get"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name*"
                      className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black text-white placeholder-gray-400"
                      required
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name*"
                      className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email*"
                    className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name*"
                    className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black text-white placeholder-gray-400"
                    required
                  />
                  <select
                    name="fleet_size"
                    className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black text-white"
                    required
                  >
                    <option value="">Fleet Size*</option>
                    <option value="10-49">10-49 vehicles</option>
                    <option value="50-199">50-199 vehicles</option>
                    <option value="200+">200+ vehicles</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Tell us about your fleet's safety requirements..."
                    rows={4}
                    className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black text-white placeholder-gray-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors font-medium rounded-md"
                  >
                    REQUEST ENTERPRISE QUOTE
                  </button>
                </form>
                <p className="text-xs text-gray-400 mt-4">
                  By submitting this form, you agree to receive communications from TRITTECH regarding your enterprise
                  inquiry.
                </p>
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
