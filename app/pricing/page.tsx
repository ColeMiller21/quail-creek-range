import type { Metadata } from "next";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pricing & Range Fees | Quail Creek Range",
  description:
    "View our competitive range fees and discount packages at Quail Creek Range. Special rates for youth, seniors, military, law enforcement, and first responders.",
  keywords:
    "shooting range prices, range fees Northlake Texas, discount shooting range, military discount range, senior discount shooting",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#4a5d3f]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Pricing & Range Fees
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Range fees are good from 8:00am - 6:00pm and by the shooter
          </p>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Standard Rates */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6 text-center">
                Standard Rates
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 hover:border-accent transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">Rifle & Pistol</CardTitle>
                    <CardDescription>Per shooter</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-accent mb-2">
                      $22.00
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">Youth Rate</CardTitle>
                    <CardDescription>Ages 15 and under</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-accent mb-2">
                      $17.00
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">Archery</CardTitle>
                    <CardDescription>Per shooter</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-accent mb-2">
                      $18.00
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent hover:border-accent/80 transition-colors bg-accent/5">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-accent text-white">
                      Best Value
                    </Badge>
                    <CardTitle className="text-2xl">Combo</CardTitle>
                    <CardDescription>Archery/Rifle/Pistol</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-accent mb-2">
                      $28.00
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Discount Cards */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6 text-center">
                Discount Cards
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">5 Range Fees</CardTitle>
                    <CardDescription>Save $10.00</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-accent mb-4">
                      $100.00
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>5 visits to the range</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>$20 per visit</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">10 Range Fees</CardTitle>
                    <CardDescription>Save $20.00</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-accent mb-4">
                      $200.00
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>10 visits to the range</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>$20 per visit</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Senior Discount Cards */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6 text-center">
                Senior Discount Cards
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">5 Range Fees</CardTitle>
                    <CardDescription>Save $15.00</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-accent mb-4">
                      $95.00
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>5 visits to the range</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>$19 per visit</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">10 Range Fees</CardTitle>
                    <CardDescription>Save $30.00</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-accent mb-4">
                      $180.00
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>10 visits to the range</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>$18 per visit</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Service Discounts */}
            <div>
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
                <h2 className="font-serif text-3xl font-semibold text-primary mb-4">
                  Service Discounts with ID Card
                </h2>
                <div className="text-5xl font-bold text-accent mb-6">$20</div>
                <p className="text-lg text-foreground mb-6 max-w-3xl mx-auto text-balance">
                  Active Duty Military, Retired Military, First Responders, Law
                  Enforcement, Seniors (65+)
                </p>
                <div className="bg-background/50 rounded-lg p-4 max-w-2xl mx-auto">
                  <p className="text-sm text-muted-foreground italic">
                    Use of Police Range when available for Law Enforcement
                    Officer only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
