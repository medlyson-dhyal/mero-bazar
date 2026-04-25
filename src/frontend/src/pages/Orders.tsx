import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock, Package } from "lucide-react";
import { Layout } from "../components/layout/Layout";

const SAMPLE_ORDERS = [
  {
    id: 1001,
    date: "Apr 20, 2026",
    status: "delivered",
    total: 27999,
    itemCount: 1,
    firstItem: "Sony WH-1000XM5 Wireless Headphones",
  },
  {
    id: 1002,
    date: "Apr 18, 2026",
    status: "shipped",
    total: 11498,
    itemCount: 2,
    firstItem: "JBL Flip 6 Speaker + Anker Charger",
  },
  {
    id: 1003,
    date: "Apr 15, 2026",
    status: "processing",
    total: 3499,
    itemCount: 1,
    firstItem: "Levi's 511 Slim Fit Jeans",
  },
];

const STATUS_STYLES: Record<string, { label: string; class: string }> = {
  delivered: { label: "Delivered", class: "bg-success/20 text-success" },
  shipped: { label: "Shipped", class: "bg-primary/20 text-primary" },
  processing: {
    label: "Processing",
    class: "bg-accent/20 text-accent-foreground",
  },
  pending: { label: "Pending", class: "bg-muted text-muted-foreground" },
  cancelled: {
    label: "Cancelled",
    class: "bg-destructive/20 text-destructive",
  },
};

export default function OrdersPage() {
  return (
    <Layout
      headerTitle="My Orders"
      showSearch={false}
      showBack
      data-ocid="orders.page"
    >
      <div data-ocid="orders.page" className="p-3 space-y-2.5">
        <div className="flex items-center gap-2 bg-primary/10 rounded-2xl p-3 mb-2">
          <Clock size={14} className="text-primary flex-shrink-0" />
          <p className="text-xs text-primary font-medium">
            Sign in to see your real order history
          </p>
        </div>

        {SAMPLE_ORDERS.map((order, i) => {
          const statusInfo =
            STATUS_STYLES[order.status] ?? STATUS_STYLES.pending;
          return (
            <Link
              key={order.id}
              to="/order/$id"
              params={{ id: String(order.id) }}
              data-ocid={`orders.item.${i + 1}`}
              className="block bg-card rounded-2xl shadow-card p-4 hover:shadow-elevated transition-smooth active:scale-[0.99]"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Order #{order.id}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {order.date}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusInfo.class}`}
                >
                  {statusInfo.label}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <Package size={20} className="text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground line-clamp-1">
                    {order.firstItem}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {order.itemCount} item{order.itemCount !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-primary">
                    ${(order.total / 100).toFixed(2)}
                  </p>
                  <ChevronRight
                    size={14}
                    className="text-muted-foreground ml-auto mt-0.5"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
