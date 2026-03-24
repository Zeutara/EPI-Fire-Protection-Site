import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage-light via-cream to-sage-light/40">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-12 left-[8%] text-5xl opacity-[0.08] rotate-[-15deg]">
          🌿
        </div>
        <div className="absolute top-28 right-[12%] text-4xl opacity-[0.07] rotate-12">
          🐸
        </div>
        <div className="absolute bottom-16 left-[15%] text-3xl opacity-[0.06] rotate-[-8deg]">
          🍃
        </div>
        <div className="absolute bottom-24 right-[20%] text-4xl opacity-[0.08] rotate-[20deg]">
          🌱
        </div>
        <div className="absolute top-1/2 left-[45%] text-3xl opacity-[0.05] rotate-6">
          🪴
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-medium text-primary tracking-wide">
              Providence, RI
            </span>
            <span className="text-warm-gray" aria-hidden="true">
              &middot;
            </span>
            <span className="text-sm text-warm-gray">
              Est. 2009
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight mb-6">
            Curated Gifts for{' '}
            <span className="text-primary">Curious People</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-warm-gray max-w-xl mx-auto mb-10 leading-relaxed">
            A Providence original since 2009. Weird, wonderful, and always one-of-a-kind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collections/best-sellers"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-colors duration-200 text-base shadow-lg shadow-primary/20"
            >
              Shop Best Sellers
            </Link>
            <Link
              href="/gift-finder"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white/70 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 text-primary font-semibold rounded-full transition-all duration-200 text-base"
            >
              Find the Perfect Gift
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-warm-gray">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true">&#9733;</span>
              4.9 average rating
            </span>
            <span className="hidden sm:inline text-light-gray" aria-hidden="true">|</span>
            <span>Free shipping over $50</span>
            <span className="hidden sm:inline text-light-gray" aria-hidden="true">|</span>
            <span>Gift wrapping available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
