import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { CategoryCard } from "../components/ui/CategoryCard";
import { DarazBadge } from "../components/ui/DarazBadge";
import { ProductCard } from "../components/ui/ProductCard";
import {
  BANNER_SLIDES,
  CATEGORIES,
  PRODUCTS,
  getDiscountedProducts,
  getFeaturedProducts,
} from "../lib/demo-data";

function HeroBanner() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = BANNER_SLIDES[active];

  return (
    <div
      className="relative mx-3 mt-3 rounded-2xl overflow-hidden"
      data-ocid="home.hero_banner"
    >
      <div className="relative h-44 bg-foreground">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/50 to-transparent" />
        <div className="absolute inset-0 p-5 flex flex-col justify-center">
          <DarazBadge variant="discount" className="self-start mb-2">
            {slide.tag}
          </DarazBadge>
          <h2 className="font-display font-bold text-xl text-card leading-tight mb-1">
            {slide.title}
          </h2>
          <p className="text-card/70 text-xs mb-3">{slide.subtitle}</p>
          <button
            type="button"
            onClick={() => navigate({ to: "/categories" })}
            className="self-start bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full transition-smooth hover:opacity-90 active:scale-95"
            data-ocid="home.hero_cta_button"
          >
            {slide.cta}
          </button>
        </div>
      </div>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {BANNER_SLIDES.map((s, i) => (
          <button
            type="button"
            key={s.id}
            onClick={() => setActive(i)}
            className={`rounded-full transition-smooth ${i === active ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-card/60"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  seeAllTo,
}: { title: string; seeAllTo?: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-3">
      <h2 className="font-display font-bold text-base text-foreground">
        {title}
      </h2>
      {seeAllTo && (
        <Link
          to={seeAllTo}
          className="flex items-center gap-0.5 text-primary text-xs font-semibold"
          data-ocid="home.see_all_link"
        >
          See All <ChevronRight size={14} />
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  const featured = getFeaturedProducts();
  const discounted = getDiscountedProducts().slice(0, 6);

  return (
    <Layout data-ocid="home.page">
      <div data-ocid="home.page">
        <HeroBanner />

        {/* Flash Sale */}
        <div className="mx-3 mt-3 bg-primary/10 border border-primary/20 rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={16} className="text-primary fill-primary" />
            <span className="font-display font-bold text-sm text-primary">
              Flash Sale
            </span>
            <span className="text-[10px] bg-primary text-primary-foreground font-bold px-1.5 py-0.5 rounded">
              ENDS SOON
            </span>
          </div>
          <div
            className="grid grid-cols-2 gap-2.5"
            data-ocid="home.flash_sale_list"
          >
            {discounted.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i + 1} />
            ))}
          </div>
        </div>

        {/* Categories */}
        <SectionHeader title="Shop by Category" seeAllTo="/categories" />
        <div
          className="px-3 overflow-x-auto"
          data-ocid="home.categories_section"
        >
          <div className="flex gap-3 pb-1">
            {CATEGORIES.map((cat, i) => (
              <div key={cat.id} className="flex-shrink-0">
                <CategoryCard category={cat} index={i + 1} />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <SectionHeader title="Featured For You" seeAllTo="/categories" />
        <div
          className="px-3 grid grid-cols-2 gap-2.5 pb-4"
          data-ocid="home.featured_products_list"
        >
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>

        {/* More Products */}
        <div className="mx-3 my-3 rounded-2xl bg-muted/40 p-3">
          <SectionHeader title="Just Arrived" />
          <div
            className="grid grid-cols-2 gap-2.5"
            data-ocid="home.new_arrivals_list"
          >
            {PRODUCTS.slice(15, 21).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i + 1} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-6 text-center border-t border-border mt-2">
          <p className="text-[10px] text-muted-foreground">
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
      </div>
    </Layout>
  );
}
