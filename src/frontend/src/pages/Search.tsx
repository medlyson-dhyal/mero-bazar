import { Search as SearchIcon, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { ProductCard } from "../components/ui/ProductCard";
import { CATEGORIES, PRODUCTS } from "../lib/demo-data";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const results = useMemo(() => {
    let filtered = PRODUCTS;

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)),
      );
    }

    return filtered;
  }, [query, selectedCategory]);

  return (
    <Layout showSearch={false} data-ocid="search.page">
      <div data-ocid="search.page" className="p-3 space-y-3">
        {/* Search bar */}
        <div className="relative">
          <SearchIcon
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            data-ocid="search.search_input"
            className="w-full bg-muted border border-input rounded-full pl-9 pr-9 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              data-ocid="search.clear_button"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="overflow-x-auto">
          <div className="flex gap-2 pb-1">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              data-ocid="search.filter.all_tab"
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth
                ${!selectedCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === cat.id ? null : cat.id,
                  )
                }
                data-ocid={`search.filter.${cat.id}_tab`}
                className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth
                  ${selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {results.length === 0 ? (
          <div
            className="flex flex-col items-center py-16 text-center"
            data-ocid="search.empty_state"
          >
            <span className="text-5xl mb-3">🔍</span>
            <h3 className="font-display font-bold text-lg text-foreground mb-1">
              No results found
            </h3>
            <p className="text-sm text-muted-foreground">
              Try different keywords or browse categories
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs text-muted-foreground px-1">
              {results.length} product{results.length !== 1 ? "s" : ""} found
            </p>
            <div
              className="grid grid-cols-2 gap-2.5"
              data-ocid="search.results_list"
            >
              {results.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i + 1} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
