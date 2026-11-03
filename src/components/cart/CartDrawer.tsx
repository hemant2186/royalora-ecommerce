'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    promoCode,
    discountAmount,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [codeMessage, setCodeMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  const finalSubtotal = Math.max(0, subtotal - discountAmount);
  const progressPercent = Math.min(100, Math.round(((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100));

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const result = applyPromoCode(inputCode);
    setCodeMessage({ text: result.message, isError: !result.success });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#321B11]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6EF] shadow-2xl flex flex-col border-l border-[#C49A42]/30">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#C49A42]/20 flex items-center justify-between bg-[#F8F1E5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C49A42]" />
              <h3 className="font-serif text-lg font-medium text-[#321B11]">
                Your Royal Cart ({items.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#321B11] hover:text-[#C49A42] transition-colors rounded-full hover:bg-[#E9D9BA]/40"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-[#E9D9BA]/35 border-b border-[#C49A42]/20 text-xs">
            {amountNeededForFreeShipping > 0 ? (
              <p className="text-[#321B11] font-medium mb-1.5">
                Add <span className="font-bold text-[#C49A42]">₹{amountNeededForFreeShipping}</span> more for <span className="font-semibold text-[#321B11]">Free Express Shipping</span>
              </p>
            ) : (
              <p className="text-emerald-800 font-semibold mb-1.5 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 inline" /> You have unlocked Complimentary Express Shipping!
              </p>
            )}
            <div className="w-full bg-[#E9D9BA] rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#C49A42] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-[#E9D9BA]/40 mx-auto flex items-center justify-center text-[#C49A42] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg text-[#321B11] font-medium mb-1">
                  Your cart is empty
                </h4>
                <p className="text-xs text-[#7A685A] max-w-xs mx-auto mb-6">
                  Experience the richness of pure royal dry fruit powders crafted for modern nourishment.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-[#321B11] text-[#E9D9BA] text-xs uppercase tracking-widest font-medium hover:bg-[#C49A42] hover:text-[#321B11] transition-all rounded shadow-md"
                >
                  Explore Collection
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-white/80 rounded-lg border border-[#C49A42]/15 shadow-sm"
                >
                  <div className="relative w-20 h-20 rounded-md overflow-hidden bg-[#F8F1E5] flex-shrink-0 border border-[#C49A42]/20">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-semibold text-[#321B11] hover:text-[#C49A42] transition-colors truncate"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#7A685A] hover:text-red-700 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#7A685A] font-medium">
                        Size: {item.selectedPack.size}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F4EBDD]">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#C49A42]/30 rounded bg-[#FAF6EF]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-[#321B11] hover:text-[#C49A42]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#321B11]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-[#321B11] hover:text-[#C49A42]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="text-xs font-semibold text-[#321B11]">
                          ₹{item.selectedPack.price * item.quantity}
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-[#7A685A]">
                            (₹{item.selectedPack.price} each)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#C49A42]/20 bg-[#F8F1E5] space-y-3">
              {/* Promo code form */}
              <form onSubmit={handleApplyCode} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#C49A42] absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. ROYAL10)"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="w-full pl-8 pr-2 py-1.5 text-xs bg-white border border-[#C49A42]/30 rounded focus:outline-none focus:border-[#C49A42] uppercase font-medium text-[#321B11]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#321B11] text-[#E9D9BA] text-xs font-semibold uppercase rounded hover:bg-[#C49A42] hover:text-[#321B11] transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoCode && (
                  <div className="flex items-center justify-between text-[11px] text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    <span>Coupon applied: <strong>{promoCode}</strong> (-₹{discountAmount})</span>
                    <button
                      type="button"
                      onClick={removePromoCode}
                      className="text-red-700 underline text-[10px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {codeMessage && !promoCode && (
                  <p className={`text-[11px] ${codeMessage.isError ? 'text-red-600' : 'text-emerald-700'}`}>
                    {codeMessage.text}
                  </p>
                )}
              </form>

              {/* Totals */}
              <div className="space-y-1.5 text-xs text-[#7A685A] pt-2 border-t border-[#C49A42]/15">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#321B11]">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Privilege Discount</span>
                    <span className="font-semibold">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#321B11]">
                    {amountNeededForFreeShipping === 0 ? (
                      <span className="text-emerald-700 uppercase font-bold text-[11px]">FREE</span>
                    ) : (
                      'Calculated at checkout'
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-serif font-bold text-[#321B11] pt-2 border-t border-[#C49A42]/20">
                  <span>Estimated Total</span>
                  <span className="text-[#C49A42]">₹{finalSubtotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded transition-all shadow-md group"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full py-2 text-center text-xs text-[#7A685A] hover:text-[#321B11] transition-colors"
                >
                  Continue Browsing
                </button>
              </div>

              <div className="pt-1 flex items-center justify-center gap-2 text-[10px] text-[#7A685A]/80 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C49A42]" />
                <span>100% Secure Checkout • Authentic Nutrition Guaranteed</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
