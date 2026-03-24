'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X, ChevronDown, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';

const announcements = [
  'Free shipping on orders over $50!',
  'New arrivals every week — check back often!',
  'Located on Hope Street in Providence, RI',
];

const navLinks = [
  { name: 'Best Sellers', href: '/collections/best-sellers' },
  { name: 'New Arrivals', href: '/collections/new-arrivals' },
  { name: 'Stationery', href: '/collections/stationery' },
  { name: 'Home Goods', href: '/collections/home-goods' },
  { name: 'Clothing & Flair', href: '/collections/clothing' },
  { name: 'Rhode Island', href: '/collections/rhode-island' },
  { name: 'Kids Corner', href: '/collections/kids-corner' },
  { name: 'Gift Finder', href: '/gift-finder' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const cartCount = useStore((s) => s.cartCount());
  const setCartOpen = useStore((s) => s.setCartOpen);
  const setSearchOpen = useStore((s) => s.setSearchOpen);
  const mobileMenuOpen = useStore((s) => s.mobileMenuOpen);
  const setMobileMenuOpen = useStore((s) => s.setMobileMenuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((i) => (i + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleCartClick = useCallback(() => setCartOpen(true), [setCartOpen]);
  const handleSearchClick = useCallback(() => setSearchOpen(true), [setSearchOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
            : 'bg-background'
        }`}
      >
        {/* Announcement Bar */}
        <div className="bg-primary text-white text-center text-xs sm:text-sm py-2 px-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={announcementIndex}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="tracking-wide font-medium"
            >
              {announcements[announcementIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-charcoal hover:text-primary transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary group-hover:text-primary-light transition-colors">
                Frog <span className="font-light text-warm-gray">&amp;</span> Toad
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-charcoal hover:text-primary transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={handleSearchClick}
                className="p-2 text-charcoal hover:text-primary transition-colors"
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/staff-picks"
                className="hidden sm:block p-2 text-charcoal hover:text-primary transition-colors"
                aria-label="Favorites"
              >
                <Heart className="w-5 h-5" />
              </Link>

              <button
                onClick={handleCartClick}
                className="relative p-2 text-charcoal hover:text-primary transition-colors"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    {cartCount > 99 ? '99+' : cartCount}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Secondary Nav — visible on large screens beneath the main bar if you want a tighter top bar */}
      </header>

      {/* Spacer to offset fixed header */}
      <div className="h-[calc(2rem+4rem)] sm:h-[calc(2rem+4.5rem)]" />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[280px] bg-background shadow-xl overflow-y-auto lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-light-gray">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold tracking-tight text-primary"
                >
                  Frog <span className="font-light text-warm-gray">&amp;</span> Toad
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-charcoal hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 px-5 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-3 text-base font-medium text-charcoal hover:text-primary hover:bg-cream rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="border-t border-light-gray mt-2 pt-4 px-5 space-y-1">
                <Link
                  href="/our-story"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 text-sm text-warm-gray hover:text-primary hover:bg-cream rounded-lg transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/staff-picks"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 text-sm text-warm-gray hover:text-primary hover:bg-cream rounded-lg transition-colors"
                >
                  Staff Picks
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
