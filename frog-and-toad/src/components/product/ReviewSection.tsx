'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { getReviewsForProduct } from '@/lib/products';
import type { Review } from '@/lib/types';

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

function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="w-4 text-right text-warm-gray font-medium">{stars}</span>
      <Star size={12} className="fill-accent text-accent flex-shrink-0" />
      <div className="flex-1 h-2 bg-light-gray rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-6 text-right text-warm-gray text-xs">{count}</span>
    </div>
  );
}

export default function ReviewSection({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showWriteReview, setShowWriteReview] = useState(false);

  useEffect(() => {
    setReviews(getReviewsForProduct(productId));
  }, [productId]);

  if (reviews.length === 0) {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Customer Reviews</h2>
        <div className="text-center py-12 bg-cream/40 rounded-2xl">
          <p className="text-warm-gray mb-4">No reviews yet. Be the first!</p>
          <button
            onClick={() => setShowWriteReview(true)}
            className="px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Write a Review
          </button>
        </div>
        {showWriteReview && <WriteReviewPlaceholder onClose={() => setShowWriteReview(false)} />}
      </section>
    );
  }

  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const distribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
  }));

  return (
    <section className="py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold text-charcoal">Customer Reviews</h2>
        <button
          onClick={() => setShowWriteReview(true)}
          className="px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer self-start"
        >
          Write a Review
        </button>
      </div>

      {/* Summary */}
      <div className="flex flex-col sm:flex-row gap-8 mb-10 p-6 bg-cream/40 rounded-2xl">
        {/* Average */}
        <div className="flex flex-col items-center gap-2 sm:pr-8 sm:border-r sm:border-light-gray">
          <span className="text-5xl font-bold text-charcoal">{avgRating.toFixed(1)}</span>
          <StarRating rating={avgRating} size={20} />
          <span className="text-warm-gray text-sm">{reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
        </div>

        {/* Distribution */}
        <div className="flex-1 flex flex-col gap-1.5 justify-center">
          {distribution.map(({ stars, count }) => (
            <RatingBar key={stars} stars={stars} count={count} total={reviews.length} />
          ))}
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-light-gray pb-6 last:border-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <StarRating rating={review.rating} size={14} />
                <h4 className="font-semibold text-charcoal mt-1.5">{review.title}</h4>
              </div>
            </div>
            <p className="text-sm text-charcoal/80 leading-relaxed mb-3">{review.body}</p>
            <div className="flex items-center gap-3 text-xs text-warm-gray">
              <span className="font-medium">{review.author}</span>
              {review.verified && (
                <span className="flex items-center gap-1 text-primary font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Verified Purchase
                </span>
              )}
              <span>
                {new Date(review.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              {review.helpfulCount > 0 && (
                <span>{review.helpfulCount} found this helpful</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {showWriteReview && <WriteReviewPlaceholder onClose={() => setShowWriteReview(false)} />}
    </section>
  );
}

function WriteReviewPlaceholder({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <h3 className="text-xl font-bold text-charcoal mb-2">Write a Review</h3>
        <p className="text-warm-gray text-sm mb-6">
          Share your experience with this product. Your feedback helps other shoppers!
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className="text-light-gray cursor-pointer hover:fill-accent hover:text-accent transition-colors" />
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1">Title</label>
            <input
              type="text"
              placeholder="Sum it up in a few words"
              className="w-full px-4 py-2.5 border border-light-gray rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1">Review</label>
            <textarea
              rows={4}
              placeholder="Tell us what you think..."
              className="w-full px-4 py-2.5 border border-light-gray rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 border border-light-gray text-charcoal text-sm font-semibold rounded-xl hover:bg-cream transition-colors duration-200 cursor-pointer"
          >
            Cancel
          </button>
          <button className="flex-1 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}
