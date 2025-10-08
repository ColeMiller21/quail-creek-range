import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Target, Crosshair, Shield, Bot as Bow } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our Ranges | Quail Creek Range - Northlake, TX Shooting Facility",
  description:
    "Explore our world-class shooting facilities including 100-yard rifle range, pistol bays, police range, and archery range. Open to the public Tuesday-Sunday, 8 AM to 6 PM.",
  keywords:
    "shooting range, rifle range, pistol range, archery range, Northlake TX, gun range, police range, outdoor shooting",
  openGraph: {
    title: "Our Ranges | Quail Creek Range",
    description:
      "Explore our world-class shooting facilities including 100-yard rifle range, pistol bays, police range, and archery range.",
    type: "website",
  },
}

const ranges = [
  {
    id: "rifle",
    title: "100 Yard Rifle Range",
    icon: Crosshair,
    description:
      "The 100 yard rifle range is undercover with 20 bench positions. There are table tops behind each position. This range is used for sighting in your rifle and for practice.",
    features: [
      "20 covered bench positions",
      "Table tops at each position",
      "Perfect for sighting in rifles",
      "100 yard distance",
    ],
    image: "/ranges/100yd-range.avif",
  },
  {
    id: "intermediate",
    title: "Intermediate Rifle Range",
    icon: Target,
    description:
      "The intermediate rifle range has distances of 25 and 50 yards with 4 positions at 25 yards and 10 positions at 50 yards. Shotguns are allowed on these ranges using slugs only.",
    features: [
      "25 and 50 yard distances",
      "4 positions at 25 yards",
      "10 positions at 50 yards",
      "Shotguns allowed (slugs only)",
    ],
    image: "/ranges/100yd-range.avif",
  },
  {
    id: "pistol",
    title: "Pistol Ranges",
    icon: Target,
    description:
      "The pistol ranges are 7, 15, and 25 yards. There are a total of 27 bays with pulldown screens separating the positions, if desired. The bays are large enough to allow either standing or sitting firing comfortably.",
    features: [
      "7, 15, and 25 yard distances",
      "27 individual bays",
      "Pulldown privacy screens",
      "Standing or sitting positions",
    ],
    image: "/ranges/pistol-range.avif",
  },
  {
    id: "police",
    title: "Police Range",
    icon: Shield,
    description:
      "The Police Range is a range to be used by active law enforcement agents. The range is also used for LTC qualifying. It is an open range with a bench behind the range under trees.",
    features: ["Active law enforcement use", "LTC qualifying", "Open range design", "Shaded bench area"],
    image: "/ranges/police-range-1.avif",
  },
  {
    id: "archery",
    title: "Archery Range",
    icon: Bow,
    description:
      "The archery range has round bails to capture arrows. We have a high house you can shoot from as well. Range reaches out to 40-50 yards. We also have target blocks available to rent.",
    features: [
      "Round bails for arrow capture",
      "High house shooting platform",
      "40-50 yard distance",
      "Target blocks available to rent",
    ],
    image: "/ranges/archery-range.avif",
  },
]

export default function OurRangesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#4a5d3f]" />
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src="/ranges/100yd-range.avif"
          alt="Quail Creek Range Facilities"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our Ranges
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            World-class shooting facilities for all skill levels
          </p>
        </div>
      </section>

      {/* Ranges Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {ranges.map((range, index) => (
              <Card
                key={range.id}
                className="overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                    {/* Image */}
                    <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <Image src={range.image || "/placeholder.svg"} alt={range.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <range.icon className="w-6 h-6 text-accent" />
                        </div>
                        <h2 className="font-serif text-3xl font-bold text-foreground">{range.title}</h2>
                      </div>

                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">{range.description}</p>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground mb-3">Features:</h3>
                        <ul className="space-y-2">
                          {range.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-accent mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-[#4a5d3f]">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Visit?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Open to the public Tuesday through Sunday, 8 AM to 6 PM. No membership required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
            >
              View Pricing
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-white/90 text-primary font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
