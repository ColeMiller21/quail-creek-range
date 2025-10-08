import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "LTC - License To Carry | Quail Creek Range",
  description:
    "Texas License to Carry (LTC) classes at Quail Creek Range. Professional instruction, flexible scheduling, and comprehensive training for your concealed handgun license.",
}

export default function LTCPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#4a5d3f]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">License To Carry</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Professional LTC training and certification in Northlake, Texas
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Texas DPS Link */}
          <Card className="p-6 mb-12 bg-accent/10 border-accent/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Apply for Your License</h2>
                <p className="text-muted-foreground">Register online before class at the Texas DPS website</p>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="https://txapps.texas.gov/txapp/txdps/ltc/" target="_blank" rel="noopener noreferrer">
                  Texas DPS LTC Portal
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">13814 FM 1171, Northlake, TX 76262</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Contact</h3>
                  <p className="text-muted-foreground">(940) 648-3356</p>
                  <p className="text-sm text-muted-foreground">info@qcrange.com</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Important Information */}
          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Class Information</h2>

            <div className="space-y-6 text-foreground/90">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Class Schedule</h3>
                <p className="mb-2">
                  It is important for you to be on time for class, there is a lot of information to cover and we will
                  begin promptly at <strong>9:00 A.M.</strong>
                </p>
                <p>
                  The state requires LTC classes to be 4-6 hrs. minimum. Range time and lunch are not included in the 4
                  – 6 hr. lesson plan. Class is usually over at 3:30 - 4 P.M. however, a large class may run over, so
                  please plan a flexible schedule.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Firearms & Ammunition</h3>
                <p className="mb-2">
                  Students using their own personal firearms must have them in good condition; the instructors will
                  inspect all handguns before qualifying. If you wish to use our guns, we will provide them at no
                  charge, except the cost of ammo.
                </p>
                <p>
                  Everyone is required to use factory ammo (no reloads); you will need a minimum of 50 rounds, which may
                  be purchased at Quail Creek Range LLC. We have 9 mm semi automatics to loan.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Lunch Options</h3>
                <p>
                  You may bring lunch or eat out at several places close by; the instructors can give you directions.
                  Recommended places to eat are Paradise Convenience store (best hamburgers around) at FM 407 and I35W 2
                  miles north, or Subway at 114 and I35W 2 miles south.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Application Process</h3>
                <p className="mb-2">
                  To apply for your license you should register on-line before the class. Go to{" "}
                  <Link
                    href="https://txapps.texas.gov/txapp/txdps/ltc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    www.txdps.state.tx.us
                  </Link>
                  , and click "concealed handgun". Only electronic (FAST) finger prints will be accepted by DPS. Your
                  closest location can be found on-line based on your zip code.
                </p>
                <p>Quail Creek Range LLC can help you submit your application on-line if you require assistance.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Pricing</h3>
                <p className="mb-2">
                  <strong>New license:</strong> $79.95 ($69.95 per person if prepaid, no penalty to reschedule).
                </p>
                <p className="mb-2">
                  You do not need to attend a renewal class as of 9-1-13. However, if you want to monitor our class the
                  cost is $35.00. This will keep you current on the changes in the laws etc. Shooting is optional but
                  recommended (at no additional cost).
                </p>
                <p>Call or email info@qcrange.com us to sign up for a class.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">What to Bring On Class Day</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment, due on class day, cash, check, or credit card.</li>
                  <li>Handgun and ammo (50 rounds factory ammo)</li>
                  <li>
                    Dress comfortably, the shooting will be done outside (dress accordingly); bring a light jacket for
                    the classroom if you tend to get cold. If we have bad weather we may reschedule the shooting.
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                <p className="font-semibold">
                  Disclaimer: You only need the class for the first time license. If you are renewing, just renew
                  through the state's website. No need to retake the class.
                </p>
              </div>

              <p className="text-center text-lg font-medium">Thank you for choosing Quail Creek Range LLC.</p>
            </div>
          </Card>

          {/* Upcoming Dates & Sign Up Form */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 mb-12">
            {/* Upcoming Dates */}
            <Card className="p-8 bg-gradient-to-br from-[#4a5d3f] to-[#3d4d34] text-white h-fit border-accent/30">
              <h2 className="text-3xl font-bold mb-6 text-center border-b-2 border-accent/50 pb-4">
                UPCOMING
                <br />
                LTC DATES
              </h2>
              <div className="space-y-4 text-center">
                <div className="text-2xl font-bold text-accent">9/13/2025</div>
                <div className="text-xl font-semibold text-muted-foreground italic">
                  No Class in
                  <br />
                  October
                </div>
                <div className="text-2xl font-bold text-accent">11/8/2025</div>
                <div className="text-2xl font-bold text-accent">12/13/2025</div>
              </div>
            </Card>

            {/* Sign Up Form */}
            <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/30 border-2 border-accent/30">
              <h2 className="text-3xl font-bold mb-6 text-center">LTC Class Sign Up</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">
                    First and Last Name *
                  </Label>
                  <Input id="name" type="text" placeholder="First and Last Name" required className="mt-2 h-12" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">
                    Phone Number *
                  </Label>
                  <Input id="phone" type="tel" placeholder="Phone Number" required className="mt-2 h-12" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">
                    Email *
                  </Label>
                  <Input id="email" type="email" placeholder="Email" required className="mt-2 h-12" />
                </div>

                <div>
                  <Label htmlFor="class-date" className="text-base">
                    LTC Class Date *
                  </Label>
                  <Select name="class-date" required>
                    <SelectTrigger className="mt-2 h-12 w-full">
                      <SelectValue placeholder="Select a class date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9/13/2025">Saturday, September 13, 2025</SelectItem>
                      <SelectItem value="11/8/2025">Saturday, November 8, 2025</SelectItem>
                      <SelectItem value="12/13/2025">Saturday, December 13, 2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg bg-accent hover:bg-accent/90 border-2 border-accent/50"
                  >
                    Submit $74.32
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-3">69.95 + 6.25%(tax)</p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
