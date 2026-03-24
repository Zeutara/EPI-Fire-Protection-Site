"use client";

import { motion } from "framer-motion";

const certifications = [
  { name: "CFAA", full: "Canadian Fire Alarm Association" },
  { name: "NFPA", full: "National Fire Protection Association" },
  { name: "CASA", full: "Canadian Automatic Sprinkler Association" },
  { name: "ULC", full: "Underwriters Laboratories of Canada" },
  { name: "TSSA", full: "Technical Standards & Safety Authority" },
];

export default function TrustBar() {
  return (
    <section className="bg-epi-warm border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm font-medium text-epi-gray uppercase tracking-widest shrink-0">
            Certified &amp; Trusted
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-xl border border-black/5 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-lg font-bold text-epi-charcoal tracking-tight">
                    {cert.name}
                  </span>
                </div>
                <span className="block mt-2 text-[10px] text-epi-gray font-medium max-w-[100px] mx-auto leading-tight">
                  {cert.full}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
