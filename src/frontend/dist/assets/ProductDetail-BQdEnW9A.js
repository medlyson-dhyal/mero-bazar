import { a as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-phpTyq3V.js";
import { c as createLucideIcon, d as getProductById, u as useCartStore, L as Layout, P as PRODUCTS, e as ShoppingCart } from "./Layout-hwjnUqQC.js";
import { D as DarazBadge, P as ProductCard, C as Check } from "./ProductCard-CV9nn6j7.js";
import { S as StarRating, a as Star } from "./StarRating-D-MC9IPK.js";
import { H as Heart } from "./heart-DEvINlHS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function ProductDetailPage() {
  const { id } = useParams({ from: "/product/$id" });
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);
  const [added, setAdded] = reactExports.useState(false);
  const [liked, setLiked] = reactExports.useState(false);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSearch: false, "data-ocid": "product.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl mb-3", children: "😕" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Product not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-primary font-semibold text-sm", children: "Go back home" })
    ] }) });
  }
  const inCart = items.some((i) => i.productId === product.id);
  const handleAddToCart = () => {
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);
  const priceDisplay = (product.price / 100).toFixed(2);
  const originalDisplay = (product.originalPrice / 100).toFixed(2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background pb-24 max-w-md mx-auto",
      "data-ocid": "product.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-40 bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center px-4 h-14 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/" }),
              className: "p-1.5 -ml-1.5 rounded-lg text-foreground hover:bg-muted transition-smooth",
              "aria-label": "Go back",
              "data-ocid": "product.back_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 font-display font-bold text-base truncate", children: product.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setLiked(!liked),
              "data-ocid": "product.wishlist_button",
              className: `p-2 rounded-full transition-smooth ${liked ? "text-destructive" : "text-muted-foreground hover:text-foreground"}`,
              "aria-label": "Add to wishlist",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, className: liked ? "fill-destructive" : "" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "p-2 rounded-full text-muted-foreground hover:text-foreground transition-smooth",
              "aria-label": "Share",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 18 })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-muted aspect-square overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.images[0],
              alt: product.title,
              className: "w-full h-full object-cover"
            }
          ),
          product.discountPercent > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DarazBadge, { variant: "discount", className: "text-sm px-2 py-1", children: [
            "-",
            product.discountPercent,
            "%"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-lg text-foreground leading-tight mb-2", children: product.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              StarRating,
              {
                rating: product.rating,
                size: "md",
                showCount: true,
                count: product.reviewCount
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-black text-2xl text-primary", children: [
              "$",
              priceDisplay
            ] }),
            product.discountPercent > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground line-through", children: [
                "$",
                originalDisplay
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DarazBadge, { variant: "discount", children: [
                product.discountPercent,
                "% OFF"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: product.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-2 py-1 bg-muted rounded-full text-[11px] font-medium text-muted-foreground capitalize",
              children: tag
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-2xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm text-foreground mb-2", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: product.description })
          ] }),
          product.specs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-2xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm text-foreground mb-3", children: "Specifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: product.specs.map(([key, val]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: key }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: val })
            ] }, key)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-2xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm text-foreground", children: "Customer Reviews" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                product.reviewCount.toLocaleString(),
                " reviews"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-3xl text-foreground", children: (product.rating / 10).toFixed(1) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-primary text-primary" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-1", children: [5, 4, 3, 2, 1].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground w-2", children: star }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-border rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full bg-primary rounded-full",
                    style: {
                      width: star === 5 ? "65%" : star === 4 ? "20%" : star === 3 ? "10%" : star === 2 ? "3%" : "2%"
                    }
                  }
                ) })
              ] }, star)) })
            ] })
          ] }),
          relatedProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base text-foreground mb-3", children: "Similar Products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2.5", children: relatedProducts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i + 1 }, p.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto bg-card border-t border-border p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleAddToCart,
            "data-ocid": "product.add_to_cart_button",
            className: `w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-smooth active:scale-[0.99]
            ${added || inCart ? "bg-success/20 text-success border-2 border-success/40" : "bg-primary text-primary-foreground hover:opacity-90"}`,
            children: added ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18 }),
              "Added to Cart!"
            ] }) : inCart ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18 }),
              "Already in Cart — Add Again"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18 }),
              "Add to Cart — $",
              priceDisplay
            ] })
          }
        ) })
      ]
    }
  );
}
export {
  ProductDetailPage as default
};
