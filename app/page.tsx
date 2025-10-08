import type { Metadata } from "next"
import Hero from "@/components/hero"
import EventsSlideshow from "@/components/events-slideshow"
import RangesSection from "@/components/ranges-section"
import TrainingSection from "@/components/training-section"
import WeatherWidget from "@/components/weather-widget"
import Gallery from "@/components/gallery"

export const metadata: Metadata = {
  title: "Quail Creek Range | North Texas Premier Outdoor Shooting Range",
  description:
    "Outdoor shooting range in Northlake, Texas offering pistol, rifle, and archery ranges plus professional training courses. Open Tuesday-Sunday, 8 AM to 6 PM. No membership required.",
  keywords:
    "shooting range, gun range, Northlake TX, outdoor range, rifle range, pistol range, archery, LTC training, NRA courses, Texas shooting range",
  openGraph: {
    title: "Quail Creek Range | North Texas Premier Outdoor Shooting Range",
    description:
      "Outdoor shooting range in Northlake, Texas offering pistol, rifle, and archery ranges plus professional training courses.",
    type: "website",
    locale: "en_US",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventsSlideshow />
      <RangesSection />
      <TrainingSection />
      <WeatherWidget />
      <Gallery />
    </main>
  )
}
