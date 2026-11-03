'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight, ShoppingBag } from 'lucide-react';
import { useWishlist } from '@/components/wishlist/WishlistContext';
import { ProductCard } from '@/components/product/ProductCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="bg-[#FAF6EF] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated For You"
          title="Your Royal Wishlist"
          subtitle="Keep track of your favorite dry fruits powders and bespoke gift sets."
        />

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 sm:p-16 text-center max-w-xl mx-auto border border-[#C49A42]/30 shadow-royal">
            <div className="w-16 h-16 rounded-full bg-[#E9D9BA]/50 text-[#C49A42] mx-auto flex items-center justify-center mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#321B11] font-medium mb-2">
              Your Wishlist is Empty
            </h3>
            <p className="text-xs sm:text-sm text-[#7A685A] leading-relaxed mb-8">
              Explore our California Almond, Mangalore Cashew, and Persian Pistachio powders to curate your private royal nutrition collection.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
