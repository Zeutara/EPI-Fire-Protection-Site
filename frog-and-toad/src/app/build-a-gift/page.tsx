'use client';

import { useState, useMemo } from 'react';
import { Gift, Plus, Minus, X, Package, MessageSquare, Check } from 'lucide-react';
import { products } from '@/lib/products';
import { useStore } from '@/lib/store';
import type { Product } from '@/lib/types';

const themes = [
  { value: 'birthday', label: 'Birthday', emoji: '🎂', color: 'bg-accent/10 border-accent/30' },
  { value: 'holiday', label: 'Holiday', emoji: '🎄', color: 'bg-primary/10 border-primary/30' },
  { value: 'thank-you', label: 'Thank You', emoji: '🙏', color: 'bg-sage/10 border-sage/30' },
  { value: 'just-because', label: 'Just Because', emoji: '🌈', color: 'bg-secondary/30 border-secondary' },
  { value: 'congratulations', label: 'Congratulations', emoji: '🎉', color: 'bg-sage-light/30 border-sage-light' },
] as const;

const wrappingOptions = [
  { value: 'standard', label: 'Standard', price: 0, description: 'Kraft paper & twine' },
  { value: 'premium', label: 'Premium', price: 5, description: 'Patterned paper & ribbon' },
  { value: 'luxury', label: 'Luxury', price: 10, description: 'Gift box with tissue & bow' },
] as const;

type Theme = (typeof themes)[number]['value'];
type Wrapping = (typeof wrappingOptions)[number]['value'];

export default function BuildAGiftPage() {
  const [step, setStep] = useState(1);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [wrapping, setWrapping] = useState<Wrapping>('standard');
  const [giftMessage, setGiftMessage] = useState('');

  const addToCart = useStore((s) => s.addToCart);

  const wrappingPrice = wrappingOptions.find((w) => w.value === wrapping)?.price || 0;

  const itemsTotal = useMemo(
    () => selectedProducts.reduce((sum, p) => sum + p.price, 0),
    [selectedProducts]
  );

  const grandTotal = itemsTotal + wrappingPrice;

  const toggleProduct = (product: Product) => {
    setSelectedProducts((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const isSelected = (id: string) => selectedProducts.some((p) => p.id === id);

  const handleAddToCart = () => {
    selectedProducts.forEach((product) => {
      addToCart(product, undefined, 1);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-4">
            <Gift size={16} />
            <span className="text-sm font-medium">Build-a-Gift</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Build Your Own Gift Box
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Pick a theme, choose your products, customize the wrapping, and
            create something truly special.
          </p>
        </div>
      </section>

      {/* Steps Navigation */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-center gap-2 md:gap-6">
          {[
            { num: 1, label: 'Theme' },
            { num: 2, label: 'Products' },
            { num: 3, label: 'Customize' },
          ].map((s, i) => (
            <button
              key={s.num}
              onClick={() => {
                if (s.num === 1 || (s.num === 2 && theme) || (s.num === 3 && theme && selectedProducts.length > 0)) {
                  setStep(s.num);
                }
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer
                ${step === s.num ? 'bg-primary text-white' : step > s.num ? 'bg-sage-light text-primary' : 'bg-light-gray text-warm-gray'}`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                  ${step === s.num ? 'bg-white text-primary' : step > s.num ? 'bg-primary text-white' : 'bg-warm-gray/30 text-warm-gray'}`}
              >
                {step > s.num ? <Check size={14} /> : s.num}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Step 1: Theme */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-2">
                  Choose a Theme
                </h2>
                <p className="text-warm-gray mb-6">
                  What&apos;s the occasion? This helps us suggest the best packaging.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {themes.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => {
                        setTheme(t.value);
                        setStep(2);
                      }}
                      className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer
                        ${theme === t.value ? 'border-primary bg-sage-light/30 shadow-md' : `${t.color} hover:shadow-md hover:-translate-y-0.5`}`}
                    >
                      <span className="text-4xl">{t.emoji}</span>
                      <span className="text-base font-semibold text-charcoal">
                        {t.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Products */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-2">
                  Add Products to Your Box
                </h2>
                <p className="text-warm-gray mb-6">
                  Browse and select the items you want to include.{' '}
                  <span className="font-medium text-primary">
                    {selectedProducts.length} item{selectedProducts.length !== 1 ? 's' : ''} selected
                  </span>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {products.map((product) => {
                    const selected = isSelected(product.id);
                    return (
                      <div
                        key={product.id}
                        className={`relative rounded-2xl bg-white border-2 overflow-hidden transition-all duration-200
                          ${selected ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-transparent hover:shadow-md'}`}
                      >
                        {/* Product Image Area */}
                        <div className="aspect-square bg-sage-light/20 flex items-center justify-center relative">
                          <span className="text-warm-gray/40 text-xs font-medium uppercase">
                            {product.category}
                          </span>
                          {selected && (
                            <div className="absolute top-2 right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                              <Check size={14} className="text-white" />
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="p-3">
                          <h3 className="text-sm font-semibold text-charcoal line-clamp-2 mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm font-bold text-charcoal mb-2">
                            ${product.price.toFixed(2)}
                          </p>
                          <button
                            onClick={() => toggleProduct(product)}
                            className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer
                              ${selected
                                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                                : 'bg-primary text-white hover:bg-primary/90'
                              }`}
                          >
                            {selected ? (
                              <>
                                <Minus size={14} />
                                Remove
                              </>
                            ) : (
                              <>
                                <Plus size={14} />
                                Add to Box
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Step Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="text-sm font-medium text-warm-gray hover:text-primary transition-colors cursor-pointer"
                  >
                    &larr; Back to Themes
                  </button>
                  {selectedProducts.length > 0 && (
                    <button
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      Customize
                      <Package size={18} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Customize */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-2">
                  Customize Your Gift Box
                </h2>
                <p className="text-warm-gray mb-8">
                  Choose your wrapping and add a personal message.
                </p>

                {/* Wrapping Options */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                    <Package size={20} className="text-primary" />
                    Gift Wrapping
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {wrappingOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setWrapping(option.value)}
                        className={`relative flex flex-col p-5 rounded-2xl border-2 transition-all duration-200 text-left cursor-pointer
                          ${wrapping === option.value
                            ? 'border-primary bg-sage-light/30 shadow-md'
                            : 'border-light-gray bg-white hover:border-sage hover:shadow-sm'
                          }`}
                      >
                        {wrapping === option.value && (
                          <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Check size={12} className="text-white" />
                          </div>
                        )}
                        <span className="text-base font-bold text-charcoal mb-0.5">
                          {option.label}
                        </span>
                        <span className="text-xs text-warm-gray mb-2">
                          {option.description}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {option.price === 0 ? 'Free' : `+$${option.price.toFixed(2)}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gift Message */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                    <MessageSquare size={20} className="text-primary" />
                    Gift Message
                    <span className="text-xs font-normal text-warm-gray">(optional)</span>
                  </h3>
                  <textarea
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    placeholder="Write a heartfelt message... or a funny one. We don't judge."
                    maxLength={300}
                    rows={4}
                    className="w-full rounded-xl border-2 border-light-gray p-4 text-charcoal placeholder:text-warm-gray/50 focus:border-primary focus:ring-0 focus:outline-none resize-none transition-colors"
                  />
                  <p className="text-xs text-warm-gray mt-1 text-right">
                    {giftMessage.length}/300
                  </p>
                </div>

                {/* Step Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="text-sm font-medium text-warm-gray hover:text-primary transition-colors cursor-pointer"
                  >
                    &larr; Back to Products
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Bottom Bar */}
          <div className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-6 bg-white rounded-2xl border border-light-gray p-6 shadow-sm">
              <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                <Gift size={20} className="text-primary" />
                Your Gift Box
              </h3>

              {/* Theme */}
              {theme && (
                <div className="flex items-center gap-2 text-sm text-warm-gray mb-4 pb-4 border-b border-light-gray">
                  <span>Theme:</span>
                  <span className="font-semibold text-charcoal capitalize">
                    {theme.replace('-', ' ')}
                  </span>
                </div>
              )}

              {/* Selected Items */}
              {selectedProducts.length > 0 ? (
                <ul className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {selectedProducts.map((product) => (
                    <li
                      key={product.id}
                      className="flex items-start justify-between gap-2 text-sm"
                    >
                      <span className="text-charcoal line-clamp-1 flex-1">
                        {product.name}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-semibold text-charcoal">
                          ${product.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => toggleProduct(product)}
                          className="text-warm-gray hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-warm-gray/60 mb-4 py-4 text-center">
                  No items yet — browse and add some!
                </p>
              )}

              {/* Totals */}
              <div className="border-t border-light-gray pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">
                    Items ({selectedProducts.length})
                  </span>
                  <span className="text-charcoal font-medium">
                    ${itemsTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">Gift Wrapping</span>
                  <span className="text-charcoal font-medium">
                    {wrappingPrice === 0 ? 'Free' : `$${wrappingPrice.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-light-gray">
                  <span className="text-charcoal">Total</span>
                  <span className="text-primary">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleAddToCart}
                disabled={selectedProducts.length === 0}
                className={`w-full mt-6 flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-bold transition-colors cursor-pointer
                  ${selectedProducts.length > 0
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-light-gray text-warm-gray cursor-not-allowed'
                  }`}
              >
                <Gift size={18} />
                Add Gift Box to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
