import { j as jsxRuntimeExports, L as Link } from "./index-phpTyq3V.js";
import { c as createLucideIcon, L as Layout, U as User, b as Bell } from "./Layout-hwjnUqQC.js";
import { P as Package } from "./package-BO7HxSm8.js";
import { H as Heart } from "./heart-DEvINlHS.js";
import { M as MapPin } from "./map-pin-E3hTCx2f.js";
import { C as ChevronRight } from "./chevron-right-AsHmjuWN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode$1);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const MENU_ITEMS = [
  {
    icon: Package,
    label: "My Orders",
    desc: "Track and manage orders",
    to: "/orders",
    ocid: "account.orders_link"
  },
  {
    icon: Heart,
    label: "Wishlist",
    desc: "Your saved products",
    to: "/categories",
    ocid: "account.wishlist_link"
  },
  {
    icon: MapPin,
    label: "Addresses",
    desc: "Manage delivery addresses",
    to: "/account",
    ocid: "account.addresses_link"
  },
  {
    icon: CreditCard,
    label: "Payment Methods",
    desc: "Cards and wallets",
    to: "/account",
    ocid: "account.payment_link"
  },
  {
    icon: Bell,
    label: "Notifications",
    desc: "Manage your alerts",
    to: "/account",
    ocid: "account.notifications_link"
  },
  {
    icon: CircleHelp,
    label: "Help & Support",
    desc: "FAQs and contact us",
    to: "/account",
    ocid: "account.help_link"
  },
  {
    icon: Shield,
    label: "Privacy & Security",
    desc: "Control your data",
    to: "/account",
    ocid: "account.privacy_link"
  }
];
function AccountPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { headerTitle: "Account", showSearch: false, "data-ocid": "account.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "account.page", className: "p-3 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-card p-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 28, className: "text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base text-foreground", children: "Sign in to your account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Access orders, wishlist, and more" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "account.login_button",
          className: "flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-3 py-2 rounded-full transition-smooth hover:opacity-90 active:scale-95",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 12 }),
            "Sign In"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl shadow-card p-4 grid grid-cols-3 divide-x divide-border", children: [
      { label: "Orders", value: "0" },
      { label: "Wishlist", value: "0" },
      { label: "Reviews", value: "0" }
    ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-foreground", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: label })
    ] }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl shadow-card divide-y divide-border overflow-hidden", children: MENU_ITEMS.map(({ icon: Icon, label, desc, to, ocid }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to,
        "data-ocid": ocid,
        className: "flex items-center gap-3 p-4 hover:bg-muted/50 transition-smooth active:bg-muted",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-muted-foreground" })
        ]
      },
      label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[10px] text-muted-foreground py-2", children: [
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
    ] })
  ] }) });
}
export {
  AccountPage as default
};
