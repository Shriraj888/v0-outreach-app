"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  });

  return (
    <nav ref={navRef} className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <div className="glass px-6 py-3 rounded-full flex items-center justify-between w-full max-w-4xl pointer-events-auto shadow-2xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
            <Mail className="w-4 h-4 text-black" />
          </div>
          <span className="font-semibold text-sm tracking-wide text-white">ColdMailCrafter</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/craft"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Craft Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
