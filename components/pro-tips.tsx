import { Lightbulb } from "lucide-react"

interface ProTipsProps {
  tips: string[]
}

export function ProTips({ tips }: ProTipsProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Pro Tips</h3>
      </div>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-medium">
              {index + 1}
            </span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
