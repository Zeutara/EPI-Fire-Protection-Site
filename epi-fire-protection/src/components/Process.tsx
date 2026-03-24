"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Ruler, HardHat, ShieldCheck, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "We start with a thorough assessment of your property, systems, and compliance status. No obligation, no pressure — just clarity.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Plan",
    description:
      "Our engineers develop a detailed scope of work tailored to your building's specific needs, timeline, and budget.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Execute",
    description:
      "Our certified technicians install, repair, or upgrade your fire protection systems with minimal disruption to operations.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Certify",
    description:
      "We handle all documentation, authority filings, and certifications. You receive a complete compliance package.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Maintain",
    description:
      "Ongoing maintenance and monitoring keeps your systems performing. We track everything so you never miss a deadline.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-epi-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-epi-red uppercase tracking-widest"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-bold text-epi-black tracking-tight"
          >
            Simple process.
            <br />
            Serious protection.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-epi-gray"
          >
            We&apos;ve refined our process over three decades to deliver results
            efficiently and without surprises.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-epi-red/20 to-transparent" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-20 h-20 bg-white rounded-2xl border-2 border-epi-red/20 flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className="w-8 h-8 text-epi-red" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-epi-red rounded-lg flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-epi-black mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-epi-gray leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
