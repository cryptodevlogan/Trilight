"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronDown } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import MobileMenu from "@/components/mobile-menu"
import Cart from "@/components/cart"
import SupportDialog from "@/components/support-dialog"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const { lang, setLang, t } = useLanguage()
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <AnnouncementBar />
      <nav className="bg-white flex items-center justify-between border-b relative h-[64px] px-4 sm:px-10">
        <div className="w-1/3 flex items-center justify-start">
          <MobileMenu />
          <div className="hidden lg:flex items-center space-x-8 ml-4">
            <Link href="/product/trilight" className="nav-link text-sm">
              {t("nav.trilight")}
            </Link>
            <Link href="/enterprise" className="nav-link text-sm">
              {t("nav.enterprise")}
            </Link>
            <Link href="#" className="nav-link text-sm text-red-600">
              {t("nav.sale")}
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
            <button className="hidden sm:block nav-link text-sm">{t("nav.support")}</button>
          </SupportDialog>

          {/* Language Selector */}
          <div ref={langRef} className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 nav-link text-sm"
            >
              <Image
                src="/us-flag.png"
                alt=""
                width={24}
                height={16}
                className="h-4 w-auto"
              />
              <span className="text-xs font-medium">{lang.toUpperCase()}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border shadow-lg rounded-md overflow-hidden min-w-[140px] z-50">
                <button
                  onClick={() => { setLang("en"); setLangOpen(false) }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${lang === "en" ? "bg-gray-50 font-medium" : ""}`}
                >
                  <Image src="/us-flag.png" alt="" width={20} height={14} className="h-3.5 w-auto" />
                  English
                </button>
                <button
                  onClick={() => { setLang("es"); setLangOpen(false) }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${lang === "es" ? "bg-gray-50 font-medium" : ""}`}
                >
                  <span className="text-base leading-none">🇲🇽</span>
                  Español
                </button>
              </div>
            )}
          </div>

          <button>
            <User className="h-5 w-5" />
          </button>
          <Cart />
        </div>
      </nav>
    </div>
  )
}
