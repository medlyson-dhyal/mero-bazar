import { a as useParams, j as jsxRuntimeExports } from "./index-phpTyq3V.js";
import { C as CATEGORIES, f as getProductsByCategory, L as Layout } from "./Layout-hwjnUqQC.js";
import { P as ProductCard } from "./ProductCard-CV9nn6j7.js";
import "./StarRating-D-MC9IPK.js";
function CategoryProductsPage() {
  const { name } = useParams({ from: "/category/$name" });
  const category = CATEGORIES.find((c) => c.id === name);
  const products = getProductsByCategory(name);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Layout,
    {
      headerTitle: category ? `${category.emoji} ${category.name}` : "Category",
      showSearch: false,
      showBack: true,
      "data-ocid": "category.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "category.page", className: "p-3", children: products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-20 text-center",
          "data-ocid": "category.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl mb-3", children: "📦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-2", children: "No products yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Check back soon for new arrivals" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground px-1 mb-3", children: [
          products.length,
          " products found"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-2 gap-2.5",
            "data-ocid": "category.products_list",
            children: products.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id))
          }
        )
      ] }) })
    }
  );
}
export {
  CategoryProductsPage as default
};
