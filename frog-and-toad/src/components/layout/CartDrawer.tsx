'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { useStore } from '@/lib/store';
import Link from 'next/link';

const trustBadges = [
  { icon: Truck, label: 'Free shipping over $50' },
  { icon: RotateCcw, label: 'Easy 30-day returns' },
  { icon: Shield, label: 'Secure checkout' },
];

export default function CartDrawer() {
  const cart = useStore((s) => s.cart);
  const cartOpen = useStore((s) => s.cartOpen);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const cartTotal = useStore((s) => s.cartTotal());
  const cartCount = useStore((s) => s.cartCount());

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && cartOpen) setCartOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cartOpen, setCartOpen]);

  const freeShippingThreshold = 50;
  const freeShippingProgress = Math.min(cartTotal / freeShippingThreshold, 1);
  const amountToFreeShipping = Math.max(freeShippingThreshold - cartTotal, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-background shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-light-gray">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-charcoal">
                  Your Cart
                  {cartCount > 0 && (
                    <span className="ml-2 text-sm font-normal text-warm-gray">
                      ({cartCount} {cartCount === 1 ? 'item' : 'items'})
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 -mr-2 text-warm-gray hover:text-charcoal transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            {cartCount > 0 && (
              <div className="px-6 py-3 bg-cream/60">
                {amountToFreeShipping > 0 ? (
                  <p className="text-xs text-warm-gray mb-2">
                    Add <span className="font-semibold text-primary">${amountToFreeShipping.toFixed(2)}</span> more for free shipping!
                  </p>
                ) : (
                  <p className="text-xs text-primary font-medium mb-2">
                    You&apos;ve earned free shipping!
                  </p>
                )}
                <div className="h-1.5 bg-light-gray rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingProgress * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-warm-gray" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-warm-gray mb-6 max-w-xs">
                    Looks like you haven&apos;t found anything yet. Let&apos;s fix that!
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-light-gray">
                  {cart.map((item) => {
                    const itemPrice = item.variant?.price ?? item.product.price;
                    const itemKey = `${item.product.id}-${item.variant?.id ?? 'default'}`;

                    return (
                      <motion.li
                        key={itemKey}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="px-6 py-4"
                      >
                        <div className="flex gap-4">
                          {/* Product Image Placeholder */}
                          <div className="w-20 h-20 rounded-lg bg-sage/30 shrink-0 flex items-center justify-center">
                            <span className="text-[10px] text-primary/50 font-medium text-center px-1">
                              {item.product.name.slice(0, 20)}
                            </span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="text-sm font-medium text-charcoal leading-snug truncate">
                                  {item.product.name}
                                </h4>
                                {item.variant && (
                                  <p className="text-xs text-warm-gray mt-0.5">
                                    {item.variant.name}
                                  </p>
                                )}
                              </div>
                              <button
                                onClick={() =>
                                  removeFromCart(item.product.id, item.variant?.id)
                                }
                                className="p-1 text-warm-gray hover:text-error transition-colors shrink-0"
                                aria-label={`Remove ${item.product.name} from cart`}
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              {/* Quantity Controls */}
                              <div className="flex items-center border border-light-gray rounded-lg">
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      item.product.id,
                                      item.quantity - 1,
                                      item.variant?.id
                                    )
                                  }
                                  className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="px-3 text-sm font-medium text-charcoal min-w-[2rem] text-center">
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
                                  className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <p className="text-sm font-semibold text-charcoal">
                                ${(itemPrice * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Footer — only shown when cart has items */}
            {cart.length > 0 && (
              <div className="border-t border-light-gray">
                {/* Trust Badges */}
                <div className="px-6 py-3 flex items-center justify-center gap-6 border-b border-light-gray/50 bg-cream/40">
                  {trustBadges.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 text-[11px] text-warm-gray"
                    >
                      <Icon className="w-3.5 h-3.5 text-primary" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Subtotal & Actions */}
                <div className="px-6 py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-warm-gray">Subtotal</span>
                    <span className="text-lg font-semibold text-charcoal">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-warm-gray">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <Link
                    href="/cart"
                    onClick={() => setCartOpen(false)}
                    className="block w-full py-3 text-center text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors"
                  >
                    Checkout
                  </Link>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="w-full py-2.5 text-center text-sm font-medium text-primary hover:text-primary-light transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
