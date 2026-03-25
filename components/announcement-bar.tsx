"use client"

import { useState, useEffect } from "react"

const announcements = ["LIFETIME WARRANTY", "FAST & FREE SHIPPING"]

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 3000) // Changed from 5000ms to 3000ms (3 seconds) for faster rotation

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-black text-white text-center py-1.5 text-xs font-medium">
      {announcements[currentIndex]}
    </div>
  )
}
