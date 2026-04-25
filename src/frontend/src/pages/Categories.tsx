import { Link } from "@tanstack/react-router";
import { Layout } from "../components/layout/Layout";
import { CATEGORIES } from "../lib/demo-data";

export default function CategoriesPage() {
  return (
    <Layout
      headerTitle="Categories"
      showSearch={false}
      data-ocid="categories.page"
    >
      <div data-ocid="categories.page" className="p-3">
        <h1 className="font-display font-bold text-xl text-foreground mb-4 px-1">
          All Categories
        </h1>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              to="/category/$name"
              params={{ name: cat.id }}
              data-ocid={`categories.item.${i + 1}`}
              className="flex items-center gap-3 p-4 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-smooth active:scale-[0.98]"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">
                  {cat.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {Math.floor(Math.random() * 200) + 50}+ items
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 mx-1 p-4 bg-primary/10 border border-primary/20 rounded-2xl">
          <h2 className="font-display font-bold text-sm text-primary mb-1">
            New Arrivals Daily
          </h2>
          <p className="text-xs text-muted-foreground">
            Discover fresh products added every day across all categories.
          </p>
        </div>
      </div>
    </Layout>
  );
}
