'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '../ui/SectionHeading';
import { ProductCard } from '../product/ProductCard';
import { QuickViewModal } from '../product/QuickViewModal';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import { Sparkles, ArrowRight } from 'lucide-react';

export const BestSellers: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter products marked as isBestSeller or featured
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller || p.category === 'premium');

  return (
    <section className="py-20 sm:py-24 bg-[#F8F1E5] border-t border-b border-[#C49A42]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#C49A42] mb-2">
              Customer Favorites
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#321B11] font-normal tracking-wide">
              Our Best Sellers
            </h2>
            <p className="text-xs sm:text-sm text-[#7A685A] mt-2 max-w-xl">
              Cherished by fitness enthusiasts, culinary artists, and connoisseurs of authentic nourishment.
            </p>
          </div>

          <Link
            href="/shop"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#C49A42] hover:text-[#321B11] transition-colors group"
          >
            <span>See All Best Sellers</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
