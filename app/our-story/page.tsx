"use client"

import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function OurStoryPage() {
  const { t } = useLanguage()

  return (
    <div>
      <div className="h-[96px]"></div>

      {/* Hero — lead with the tension */}
      <section className="relative bg-black text-white pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/he_shouldn't_be_202603251254.png"
            alt="Truck driver deploying safety triangles on a dark highway"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-[1]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-animate flex items-center gap-2 mb-8">
              <AlertTriangle className="h-4 w-4 text-[#E67E22]" />
              <span className="text-xs font-medium text-[#E67E22] tracking-[0.2em]">{t("story2.badge")}</span>
            </div>
            <h1 className="hero-animate-delay-1 text-4xl sm:text-5xl lg:text-6xl mb-8 tracking-tight leading-[1.1]">
              <span className="block font-light text-gray-300">{t("story2.hero.title1")}</span>
              <span className="block font-bold text-white mt-2">{t("story2.hero.title2")}</span>
            </h1>
            <p className="hero-animate-delay-2 text-lg sm:text-xl leading-relaxed text-gray-400 max-w-2xl">
              {t("story2.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* The Problem — a voiceover, not a second hero. Sentence-case light type against the
          hero's bold uppercase; "It's dark." dimmed so the type does what the line says. */}
      <section className="bg-black text-white pt-8 sm:pt-10 pb-20 sm:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl scroll-reveal">
            <p className="stat-value text-sm tracking-[0.3em] text-[#E67E22] uppercase mb-10">
              {t("story2.problem.intro")}
            </p>
            <div className="space-y-3 mb-10">
              <p className="text-2xl sm:text-4xl font-light leading-snug text-white">
                {t("story2.problem.line1")}
              </p>
              <p className="text-2xl sm:text-4xl font-light leading-snug text-gray-600">
                {t("story2.problem.line2")}
              </p>
              <p className="text-2xl sm:text-4xl font-light leading-snug text-white">
                {t("story2.problem.line3")}
              </p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-400">
              <p>
                {t("story2.problem.p1")}
              </p>
              <p>
                {t("story2.problem.p2")}
              </p>
              <p className="text-white font-medium text-xl">
                {t("story2.problem.p3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Willy */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center scroll-reveal">
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight text-gray-900">
                {t("story2.willy.title")}
              </h2>
              {/* Willy's road, told as mile markers — the one true chronology on the site */}
              <ol className="border-l-2 border-gray-300 ml-1.5">
                {[
                  { mile: t("story2.willy.mile1"), text: t("story2.willy.p1") },
                  { mile: t("story2.willy.mile2"), text: t("story2.willy.p2") },
                  { mile: t("story2.willy.mile3"), text: t("story2.willy.p3") },
                  { mile: t("story2.willy.mile4"), text: t("story2.willy.p4"), emphasis: true },
                ].map((beat, i, arr) => (
                  <li key={beat.mile} className={`relative pl-8 ${i < arr.length - 1 ? "pb-10" : ""}`}>
                    <span
                      className="absolute -left-[7px] top-1.5 w-3 h-3 bg-[#E67E22]"
                      aria-hidden="true"
                    ></span>
                    <p className="mb-3">
                      <span className="stat-value inline-block bg-gray-900 text-white text-xs tracking-[0.18em] px-3 py-1.5">
                        {beat.mile}
                      </span>
                    </p>
                    <p
                      className={`text-lg leading-relaxed ${
                        beat.emphasis ? "text-gray-900 font-medium" : "text-gray-600"
                      }`}
                    >
                      {beat.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/willy-founder-walmart-truck.png"
                    alt="Willy, TRITTECH Founder"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="absolute -bottom-4 left-0 sm:-left-4 bg-black text-white p-4 sm:p-5 rounded-xl shadow-xl">
                  <p className="font-bold text-sm">{t("story2.willy.name")}</p>
                  <p className="text-xs text-gray-400">{t("story2.willy.role1")}</p>
                  <p className="text-xs text-gray-400">{t("story2.willy.role2")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What he built — product reveal with video */}
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              {t("story2.built.title")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t("story2.built.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center scroll-reveal">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/make_the_yellow_202603251220.png"
                alt="TRILIGHT LED Safety Triangle system with harness"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  label: t("story2.built.led.label"),
                  text: t("story2.built.led.text"),
                },
                {
                  label: t("story2.built.mount.label"),
                  text: t("story2.built.mount.text"),
                },
                {
                  label: t("story2.built.harness.label"),
                  text: t("story2.built.harness.text"),
                },
                {
                  label: t("story2.built.fold.label"),
                  text: t("story2.built.fold.text"),
                },
                {
                  label: t("story2.built.dock.label"),
                  text: t("story2.built.dock.text"),
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="accent-dot mt-2.5" style={{ width: 8, height: 8 }}></div>
                  <div>
                    <p className="font-bold text-sm tracking-wide mb-1">{item.label}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="mt-16 scroll-reveal">
            <div className="aspect-video rounded-xl overflow-hidden">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">{t("story2.built.videoCaption")}</p>
          </div>
        </div>
      </section>

      {/* The values — short, no repetition */}
      {/* Values — one point, two supports. "Save lives" is the whole point; the layout says so. */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 scroll-reveal">
          <p className="stat-value text-sm tracking-[0.3em] text-[#E67E22] uppercase mb-6">
            {t("story2.values.title")}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-6">
            {t("story2.values.1.title")}
            <span className="text-[#E67E22]">.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-14">
            {t("story2.values.1.text")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-gray-200">
            {(["2", "3"] as const).map((n) => (
              <div key={n}>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{t(`story2.values.${n}.title`)}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {t(`story2.values.${n}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 scroll-reveal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {t("story2.cta.title")}
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            {t("story2.cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product/trilight"
              className="cta-glow inline-flex items-center justify-center gap-2 bg-[#E67E22] text-white py-4 px-8 text-lg font-medium hover:bg-[#D35400] transition-colors"
            >
              {t("story2.cta.shop")} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/enterprise"
              className="border-2 border-white/30 text-white py-4 px-8 text-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              {t("story2.cta.fleet")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
