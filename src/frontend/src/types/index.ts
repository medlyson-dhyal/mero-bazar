export interface Product {
  id: number;
  title: string;
  description: string;
  price: number; // in cents
  originalPrice: number; // in cents
  discountPercent: number;
  rating: number; // 0-50 (represents 0.0-5.0 stars, multiply by 0.1)
  reviewCount: number;
  images: string[];
  category: string;
  sellerId: string;
  inStock: boolean;
  specs: [string, string][];
  tags: string[];
}

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CartItemWithProduct extends CartItem {
  product: Product;
}

export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
  title: string;
}

export interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: number;
}

export interface Review {
  productId: number;
  userId: string;
  rating: number;
  text: string;
  date: number;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
}
