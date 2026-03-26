"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/contexts/language-context"

export default function ShopAllPage() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      const data = new FormData()
      data.append("email", email)
      data.append("_subject", "Waitlist Signup - TRILIGHT Shop Page")
      data.append("_template", "table")
      const res = await fetch("https://formsubmit.co/ajax/Sales@trilightfleet.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        setSubmitted(true)
        toast.success("You're on the list!")
      }
    } catch {
      toast.error("Something went wrong. Try again.")
    }
  }

  return (
    <div>
      <div className="h-[96px]"></div>

      {/* Header */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto hero-animate">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              {t("shop.title")}
            </h1>
            <div className="w-24 h-1 bg-[#E67E22] mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {t("shop.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* TRILIGHT - Main Product */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-reveal">
              <Link href="/product/trilight" className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/product image 1.png"
                    alt="TRILIGHT LED Safety Triangle Kit"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#E67E22] text-white text-xs font-bold tracking-widest px-3 py-1.5 rounded-full">
                      {t("shop.badge")}
                    </span>
                  </div>
                </div>
              </Link>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-gray-900">
                  {t("shop.productTitle")}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t("shop.productDesc")}
                </p>
                <div className="space-y-2 mb-8">
                  {["shop.spec.1", "shop.spec.2", "shop.spec.3", "shop.spec.4", "shop.spec.5"].map((key) => (
                    <div key={key} className="flex items-start text-sm">
                      <Check className="h-4 w-4 mr-2 text-[#E67E22] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{t(key)}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/product/trilight"
                  className="cta-glow inline-flex items-center gap-2 bg-[#E67E22] text-white py-3 px-8 rounded-md font-medium hover:bg-[#D35400] transition-colors"
                >
                  {t("shop.viewProduct")} <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Preview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto scroll-reveal">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 tracking-tight text-gray-900 text-center">
              {t("shop.accessoriesTitle")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { name: t("shop.harness.name"), desc: t("shop.harness.desc"), image: "/trilight-worker-industrial.png" },
                { name: t("shop.case.name"), desc: t("shop.case.desc"), image: "/safety-equipment-case.png" },
                { name: t("shop.pole.name"), desc: t("shop.pole.desc"), image: "/trilight-elevation-pole.png" },
              ].map((item) => (
                <div key={item.image} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                        {t("shop.badge")}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              {t("shop.addonsNote")}
            </p>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-gray-50 py-14 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t("shop.fleetTitle")}</h2>
            <p className="text-gray-600 mb-6">{t("shop.fleetDesc")}</p>
            <Link
              href="/enterprise#talk-to-us"
              className="inline-flex items-center gap-2 bg-black text-white py-3 px-8 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              {t("shop.fleetCta")} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="bg-black py-16 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t("shop.waitlist.title")}</h2>
            <p className="text-gray-400 mb-8">{t("shop.waitlist.subtitle")}</p>
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-5 inline-block">
                <p className="text-white font-medium">{t("shop.waitlist.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("shop.waitlist.placeholder")}
                  required
                  className="flex-1 px-4 py-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                />
                <button
                  type="submit"
                  className="cta-glow bg-[#E67E22] text-white py-4 px-8 rounded-md font-medium hover:bg-[#D35400] transition-colors whitespace-nowrap"
                >
                  {t("shop.waitlist.cta")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
