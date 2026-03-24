import Link from 'next/link';

const guides = [
  {
    title: 'Gifts Under $25',
    slug: 'gifts-under-25',
    description: 'Thoughtful picks that keep your wallet happy.',
    color: 'bg-accent-light/20',
    border: 'border-accent/20',
  },
  {
    title: 'Gifts for Her',
    slug: 'gifts-for-her',
    description: 'Curated favorites she will actually love.',
    color: 'bg-sage-light/40',
    border: 'border-sage/20',
  },
  {
    title: 'Gifts for Him',
    slug: 'gifts-for-him',
    description: 'Beyond the boring. Gifts he will use and enjoy.',
    color: 'bg-secondary/40',
    border: 'border-secondary',
  },
  {
    title: 'Funny Gifts',
    slug: 'funny-gifts',
    description: 'For the person who values a good laugh.',
    color: 'bg-cream',
    border: 'border-accent-light/30',
  },
];

export default function GiftGuides() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Need a Hand? Try Our Gift Guides
          </h2>
          <p className="mt-3 text-warm-gray text-base sm:text-lg max-w-lg mx-auto">
            We did the hard part so you can take all the credit.
          </p>
        </div>

        {/* Guide cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/collections/${guide.slug}`}
              className={`group rounded-2xl ${guide.color} border ${guide.border} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md`}
            >
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors duration-200">
                  {guide.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {guide.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                Shop Guide
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
