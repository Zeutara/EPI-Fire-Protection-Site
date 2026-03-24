'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import ProductGrid from '@/components/product/ProductGrid';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';

const sortLabels: Record<SortOption, string> = {
  featured: 'Featured',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  newest: 'Newest',
  rating: 'Top Rated',
};

export default function CollectionFilterBar({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [sort, setSort] = useState<SortOption>('featured');

  const sortedProducts = useMemo(() => {
    const sorted = [...initialProducts];

    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        sorted.sort(
          (a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0)
        );
        break;
    }

    return sorted;
  }, [initialProducts, sort]);

  return (
    <>
      {/* Filter / Sort bar */}
      <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-light-gray">
        <p className="text-sm text-warm-gray hidden sm:block">
          Showing {sortedProducts.length}{' '}
          {sortedProducts.length === 1 ? 'product' : 'products'}
        </p>

        <div className="flex items-center gap-2 ml-auto">
          <label
            htmlFor="sort-select"
            className="text-sm font-medium text-charcoal"
          >
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm border border-light-gray rounded-xl px-3 py-2 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary cursor-pointer"
          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      {sortedProducts.length > 0 ? (
        <ProductGrid products={sortedProducts} columns={4} />
      ) : (
        <div className="text-center py-16">
          <p className="text-warm-gray text-lg">
            No products found in this collection.
          </p>
        </div>
      )}
    </>
  );
}
