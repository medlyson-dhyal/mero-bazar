import { Link, useParams } from "@tanstack/react-router";
import { CheckCircle2, Clock, MapPin, Package, Truck } from "lucide-react";
import { Layout } from "../components/layout/Layout";

const ORDERS_DATA: Record<
  string,
  {
    id: number;
    date: string;
    status: string;
    total: number;
    items: { title: string; price: number; qty: number }[];
    address: string;
  }
> = {
  "1001": {
    id: 1001,
    date: "Apr 20, 2026",
    status: "delivered",
    total: 27999,
    items: [
      { title: "Sony WH-1000XM5 Wireless Headphones", price: 27999, qty: 1 },
    ],
    address: "123 Main Street, New York, NY 10001",
  },
  "1002": {
    id: 1002,
    date: "Apr 18, 2026",
    status: "shipped",
    total: 11498,
    items: [
      { title: "JBL Flip 6 Portable Speaker", price: 8999, qty: 1 },
      { title: "Anker 65W Nano II Charger", price: 2499, qty: 1 },
    ],
    address: "456 Oak Ave, Los Angeles, CA 90001",
  },
  "1003": {
    id: 1003,
    date: "Apr 15, 2026",
    status: "processing",
    total: 3499,
    items: [{ title: "Levi's 511 Slim Fit Jeans", price: 3499, qty: 1 }],
    address: "789 Pine Rd, Chicago, IL 60601",
  },
};

const TIMELINE = [
  { key: "pending", label: "Order Placed", icon: CheckCircle2 },
  { key: "processing", label: "Processing", icon: Clock },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Package },
];

const STATUS_ORDER = ["pending", "processing", "shipped", "delivered"];

export default function OrderDetailPage() {
  const { id } = useParams({ from: "/order/$id" });
  const order = ORDERS_DATA[id];

  if (!order) {
    return (
      <Layout showSearch={false} showBack data-ocid="order.page">
        <div
          className="flex flex-col items-center justify-center py-20 px-6 text-center"
          data-ocid="order.page"
        >
          <span className="text-5xl mb-3">📦</span>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">
            Order not found
          </h2>
          <Link to="/orders" className="text-primary font-semibold text-sm">
            View all orders
          </Link>
        </div>
      </Layout>
    );
  }

  const currentStatusIndex = STATUS_ORDER.indexOf(order.status);

  return (
    <Layout
      headerTitle={`Order #${order.id}`}
      showSearch={false}
      showBack
      data-ocid="order.page"
    >
      <div data-ocid="order.page" className="p-3 space-y-3">
        {/* Timeline */}
        <div className="bg-card rounded-2xl shadow-card p-4">
          <h2 className="font-display font-bold text-sm text-foreground mb-4">
            Order Status
          </h2>
          <div className="relative">
            <div className="absolute left-5 top-6 bottom-0 w-0.5 bg-border" />
            {TIMELINE.map((step, i) => {
              const isCompleted = i <= currentStatusIndex;
              const isCurrent = i === currentStatusIndex;
              const Icon = step.icon;
              return (
                <div
                  key={step.key}
                  className="relative flex items-start gap-3 mb-4 last:mb-0"
                >
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth
                    ${isCompleted ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="pt-2">
                    <p
                      className={`text-sm font-semibold ${isCompleted ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {step.label}
                    </p>
                    {isCurrent && (
                      <p className="text-[11px] text-primary font-medium mt-0.5">
                        Current status
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order items */}
        <div className="bg-card rounded-2xl shadow-card p-4">
          <h2 className="font-display font-bold text-sm text-foreground mb-3">
            Items Ordered
          </h2>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package size={16} className="text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Qty: {item.qty}
                  </p>
                </div>
                <p className="text-sm font-bold text-primary flex-shrink-0">
                  ${(item.price / 100).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery address */}
        <div className="bg-card rounded-2xl shadow-card p-4">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Delivery Address
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {order.address}
              </p>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="bg-card rounded-2xl shadow-card p-4">
          <div className="flex justify-between items-center mb-1.5 text-xs text-muted-foreground">
            <span>Subtotal</span>
            <span>${(order.total / 100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-3 text-xs text-muted-foreground">
            <span>Shipping</span>
            <span className="text-success font-semibold">FREE</span>
          </div>
          <div className="flex justify-between items-center border-t border-border pt-3">
            <span className="font-bold text-sm text-foreground">Total</span>
            <span className="font-black text-base text-primary">
              ${(order.total / 100).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
