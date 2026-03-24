"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building, Factory, Hotel } from "lucide-react";

const projects = [
  {
    icon: Building,
    category: "Commercial Office",
    title: "Bay Street Financial Tower",
    stats: { floors: "42", systems: "3", timeline: "8 weeks" },
    description:
      "Complete fire alarm system replacement across 42 floors with zero tenant displacement. Phased installation during off-hours maintained full building operations throughout.",
    result: "Full code compliance achieved ahead of schedule",
  },
  {
    icon: Factory,
    category: "Industrial / Warehouse",
    title: "Vaughan Distribution Centre",
    stats: { sqft: "200,000", sprinklers: "1,200+", timeline: "12 weeks" },
    description:
      "Designed and installed a high-piled storage sprinkler system for a major logistics provider. Coordinated with AHJ for specialized storage configurations.",
    result: "Insurance premiums reduced by 35%",
  },
  {
    icon: Hotel,
    category: "Hospitality",
    title: "Boutique Hotel Collection",
    stats: { properties: "6", rooms: "480+", timeline: "Ongoing" },
    description:
      "Comprehensive fire protection program spanning six boutique hotel properties. Includes quarterly inspections, 24/7 monitoring, and annual compliance certification.",
    result: "Zero compliance violations across all properties",
  },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-epi-red uppercase tracking-widest"
            >
              Proven Results
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl md:text-5xl font-bold text-epi-black tracking-tight"
            >
              Projects that speak
              <br />
              for themselves.
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-epi-red hover:text-epi-red-dark transition-colors"
          >
            Discuss your project <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-epi-gray-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Top bar */}
              <div className="bg-epi-charcoal px-8 py-6">
                <div className="flex items-center gap-3 mb-3">
                  <project.icon className="w-5 h-5 text-epi-red" />
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Stats */}
              <div className="px-8 py-5 grid grid-cols-3 gap-4 border-b border-black/5">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-lg font-bold text-epi-black">
                      {value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-epi-gray font-medium">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="px-8 py-6">
                <p className="text-sm text-epi-gray leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-5 flex items-start gap-2 bg-epi-red/5 rounded-lg p-4">
                  <div className="w-2 h-2 rounded-full bg-epi-red mt-1 shrink-0" />
                  <span className="text-sm font-semibold text-epi-black">
                    {project.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
