"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-black text-white pt-32 pb-10 px-6 sm:px-10 lg:px-16 w-full font-sans border-t border-white/[0.06]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-8 mb-32">
          
          <h2 
            className="font-black leading-[0.75] tracking-tighter uppercase shrink-0"
            style={{ fontSize: "clamp(5rem, 16vw, 15rem)" }}
          >
            OUTREACH
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-16 sm:gap-[6.5rem] lg:pb-[1.125rem]">
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 mb-6 uppercase">Navigate</h3>
              <ul className="space-y-4 text-[15px] font-semibold text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors block">Home</Link></li>
                <li><Link href="/craft" className="hover:text-white transition-colors block">Generator</Link></li>
                <li><Link href="#features" className="hover:text-white transition-colors block">Features</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white transition-colors block">How it Works</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 mb-6 uppercase">Connect</h3>
              <div className="flex gap-3 mb-8">
                <a href="https://github.com" className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-white">
                  <Github className="h-[20px] w-[20px]" />
                </a>
                <a href="https://linkedin.com" className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-white">
                  <Linkedin className="h-[20px] w-[20px]" />
                </a>
                <a href="https://twitter.com" className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-white">
                  <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-white/[0.06] text-[14px] font-semibold text-gray-500">
          <p>© 2026 Outreach. All rights reserved.</p>
          <button onClick={scrollToTop} className="flex items-center gap-1.5 hover:text-white transition-all group">
            Back to top 
            <span className="text-lg leading-none mb-0.5 transition-transform group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}


