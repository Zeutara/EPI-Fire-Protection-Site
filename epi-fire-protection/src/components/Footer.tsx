import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Inspections & Testing", href: "#services" },
    { label: "Installation & Construction", href: "#services" },
    { label: "Maintenance & Monitoring", href: "#services" },
    { label: "Code Compliance", href: "#services" },
    { label: "Retrofits & Upgrades", href: "#services" },
    { label: "Emergency Service", href: "#services" },
  ],
  Industries: [
    { label: "Condominiums", href: "#industries" },
    { label: "Commercial Office", href: "#industries" },
    { label: "Industrial & Warehouse", href: "#industries" },
    { label: "Property Management", href: "#industries" },
    { label: "Government & Institutional", href: "#industries" },
  ],
  "Service Areas": [
    { label: "Toronto", href: "#contact" },
    { label: "North York", href: "#contact" },
    { label: "Mississauga", href: "#contact" },
    { label: "Brampton", href: "#contact" },
    { label: "Etobicoke", href: "#contact" },
    { label: "Vaughan", href: "#contact" },
    { label: "Markham", href: "#contact" },
    { label: "Scarborough", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-epi-charcoal text-white">
      {/* Emergency banner */}
      <div className="bg-epi-red">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-sm font-bold text-white">
              Fire system emergency? We respond 24/7 — nights, weekends,
              holidays.
            </span>
          </div>
          <a
            href="tel:4167462225"
            className="inline-flex items-center gap-2 bg-white text-epi-red font-extrabold text-sm px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" />
            Call Now: (416) 746-2225
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="EPI Fire Protection Inc."
                width={150}
                height={51}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs mb-6">
              The GTA&apos;s most trusted fire protection partner since 1991.
              33+ years protecting commercial, industrial, and residential
              properties with 88 certified technicians and a 90%+
              recommendation rate.
            </p>
            <div className="space-y-3">
              <a
                href="tel:4167462225"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-epi-red" />
                <span className="font-semibold">(416) 746-2225</span>
              </a>
              <a
                href="mailto:Sales@epi.ca"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-epi-red" />
                <span className="font-semibold">Sales@epi.ca</span>
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-epi-red" />
                675 Garyray Dr, Unit 202, North York, ON
              </span>
            </div>

            {/* Certifications */}
            <div className="mt-6 flex items-center gap-4">
              {["CFAA", "NFPA", "TSSA", "ULC", "CASA"].map((cert) => (
                <span
                  key={cert}
                  className="text-[10px] font-bold text-white/20 uppercase tracking-wider"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div
              key={heading}
              className={heading === "Service Areas" ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA column */}
          <div className="lg:col-span-1 hidden lg:block" />
        </div>

        {/* Quote CTA in footer */}
        <div className="mt-16 bg-epi-slate rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-extrabold text-white mb-1">
              Ready to protect your building?
            </h4>
            <p className="text-sm text-white/40">
              Free assessment. Custom quote within 24 hours. No obligation.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-epi-red hover:bg-epi-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-epi-red/20 text-sm shrink-0"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} EPI Fire Protection Inc. All
            rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
