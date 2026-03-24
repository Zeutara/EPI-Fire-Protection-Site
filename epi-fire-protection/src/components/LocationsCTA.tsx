"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const locations = [
  { name: "Toronto", detail: "Downtown & Midtown" },
  { name: "North York", detail: "Headquarters" },
  { name: "Mississauga", detail: "Peel Region" },
  { name: "Brampton", detail: "Peel Region" },
  { name: "Etobicoke", detail: "West Toronto" },
  { name: "Vaughan", detail: "York Region" },
  { name: "Markham", detail: "York Region" },
  { name: "Scarborough", detail: "East Toronto" },
];

export default function LocationsCTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-epi-black rounded-3xl overflow-hidden relative">
          {/* Background accents */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-epi-red/[0.06] rounded-full blur-[100px]" />

          <div className="relative px-8 md:px-16 py-14 md:py-20">
            {/* Header */}
            <div className="max-w-2xl mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
              >
                Service Areas
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-3xl md:text-4xl font-extrabold text-white tracking-tight"
              >
                Fire protection across
                <br />
                <span className="text-epi-red">the entire GTA.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-white/40 leading-relaxed"
              >
                Based in North York, we serve commercial, industrial, and
                residential properties across the Greater Toronto Area. Same-day
                emergency response available in all service areas.
              </motion.p>
            </div>

            {/* Location grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {locations.map((location, i) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.06] rounded-xl px-5 py-4 transition-colors group cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-epi-red" />
                    <span className="text-sm font-bold text-white">
                      {location.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-white/30 font-medium">
                    {location.detail}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 bg-epi-red hover:bg-epi-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-epi-red/20 text-sm"
              >
                Get a Quote for Your Area
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-sm text-white/30">
                Don&apos;t see your area? We likely cover it.{" "}
                <a
                  href="tel:4167462225"
                  className="text-epi-red hover:text-epi-red-light transition-colors"
                >
                  Call to confirm.
                </a>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
