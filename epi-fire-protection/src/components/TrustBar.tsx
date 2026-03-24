"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Star, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "33+",
    label: "Years in Business",
    sublabel: "Established 1991",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Clients Protected",
    sublabel: "Across the GTA",
  },
  {
    icon: Shield,
    value: "88",
    label: "Certified Technicians",
    sublabel: "Licensed & Insured",
  },
  {
    icon: Star,
    value: "90%+",
    label: "Recommendation Rate",
    sublabel: "Client Satisfaction",
  },
  {
    icon: Award,
    value: "5",
    label: "Industry Certifications",
    sublabel: "CFAA, NFPA, TSSA, ULC, CASA",
  },
];

export default function TrustBar() {
  return (
    <section className="relative bg-white border-b border-black/5">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-epi-red/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-epi-red/5 rounded-xl mb-3 group-hover:bg-epi-red/10 transition-colors">
                <stat.icon className="w-5 h-5 text-epi-red" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-epi-black tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-epi-charcoal mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-epi-gray mt-0.5">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
