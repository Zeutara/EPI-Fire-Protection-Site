import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    "Inspections & Testing",
    "Installation & Construction",
    "Maintenance & Monitoring",
    "Code Compliance",
    "Retrofits & Upgrades",
    "Emergency Service",
  ],
  Company: [
    "About EPI",
    "Careers",
    "Certifications",
    "Blog",
    "Contact",
  ],
  Resources: [
    "Fire Code Guide",
    "Inspection Checklist",
    "FAQ",
    "Client Portal",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-epi-charcoal text-white">
      {/* Emergency banner */}
      <div className="bg-epi-red">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm font-semibold text-white">
            Fire system emergency? We respond 24/7.
          </span>
          <a
            href="tel:4167462225"
            className="inline-flex items-center gap-2 bg-white text-epi-red font-bold text-sm px-5 py-2 rounded-lg hover:bg-white/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now: (416) 746-2225
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-epi-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div className="leading-tight">
                <span className="text-xl font-bold tracking-tight text-white">
                  EPI
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                  Fire Protection
                </span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              Toronto&apos;s trusted fire protection partner since 1991.
              Inspections, installations, maintenance, and emergency response
              for commercial and industrial properties.
            </p>
            <div className="space-y-3">
              <a
                href="tel:4167462225"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-epi-red" />
                (416) 746-2225
              </a>
              <a
                href="mailto:Sales@epi.ca"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-epi-red" />
                Sales@epi.ca
              </a>
              <span className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-epi-red" />
                675 Garyray Dr, Unit 202, North York, ON
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} EPI Fire Protection. All rights
            reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
