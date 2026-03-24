import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { getBestSellers } from '@/lib/products';

export default function BestSellers() {
  const bestSellers = getBestSellers();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Can&rsquo;t-Miss Best Sellers
            </h2>
            <p className="mt-2 text-warm-gray text-base sm:text-lg">
              The crowd favorites everyone keeps coming back for.
            </p>
          </div>
          <Link
            href="/collections/best-sellers"
            className="hidden sm:inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors duration-200"
          >
            View all
            <span className="ml-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile "View all" */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/collections/best-sellers"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors duration-200"
          >
            View all best sellers
            <span className="ml-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
