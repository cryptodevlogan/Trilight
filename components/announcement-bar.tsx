"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function AnnouncementBar() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const keys = ["announce.1", "announce.2"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % keys.length)
        setIsVisible(true)
      }, 300)
    }, 3500)

    return () => clearInterval(interval)
  }, [keys.length])

  return (
    <div className="w-full bg-black text-white text-center py-1.5 text-xs font-medium tracking-widest overflow-hidden">
      <span
        className={`inline-block transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {t(keys[currentIndex])}
      </span>
    </div>
  )
}
