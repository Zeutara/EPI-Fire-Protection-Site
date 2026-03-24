import type { Product } from '@/lib/types';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-charcoal mb-8">You Might Also Love</h2>
      <div className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 lg:overflow-visible">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[260px] sm:w-auto sm:flex-1 sm:min-w-0"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
