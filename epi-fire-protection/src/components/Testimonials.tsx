"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We switched to EPI after years of missed deadlines and sloppy documentation from our previous vendor. Night and day difference. Our account manager knows every building in our portfolio, and we haven't missed a compliance deadline since.",
    name: "Sandra Chen",
    title: "Director of Operations",
    company: "Meridian Property Management",
    portfolio: "38 properties across the GTA",
  },
  {
    quote:
      "Our sprinkler system failed at 2 AM on a Saturday. I called EPI's emergency line expecting voicemail. A technician was on-site by 5 AM. That's not normal in this industry — and it's why we'll never use another company.",
    name: "Michael Torres",
    title: "Building Manager",
    company: "Queen West Commercial",
    portfolio: "12-story mixed-use complex",
  },
  {
    quote:
      "EPI replaced our entire fire alarm system across 42 floors without a single tenant complaint. The phased approach, the after-hours work, the communication — everything was handled at a level I've never experienced from a fire protection contractor.",
    name: "David Park",
    title: "VP of Facilities",
    company: "Apex Real Estate Group",
    portfolio: "1.2M sqft commercial portfolio",
  },
  {
    quote:
      "Our insurance provider was threatening to cancel our policy over sprinkler deficiencies. EPI came in, assessed everything in a week, and had the entire system upgraded in under three months. Premiums dropped 35%. That paid for the project twice over.",
    name: "Lisa Nguyen",
    title: "Operations Manager",
    company: "York Region Logistics",
    portfolio: "200,000 sqft distribution centre",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-epi-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-epi-black tracking-tight"
          >
            Don&apos;t take our word for it.
            <br />
            <span className="text-epi-red">Take theirs.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-epi-gray"
          >
            Property managers and building owners across the GTA trust EPI to
            protect their buildings — and their reputations.
          </motion.p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-black/[0.04] hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-epi-red fill-epi-red"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-8 h-8 text-epi-red/10" />
                <p className="text-[15px] text-epi-dark leading-relaxed pl-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-black/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-epi-black text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-epi-gray mt-0.5">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
                <div className="text-[10px] font-bold text-epi-gray/60 uppercase tracking-wider text-right max-w-[140px]">
                  {testimonial.portfolio}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
