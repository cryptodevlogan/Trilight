"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Play, Zap, Clock, BatteryCharging, Compass, Check, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/contexts/language-context"

const videoSources = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4",
]

export default function Home() {
  const { t } = useLanguage()
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")
  const [currentLabel, setCurrentLabel] = useState("")
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)
  const [bottomEmail, setBottomEmail] = useState("")
  const [bottomSubmitted, setBottomSubmitted] = useState(false)

  const videoSections = [
    { src: videoSources[0], label: t("home.usecase1.label") },
    { src: videoSources[1], label: t("home.usecase2.label") },
    { src: videoSources[2], label: t("home.usecase3.label") },
  ]

  const openVideo = (src: string, label: string) => {
    setCurrentVideo(src)
    setCurrentLabel(label)
    setVideoModalOpen(true)
  }

  const submitWaitlist = async (emailVal: string, onSuccess: () => void) => {
    try {
      const data = new FormData()
      data.append("email", emailVal)
      data.append("_subject", "Waitlist Signup - TRILIGHT")
      data.append("_template", "table")
      const res = await fetch("https://formsubmit.co/ajax/Sales@trilightfleet.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        onSuccess()
        toast.success("You're on the waitlist!")
      }
    } catch {
      toast.error("Something went wrong. Try again.")
    }
  }

  return (
    <div>
      <div className="h-[96px] bg-black"></div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full hero-animate"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-white text-sm font-medium tracking-wide">{currentLabel}</p>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <video controls autoPlay className="w-full h-auto" src={currentVideo}>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative bg-black text-white h-[calc(100vh-112px)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trilight_ThirdDraft-hGK1WK1Q47zhqL9VQvkziLEHL6KBPJ.mov"
              type="video/mp4"
            />
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trilight_ThirdDraft-hGK1WK1Q47zhqL9VQvkziLEHL6KBPJ.mov"
              type="video/quicktime"
            />
          </video>
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-md ml-0 md:ml-12 lg:ml-24">
            <h1 className="hero-animate text-5xl sm:text-6xl mb-4 tracking-tight whitespace-nowrap font-bold">
              {t("home.hero.title")}
            </h1>
          </div>
          <div className="max-w-md ml-0 md:ml-12 lg:ml-24 mt-0">
            <p className="hero-animate-delay-1 text-lg sm:text-xl mb-8 sm:mb-10 font-light leading-relaxed">
              {t("home.hero.subtitle")}
            </p>
          </div>
          <div className="ml-0 md:ml-12 lg:ml-24">
            <Link
              href="/product/trilight"
              className="hero-animate-delay-2 cta-glow button inline-block bg-white text-black py-4 px-10 sm:px-12 text-center text-sm hover:bg-gray-100 transition-colors"
            >
              {t("home.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-black text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center py-4">
              <div className="mb-4">
                <Zap className="h-9 w-9 text-[#E67E22]" />
              </div>
              <h3 className="text-sm tracking-wide">{t("home.features.materials")}</h3>
            </div>
            <div className="flex flex-col items-center py-4">
              <div className="mb-4">
                <Clock className="h-9 w-9 text-[#E67E22]" />
              </div>
              <h3 className="text-sm tracking-wide">{t("home.features.warranty")}</h3>
            </div>
            <div className="flex flex-col items-center py-4">
              <div className="mb-4">
                <BatteryCharging className="h-9 w-9 text-[#E67E22]" />
              </div>
              <h3 className="text-sm tracking-wide">{t("home.features.shipping")}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product Photo + Intro */}
      <section className="bg-white py-20 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/product image 1.png"
                alt="TRILIGHT LED Safety Triangle Kit with harness"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">{t("home.revolution.title")}</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t("home.revolution.subtitle")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("home.revolution.detail")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case 1: Truck Mounting */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 scroll-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                  {t("home.usecase1.title")}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("home.usecase1.desc")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["home.usecase1.f1", "home.usecase1.f2", "home.usecase1.f3", "home.usecase1.f4"].map((key) => (
                    <div key={key} className="flex items-center">
                      <div className="accent-dot mr-3"></div>
                      <span className="text-gray-700">{t(key)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div
                  className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative"
                  onClick={() => openVideo(videoSections[0].src, videoSections[0].label)}
                >
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <source src={videoSections[0].src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <Play className="w-7 h-7 text-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">{videoSections[0].label}</p>
              </div>
            </div>
          </div>

          {/* Use Case 2: Wearable — flipped */}
          <div className="scroll-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1 order-2">
                <div
                  className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative"
                  onClick={() => openVideo(videoSections[1].src, videoSections[1].label)}
                >
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <source src={videoSections[1].src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <Play className="w-7 h-7 text-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">{videoSections[1].label}</p>
              </div>
              <div className="lg:order-2 order-1 space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">{t("home.usecase2.title")}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("home.usecase2.desc")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["home.usecase2.f1", "home.usecase2.f2", "home.usecase2.f3", "home.usecase2.f4"].map((key) => (
                    <div key={key} className="flex items-center">
                      <div className="accent-dot mr-3"></div>
                      <span className="text-gray-700">{t(key)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directional Arrows — pattern break, dark section */}
      <section className="bg-black text-white py-20 sm:py-24 scroll-reveal">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E67E22]/20 rounded-xl flex items-center justify-center">
                  <Compass className="h-6 w-6 text-[#E67E22]" />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#E67E22]">{t("home.directional.badge")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight leading-tight">
                {t("home.directional.title")}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t("home.directional.desc")}
              </p>
              <p className="text-gray-500 text-sm">
                {t("home.directional.note")}
              </p>
            </div>
            {/* Placeholder for directional video — replace src when available */}
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                <div className="text-center px-8">
                  <Compass className="h-16 w-16 text-[#E67E22]/40 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">{t("home.directional.placeholder")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case 3: Loading Dock */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                {t("home.usecase3.title")}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("home.usecase3.desc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["home.usecase3.f1", "home.usecase3.f2", "home.usecase3.f3", "home.usecase3.f4"].map((key) => (
                  <div key={key} className="flex items-center">
                    <div className="accent-dot mr-3"></div>
                    <span className="text-gray-700">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative"
                onClick={() => openVideo(videoSections[2].src, videoSections[2].label)}
              >
                <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <source src={videoSections[2].src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                      <Play className="w-7 h-7 text-gray-800 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4 font-medium">{videoSections[2].label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Old vs New — Comparison with highway photo */}
      <section className="relative overflow-hidden scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          <div className="relative h-[350px] lg:h-auto">
            <Image
              src="/he_shouldn't_be_202603251254.png"
              alt="TRILIGHT glowing next to a traditional reflective triangle on a dark highway"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30"></div>
          </div>
          <div className="bg-gray-900 text-white p-10 sm:p-14 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">{t("home.comparison.title")}</h2>
            <div className="space-y-3 mb-6">
              {["home.comparison.1", "home.comparison.2", "home.comparison.3", "home.comparison.4", "home.comparison.5"].map((key) => (
                <div key={key} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-[#E67E22] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{t(key)}</span>
                </div>
              ))}
            </div>
            <Link
              href="/product/trilight"
              className="inline-flex items-center gap-2 text-[#E67E22] font-medium text-sm hover:text-[#D35400] transition-colors"
            >
              {t("home.comparison.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 scroll-reveal">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fleet-partnership-sunset.png"
            alt="Fleet managers discussing safety solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight text-white font-bold">{t("home.scale.title")}</h2>
            <p className="text-lg sm:text-xl mb-6 text-white leading-relaxed">
              {t("home.scale.subtitle")}
            </p>
            <p className="text-base sm:text-lg mb-8 text-white/90 leading-relaxed">
              {t("home.scale.desc")}
            </p>
            <a
              href="/enterprise#talk-to-us"
              className="cta-glow button inline-block bg-blue-600 text-white py-4 px-10 sm:px-12 text-center text-sm hover:bg-blue-700 transition-colors"
            >
              {t("home.scale.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black text-white py-16 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl mb-6 tracking-tight font-bold">{t("home.values.title")}</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t("home.values.desc")}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              {["home.values.v1", "home.values.v2", "home.values.v3"].map((key) => (
                <div key={key} className="mb-8">
                  <p className="text-xl mb-4">{t(key)}</p>
                  <div className="h-px bg-white/20 w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — Waitlist */}
      <section className="bg-gray-900 py-20 sm:py-24 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("home.waitlist.title")}</h2>
            <p className="text-gray-400 mb-10">
              {t("home.waitlist.subtitle")}
            </p>

            {(waitlistSubmitted || bottomSubmitted) ? (
              <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-5 inline-block">
                <p className="text-white font-medium">{t("home.waitlist.success")}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const val = bottomEmail || waitlistEmail
                  if (!val) return
                  submitWaitlist(val, () => { setBottomSubmitted(true); setWaitlistSubmitted(true) })
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  value={bottomEmail}
                  onChange={(e) => setBottomEmail(e.target.value)}
                  placeholder={t("home.waitlist.placeholder")}
                  required
                  className="flex-1 px-4 py-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                />
                <button
                  type="submit"
                  className="cta-glow button bg-[#E67E22] text-white py-4 px-8 rounded-md font-medium hover:bg-[#D35400] transition-colors whitespace-nowrap"
                >
                  {t("home.waitlist.cta")}
                </button>
              </form>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
              <Link href="/product/trilight" className="hover:text-white transition-colors">
                {t("home.waitlist.link1")}
              </Link>
              <span className="hidden sm:inline">·</span>
              <Link href="/our-story" className="hover:text-white transition-colors">
                {t("home.waitlist.link2")}
              </Link>
              <span className="hidden sm:inline">·</span>
              <Link href="/enterprise" className="hover:text-white transition-colors">
                {t("home.waitlist.link3")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
