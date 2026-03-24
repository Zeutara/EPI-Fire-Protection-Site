export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  shortDescription: string;
  whyYoullLoveIt: string[];
  images: string[];
  category: string;
  subcategory?: string;
  collections: string[];
  tags: string[];
  inStock: boolean;
  stockCount?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
  variants?: ProductVariant[];
  relatedProductIds?: string[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price?: number;
  inStock: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productIds: string[];
  featured?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verified: boolean;
  helpfulCount: number;
}

export interface GiftFinderAnswers {
  recipient: string;
  occasion: string;
  budget: string;
  personality: string;
}

export interface GiftBox {
  id: string;
  items: Product[];
  wrapping: 'standard' | 'premium' | 'luxury';
  message?: string;
  theme: 'birthday' | 'holiday' | 'thank-you' | 'just-because' | 'congratulations';
}

export interface CartItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
  giftWrap?: boolean;
  giftMessage?: string;
}

export interface NavCategory {
  name: string;
  slug: string;
  subcategories?: { name: string; slug: string }[];
  featured?: { name: string; slug: string; image: string }[];
}
