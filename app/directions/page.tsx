import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Directions to Quail Creek Range | Northlake, TX",
  description:
    "Find your way to Quail Creek Range. Located 2 miles north of Texas Motor Speedway on I35 West, Exit 74. Get detailed directions to our shooting range in Northlake, TX.",
  keywords:
    "directions, location, Quail Creek Range, Northlake TX, Texas Motor Speedway, Exit 74, I35W",
};

export default function DirectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#4a5d3f]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Directions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find your way to Quail Creek Range in Northlake, Texas
          </p>
        </div>
      </section>

      {/* Updated spacing to py-20 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Location Description */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-foreground text-center leading-relaxed">
                Quail Creek Range is located 2 miles north of the Texas Motor
                Speedway on I35 West (Exit 74 on I35W same side as TMS).
              </p>
            </div>

            {/* Map and Directions Grid - Map on Left, Text on Right */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left Side - Map Image */}
              <div className="bg-card rounded-lg p-4 shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qcr-directions-8asCH4IaE0InyWoQaQxN8Owladmd5q.avif"
                  alt="Map showing directions to Quail Creek Range from Texas Motor Speedway"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Right Side - Directions Text */}
              <div className="space-y-8">
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                    Driving Directions
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    After crossing over I-35, you will come to a gravel
                    road...keep going. Quail Creek Range is 300 ft. further on
                    your right.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                    Address
                  </h3>
                  <address className="not-italic space-y-1 text-muted-foreground">
                    <p className="text-lg font-semibold text-foreground">
                      Quail Creek Range
                    </p>
                    <p>13814 FM 1171</p>
                    <p>Northlake, TX 76262</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
