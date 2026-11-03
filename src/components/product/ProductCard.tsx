'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { Product, PackOption } from '@/types/product';
import { useCart } from '../cart/CartContext';
import { useWishlist } from '../wishlist/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [addedNotice, setAddedNotice] = useState(false);

  const selectedPack: PackOption = product.packOptions[selectedPackIndex] || product.packOptions[0];
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, selectedPack, 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group relative bg-[#FAF6EF] rounded-xl overflow-hidden border border-[#C49A42]/20 hover:border-[#C49A42]/60 hover:shadow-royal-gold transition-all duration-300 flex flex-col justify-between">
      {/* Top Media Area */}
      <div className="relative aspect-square w-full bg-[#F4EBDD] overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#321B11]/90 backdrop-blur-sm text-[#E9D9BA] text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded shadow border border-[#C49A42]/30">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm ${
            isWishlisted
              ? 'bg-[#C49A42] text-[#321B11] shadow'
              : 'bg-white/80 text-[#321B11] hover:bg-[#C49A42] hover:text-[#321B11]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#321B11]' : ''}`} />
        </button>

        {/* Quick View Hover Button */}
        {onQuickView && (
          <div className="absolute bottom-3 inset-x-3 hidden sm:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button
              onClick={() => onQuickView(product)}
              className="w-full py-2 bg-white/95 backdrop-blur-sm text-[#321B11] hover:text-[#C49A42] text-xs uppercase tracking-wider font-semibold rounded shadow-md flex items-center justify-center gap-1.5 transition-colors border border-[#C49A42]/30"
            >
              <Eye className="w-3.5 h-3.5" /> Quick View
            </button>
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex items-center text-[#C49A42]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating) ? 'fill-[#C49A42]' : 'fill-[#C49A42]/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-[#321B11]">{product.rating}</span>
            <span className="text-[11px] text-[#7A685A]">({product.reviewCount})</span>
          </div>

          {/* Title */}
          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="font-serif text-lg sm:text-xl font-medium text-[#321B11] hover:text-[#C49A42] transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#7A685A] line-clamp-2 mt-1 mb-3 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Pack Size Selector Tabs */}
          <div className="mb-4">
            <span className="block text-[10px] uppercase tracking-wider text-[#7A685A] font-semibold mb-1.5">
              Available Sizes
            </span>
            <div className="grid grid-cols-3 gap-1">
              {product.packOptions.map((pack, idx) => (
                <button
                  key={pack.size}
                  type="button"
                  onClick={() => setSelectedPackIndex(idx)}
                  className={`text-[10px] py-1 px-1 rounded text-center truncate border transition-all ${
                    selectedPackIndex === idx
                      ? 'border-[#C49A42] bg-[#E9D9BA]/50 text-[#321B11] font-semibold shadow-xs'
                      : 'border-[#C49A42]/20 bg-white/70 text-[#7A685A] hover:border-[#C49A42]/40'
                  }`}
                >
                  {pack.size.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing and Action Area */}
        <div className="pt-3 border-t border-[#C49A42]/20">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="font-serif text-lg font-bold text-[#321B11]">
                ₹{selectedPack.price}
              </span>
              {selectedPack.originalPrice && (
                <span className="text-xs text-[#7A685A] line-through ml-2">
                  ₹{selectedPack.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-800 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              In Stock
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/product/${product.slug}`}
              className="w-full py-2 text-center text-xs uppercase tracking-wider font-medium text-[#321B11] bg-[#E9D9BA]/60 hover:bg-[#E9D9BA] rounded border border-[#C49A42]/30 transition-colors"
            >
              Details
            </Link>
            <button
              onClick={handleAddToCart}
              className={`w-full py-2 text-xs uppercase tracking-wider font-semibold rounded flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                addedNotice
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11]'
              }`}
            >
              {addedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Added
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" /> Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
