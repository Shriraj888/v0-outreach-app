"use client"

import { Play, Sparkles, Send } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const steps = [
  {
    icon: Play,
    step: "01",
    title: "Input your target",
    description: "Briefly explain what you're offering and who you are reaching out to. Keep it natural.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Matrix",
    description: "Our engine processes your intent and generates three distinct, highly-converting permutations.",
  },
  {
    icon: Send,
    step: "03",
    title: "Select & Send",
    description: "Review the variants. Pick the one that resonates best and drop it straight into your campaign.",
  },
]

export function HowItWorksSection() {
  const container = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax pinned scroll line
    ScrollTrigger.create({
      trigger: container.current,
      start: "top 50%",
      end: "bottom 80%",
      animation: gsap.to(lineRef.current, { scaleY: 1, ease: "none" }),
      scrub: true,
    });

    // Reveal steps as they enter
    gsap.utils.toArray<HTMLElement>(".step-item").forEach((step, i) => {
      gsap.fromTo(step,
        { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          }
        }
      );
    });

  }, { scope: container });

  return (
    <section id="how-it-works" ref={container} className="relative py-40 px-4 bg-black overflow-hidden border-t border-white/5">

      <div className="absolute radial-glow inset-0 opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
            Seamless Workflow.
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Go from a blank page to a winning cold email in under 30 seconds.
          </p>
        </div>

        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <div
            ref={lineRef}
            className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-white -translate-x-1/2 origin-top scale-y-0 shadow-[0_0_15px_rgba(255,255,255,0.8)] hidden md:block"
          />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`step-item relative flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-0 ${index % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                  }`}
              >

                {/* Content Box */}
                <div className="flex-1 w-full md:w-1/2 glass p-8 md:p-12 rounded-3xl hover:bg-white/[0.04] transition-colors duration-500">
                  <span className="text-sm font-mono tracking-widest text-white/40 mb-4 block">
                    PHASE {step.step}
                  </span>
                  <h3 className="text-3xl font-medium text-white mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 hidden md:flex w-16 h-16 rounded-full glass items-center justify-center z-20 hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block flex-1 w-1/2" />

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
