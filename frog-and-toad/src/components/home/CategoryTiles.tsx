import Link from 'next/link';

const categories = [
  {
    name: 'Stationery',
    slug: 'stationery',
    color: 'bg-accent-light/25',
    hoverColor: 'hover:bg-accent-light/40',
    textColor: 'text-charcoal',
  },
  {
    name: 'Home Goods',
    slug: 'home-goods',
    color: 'bg-secondary/50',
    hoverColor: 'hover:bg-secondary/70',
    textColor: 'text-charcoal',
  },
  {
    name: 'Clothing & Flair',
    slug: 'clothing-flair',
    color: 'bg-sage/25',
    hoverColor: 'hover:bg-sage/40',
    textColor: 'text-charcoal',
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    color: 'bg-sage-light/50',
    hoverColor: 'hover:bg-sage-light/70',
    textColor: 'text-charcoal',
  },
  {
    name: 'Kids Corner',
    slug: 'kids-corner',
    color: 'bg-cream',
    hoverColor: 'hover:bg-accent-light/20',
    textColor: 'text-charcoal',
  },
  {
    name: 'Novelty',
    slug: 'novelty',
    color: 'bg-primary/10',
    hoverColor: 'hover:bg-primary/20',
    textColor: 'text-charcoal',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Browse by Category
          </h2>
          <p className="mt-3 text-warm-gray text-base sm:text-lg max-w-lg mx-auto">
            Whatever you are looking for, we have probably got something weird and wonderful.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/collections/${category.slug}`}
              className={`group relative rounded-2xl ${category.color} ${category.hoverColor} transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[140px] sm:min-h-[180px]">
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${category.textColor} leading-snug`}>
                  {category.name}
                </h3>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200">
                  Shop now
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
