import { j as jsxRuntimeExports, L as Link } from "./index-phpTyq3V.js";
import { L as Layout, C as CATEGORIES } from "./Layout-hwjnUqQC.js";
function CategoriesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Layout,
    {
      headerTitle: "Categories",
      showSearch: false,
      "data-ocid": "categories.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "categories.page", className: "p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground mb-4 px-1", children: "All Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/category/$name",
            params: { name: cat.id },
            "data-ocid": `categories.item.${i + 1}`,
            className: "flex items-center gap-3 p-4 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-smooth active:scale-[0.98]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: cat.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground", children: cat.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                  Math.floor(Math.random() * 200) + 50,
                  "+ items"
                ] })
              ] })
            ]
          },
          cat.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 mx-1 p-4 bg-primary/10 border border-primary/20 rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm text-primary mb-1", children: "New Arrivals Daily" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Discover fresh products added every day across all categories." })
        ] })
      ] })
    }
  );
}
export {
  CategoriesPage as default
};
