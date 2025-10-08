"use client"

import GallerySlider from "./gallery-slider"

export default function Gallery() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">Gallery</h2>
          <p className="text-foreground-muted text-lg">Take a look at our facilities and community</p>
        </div>

        <GallerySlider />
      </div>
    </section>
  )
}
