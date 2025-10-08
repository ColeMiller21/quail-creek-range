"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

const allImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qcr-gal-1-O2jFBSLd8sIj8L3VuRH9qbaT2YMK2S.avif",
    alt: "Quail Creek Range gallery image 1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qcr-gal-2-JxNyZK00TQqCh4p4kESbjUi4kudQ80.avif",
    alt: "Quail Creek Range gallery image 2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qcr-gal-3-adF02JaenuCy1pgUbYoxIwayd6HhyG.avif",
    alt: "Quail Creek Range gallery image 3",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qcr-gal-4-rQ4Jtc4abD4UmcPGmZ7paV8xHtTc2L.avif",
    alt: "Quail Creek Range gallery image 4",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qcr-gal-5-psWPXeTKIeGW6pBEOpXJzpz8JVHqWX.avif",
    alt: "Quail Creek Range gallery image 5",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qcr-gal-6-cuThgvy6RdkfObZVhUx3aZhaoabM7U.avif",
    alt: "Quail Creek Range gallery image 6",
  },
]

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "Escape") {
        setSelectedImage(null)
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : allImages.length - 1))
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! < allImages.length - 1 ? prev! + 1 : 0))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))
  }

  const goToPreviousLightbox = () => {
    setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : allImages.length - 1))
  }

  const goToNextLightbox = () => {
    setSelectedImage((prev) => (prev! < allImages.length - 1 ? prev! + 1 : 0))
  }

  return (
    <>
      <div className="relative max-w-5xl mx-auto">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-transparent">
          <button onClick={() => setSelectedImage(currentIndex)} className="w-full h-full cursor-pointer group">
            <Image
              src={allImages[currentIndex].src || "/placeholder.svg"}
              alt={allImages[currentIndex].alt}
              fill
              className="object-contain transition-transform duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {allImages.length}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            className="text-white hover:text-accent transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex justify-center gap-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-accent w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="text-white hover:text-accent transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

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
              goToPreviousLightbox()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-[90vw] h-[90vh]">
              <Image
                src={allImages[selectedImage].src || "/placeholder.svg"}
                alt={allImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {allImages.length}
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToNextLightbox()
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
