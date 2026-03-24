"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Tridel", type: "Developer" },
  { name: "Brookfield", type: "Asset Mgmt" },
  { name: "CAPREIT", type: "REIT" },
  { name: "Minto Group", type: "Developer" },
  { name: "FirstService", type: "Property Mgmt" },
  { name: "Del Property", type: "Property Mgmt" },
  { name: "City of Toronto", type: "Municipal" },
  { name: "Oxford Properties", type: "Asset Mgmt" },
];

export default function ClientLogos() {
  return (
    <section className="py-10 md:py-14 bg-epi-cream border-y border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-epi-gray uppercase tracking-[0.2em] shrink-0 text-center md:text-left"
          >
            Trusted by leading
            <br className="hidden md:block" /> property teams
          </motion.p>

          <div className="w-px h-8 bg-black/10 hidden md:block" />

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 w-full">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col items-center"
              >
                <span className="text-[15px] font-bold text-epi-charcoal/25 group-hover:text-epi-charcoal/50 transition-colors tracking-tight">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
