"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building, Factory, Hotel, TrendingDown, CheckCircle, Clock } from "lucide-react";

const projects = [
  {
    icon: Building,
    category: "Commercial Office Tower",
    title: "Bay Street Financial District",
    problem:
      "42-floor office tower facing fire code violations after a failed AHJ inspection. Building ownership needed a complete fire alarm system replacement without displacing tenants or disrupting business operations during market hours.",
    solution:
      "EPI engineered a phased replacement strategy — working nights and weekends over 8 weeks. Every floor was upgraded to an addressable fire alarm system while maintaining full building operations during business hours.",
    stats: [
      { label: "Floors", value: "42" },
      { label: "Systems", value: "3" },
      { label: "Timeline", value: "8 Weeks" },
    ],
    result: "Full code compliance achieved ahead of schedule",
    resultIcon: CheckCircle,
    impact: "Zero tenant displacement during entire project",
  },
  {
    icon: Factory,
    category: "Industrial Distribution Centre",
    title: "Vaughan Logistics Hub",
    problem:
      "200,000 sqft distribution centre with high-piled storage exceeding existing sprinkler capacity. Insurance provider flagged the facility as under-protected, threatening policy cancellation and operational shutdown.",
    solution:
      "EPI redesigned the sprinkler system for the facility's specific commodity classification and rack configurations. Installed 1,200+ sprinkler heads with a hydraulically calculated system meeting NFPA 13 standards.",
    stats: [
      { label: "Square Feet", value: "200K" },
      { label: "Sprinklers", value: "1,200+" },
      { label: "Timeline", value: "12 Weeks" },
    ],
    result: "Insurance premiums reduced by 35%",
    resultIcon: TrendingDown,
    impact: "Insurance policy threat eliminated completely",
  },
  {
    icon: Hotel,
    category: "Hospitality Portfolio",
    title: "GTA Boutique Hotel Collection",
    problem:
      "Property management company operating 6 boutique hotels across the GTA with inconsistent fire protection vendors, missed inspection deadlines, and compliance gaps at multiple properties.",
    solution:
      "EPI implemented a unified portfolio program — one account manager, consolidated scheduling, standardized reporting across all 6 properties. Quarterly inspections, 24/7 monitoring, and annual compliance certification.",
    stats: [
      { label: "Properties", value: "6" },
      { label: "Rooms", value: "480+" },
      { label: "Program", value: "Ongoing" },
    ],
    result: "Zero compliance violations across all properties",
    resultIcon: CheckCircle,
    impact: "Maintenance costs reduced by 22% through consolidation",
  },
];

export default function CaseStudies() {
  return (
    <section id="results" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
            >
              Proven Results
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl md:text-5xl font-extrabold text-epi-black tracking-tight"
            >
              Real projects. Real outcomes.
              <br />
              <span className="text-epi-red">Real accountability.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg text-epi-gray leading-relaxed"
            >
              We don&apos;t hide behind vague promises. Here&apos;s what happens
              when property managers and building owners choose EPI.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-epi-red hover:text-epi-red-dark transition-colors shrink-0"
          >
            Discuss your project <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-epi-gray-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-black/[0.03]"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Left — Header */}
                <div className="lg:col-span-4 bg-epi-black p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <project.icon className="w-5 h-5 text-epi-red" />
                      <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-4">
                      {project.title}
                    </h3>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-xl font-extrabold text-white">
                            {stat.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-wider text-white/30 font-semibold">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — Problem / Solution / Result */}
                <div className="lg:col-span-8 p-8 lg:p-10">
                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Problem */}
                    <div>
                      <span className="text-[10px] font-bold text-epi-gray uppercase tracking-wider">
                        The Problem
                      </span>
                      <p className="mt-2 text-sm text-epi-gray leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <span className="text-[10px] font-bold text-epi-red uppercase tracking-wider">
                        EPI&apos;s Solution
                      </span>
                      <p className="mt-2 text-sm text-epi-gray leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-3 bg-epi-red/[0.06] rounded-xl px-5 py-3 flex-1">
                      <project.resultIcon className="w-5 h-5 text-epi-red shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-epi-red uppercase tracking-wider">
                          Key Result
                        </span>
                        <p className="text-sm font-bold text-epi-black">
                          {project.result}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-epi-gray-light rounded-xl px-5 py-3 flex-1 border border-black/[0.04]">
                      <Clock className="w-5 h-5 text-epi-gray shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-epi-gray uppercase tracking-wider">
                          Impact
                        </span>
                        <p className="text-sm font-semibold text-epi-charcoal">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
