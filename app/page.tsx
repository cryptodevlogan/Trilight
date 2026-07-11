"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Play, Check, ArrowRight, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const videoSources = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4",
]

const MODES = [
  { key: "mount", src: "/trilight-truck-mounted.png" },
  { key: "triangle", src: "/trilight-road-deployment.png" },
  { key: "arrows", src: "/chevron.mp4", video: true },
  { key: "harness", src: "/trilight-wearable-driver.jpg" },
  { key: "dock", src: "/trilight-dock-poster.jpg" },
]

export default function Home() {
  const { t } = useLanguage()
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")
  const [currentLabel, setCurrentLabel] = useState("")
  const [showCue, setShowCue] = useState(false)
  const [activeMode, setActiveMode] = useState(MODES[0].key)
  const [modeAutoPlay, setModeAutoPlay] = useState(true)

  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const explorerRef = useRef<HTMLDivElement>(null)

  // Attract loop: auto-advance the mode explorer while it's on screen so skimmers
  // see it switch; stop for good the moment the user hovers or clicks a mode.
  useEffect(() => {
    if (!modeAutoPlay) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = explorerRef.current
    if (!el) return
    let interval: ReturnType<typeof setInterval> | null = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !interval) {
          interval = setInterval(() => {
            setActiveMode((prev) => {
              const i = MODES.findIndex((m) => m.key === prev)
              return MODES[(i + 1) % MODES.length].key
            })
          }, 3000)
        } else if (!entry.isIntersecting && interval) {
          clearInterval(interval)
          interval = null
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (interval) clearInterval(interval)
    }
  }, [modeAutoPlay])

  const selectMode = (key: string) => {
    setModeAutoPlay(false)
    setActiveMode(key)
  }

  useEffect(() => {
    const video = heroVideoRef.current
    if (video) {
      video.play().catch(() => {})
    }
  }, [])

  // Scroll cue: reveal whenever the user lingers near the top without scrolling;
  // hide on scroll, then re-arm so it can reappear each time they settle back up top.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const scheduleCue = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (window.scrollY < 10) setShowCue(true)
      }, 2500)
    }
    const onScroll = () => {
      setShowCue(false)
      scheduleCue()
    }
    scheduleCue()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const videoSections = [
    { src: videoSources[0], label: t("home.usecase1.label"), poster: "/trilight-roadside-poster.jpg" },
    { src: videoSources[1], label: t("home.usecase2.label"), poster: "/trilight-wearable-poster.jpg" },
    { src: videoSources[2], label: t("home.usecase3.label"), poster: "/trilight-dock-poster.jpg" },
  ]

  const openVideo = (src: string, label: string) => {
    setCurrentVideo(src)
    setCurrentLabel(label)
    setVideoModalOpen(true)
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
            <div className="bg-black overflow-hidden shadow-2xl">
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
          <video ref={heroVideoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
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
        {/* Legibility scrim — keeps text crisp over any video frame */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pointer-events-none">
          <div className="max-w-xl sm:max-w-3xl ml-0 md:ml-12 lg:ml-24">
            <h1 className="hero-animate text-5xl sm:text-7xl md:text-8xl mb-6 tracking-tight font-bold leading-[0.95]">
              {t("home.hero.title")}
            </h1>
          </div>
          <div className="max-w-sm sm:max-w-lg ml-0 md:ml-12 lg:ml-24 mt-0">
            <p className="hero-animate-delay-1 text-base sm:text-xl mb-8 sm:mb-10 font-light leading-relaxed">
              {t("home.hero.subtitle")}
            </p>
          </div>
          <div className="hero-animate-delay-2 ml-0 md:ml-12 lg:ml-24 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/product/trilight"
              className="cta-glow button inline-block bg-white text-black py-4 px-10 sm:px-12 text-center text-sm hover:bg-gray-100 transition-colors pointer-events-auto"
            >
              {t("home.hero.cta")}
            </Link>
            <Link
              href="/product/trilight?kit=wearable"
              className="button inline-flex items-center justify-center border border-white/40 text-white py-4 px-10 sm:px-12 text-center text-sm hover:bg-white/10 hover:border-white transition-colors pointer-events-auto backdrop-blur-sm"
            >
              {t("home.hero.cta2")}
            </Link>
          </div>
        </div>
        {/* Scroll cue — appears after a pause, dismisses on scroll */}
        <a
          href="#discover"
          aria-label="Scroll to explore"
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-opacity duration-700 ${
            showCue ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <span className="scroll-cue-inner flex flex-col items-center gap-1.5">
            <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
            <ChevronDown className="h-5 w-5" />
          </span>
        </a>
      </section>

      {/* Stats Band */}
      <section id="discover" className="bg-black text-white py-12 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { value: "1 MI+", label: t("home.stats.s1") },
              { value: "5-IN-1", label: t("home.stats.s2") },
              { value: t("home.stats.s4.value"), label: t("home.stats.s4") },
              { value: "9 HR", label: t("home.stats.s3") },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="stat-value text-3xl sm:text-4xl text-[#E67E22] mb-2">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Triangle, Five Ways — interactive mode explorer */}
      <section className="bg-white py-20 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={explorerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square overflow-hidden bg-gray-950 shadow-xl">
              {MODES.map((m) => (
                <div
                  key={m.key}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeMode === m.key ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={activeMode !== m.key}
                >
                  {m.video ? (
                    <video autoPlay muted loop playsInline poster="/trilight-chevron-poster.jpg" className="w-full h-full object-cover">
                      <source src={m.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={m.src}
                      alt={t(`ent.usecase.${m.key}.title`)}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">{t("home.revolution.title")}</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t("home.revolution.subtitle")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("home.revolution.detail")}
              </p>
              <div className="mt-10 pt-4 border-t border-gray-200 divide-y divide-gray-100">
                {MODES.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => selectMode(m.key)}
                    onMouseEnter={() => selectMode(m.key)}
                    className={`block w-full text-left py-3.5 pl-4 border-l-2 transition-colors ${
                      activeMode === m.key ? "border-l-[#E67E22]" : "border-l-transparent hover:border-l-gray-300"
                    }`}
                  >
                    <span
                      className={`block text-sm font-bold tracking-wide transition-colors ${
                        activeMode === m.key ? "text-[#E67E22]" : "text-gray-900"
                      }`}
                    >
                      {t(`ent.usecase.${m.key}.title`)}
                    </span>
                    <span
                      className="block text-sm text-gray-500 mt-0.5 normal-case tracking-normal font-normal"
                      style={{ fontFamily: "Barlow, sans-serif" }}
                    >
                      {t(`ent.usecase.${m.key}.short`)}
                    </span>
                  </button>
                ))}
              </div>
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
                <div>
                  <div className="text-xs font-bold tracking-widest text-[#E67E22] mb-3">{t("home.usecase1.eyebrow")}</div>
                  <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                    {t("home.usecase1.title")}
                  </h3>
                </div>
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
                  className="aspect-video bg-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative"
                  onClick={() => openVideo(videoSections[0].src, videoSections[0].label)}
                >
                  <video autoPlay muted loop playsInline poster={videoSections[0].poster} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
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
                  className="aspect-video bg-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative"
                  onClick={() => openVideo(videoSections[1].src, videoSections[1].label)}
                >
                  <video autoPlay muted loop playsInline poster={videoSections[1].poster} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
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
                <div>
                  <div className="text-xs font-bold tracking-widest text-[#E67E22] mb-3">{t("home.usecase2.eyebrow")}</div>
                  <h3 className="text-3xl sm:text-4xl font-bold leading-tight">{t("home.usecase2.title")}</h3>
                </div>
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
              <div className="text-xs font-bold tracking-widest text-[#E67E22] mb-6">{t("home.directional.badge")}</div>
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
            <div className="flex-1 w-full">
              <div className="aspect-video overflow-hidden border border-white/10">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/chevron.mp4" type="video/mp4" />
                </video>
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
              <div>
                <div className="text-xs font-bold tracking-widest text-[#E67E22] mb-3">{t("home.usecase3.eyebrow")}</div>
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                  {t("home.usecase3.title")}
                </h3>
              </div>
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
                className="aspect-video bg-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group relative"
                onClick={() => openVideo(videoSections[2].src, videoSections[2].label)}
              >
                <video autoPlay muted loop playsInline poster={videoSections[2].poster} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
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
            src="/fleet-safety-scale.png"
            alt="Fleet managers discussing safety solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10"></div>
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
              className="cta-glow button inline-block bg-[#E67E22] text-white py-4 px-10 sm:px-12 text-center text-sm hover:bg-[#D35400] transition-colors"
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

      {/* Final CTA — Shop */}
      <section className="bg-gray-900 py-20 sm:py-24 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("home.waitlist.title")}</h2>
            <p className="text-gray-400 mb-10">
              {t("home.waitlist.subtitle")}
            </p>

            <Link
              href="/product/trilight"
              className="cta-glow button inline-block bg-[#E67E22] text-white py-4 px-10 font-medium hover:bg-[#D35400] transition-colors"
            >
              {t("home.waitlist.cta")}
            </Link>

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
