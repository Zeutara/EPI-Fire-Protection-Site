"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why EPI", href: "#why-epi" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top utility bar — desktop only */}
      <div className="bg-epi-black text-white/70 text-[13px] hidden lg:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href="tel:4167462225"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-epi-red" />
              <span className="font-medium">(416) 746-2225</span>
            </a>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-epi-red" />
              24/7 Emergency Response Available
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/40">
              Serving the Greater Toronto Area since 1991
            </span>
            <a
              href="mailto:Sales@epi.ca"
              className="text-epi-red hover:text-epi-red-light transition-colors font-medium"
            >
              Sales@epi.ca
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-black/5"
            : "bg-white/95 backdrop-blur-md border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="EPI Fire Protection Inc."
              width={150}
              height={51}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold text-epi-gray-700 hover:text-epi-red px-4 py-2 rounded-lg hover:bg-epi-red/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA cluster */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:4167462225"
              className="text-[13px] font-bold text-epi-charcoal hover:text-epi-red transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              (416) 746-2225
            </a>
            <a
              href="#contact"
              className="bg-epi-red hover:bg-epi-red-dark text-white text-[13px] font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-epi-red/20 hover:shadow-epi-red/30 hover:-translate-y-px"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:4167462225"
              className="w-10 h-10 bg-epi-red/10 rounded-lg flex items-center justify-center"
            >
              <Phone className="w-4 h-4 text-epi-red" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 bg-epi-gray-light rounded-lg flex items-center justify-center text-epi-charcoal"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white border-t border-black/5"
            >
              <div className="px-6 py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-semibold text-epi-charcoal hover:text-epi-red hover:bg-epi-red/5 px-4 py-3 rounded-lg transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-black/5 space-y-3">
                  <a
                    href="tel:4167462225"
                    className="flex items-center justify-center gap-2 text-sm font-bold text-epi-charcoal bg-epi-gray-light px-6 py-3.5 rounded-lg"
                  >
                    <Phone className="w-4 h-4" /> (416) 746-2225
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center bg-epi-red text-white font-bold px-6 py-3.5 rounded-lg shadow-lg shadow-epi-red/20"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
