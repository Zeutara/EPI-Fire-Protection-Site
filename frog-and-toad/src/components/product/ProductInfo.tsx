'use client';

import { useState } from 'react';
import { Plus, Minus, Check, Truck, RotateCcw, Shield, Star } from 'lucide-react';
import { useStore } from '@/lib/store';
import type { Product, ProductVariant } from '@/lib/types';

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
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

export default function ProductInfo({ product }: { product: Product }) {
  const addToCart = useStore((s) => s.addToCart);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const currentPrice = selectedVariant?.price ?? product.price;
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > currentPrice;
  const isLowStock = product.stockCount !== undefined && product.stockCount < 10;
  const canAdd = product.inStock && (!selectedVariant || selectedVariant.inStock);

  const handleAddToCart = () => {
    if (!canAdd) return;
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title and rating */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal leading-tight mb-2">
          {product.name}
        </h1>
        <div className="flex items-center gap-3">
          <StarRating rating={product.rating} />
          <span className="text-warm-gray text-sm">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className={`text-2xl font-bold ${hasDiscount ? 'text-badge-low' : 'text-charcoal'}`}>
          ${currentPrice.toFixed(2)}
        </span>
        {hasDiscount && (
          <span className="text-warm-gray text-lg line-through">
            ${product.compareAtPrice!.toFixed(2)}
          </span>
        )}
        {isLowStock && product.inStock && (
          <span className="text-badge-low text-sm font-medium">
            Only {product.stockCount} left!
          </span>
        )}
      </div>

      {/* Short description */}
      <p className="text-warm-gray leading-relaxed">{product.shortDescription}</p>

      {/* Variant selector */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2.5">
            {product.category === 'clothing' ? 'Size' : 'Option'}
          </label>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                disabled={!variant.inStock}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedVariant?.id === variant.id
                    ? 'bg-primary text-white ring-2 ring-primary ring-offset-2'
                    : variant.inStock
                    ? 'bg-cream text-charcoal hover:bg-secondary'
                    : 'bg-light-gray/50 text-warm-gray/40 line-through cursor-not-allowed'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity selector and Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Quantity */}
        <div className="flex items-center border border-light-gray rounded-xl overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-cream transition-colors duration-200 cursor-pointer"
            aria-label="Decrease quantity"
          >
            <Minus size={16} className="text-charcoal" />
          </button>
          <span className="px-5 py-3 text-sm font-semibold text-charcoal min-w-[48px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-cream transition-colors duration-200 cursor-pointer"
            aria-label="Increase quantity"
          >
            <Plus size={16} className="text-charcoal" />
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={!canAdd}
          className={`flex-1 py-3.5 px-6 rounded-xl text-base font-bold transition-all duration-200 cursor-pointer ${
            canAdd
              ? 'bg-primary hover:bg-primary-light text-white active:scale-[0.98]'
              : 'bg-light-gray text-warm-gray cursor-not-allowed'
          }`}
        >
          {!product.inStock
            ? 'Sold Out'
            : selectedVariant && !selectedVariant.inStock
            ? 'Unavailable'
            : 'Add to Cart'}
        </button>
      </div>

      {/* Why You'll Love This */}
      {product.whyYoullLoveIt.length > 0 && (
        <div className="bg-cream/60 rounded-2xl p-5">
          <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-3">
            Why You&apos;ll Love This
          </h3>
          <ul className="space-y-2.5">
            {product.whyYoullLoveIt.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-charcoal/80 leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Expandable Details */}
      <div className="border border-light-gray rounded-2xl overflow-hidden">
        <button
          onClick={() => setDetailsOpen(!detailsOpen)}
          className="w-full flex items-center justify-between p-4 hover:bg-cream/50 transition-colors duration-200 cursor-pointer"
        >
          <span className="text-sm font-bold text-charcoal uppercase tracking-wide">Details</span>
          <Plus
            size={18}
            className={`text-warm-gray transition-transform duration-300 ${
              detailsOpen ? 'rotate-45' : ''
            }`}
          />
        </button>
        {detailsOpen && (
          <div className="px-4 pb-4 border-t border-light-gray pt-4">
            <p className="text-sm text-charcoal/80 leading-relaxed">{product.description}</p>
          </div>
        )}
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-3 pt-2">
        {[
          { icon: Truck, label: 'Free Shipping', sub: 'Over $50' },
          { icon: RotateCcw, label: 'Easy Returns', sub: '30 Days' },
          { icon: Shield, label: 'Secure', sub: 'Checkout' },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex flex-col items-center text-center gap-1.5 py-3">
            <Icon size={20} className="text-primary" />
            <div>
              <p className="text-xs font-semibold text-charcoal">{label}</p>
              <p className="text-[11px] text-warm-gray">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
