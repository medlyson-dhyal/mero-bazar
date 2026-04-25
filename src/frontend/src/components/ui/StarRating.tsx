import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number; // 0-50 (represents 0.0-5.0)
  size?: "sm" | "md";
  showCount?: boolean;
  count?: number;
}

export function StarRating({
  rating,
  size = "sm",
  showCount = false,
  count,
}: StarRatingProps) {
  const stars = rating / 10; // convert to 0-5
  const fullStars = Math.floor(stars);
  const hasHalf = stars - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const iconSize = size === "sm" ? 12 : 16;
  const textClass = size === "sm" ? "text-xs" : "text-sm";

  const fullKeys = ["f1", "f2", "f3", "f4", "f5"].slice(0, fullStars);
  const emptyKeys = ["e1", "e2", "e3", "e4", "e5"].slice(0, emptyStars);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {fullKeys.map((k) => (
          <Star key={k} size={iconSize} className="fill-primary text-primary" />
        ))}
        {hasHalf && (
          <StarHalf size={iconSize} className="fill-primary text-primary" />
        )}
        {emptyKeys.map((k) => (
          <Star key={k} size={iconSize} className="text-muted-foreground/40" />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className={`${textClass} text-muted-foreground`}>
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
}
