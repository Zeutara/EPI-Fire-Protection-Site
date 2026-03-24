'use client';

import { useState, useMemo } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, RotateCcw } from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';

interface StepOption {
  label: string;
  value: string;
  emoji: string;
}

const steps: { title: string; question: string; options: StepOption[] }[] = [
  {
    title: 'Recipient',
    question: "Who's it for?",
    options: [
      { label: 'Friend', value: 'friend', emoji: '👯' },
      { label: 'Partner', value: 'partner', emoji: '💕' },
      { label: 'Parent', value: 'parent', emoji: '🏡' },
      { label: 'Coworker', value: 'coworker', emoji: '💼' },
      { label: 'Kid', value: 'kid', emoji: '🧸' },
      { label: 'Myself (no shame)', value: 'myself', emoji: '✨' },
    ],
  },
  {
    title: 'Occasion',
    question: "What's the occasion?",
    options: [
      { label: 'Birthday', value: 'birthday', emoji: '🎂' },
      { label: 'Holiday', value: 'holiday', emoji: '🎄' },
      { label: 'Just Because', value: 'just-because', emoji: '🌈' },
      { label: 'Thank You', value: 'thank-you', emoji: '🙏' },
      { label: 'Congratulations', value: 'congratulations', emoji: '🎉' },
      { label: 'Sympathy', value: 'sympathy', emoji: '🤍' },
    ],
  },
  {
    title: 'Budget',
    question: 'Budget?',
    options: [
      { label: 'Under $15', value: 'under-15', emoji: '💚' },
      { label: '$15 – $25', value: '15-25', emoji: '💛' },
      { label: '$25 – $50', value: '25-50', emoji: '🧡' },
      { label: 'Over $50', value: 'over-50', emoji: '💎' },
    ],
  },
  {
    title: 'Vibe',
    question: 'Their vibe?',
    options: [
      { label: 'Funny', value: 'funny', emoji: '😂' },
      { label: 'Cozy', value: 'cozy', emoji: '🧣' },
      { label: 'Artsy', value: 'artsy', emoji: '🎨' },
      { label: 'Outdoorsy', value: 'outdoorsy', emoji: '🌿' },
      { label: 'Nerdy', value: 'nerdy', emoji: '🤓' },
      { label: 'Foodie', value: 'foodie', emoji: '🍕' },
    ],
  },
];

const vibeTagMap: Record<string, string[]> = {
  funny: ['funny', 'humor', 'palindrome'],
  cozy: ['cozy', 'candle', 'socks', 'hoodie', 'self-care'],
  artsy: ['art', 'print', 'watercolor', 'ceramic', 'postcards'],
  outdoorsy: ['nature', 'plants', 'mushroom', 'terrarium', 'bamboo'],
  nerdy: ['ghibli', 'totoro', 'puzzle', 'stickers', 'vinyl'],
  foodie: ['food', 'hot sauce', 'kitchen', 'cutting board', 'spicy'],
};

function filterByBudget(price: number, budget: string): boolean {
  switch (budget) {
    case 'under-15':
      return price < 15;
    case '15-25':
      return price >= 15 && price <= 25;
    case '25-50':
      return price >= 25 && price <= 50;
    case 'over-50':
      return price > 50;
    default:
      return true;
  }
}

export default function GiftFinderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const progress = completed ? 100 : (currentStep / steps.length) * 100;

  const handleSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = value;
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const goBack = () => {
    if (completed) {
      setCompleted(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startOver = () => {
    setCurrentStep(0);
    setAnswers([]);
    setCompleted(false);
  };

  const recommendations = useMemo(() => {
    if (!completed) return [];

    const budget = answers[2];
    const vibe = answers[3];
    const vibeTags = vibeTagMap[vibe] || [];

    let filtered = products.filter((p) => filterByBudget(p.price, budget));

    const scored = filtered.map((p) => {
      let score = 0;
      const allTags = [...p.tags, p.category, p.subcategory || ''].map((t) =>
        t.toLowerCase()
      );

      vibeTags.forEach((tag) => {
        if (allTags.some((t) => t.includes(tag))) score += 2;
      });

      if (p.isBestSeller) score += 1;
      if (p.rating >= 4.8) score += 1;

      return { product: p, score };
    });

    scored.sort((a, b) => b.score - a.score);

    return scored.slice(0, 6).map((s) => s.product);
  }, [completed, answers]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Gift Finder</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Find the Perfect Gift
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Answer a few quick questions and we&apos;ll match you with
            something they&apos;ll actually love.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-between text-xs text-warm-gray mb-2">
          {steps.map((step, i) => (
            <span
              key={step.title}
              className={`font-medium ${
                i <= currentStep || completed
                  ? 'text-primary'
                  : 'text-warm-gray/50'
              }`}
            >
              {step.title}
            </span>
          ))}
        </div>
        <div className="h-2 bg-light-gray rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {!completed ? (
          <>
            {/* Step Question */}
            <div className="text-center mb-8">
              <p className="text-warm-gray text-sm font-medium mb-2">
                Step {currentStep + 1} of {steps.length}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-charcoal">
                {steps[currentStep].question}
              </h2>
            </div>

            {/* Option Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
              {steps[currentStep].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`group relative flex flex-col items-center gap-2 p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer
                    ${
                      answers[currentStep] === option.value
                        ? 'border-primary bg-sage-light/30 shadow-md'
                        : 'border-light-gray bg-white hover:border-sage hover:shadow-md hover:-translate-y-0.5'
                    }`}
                >
                  <span className="text-3xl md:text-4xl">{option.emoji}</span>
                  <span className="text-sm md:text-base font-semibold text-charcoal">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <div className="text-center mt-8">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-warm-gray hover:text-primary transition-colors text-sm font-medium cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  Go Back
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Results */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-sage-light/50 rounded-full px-4 py-1.5 mb-4">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Your Matches
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-charcoal mb-3">
                We found some great picks!
              </h2>
              <p className="text-warm-gray max-w-lg mx-auto">
                Based on your answers, here are our top recommendations. Every
                one of these is a certified crowd-pleaser.
              </p>
            </div>

            {recommendations.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {recommendations.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl">
                <p className="text-warm-gray text-lg mb-2">
                  Hmm, nothing matched that exact combo.
                </p>
                <p className="text-warm-gray">
                  Try adjusting your budget or vibe!
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft size={18} />
                Change Answers
              </button>
              <button
                onClick={startOver}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
              >
                <RotateCcw size={18} />
                Start Over
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
