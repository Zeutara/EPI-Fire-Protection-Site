'use client';

import Link from 'next/link';
import { Star, ShoppingBag } from 'lucide-react';
import { useStore } from '@/lib/store';
import type { Product } from '@/lib/types';

const categoryColors: Record<string, string> = {
  clothing: 'bg-sage/20',
  stationery: 'bg-accent-light/20',
  home: 'bg-secondary/40',
  novelty: 'bg-sage-light/30',
};

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(rating)
              ? 'fill-accent text-accent'
              : 'fill-light-gray text-light-gray'
          }
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useStore((s) => s.addToCart);

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const isLowStock = product.stockCount !== undefined && product.stockCount < 10;
  const colorClass = categoryColors[product.category] || 'bg-light-gray/50';

  return (
    <div className="product-card group relative rounded-2xl bg-white overflow-hidden">
      {/* Image area */}
      <Link href={`/products/${product.slug}`} className="block relative">
        <div className={`aspect-square ${colorClass} flex items-center justify-center relative overflow-hidden`}>
          <span className="text-warm-gray/40 text-sm font-medium tracking-wide uppercase select-none">
            {product.category}
          </span>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.isNew && (
              <span className="px-2.5 py-1 bg-badge-new text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-2.5 py-1 bg-badge-sale text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
                Best Seller
              </span>
            )}
            {isLowStock && product.inStock && (
              <span className="px-2.5 py-1 bg-badge-low text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
                Low Stock
              </span>
            )}
            {hasDiscount && (
              <span className="px-2.5 py-1 bg-badge-sale text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Quick Add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
            >
              <ShoppingBag size={16} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/products/${product.slug}`} className="block group/link">
          <h3 className="text-charcoal font-semibold text-sm leading-snug mb-1.5 group-hover/link:text-primary transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-warm-gray text-xs">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className={`font-bold text-base ${hasDiscount ? 'text-badge-low' : 'text-charcoal'}`}>
            ${product.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-warm-gray text-sm line-through">
              ${product.compareAtPrice!.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
