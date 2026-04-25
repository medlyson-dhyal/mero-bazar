import { Link } from "@tanstack/react-router";
import { Bell, Search, ShoppingCart } from "lucide-react";
import { useCartStore } from "../../lib/cart-store";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  showBack?: boolean;
}

export function Header({
  title,
  showSearch = true,
  showBack = false,
}: HeaderProps) {
  const totalCount = useCartStore((s) => s.getTotalCount());

  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border shadow-xs">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center gap-3">
        {showBack ? (
          <button
            type="button"
            onClick={() => window.history.back()}
            className="p-1.5 -ml-1.5 rounded-lg text-foreground hover:bg-muted transition-smooth"
            aria-label="Go back"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-1.5 flex-shrink-0"
            data-ocid="header.logo_link"
          >
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-black text-sm">
                M
              </span>
            </div>
            <span className="font-display font-bold text-lg text-foreground leading-none">
              Mero Bazar
            </span>
          </Link>
        )}

        {title && !showBack ? null : title ? (
          <span className="flex-1 font-display font-bold text-base text-foreground truncate">
            {title}
          </span>
        ) : null}

        {showSearch && !title && (
          <Link
            to="/search"
            data-ocid="header.search_button"
            className="flex-1 flex items-center gap-2 bg-muted rounded-full px-3 py-2 text-muted-foreground hover:bg-muted/80 transition-smooth"
          >
            <Search size={14} />
            <span className="text-xs">Search products...</span>
          </Link>
        )}

        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            type="button"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>
          <Link
            to="/cart"
            data-ocid="header.cart_button"
            className="relative p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
          >
            <ShoppingCart size={18} />
            {totalCount > 0 && (
              <span className="absolute top-0.5 right-0.5 min-w-[16px] h-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center px-0.5">
                {totalCount > 99 ? "99+" : totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
