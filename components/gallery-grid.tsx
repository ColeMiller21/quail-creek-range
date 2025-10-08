"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const allImages = [
  { src: "/outdoor-shooting-range-pistol-bays-covered.jpg", alt: "Pistol bays" },
  { src: "/rifle-range-with-shooters-at-benches.jpg", alt: "Rifle range" },
  { src: "/shooting-instructor-helping-student.jpg", alt: "Training session" },
  { src: "/archery-range-with-targets.jpg", alt: "Archery range" },
  { src: "/shooting-range-check-in-building-exterior.jpg", alt: "Range facility" },
  { src: "/group-training-class-outdoor-range.jpg", alt: "Group training" },
  { src: "/ranges/pistol-range.avif", alt: "Pistol range bays" },
  { src: "/ranges/100yd-range.avif", alt: "100 yard rifle range" },
  { src: "/ranges/archery-range.avif", alt: "Archery range targets" },
  { src: "/ranges/police-range-1.avif", alt: "Police training range" },
  { src: "/ranges/police-range-2.avif", alt: "Law enforcement range" },
  { src: "/amy-instructor.png", alt: "Lead instructor Amy" },
]

interface GalleryGridProps {
  showAll?: boolean
}

export default function GalleryGrid({ showAll = false }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const displayImages = showAll ? allImages : allImages.slice(0, 6)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "Escape") {
        setSelectedImage(null)
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : displayImages.length - 1))
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! < displayImages.length - 1 ? prev! + 1 : 0))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, displayImages.length])

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : displayImages.length - 1))
  }

  const goToNext = () => {
    setSelectedImage((prev) => (prev! < displayImages.length - 1 ? prev! + 1 : 0))
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {displayImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              View Full Gallery
            </Button>
          </Link>
        </div>
      )}

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={40} />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={displayImages[selectedImage].src || "/placeholder.svg"}
              alt={displayImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {displayImages.length}
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  )
}
