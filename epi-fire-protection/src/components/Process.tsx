"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileText,
  Wrench,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "We inspect your property, review your existing fire protection systems, and identify every deficiency and compliance gap. No cost. No obligation.",
    detail: "Free site assessment",
  },
  {
    number: "02",
    icon: FileText,
    title: "Report",
    description:
      "You receive a detailed report with photos, deficiency priorities, code references, and a clear scope of work — so you know exactly what needs to happen and why.",
    detail: "Detailed documentation",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Repair & Install",
    description:
      "Our certified technicians execute the work. Repairs, installations, upgrades — all completed on schedule with minimal disruption to your building operations.",
    detail: "Licensed technicians",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Certify",
    description:
      "We handle all AHJ filings, compliance documentation, and certification. You receive a complete compliance package — ready for your insurer, your board, or your auditor.",
    detail: "Full compliance package",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Maintain",
    description:
      "Ongoing preventive maintenance keeps your systems performing year-round. We track every device, every test date, and every upcoming deadline — so you never fall behind.",
    detail: "Ongoing protection",
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
            className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-epi-black tracking-tight"
          >
            From assessment to protection.
            <br />
            <span className="text-epi-red">No surprises in between.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-epi-gray"
          >
            We&apos;ve refined this process over 33 years and 1,000+ projects.
            Every step is designed to give you clarity, control, and confidence.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-epi-red/20 to-transparent" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center group"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-[72px] h-[72px] bg-white rounded-2xl border-2 border-epi-red/10 group-hover:border-epi-red/30 flex items-center justify-center mb-6 shadow-lg shadow-black/[0.03] transition-all">
                  <step.icon className="w-7 h-7 text-epi-red" />
                  <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-epi-red rounded-lg flex items-center justify-center shadow-lg shadow-epi-red/30">
                    <span className="text-[10px] font-extrabold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Detail tag */}
                <div className="inline-block text-[10px] font-bold text-epi-red uppercase tracking-wider bg-epi-red/[0.06] px-2.5 py-1 rounded-full mb-3">
                  {step.detail}
                </div>

                <h3 className="text-lg font-extrabold text-epi-black mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-epi-gray leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-lg shadow-black/[0.03] border border-black/[0.04]">
            <p className="text-sm font-semibold text-epi-charcoal">
              Ready to start? Step one takes 15 minutes.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-epi-red hover:bg-epi-red-dark text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-lg shadow-epi-red/20"
            >
              Book Your Free Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
