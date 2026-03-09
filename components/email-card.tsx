"use client"

import { useState } from "react"
import { Copy, Check, RefreshCw } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface EmailCardProps {
  style: "formal" | "casual" | "bold"
  label: string
  color: "blue" | "green" | "orange"
  subject: string
  body: string
  onRegenerate: () => void
}

const colorStyles = {
  blue: {
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    subject: "bg-blue-500/10 border-blue-500/20",
  },
  green: {
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    subject: "bg-emerald-500/10 border-emerald-500/20",
  },
  orange: {
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    subject: "bg-orange-500/10 border-orange-500/20",
  },
}

const styleIcons = {
  formal: "🎩",
  casual: "😎",
  bold: "⚡",
}

export function EmailCard({
  style,
  label,
  color,
  subject,
  body,
  onRegenerate,
}: EmailCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const fullEmail = `Subject: ${subject}\n\n${body}`
    await navigator.clipboard.writeText(fullEmail)
    setCopied(true)
    toast.success("Copied!")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border",
              colorStyles[color].badge
            )}
          >
            <span>{styleIcons[style]}</span>
            {label}
          </span>
          <button
            onClick={onRegenerate}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
            title="Regenerate"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* Subject line */}
        <div
          className={cn(
            "px-4 py-3 rounded-lg border mb-4 text-sm font-medium text-foreground",
            colorStyles[color].subject
          )}
        >
          <span className="text-muted-foreground">Subject: </span>
          {subject}
        </div>

        {/* Body */}
        <div className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap min-h-[200px] mb-6">
          {body}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300",
            copied
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Email
            </>
          )}
        </button>
      </div>
    </div>
  )
}
