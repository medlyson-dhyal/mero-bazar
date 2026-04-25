import { Link } from "@tanstack/react-router";
import { ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { StarRating } from "../components/ui/StarRating";
import { useCartStore } from "../lib/cart-store";

export default function CartPage() {
  const {
    getItemsWithProducts,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
  } = useCartStore();
  const items = getItemsWithProducts();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <Layout headerTitle="Cart" showSearch={false} data-ocid="cart.page">
        <div
          className="flex flex-col items-center justify-center py-20 px-6 text-center"
          data-ocid="cart.empty_state"
        >
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <ShoppingBag size={40} className="text-muted-foreground" />
          </div>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">
            Your cart is empty
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Add products to your cart to get started
          </p>
          <Link
            to="/"
            data-ocid="cart.shop_now_button"
            className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full text-sm transition-smooth hover:opacity-90 active:scale-95"
          >
            Shop Now
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerTitle="Cart" showSearch={false} data-ocid="cart.page">
      <div data-ocid="cart.page" className="p-3 space-y-2.5">
        {/* Cart items */}
        {items.map((item, i) => (
          <div
            key={item.productId}
            className="flex gap-3 p-3 bg-card rounded-2xl shadow-card"
            data-ocid={`cart.item.${i + 1}`}
          >
            <Link to="/product/$id" params={{ id: String(item.productId) }}>
              <img
                src={item.product.images[0]}
                alt={item.product.title}
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0 bg-muted"
              />
            </Link>
            <div className="flex-1 min-w-0 space-y-1.5">
              <Link to="/product/$id" params={{ id: String(item.productId) }}>
                <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2">
                  {item.product.title}
                </p>
              </Link>
              <StarRating rating={item.product.rating} size="sm" />
              <p className="text-sm font-bold text-primary">
                ${(item.product.price / 100).toFixed(2)}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-muted rounded-full">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity - 1)
                    }
                    data-ocid={`cart.decrease_button.${i + 1}`}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-foreground hover:bg-border transition-smooth"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-xs font-bold text-foreground w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity + 1)
                    }
                    data-ocid={`cart.increase_button.${i + 1}`}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-smooth"
                  >
                    <Plus size={12} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.productId)}
                  data-ocid={`cart.delete_button.${i + 1}`}
                  className="p-1.5 text-destructive hover:bg-destructive/10 rounded-lg transition-smooth"
                  aria-label="Remove item"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Order Summary */}
        <div className="bg-card rounded-2xl shadow-card p-4 space-y-2.5">
          <h3 className="font-display font-bold text-sm text-foreground">
            Order Summary
          </h3>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal ({items.length} items)</span>
              <span>${(totalPrice / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span className="text-success font-semibold">FREE</span>
            </div>
            <div className="border-t border-border pt-1.5 flex justify-between font-bold text-sm text-foreground">
              <span>Total</span>
              <span className="text-primary">
                ${(totalPrice / 100).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Checkout */}
        <button
          type="button"
          data-ocid="cart.checkout_button"
          className="w-full flex items-center justify-between bg-primary text-primary-foreground rounded-2xl px-5 py-4 font-bold text-sm transition-smooth hover:opacity-90 active:scale-[0.99]"
        >
          <span>Proceed to Checkout</span>
          <div className="flex items-center gap-1">
            <span>${(totalPrice / 100).toFixed(2)}</span>
            <ChevronRight size={16} />
          </div>
        </button>

        <button
          type="button"
          onClick={clearCart}
          data-ocid="cart.clear_button"
          className="w-full text-center text-xs text-destructive py-2 transition-smooth hover:opacity-80"
        >
          Clear cart
        </button>
      </div>
    </Layout>
  );
}
