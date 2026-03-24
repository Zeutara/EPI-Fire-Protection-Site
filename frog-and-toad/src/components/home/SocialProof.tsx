'use client';

import { Star } from 'lucide-react';
import { reviews, getProductById } from '@/lib/products';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= rating
              ? 'fill-accent text-accent'
              : 'fill-light-gray text-light-gray'
          }
        />
      ))}
    </div>
  );
}

export default function SocialProof() {
  // Show first 3 reviews
  const displayReviews = reviews.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            What People Are Saying
          </h2>
          <p className="mt-3 text-warm-gray text-base sm:text-lg">
            Real reviews from real humans who shop here.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayReviews.map((review) => {
            const product = getProductById(review.productId);

            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col"
              >
                {/* Quote mark */}
                <span
                  className="text-sage text-5xl font-serif leading-none mb-3 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>

                {/* Review title */}
                <h3 className="font-semibold text-charcoal text-base mb-2">
                  {review.title}
                </h3>

                {/* Review body */}
                <p className="text-warm-gray text-sm leading-relaxed flex-1">
                  {review.body}
                </p>

                {/* Author & product */}
                <div className="mt-6 pt-5 border-t border-light-gray">
                  <p className="font-semibold text-charcoal text-sm">
                    {review.author}
                  </p>
                  {product && (
                    <p className="text-warm-gray text-xs mt-0.5">
                      on {product.name}
                    </p>
                  )}
                  {review.verified && (
                    <span className="inline-block mt-2 text-xs text-primary font-medium">
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
