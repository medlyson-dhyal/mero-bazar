import { Link } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  CreditCard,
  Heart,
  HelpCircle,
  LogIn,
  MapPin,
  Package,
  Shield,
  User,
} from "lucide-react";
import { Layout } from "../components/layout/Layout";

const MENU_ITEMS = [
  {
    icon: Package,
    label: "My Orders",
    desc: "Track and manage orders",
    to: "/orders",
    ocid: "account.orders_link",
  },
  {
    icon: Heart,
    label: "Wishlist",
    desc: "Your saved products",
    to: "/categories",
    ocid: "account.wishlist_link",
  },
  {
    icon: MapPin,
    label: "Addresses",
    desc: "Manage delivery addresses",
    to: "/account",
    ocid: "account.addresses_link",
  },
  {
    icon: CreditCard,
    label: "Payment Methods",
    desc: "Cards and wallets",
    to: "/account",
    ocid: "account.payment_link",
  },
  {
    icon: Bell,
    label: "Notifications",
    desc: "Manage your alerts",
    to: "/account",
    ocid: "account.notifications_link",
  },
  {
    icon: HelpCircle,
    label: "Help & Support",
    desc: "FAQs and contact us",
    to: "/account",
    ocid: "account.help_link",
  },
  {
    icon: Shield,
    label: "Privacy & Security",
    desc: "Control your data",
    to: "/account",
    ocid: "account.privacy_link",
  },
];

export default function AccountPage() {
  return (
    <Layout headerTitle="Account" showSearch={false} data-ocid="account.page">
      <div data-ocid="account.page" className="p-3 space-y-3">
        {/* Profile card */}
        <div className="bg-card rounded-2xl shadow-card p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
            <User size={28} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-base text-foreground">
              Sign in to your account
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Access orders, wishlist, and more
            </p>
          </div>
          <button
            type="button"
            data-ocid="account.login_button"
            className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-3 py-2 rounded-full transition-smooth hover:opacity-90 active:scale-95"
          >
            <LogIn size={12} />
            Sign In
          </button>
        </div>

        {/* Stats row */}
        <div className="bg-card rounded-2xl shadow-card p-4 grid grid-cols-3 divide-x divide-border">
          {[
            { label: "Orders", value: "0" },
            { label: "Wishlist", value: "0" },
            { label: "Reviews", value: "0" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="font-display font-bold text-lg text-foreground">
                {value}
              </p>
              <p className="text-[11px] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="bg-card rounded-2xl shadow-card divide-y divide-border overflow-hidden">
          {MENU_ITEMS.map(({ icon: Icon, label, desc, to, ocid }) => (
            <Link
              key={label}
              to={to}
              data-ocid={ocid}
              className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-smooth active:bg-muted"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </Link>
          ))}
        </div>

        <p className="text-center text-[10px] text-muted-foreground py-2">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noreferrer"
            className="text-primary font-semibold"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </Layout>
  );
}
