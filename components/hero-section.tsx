"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Mail } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".hero-badge",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 }
    )
      .fromTo(".hero-title",
        { y: 40, opacity: 0, rotationX: -20 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "expo.out" },
        "-=0.7"
      )
      .fromTo(".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.8"
      )
      .fromTo(".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.6"
      )
      .fromTo(".floating-element",
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
        "-=0.5"
      );

    // Parallax background items
    gsap.to(".parallax-bg", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Parallax floating elements
    gsap.utils.toArray<HTMLElement>(".floating-element").forEach((el, i) => {
      gsap.to(el, {
        y: -100 * (i + 1),
        rotation: i % 2 === 0 ? 10 : -10,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden perspective-1000">
      {/* Abstract Background Grid + Globs */}
      <div className="absolute inset-0 bg-background pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-20 parallax-bg" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 parallax-bg" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 parallax-bg" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0">
          <Sparkles className="w-4 h-4 text-white/80" />
          <span className="text-sm font-medium text-white/80">AI-Powered Email Crafting</span>
        </div>

        <h1 className="hero-title text-5xl sm:text-7xl lg:text-[8rem] font-medium tracking-tighter text-white leading-[1.1] text-balance opacity-0">
          Cold Emails That <br />
          <span className="text-glow text-white">Actually</span> Land.
        </h1>

        <p className="hero-subtitle mt-8 text-lg sm:text-2xl text-white/50 max-w-2xl mx-auto text-pretty font-light tracking-wide opacity-0">
          3 inputs. 3 unique styles. Infinite possibilities. <br className="hidden sm:block" />
          Craft the perfect sequence in seconds, not hours.
        </p>

        <div className="hero-cta mt-12 flex flex-col sm:flex-row items-center gap-4 opacity-0">
          <Link
            href="/craft"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full bg-white text-black overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              Start Crafting
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <p className="text-sm text-white/40 mt-4 sm:mt-0 sm:ml-4">No credit card required. Free forever.</p>
        </div>

        {/* Floating Abstract UI Elements */}
        <div className="absolute left-[10%] top-[20%] floating-element glass-card p-4 rounded-2xl hidden lg:block opacity-0">
          <div className="w-32 h-2 rounded-full bg-white/20 mb-3" />
          <div className="w-24 h-2 rounded-full bg-white/10" />
        </div>

        <div className="absolute right-[15%] top-[30%] floating-element glass-card p-5 rounded-2xl hidden lg:block opacity-0">
          <div className="w-10 h-10 rounded-full bg-white/10 mb-4 flex items-center justify-center">
            <Mail className="w-5 h-5 text-white/50" />
          </div>
          <div className="w-40 h-2 rounded-full bg-white/20 mb-2" />
          <div className="w-32 h-2 rounded-full bg-white/10" />
        </div>

        <div className="absolute left-[20%] bottom-[15%] floating-element glass-card p-4 rounded-2xl hidden lg:block opacity-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10" />
            <div className="w-20 h-3 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
