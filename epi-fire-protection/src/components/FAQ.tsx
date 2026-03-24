"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";

const faqs = [
  {
    question: "We've been with the same contractor for years. Why switch?",
    answer:
      "If your current contractor misses deadlines, sends different technicians every visit, or delivers generic reports with no photos — you're not getting protection, you're getting paperwork. EPI assigns you a dedicated account manager who knows your buildings, tracks every device, and delivers compliance documentation your insurer and board will actually accept. Most of our clients switched after one failed inspection too many.",
  },
  {
    question: "How fast can you respond to an emergency?",
    answer:
      "Same day. We staff a 24/7 emergency dispatch line — not a voicemail, not an answering service. A certified technician is dispatched to your building the same day you call, including nights, weekends, and holidays. Our average emergency response time across the GTA is under 4 hours.",
  },
  {
    question: "Can you handle my entire portfolio, not just one building?",
    answer:
      "That's what we're built for. We manage fire protection programs for property management companies with portfolios from 10 to 500+ buildings. One account manager, consolidated compliance reporting, synchronized inspection schedules, and volume pricing. No more chasing five different contractors across your portfolio.",
  },
  {
    question: "What happens if you find deficiencies during an inspection?",
    answer:
      "We don't just flag deficiencies and hand you a list. We photograph every issue, classify it by priority and code reference, and deliver a clear remediation plan with pricing. If you approve, our own technicians handle the repairs — no waiting for a second contractor. Every deficiency is tracked until resolution, and we handle all AHJ filings and re-inspections.",
  },
  {
    question: "How much does a fire protection inspection cost?",
    answer:
      "It depends on building size, system type, and complexity — which is why we never quote blind. We provide free, no-obligation site assessments. After we've seen your building and reviewed your systems, you get a detailed, line-item quote with no hidden fees. Most property managers tell us our pricing is competitive — and our documentation is in a different league.",
  },
  {
    question: "Are your technicians actually licensed?",
    answer:
      "Every EPI technician is CFAA-certified, TSSA-registered, and carries full liability insurance. We hold certifications from CFAA, NFPA, TSSA, ULC, and CASA. We don't subcontract our core work — every technician who enters your building is a trained EPI employee. You can verify our credentials with any authority having jurisdiction in Ontario.",
  },
  {
    question: "What's included in your maintenance programs?",
    answer:
      "Scheduled preventive maintenance visits, 24/7 system monitoring, annual compliance inspections with full documentation, deficiency tracking and resolution, AHJ filing and certification, and priority emergency response. Every device in your building is catalogued in our system — we track test dates, service history, and upcoming deadlines so you never fall behind.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-epi-gray-light">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
          >
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-epi-black tracking-tight"
          >
            You have questions.
            <br />
            <span className="text-epi-red">We have direct answers.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-epi-gray"
          >
            No jargon. No runaround. The questions property managers
            actually ask before signing a fire protection contract.
          </motion.p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-black/[0.04] overflow-hidden hover:shadow-lg hover:shadow-black/[0.03] transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
              >
                <span className="text-[15px] font-bold text-epi-black pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 bg-epi-gray-light rounded-lg flex items-center justify-center shrink-0 transition-all ${
                    openIndex === i ? "bg-epi-red/10 rotate-180" : ""
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-colors ${
                      openIndex === i ? "text-epi-red" : "text-epi-gray"
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-6 pt-0">
                      <div className="w-12 h-px bg-epi-red/20 mb-4" />
                      <p className="text-sm text-epi-gray leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-epi-gray mb-4 text-sm">
            Have a question not listed here?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-epi-black hover:bg-epi-charcoal text-white font-bold px-8 py-4 rounded-xl transition-all text-sm"
            >
              Ask a Specialist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:4167462225"
              className="inline-flex items-center gap-2 text-sm font-bold text-epi-gray hover:text-epi-red transition-colors"
            >
              <Phone className="w-4 h-4" />
              (416) 746-2225
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
