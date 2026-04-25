import { r as reactExports, j as jsxRuntimeExports } from "./index-phpTyq3V.js";
import { c as createLucideIcon, P as PRODUCTS, L as Layout, S as Search, C as CATEGORIES } from "./Layout-hwjnUqQC.js";
import { P as ProductCard } from "./ProductCard-CV9nn6j7.js";
import "./StarRating-D-MC9IPK.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function SearchPage() {
  const [query, setQuery] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState(null);
  const results = reactExports.useMemo(() => {
    let filtered = PRODUCTS;
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q))
      );
    }
    return filtered;
  }, [query, selectedCategory]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSearch: false, "data-ocid": "search.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "search.page", className: "p-3 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Search,
        {
          size: 16,
          className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "search",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Search for products...",
          "data-ocid": "search.search_input",
          className: "w-full bg-muted border border-input rounded-full pl-9 pr-9 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
        }
      ),
      query && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setQuery(""),
          className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground",
          "data-ocid": "search.clear_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSelectedCategory(null),
          "data-ocid": "search.filter.all_tab",
          className: `flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth
                ${!selectedCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
          children: "All"
        }
      ),
      CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSelectedCategory(
            selectedCategory === cat.id ? null : cat.id
          ),
          "data-ocid": `search.filter.${cat.id}_tab`,
          className: `flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth
                  ${selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
          children: [
            cat.emoji,
            " ",
            cat.name
          ]
        },
        cat.id
      ))
    ] }) }),
    results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center py-16 text-center",
        "data-ocid": "search.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl mb-3", children: "🔍" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-1", children: "No results found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Try different keywords or browse categories" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground px-1", children: [
        results.length,
        " product",
        results.length !== 1 ? "s" : "",
        " found"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 gap-2.5",
          "data-ocid": "search.results_list",
          children: results.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id))
        }
      )
    ] })
  ] }) });
}
export {
  SearchPage as default
};
