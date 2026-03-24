import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { getNewArrivals } from '@/lib/products';

export default function NewArrivals() {
  const newProducts = getNewArrivals();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Just Landed
            </h2>
            <p className="mt-2 text-warm-gray text-base sm:text-lg">
              Fresh finds, hot off the truck.
            </p>
          </div>
          <Link
            href="/collections/new-arrivals"
            className="hidden sm:inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors duration-200"
          >
            View all
            <span className="ml-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {newProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile "View all" */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/collections/new-arrivals"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors duration-200"
          >
            View all new arrivals
            <span className="ml-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
