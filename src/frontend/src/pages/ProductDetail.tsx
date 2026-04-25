import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  Check,
  ChevronLeft,
  Heart,
  Share2,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { DarazBadge } from "../components/ui/DarazBadge";
import { ProductCard } from "../components/ui/ProductCard";
import { StarRating } from "../components/ui/StarRating";
import { useCartStore } from "../lib/cart-store";
import { PRODUCTS, getProductById } from "../lib/demo-data";

export default function ProductDetailPage() {
  const { id } = useParams({ from: "/product/$id" });
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <Layout showSearch={false} data-ocid="product.page">
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
          <span className="text-5xl mb-3">😕</span>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">
            Product not found
          </h2>
          <Link to="/" className="text-primary font-semibold text-sm">
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

  const inCart = items.some((i) => i.productId === product.id);

  const handleAddToCart = () => {
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  const priceDisplay = (product.price / 100).toFixed(2);
  const originalDisplay = (product.originalPrice / 100).toFixed(2);

  return (
    <div
      className="min-h-screen bg-background pb-24 max-w-md mx-auto"
      data-ocid="product.page"
    >
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="flex items-center px-4 h-14 gap-3">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="p-1.5 -ml-1.5 rounded-lg text-foreground hover:bg-muted transition-smooth"
            aria-label="Go back"
            data-ocid="product.back_button"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="flex-1 font-display font-bold text-base truncate">
            {product.title}
          </span>
          <button
            type="button"
            onClick={() => setLiked(!liked)}
            data-ocid="product.wishlist_button"
            className={`p-2 rounded-full transition-smooth ${liked ? "text-destructive" : "text-muted-foreground hover:text-foreground"}`}
            aria-label="Add to wishlist"
          >
            <Heart size={18} className={liked ? "fill-destructive" : ""} />
          </button>
          <button
            type="button"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-smooth"
            aria-label="Share"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Product image */}
      <div className="relative bg-muted aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {product.discountPercent > 0 && (
          <div className="absolute top-4 left-4">
            <DarazBadge variant="discount" className="text-sm px-2 py-1">
              -{product.discountPercent}%
            </DarazBadge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Title + rating */}
        <div>
          <h1 className="font-display font-bold text-lg text-foreground leading-tight mb-2">
            {product.title}
          </h1>
          <div className="flex items-center gap-2">
            <StarRating
              rating={product.rating}
              size="md"
              showCount
              count={product.reviewCount}
            />
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="font-display font-black text-2xl text-primary">
            ${priceDisplay}
          </span>
          {product.discountPercent > 0 && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                ${originalDisplay}
              </span>
              <DarazBadge variant="discount">
                {product.discountPercent}% OFF
              </DarazBadge>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted rounded-full text-[11px] font-medium text-muted-foreground capitalize"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="bg-muted/40 rounded-2xl p-4">
          <h2 className="font-display font-bold text-sm text-foreground mb-2">
            Description
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Specs */}
        {product.specs.length > 0 && (
          <div className="bg-muted/40 rounded-2xl p-4">
            <h2 className="font-display font-bold text-sm text-foreground mb-3">
              Specifications
            </h2>
            <div className="space-y-2">
              {product.specs.map(([key, val]) => (
                <div key={key} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-semibold text-foreground">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews summary */}
        <div className="bg-muted/40 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display font-bold text-sm text-foreground">
              Customer Reviews
            </h2>
            <span className="text-xs text-muted-foreground">
              {product.reviewCount.toLocaleString()} reviews
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="font-display font-black text-3xl text-foreground">
                {(product.rating / 10).toFixed(1)}
              </p>
              <div className="flex justify-center mt-0.5">
                <Star size={14} className="fill-primary text-primary" />
              </div>
            </div>
            <div className="flex-1 space-y-1">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-1.5">
                  <span className="text-[10px] text-muted-foreground w-2">
                    {star}
                  </span>
                  <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{
                        width:
                          star === 5
                            ? "65%"
                            : star === 4
                              ? "20%"
                              : star === 3
                                ? "10%"
                                : star === 2
                                  ? "3%"
                                  : "2%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-display font-bold text-base text-foreground mb-3">
              Similar Products
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i + 1} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto bg-card border-t border-border p-3">
        <button
          type="button"
          onClick={handleAddToCart}
          data-ocid="product.add_to_cart_button"
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-smooth active:scale-[0.99]
            ${
              added || inCart
                ? "bg-success/20 text-success border-2 border-success/40"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
        >
          {added ? (
            <>
              <Check size={18} />
              Added to Cart!
            </>
          ) : inCart ? (
            <>
              <Check size={18} />
              Already in Cart — Add Again
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              Add to Cart — ${priceDisplay}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
