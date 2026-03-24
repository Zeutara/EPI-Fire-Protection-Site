import Link from 'next/link';
import { collections, getProductsByCollection } from '@/lib/products';

const collectionColors = [
  'bg-sage/30',
  'bg-accent-light/20',
  'bg-secondary/40',
  'bg-sage-light/30',
  'bg-cream',
  'bg-accent/10',
];

export const metadata = {
  title: 'Our Collections | Frog & Toad',
  description:
    'Browse our curated collections of unique gifts, local goods, and handmade treasures at Frog & Toad.',
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Our Collections
          </h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Thoughtfully curated groups of our favorite things. Whether you&apos;re
            shopping for someone special or treating yourself, there&apos;s a
            collection for that.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => {
            const productCount = getProductsByCollection(collection.slug).length;

            return (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group block rounded-2xl overflow-hidden border border-light-gray hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Colored placeholder image area */}
                <div
                  className={`aspect-[16/10] ${
                    collectionColors[index % collectionColors.length]
                  } relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-warm-gray"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <p className="text-warm-gray/50 text-xs font-medium">
                        {collection.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors duration-200 mb-1">
                    {collection.name}
                  </h2>
                  <p className="text-warm-gray text-sm leading-relaxed mb-3 line-clamp-2">
                    {collection.description}
                  </p>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {productCount} {productCount === 1 ? 'product' : 'products'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
