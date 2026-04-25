import { useParams } from "@tanstack/react-router";
import { Layout } from "../components/layout/Layout";
import { ProductCard } from "../components/ui/ProductCard";
import { CATEGORIES, getProductsByCategory } from "../lib/demo-data";

export default function CategoryProductsPage() {
  const { name } = useParams({ from: "/category/$name" });
  const category = CATEGORIES.find((c) => c.id === name);
  const products = getProductsByCategory(name);

  return (
    <Layout
      headerTitle={category ? `${category.emoji} ${category.name}` : "Category"}
      showSearch={false}
      showBack
      data-ocid="category.page"
    >
      <div data-ocid="category.page" className="p-3">
        {products.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 text-center"
            data-ocid="category.empty_state"
          >
            <span className="text-5xl mb-3">📦</span>
            <h2 className="font-display font-bold text-xl text-foreground mb-2">
              No products yet
            </h2>
            <p className="text-sm text-muted-foreground">
              Check back soon for new arrivals
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs text-muted-foreground px-1 mb-3">
              {products.length} products found
            </p>
            <div
              className="grid grid-cols-2 gap-2.5"
              data-ocid="category.products_list"
            >
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i + 1} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
