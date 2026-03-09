"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Zap } from "lucide-react"
import { CraftForm } from "@/components/craft-form"

export default function CraftPage() {
  return (
    <main className="min-h-screen bg-background py-8 px-4">
      {/* Background effects */}
      <div className="fixed inset-0 bg-background -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      </div>

      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Craft Your Cold Email
          </h1>
          <p className="text-muted-foreground">
            Fill in the details below and let AI generate 3 unique email styles for you
          </p>
        </div>

        <CraftForm />
      </div>
    </main>
  )
}
