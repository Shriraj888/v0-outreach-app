"use client"

import { Sparkles, Layers, Send, BrainCircuit } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const features = [
  {
    icon: Layers,
    title: "Dynamic Tones",
    description: "Formal, Casual, Bold. Precisely calibrated to your recipient's expectation.",
  },
  {
    icon: BrainCircuit,
    title: "Context Aware",
    description: "Powered by advanced LLMs that understand the subtle nuances of cold outreach.",
  },
  {
    icon: Send,
    title: "One-Click Deploy",
    description: "Copy to your clipboard instantly or push directly to your sequence.",
  },
]

export function FeaturesSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal text
    gsap.fromTo(".feature-heading",
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );

    // Reveal cards with slight 3D rotation and stagger
    gsap.fromTo(".feature-card",
      { y: 100, opacity: 0, rotationX: 15, scale: 0.9 },
      {
        y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 1.2, stagger: 0.15, ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        }
      }
    );

    // Continuous slight floating animation for icons
    gsap.to(".feature-icon", {
      y: -10,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative py-40 px-4 bg-black overflow-hidden">
      {/* Background glow for glassmorphism */}
      <div className="absolute min-w-[1000px] min-h-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24 feature-heading opacity-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            Beyond templates. <br className="hidden md:block" />
            <span className="text-white/50">Engineered for responses.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 perspective-1000">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card relative p-8 md:p-10 rounded-3xl glass-card group hover:-translate-y-2 transition-all duration-500 opacity-0"
            >
              <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                  <feature.icon className="feature-icon w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight group-hover:text-glow transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-white/50 leading-relaxed text-lg font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
