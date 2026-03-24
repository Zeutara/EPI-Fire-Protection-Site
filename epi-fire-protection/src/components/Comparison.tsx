"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, ShieldAlert } from "lucide-react";

const comparisonRows = [
  {
    feature: "Same-day emergency response",
    epi: true,
    typical: false,
  },
  {
    feature: "Dedicated account manager",
    epi: true,
    typical: false,
  },
  {
    feature: "Portfolio-wide compliance tracking",
    epi: true,
    typical: false,
  },
  {
    feature: "Photo-documented inspection reports",
    epi: true,
    typical: false,
  },
  {
    feature: "All trades in-house (no subcontracting)",
    epi: true,
    typical: false,
  },
  {
    feature: "AHJ filing & certification included",
    epi: true,
    typical: false,
  },
  {
    feature: "24/7 monitoring with live dispatch",
    epi: true,
    typical: false,
  },
  {
    feature: "Upfront pricing — no hidden fees",
    epi: true,
    typical: false,
  },
];

export default function Comparison() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
          >
            The EPI Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-epi-black tracking-tight"
          >
            Not all fire protection
            <br />
            <span className="text-epi-red">companies are equal.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-epi-gray"
          >
            Most contractors check boxes. EPI eliminates risk. Here&apos;s what
            you actually get when you stop settling for &ldquo;good enough.&rdquo;
          </motion.p>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-black/[0.06] overflow-hidden shadow-xl shadow-black/[0.04]"
        >
          {/* Table header */}
          <div className="grid grid-cols-12 bg-epi-black">
            <div className="col-span-6 sm:col-span-7 px-6 sm:px-8 py-5">
              <span className="text-xs font-bold text-white/40 uppercase tracking-wider">
                What Matters
              </span>
            </div>
            <div className="col-span-3 sm:col-span-3 px-4 py-5 text-center border-l border-white/10">
              <span className="text-xs font-extrabold text-epi-red uppercase tracking-wider">
                EPI
              </span>
            </div>
            <div className="col-span-3 sm:col-span-2 px-4 py-5 text-center border-l border-white/10">
              <span className="text-xs font-bold text-white/30 uppercase tracking-wider">
                Typical
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`grid grid-cols-12 ${
                i % 2 === 0 ? "bg-white" : "bg-epi-gray-light/50"
              } ${i < comparisonRows.length - 1 ? "border-b border-black/[0.04]" : ""}`}
            >
              <div className="col-span-6 sm:col-span-7 px-6 sm:px-8 py-4 flex items-center">
                <span className="text-sm font-semibold text-epi-dark">
                  {row.feature}
                </span>
              </div>
              <div className="col-span-3 sm:col-span-3 px-4 py-4 flex items-center justify-center border-l border-black/[0.04]">
                {row.epi ? (
                  <div className="w-7 h-7 bg-epi-red/10 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 text-epi-red" strokeWidth={3} />
                  </div>
                ) : (
                  <X className="w-4 h-4 text-epi-gray/30" />
                )}
              </div>
              <div className="col-span-3 sm:col-span-2 px-4 py-4 flex items-center justify-center border-l border-black/[0.04]">
                {row.typical ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <X className="w-4 h-4 text-epi-gray/20" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-epi-black rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 bg-epi-red/10 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldAlert className="w-7 h-7 text-epi-red" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-extrabold text-white">
              The cost of choosing the wrong fire protection company isn&apos;t a
              bigger invoice.
            </h3>
            <p className="text-sm text-white/40 mt-1">
              It&apos;s a failed inspection. A voided insurance policy. A building
              full of people at risk. Choose once. Choose right.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-epi-red hover:bg-epi-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-epi-red/20 text-sm shrink-0"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
