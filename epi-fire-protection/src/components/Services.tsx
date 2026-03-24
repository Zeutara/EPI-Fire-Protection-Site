"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Search,
  Wrench,
  Building2,
  ShieldCheck,
  Siren,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Inspections & Testing",
    description:
      "Comprehensive fire system inspections that keep you code-compliant and audit-ready. We catch issues before they become violations.",
    features: ["Fire alarm testing", "Sprinkler inspections", "Annual certifications"],
  },
  {
    icon: Wrench,
    title: "Installation & Construction",
    description:
      "Full-service fire alarm and sprinkler system design, engineering, and installation for new builds and retrofits.",
    features: ["Fire alarm systems", "Sprinkler systems", "Suppression systems"],
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Monitoring",
    description:
      "Preventive maintenance programs that extend system life, reduce downtime, and ensure continuous protection.",
    features: ["Scheduled maintenance", "24/7 monitoring", "System upgrades"],
  },
  {
    icon: Building2,
    title: "Code Compliance",
    description:
      "Navigate complex fire codes with confidence. We handle all documentation, filings, and authority-having-jurisdiction coordination.",
    features: ["Code consulting", "Deficiency resolution", "Documentation"],
  },
  {
    icon: Flame,
    title: "Retrofits & Upgrades",
    description:
      "Modernize outdated fire protection systems to meet current codes and leverage the latest technology.",
    features: ["System modernization", "Technology upgrades", "Capacity expansion"],
  },
  {
    icon: Siren,
    title: "Emergency Service",
    description:
      "When systems fail, every minute counts. Our emergency team responds around the clock to restore protection fast.",
    features: ["24/7 response", "Rapid diagnostics", "Emergency repairs"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-epi-red uppercase tracking-widest"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-bold text-epi-black tracking-tight"
          >
            Complete fire protection.
            <br />
            One trusted partner.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-epi-gray leading-relaxed"
          >
            From initial inspection to ongoing maintenance, we handle every
            aspect of fire safety so you can focus on running your business.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-epi-gray-light hover:bg-white rounded-2xl p-8 border border-transparent hover:border-black/5 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-epi-red/10 group-hover:bg-epi-red rounded-xl flex items-center justify-center transition-colors duration-300">
                <service.icon className="w-6 h-6 text-epi-red group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-epi-black">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-epi-gray leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-epi-slate"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-epi-red shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-epi-red opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
