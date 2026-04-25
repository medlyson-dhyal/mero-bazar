import { a as useParams, j as jsxRuntimeExports, L as Link } from "./index-phpTyq3V.js";
import { c as createLucideIcon, L as Layout } from "./Layout-hwjnUqQC.js";
import { C as Clock } from "./clock-BsDz4ign.js";
import { P as Package } from "./package-BO7HxSm8.js";
import { M as MapPin } from "./map-pin-E3hTCx2f.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
const ORDERS_DATA = {
  "1001": {
    id: 1001,
    date: "Apr 20, 2026",
    status: "delivered",
    total: 27999,
    items: [
      { title: "Sony WH-1000XM5 Wireless Headphones", price: 27999, qty: 1 }
    ],
    address: "123 Main Street, New York, NY 10001"
  },
  "1002": {
    id: 1002,
    date: "Apr 18, 2026",
    status: "shipped",
    total: 11498,
    items: [
      { title: "JBL Flip 6 Portable Speaker", price: 8999, qty: 1 },
      { title: "Anker 65W Nano II Charger", price: 2499, qty: 1 }
    ],
    address: "456 Oak Ave, Los Angeles, CA 90001"
  },
  "1003": {
    id: 1003,
    date: "Apr 15, 2026",
    status: "processing",
    total: 3499,
    items: [{ title: "Levi's 511 Slim Fit Jeans", price: 3499, qty: 1 }],
    address: "789 Pine Rd, Chicago, IL 60601"
  }
};
const TIMELINE = [
  { key: "pending", label: "Order Placed", icon: CircleCheck },
  { key: "processing", label: "Processing", icon: Clock },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Package }
];
const STATUS_ORDER = ["pending", "processing", "shipped", "delivered"];
function OrderDetailPage() {
  const { id } = useParams({ from: "/order/$id" });
  const order = ORDERS_DATA[id];
  if (!order) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showSearch: false, showBack: true, "data-ocid": "order.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 px-6 text-center",
        "data-ocid": "order.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl mb-3", children: "📦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Order not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/orders", className: "text-primary font-semibold text-sm", children: "View all orders" })
        ]
      }
    ) });
  }
  const currentStatusIndex = STATUS_ORDER.indexOf(order.status);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Layout,
    {
      headerTitle: `Order #${order.id}`,
      showSearch: false,
      showBack: true,
      "data-ocid": "order.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "order.page", className: "p-3 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm text-foreground mb-4", children: "Order Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 top-6 bottom-0 w-0.5 bg-border" }),
            TIMELINE.map((step, i) => {
              const isCompleted = i <= currentStatusIndex;
              const isCurrent = i === currentStatusIndex;
              const Icon = step.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative flex items-start gap-3 mb-4 last:mb-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth
                    ${isCompleted ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: `text-sm font-semibold ${isCompleted ? "text-foreground" : "text-muted-foreground"}`,
                          children: step.label
                        }
                      ),
                      isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-primary font-medium mt-0.5", children: "Current status" })
                    ] })
                  ]
                },
                step.key
              );
            })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm text-foreground mb-3", children: "Items Ordered" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 16, className: "text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground line-clamp-2", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                "Qty: ",
                item.qty
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-primary flex-shrink-0", children: [
              "$",
              (item.price / 100).toFixed(2)
            ] })
          ] }, item.title)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl shadow-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-primary flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Delivery Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: order.address })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "$",
              (order.total / 100).toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success font-semibold", children: "FREE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-t border-border pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-foreground", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-base text-primary", children: [
              "$",
              (order.total / 100).toFixed(2)
            ] })
          ] })
        ] })
      ] })
    }
  );
}
export {
  OrderDetailPage as default
};
