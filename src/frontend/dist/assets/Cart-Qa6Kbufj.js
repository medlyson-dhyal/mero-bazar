import { j as jsxRuntimeExports, L as Link } from "./index-phpTyq3V.js";
import { c as createLucideIcon, u as useCartStore, L as Layout } from "./Layout-hwjnUqQC.js";
import { S as StarRating } from "./StarRating-D-MC9IPK.js";
import { C as ChevronRight } from "./chevron-right-AsHmjuWN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function CartPage() {
  const {
    getItemsWithProducts,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice
  } = useCartStore();
  const items = getItemsWithProducts();
  const totalPrice = getTotalPrice();
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { headerTitle: "Cart", showSearch: false, "data-ocid": "cart.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 px-6 text-center",
        "data-ocid": "cart.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 40, className: "text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Your cart is empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Add products to your cart to get started" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              "data-ocid": "cart.shop_now_button",
              className: "bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full text-sm transition-smooth hover:opacity-90 active:scale-95",
              children: "Shop Now"
            }
          )
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { headerTitle: "Cart", showSearch: false, "data-ocid": "cart.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "cart.page", className: "p-3 space-y-2.5", children: [
    items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex gap-3 p-3 bg-card rounded-2xl shadow-card",
        "data-ocid": `cart.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: { id: String(item.productId) }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.product.images[0],
              alt: item.product.title,
              className: "w-20 h-20 object-cover rounded-xl flex-shrink-0 bg-muted"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: { id: String(item.productId) }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-tight line-clamp-2", children: item.product.title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: item.product.rating, size: "sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-primary", children: [
              "$",
              (item.product.price / 100).toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-muted rounded-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateQuantity(item.productId, item.quantity - 1),
                    "data-ocid": `cart.decrease_button.${i + 1}`,
                    className: "w-7 h-7 flex items-center justify-center rounded-full text-foreground hover:bg-border transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 12 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground w-4 text-center", children: item.quantity }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateQuantity(item.productId, item.quantity + 1),
                    "data-ocid": `cart.increase_button.${i + 1}`,
                    className: "w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => removeItem(item.productId),
                  "data-ocid": `cart.delete_button.${i + 1}`,
                  className: "p-1.5 text-destructive hover:bg-destructive/10 rounded-lg transition-smooth",
                  "aria-label": "Remove item",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                }
              )
            ] })
          ] })
        ]
      },
      item.productId
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-card p-4 space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground", children: "Order Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Subtotal (",
            items.length,
            " items)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "$",
            (totalPrice / 100).toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success font-semibold", children: "FREE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-1.5 flex justify-between font-bold text-sm text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
            "$",
            (totalPrice / 100).toFixed(2)
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "cart.checkout_button",
        className: "w-full flex items-center justify-between bg-primary text-primary-foreground rounded-2xl px-5 py-4 font-bold text-sm transition-smooth hover:opacity-90 active:scale-[0.99]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Proceed to Checkout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "$",
              (totalPrice / 100).toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: clearCart,
        "data-ocid": "cart.clear_button",
        className: "w-full text-center text-xs text-destructive py-2 transition-smooth hover:opacity-80",
        children: "Clear cart"
      }
    )
  ] }) });
}
export {
  CartPage as default
};
