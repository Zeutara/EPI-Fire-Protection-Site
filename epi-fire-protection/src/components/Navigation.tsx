"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why EPI", href: "#why-epi" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-epi-charcoal text-white/80 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              (416) 746-2225
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              24/7 Emergency Response
            </span>
          </div>
          <span className="text-white/50">
            675 Garyray Drive, Unit 202, North York, ON
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-epi-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold tracking-tight text-epi-black">
                EPI
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-epi-gray font-medium">
                Fire Protection
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-epi-slate hover:text-epi-red transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:4167462225"
              className="text-sm font-semibold text-epi-charcoal hover:text-epi-red transition-colors"
            >
              (416) 746-2225
            </a>
            <a
              href="#contact"
              className="bg-epi-red hover:bg-epi-red-dark text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-epi-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-black/5"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-epi-charcoal hover:text-epi-red transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-black/10 space-y-3">
                  <a
                    href="tel:4167462225"
                    className="flex items-center gap-2 text-sm font-semibold text-epi-charcoal"
                  >
                    <Phone className="w-4 h-4" /> (416) 746-2225
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center bg-epi-red text-white font-semibold px-6 py-3 rounded-lg"
                  >
                    Get a Quote
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
