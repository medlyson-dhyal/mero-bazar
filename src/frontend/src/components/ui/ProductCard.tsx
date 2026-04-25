import { Link } from "@tanstack/react-router";
import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "../../lib/cart-store";
import type { Product } from "../../types";
import { DarazBadge } from "./DarazBadge";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);
  const [added, setAdded] = useState(false);

  const inCart = items.some((i) => i.productId === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const priceDisplay = (product.price / 100).toFixed(2);
  const originalDisplay = (product.originalPrice / 100).toFixed(2);

  return (
    <Link
      to="/product/$id"
      params={{ id: String(product.id) }}
      className="block"
      data-ocid={`product.item.${index}`}
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth active:scale-[0.98]">
        {/* Image */}
        <div className="relative bg-muted aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {product.discountPercent > 0 && (
            <div className="absolute top-2 left-2">
              <DarazBadge variant="discount">
                -{product.discountPercent}%
              </DarazBadge>
            </div>
          )}
          {product.tags.includes("new") && (
            <div className="absolute top-2 right-2">
              <DarazBadge variant="new">NEW</DarazBadge>
            </div>
          )}
          {product.tags.includes("hot") && !product.tags.includes("new") && (
            <div className="absolute top-2 right-2">
              <DarazBadge variant="hot">HOT</DarazBadge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-2.5 space-y-1.5">
          <p className="text-xs font-medium text-foreground leading-tight line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </p>

          <StarRating rating={product.rating} size="sm" />

          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-primary">
              ${priceDisplay}
            </span>
            {product.discountPercent > 0 && (
              <span className="text-[10px] text-muted-foreground line-through">
                ${originalDisplay}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            data-ocid={`product.add_button.${index}`}
            className={`w-full py-2 rounded-lg text-xs font-bold transition-smooth active:scale-95 flex items-center justify-center gap-1.5
              ${
                added || inCart
                  ? "bg-success/20 text-success border border-success/40"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
          >
            {added ? (
              <>
                <Check size={12} />
                Added!
              </>
            ) : inCart ? (
              <>
                <Check size={12} />
                In Cart
              </>
            ) : (
              <>
                <ShoppingCart size={12} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
