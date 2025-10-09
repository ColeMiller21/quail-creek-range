"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cqr-bg.avif"
          alt="Quail Creek Range"
          fill
          priority
          className="object-cover object-top md:object-center"
          quality={90}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-in">
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 text-balance">
            Quail Creek Range
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-light">
            North Texas' Premier Outdoor Shooting Range
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Handgun • Rifle • Archery • Professional Training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/our-ranges"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Explore Our Ranges
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
