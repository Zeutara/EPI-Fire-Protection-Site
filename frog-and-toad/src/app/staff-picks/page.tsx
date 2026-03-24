import type { Metadata } from 'next';
import { getProductById } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';

export const metadata: Metadata = {
  title: 'Staff Picks | Frog & Toad',
  description:
    'Handpicked favorites from the Frog & Toad crew. Real opinions from real humans who spend way too much time surrounded by cool stuff.',
};

const staffPicks = [
  {
    name: 'Ellie',
    role: 'Chief Chaos Officer',
    productId: 'p7',
    note: 'I bought this as a gag gift for my roommate and then immediately bought one for myself. The cedarwood-vanilla scent is genuinely incredible — it fills the whole apartment. The label makes everyone who visits pick it up and laugh. I\'ve gifted about twelve of these at this point. It\'s my answer to every "what should I get them?" question.',
  },
  {
    name: 'Marcus',
    role: 'Head of Snacks & Stickers',
    productId: 'p9',
    note: 'I\'m a simple man: I see a well-illustrated mushroom, I put a sticker of it on things. This pack has ten completely unique designs and the quality is unreal — I\'ve had one on my water bottle for eight months and it still looks brand new. The artist is local too, which makes it even better. These fungi are my friends now.',
  },
  {
    name: 'Jules',
    role: 'Vibe Curator & Pin Enthusiast',
    productId: 'p4',
    note: 'This pin lives on my denim jacket and it is the single most complimented thing I own. People stop me on the street for this cat. The double rubber clutch means it\'s not going anywhere, and the hard enamel finish is chef\'s kiss. Every cat person needs this. Every non-cat person also needs this.',
  },
  {
    name: 'Danny',
    role: 'Resident Rhode Islander',
    productId: 'p2',
    note: 'I own this hoodie in two colors and I regret nothing. The heavyweight fleece is built for actual New England winters, not the decorative kind. The skyline design is subtle enough to wear anywhere but Providence enough to spark a conversation at every coffee shop. If you know, you know.',
  },
];

export default function StaffPicksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Staff Picks</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            The things we actually buy with our own money. Real favorites from
            the humans behind the counter.
          </p>
        </div>
      </section>

      {/* Staff Picks */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {staffPicks.map((pick, index) => {
            const product = getProductById(pick.productId);
            if (!product) return null;

            const isEven = index % 2 === 0;

            return (
              <div
                key={pick.name}
                className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Product Card */}
                <div className="w-full md:w-72 shrink-0">
                  <ProductCard product={product} />
                </div>

                {/* Staff Info & Note */}
                <div className="flex-1 pt-2">
                  <div className="mb-4">
                    {/* Avatar placeholder */}
                    <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mb-3">
                      <span className="text-xl font-bold text-primary">
                        {pick.name[0]}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-charcoal">
                      {pick.name}
                    </h2>
                    <p className="text-sm font-medium text-accent">
                      {pick.role}
                    </p>
                  </div>

                  <div className="relative bg-white rounded-2xl border border-light-gray p-5 md:p-6">
                    {/* Speech bubble arrow */}
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l border-b border-light-gray rotate-45 hidden md:block" />
                    <p className="text-warm-gray leading-relaxed italic">
                      &ldquo;{pick.note}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
