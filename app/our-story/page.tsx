"use client"

import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, ArrowRight } from "lucide-react"

export default function OurStoryPage() {
  return (
    <div>
      <div className="h-[96px]"></div>

      {/* Hero — lead with the tension */}
      <section className="relative bg-black text-white py-24 sm:py-32 overflow-hidden">
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
              <span className="text-xs font-medium text-[#E67E22] tracking-[0.2em]">OUR STORY</span>
            </div>
            <h1 className="hero-animate-delay-1 text-4xl sm:text-5xl lg:text-6xl mb-8 tracking-tight font-bold leading-[1.1]">
              A TRUCKER SAW THE PROBLEM EVERY NIGHT. SO HE BUILT THE SOLUTION.
            </h1>
            <p className="hero-animate-delay-2 text-lg sm:text-xl leading-relaxed text-gray-400 max-w-2xl">
              TRILIGHT wasn&apos;t invented in a lab. It was invented by a working truck driver
              named Willy — because he was tired of the industry treating roadside deaths as
              an acceptable cost of doing business.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem — what Willy saw */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="scroll-reveal">
            <p className="text-2xl sm:text-3xl font-bold leading-snug text-gray-900 mb-8">
              Every trucker knows the feeling.
            </p>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                You&apos;re broken down on the shoulder. It&apos;s dark. Traffic is moving at 70 mph three feet
                from where you&apos;re standing. You grab the plastic reflective triangles that FMCSA requires
                you to carry and start walking — 10 feet back, then 100 feet, then 200 feet — setting them
                on the ground and hoping the headlights of approaching cars will catch the tiny reflective
                surface before it&apos;s too late.
              </p>
              <p>
                It&apos;s the most dangerous part of any breakdown. And the equipment you&apos;re using to
                protect yourself hasn&apos;t been meaningfully updated in half a century.
              </p>
              <p className="text-gray-900 font-medium text-xl">
                Willy knew there had to be something better. Not eventually. Now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Willy */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center scroll-reveal">
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight text-gray-900">
                THE MAN BEHIND TRILIGHT
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Willy came to America with nothing but determination. He built a stoneworking
                  business in Virginia from the ground up. But the road kept calling — and later in
                  life, when most people think about slowing down, he got his CDL and became a
                  professional truck driver.
                </p>
                <p>
                  Mile after mile, he saw the same thing every trucker sees: the fear of being on
                  the shoulder at night, the inadequacy of the equipment, the close calls. The
                  difference is Willy had always had a builder&apos;s mind. He didn&apos;t just see
                  problems — he saw solutions.
                </p>
                <p>
                  Every feature of TRILIGHT came from something Willy experienced on the road. The
                  magnetic mount, because fumbling with triangles on the shoulder wastes precious
                  time. The wearable harness, because the driver needs to be seen, not just the truck.
                  The directional folding, because traffic needs to know which way to go. The dock
                  hook, because backing into a dark loading bay shouldn&apos;t mean guessing.
                </p>
                <p className="text-gray-900 font-medium">
                  All of it, from one trucker who refused to accept the status quo.
                </p>
              </div>
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
                <div className="absolute -bottom-4 -left-4 bg-black text-white p-5 rounded-xl shadow-xl">
                  <p className="font-bold text-sm">WILLY</p>
                  <p className="text-xs text-gray-400">Founder &amp; Inventor</p>
                  <p className="text-xs text-gray-400">Professional Truck Driver</p>
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
              WHAT HE BUILT
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Not just a better triangle. A complete visibility system designed by someone who
              understands what the job actually demands.
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
                  label: "ACTIVE LED VISIBILITY",
                  text: "Generates its own 360° light. Visible from over a mile. Doesn't depend on someone else's headlights.",
                },
                {
                  label: "MAGNETIC MOUNT",
                  text: "Attaches to any metal surface in seconds. No walking down the shoulder to place triangles.",
                },
                {
                  label: "WEARABLE HARNESS",
                  text: "So the driver is seen — not just the truck. The only product that protects the person, not just the vehicle.",
                },
                {
                  label: "DIRECTIONAL FOLDING",
                  text: "Fold to hide one side's LEDs and it becomes a flashing arrow — guiding traffic away from the breakdown.",
                },
                {
                  label: "DOCK GUIDANCE",
                  text: "Hook onto loading bays as a bright reference point for backing. Simple fix for expensive dock damage.",
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
            <p className="text-center text-sm text-gray-500 mt-4">TRILIGHT deployed on the roadside</p>
          </div>
        </div>
      </section>

      {/* The values — short, no repetition */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight text-gray-900 text-center">
            WHY WE DO THIS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E67E22] mb-4">01</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">SAVE LIVES</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Roadside deaths aren&apos;t an acceptable cost of trucking. Better equipment means
                fewer drivers struck on the shoulder. That&apos;s the whole point.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E67E22] mb-4">02</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">BUILT FROM THE ROAD</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every feature exists because a trucker needed it. Not because a focus group
                suggested it. The road is the R&amp;D department.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E67E22] mb-4">03</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">JUST THE START</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                TRILIGHT is the first product, not the last. We&apos;re finalizing manufacturing
                now with a full lineup of safety innovations coming behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 scroll-reveal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            SUPPORT A BUSINESS THAT GETS IT
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            When you buy TRILIGHT, you&apos;re buying from a trucker who built what he
            wished existed. Family-owned, road-tested, made in America.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product/trilight"
              className="cta-glow inline-flex items-center justify-center gap-2 bg-[#E67E22] text-white py-4 px-8 text-lg font-medium hover:bg-[#D35400] transition-colors"
            >
              SHOP TRILIGHT <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/enterprise"
              className="border-2 border-white/30 text-white py-4 px-8 text-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              FLEET SOLUTIONS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
