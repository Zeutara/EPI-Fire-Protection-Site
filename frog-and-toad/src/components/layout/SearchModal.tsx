'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { searchProducts } from '@/lib/products';
import type { Product } from '@/lib/types';

const popularSearches = [
  'Rhode Island',
  'Stationery',
  'Candles',
  'Tote bags',
  'Kids gifts',
  'Greeting cards',
];

export default function SearchModal() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const searchOpen = useStore((s) => s.searchOpen);
  const setSearchOpen = useStore((s) => s.setSearchOpen);
  const router = useRouter();

  // Focus input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(-1);
      // Slight delay to ensure DOM is ready
      const t = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [searchOpen]);

  // Search as user types
  useEffect(() => {
    if (query.trim().length > 1) {
      const found = searchProducts(query.trim());
      setResults(found.slice(0, 8));
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setSelectedIndex(-1);
    }
  }, [query]);

  const navigateToProduct = useCallback(
    (slug: string) => {
      setSearchOpen(false);
      router.push(`/products/${slug}`);
    },
    [setSearchOpen, router]
  );

  const handlePopularSearch = useCallback((term: string) => {
    setQuery(term);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        return;
      }

      if (results.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => (i < results.length - 1 ? i + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => (i > 0 ? i - 1 : results.length - 1));
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        navigateToProduct(results[selectedIndex].slug);
      }
    },
    [results, selectedIndex, navigateToProduct, setSearchOpen]
  );

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const items = resultsRef.current.querySelectorAll('[data-result-item]');
      items[selectedIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-charcoal/50 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-[90] px-4 pt-[10vh] sm:pt-[15vh] flex justify-center"
          >
            <div className="w-full max-w-2xl bg-background rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-light-gray">
                <Search className="w-5 h-5 text-warm-gray shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for products..."
                  className="flex-1 text-base text-charcoal bg-transparent outline-none placeholder:text-warm-gray/60"
                  aria-label="Search products"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="p-1 text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setSearchOpen(false)}
                  className="ml-1 px-3 py-1.5 text-xs font-medium text-warm-gray bg-cream hover:bg-light-gray rounded-md transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Results / Popular Searches */}
              <div className="max-h-[60vh] overflow-y-auto" ref={resultsRef}>
                {query.trim().length > 1 && results.length > 0 ? (
                  <div className="py-2">
                    <p className="px-5 py-2 text-xs font-medium text-warm-gray uppercase tracking-wider">
                      Products
                    </p>
                    {results.map((product, index) => (
                      <button
                        key={product.id}
                        data-result-item
                        onClick={() => navigateToProduct(product.slug)}
                        className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-colors ${
                          index === selectedIndex
                            ? 'bg-cream'
                            : 'hover:bg-cream/60'
                        }`}
                      >
                        {/* Product Color Swatch */}
                        <div className="w-10 h-10 rounded-lg bg-sage/25 shrink-0 flex items-center justify-center">
                          <Search className="w-4 h-4 text-primary/40" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-charcoal truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-warm-gray capitalize">
                            {product.category}
                            {product.subcategory && ` / ${product.subcategory}`}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-semibold text-charcoal">
                            ${product.price.toFixed(2)}
                          </p>
                          {product.compareAtPrice && (
                            <p className="text-xs text-warm-gray line-through">
                              ${product.compareAtPrice.toFixed(2)}
                            </p>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : query.trim().length > 1 && results.length === 0 ? (
                  <div className="px-5 py-10 text-center">
                    <p className="text-sm text-warm-gray">
                      No results for &ldquo;{query}&rdquo;
                    </p>
                    <p className="text-xs text-warm-gray/70 mt-1">
                      Try a different search term or browse our collections.
                    </p>
                  </div>
                ) : (
                  <div className="py-4">
                    <p className="px-5 py-2 text-xs font-medium text-warm-gray uppercase tracking-wider">
                      Popular Searches
                    </p>
                    <div className="px-5 flex flex-wrap gap-2 pb-4">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => handlePopularSearch(term)}
                          className="px-3 py-1.5 text-sm text-charcoal bg-cream hover:bg-sage/20 hover:text-primary rounded-full transition-colors border border-light-gray"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Hint */}
              <div className="px-5 py-3 border-t border-light-gray/60 bg-cream/40 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[11px] text-warm-gray">
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-background rounded border border-light-gray text-[10px] font-mono">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-background rounded border border-light-gray text-[10px] font-mono ml-0.5">↓</kbd>
                    <span className="ml-1">to navigate</span>
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-background rounded border border-light-gray text-[10px] font-mono">↵</kbd>
                    <span className="ml-1">to select</span>
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-background rounded border border-light-gray text-[10px] font-mono">esc</kbd>
                    <span className="ml-1">to close</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
