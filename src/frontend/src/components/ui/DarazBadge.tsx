import { cn } from "@/lib/utils";

type BadgeVariant =
  | "discount"
  | "new"
  | "hot"
  | "free-shipping"
  | "out-of-stock";

interface DarazBadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  discount: "bg-primary text-primary-foreground",
  new: "bg-accent text-accent-foreground",
  hot: "bg-destructive text-destructive-foreground",
  "free-shipping": "bg-success text-success-foreground",
  "out-of-stock": "bg-muted text-muted-foreground",
};

export function DarazBadge({
  variant = "discount",
  children,
  className,
}: DarazBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide leading-none",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
