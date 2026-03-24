"use client";

import { motion } from "framer-motion";
import { Clock, Award, Users, TrendingUp, Zap, FileCheck } from "lucide-react";

const differentiators = [
  {
    icon: Clock,
    title: "33+ Years of Expertise",
    description:
      "Since 1991, we've protected thousands of properties across the GTA. Our depth of experience means fewer surprises and faster solutions.",
  },
  {
    icon: Award,
    title: "Full Compliance, Guaranteed",
    description:
      "We don't just fix problems — we prevent them. Every project meets or exceeds Ontario fire code requirements.",
  },
  {
    icon: Users,
    title: "Dedicated Account Teams",
    description:
      "You get a single point of contact who knows your building, your systems, and your compliance history inside and out.",
  },
  {
    icon: Zap,
    title: "24/7 Emergency Response",
    description:
      "When your fire system goes down, waiting isn't an option. Our emergency team is on call around the clock, 365 days a year.",
  },
  {
    icon: TrendingUp,
    title: "Scalable for Any Portfolio",
    description:
      "Managing one building or one hundred, our systems and processes scale to meet the needs of property managers and enterprise clients.",
  },
  {
    icon: FileCheck,
    title: "Transparent Reporting",
    description:
      "Detailed inspection reports, clear deficiency tracking, and proactive recommendations — no hidden costs, no surprises.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-epi" className="py-24 md:py-32 bg-epi-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-epi-red via-epi-red-dark to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-epi-red/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-epi-red uppercase tracking-widest"
          >
            Why EPI
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            The difference between
            <br />
            compliant and <span className="text-epi-red">protected.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-white/50 leading-relaxed"
          >
            Most companies check boxes. We build long-term safety partnerships
            that protect your people, your property, and your peace of mind.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-epi-charcoal p-8 md:p-10 group hover:bg-epi-slate transition-colors duration-300"
            >
              <item.icon className="w-8 h-8 text-epi-red mb-5" />
              <h3 className="text-lg font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
