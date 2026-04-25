import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type UserId = Principal;
export type Timestamp = bigint;
export interface OrderItem {
    productId: bigint;
    quantity: bigint;
    price: bigint;
}
export interface CartItem {
    productId: bigint;
    quantity: bigint;
}
export interface Order {
    id: bigint;
    status: string;
    total: bigint;
    createdAt: Timestamp;
    items: Array<OrderItem>;
}
export interface Review {
    userId: UserId;
    date: Timestamp;
    text: string;
    productId: bigint;
    rating: bigint;
}
export interface Product {
    id: bigint;
    title: string;
    inStock: boolean;
    originalPrice: bigint;
    tags: Array<string>;
    description: string;
    discountPercent: bigint;
    specs: Array<[string, string]>;
    category: string;
    sellerId: string;
    rating: bigint;
    price: bigint;
    reviewCount: bigint;
    images: Array<string>;
}
export interface backendInterface {
    addReview(productId: bigint, rating: bigint, reviewText: string): Promise<void>;
    addToCart(productId: bigint, quantity: bigint): Promise<void>;
    addToWishlist(productId: bigint): Promise<void>;
    clearCart(): Promise<void>;
    getCart(): Promise<Array<CartItem>>;
    getCategories(): Promise<Array<string>>;
    getOrderById(id: bigint): Promise<Order | null>;
    getOrders(): Promise<Array<Order>>;
    getProductById(id: bigint): Promise<Product | null>;
    getProducts(): Promise<Array<Product>>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    getReviews(productId: bigint): Promise<Array<Review>>;
    getWishlist(): Promise<Array<bigint>>;
    placeOrder(): Promise<bigint>;
    removeFromCart(productId: bigint): Promise<void>;
    removeFromWishlist(productId: bigint): Promise<void>;
    searchProducts(searchQuery: string): Promise<Array<Product>>;
    updateCartQuantity(productId: bigint, quantity: bigint): Promise<void>;
}
