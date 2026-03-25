"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, X, Check, Zap, Clock, Shield, Users, Compass, ArrowRight, Mail } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/contexts/language-context"

const productMedia = [
  { type: "image" as const, src: "/product image 1.png", alt: "TRILIGHT LED Safety Triangle Kit" },
  { type: "image" as const, src: "/make_the_yellow_202603251220.png", alt: "TRILIGHT LED triangles with harness" },
  { type: "image" as const, src: "/trilight-truck-mounted.png", alt: "TRILIGHT mounted on truck" },
  {
    type: "video" as const,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4",
    alt: "Roadside Emergency Deployment",
    thumbnail: "/trilight-road-deployment.png",
  },
  {
    type: "video" as const,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4",
    alt: "Wearable Safety System",
    thumbnail: "/trilight-truck-mounted.png",
  },
  {
    type: "video" as const,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4",
    alt: "Loading Dock Positioning",
    thumbnail: "/trilight-truck-highway-setup.png",
  },
]

export default function TrilightProductPage() {
  const [selectedMedia, setSelectedMedia] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [bottomEmail, setBottomEmail] = useState("")
  const [bottomSubmitted, setBottomSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleVideoPlay = (videoSrc: string) => {
    setCurrentVideo(videoSrc)
    setVideoModalOpen(true)
  }

  const handleMediaClick = (index: number) => {
    const media = productMedia[index]
    if (media.type === "video") {
      handleVideoPlay(media.src)
    } else {
      setSelectedMedia(index)
    }
  }

  const submitWaitlist = async (
    emailVal: string,
    onSuccess: () => void
  ) => {
    try {
      const data = new FormData()
      data.append("email", emailVal)
      data.append("_subject", "Waitlist Signup — TRILIGHT Product Page")
      data.append("_template", "table")
      const res = await fetch("https://formsubmit.co/ajax/Sales@trilightfleet.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        onSuccess()
        toast.success("You're on the list!")
      }
    } catch {
      toast.error("Something went wrong. Try again.")
    }
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-20">
          {/* Media Gallery */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative">
              {productMedia[selectedMedia]?.type === "image" ? (
                <Image
                  src={productMedia[selectedMedia]?.src || "/placeholder.svg"}
                  alt={productMedia[selectedMedia]?.alt || "TRILIGHT"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={productMedia[selectedMedia]?.thumbnail || "/placeholder.svg"}
                    alt={productMedia[selectedMedia]?.alt || "Video thumbnail"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => handleVideoPlay(productMedia[selectedMedia]?.src || "")}
                      className="bg-white/90 rounded-full p-4 hover:bg-white transition-all hover:scale-110"
                    >
                      <Play className="h-8 w-8 text-black ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-6 gap-1 sm:gap-2">
              {productMedia.map((media, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 rounded-lg overflow-hidden aspect-square relative cursor-pointer border-2 transition-all ${
                    selectedMedia === index ? "border-black" : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => handleMediaClick(index)}
                >
                  <Image
                    src={media.type === "image" ? media.src : media.thumbnail || "/placeholder.svg"}
                    alt={media.alt}
                    fill
                    className="object-cover"
                  />
                  {media.type === "video" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="inline-block bg-[#E67E22]/10 text-[#E67E22] text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">
                {t("product2.badge")}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-3">{t("product2.title")}</h1>
              <p className="text-gray-600 leading-relaxed">
                {t("product2.desc")}
              </p>
            </div>

            {/* Key Specs */}
            <div className="border-t border-b py-6 mb-6 space-y-3">
              {[
                t("product2.spec.1"),
                t("product2.spec.2"),
                t("product2.spec.3"),
                t("product2.spec.4"),
                t("product2.spec.5"),
                t("product2.spec.6"),
              ].map((spec) => (
                <div key={spec} className="flex items-start text-sm">
                  <Check className="h-4 w-4 mr-2 text-[#E67E22] flex-shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* Waitlist CTA */}
            <div className="mb-8">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <Check className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <p className="font-bold text-green-900">{t("product2.waitlist.onList")}</p>
                  <p className="text-sm text-green-700 mt-1">{t("product2.waitlist.onListDetail")}</p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-500 mb-3">
                    {t("product2.waitlist.manufacturing")}
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (!email) return
                      submitWaitlist(email, () => { setSubmitted(true); setBottomSubmitted(true) })
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("product2.waitlist.placeholder")}
                      required
                      className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                    />
                    <button
                      type="submit"
                      className="cta-glow bg-[#E67E22] text-white font-medium py-3 px-6 rounded-md hover:bg-[#D35400] transition-colors whitespace-nowrap"
                    >
                      {t("product2.waitlist.cta")}
                    </button>
                  </form>
                </>
              )}
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
      </div>

      {/* Old Way vs. TRILIGHT — full width comparison */}
      <section className="relative overflow-hidden scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/he_shouldn't_be_202603251254.png"
              alt="TRILIGHT LED triangle glowing next to a traditional reflective triangle on a dark highway"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40"></div>
          </div>
          {/* Text side */}
          <div className="bg-black text-white p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">
              {t("product2.comparison.title")}
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold tracking-widest text-red-400 mb-3">{t("product2.comparison.oldLabel")}</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {t("product2.comparison.old.1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {t("product2.comparison.old.2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {t("product2.comparison.old.3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {t("product2.comparison.old.4")}
                  </li>
                </ul>
              </div>
              <div className="h-px bg-white/10"></div>
              <div>
                <p className="text-xs font-bold tracking-widest text-[#E67E22] mb-3">{t("product2.comparison.newLabel")}</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#E67E22] flex-shrink-0 mt-0.5" />
                    {t("product2.comparison.new.1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#E67E22] flex-shrink-0 mt-0.5" />
                    {t("product2.comparison.new.2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#E67E22] flex-shrink-0 mt-0.5" />
                    {t("product2.comparison.new.3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#E67E22] flex-shrink-0 mt-0.5" />
                    {t("product2.comparison.new.4")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* 5 Use Cases */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl scroll-reveal">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">{t("product2.usecases.title")}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            {t("product2.usecases.subtitle")}
          </p>

          {/* Directional Arrows — hero card */}
          <div className="bg-black text-white rounded-2xl p-8 sm:p-12 mb-8 scroll-reveal">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-16 h-16 bg-[#E67E22]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Compass className="h-8 w-8 text-[#E67E22]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{t("product2.usecase.arrows.title")}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {t("product2.usecase.arrows.desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-5 items-start">
                <div className="w-11 h-11 bg-[#E67E22]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-[#E67E22]" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t("product2.usecase.mount.title")}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t("product2.usecase.mount.desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-5 items-start">
                <div className="w-11 h-11 bg-[#E67E22]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#E67E22]" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t("product2.usecase.triangle.title")}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t("product2.usecase.triangle.desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-5 items-start">
                <div className="w-11 h-11 bg-[#E67E22]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-[#E67E22]" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t("product2.usecase.harness.title")}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t("product2.usecase.harness.desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-5 items-start">
                <div className="w-11 h-11 bg-[#E67E22]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#E67E22]" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t("product2.usecase.dock.title")}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t("product2.usecase.dock.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included — separate from use cases */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-4 max-w-3xl scroll-reveal">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">{t("product2.box.title")}</h3>
              <div className="space-y-2">
                {[
                  t("product2.box.1"),
                  t("product2.box.2"),
                  t("product2.box.3"),
                ].map((item) => (
                  <div key={item} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">{t("product2.addons.title")}</h3>
              <div className="space-y-2">
                {[
                  t("product2.addons.1"),
                  t("product2.addons.2"),
                  t("product2.addons.3"),
                ].map((item) => (
                  <div key={item} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-[#E67E22] rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">{t("product2.addons.note")}</p>
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

          {(submitted || bottomSubmitted) ? (
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-5 inline-block">
              <p className="text-white font-medium">{t("product2.bottom.success")}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (!bottomEmail) return
                submitWaitlist(bottomEmail, () => { setBottomSubmitted(true); setSubmitted(true) })
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={bottomEmail}
                onChange={(e) => setBottomEmail(e.target.value)}
                placeholder={t("product2.bottom.placeholder")}
                required
                className="flex-1 px-4 py-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
              <button
                type="submit"
                className="cta-glow bg-[#E67E22] text-white py-4 px-8 rounded-md font-medium hover:bg-[#D35400] transition-colors whitespace-nowrap"
              >
                {t("product2.bottom.cta")}
              </button>
            </form>
          )}

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
