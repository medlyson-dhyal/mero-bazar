import { Link } from "@tanstack/react-router";
import type { Category } from "../../types";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <Link
      to="/category/$name"
      params={{ name: category.id }}
      data-ocid={`category.item.${index}`}
      className="flex flex-col items-center gap-1.5 group"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl
          bg-muted group-hover:bg-primary/10 transition-smooth active:scale-95`}
      >
        {category.emoji}
      </div>
      <span className="text-[11px] font-medium text-foreground text-center leading-tight max-w-[56px] truncate">
        {category.name}
      </span>
    </Link>
  );
}
