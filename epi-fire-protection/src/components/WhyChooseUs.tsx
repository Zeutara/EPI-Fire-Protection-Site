"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Users,
  TrendingUp,
  Zap,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const differentiators = [
  {
    icon: Clock,
    title: "33 Years. Zero Shortcuts.",
    description:
      "Since 1991, we've protected thousands of properties across the GTA. Our experience means we've seen every system, every code change, and every edge case. You get solutions that work — the first time.",
  },
  {
    icon: Award,
    title: "Full Compliance. Guaranteed.",
    description:
      "We don't just inspect — we ensure you pass. Every project meets or exceeds Ontario fire code. If a deficiency is found, we fix it. If documentation is needed, we file it. No gaps.",
  },
  {
    icon: Users,
    title: "Your Dedicated Account Team",
    description:
      "No call centres. No ticket queues. You get a dedicated account manager who knows your buildings, your systems, and your compliance history. One call, one person, every time.",
  },
  {
    icon: Zap,
    title: "Same-Day Emergency Response",
    description:
      "Fire system down? Sprinkler line burst? Alarm won't silence? Our emergency team responds the same day — nights, weekends, holidays. When minutes matter, we show up.",
  },
  {
    icon: TrendingUp,
    title: "Scales With Your Portfolio",
    description:
      "Whether you manage 5 buildings or 500, our systems and processes scale. Consolidated reporting, portfolio-wide compliance tracking, and volume pricing that actually saves you money.",
  },
  {
    icon: FileCheck,
    title: "Transparent. No Surprises.",
    description:
      "Detailed inspection reports with photos. Clear deficiency tracking. Upfront pricing with no hidden fees. Proactive recommendations before issues become emergencies. You see everything we see.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-epi"
      className="py-24 md:py-32 bg-epi-black relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-epi-red via-epi-red/40 to-transparent" />
      <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-epi-red/[0.04] rounded-full blur-[120px]" />
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-epi-red/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
          >
            Why EPI
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Other companies check boxes.
            <br />
            <span className="text-epi-red">We eliminate risk.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-white/40 leading-relaxed"
          >
            The fire protection company you choose doesn&apos;t just affect
            compliance — it affects whether your building is actually safe. Here&apos;s
            what sets EPI apart from every other contractor in the GTA.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-epi-charcoal p-8 md:p-10 group hover:bg-epi-slate transition-colors duration-300"
            >
              <div className="w-11 h-11 bg-epi-red/10 rounded-xl flex items-center justify-center group-hover:bg-epi-red/20 transition-colors">
                <item.icon className="w-5 h-5 text-epi-red" />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-epi-red hover:bg-epi-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-epi-red/20"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:4167462225"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white font-semibold transition-colors text-sm"
          >
            Or call us: (416) 746-2225
          </a>
        </motion.div>
      </div>
    </section>
  );
}
