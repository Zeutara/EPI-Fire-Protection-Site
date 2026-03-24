import Link from 'next/link';

const shopLinks = [
  { name: 'Best Sellers', href: '/collections/best-sellers' },
  { name: 'New Arrivals', href: '/collections/new-arrivals' },
  { name: 'Stationery', href: '/collections/stationery' },
  { name: 'Home Goods', href: '/collections/home-goods' },
  { name: 'Clothing & Flair', href: '/collections/clothing' },
  { name: 'Gift Finder', href: '/gift-finder' },
];

const aboutLinks = [
  { name: 'Our Story', href: '/our-story' },
  { name: 'Staff Picks', href: '/staff-picks' },
  { name: 'Blog', href: '/blog' },
  { name: 'Visit Us', href: '/visit' },
];

const helpLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Shipping & Delivery', href: '/shipping' },
  { name: 'Returns & Exchanges', href: '/returns' },
  { name: 'Contact Us', href: '/contact' },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-warm-gray hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-light-gray mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <FooterLinkColumn title="Shop" links={shopLinks} />
          <FooterLinkColumn title="About" links={aboutLinks} />
          <FooterLinkColumn title="Help" links={helpLinks} />

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">
              Connect
            </h3>

            {/* Newsletter */}
            <p className="text-sm text-warm-gray mb-3">
              Get the scoop on new arrivals, staff picks, and Providence happenings.
            </p>
            <form className="flex gap-2 mb-6" action="/api/newsletter" method="POST">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 min-w-0 px-3 py-2 text-sm bg-background border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-warm-gray/60 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors shrink-0"
              >
                Join
              </button>
            </form>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/frogandtoadpvd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/frogandtoadpvd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@frogandtoadpvd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Brand Statement */}
        <div className="mt-12 pt-8 border-t border-light-gray/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold tracking-tight text-primary">
                Frog <span className="font-light text-warm-gray">&amp;</span> Toad
              </span>
              <span className="text-xs text-warm-gray">
                795 Hope St, Providence, RI 02906
              </span>
            </div>
            <p className="text-xs text-warm-gray text-center sm:text-right max-w-md">
              A quirky gift shop on the East Side of Providence, curating joy since 1978.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-light-gray/80 bg-cream/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-warm-gray">
              &copy; {new Date().getFullYear()} Frog &amp; Toad. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Shop Pay'].map((method) => (
                <span
                  key={method}
                  className="text-[10px] text-warm-gray/70 bg-background px-2 py-1 rounded border border-light-gray"
                >
                  {method}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-warm-gray">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/accessibility" className="hover:text-primary transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
