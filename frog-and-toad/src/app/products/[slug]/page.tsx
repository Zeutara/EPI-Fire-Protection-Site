import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ReviewSection from '@/components/product/ReviewSection';
import RelatedProducts from '@/components/product/RelatedProducts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found | Frog & Toad' };
  }

  return {
    title: `${product.name} | Frog & Toad`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  // Build a human-readable category label
  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <ol className="flex items-center gap-2 text-sm text-warm-gray flex-wrap">
          <li>
            <Link href="/" className="hover:text-primary transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/collections"
              className="hover:text-primary transition-colors duration-200"
            >
              Collections
            </Link>
          </li>
          {product.collections[0] && (
            <>
              <li>/</li>
              <li>
                <Link
                  href={`/collections/${product.collections[0]}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {categoryLabel}
                </Link>
              </li>
            </>
          )}
          <li>/</li>
          <li className="text-charcoal font-medium truncate max-w-[200px]">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Product detail: two-column layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Product info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      {/* Below fold */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-light-gray">
        <ReviewSection productId={product.id} />
        <RelatedProducts products={related} />
      </div>
    </main>
  );
}
