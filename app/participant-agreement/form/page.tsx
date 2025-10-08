import type { Metadata } from "next"
import ClientParticipantAgreementFormPage from "./ClientParticipantAgreementFormPage"

export const metadata: Metadata = {
  title: "Participant Agreement Form | Quail Creek Range",
  description: "Printable Participant Agreement, Release and Assumption of Risk form for Quail Creek Range.",
}

export default function ParticipantAgreementFormPage() {
  return <ClientParticipantAgreementFormPage />
}
