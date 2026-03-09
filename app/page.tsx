import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        <p>ColdMailCrafter - Your unfair advantage in the inbox</p>
      </footer>
    </main>
  )
}
