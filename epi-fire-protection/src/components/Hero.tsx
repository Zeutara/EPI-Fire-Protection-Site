"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-epi-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red accent glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-epi-red/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <Shield className="w-4 h-4 text-epi-red" />
            <span className="text-sm text-white/70 font-medium">
              Trusted by 1,000+ businesses across the GTA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Your building&apos;s safety
            <br />
            <span className="text-epi-red">is non-negotiable.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl"
          >
            EPI delivers end-to-end fire protection for commercial and
            industrial properties — from inspections and code compliance to
            full-system installations. 33 years. Zero compromises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-epi-red hover:bg-epi-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-all text-base"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:4167462225"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all text-base"
            >
              <Phone className="w-4 h-4" />
              24/7 Emergency Line
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10"
          >
            {[
              { value: "33+", label: "Years in Business" },
              { value: "1,000+", label: "Clients Served" },
              { value: "90%+", label: "Recommend Us" },
              { value: "24/7", label: "Emergency Response" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
