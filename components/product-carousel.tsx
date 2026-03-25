"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  id: string
  name: string
  price: string
  image: string
  category: string
}

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const products: Product[] = [
    {
      id: "1",
      name: "Extension Pole",
      price: "$45",
      image: "/placeholder.svg?key=40b6i",
      category: "ACCESSORIES",
    },
    {
      id: "2",
      name: "Protective Carrying Case",
      price: "$35",
      image: "/safety-equipment-case.png",
      category: "ACCESSORIES",
    },
    {
      id: "3",
      name: "Multi-Unit Charging Dock",
      price: "$75",
      image: "/led-charging-dock.png",
      category: "ACCESSORIES",
    },
    {
      id: "4",
      name: "Heavy-Duty Magnetic Base Adapter",
      price: "$25",
      image: "/placeholder.svg?key=v7z3o",
      category: "ACCESSORIES",
    },
    {
      id: "5",
      name: "Replacement LED Module",
      price: "$55",
      image: "/led-warning-triangle-module.png",
      category: "ACCESSORIES",
    },
  ]

  const nextSlide = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(products.length - 1)
    }
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentIndex * (carouselRef.current.scrollWidth / products.length)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex, products.length])

  return (
    <div className="relative">
      <h2 className="text-3xl font-bold mb-8 text-center tracking-wide">ACCESSORIES</h2>

      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-full sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] px-4">
              <div className="group relative">
                <div className="aspect-square overflow-hidden bg-gray-100 rounded-md shadow-sm">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-500 font-medium">{product.category}</p>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="font-medium">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
        aria-label="Previous product"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
        aria-label="Next product"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Mobile indicator dots */}
      <div className="flex justify-center mt-6 sm:hidden">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 mx-1.5 rounded-full transition-colors ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
