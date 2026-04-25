import { j as jsxRuntimeExports, L as Link, r as reactExports, u as useNavigate } from "./index-phpTyq3V.js";
import { c as createLucideIcon, g as getFeaturedProducts, a as getDiscountedProducts, L as Layout, C as CATEGORIES, P as PRODUCTS, B as BANNER_SLIDES } from "./Layout-hwjnUqQC.js";
import { P as ProductCard, D as DarazBadge } from "./ProductCard-CV9nn6j7.js";
import { C as ChevronRight } from "./chevron-right-AsHmjuWN.js";
import "./StarRating-D-MC9IPK.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function CategoryCard({ category, index = 0 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/category/$name",
      params: { name: category.id },
      "data-ocid": `category.item.${index}`,
      className: "flex flex-col items-center gap-1.5 group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-14 h-14 rounded-2xl flex items-center justify-center text-2xl
          bg-muted group-hover:bg-primary/10 transition-smooth active:scale-95`,
            children: category.emoji
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-foreground text-center leading-tight max-w-[56px] truncate", children: category.name })
      ]
    }
  );
}
function HeroBanner() {
  const [active, setActive] = reactExports.useState(0);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 4e3);
    return () => clearInterval(timer);
  }, []);
  const slide = BANNER_SLIDES[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative mx-3 mt-3 rounded-2xl overflow-hidden",
      "data-ocid": "home.hero_banner",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 bg-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: slide.image,
              alt: slide.title,
              className: "absolute inset-0 w-full h-full object-cover opacity-80"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-5 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DarazBadge, { variant: "discount", className: "self-start mb-2", children: slide.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-card leading-tight mb-1", children: slide.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-card/70 text-xs mb-3", children: slide.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate({ to: "/categories" }),
                className: "self-start bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full transition-smooth hover:opacity-90 active:scale-95",
                "data-ocid": "home.hero_cta_button",
                children: slide.cta
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5", children: BANNER_SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActive(i),
            className: `rounded-full transition-smooth ${i === active ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-card/60"}`,
            "aria-label": `Slide ${i + 1}`
          },
          s.id
        )) })
      ]
    }
  );
}
function SectionHeader({
  title,
  seeAllTo
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base text-foreground", children: title }),
    seeAllTo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: seeAllTo,
        className: "flex items-center gap-0.5 text-primary text-xs font-semibold",
        "data-ocid": "home.see_all_link",
        children: [
          "See All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
        ]
      }
    )
  ] });
}
function HomePage() {
  const featured = getFeaturedProducts();
  const discounted = getDiscountedProducts().slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { "data-ocid": "home.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-3 mt-3 bg-primary/10 border border-primary/20 rounded-2xl p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16, className: "text-primary fill-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-primary", children: "Flash Sale" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-primary text-primary-foreground font-bold px-1.5 py-0.5 rounded", children: "ENDS SOON" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 gap-2.5",
          "data-ocid": "home.flash_sale_list",
          children: discounted.slice(0, 4).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Shop by Category", seeAllTo: "/categories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "px-3 overflow-x-auto",
        "data-ocid": "home.categories_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 pb-1", children: CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryCard, { category: cat, index: i + 1 }) }, cat.id)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Featured For You", seeAllTo: "/categories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "px-3 grid grid-cols-2 gap-2.5 pb-4",
        "data-ocid": "home.featured_products_list",
        children: featured.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-3 my-3 rounded-2xl bg-muted/40 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Just Arrived" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 gap-2.5",
          "data-ocid": "home.new_arrivals_list",
          children: PRODUCTS.slice(15, 21).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-6 text-center border-t border-border mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
          target: "_blank",
          rel: "noreferrer",
          className: "text-primary font-semibold",
          children: "caffeine.ai"
        }
      )
    ] }) })
  ] }) });
}
export {
  HomePage as default
};
