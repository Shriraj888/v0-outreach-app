"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Sparkles, Loader2 } from "lucide-react"
import { CraftForm } from "@/components/craft-form"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function CraftPage() {
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const [isGoingBack, setIsGoingBack] = useState(false);

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsGoingBack(true);

    gsap.to(container.current, {
      opacity: 0,
      y: 20,
      scale: 0.98,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        router.push('/');
      }
    });
  };

  useGSAP(() => {
    // Beautiful coordinated wipe-in
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".craft-bg", 
      { opacity: 0 }, 
      { opacity: 0.1, duration: 1.5 }
    )
    .fromTo(".craft-back-link",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      "-=1.2"
    )
    .fromTo(".craft-header-badge",
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(".craft-title",
      { y: 40, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 },
      "-=0.6"
    )
    .fromTo(".craft-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.9"
    )
    .fromTo(".craft-form-wrapper",
      { y: 60, opacity: 0, filter: "blur(20px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, clearProps: "filter" },
      "-=0.8"
    );
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen py-8 px-4 sm:px-6">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="craft-bg absolute inset-0 bg-grid opacity-0" />
      </div>

      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          onClick={handleBack}
          className="craft-back-link inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-300 mb-10 group opacity-0"
        >
          {isGoingBack ? (
             <Loader2 className="w-4 h-4 animate-spin text-white" />
          ) : (
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          )}
          {isGoingBack ? "Returning..." : "Back to home"}
        </Link>

        <div className="text-center mb-12">
          <div className="craft-header-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] mb-6 opacity-0">
            <Sparkles className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-400">AI Email Generator</span>
          </div>
          <h1 className="craft-title text-4xl sm:text-5xl font-medium text-white mb-4 tracking-tight opacity-0">
            Craft Your Email
          </h1>
          <p className="craft-subtitle text-gray-500 text-lg font-light max-w-md mx-auto opacity-0">
            Fill in the details and let AI generate 3 unique cold email styles for you
          </p>
        </div>

        <div className="craft-form-wrapper opacity-0">
          <CraftForm />
        </div>
      </div>
    </main>
  )
}
