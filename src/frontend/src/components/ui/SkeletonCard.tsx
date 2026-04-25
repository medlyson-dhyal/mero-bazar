export function SkeletonCard() {
  return (
    <div className="bg-card rounded-xl overflow-hidden animate-pulse">
      <div className="bg-muted aspect-square" />
      <div className="p-2.5 space-y-2">
        <div className="h-3 bg-muted rounded w-full" />
        <div className="h-3 bg-muted rounded w-3/4" />
        <div className="flex gap-1 mt-1">
          <div className="h-2 w-2 bg-muted rounded-sm" />
          <div className="h-2 w-2 bg-muted rounded-sm" />
          <div className="h-2 w-2 bg-muted rounded-sm" />
          <div className="h-2 w-2 bg-muted rounded-sm" />
        </div>
        <div className="h-4 bg-muted rounded w-1/2 mt-1" />
        <div className="h-8 bg-muted rounded-lg mt-2" />
      </div>
    </div>
  );
}

export function SkeletonRow() {
  return (
    <div className="flex gap-3 p-3 bg-card rounded-xl animate-pulse">
      <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-muted rounded w-full" />
        <div className="h-3 bg-muted rounded w-2/3" />
        <div className="h-4 bg-muted rounded w-1/3 mt-2" />
      </div>
    </div>
  );
}
