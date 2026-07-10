"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ShopAllPage() {
  const { t } = useLanguage()

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

      {/* Next Product Teaser */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 px-8 py-14 sm:py-16 text-center">
              {/* subtle accent glow */}
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-[#E67E22]/10 blur-3xl"></div>
              <span className="relative inline-block bg-[#E67E22]/10 text-[#E67E22] text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
                {t("shop.badge")}
              </span>
              <h2 className="relative text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-gray-900">
                {t("shop.next.title")}
              </h2>
              <p className="relative text-gray-600 leading-relaxed max-w-xl mx-auto">
                {t("shop.next.desc")}
              </p>
            </div>
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

      {/* Shop CTA */}
      <section className="bg-black py-16 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t("shop.waitlist.title")}</h2>
            <p className="text-gray-400 mb-8">{t("shop.waitlist.subtitle")}</p>
            <Link
              href="/product/trilight"
              className="cta-glow inline-block bg-[#E67E22] text-white py-4 px-10 rounded-md font-medium hover:bg-[#D35400] transition-colors"
            >
              {t("shop.waitlist.cta")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
