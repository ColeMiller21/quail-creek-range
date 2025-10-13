import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Contact Us | Quail Creek Range",
  description:
    "Get in touch with Quail Creek Range. Call us at 940-648-3356, email us, or send us a message through our contact form. We're here to help with all your shooting range needs.",
  keywords:
    "contact Quail Creek Range, shooting range contact, Northlake Texas contact, range inquiries",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#4a5d3f]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions about our ranges, training programs, or services?
            We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:940-648-3356"
                        className="text-muted-foreground hover:text-accent transition-colors text-lg"
                      >
                        940-648-3356
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tuesday - Sunday: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@quailcreekrange.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@quailcreekrange.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Location
                      </h3>
                      <p className="text-muted-foreground">Northlake, Texas</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Serving the greater DFW area
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                  Hours of Operation
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Tuesday - Sunday
                    </span>
                    <span className="font-semibold text-foreground">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday</span>
                    <span className="font-semibold text-foreground">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(940) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
