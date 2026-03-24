import type { Product } from '@/lib/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 3 | 4;
}

export default function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 sm:gap-6 ${
        columns === 4
          ? 'md:grid-cols-3 lg:grid-cols-4'
          : 'md:grid-cols-3'
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
