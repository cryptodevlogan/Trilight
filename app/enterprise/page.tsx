"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, Phone, Mail, AlertTriangle, Clock, Shield, Eye, Zap, Users, ArrowRight, Triangle, Compass } from "lucide-react"
import { toast } from "sonner"

export default function EnterprisePage() {
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
              <span className="text-sm font-medium text-[#E67E22] tracking-widest">FLEET SAFETY</span>
            </div>
            <h1 className="hero-animate-delay-1 text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight font-bold leading-[1.1]">
              YOUR DRIVERS DESERVE BETTER THAN A PLASTIC TRIANGLE AND A PRAYER
            </h1>
            <p className="hero-animate-delay-2 text-lg sm:text-xl mb-10 leading-relaxed text-gray-300">
              TRILIGHT is a complete LED visibility system — not just a triangle replacement. It mounts to the truck,
              upgrades existing triangles, creates directional arrows, attaches to loading docks, and even turns into
              a wearable harness so your driver is seen, not just the vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#talk-to-us"
                className="cta-glow bg-[#E67E22] text-white py-4 px-8 text-center font-medium hover:bg-[#D35400] transition-colors text-base"
              >
                GET EARLY ACCESS FOR YOUR FLEET
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-white/40 text-white py-4 px-8 text-center font-medium hover:bg-white/10 transition-colors text-base"
              >
                SEE HOW IT WORKS
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Manufacturing begins soon. Reserve priority access for your fleet.
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
                THE EQUIPMENT HASN&apos;T CHANGED IN 50 YEARS. THE ROADS HAVE.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                FMCSA requires warning devices on every commercial vehicle (49 CFR 393.95). Flares and plastic
                reflective triangles check the compliance box — but they don&apos;t actually keep your people safe
                on today&apos;s highways.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <Eye className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">NEARLY INVISIBLE</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Reflective triangles depend on headlights hitting them at the right angle. In rain, fog,
                  curves, or construction zones they disappear. Distracted drivers at highway speed never see them.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <Clock className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">DANGEROUS DEPLOYMENT</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Your driver has to walk along an active highway shoulder to place triangles at 10, 100, and
                  200 feet. That&apos;s minutes of exposure during the most dangerous window of any breakdown.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">REAL COST</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Secondary collisions on the shoulder. Dock damage from backing maneuvers in poor visibility.
                  Drivers struck during inspections. These aren&apos;t edge cases — they&apos;re line items.
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
                ONE SYSTEM. FIVE WAYS TO PROTECT YOUR FLEET.
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                TRILIGHT isn&apos;t a single product — it&apos;s a modular LED safety system that adapts to
                every situation your drivers face.
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
                    <h3 className="text-xl font-bold mb-2">TRUCK-MOUNTED WARNING</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Magnetic mount attaches directly to the trailer or bumper. Powerful LED array flashes
                      with 360° visibility — seen from over a mile away. No walking down the shoulder. Turn it on,
                      stick it on, get back in the cab. Seconds, not minutes.
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
                    <h3 className="text-xl font-bold mb-2">TRIANGLE UPGRADE</h3>
                    <p className="text-gray-400 leading-relaxed">
                      TRILIGHT fits directly on top of your existing plastic safety triangles — turning a passive
                      reflector into an active, flashing LED beacon. Your fleet stays compliant with current
                      equipment AND gets dramatically better visibility. No either/or.
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
                    <h3 className="text-xl font-bold mb-2">DIRECTIONAL ARROWS</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Here&apos;s where it gets interesting. TRILIGHT folds in a way that hides one side&apos;s
                      LEDs — creating a flashing directional pointer. Deploy it behind your truck and it actively
                      guides approaching traffic away from the breakdown. Not just &ldquo;warning, something is
                      here&rdquo; — but &ldquo;go this way.&rdquo; That&apos;s a meaningful difference at
                      highway speed.
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
                    <h3 className="text-xl font-bold mb-2">WEARABLE HARNESS</h3>
                    <p className="text-gray-400 leading-relaxed">
                      The truck isn&apos;t the only thing that needs to be seen — the driver does too. TRILIGHT&apos;s
                      harness model lets your drivers wear the LED triangle during pre-trip inspections, roadside
                      checks, or any time they&apos;re on foot near traffic. The driver is visible, not just the
                      vehicle. That&apos;s a protection gap nobody else is addressing.
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
                    <h3 className="text-xl font-bold mb-2">LOADING DOCK GUIDANCE</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Hook TRILIGHT onto loading bays as a bright visual reference point for backing maneuvers.
                      If your fleet deals with dock damage from tight spaces and poor visibility — and most do —
                      this alone can pay for the equipment. A clear, illuminated target where drivers need it
                      most.
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
                SEE IT IN ACTION
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4",
                  label: "Roadside Deployment",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4",
                  label: "Wearable Harness",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4",
                  label: "Dock Positioning",
                },
              ].map((v) => (
                <div key={v.label}>
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
                WHY THIS MATTERS TO YOUR BOTTOM LINE
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We&apos;re not going to fabricate ROI numbers. Here&apos;s what we know is true.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "REDUCED DRIVER EXPOSURE TIME",
                  text: "Magnetic deployment eliminates the walk-and-place procedure. Your driver spends seconds outside the cab instead of minutes. That's the highest-risk window of any roadside stop, and TRILIGHT compresses it dramatically.",
                },
                {
                  title: "VISIBLE LIABILITY MITIGATION",
                  text: "If a secondary collision happens, there's a material difference between \"we had reflective triangles deployed\" and \"we had active LED warning devices with directional guidance visible from a mile away.\" Your legal team will understand what that means for incident defense.",
                },
                {
                  title: "DOCK DAMAGE REDUCTION",
                  text: "Backing into loading bays in poor lighting conditions accounts for a significant portion of fleet vehicle damage. A bright, illuminated reference point at the dock is a simple fix for an expensive recurring problem.",
                },
                {
                  title: "DRIVER CONFIDENCE & RETENTION",
                  text: "The CDL driver shortage is real. Drivers talk. When your fleet invests in equipment that visibly prioritizes their safety — not just checks a compliance box — that matters for recruiting and retention. Especially the wearable harness. That says \"we care if you get home safe.\"",
                },
                {
                  title: "INSURANCE CONVERSATIONS",
                  text: "We can't promise your premiums will drop — that depends on your carrier and claims history. But proactive safety upgrades, especially active visibility systems, are exactly what underwriters want to see when you're negotiating rates.",
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
                    EARLY ACCESS
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                    BE THE FIRST FLEET TO DEPLOY TRILIGHT
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We&apos;re finalizing manufacturing now and will be shipping soon. Fleets that get in early
                    get priority fulfillment, direct access to our team, and input on the enterprise package
                    as we build it.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Start with a pilot — put TRILIGHT in the hands of a handful of drivers and let them tell you
                    what they think. We&apos;ll work with you on volume pricing and timeline from there.
                  </p>
                  <a
                    href="#talk-to-us"
                    className="cta-glow inline-flex items-center gap-2 bg-[#E67E22] text-white py-4 px-8 font-medium hover:bg-[#D35400] transition-colors"
                  >
                    RESERVE YOUR SPOT <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
                <div className="w-full lg:w-80 flex-shrink-0">
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">TALK TO WILLY</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                TRILIGHT was invented by a working trucker who got tired of watching the industry ignore
                the problem. He&apos;d love to hear about your fleet and figure out if this is a fit.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">REACH OUT DIRECTLY</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#E67E22] mr-4" />
                    <div>
                      <a href="mailto:Sales@trilightfleet.com" className="font-medium text-lg hover:text-[#E67E22] transition-colors">
                        Sales@trilightfleet.com
                      </a>
                      <p className="text-sm text-gray-500">We respond within one business day</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#E67E22] mr-4" />
                    <div>
                      <a href="tel:+15714370173" className="font-medium text-lg hover:text-[#E67E22] transition-colors">
                        (571) 437-0173
                      </a>
                      <p className="text-sm text-gray-500">Call or text Willy directly</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-gray-800 rounded-xl">
                  <h4 className="font-bold mb-4 text-sm tracking-wider text-gray-300">WHAT WE&apos;LL COVER</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                    {[
                      "Your fleet size and the safety challenges you're dealing with",
                      "Which TRILIGHT configurations make sense for your operation",
                      "Pilot program to get units in your drivers' hands",
                      "Volume pricing and early access timeline",
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
                    <h3 className="text-2xl font-bold mb-3">GOT IT!</h3>
                    <p className="text-gray-400">
                      Willy will be in touch within one business day. Looking forward to the conversation.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-6">REQUEST A CONVERSATION</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="hidden" name="_subject" value="Fleet Safety Inquiry — TRILIGHT" />
                      <input type="hidden" name="_template" value="table" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                          required
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder="Company *"
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Work Email *"
                        className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                        required
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                        />
                        <select
                          name="fleet_size"
                          className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white"
                        >
                          <option value="">Fleet Size</option>
                          <option value="1-25">1–25 vehicles</option>
                          <option value="26-100">26–100 vehicles</option>
                          <option value="101-500">101–500 vehicles</option>
                          <option value="500+">500+ vehicles</option>
                        </select>
                      </div>
                      <textarea
                        name="message"
                        placeholder="Tell us what you're looking for — pilot program, full rollout, or just learning more..."
                        rows={4}
                        className="bg-gray-700 border border-gray-600 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-white placeholder-gray-400"
                      ></textarea>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="cta-glow w-full bg-[#E67E22] text-white py-4 px-6 hover:bg-[#D35400] transition-colors font-medium rounded-md text-base disabled:opacity-50"
                      >
                        {submitting ? "SENDING..." : "SEND INQUIRY"}
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      No spam. Willy will follow up personally.
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
