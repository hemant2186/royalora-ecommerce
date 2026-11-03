'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { Product, PackOption } from '@/types/product';
import { useCart } from '../cart/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addItem } = useCart();
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const selectedPack: PackOption = product.packOptions[selectedPackIndex] || product.packOptions[0];

  const handleAdd = () => {
    addItem(product, selectedPack, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#321B11]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FAF6EF] w-full max-w-3xl rounded-2xl shadow-2xl border border-[#C49A42]/40 overflow-hidden animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-[#C49A42] hover:text-[#321B11] text-[#321B11] flex items-center justify-center transition-colors shadow"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Side */}
          <div className="p-6 bg-[#F4EBDD] flex flex-col justify-between">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#C49A42]/20 shadow-inner">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === i ? 'border-[#C49A42] scale-105' : 'border-transparent opacity-70'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C49A42]">
                {product.accentNote}
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#321B11] mt-1">
                {product.name}
              </h2>
              <p className="text-xs text-[#7A685A] mt-1">{product.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mt-2 mb-4">
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
                <span className="text-xs font-semibold text-[#321B11]">{product.rating}</span>
                <span className="text-xs text-[#7A685A]">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-[#C49A42]/20">
                <span className="font-serif text-2xl font-bold text-[#321B11]">
                  ₹{selectedPack.price}
                </span>
                {selectedPack.originalPrice && (
                  <span className="text-sm text-[#7A685A] line-through">
                    ₹{selectedPack.originalPrice}
                  </span>
                )}
                <span className="text-xs text-emerald-800 font-medium bg-emerald-100/60 px-2 py-0.5 rounded">
                  Inclusive of all taxes
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#7A685A] leading-relaxed mb-4">
                {product.shortDescription}
              </p>

              {/* Pack Selector */}
              <div className="mb-4">
                <span className="block text-[11px] uppercase font-semibold text-[#321B11] mb-2">
                  Select Pack Size: <strong className="text-[#C49A42]">{selectedPack.size}</strong>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {product.packOptions.map((pack, idx) => (
                    <button
                      key={pack.size}
                      type="button"
                      onClick={() => setSelectedPackIndex(idx)}
                      className={`text-xs py-2 px-2 rounded text-center border transition-all ${
                        selectedPackIndex === idx
                          ? 'border-[#C49A42] bg-[#E9D9BA]/60 text-[#321B11] font-semibold'
                          : 'border-[#C49A42]/20 bg-white/70 text-[#7A685A]'
                      }`}
                    >
                      <div>{pack.size.split(' ')[0]}</div>
                      <div className="font-bold text-[#321B11]">₹{pack.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-[#321B11]">Quantity:</span>
                <div className="flex items-center border border-[#C49A42]/40 rounded bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2.5 py-1 text-sm text-[#321B11] hover:text-[#C49A42]"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold text-[#321B11]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2.5 py-1 text-sm text-[#321B11] hover:text-[#C49A42]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="space-y-2">
              <button
                onClick={handleAdd}
                className={`w-full py-3 rounded-lg text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all shadow-md ${
                  added
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Your Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Cart (₹{selectedPack.price * quantity})
                  </>
                )}
              </button>

              <Link
                href={`/product/${product.slug}`}
                onClick={onClose}
                className="block text-center text-xs text-[#7A685A] hover:text-[#C49A42] underline pt-1"
              >
                View Full Product Story & Nutritional Facts
              </Link>

              <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-[#7A685A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C49A42]" />
                <span>Stone Milled • Micro-Pulverized • Zero Additives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
