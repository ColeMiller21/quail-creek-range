import { Target, Crosshair, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ranges = [
  {
    icon: Target,
    title: "Pistol Bays",
    description: "Multiple covered pistol bays with 25-yard distances. Perfect for handgun practice and qualification.",
    features: ["Covered shooting stations", "25-yard range", "Steel & paper targets", "Beginner friendly"],
  },
  {
    icon: Crosshair,
    title: "Rifle Range",
    description: "Extended rifle range up to 200 yards. Ideal for zeroing rifles and long-range practice.",
    features: ["Up to 200 yards", "Covered positions", "Bench rest available", "All calibers welcome"],
  },
  {
    icon: Zap,
    title: "Law Enforcement Bays",
    description: "Dedicated tactical bays for law enforcement training and advanced shooters.",
    features: ["Movement drills", "Scenario training", "Private rentals", "Professional instruction"],
  },
  {
    icon: Shield,
    title: "Archery Range",
    description: "Dedicated archery range for bow hunters and target archers of all skill levels.",
    features: ["Multiple distances", "Target stands provided", "Compound & traditional", "Family friendly"],
  },
]

export default function RangesSection() {
  return (
    <section id="ranges" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">Our Ranges</h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            State-of-the-art facilities designed for safety, comfort, and an exceptional shooting experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ranges.map((range, index) => {
            const Icon = range.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-2xl text-foreground mb-2">{range.title}</h3>
                      <p className="text-foreground-muted leading-relaxed">{range.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {range.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            View Pricing & Hours
          </a>
        </div>
      </div>
    </section>
  )
}
