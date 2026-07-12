import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/data";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-champagne">
              Related rituals
            </p>
            <h2 className="editorial-title mt-3 text-4xl text-charcoal sm:text-5xl">
              Continue the collection.
            </h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
