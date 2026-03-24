import type { Metadata } from 'next';
import { Heart, Leaf, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Story | Frog & Toad',
  description:
    'Founded in 2009 in Providence, Rhode Island. Frog & Toad is a celebration of curiosity, creativity, and community — curating the weird, wonderful, and one-of-a-kind since day one.',
  openGraph: {
    title: 'Our Story | Frog & Toad',
    description:
      'A Providence original since 2009. Learn about our mission to celebrate curiosity, creativity, and community.',
  },
};

const milestones = [
  {
    year: '2009',
    title: 'A Wild Idea Takes Root',
    description:
      'Frog & Toad opens its doors on Hope Street in Providence with a simple mission: find the most interesting, delightful, unexpected things and share them with the world.',
  },
  {
    year: '2012',
    title: 'The Rhode Island Collection Launches',
    description:
      'We started collaborating with local artists and makers to create products that celebrate everything we love about the Ocean State. It became our signature.',
  },
  {
    year: '2015',
    title: 'Growing the Family',
    description:
      'The team grew from two to ten, each person weirder and more wonderful than the last. We expanded the store and added an entire wall dedicated to enamel pins (obviously).',
  },
  {
    year: '2018',
    title: 'Going Digital',
    description:
      'We launched our online shop so people beyond Providence could get their hands on our curated goods. Turns out, the whole world wants a sassy cat pin.',
  },
  {
    year: '2023',
    title: 'Community First, Always',
    description:
      'We hit a milestone: over 200 local artists and makers featured in the shop. We also started hosting monthly maker markets and community events.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Irreverently Warm',
    description:
      'We take fun seriously, but never ourselves. Every product, every interaction, every pun on our signage comes from a place of genuine warmth and a refusal to be boring.',
  },
  {
    icon: Leaf,
    title: 'Thoughtfully Sourced',
    description:
      'We choose makers who care. Small-batch, sustainably made, and always with a story. If it doesn\'t make us say "whoa, that\'s cool," it doesn\'t make the shelf.',
  },
  {
    icon: Users,
    title: 'Community Rooted',
    description:
      'Providence is our home, and we show up for it. From collaborating with local artists to hosting events, we believe a great shop makes a great neighborhood.',
  },
  {
    icon: Sparkles,
    title: 'Unabashedly Curious',
    description:
      'We\'re drawn to the weird, the wonderful, and the why-does-this-exist-and-why-do-I-need-it. Curiosity is the engine of everything we do.',
  },
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The Frog &amp; Toad Story
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A celebration of curiosity, creativity, and community &mdash;
            born in Providence, Rhode Island, in 2009.
          </p>
        </div>
      </section>

      {/* Opening Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-medium mb-6">
              Frog &amp; Toad started the way all good things do: with a love
              for weird stuff and a total refusal to settle for boring.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              In 2009, we opened our doors on Hope Street in Providence with
              one guiding principle &mdash; if it makes us smile, gasp, or say
              &ldquo;wait, I need that,&rdquo; it belongs here. We weren&apos;t
              trying to be a gift shop. We were trying to be the place you go
              when you want to find something truly special &mdash; something
              you can&apos;t find at the mall, something with a story, something
              made by a real human being who cares about what they create.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              Turns out, a lot of people were looking for exactly that.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed">
              Today, Frog &amp; Toad is a Providence institution &mdash; a
              place where locals pop in for a birthday card and leave with an
              armful of things they didn&apos;t know they needed. We carry goods
              from over 200 independent artists and makers, with a special soft
              spot for Rhode Island creatives. Our shelves are a lovingly
              curated mess of enamel pins, handmade candles, letterpress cards,
              locally roasted coffee, tongue-in-cheek tees, and about a
              thousand other things that are hard to categorize but impossible
              to resist.
            </p>
          </div>
        </div>
      </section>

      {/* Rhode Island Pride */}
      <section className="py-16 md:py-20 bg-sage-light/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Proudly Providence
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed max-w-2xl mx-auto">
            Rhode Island is the smallest state with the biggest personality, and
            we wouldn&apos;t have it any other way. We champion local makers,
            celebrate Ocean State culture, and put Providence on every t-shirt
            we can. This city raised us, inspires us, and keeps us endlessly
            entertained &mdash; from the WaterFire nights to the Del&apos;s
            Lemonade lines to the beautiful chaos of Federal Hill. We&apos;re
            not just located here. We&apos;re from here.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            How We Got Here
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-sage-light" />

            <div className="space-y-10">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative pl-16 md:pl-20">
                  {/* Year dot */}
                  <div className="absolute left-0 top-0.5 w-12 md:w-16 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-sage-light" />
                  </div>
                  <div>
                    <span className="inline-block text-sm font-bold text-primary bg-sage-light/50 px-3 py-1 rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
            What We Stand For
          </h2>
          <p className="text-warm-gray text-center max-w-2xl mx-auto mb-12">
            These aren&apos;t just values we put on a poster. They show up in
            every product we stock, every person we hire, and every interaction
            we have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 md:p-8 rounded-2xl bg-cream/60 border border-light-gray"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-light/50 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Come Say Hi
          </h2>
          <p className="text-warm-gray text-lg mb-10 max-w-xl mx-auto">
            We&apos;re even better in person. Stop by, say hello, and let us
            help you find the perfect thing.
          </p>

          <div className="inline-block bg-white rounded-2xl border border-light-gray p-8 md:p-10 text-left shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                  Address
                </h3>
                <p className="text-charcoal">
                  795 Hope Street
                  <br />
                  Providence, RI 02906
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                  Hours
                </h3>
                <p className="text-charcoal">
                  Monday &ndash; Saturday: 10am &ndash; 6pm
                  <br />
                  Sunday: 11am &ndash; 5pm
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                  Contact
                </h3>
                <p className="text-charcoal">
                  hello@frogandtoadstore.com
                  <br />
                  (401) 831-3434
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
