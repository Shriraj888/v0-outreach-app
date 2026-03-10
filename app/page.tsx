import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <footer className="border-t border-white/5 py-16 bg-black flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6">
          <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-white/40 tracking-widest font-light text-xs uppercase">
          ColdMailCrafter &copy; 2026. Engineered for Replies.
        </p>
      </footer>
    </main>
  )
}
