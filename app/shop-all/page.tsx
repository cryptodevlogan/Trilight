"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function ShopAllPage() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Spacer for fixed header */}
      <div className="h-[96px]"></div>

      {/* Page Header */}
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

      {/* Product Grid */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* TRILIGHT */}
            <Link
              href="/product/trilight"
              className="scroll-reveal group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
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
                    {t("shop.trilight")}
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-tight">{t("shop.trilightSub")}</p>
                </div>
              </div>
            </Link>

            {/* ACCESSORIES */}
            <Link
              href="#accessories"
              className="scroll-reveal group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
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
                    {t("shop.accessories")}
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-tight">{t("shop.accessoriesSub")}</p>
                </div>
              </div>
            </Link>

            {/* COMING SOON */}
            <div className="scroll-reveal group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
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
                      {t("shop.comingSoon")}
                    </h2>
                    <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-tight">
                      {t("shop.comingSoonSub")}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t("shop.newsletter.title")}</h2>
            <p className="text-gray-600 mb-8">
              {t("shop.newsletter.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("shop.newsletter.placeholder")}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
              <button className="cta-glow bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                {t("shop.newsletter.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
