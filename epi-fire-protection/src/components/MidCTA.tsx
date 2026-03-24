"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function MidCTA() {
  return (
    <section className="py-16 md:py-20 bg-epi-red relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/[0.05] rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Every week you wait is another week your building is at risk.
            </h2>
            <p className="mt-2 text-white/70 text-lg">
              One failed inspection can void your insurance, expose your board to liability, and put lives at risk. Get a free assessment today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center gap-4 shrink-0"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-white text-epi-red font-extrabold px-8 py-4 rounded-xl transition-all hover:bg-white/90 text-sm"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:4167462225"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              (416) 746-2225
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
