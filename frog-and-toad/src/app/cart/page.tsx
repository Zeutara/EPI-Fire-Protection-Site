'use client';

import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CartPage() {
  const cart = useStore((s) => s.cart);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const cartTotal = useStore((s) => s.cartTotal);
  const cartCount = useStore((s) => s.cartCount);

  const subtotal = cartTotal();
  const totalItems = cartCount();
  const shippingEstimate = subtotal >= 50 ? 0 : 5.99;
  const orderTotal = subtotal + shippingEstimate;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <div className="w-24 h-24 rounded-full bg-sage-light/50 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🛒</span>
          </div>
          <h1 className="text-3xl font-bold text-charcoal mb-3">
            Your cart is empty
          </h1>
          <p className="text-warm-gray text-lg mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t found your next favorite thing yet. We
            can fix that.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-light-gray">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm text-warm-gray hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-charcoal">
            Your Cart{' '}
            <span className="text-warm-gray font-normal text-lg">
              ({totalItems} item{totalItems !== 1 ? 's' : ''})
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="flex-1 min-w-0">
            <div className="space-y-4">
              {cart.map((item) => {
                const itemPrice = item.variant?.price || item.product.price;
                const lineTotal = itemPrice * item.quantity;

                return (
                  <div
                    key={`${item.product.id}-${item.variant?.id || 'default'}`}
                    className="flex gap-4 bg-white rounded-2xl border border-light-gray p-4 md:p-5"
                  >
                    {/* Product Image Placeholder */}
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-sage-light/20 flex items-center justify-center shrink-0"
                    >
                      <span className="text-warm-gray/40 text-[10px] font-medium uppercase">
                        {item.product.category}
                      </span>
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/products/${item.product.slug}`}
                            className="text-sm md:text-base font-semibold text-charcoal hover:text-primary transition-colors line-clamp-2"
                          >
                            {item.product.name}
                          </Link>
                          {item.variant && (
                            <p className="text-xs text-warm-gray mt-0.5">
                              {item.variant.name}
                            </p>
                          )}
                        </div>
                        <p className="text-base font-bold text-charcoal shrink-0">
                          ${lineTotal.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-light-gray rounded-lg overflow-hidden">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.variant?.id
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center text-warm-gray hover:bg-sage-light/30 hover:text-primary transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center text-sm font-semibold text-charcoal border-x border-light-gray">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1,
                                item.variant?.id
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center text-warm-gray hover:bg-sage-light/30 hover:text-primary transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.variant?.id)
                          }
                          className="flex items-center gap-1.5 text-xs text-warm-gray hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <Trash2 size={14} />
                          <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-6 bg-white rounded-2xl border border-light-gray p-6 shadow-sm">
              <h2 className="text-lg font-bold text-charcoal mb-5">
                Order Summary
              </h2>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">
                    Subtotal ({totalItems} item{totalItems !== 1 ? 's' : ''})
                  </span>
                  <span className="text-charcoal font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">Shipping</span>
                  <span className="text-charcoal font-medium">
                    {shippingEstimate === 0 ? (
                      <span className="text-primary font-semibold">Free</span>
                    ) : (
                      `$${shippingEstimate.toFixed(2)}`
                    )}
                  </span>
                </div>
                {subtotal < 50 && (
                  <p className="text-xs text-accent">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}
              </div>

              <div className="flex justify-between text-base font-bold pt-4 border-t border-light-gray mb-6">
                <span className="text-charcoal">Estimated Total</span>
                <span className="text-primary">${orderTotal.toFixed(2)}</span>
              </div>

              <button className="w-full py-3.5 bg-primary text-white rounded-xl font-bold text-base hover:bg-primary/90 transition-colors cursor-pointer mb-3">
                Proceed to Checkout
              </button>

              <Link
                href="/collections"
                className="block text-center text-sm text-warm-gray hover:text-primary transition-colors"
              >
                or continue shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-5 border-t border-light-gray space-y-3">
                <div className="flex items-center gap-3 text-sm text-warm-gray">
                  <Truck size={18} className="text-primary shrink-0" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-warm-gray">
                  <Shield size={18} className="text-primary shrink-0" />
                  <span>Secure checkout &amp; encrypted payment</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-warm-gray">
                  <RotateCcw size={18} className="text-primary shrink-0" />
                  <span>30-day hassle-free returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
