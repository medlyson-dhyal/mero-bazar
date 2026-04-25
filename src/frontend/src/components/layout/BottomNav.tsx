import { Link, useLocation } from "@tanstack/react-router";
import { Grid3x3, Home, Search, ShoppingCart, User } from "lucide-react";
import { useCartStore } from "../../lib/cart-store";

const NAV_ITEMS = [
  { to: "/", icon: Home, label: "Home", ocid: "nav.home_tab" },
  {
    to: "/categories",
    icon: Grid3x3,
    label: "Categories",
    ocid: "nav.categories_tab",
  },
  { to: "/search", icon: Search, label: "Search", ocid: "nav.search_tab" },
  { to: "/cart", icon: ShoppingCart, label: "Cart", ocid: "nav.cart_tab" },
  { to: "/account", icon: User, label: "Account", ocid: "nav.account_tab" },
] as const;

export function BottomNav() {
  const location = useLocation();
  const totalCount = useCartStore((s) => s.getTotalCount());

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-area-pb">
      <div className="max-w-md mx-auto flex items-center">
        {NAV_ITEMS.map(({ to, icon: Icon, label, ocid }) => {
          const isActive =
            to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(to);
          const isCart = to === "/cart";

          return (
            <Link
              key={to}
              to={to}
              data-ocid={ocid}
              className={`flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-smooth
                ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              <div className="relative">
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                {isCart && totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center px-0.5">
                    {totalCount > 99 ? "99+" : totalCount}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-medium leading-none ${isActive ? "font-bold" : ""}`}
              >
                {label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
