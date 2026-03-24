'use client';

import { useState, type FormEvent } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-6">
            <Mail size={24} className="text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Join the Frog &amp; Toad Fam
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
            Get first dibs on new arrivals, exclusive drops, and the occasional terrible pun.
          </p>

          {submitted ? (
            /* Success state */
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                <CheckCircle size={24} className="text-white" />
              </div>
              <p className="text-white font-semibold text-lg">
                You are in! Welcome to the fam.
              </p>
              <p className="text-white/60 text-sm">
                Check your inbox for a welcome surprise.
              </p>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <label htmlFor="email-capture" className="sr-only">
                Email address
              </label>
              <input
                id="email-capture"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 text-base focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-cream text-primary font-semibold rounded-full transition-colors duration-200 text-base disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>
          )}

          {/* Privacy note */}
          {!submitted && (
            <p className="mt-4 text-white/40 text-xs">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
