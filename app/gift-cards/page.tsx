import type { Metadata } from "next";
import Image from "next/image";
import { Gift, CreditCard, ShoppingCart, Ticket, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Gift Cards & Discount Cards | Quail Creek Range",
  description:
    "Purchase gift certificates and discount cards for Quail Creek Range. Perfect for shooting enthusiasts, training courses, and range time. Choose from gift certificates or discount cards.",
  keywords:
    "gift cards, discount cards, gift certificate, shooting range gift card, Quail Creek Range, shooting range, training gift card",
  openGraph: {
    title: "Gift Cards & Discount Cards | Quail Creek Range",
    description:
      "Purchase gift certificates and discount cards for Quail Creek Range. Perfect for shooting enthusiasts, training courses, and range time.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/quail-creek-range-opengraph.png",
        width: 1200,
        height: 630,
        alt: "Quail Creek Range Gift Cards",
      },
    ],
  },
};

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#4a5d3f]" />
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src="/outdoor-shooting-range-with-covered-shooting-bays-.jpg"
          alt="Quail Creek Range Gift Cards"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Gift Cards
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Give the perfect gift to the shooting enthusiast in your life
          </p>
        </div>
      </section>

      {/* Gift Card Purchase Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Choose Your Card Type
            </h2>
            <p className="text-muted-foreground text-lg">
              Select the perfect option for your needs
            </p>
          </div>

          {/* Two Card Options Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gift Certificate Card */}
            <div className="bg-card rounded-lg shadow-lg p-8 flex flex-col">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-3">
                Gift Certificate
              </h3>
              
              <p className="text-muted-foreground text-center mb-6 flex-grow">
                Perfect for gifting range time, training courses, and more
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">Choose any amount</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">Instant delivery</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">Use for any services or products</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Expires 1 year</strong> from date of purchase
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.powr.io/checkout_screen?unique_label=9aa8364c_1463160588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy Gift Certificate
              </a>
            </div>

            {/* Discount Card */}
            <div className="bg-card rounded-lg shadow-lg p-8 flex flex-col border-2 border-accent/20">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Ticket className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-3">
                Discount Card
              </h3>
              
              <p className="text-muted-foreground text-center mb-6 flex-grow">
                Save on every visit with ongoing discounts
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">Special member pricing</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">Discounts on range time</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">Savings on training courses</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Never expires</strong>
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.powr.io/checkout_screen?unique_label=7d74a169_1463161362"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy Discount Card
              </a>
            </div>
          </div>

          {/* General Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">
                Secure Payment
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Safe and encrypted checkout process
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">
                Instant Delivery
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Receive your card immediately
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Easy to Use</h3>
              <p className="text-sm text-muted-foreground text-center">
                Present at check-in for any purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Questions About Gift Cards?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us for assistance with gift card purchases or usage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Contact Us
            </a>
            <a
              href="tel:940-648-3356"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
            >
              Call 940-648-3356
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
