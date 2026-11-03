'use client';

import React, { useState, useMemo } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import { Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'powders' && product.category === 'powder') ||
        (selectedCategory === 'gifts' && product.category === 'premium');

      const matchSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.packOptions[0].price - b.packOptions[0].price;
      }
      if (sortBy === 'price-desc') {
        return b.packOptions[0].price - a.packOptions[0].price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0; // default featured
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="py-12 sm:py-16 bg-[#FAF6EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Royal Collection"
          title="Shop All Creations"
          subtitle="Discover our pure dry fruits powders and bespoke royal gift collections. Crafted for connoisseurs of nutrition."
        />

        {/* Filter and Control Bar */}
        <div className="bg-[#F8F1E5] p-4 sm:p-6 rounded-2xl border border-[#C49A42]/30 shadow-royal mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#7A685A] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search Almond, Cashew, Pista..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-xs bg-white border border-[#C49A42]/30 rounded-lg text-[#321B11] placeholder:text-[#7A685A] focus:outline-none focus:border-[#C49A42]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-[#7A685A] hover:text-[#321B11]"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {[
                { id: 'all', label: 'All Products' },
                { id: 'powders', label: 'Single Dry Fruit Powders' },
                { id: 'gifts', label: 'Luxury Gift Sets' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`text-xs px-4 py-2 rounded-lg font-medium tracking-wide transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-[#321B11] text-[#E9D9BA] shadow-sm'
                      : 'bg-white/80 text-[#7A685A] border border-[#C49A42]/20 hover:border-[#C49A42]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <SlidersHorizontal className="w-4 h-4 text-[#C49A42]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#C49A42]/30 rounded-lg px-3 py-2 text-xs text-[#321B11] focus:outline-none focus:border-[#C49A42] font-medium"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Active summary & reset */}
          <div className="flex items-center justify-between text-xs text-[#7A685A] pt-3 border-t border-[#C49A42]/20">
            <span>
              Showing <strong className="text-[#321B11]">{filteredProducts.length}</strong> creations
            </span>
            {(selectedCategory !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-[#C49A42] underline hover:text-[#321B11]"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#C49A42]/20">
            <Sparkles className="w-10 h-10 text-[#C49A42] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#321B11]">No creations match your filter</h3>
            <p className="text-xs text-[#7A685A] max-w-sm mx-auto mt-1 mb-6">
              Please adjust your search terms or view our complete royal range.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#321B11] text-[#E9D9BA] text-xs uppercase tracking-widest font-semibold rounded hover:bg-[#C49A42] hover:text-[#321B11] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
