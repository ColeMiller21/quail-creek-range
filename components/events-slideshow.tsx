"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "Happy Hour Special",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happy-hour-qrc-cnyHDKe82d2DSOQ2xwY2zwzYZ2723s.png",
  },
  {
    id: 2,
    title: "LTC Course - August 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ltc-class-qcr-d1foplvEj9EiOrOepXL6kgWEObGC46.png",
  },
  {
    id: 3,
    title: "Birthday Special",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bday-qcr-llqHnuFwlzylQJT8CDyfELX9ViaSwp.png",
  },
  {
    id: 4,
    title: "We're Hiring!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/help-wanted-qcr-R9cULyOt2sTY9bFpVZLsgIKRL1iLQz.png",
  },
]

export default function EventsSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <section id="events" className="relative py-16 bg-[#4a5d3f]">
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Events & Special Offers
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Check out our latest promotions, upcoming events, and special deals
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-transparent">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-accent w-8" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
