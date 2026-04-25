import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, CartItemWithProduct } from "../types";
import { getProductById } from "./demo-data";

interface CartStore {
  items: CartItem[];
  addItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  getTotalPrice: () => number;
  getItemsWithProducts: () => CartItemWithProduct[];
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (productId: number) => {
        set((state) => {
          const existing = state.items.find((i) => i.productId === productId);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === productId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i,
              ),
            };
          }
          return { items: [...state.items, { productId, quantity: 1 }] };
        });
      },

      removeItem: (productId: number) => {
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        }));
      },

      updateQuantity: (productId: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, quantity } : i,
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((sum, item) => {
          const product = getProductById(item.productId);
          return sum + (product ? product.price * item.quantity : 0);
        }, 0);
      },

      getItemsWithProducts: () => {
        return get()
          .items.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            return { ...item, product };
          })
          .filter((item): item is CartItemWithProduct => item !== null);
      },
    }),
    {
      name: "daraz-cart",
    },
  ),
);
