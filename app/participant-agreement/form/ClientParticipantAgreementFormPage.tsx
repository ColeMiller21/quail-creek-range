"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export default function ClientParticipantAgreementFormPage() {
  return (
    <>
      {/* Print Button - Hidden when printing */}
      <div className="fixed top-4 right-4 print:hidden z-50">
        <Button onClick={() => window.print()} size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg">
          <Printer className="w-5 h-5 mr-2" />
          Print Form
        </Button>
      </div>

      {/* Printable Form */}
      <main className="min-h-screen bg-white text-black p-8 md:p-12 max-w-4xl mx-auto print:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center border-b-2 border-black pb-4">
            <h1 className="text-2xl font-bold mb-2">Participant Agreement, Release and Assumption of Risk</h1>
            <p className="text-sm font-semibold">Please PRINT clearly</p>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">First Name</label>
                <div className="border-b-2 border-black h-8"></div>
              </div>
              <div>
                <label className="text-sm font-semibold">Last Name</label>
                <div className="border-b-2 border-black h-8"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Phone (____) ____-________</label>
                <div className="border-b-2 border-black h-8"></div>
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <div className="border-b-2 border-black h-8"></div>
              </div>
            </div>
          </div>

          {/* Parent/Guardian Section */}
          <div className="border-2 border-black p-4 space-y-3">
            <h2 className="font-bold text-lg">Parent's or Guardian's Additional Indemnification</h2>
            <p className="text-sm italic">(must be complete for participants under the age of 18)</p>
            <div>
              <label className="text-sm font-semibold">Minor's Names</label>
              <div className="border-b-2 border-black h-8"></div>
            </div>
          </div>

          {/* Agreement Text */}
          <div className="space-y-4 text-sm leading-relaxed text-justify">
            <p>
              In consideration of the services of Quail Creek Shooting Range LLC their agents, owners, officers,
              volunteers, participants, employees and all other persons or entities acting in any capacity on their
              behalf (hereinafter collectively referred to as QCR), I hereby agree to release, indemnify, and discharge
              QCR, on behalf of myself, my spouse, my children, my parents, my heirs, assigns, personal representative
              and estate as follows:
            </p>

            <div className="space-y-3">
              <p>
                <strong>1.</strong> I acknowledge that target practice at a shooting range entails known and
                unanticipated risks that could result in physical or emotional injury, paralysis, death, or damage to
                me, to property, or to third parties. I understand that such risks simply cannot be eliminated without
                jeopardizing the essential qualities of the activity.
              </p>

              <p className="pl-6">
                The risk include, among other things: Participation may result in the undersigned or third parties being
                shot by a firearm; suffering hearing loss; eye injury or loss; inhalation or contact with airborne
                contaminants and or flying debris.
              </p>

              <p className="pl-6">
                Furthermore, QCR employees have difficult jobs to perform. They seek safety, but they are not
                infallible. They might be unaware of a participant's fitness or abilities. They may give incomplete
                warnings or instructions, and the equipment being used might malfunction.
              </p>

              <p>
                <strong>2.</strong> I expressly agree and promise to accept and assume all the risks existing in this
                activity. My participation in this activity is purely voluntary, and I elect to participate in spite of
                the risks.
              </p>

              <p>
                <strong>3.</strong> I hereby voluntarily release, forever discharge and agree to indemnify and hold
                harmless QCR from any and all claims, demands, or causes of action, which are in any way connected with
                my participation in this activity or my use of QCR equipment or facilities, including any such claims
                which allege negligent acts or omissions of QCR.
              </p>

              <p>
                <strong>4.</strong> Should QCR or anyone acting on their behalf be required to incur attorney's fees and
                costs to enforce this agreement, I agree to indemnify and hold them harmless for all such fees and
                costs.
              </p>

              <p>
                <strong>5.</strong> I certify that I have adequate insurance to cover any injury or damage I may cause
                or suffer while participating, or else I agree to bear the costs of such injury or damage myself. I
                further certify that I am willing to assume the risk of any medical or physical condition I may have.
              </p>

              <p>
                <strong>6.</strong> In the event that I file a lawsuit against QCR, I agree to do so solely in the state
                of Texas, and further agree that the substantive laws of Texas shall apply in the action without regard
                to the conflict of law rules of that state. I agree that if any portion of this agreement is found to be
                void or unenforceable, the remaining portions shall remain in full force and effect.
              </p>

              <p>
                By signing this document, I/and or my minors acknowledge that if anyone is hurt or property is damaged
                during my participation in this activity, I/or my minors may be found by a court of law to have waived
                my right to maintain a lawsuit against QCR on the basis of any claim from which I/and or my minors have
                released them herein.
              </p>

              <p>
                I have had sufficient opportunity to read this entire document. I have read and understood it and I
                agree to be bound by its items.
              </p>
            </div>
          </div>

          {/* Signature Section */}
          <div className="space-y-4 pt-6">
            <h3 className="font-bold">Signature of Participant/and or Parent or Guardian of Minors</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold">Date</label>
                <div className="border-b-2 border-black h-10"></div>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-semibold">Signature</label>
                <div className="border-b-2 border-black h-10 flex items-end pb-1">
                  <span className="text-xl">X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
