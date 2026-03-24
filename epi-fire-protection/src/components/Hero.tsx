"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, CheckCircle } from "lucide-react";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

export default function Hero() {
  const counter33 = useCountUp(33, 2000);
  const counter1000 = useCountUp(1000, 2200);
  const counter88 = useCountUp(88, 1800);

  return (
    <section className="relative bg-epi-black overflow-hidden min-h-[90vh] flex items-center">
      {/* Background layers */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -top-60 -right-60 w-[800px] h-[800px] bg-epi-red/8 rounded-full blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-epi-red/5 rounded-full blur-[120px]" />

      {/* Red diagonal accent */}
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-epi-red via-epi-red/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Authority badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5 mb-8"
            >
              <Shield className="w-4 h-4 text-epi-red" />
              <span className="text-sm text-white/60 font-medium">
                Trusted by 1,000+ property managers across the GTA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Your building failed
              <br />
              its fire inspection.
              <br />
              <span className="text-epi-red">Now what?</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/50 leading-relaxed max-w-xl"
            >
              88 certified technicians. 33 years of zero-compromise protection.
              EPI gets your building compliant, keeps your tenants safe, and
              eliminates your liability — guaranteed.
            </motion.p>

            {/* Proof points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row gap-x-6 gap-y-2"
            >
              {[
                "Same-day emergency response",
                "Full Ontario code compliance",
                "Free no-obligation quotes",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/40"
                >
                  <CheckCircle className="w-4 h-4 text-epi-red shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-epi-red hover:bg-epi-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all text-base shadow-xl shadow-epi-red/25 hover:shadow-epi-red/35 hover:-translate-y-px"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:4167462225"
                className="inline-flex items-center justify-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all text-base"
              >
                <Phone className="w-4 h-4 text-epi-red" />
                (416) 746-2225
              </a>
            </motion.div>
          </div>

          {/* Right — Animated Stats grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4" ref={counter33.ref}>
              {[
                {
                  value: counter33.count,
                  suffix: "+",
                  label: "Years Protecting the GTA",
                  detail: "Since 1991",
                },
                {
                  value: counter1000.count,
                  suffix: "+",
                  label: "Properties Protected",
                  detail: "Commercial & Industrial",
                },
                {
                  value: counter88.count,
                  suffix: "",
                  label: "Certified Technicians",
                  detail: "Licensed & Insured",
                },
                {
                  value: null,
                  display: "24/7",
                  label: "Emergency Response",
                  detail: "365 Days a Year",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-epi-red transition-colors tabular-nums">
                    {stat.value !== null ? (
                      <>
                        {stat.value.toLocaleString()}
                        <span className="text-epi-red">{stat.suffix}</span>
                      </>
                    ) : (
                      stat.display
                    )}
                  </div>
                  <div className="text-sm font-semibold text-white/60 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-white/30 mt-1">
                    {stat.detail}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust logos */}
            <div className="mt-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-white/30 uppercase tracking-wider">
                Certified
              </span>
              <div className="flex items-center gap-6">
                {["CFAA", "NFPA", "TSSA", "ULC", "CASA"].map((cert) => (
                  <span
                    key={cert}
                    className="text-sm font-bold text-white/20 hover:text-white/40 transition-colors"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:hidden mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10"
        >
          {[
            { value: "33+", label: "Years" },
            { value: "1,000+", label: "Clients" },
            { value: "88", label: "Technicians" },
            { value: "24/7", label: "Response" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 mt-0.5 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
