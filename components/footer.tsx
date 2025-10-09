import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer id="contact" className="relative text-white bg-[#4a5d3f]">
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/qcr-logo-white.png"
                alt="Quail Creek Range"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="font-serif font-semibold text-xl">
                Quail Creek Range
              </span>
            </div>
            <p className="text-neutral-100 leading-relaxed">
              North Texas' premier outdoor shooting range. Open to the public
              with professional instruction and state-of-the-art facilities.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:940-648-3356"
                className="flex items-start gap-3 text-neutral-100 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>940-648-3356</span>
              </a>
              <a
                href="mailto:info@qcrange.com"
                className="flex items-start gap-3 text-neutral-100 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@qcrange.com</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-100">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  I-35W @ FM 1171, Exit 74
                  <br />
                  Northlake, Texas
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">
              Hours of Operation
            </h3>
            <div className="text-neutral-100">
              <div className="font-semibold text-white mb-2">
                Open to the Public
              </div>
              <div>Tuesday - Sunday</div>
              <div>8:00 AM - 6:00 PM</div>
              <div className="mt-2 text-sm">Closed Mondays</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#ranges"
                  className="text-neutral-100 hover:text-accent transition-colors"
                >
                  Our Ranges
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-neutral-100 hover:text-accent transition-colors"
                >
                  Events & Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-100 hover:text-accent transition-colors"
                >
                  Range Rules
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-100 hover:text-accent transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-100 hover:text-accent transition-colors"
                >
                  FFL Transfers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Us On */}
        <div className="border-t border-white/10 pt-12 pb-8 mb-8">
          <div className="text-center">
            <h3 className="font-serif font-semibold text-2xl mb-6 text-white">
              Follow Us On:
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a
                href="#"
                className="flex items-center justify-center w-16 h-16 bg-[#1877F2] hover:bg-[#1877F2]/90 rounded-lg transition-all hover:scale-110"
                aria-label="Follow us on Facebook"
                title={siteConfig.social.facebook}
              >
                <Facebook className="w-8 h-8 text-white" fill="white" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 rounded-lg transition-all hover:scale-110"
                aria-label="Follow us on Instagram"
                title={siteConfig.social.instagram}
              >
                <Instagram className="w-8 h-8 text-white" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-16 h-16 bg-[#D32323] hover:bg-[#D32323]/90 rounded-lg transition-all hover:scale-110"
                aria-label="Review us on Yelp"
                title={siteConfig.social.yelp}
              >
                <svg
                  className="w-16 h-16"
                  viewBox="10.496 10.505 235.008 234.989"
                  aria-hidden="true"
                >
                  <g transform="translate(-373.642 -318.344)">
                    <path
                      fill="red"
                      d="M583.658 328.849H419.626c-19.6 0-35.488 15.888-35.488 35.487v164.015c0 19.599 15.888 35.486 35.488 35.486h164.032c19.6 0 35.488-15.888 35.488-35.486V364.337c0-19.599-15.889-35.488-35.488-35.488z"
                    ></path>
                    <linearGradient
                      id="yelp-gradient"
                      x1="-1854.896"
                      x2="-1906.593"
                      y1="1320.426"
                      y2="1169.736"
                      gradientTransform="rotate(180 -326.61 537.647)scale(.5915)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                    <path
                      fill="url(#yelp-gradient)"
                      d="M557.056 338.895H446.227c-29.337 0-52.955 23.81-52.955 53.385v108.127c.95 23.086 4.603 8.491 11.555-17.075 8.081-29.713 34.396-55.682 66.445-75.145 24.461-14.855 51.84-24.341 101.68-25.244 28.264-.511 25.77-36.683-15.896-44.048z"
                      opacity=".554"
                    ></path>
                    <path
                      fill="#fff"
                      d="M436.972 371.548c14.795-13.239 32.142-22.554 58.673-17.738v85.281c-1.137 4.093-4.548 5.003-7.504 2.729l-51.169-70.272zM542.859 402.589c11.886 7.424 25.188 22.263 28.957 44.116l-57.133 9.25c-3.295-1.253-5.773-3.321-5.457-8.187l33.633-45.179zM516.39 475.74c-3.686.828-5.635 3.043-4.776 7.505l28.897 48.918c12.85-5.896 25.676-19.658 31.48-40.049L516.39 475.74zM486.712 482.562c3.822-.495 7.392-.569 8.528 3.411l1.706 54.58c-18.774 1.389-34.43-3.458-45.028-18.421l34.794-39.57zM479.207 457.319c2.73 3.281 4.262 6.733.683 10.916l-52.533 18.421c-6.193-17.1-5.626-33.159 0-48.439l51.85 19.102z"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-16 h-16 bg-[#FF0000] hover:bg-[#FF0000]/90 rounded-lg transition-all hover:scale-110"
                aria-label="Subscribe on YouTube"
                title={siteConfig.social.youtube}
              >
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect width="48" height="48" fill="red" rx="24"></rect>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M35.7379 14.1401C37.0229 14.486 38.0361 15.4992 38.3821 16.7842C39.0246 19.1318 38.9999 24.0247 38.9999 24.0247C38.9999 24.0247 38.9999 28.8929 38.3821 31.2405C38.0361 32.5255 37.0229 33.5387 35.7379 33.8846C33.3903 34.5024 23.9999 34.5024 23.9999 34.5024C23.9999 34.5024 14.6342 34.5024 12.2619 33.8599C10.9769 33.5139 9.96375 32.5008 9.61779 31.2158C9 28.8929 9 24 9 24C9 24 9 19.1318 9.61779 16.7842C9.96375 15.4992 11.0016 14.4613 12.2619 14.1153C14.6095 13.4976 23.9999 13.4976 23.9999 13.4976C23.9999 13.4976 33.3903 13.4976 35.7379 14.1401ZM28.8187 24L21.0098 28.4975V19.5025L28.8187 24Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-neutral-200 text-sm">
          <p>
            © {new Date().getFullYear()} Quail Creek Range. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
