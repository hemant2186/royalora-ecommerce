'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '../ui/SectionHeading';
import { ProductCard } from '../product/ProductCard';
import { QuickViewModal } from '../product/QuickViewModal';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Take the primary 3 powders requested in prompt: Almond, Cashew, Pistachio
  const primaryProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Royal Pantry"
          title="Explore Our Royal Collection"
          subtitle="Premium dry fruits powder, thoughtfully crafted for everyday nutrition."
        />

        {/* 3 Premium Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {primaryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* Note on editable placeholders & View All */}
        <div className="bg-[#F4EBDD]/60 border border-[#C49A42]/30 rounded-xl p-5 text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs text-[#7A685A] leading-relaxed">
            <span className="font-semibold text-[#321B11]">Brand Transparency:</span> Weights, pricing tiers, and pack sizes shown above reflect editable development placeholders and are ready to synchronize with certified laboratory specifications and merchant inventories.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-[0.2em] font-semibold rounded shadow-md transition-all duration-300 group"
          >
            <span>View Complete Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
