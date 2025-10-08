"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const getNavBackground = () => {
    if (isHomePage) {
      return isScrolled ? "glass-effect-dark shadow-lg" : "bg-transparent"
    }
    return "glass-effect-dark shadow-lg"
  }

  const getLogoSrc = () => {
    if (isHomePage) {
      return isScrolled ? "/qcr-logo-white.png" : "/qcr-logo-black.png"
    }
    return "/qcr-logo-white.png"
  }

  const getTextColor = () => {
    return "text-white"
  }

  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/our-ranges",
      label: "Ranges",
      submenu: [
        { href: "/our-ranges", label: "Our Ranges" },
        { href: "/range-rules", label: "Range Rules" },
        { href: "/participant-agreement", label: "Participant Agreement" },
      ],
    },
    { href: "/training", label: "Training" },
    { href: "/ltc", label: "LTC" },
    { href: "/directions", label: "Directions" },
    { href: "/faq", label: "FAQ" },
    {
      href: "/contact-us",
      label: "Contact",
      submenu: [
        { href: "/contact-us", label: "Contact Us" },
        { href: "#about", label: "About Us" },
        { href: "/pricing", label: "Our Pricing" },
        { href: "#hours", label: "Hours of Operation" },
        { href: "#ffl", label: "FFL Transfers" },
        { href: "/directions", label: "Directions" },
      ],
    },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavBackground()}`}>
      <div className="container mx-auto px-4">
        {/* Desktop Two-Row Layout */}
        <div className="hidden lg:block">
          {/* Top Row: Logo, Hours, Contact Button */}
          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image
                  src={getLogoSrc() || "/placeholder.svg"}
                  alt="Quail Creek Range"
                  width={60}
                  height={60}
                  className="w-14 h-14 transition-opacity duration-300"
                  priority
                />
              </div>
              <span className="font-serif font-semibold text-2xl text-white">Quail Creek Range</span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white">
                <Clock className="w-4 h-4" />
                <div>
                  <div className="font-semibold">Tues-Sun</div>
                  <div className="text-xs opacity-90">8 AM - 6 PM</div>
                </div>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                <Phone className="w-4 h-4 mr-2" />
                940-648-3356
              </Button>
            </div>
          </div>

          {/* Bottom Row: Navigation Links */}
          <div className="flex items-center justify-center gap-8 py-4">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.submenu && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="font-medium text-white hover:text-accent transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-0 pt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Single-Row Layout */}
        <div className="lg:hidden flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src={getLogoSrc() || "/placeholder.svg"}
                alt="Quail Creek Range"
                width={60}
                height={60}
                className="w-12 h-12 transition-opacity duration-300"
                priority
              />
            </div>
            <span className={`font-serif font-semibold text-xl ${getTextColor()} transition-colors duration-300`}>
              Quail Creek Range
            </span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${getTextColor()} transition-colors duration-300`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 z-40 bg-background overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="container mx-auto px-4 py-8">
              <Accordion type="single" collapsible className="w-full">
                {navLinks.map((link, index) => (
                  <div key={link.href}>
                    {link.submenu ? (
                      <AccordionItem value={`item-${index}`} className="border-b border-border/50">
                        <AccordionTrigger className="text-foreground font-medium hover:text-accent transition-colors py-4 hover:no-underline text-lg">
                          {link.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-1 pl-4 pb-2">
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.href}
                                href={sublink.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-muted-foreground hover:text-accent transition-colors py-3 px-4 block rounded-md hover:bg-muted"
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-foreground font-medium hover:text-accent transition-colors py-4 px-0 block border-b border-border/50 text-lg"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </Accordion>

              <div className="flex items-center gap-2 text-foreground pt-6 mt-4 border-t border-border">
                <Clock className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Tues-Sun: 8 AM - 6 PM</div>
                </div>
              </div>
              <div className="mt-6 pb-8">
                <Button className="bg-accent hover:bg-accent/90 text-white w-full h-12 text-base">
                  <Phone className="w-5 h-5 mr-2" />
                  940-648-3356
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
