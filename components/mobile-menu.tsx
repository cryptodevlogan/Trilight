"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, X, Menu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, lang, setLang } = useLanguage()

  const menuItems = [
    { title: t("menu.ourStory"), url: "/our-story" },
    { title: t("menu.trilight"), url: "/product/trilight", hasSubmenu: true },
    { title: t("menu.enterprise"), url: "/enterprise", hasSubmenu: true },
    { title: t("menu.shopAll"), url: "/shop-all", hasSubmenu: true },
  ]

  return (
    <>
      <button onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)} />}

      <div
        className={`fixed top-0 left-0 h-full w-[90%] max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Image src="/tritech-logo.png" alt="TriTech" width={120} height={30} className="h-8 w-auto" />
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="flex items-center justify-between py-4 px-6 border-b border-gray-100 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-medium">{item.title}</span>
              {item.hasSubmenu && <ChevronRight className="h-5 w-5 text-gray-400" />}
            </Link>
          ))}
        </div>

        {/* Language switcher in mobile menu */}
        <div className="px-6 py-4 border-b border-gray-100">
          <p className="text-xs text-gray-500 mb-2 font-medium tracking-wide">LANGUAGE</p>
          <div className="flex gap-2">
            <button
              onClick={() => setLang("en")}
              className={`flex-1 py-2 px-3 text-sm rounded-md transition-colors ${lang === "en" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              English
            </button>
            <button
              onClick={() => setLang("es")}
              className={`flex-1 py-2 px-3 text-sm rounded-md transition-colors ${lang === "es" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Español
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-xs text-gray-500 border-t">
          © TRITECH 2026 US PATENTS ISSUED. NO. 10,791,808
        </div>
      </div>
    </>
  )
}
