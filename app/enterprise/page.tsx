"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, Phone, Mail, AlertTriangle, Clock, Shield, Eye, Zap, Users, ArrowRight, Triangle, Compass } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/contexts/language-context"

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
      <div className="h-[96px]"></div>

      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/he_shouldn't_be_202603251254.png"
            alt="Truck driver deploying TRILIGHT alongside traditional reflective triangle on highway at night"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-[1]"></div>
        <div className="container mx-auto px-6 relative z-10">
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
            <p className="text-sm text-gray-500">
              {t("ent.hero.note")}
            </p>
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
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <Eye className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{t("ent.problem.invisible.title")}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t("ent.problem.invisible.text")}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <Clock className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{t("ent.problem.deploy.title")}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t("ent.problem.deploy.text")}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{t("ent.problem.cost.title")}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t("ent.problem.cost.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — the 5 use cases */}
      <section id="how-it-works" className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                {t("ent.howItWorks.title")}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t("ent.howItWorks.subtitle")}
              </p>
            </div>

            <div className="space-y-8 scroll-reveal">
              {/* Use case 1 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-14 h-14 bg-[#E67E22]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="h-7 w-7 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("ent.usecase.mount.title")}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t("ent.usecase.mount.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Use case 2 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-14 h-14 bg-[#E67E22]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Triangle className="h-7 w-7 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("ent.usecase.triangle.title")}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t("ent.usecase.triangle.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Use case 3 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-14 h-14 bg-[#E67E22]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Compass className="h-7 w-7 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("ent.usecase.arrows.title")}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t("ent.usecase.arrows.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Use case 4 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-14 h-14 bg-[#E67E22]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-7 w-7 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("ent.usecase.harness.title")}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t("ent.usecase.harness.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Use case 5 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-14 h-14 bg-[#E67E22]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-7 w-7 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("ent.usecase.dock.title")}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t("ent.usecase.dock.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-20 sm:py-24 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-900">
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
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={v.src} type="video/mp4" />
                    </video>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3 font-medium">{v.label}</p>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                {t("ent.business.title")}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {t("ent.business.subtitle")}
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: t("ent.business.1.title"),
                  text: t("ent.business.1.text"),
                },
                {
                  title: t("ent.business.2.title"),
                  text: t("ent.business.2.text"),
                },
                {
                  title: t("ent.business.3.title"),
                  text: t("ent.business.3.text"),
                },
                {
                  title: t("ent.business.4.title"),
                  text: t("ent.business.4.text"),
                },
                {
                  title: t("ent.business.5.title"),
                  text: t("ent.business.5.text"),
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#E67E22] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
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
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 sm:p-14 text-white">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                  <div className="inline-block bg-[#E67E22]/20 text-[#E67E22] text-xs font-bold tracking-widest px-3 py-1.5 rounded-full mb-6">
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
                <div className="w-full max-w-xs mx-auto lg:mx-0 lg:w-80 flex-shrink-0">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
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
                <h3 className="text-xl font-bold mb-6">{t("ent.contact.directTitle")}</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#E67E22] mr-4" />
                    <div>
                      <a href="mailto:Sales@trilightfleet.com" className="font-medium text-lg hover:text-[#E67E22] transition-colors">
                        Sales@trilightfleet.com
                      </a>
                      <p className="text-sm text-gray-500">{t("ent.contact.emailNote")}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#E67E22] mr-4" />
                    <div>
                      <a href="tel:+15714370173" className="font-medium text-lg hover:text-[#E67E22] transition-colors">
                        (571) 437-0173
                      </a>
                      <p className="text-sm text-gray-500">{t("ent.contact.phoneNote")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-gray-800 rounded-xl">
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

              <div className="bg-gray-800 rounded-xl p-8">
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
                        <input
                          type="text"
                          name="name"
                          placeholder={t("ent.contact.name")}
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                          required
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder={t("ent.contact.company")}
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder={t("ent.contact.email")}
                        className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                        required
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          name="phone"
                          placeholder={t("ent.contact.phone")}
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                        />
                        <select
                          name="fleet_size"
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white"
                        >
                          <option value="">{t("ent.contact.fleetSize")}</option>
                          <option value="1-25">{t("ent.contact.fleetOption1")}</option>
                          <option value="26-100">{t("ent.contact.fleetOption2")}</option>
                          <option value="101-500">{t("ent.contact.fleetOption3")}</option>
                          <option value="500+">{t("ent.contact.fleetOption4")}</option>
                        </select>
                      </div>
                      <textarea
                        name="message"
                        placeholder={t("ent.contact.message")}
                        rows={4}
                        className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                      ></textarea>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="cta-glow w-full bg-[#E67E22] text-white py-4 px-6 hover:bg-[#D35400] transition-colors font-medium rounded-md text-base disabled:opacity-50"
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
