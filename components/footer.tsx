"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg mb-4 font-bold">{t("footer.shop")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product/trilight" className="text-gray-400 hover:text-white transition-colors">
                  Trilight
                </Link>
              </li>
              <li>
                <Link href="/shop-all" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.shopAll")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-4 font-bold">{t("footer.about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-story" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.ourStory")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-4 font-bold">{t("footer.support")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:willy@trilight.store" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.contactUs")}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg mb-4 font-bold">{t("footer.stayConnected")}</h3>
            <p className="text-gray-400 mb-4">{t("footer.subscribe")}</p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="bg-gray-900 border border-gray-700 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-white text-white"
              />
              <button className="bg-white text-black px-4 py-2 whitespace-nowrap hover:bg-gray-200 transition-colors">
                {t("footer.signUp")}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
