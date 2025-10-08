import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Quail Creek Range",
  description:
    "Find answers to common questions about Quail Creek Range including open carry policies, firearms allowed, age restrictions, ammunition rules, safety procedures, and more.",
  keywords:
    "shooting range FAQ, range rules, firearms questions, ammunition restrictions, safety procedures, Northlake Texas shooting range",
}

const faqs = [
  {
    question: "Is open carry allowed at QCR?",
    answer:
      "Yes, if you have an LTC. The firearms must stay holstered until you are at the firing line. No holster work is permitted. Once at the firing line you may unholster the firearm for the duration and shoot from the bench. When finished shooting for the day, you may return the firearm back to the holster.",
  },
  {
    question: "What about rapid fire?",
    answer:
      "Quail Creek Range is designed as a bulls eye facility. Rapid fire is prohibited by our NRA insurance. (2 seconds between shots)",
  },
  {
    question: "What firearms are allowed at QCR?",
    answer:
      "We allow most pistols and rifles, as long as they are not full auto. If you are in doubt, ask about your firearm at the front desk when checking in. You will probably be asked to show the firearm.",
  },
  {
    question: "Is there an age limit?",
    answer:
      'We allow all ages to come to the Range. However, a child must be 4\'6" (54") tall and able to hold the firearm and see over the shooting bench before being allowed to shoot. The adult must supervise and not shoot while the child is shooting.',
  },
  {
    question: "What ammunition is allowed?",
    answer:
      "Appropriate ammunition for the firearm is allowed. However, we do not allow Full Metal Jacket (FMJ) Rifle ammunition on the range.",
  },
  {
    question: "What exactly is FMJ?",
    answer:
      "The projectile is completely covered with a copper jacket, and does not have an exposed lead tip, ballistic tip, or hollow point.",
  },
  {
    question: "Why must I keep my muzzle below the top of the berm?",
    answer: "Safety and state law requires that all rounds remain on our property.",
  },
  {
    question: "Why am I required to unload my rifle magazine when I arrive at the range?",
    answer: "So the Range Safety Officer can verify you have the correct ammunition for our ranges. (See FMJ).",
  },
  {
    question: "Where can I shoot my pistol-grip-only-shotgun?",
    answer: "Only on the 7 yd. line of the pistol range due to the way it's intended to be shot.",
  },
  {
    question: 'Can I shoot shotgun "shot" at your range?',
    answer: "No. The pellets will ricochet and they do too much damage to the target boards. Only slugs are allowed.",
  },
  {
    question: "Why can't I uncase my rifle on the back table?",
    answer: "To prevent any loaded firearms coming out behind personnel on the firing line.",
  },
  {
    question: "Can I keep my brass?",
    answer:
      "Yes, however you may only pick up the brass that you bring to the range. Brass on the ground or left by others belongs to the range.",
  },
  {
    question: "Why is there a height restriction for children shooting handguns?",
    answer:
      'The height restriction is based on the height of our shooting benches. We ask that children shooting be 4\'6" (54") in order to shoot.',
  },
  {
    question: "Why can't my child and I shoot at the same time?",
    answer: "You can not properly supervise your child who is shooting if you are shooting.",
  },
  {
    question: "Why can I not stand and shoot at the 100 yard range?",
    answer:
      "The 100 yard range is specifically designed to prevent rounds from going over the berm. Standing negates that design.",
  },
  {
    question: "My rifle has been bore sighted only. Why can't I go directly to the 100 yard range?",
    answer: "Bore sighting is typically only good for 25 yards.",
  },
  {
    question: "Why can't I use reactive targets?",
    answer: "Reactive targets can cause ricochets.",
  },
  {
    question: "Do you allow smoking at the range?",
    answer:
      "You may smoke anywhere but on or near the firing line and in the store. Five gallon buckets of sand are provided for cigarettes butts.",
  },
  {
    question: "Is there a gunsmith on-site?",
    answer:
      "No, but minor problems might be corrected by our experienced staff. If needed they can refer you to a local gunsmith.",
  },
  {
    question: "What should I do if my firearm malfunctions?",
    answer:
      "Place the firearm on the shooting bench with the muzzle pointed down range and contact a RSO. DO NOT try to correct the problem yourself or take the gun to the RSO.",
  },
  {
    question: "How long are the cease fires?",
    answer: "Typically our cease fires are 5 minutes or less.",
  },
  {
    question: "How often are cease fires called?",
    answer: "Cease fires are called every 20 minutes.",
  },
  {
    question: "What services are available?",
    answer:
      "Firearms sales, scopes, scope mounting, cleaning, and sight in services, bore sighting, minor repairs, special orders, firearms transfers, lessons and training, and shooting accessories.",
  },
  {
    question: "Can the RSOs shoot my firearm to verify a problem?",
    answer: "Workload permitting that can be done.",
  },
  {
    question: "Are there caliber restrictions?",
    answer: "Yes, no 50 BMG allowed. No BB guns or air guns with less than 1200 FPS velocity.",
  },
  {
    question: "What distances are available?",
    answer: "Pistol - 7, 15, and 25 yards. Rifles - 25, 50, and 100 yards.",
  },
  {
    question: "Why must I fill out a liability release form every time I come out to shoot?",
    answer: "Our NRA insurance requires us to have a signed release for each visit.",
  },
  {
    question: "Once I sign the Safety Release Form who is responsible?",
    answer:
      "You are responsible for your every action while at the Range. You are responsible for every round you fire and for any minors you signed for.",
  },
  {
    question: "If I am with several shooters will I be guaranteed shooting positions together on the Range?",
    answer: "No. The RSOs will make every attempt to accommodate you, but shooting spaces are first come first served.",
  },
  {
    question: "Can I have more than one firearm at the shooting line?",
    answer: "Yes, unless there are so many they cause a safety issue.",
  },
  {
    question: "Are handicapped services available?",
    answer:
      "Yes. The RSOs will do everything possible to accommodate handicapped patrons. If available, an ATV (Kawasaki) will be used to transport injured or handicapped patrons and their gear across the creek (workload permitting).",
  },
  {
    question: "Can I shoot prone, kneeling, or practice using shooting sticks for a hunt?",
    answer:
      "If we are not too busy, the Range Master may allow you to fire from different positions. However the guns must return to the bench to be cleared during cease fires and must remain pointed in a safe directions when doing so. There are only 2 shooting positions available for shooting sticks (1 and 20).",
  },
  {
    question: "Do you have a family pricing plan?",
    answer: "Our pricing plan is $22 for adults and $17 for children under 15.",
  },
]

export default function FAQPage() {
  const allItemValues = faqs.map((_, index) => `item-${index}`)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#4a5d3f]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Find answers to common questions about our range, safety procedures, and policies
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* FAQ Accordion */}
          <Accordion type="multiple" defaultValue={allItemValues} className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-4 hover:no-underline">
                  <span className="text-accent mr-3 font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-16 text-center p-8 bg-muted rounded-lg border border-border">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you can't find the answer you're looking for, feel free to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:940-648-3356"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
              >
                Call Us: 940-648-3356
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
