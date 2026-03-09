"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function ShimmerCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Badge */}
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-lg" />
          </div>

          {/* Subject */}
          <Skeleton className="h-12 w-full rounded-lg mb-4" />

          {/* Body lines */}
          <div className="space-y-3 mb-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          {/* Button */}
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      ))}
    </div>
  )
}
