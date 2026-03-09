import { Sparkles, Layers, Copy } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "3 Unique Styles",
    description: "Formal, Casual, Bold — choose the tone that fits your situation",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Personalized to your exact situation with cutting-edge AI",
  },
  {
    icon: Copy,
    title: "One Click Copy",
    description: "Ready to send instantly with a single click",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
