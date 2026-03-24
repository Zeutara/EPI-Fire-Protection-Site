'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, ProductVariant } from './types';

interface StoreState {
  // Cart
  cart: CartItem[];
  cartOpen: boolean;
  addToCart: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  cartTotal: () => number;
  cartCount: () => number;

  // Recently viewed
  recentlyViewed: string[];
  addRecentlyViewed: (productId: string) => void;

  // Search
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;

  // Mobile menu
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Email popup
  emailPopupDismissed: boolean;
  dismissEmailPopup: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart state
      cart: [],
      cartOpen: false,

      addToCart: (product, variant, quantity = 1) => {
        const { cart } = get();
        const existingIndex = cart.findIndex(
          (item) => item.product.id === product.id && item.variant?.id === variant?.id
        );

        if (existingIndex >= 0) {
          const updated = [...cart];
          updated[existingIndex].quantity += quantity;
          set({ cart: updated, cartOpen: true });
        } else {
          set({ cart: [...cart, { product, variant, quantity }], cartOpen: true });
        }
      },

      removeFromCart: (productId, variantId) => {
        set({
          cart: get().cart.filter(
            (item) => !(item.product.id === productId && item.variant?.id === variantId)
          ),
        });
      },

      updateQuantity: (productId, quantity, variantId) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, variantId);
          return;
        }
        set({
          cart: get().cart.map((item) =>
            item.product.id === productId && item.variant?.id === variantId
              ? { ...item, quantity }
              : item
          ),
        });
      },

      clearCart: () => set({ cart: [] }),
      toggleCart: () => set({ cartOpen: !get().cartOpen }),
      setCartOpen: (open) => set({ cartOpen: open }),

      cartTotal: () =>
        get().cart.reduce(
          (total, item) => total + (item.variant?.price || item.product.price) * item.quantity,
          0
        ),

      cartCount: () =>
        get().cart.reduce((count, item) => count + item.quantity, 0),

      // Recently viewed
      recentlyViewed: [],
      addRecentlyViewed: (productId) => {
        const { recentlyViewed } = get();
        const filtered = recentlyViewed.filter((id) => id !== productId);
        set({ recentlyViewed: [productId, ...filtered].slice(0, 12) });
      },

      // Search
      searchOpen: false,
      setSearchOpen: (open) => set({ searchOpen: open }),

      // Mobile menu
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

      // Email popup
      emailPopupDismissed: false,
      dismissEmailPopup: () => set({ emailPopupDismissed: true }),
    }),
    {
      name: 'frog-and-toad-store',
      partialize: (state) => ({
        cart: state.cart,
        recentlyViewed: state.recentlyViewed,
        emailPopupDismissed: state.emailPopupDismissed,
      }),
    }
  )
);
