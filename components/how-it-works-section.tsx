import { PenLine, Sparkles, Send } from "lucide-react"

const steps = [
  {
    icon: PenLine,
    step: "01",
    title: "Describe your situation",
    description: "Tell us who you're emailing and what you want",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI crafts 3 styles",
    description: "Get formal, casual, and bold variants instantly",
  },
  {
    icon: Send,
    step: "03",
    title: "Copy and send",
    description: "Pick your favorite and land in their inbox",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Three simple steps to craft the perfect cold email
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center mb-6">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              
              <span className="text-xs font-medium text-primary mb-2">
                STEP {step.step}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
