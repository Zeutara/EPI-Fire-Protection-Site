'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getFeaturedCollections, getProductsByCollection } from '@/lib/products';

const collectionColors: Record<string, string> = {
  'best-sellers': 'bg-accent/20',
  'new-arrivals': 'bg-sage/30',
  'rhode-island': 'bg-secondary/60',
  'gifts-under-25': 'bg-accent-light/25',
  'funny-gifts': 'bg-sage-light/50',
};

export default function FeaturedCollections() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const collections = getFeaturedCollections();

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Shop by Collection
            </h2>
            <p className="mt-2 text-warm-gray text-base sm:text-lg">
              Curated groups to help you find exactly what you need.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full border border-light-gray hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full border border-light-gray hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {collections.map((collection) => {
            const products = getProductsByCollection(collection.slug);
            const bgColor = collectionColors[collection.slug] || 'bg-sage-light/30';

            return (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group flex-shrink-0 w-[260px] sm:w-[290px] snap-start"
              >
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Color placeholder */}
                  <div
                    className={`h-[200px] ${bgColor} flex items-center justify-center relative overflow-hidden`}
                  >
                    <span className="text-charcoal/20 text-xs font-medium uppercase tracking-widest select-none">
                      {collection.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>

                  {/* Card info */}
                  <div className="p-5">
                    <h3 className="font-semibold text-charcoal text-lg group-hover:text-primary transition-colors duration-200">
                      {collection.name}
                    </h3>
                    <p className="text-warm-gray text-sm mt-1">
                      {products.length} {products.length === 1 ? 'product' : 'products'}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
