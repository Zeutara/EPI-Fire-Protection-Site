import Link from 'next/link';
import { searchProducts } from '@/lib/products';
import ProductGrid from '@/components/product/ProductGrid';

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata = {
  title: 'Search | Frog & Toad',
  description: 'Search for unique gifts, local goods, and handmade treasures at Frog & Toad.',
};

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? '';
  const results = query ? searchProducts(query) : [];

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Search input */}
        <div className="max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-6">
            Search
          </h1>
          <form action="/search" method="GET">
            <div className="relative">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search for products, collections, or ideas..."
                className="w-full px-5 py-4 pr-14 border border-light-gray rounded-2xl text-charcoal text-base placeholder:text-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-warm-gray hover:text-primary transition-colors duration-200 cursor-pointer"
                aria-label="Search"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {query ? (
          <>
            <p className="text-warm-gray text-sm mb-8">
              {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
              <span className="font-semibold text-charcoal">&ldquo;{query}&rdquo;</span>
            </p>

            {results.length > 0 ? (
              <ProductGrid products={results} columns={4} />
            ) : (
              <div className="text-center py-16 max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-warm-gray"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-charcoal mb-2">
                  No results found
                </h2>
                <p className="text-warm-gray leading-relaxed mb-6">
                  We couldn&apos;t find anything matching &ldquo;{query}&rdquo;.
                  Try a different search term or browse our collections.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/collections"
                    className="px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-xl transition-colors duration-200"
                  >
                    Browse Collections
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-2.5 border border-light-gray text-charcoal text-sm font-semibold rounded-xl hover:bg-cream transition-colors duration-200"
                  >
                    Back to Home
                  </Link>
                </div>

                {/* Suggestions */}
                <div className="mt-10 pt-8 border-t border-light-gray">
                  <p className="text-sm font-semibold text-charcoal mb-3">
                    Popular searches
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['candle', 'stickers', 'rhode island', 'pin', 'tote', 'gift'].map(
                      (term) => (
                        <Link
                          key={term}
                          href={`/search?q=${encodeURIComponent(term)}`}
                          className="px-4 py-1.5 bg-cream text-sm text-charcoal rounded-full hover:bg-secondary transition-colors duration-200"
                        >
                          {term}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 max-w-md mx-auto">
            <p className="text-warm-gray leading-relaxed mb-6">
              Start typing to search our entire catalog of unique gifts,
              stationery, home goods, and more.
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-charcoal mb-3">
                Popular searches
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['candle', 'stickers', 'rhode island', 'pin', 'tote', 'gift'].map(
                  (term) => (
                    <Link
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="px-4 py-1.5 bg-cream text-sm text-charcoal rounded-full hover:bg-secondary transition-colors duration-200"
                    >
                      {term}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
