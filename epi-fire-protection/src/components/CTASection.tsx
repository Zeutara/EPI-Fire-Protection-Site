"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Building2,
  Wrench,
  Clock,
  User,
} from "lucide-react";

const buildingTypes = [
  { label: "Condominium", value: "condo" },
  { label: "Commercial Office", value: "commercial" },
  { label: "Industrial / Warehouse", value: "industrial" },
  { label: "Residential (Multi-unit)", value: "residential" },
  { label: "Retail / Mixed-Use", value: "retail" },
  { label: "Government / Institutional", value: "government" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Other", value: "other" },
];

const serviceTypes = [
  { label: "Inspection & Testing", value: "inspection" },
  { label: "Installation & Construction", value: "installation" },
  { label: "Maintenance & Monitoring", value: "maintenance" },
  { label: "Code Compliance Consulting", value: "compliance" },
  { label: "Retrofit & Upgrade", value: "retrofit" },
  { label: "Emergency Service", value: "emergency" },
  { label: "Not Sure — Need Assessment", value: "assessment" },
];

const urgencyLevels = [
  {
    label: "Emergency",
    sublabel: "System down or critical failure",
    value: "emergency",
    color: "bg-red-500",
  },
  {
    label: "Urgent",
    sublabel: "Within 1-2 weeks",
    value: "urgent",
    color: "bg-orange-500",
  },
  {
    label: "Standard",
    sublabel: "Within 1-3 months",
    value: "standard",
    color: "bg-yellow-500",
  },
  {
    label: "Planning",
    sublabel: "Future project, gathering quotes",
    value: "planning",
    color: "bg-green-500",
  },
];

const stepIcons = [Building2, Wrench, Clock, User];
const stepLabels = ["Building", "Service", "Timeline", "Contact"];

export default function CTASection() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    buildingType: "",
    service: "",
    urgency: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.buildingType !== "";
      case 1:
        return formData.service !== "";
      case 2:
        return formData.urgency !== "";
      case 3:
        return formData.name !== "" && formData.email !== "" && formData.phone !== "";
      default:
        return false;
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-epi-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-epi-black via-epi-charcoal to-epi-black" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-epi-red/[0.06] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-epi-red/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Copy */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-epi-red uppercase tracking-[0.2em]"
            >
              Get Started
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Your building&apos;s protection
              <br />
              <span className="text-epi-red">starts with one call.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg text-white/40 leading-relaxed max-w-lg"
            >
              Tell us about your property. We&apos;ll have a fire protection
              specialist review your needs and deliver a custom quote within 24
              hours. No obligation. No pressure. Just answers.
            </motion.p>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-3"
            >
              {[
                "Free, no-obligation assessment",
                "Custom quote within 24 hours",
                "Dedicated specialist assigned to your project",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-white/40"
                >
                  <CheckCircle className="w-4 h-4 text-epi-red shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 space-y-4"
            >
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-wider mb-4">
                Or reach us directly
              </div>
              <a
                href="tel:4167462225"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/[0.04] group-hover:bg-white/[0.08] rounded-xl flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-epi-red" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">
                    (416) 746-2225
                  </span>
                  <span className="text-xs text-white/30">
                    24/7 — including emergencies
                  </span>
                </div>
              </a>
              <a
                href="mailto:Sales@epi.ca"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/[0.04] group-hover:bg-white/[0.08] rounded-xl flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-epi-red" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">
                    Sales@epi.ca
                  </span>
                  <span className="text-xs text-white/30">
                    Response within 4 business hours
                  </span>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-10 h-10 bg-white/[0.04] rounded-xl flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-epi-red" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">
                    675 Garyray Drive, Unit 202
                  </span>
                  <span className="text-xs text-white/30">
                    North York, ON M9L 1R2
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Multi-step form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Progress bar */}
            <div className="h-1 bg-epi-gray-light">
              <div
                className="h-full bg-epi-red transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Step indicators */}
            <div className="px-8 pt-6 pb-2">
              <div className="flex items-center justify-between mb-6">
                {stepLabels.map((label, i) => {
                  const Icon = stepIcons[i];
                  return (
                    <div
                      key={label}
                      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                        i <= step ? "text-epi-red" : "text-epi-gray/40"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          i <= step
                            ? "bg-epi-red text-white"
                            : "bg-epi-gray-light text-epi-gray/40"
                        }`}
                      >
                        {i < step ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Icon className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <span className="hidden sm:inline">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form steps */}
            <div className="px-8 pb-8 min-h-[360px]">
              <AnimatePresence mode="wait">
                {/* Step 1: Building Type */}
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-extrabold text-epi-black mb-1">
                      What type of building?
                    </h3>
                    <p className="text-sm text-epi-gray mb-6">
                      This helps us match you with the right specialist.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {buildingTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() =>
                            setFormData({ ...formData, buildingType: type.value })
                          }
                          className={`text-left px-4 py-3.5 rounded-xl border-2 transition-all text-sm font-semibold ${
                            formData.buildingType === type.value
                              ? "border-epi-red bg-epi-red/[0.04] text-epi-red"
                              : "border-black/[0.06] text-epi-dark hover:border-epi-red/30"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-extrabold text-epi-black mb-1">
                      What service do you need?
                    </h3>
                    <p className="text-sm text-epi-gray mb-6">
                      Select the service that best matches your needs.
                    </p>
                    <div className="space-y-3">
                      {serviceTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() =>
                            setFormData({ ...formData, service: type.value })
                          }
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-semibold ${
                            formData.service === type.value
                              ? "border-epi-red bg-epi-red/[0.04] text-epi-red"
                              : "border-black/[0.06] text-epi-dark hover:border-epi-red/30"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Urgency */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-extrabold text-epi-black mb-1">
                      How urgent is this?
                    </h3>
                    <p className="text-sm text-epi-gray mb-6">
                      This helps us prioritize your request appropriately.
                    </p>
                    <div className="space-y-3">
                      {urgencyLevels.map((level) => (
                        <button
                          key={level.value}
                          onClick={() =>
                            setFormData({ ...formData, urgency: level.value })
                          }
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                            formData.urgency === level.value
                              ? "border-epi-red bg-epi-red/[0.04]"
                              : "border-black/[0.06] hover:border-epi-red/30"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-3 h-3 rounded-full ${level.color}`}
                            />
                            <div>
                              <span className="text-sm font-bold text-epi-black block">
                                {level.label}
                              </span>
                              <span className="text-xs text-epi-gray">
                                {level.sublabel}
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {formData.urgency === "emergency" && (
                      <div className="mt-4 bg-epi-red/[0.06] border border-epi-red/20 rounded-xl p-4">
                        <p className="text-sm font-bold text-epi-red">
                          For emergencies, call us directly:
                        </p>
                        <a
                          href="tel:4167462225"
                          className="text-lg font-extrabold text-epi-red mt-1 inline-block"
                        >
                          (416) 746-2225
                        </a>
                        <p className="text-xs text-epi-gray mt-1">
                          We respond 24/7, including nights and weekends.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Step 4: Contact */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-extrabold text-epi-black mb-1">
                      How do we reach you?
                    </h3>
                    <p className="text-sm text-epi-gray mb-6">
                      We&apos;ll have a specialist contact you within 24 hours.
                    </p>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-epi-dark uppercase tracking-wider mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="John Smith"
                            className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-xl text-sm text-epi-black placeholder:text-epi-gray/40 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-epi-dark uppercase tracking-wider mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            placeholder="Your Company"
                            className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-xl text-sm text-epi-black placeholder:text-epi-gray/40 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-epi-dark uppercase tracking-wider mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-xl text-sm text-epi-black placeholder:text-epi-gray/40 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-epi-dark uppercase tracking-wider mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="(416) 000-0000"
                            className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-xl text-sm text-epi-black placeholder:text-epi-gray/40 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-epi-dark uppercase tracking-wider mb-2">
                          Additional Details
                        </label>
                        <textarea
                          rows={3}
                          value={formData.details}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              details: e.target.value,
                            })
                          }
                          placeholder="Building address, number of floors, specific concerns..."
                          className="w-full px-4 py-3 bg-epi-gray-light border border-black/5 rounded-xl text-sm text-epi-black placeholder:text-epi-gray/40 focus:outline-none focus:ring-2 focus:ring-epi-red/20 focus:border-epi-red transition-all resize-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/5">
                {step > 0 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-epi-gray hover:text-epi-charcoal transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps - 1 ? (
                  <button
                    onClick={() => canProceed() && setStep(step + 1)}
                    disabled={!canProceed()}
                    className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all text-sm ${
                      canProceed()
                        ? "bg-epi-red hover:bg-epi-red-dark text-white shadow-lg shadow-epi-red/20"
                        : "bg-epi-gray-light text-epi-gray/40 cursor-not-allowed"
                    }`}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    disabled={!canProceed()}
                    className={`inline-flex items-center gap-2 font-bold px-8 py-3 rounded-xl transition-all text-sm ${
                      canProceed()
                        ? "bg-epi-red hover:bg-epi-red-dark text-white shadow-lg shadow-epi-red/20"
                        : "bg-epi-gray-light text-epi-gray/40 cursor-not-allowed"
                    }`}
                  >
                    Submit Quote Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Trust note */}
              <p className="text-center text-[11px] text-epi-gray/60 mt-4">
                No commitment required. Your information is never shared.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
