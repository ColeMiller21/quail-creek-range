import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Participant Agreement | Quail Creek Range",
  description:
    "Download and print the Participant Agreement form before your visit to Quail Creek Range to save time on check-in.",
}

export default function ParticipantAgreementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[#4a5d3f]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <FileText className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Participant Agreement</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Release and Assumption of Risk Form</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Save Time on Check-In</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Click on the link below to view the Participant Agreement form. Fill out the form, print it, and bring
                it with you to the Range to save time on check-in.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/participant-agreement/form" target="_blank">
                  <FileText className="w-5 h-5 mr-2" />
                  View & Print Form
                </Link>
              </Button>
            </div>

            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-foreground">Instructions:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Click the "View & Print Form" button above</li>
                <li>The form will open in a new tab</li>
                <li>Print the form using your browser's print function</li>
                <li>Fill out all required information clearly</li>
                <li>Sign and date the form</li>
                <li>Bring the completed form with you to the range</li>
              </ol>
            </div>

            <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Note:</strong> All participants must complete this form. For participants under 18 years of age,
                a parent or guardian must complete the additional indemnification section.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
