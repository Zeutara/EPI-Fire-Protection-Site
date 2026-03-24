import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getCollectionBySlug, getProductsByCollection, collections } from '@/lib/products';
import ProductGrid from '@/components/product/ProductGrid';
import CollectionFilterBar from './CollectionFilterBar';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return { title: 'Collection Not Found | Frog & Toad' };
  }

  return {
    title: `${collection.name} | Frog & Toad`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsByCollection(slug);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <ol className="flex items-center gap-2 text-sm text-warm-gray">
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
          <li>/</li>
          <li className="text-charcoal font-medium">{collection.name}</li>
        </ol>
      </nav>

      {/* Collection header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-3">
          {collection.name}
        </h1>
        <p className="text-warm-gray text-lg max-w-3xl leading-relaxed">
          {collection.description}
        </p>
        <p className="text-sm text-warm-gray mt-3">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </p>
      </section>

      {/* Filter bar + Product grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <CollectionFilterBar initialProducts={products} />
      </section>
    </main>
  );
}
