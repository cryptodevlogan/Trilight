"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, X, Menu } from "lucide-react"

interface MenuItem {
  title: string
  url: string
  tag?: string
  hasSubmenu?: boolean
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems: MenuItem[] = [
    { title: "OUR STORY", url: "/our-story" },
    { title: "TRILIGHT", url: "/product/trilight", hasSubmenu: true },
    { title: "ENTERPRISE", url: "/enterprise", hasSubmenu: true },
    { title: "SHOP ALL", url: "/shop-all", hasSubmenu: true },
  ]

  return (
    <>
      {/* Menu Button */}
      <button onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)} />}

      {/* Side Menu */}
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

        {/* Menu Items */}
        <div className="mt-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="flex items-center justify-between py-4 px-6 border-b border-gray-100 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="font-medium">{item.title}</span>
                {item.tag && (
                  <span className="ml-2 text-xs bg-orange-400 text-white px-2 py-0.5 rounded">{item.tag}</span>
                )}
              </div>
              {item.hasSubmenu && <ChevronRight className="h-5 w-5 text-gray-400" />}
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-xs text-gray-500 border-t">
          © TRITECH 2025 US PATENTS ISSUED. NO. 10,791,808
        </div>
      </div>
    </>
  )
}
