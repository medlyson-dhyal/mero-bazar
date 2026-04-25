import { j as jsxRuntimeExports, L as Link } from "./index-phpTyq3V.js";
import { L as Layout } from "./Layout-hwjnUqQC.js";
import { C as Clock } from "./clock-BsDz4ign.js";
import { P as Package } from "./package-BO7HxSm8.js";
import { C as ChevronRight } from "./chevron-right-AsHmjuWN.js";
const SAMPLE_ORDERS = [
  {
    id: 1001,
    date: "Apr 20, 2026",
    status: "delivered",
    total: 27999,
    itemCount: 1,
    firstItem: "Sony WH-1000XM5 Wireless Headphones"
  },
  {
    id: 1002,
    date: "Apr 18, 2026",
    status: "shipped",
    total: 11498,
    itemCount: 2,
    firstItem: "JBL Flip 6 Speaker + Anker Charger"
  },
  {
    id: 1003,
    date: "Apr 15, 2026",
    status: "processing",
    total: 3499,
    itemCount: 1,
    firstItem: "Levi's 511 Slim Fit Jeans"
  }
];
const STATUS_STYLES = {
  delivered: { label: "Delivered", class: "bg-success/20 text-success" },
  shipped: { label: "Shipped", class: "bg-primary/20 text-primary" },
  processing: {
    label: "Processing",
    class: "bg-accent/20 text-accent-foreground"
  },
  pending: { label: "Pending", class: "bg-muted text-muted-foreground" },
  cancelled: {
    label: "Cancelled",
    class: "bg-destructive/20 text-destructive"
  }
};
function OrdersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Layout,
    {
      headerTitle: "My Orders",
      showSearch: false,
      showBack: true,
      "data-ocid": "orders.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "orders.page", className: "p-3 space-y-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-primary/10 rounded-2xl p-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-primary flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium", children: "Sign in to see your real order history" })
        ] }),
        SAMPLE_ORDERS.map((order, i) => {
          const statusInfo = STATUS_STYLES[order.status] ?? STATUS_STYLES.pending;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/order/$id",
              params: { id: String(order.id) },
              "data-ocid": `orders.item.${i + 1}`,
              className: "block bg-card rounded-2xl shadow-card p-4 hover:shadow-elevated transition-smooth active:scale-[0.99]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-foreground", children: [
                      "Order #",
                      order.id
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: order.date })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] font-bold px-2 py-1 rounded-full ${statusInfo.class}`,
                      children: statusInfo.label
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-muted rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 20, className: "text-muted-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground line-clamp-1", children: order.firstItem }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                      order.itemCount,
                      " item",
                      order.itemCount !== 1 ? "s" : ""
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-primary", children: [
                      "$",
                      (order.total / 100).toFixed(2)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        size: 14,
                        className: "text-muted-foreground ml-auto mt-0.5"
                      }
                    )
                  ] })
                ] })
              ]
            },
            order.id
          );
        })
      ] })
    }
  );
}
export {
  OrdersPage as default
};
