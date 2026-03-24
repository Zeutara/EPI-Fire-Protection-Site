"use client";

import { motion } from "framer-motion";
import {
  Search,
  Wrench,
  ShieldCheck,
  Building2,
  Flame,
  Siren,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Inspections & Testing",
    outcome: "Stay compliant. Avoid fines.",
    description:
      "Annual fire alarm and sprinkler inspections that satisfy Ontario fire code, insurance requirements, and AHJ mandates. We catch deficiencies before they become violations — and before they cost you money.",
    features: [
      "Fire alarm verification testing",
      "Sprinkler system inspections",
      "Hydrant flow testing",
      "Annual compliance certificates",
    ],
  },
  {
    icon: Wrench,
    title: "Installation & Construction",
    outcome: "Built right. First time.",
    description:
      "Complete fire alarm and sprinkler system design, engineering, and installation. New construction, tenant fit-ups, and major retrofits — fully engineered to code and installed by licensed technicians.",
    features: [
      "Fire alarm system design & install",
      "Wet & dry sprinkler systems",
      "Suppression systems",
      "Standpipe & hydrant systems",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Monitoring",
    outcome: "Never miss a deadline.",
    description:
      "Preventive maintenance programs that keep your fire protection systems in peak condition. We track every device, every test date, and every deficiency — so you never get caught off guard.",
    features: [
      "Scheduled preventive maintenance",
      "24/7 system monitoring",
      "Deficiency tracking & resolution",
      "System lifecycle management",
    ],
  },
  {
    icon: Building2,
    title: "Code Compliance Consulting",
    outcome: "Pass every inspection.",
    description:
      "Navigating Ontario fire code is complex. Our compliance specialists handle all documentation, AHJ coordination, and deficiency resolution. We make sure your building passes — every time.",
    features: [
      "Fire code gap analysis",
      "Deficiency remediation plans",
      "AHJ coordination & filings",
      "Compliance documentation",
    ],
  },
  {
    icon: Flame,
    title: "Retrofits & Upgrades",
    outcome: "Modernize. Reduce risk.",
    description:
      "Outdated systems are liability risks. We upgrade legacy fire alarm panels, replace aging sprinkler heads, and bring your building up to current code — without disrupting operations.",
    features: [
      "Legacy panel replacements",
      "Sprinkler system upgrades",
      "Addressable system conversions",
      "Technology modernization",
    ],
  },
  {
    icon: Siren,
    title: "24/7 Emergency Service",
    outcome: "We answer. We show up.",
    description:
      "When your fire alarm won't stop, your sprinkler line bursts, or your panel goes down — every minute matters. Our emergency team responds same-day, around the clock, 365 days a year.",
    features: [
      "Same-day emergency response",
      "After-hours & weekend service",
      "Rapid fault diagnostics",
      "Emergency system repairs",
    ],
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
            className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-epi-black tracking-tight"
          >
            Every fire protection service.
            <br />
            <span className="text-epi-red">One accountable partner.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-epi-gray leading-relaxed"
          >
            Stop juggling multiple contractors. EPI handles inspections,
            installations, maintenance, and emergency response — all under one
            roof, one contract, one point of accountability.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-epi-gray-light hover:bg-white rounded-2xl p-8 border border-transparent hover:border-black/[0.06] hover:shadow-2xl hover:shadow-black/[0.06] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-epi-red/[0.07] group-hover:bg-epi-red rounded-xl flex items-center justify-center transition-colors duration-300">
                <service.icon className="w-6 h-6 text-epi-red group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Outcome tag */}
              <div className="mt-5 inline-block text-[11px] font-bold text-epi-red uppercase tracking-wider bg-epi-red/[0.06] px-3 py-1 rounded-full">
                {service.outcome}
              </div>

              {/* Content */}
              <h3 className="mt-4 text-xl font-extrabold text-epi-black">
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
                    className="flex items-center gap-2.5 text-sm text-epi-dark"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-epi-red shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-epi-red group-hover:gap-2.5 transition-all"
              >
                Get a quote
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-epi-gray mb-4">
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-epi-black hover:bg-epi-charcoal text-white font-bold px-8 py-4 rounded-xl transition-all text-sm"
          >
            Talk to a Fire Protection Specialist
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
