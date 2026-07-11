"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, Phone, Mail, AlertTriangle, Clock, Eye, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/contexts/language-context"

const USE_CASES = [
  { key: "mount", media: { type: "image" as const, src: "/trilight-truck-mounted.png" } },
  { key: "triangle", media: { type: "image" as const, src: "/trilight-night.jpeg" } },
  { key: "arrows", media: { type: "video" as const, src: "/chevron.mp4" } },
  { key: "harness", media: { type: "image" as const, src: "/trilight-wearable-driver.jpg" } },
  { key: "dock", media: { type: "image" as const, src: "/trilight-dock-poster.jpg" } },
]

const PROBLEM_CARDS = [
  { key: "invisible", Icon: Eye },
  { key: "deploy", Icon: Clock },
  { key: "cost", Icon: AlertTriangle },
]

export default function EnterprisePage() {
  const { t } = useLanguage()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://formsubmit.co/ajax/Sales@trilightfleet.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        setSubmitted(true)
        toast.success("Inquiry sent! We'll be in touch.")
        form.reset()
      } else {
        toast.error("Something went wrong. Please email us directly.")
      }
    } catch {
      toast.error("Something went wrong. Please email us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white pt-[96px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/he_shouldn't_be_202603251254.png"
            alt="Truck driver deploying TRILIGHT alongside traditional reflective triangle on highway at night"
            fill
            className="object-cover opacity-55"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[1]"></div>
        <div className="container mx-auto px-6 relative z-10 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="hero-animate flex items-center gap-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-[#E67E22]" />
              <span className="text-sm font-medium text-[#E67E22] tracking-widest">{t("ent.hero.badge")}</span>
            </div>
            <h1 className="hero-animate-delay-1 text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight font-bold leading-[1.1]">
              {t("ent.hero.title")}
            </h1>
            <p className="hero-animate-delay-2 text-lg sm:text-xl mb-10 leading-relaxed text-gray-300">
              {t("ent.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#talk-to-us"
                className="cta-glow bg-[#E67E22] text-white py-4 px-8 text-center font-medium hover:bg-[#D35400] transition-colors text-base"
              >
                {t("ent.hero.cta")}
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-white/40 text-white py-4 px-8 text-center font-medium hover:bg-white/10 transition-colors text-base"
              >
                {t("ent.hero.cta2")}
              </a>
            </div>
            <p className="text-sm text-gray-400">
              {t("ent.hero.note")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-black text-white border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="text-center">
                <div className="stat-value text-3xl sm:text-4xl text-[#E67E22] mb-2">{t(`ent.stats.${n}.value`)}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">{t(`ent.stats.${n}.label`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                {t("ent.problem.title")}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {t("ent.problem.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
              {PROBLEM_CARDS.map(({ key, Icon }) => (
                <div key={key} className="bg-gray-50 border-t-2 border-red-500 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-gray-900">{t(`ent.problem.${key}.title`)}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {t(`ent.problem.${key}.text`)}
                  </p>
                </div>
              ))}
            </div>

            {/* The 200-foot walk — deployment diagram */}
            <div className="mt-16 bg-gray-950 text-white p-8 sm:p-12 scroll-reveal">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{t("ent.diagram.title")}</h3>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">{t("ent.diagram.subtitle")}</p>
              </div>

              {/* Old way — same walk, nothing lit */}
              <div className="mb-12">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <span className="text-xs font-bold tracking-widest text-gray-400">{t("ent.diagram.oldLabel")}</span>
                  <span className="text-xs font-bold tracking-widest text-red-500 text-right">{t("ent.diagram.oldExposure")}</span>
                </div>
                <div className="relative h-32 bg-black border-y border-white/10">
                  <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-gray-700" aria-hidden="true"></div>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-800 border border-white/20 px-2.5 py-1.5 text-[10px] font-bold tracking-widest z-10">
                    {t("ent.diagram.truck")}
                  </div>
                  {/* driver's walk */}
                  <div className="absolute left-[88px] right-[8%] bottom-3 border-t border-dotted border-red-500/60" aria-hidden="true"></div>
                  <div className="absolute top-2 -translate-x-1/2 text-[10px] tracking-widest text-gray-500 whitespace-nowrap" style={{ left: "40%" }}>
                    {t("ent.diagram.driver")}
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gray-600" style={{ left: "40%" }}></div>
                  {[
                    { pos: "24%", label: t("ent.diagram.marker1") },
                    { pos: "56%", label: t("ent.diagram.marker2") },
                    { pos: "90%", label: t("ent.diagram.marker3") },
                  ].map((m) => (
                    <div key={m.label} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2" style={{ left: m.pos }}>
                      <div className="mx-auto w-0 h-0 border-l-8 border-r-8 border-b-[14px] border-l-transparent border-r-transparent border-b-gray-500"></div>
                      <div className="mt-1.5 text-center text-[10px] tracking-widest text-gray-400 whitespace-nowrap">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3">{t("ent.diagram.oldCaption")}</p>
              </div>

              {/* With TRILIGHT — same walk, lit end to end */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <span className="text-xs font-bold tracking-widest text-gray-400">{t("ent.diagram.newLabel")}</span>
                  <span className="text-xs font-bold tracking-widest text-[#E67E22] text-right">{t("ent.diagram.newExposure")}</span>
                </div>
                <div className="relative h-32 bg-black border-y border-white/10">
                  <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-gray-700" aria-hidden="true"></div>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-800 border border-white/20 px-2.5 py-1.5 text-[10px] font-bold tracking-widest z-10">
                    {t("ent.diagram.truck")}
                  </div>
                  {/* truck-mounted unit, flashing before the walk starts */}
                  <div className="absolute left-[104px] top-1/2 -translate-y-1/2">
                    <div className="diagram-beacon w-4 h-4 rounded-full bg-[#E67E22]"></div>
                  </div>
                  {/* driver's walk, lit by the harness */}
                  <div className="absolute left-[88px] right-[8%] bottom-3 border-t border-dotted border-[#E67E22]/50" aria-hidden="true"></div>
                  <div className="absolute top-2 -translate-x-1/2 text-[10px] tracking-widest text-[#E67E22] whitespace-nowrap" style={{ left: "40%" }}>
                    {t("ent.diagram.driver")}
                  </div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#E67E22] shadow-[0_0_10px_rgba(230,126,34,0.8)]"
                    style={{ left: "40%" }}
                  ></div>
                  {[
                    { pos: "24%", label: t("ent.diagram.marker1") },
                    { pos: "56%", label: t("ent.diagram.marker2") },
                    { pos: "90%", label: t("ent.diagram.marker3") },
                  ].map((m) => (
                    <div key={m.label} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2" style={{ left: m.pos }}>
                      <div className="mx-auto w-0 h-0 border-l-8 border-r-8 border-b-[14px] border-l-transparent border-r-transparent border-b-[#E67E22] drop-shadow-[0_0_6px_rgba(230,126,34,0.9)]"></div>
                      <div className="mt-1.5 text-center text-[10px] tracking-widest text-gray-400 whitespace-nowrap">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3">{t("ent.diagram.newCaption")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — the 5 configurations */}
      <section id="how-it-works" className="bg-black text-white py-20 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 sm:mb-24 scroll-reveal">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                {t("ent.howItWorks.title")}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t("ent.howItWorks.subtitle")}
              </p>
            </div>

            <div className="space-y-16 sm:space-y-24">
              {USE_CASES.map((uc, i) => (
                <div key={uc.key} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-reveal">
                  <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="glow-bloom" aria-hidden="true"></div>
                    <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-gray-950">
                      {uc.media.type === "video" ? (
                        <video autoPlay muted loop playsInline poster="/trilight-chevron-poster.jpg" className="w-full h-full object-cover">
                          <source src={uc.media.src} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={uc.media.src}
                          alt={t(`ent.usecase.${uc.key}.title`)}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="stat-value text-sm text-[#E67E22] tracking-[0.35em] mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t(`ent.usecase.${uc.key}.title`)}</h3>
                    <p className="text-gray-400 leading-relaxed">{t(`ent.usecase.${uc.key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section — LEDs glow against black */}
      <section className="bg-black text-white border-t border-white/10 py-20 sm:py-24 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                {t("ent.video.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4",
                  label: t("ent.video.label1"),
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4",
                  label: t("ent.video.label2"),
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4",
                  label: t("ent.video.label3"),
                },
              ].map((v) => (
                <div key={v.src}>
                  <div className="aspect-video bg-gray-950 border border-white/10 overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={v.src} type="video/mp4" />
                    </video>
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-3 font-medium">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Business Case */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto scroll-reveal">
            <div className="mb-12">
              <div className="text-sm font-bold tracking-widest text-[#E67E22] mb-4">{t("ent.business.eyebrow")}</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                {t("ent.business.title")}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                {t("ent.business.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow ${n === 5 ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#E67E22] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold mb-2 text-gray-900">{t(`ent.business.${n}.title`)}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{t(`ent.business.${n}.text`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Early Access / Pilot */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto scroll-reveal">
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 sm:p-14 text-white overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                  <div className="inline-block border border-[#E67E22]/50 text-[#E67E22] text-xs font-bold tracking-widest px-3 py-1.5 mb-6">
                    {t("ent.earlyAccess.badge")}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                    {t("ent.earlyAccess.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t("ent.earlyAccess.p1")}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {t("ent.earlyAccess.p2")}
                  </p>
                  <a
                    href="#talk-to-us"
                    className="cta-glow inline-flex items-center gap-2 bg-[#E67E22] text-white py-4 px-8 font-medium hover:bg-[#D35400] transition-colors"
                  >
                    {t("ent.earlyAccess.cta")} <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div className="relative w-full max-w-xs mx-auto lg:mx-0 lg:w-80 flex-shrink-0">
                  <div className="glow-bloom" aria-hidden="true"></div>
                  <div className="relative aspect-square overflow-hidden border border-white/10">
                    <Image
                      src="/product image 1.png"
                      alt="TRILIGHT LED Safety Triangle kit"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="talk-to-us" className="bg-gray-900 text-white py-20 sm:py-24 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">{t("ent.contact.title")}</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t("ent.contact.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-5 mb-10">
                  <div className="relative w-24 h-28 flex-shrink-0 overflow-hidden border border-white/15">
                    <Image
                      src="/willy-founder-walmart-truck.png"
                      alt="Willy, founder of TRILIGHT, standing in front of his truck"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{t("ent.contact.willyCaption")}</p>
                </div>

                <h3 className="text-xl font-bold mb-6">{t("ent.contact.directTitle")}</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#E67E22] mr-4" />
                    <div>
                      <a href="mailto:Sales@trilightfleet.com" className="font-medium text-lg hover:text-[#E67E22] transition-colors">
                        Sales@trilightfleet.com
                      </a>
                      <p className="text-sm text-gray-400">{t("ent.contact.emailNote")}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#E67E22] mr-4" />
                    <div>
                      <a href="tel:+15714370173" className="font-medium text-lg hover:text-[#E67E22] transition-colors">
                        (571) 437-0173
                      </a>
                      <p className="text-sm text-gray-400">{t("ent.contact.phoneNote")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-gray-800 border border-white/10">
                  <h4 className="font-bold mb-4 text-sm tracking-wider text-gray-300">{t("ent.contact.coverTitle")}</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                    {[
                      t("ent.contact.cover.1"),
                      t("ent.contact.cover.2"),
                      t("ent.contact.cover.3"),
                      t("ent.contact.cover.4"),
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="accent-dot mt-1.5" style={{ width: 6, height: 6 }}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 border border-white/10 p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <CheckCircle className="h-16 w-16 text-[#E67E22] mb-6" />
                    <h3 className="text-2xl font-bold mb-3">{t("ent.contact.success.title")}</h3>
                    <p className="text-gray-400">
                      {t("ent.contact.success.text")}
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-6">{t("ent.contact.formTitle")}</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="hidden" name="_subject" value="Fleet Safety Inquiry - TRILIGHT" />
                      <input type="hidden" name="_template" value="table" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="ent-name" className="sr-only">{t("ent.contact.name")}</label>
                          <input
                            id="ent-name"
                            type="text"
                            name="name"
                            placeholder={t("ent.contact.name")}
                            className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="ent-company" className="sr-only">{t("ent.contact.company")}</label>
                          <input
                            id="ent-company"
                            type="text"
                            name="company"
                            placeholder={t("ent.contact.company")}
                            className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="ent-email" className="sr-only">{t("ent.contact.email")}</label>
                        <input
                          id="ent-email"
                          type="email"
                          name="email"
                          placeholder={t("ent.contact.email")}
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="ent-phone" className="sr-only">{t("ent.contact.phone")}</label>
                          <input
                            id="ent-phone"
                            type="tel"
                            name="phone"
                            placeholder={t("ent.contact.phone")}
                            className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                          />
                        </div>
                        <div>
                          <label htmlFor="ent-fleet-size" className="sr-only">{t("ent.contact.fleetSize")}</label>
                          <select
                            id="ent-fleet-size"
                            name="fleet_size"
                            className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white"
                          >
                            <option value="">{t("ent.contact.fleetSize")}</option>
                            <option value="1-25">{t("ent.contact.fleetOption1")}</option>
                            <option value="26-100">{t("ent.contact.fleetOption2")}</option>
                            <option value="101-500">{t("ent.contact.fleetOption3")}</option>
                            <option value="500+">{t("ent.contact.fleetOption4")}</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="ent-message" className="sr-only">{t("ent.contact.message")}</label>
                        <textarea
                          id="ent-message"
                          name="message"
                          placeholder={t("ent.contact.message")}
                          rows={4}
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="cta-glow w-full bg-[#E67E22] text-white py-4 px-6 hover:bg-[#D35400] transition-colors font-medium text-base disabled:opacity-50"
                      >
                        {submitting ? t("ent.contact.sending") : t("ent.contact.submit")}
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      {t("ent.contact.disclaimer")}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
