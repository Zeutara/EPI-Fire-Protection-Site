"use client";

import { motion } from "framer-motion";
import {
  Building,
  Building2,
  Factory,
  Home,
  Landmark,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Building,
    title: "Condominiums",
    audience: "Condo Boards & Property Managers",
    description:
      "Fire alarm testing, sprinkler inspections, and compliance management for condo corporations. We coordinate with property managers, minimize tenant disruption, and deliver compliant buildings — on schedule.",
    stats: "400+ condo buildings protected",
    challenges: [
      "Annual compliance deadlines",
      "Tenant coordination & access",
      "Aging system upgrades",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Office",
    audience: "Building Owners & Facility Managers",
    description:
      "Full-service fire protection for office towers, retail centres, and mixed-use developments. From base building systems to tenant fit-ups, we keep your commercial properties compliant and insured.",
    stats: "Bay Street to Mississauga",
    challenges: [
      "Multi-tenant coordination",
      "Insurance compliance",
      "After-hours service needs",
    ],
  },
  {
    icon: Factory,
    title: "Industrial & Warehouse",
    audience: "Operations & Safety Managers",
    description:
      "Specialized sprinkler design for high-piled storage, manufacturing facilities, and distribution centres. We engineer systems that meet NFPA standards for your specific commodity classification.",
    stats: "200,000+ sqft projects completed",
    challenges: [
      "High-piled storage requirements",
      "Commodity classification",
      "Insurance premium optimization",
    ],
  },
  {
    icon: Home,
    title: "Property Management",
    audience: "Portfolio & Asset Managers",
    description:
      "Managing 10 buildings or 100? Our portfolio programs give property managers a single point of contact, consolidated reporting, and predictable maintenance costs across your entire portfolio.",
    stats: "Portfolio programs for 10-500+ buildings",
    challenges: [
      "Multi-property coordination",
      "Budget predictability",
      "Consolidated compliance reporting",
    ],
  },
  {
    icon: Landmark,
    title: "Government & Institutional",
    audience: "Facility Directors & Procurement",
    description:
      "Schools, hospitals, government buildings, and public facilities require the highest standards of fire safety. We hold the certifications and clearances to serve institutional clients across Ontario.",
    stats: "Municipal & provincial contracts",
    challenges: [
      "Regulatory compliance standards",
      "Procurement requirements",
      "Public safety mandates",
    ],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-epi-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-epi-black tracking-tight"
          >
            Built for your building type.
            <br />
            <span className="text-epi-red">Engineered for your needs.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-epi-gray leading-relaxed"
          >
            A condo building has different fire protection needs than a
            warehouse. We don&apos;t sell generic packages — we deliver solutions
            engineered for your specific property type and risk profile.
          </motion.p>
        </div>

        {/* Industry cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group bg-white rounded-2xl overflow-hidden border border-black/[0.04] hover:border-black/[0.08] hover:shadow-2xl hover:shadow-black/[0.06] transition-all duration-300 ${
                i >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Header bar */}
              <div className="bg-epi-black px-7 py-5 group-hover:bg-epi-charcoal transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <industry.icon className="w-5 h-5 text-epi-red" />
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">
                    {industry.audience}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {industry.title}
                </h3>
              </div>

              {/* Body */}
              <div className="px-7 py-6">
                <p className="text-sm text-epi-gray leading-relaxed">
                  {industry.description}
                </p>

                {/* Stat badge */}
                <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold text-epi-red bg-epi-red/[0.06] px-3 py-1.5 rounded-full">
                  {industry.stats}
                </div>

                {/* Challenges */}
                <div className="mt-5 space-y-2">
                  <span className="text-[10px] font-bold text-epi-gray uppercase tracking-wider">
                    Key Challenges We Solve
                  </span>
                  {industry.challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className="flex items-center gap-2.5 text-sm text-epi-dark"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-epi-red shrink-0" />
                      {challenge}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-epi-red group-hover:gap-2.5 transition-all"
                >
                  Get a quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
