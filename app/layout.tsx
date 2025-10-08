import type React from "react";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { BackToTop } from "@/components/back-to-top";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Quail Creek Range | North Texas Premier Outdoor Shooting Range",
  description:
    "Outdoor shooting range in Northlake, Texas offering pistol, rifle, and archery ranges plus professional training courses.",
  icons: {
    icon: "/qcr-logo-black.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        <ScrollToTop />
        <Navigation />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
