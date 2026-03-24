"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-epi-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-epi-black via-epi-charcoal to-epi-black" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-epi-red/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-epi-red/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-epi-red uppercase tracking-widest"
            >
              Get Started
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Protect your property.
              <br />
              <span className="text-epi-red">Start today.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-white/50 leading-relaxed max-w-lg"
            >
              Whether you need a routine inspection or a full system overhaul,
              our team is ready to deliver. Get a free, no-obligation quote
              within 24 hours.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-4"
            >
              <a
                href="tel:4167462225"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-epi-red" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white">
                    (416) 746-2225
                  </span>
                  <span className="text-xs text-white/40">
                    24/7 — including emergencies
                  </span>
                </div>
              </a>
              <a
                href="mailto:Sales@epi.ca"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-epi-red" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white">
                    Sales@epi.ca
                  </span>
                  <span className="text-xs text-white/40">
                    We respond within 4 business hours
                  </span>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-epi-red" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white">
                    675 Garyray Drive, Unit 202
                  </span>
                  <span className="text-xs text-white/40">
                    North York, ON M9L 1R2
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-epi-black mb-2">
              Request a Free Quote
            </h3>
            <p className="text-sm text-epi-gray mb-8">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-epi-slate uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-lg text-sm text-epi-black placeholder:text-epi-gray/50 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-epi-slate uppercase tracking-wider mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-lg text-sm text-epi-black placeholder:text-epi-gray/50 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-epi-slate uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-lg text-sm text-epi-black placeholder:text-epi-gray/50 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-epi-slate uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(416) 000-0000"
                    className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-lg text-sm text-epi-black placeholder:text-epi-gray/50 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-epi-slate uppercase tracking-wider mb-2">
                  Service Needed
                </label>
                <select className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-lg text-sm text-epi-black focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all">
                  <option value="">Select a service</option>
                  <option>Inspection &amp; Testing</option>
                  <option>Installation &amp; Construction</option>
                  <option>Maintenance &amp; Monitoring</option>
                  <option>Code Compliance Consulting</option>
                  <option>Retrofit &amp; Upgrade</option>
                  <option>Emergency Service</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-epi-slate uppercase tracking-wider mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your building and what you need..."
                  className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-lg text-sm text-epi-black placeholder:text-epi-gray/50 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 bg-epi-red hover:bg-epi-red-dark text-white font-semibold py-4 rounded-lg transition-colors text-base"
              >
                Submit Quote Request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-epi-gray">
                No commitment required. We respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
