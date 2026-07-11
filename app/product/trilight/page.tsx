"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, X, Check, ArrowRight, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import BuyBox from "@/components/buy-box"
import { PRODUCTS, type Product } from "@/lib/products"

const defaultProduct = PRODUCTS[1] ?? PRODUCTS[0]

export default function TrilightProductPage() {
  // The gallery follows the kit chosen in the buy box.
  const [selectedProductId, setSelectedProductId] = useState(defaultProduct.id)
  const [selectedMedia, setSelectedMedia] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")
  const { t } = useLanguage()

  const product = PRODUCTS.find((p) => p.id === selectedProductId) ?? defaultProduct

  // This kit's gallery: images followed by videos.
  const gallery = product.media
  const activeItem = gallery[selectedMedia] ?? gallery[0]

  const handleVideoPlay = (videoSrc: string) => {
    setCurrentVideo(videoSrc)
    setVideoModalOpen(true)
  }

  const handleMediaClick = (index: number) => {
    const item = gallery[index]
    if (item.type === "video") {
      handleVideoPlay(item.src)
    } else {
      setSelectedMedia(index)
    }
  }

  const handleSelectProduct = (p: Product) => {
    setSelectedProductId(p.id)
    setSelectedMedia(0)
  }

  // Preselect a kit when arriving via a link like /product/trilight?kit=wearable
  useEffect(() => {
    const kit = new URLSearchParams(window.location.search).get("kit")
    if (kit && PRODUCTS.some((p) => p.id === kit)) {
      setSelectedProductId(kit)
      setSelectedMedia(0)
    }
  }, [])

  return (
    <div>
      <div className="h-[96px]"></div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full hero-animate" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <video controls autoPlay className="w-full h-auto" src={currentVideo}>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="text-xs sm:text-sm mb-4 sm:mb-6">
          <Link href="/" className="text-gray-500 hover:text-black transition-colors">{t("product2.breadcrumb.home")}</Link>
          {" / "}
          <Link href="/shop-all" className="text-gray-500 hover:text-black transition-colors">{t("product2.breadcrumb.products")}</Link>
          {" / "}
          <span className="font-medium">{t("product2.breadcrumb.current")}</span>
        </div>

        {/* Product Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 pb-14">
          {/* Media Gallery — per-bundle: images then videos */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative">
              {activeItem.type === "image" ? (
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-cover"
                  style={activeItem.objectPosition ? { objectPosition: activeItem.objectPosition } : undefined}
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image src={activeItem.thumbnail} alt={activeItem.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => handleVideoPlay(activeItem.src)}
                      className="bg-white/90 rounded-full p-4 hover:bg-white transition-all hover:scale-110"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8 text-black ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {gallery.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className={`bg-gray-100 rounded-lg overflow-hidden aspect-square relative cursor-pointer border-2 transition-all ${
                    selectedMedia === index ? "border-[#E67E22]" : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => handleMediaClick(index)}
                >
                  {item.type === "image" && (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                    />
                  )}
                  {item.type === "video" && (
                    <>
                      <Image src={item.thumbnail} alt={item.alt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white" />
                      </div>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="inline-block bg-[#E67E22]/10 text-[#E67E22] text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">
                {t("product2.badge")}
              </div>
              <p className="text-xs font-bold tracking-widest text-gray-400 mb-2">{t("product2.title")}</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed">
                {product.blurb}
              </p>
            </div>

            {/* What's included — the single source; changes per selected kit */}
            <div className="border-t border-b py-6 mb-6">
              <p className="text-xs font-bold tracking-widest text-gray-500 mb-4">WHAT&apos;S INCLUDED</p>
              <div className="space-y-3">
                {product.includes.map((line) => {
                  const i = line.indexOf("×")
                  const qty = i === -1 ? "" : line.slice(0, i).trim()
                  const label = i === -1 ? line : line.slice(i + 1).trim()
                  return (
                    <div key={line} className="flex items-start text-sm">
                      <Check className="h-4 w-4 mr-2 text-[#E67E22] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-gray-700">
                        {qty && <span className="font-semibold text-gray-900">{qty} × </span>}
                        {label}
                      </span>
                    </div>
                  )
                })}
              </div>
              <p className="mt-5 text-sm text-gray-500 leading-relaxed">{product.assurance}</p>
            </div>

            {/* Buy box — pick a kit and check out (drives the gallery above) */}
            <div id="buy" className="mb-8">
              <BuyBox selectedId={selectedProductId} onSelectProduct={handleSelectProduct} />
            </div>

            {/* Fleet CTA */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-2">{t("product2.fleet.title")}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t("product2.fleet.desc")}
              </p>
              <Link
                href="/enterprise"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#E67E22] hover:text-[#D35400] transition-colors"
              >
                {t("product2.fleet.cta")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Spec strip — the answers buyers actually ask before purchase */}
        <div className="border-t border-b py-10 mb-6">
          <p className="text-xs font-bold tracking-widest text-[#E67E22] mb-8">{t("product2.strip.title")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <p className="stat-value text-3xl">{t(`product2.strip.${i}.value`)}</p>
                <p className="text-xs text-gray-500 mt-1.5 leading-snug">{t(`product2.strip.${i}.label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline Video */}
      <section className="bg-gray-50 py-20 sm:py-24 scroll-reveal">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("product2.video.title")}</h2>
          </div>
          <div
            className="aspect-video rounded-xl overflow-hidden cursor-pointer group relative"
            onClick={() => handleVideoPlay(
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4"
            )}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <Play className="w-9 h-9 text-gray-800 ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div
              className="aspect-video rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => handleVideoPlay(
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4"
              )}
            >
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="aspect-video rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => handleVideoPlay(
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4"
              )}
            >
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The differentiator — directional arrows, shown with the real chevron footage.
          The rest of the feature story lives on the marketing pages; this page sells. */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl scroll-reveal">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">{t("product2.usecases.title")}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            {t("product2.usecases.subtitle")}
          </p>

          <div className="bg-black text-white rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3">{t("product2.usecase.arrows.title")}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {t("product2.usecase.arrows.desc")}
                </p>
              </div>
              <div className="relative min-h-[240px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/trilight-chevron-poster.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/chevron.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — waitlist repeat */}
      <section className="bg-black py-20 sm:py-24 scroll-reveal">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("product2.bottom.title")}</h2>
          <p className="text-gray-400 mb-10">
            {t("product2.bottom.desc")}
          </p>

          <a
            href="#buy"
            className="cta-glow inline-block bg-[#E67E22] text-white py-4 px-10 rounded-md font-medium hover:bg-[#D35400] transition-colors"
          >
            Get yours
          </a>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <a
              href="mailto:Sales@trilightfleet.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" /> Sales@trilightfleet.com
            </a>
            <a
              href="tel:+15714370173"
              className="text-gray-400 hover:text-white transition-colors"
            >
              (571) 437-0173
            </a>
            <Link
              href="/enterprise"
              className="inline-flex items-center gap-1 text-[#E67E22] hover:text-[#D35400] transition-colors"
            >
              {t("product2.bottom.fleetLink")} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
