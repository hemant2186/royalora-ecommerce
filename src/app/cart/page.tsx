'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  ShoppingBag,
  ArrowLeft,
  Truck,
} from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    promoCode,
    discountAmount,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [codeMsg, setCodeMsg] = useState<{ text: string; isError: boolean } | null>(null);
  const [orderNote, setOrderNote] = useState('');

  const finalSubtotal = Math.max(0, subtotal - discountAmount);
  const shippingCharge = amountNeededForFreeShipping === 0 ? 0 : 70;
  const grandTotal = finalSubtotal + (items.length > 0 ? shippingCharge : 0);
  const progressPercent = Math.min(
    100,
    Math.round(((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100)
  );

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    setCodeMsg({ text: res.message, isError: !res.success });
  };

  return (
    <div className="bg-[#FAF6EF] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your Royal Selection"
          title="Shopping Cart"
          subtitle="Review your chosen nutrition essentials and proceed to secure royal checkout."
        />

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 sm:p-16 text-center max-w-xl mx-auto border border-[#C49A42]/30 shadow-royal">
            <div className="w-20 h-20 rounded-full bg-[#E9D9BA]/50 text-[#C49A42] mx-auto flex items-center justify-center mb-6">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl text-[#321B11] font-medium mb-2">
              Your Cart is Empty
            </h3>
            <p className="text-xs sm:text-sm text-[#7A685A] leading-relaxed mb-8">
              Experience the unmatched purity of micro-pulverized California Almonds, Mangalore Cashews, and Persian Pistachios.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              <span>Explore Royal Pantry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Items Column (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free shipping banner */}
              <div className="p-4 bg-white rounded-xl border border-[#C49A42]/30 shadow-xs">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-medium text-[#321B11]">
                    {amountNeededForFreeShipping > 0 ? (
                      <>
                        Add <strong className="text-[#C49A42]">₹{amountNeededForFreeShipping}</strong> more for{' '}
                        <strong className="text-[#321B11]">Free Express Shipping</strong>
                      </>
                    ) : (
                      <span className="text-emerald-800 font-semibold flex items-center gap-1">
                        <Truck className="w-4 h-4 text-emerald-600 inline" /> You have unlocked Complimentary Express Delivery!
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] text-[#7A685A] font-semibold">{progressPercent}%</span>
                </div>
                <div className="w-full bg-[#E9D9BA]/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#C49A42] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items Table */}
              <div className="bg-white rounded-2xl border border-[#C49A42]/30 shadow-royal overflow-hidden">
                <div className="p-5 border-b border-[#F4EBDD] flex items-center justify-between bg-[#F8F1E5]">
                  <h3 className="font-serif text-base font-semibold text-[#321B11]">
                    Items in Your Order ({items.reduce((s, i) => s + i.quantity, 0)})
                  </h3>
                  <button
                    onClick={clearCart}
                    className="text-xs text-[#7A685A] hover:text-red-700 underline"
                  >
                    Clear All
                  </button>
                </div>

                <div className="divide-y divide-[#F4EBDD] p-5 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 first:pt-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#FAF6EF] flex-shrink-0 border border-[#C49A42]/20">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/product/${item.product.slug}`}
                            className="font-serif text-base font-medium text-[#321B11] hover:text-[#C49A42] transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs text-[#7A685A]">Size: {item.selectedPack.size}</p>
                          <p className="text-xs text-[#C49A42] font-semibold mt-1">
                            ₹{item.selectedPack.price} each
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full sm:w-auto sm:gap-6">
                        {/* Quantity */}
                        <div className="flex items-center border border-[#C49A42]/40 rounded-lg bg-[#FAF6EF]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2.5 py-1 text-sm text-[#321B11] hover:text-[#C49A42]"
                            aria-label="Decrease"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-bold text-[#321B11]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2.5 py-1 text-sm text-[#321B11] hover:text-[#C49A42]"
                            aria-label="Increase"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Total per line */}
                        <div className="text-right">
                          <span className="font-serif text-base font-bold text-[#321B11]">
                            ₹{item.selectedPack.price * item.quantity}
                          </span>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-[#7A685A] hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Order Instructions / Notes */}
              <div className="bg-white p-5 rounded-2xl border border-[#C49A42]/30 shadow-sm">
                <label className="block text-xs font-semibold text-[#321B11] mb-1.5">
                  Order Gifting Instructions or Dispatch Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Please include a gift card: 'Wishing you a healthy and blessed festive celebration'..."
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  className="w-full p-3 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                />
              </div>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#321B11] hover:text-[#C49A42]"
              >
                <ArrowLeft className="w-4 h-4" /> Continue Exploring Our Range
              </Link>
            </div>

            {/* Right Summary Column (4 cols) */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#C49A42]/30 shadow-royal space-y-6">
              <h3 className="font-serif text-xl font-medium text-[#321B11] pb-4 border-b border-[#F4EBDD]">
                Order Summary
              </h3>

              {/* Coupon Form */}
              <form onSubmit={handleApply} className="space-y-2">
                <label className="block text-xs font-semibold text-[#321B11]">
                  Apply Royal Privilege Coupon
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#C49A42] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. ROYAL10"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF6EF] border border-[#C49A42]/40 rounded-lg uppercase font-medium text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#321B11] text-[#E9D9BA] text-xs uppercase font-semibold rounded-lg hover:bg-[#C49A42] hover:text-[#321B11] transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoCode && (
                  <div className="flex items-center justify-between text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200">
                    <span>Code &quot;{promoCode}&quot; Active (-₹{discountAmount})</span>
                    <button
                      type="button"
                      onClick={removePromoCode}
                      className="text-red-700 underline text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {codeMsg && !promoCode && (
                  <p className={`text-xs ${codeMsg.isError ? 'text-red-600' : 'text-emerald-700'}`}>
                    {codeMsg.text}
                  </p>
                )}
              </form>

              {/* Breakdown */}
              <div className="space-y-3 text-xs text-[#7A685A] pt-4 border-t border-[#F4EBDD]">
                <div className="flex justify-between">
                  <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="font-semibold text-[#321B11]">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Privilege Discount</span>
                    <span className="font-semibold">-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Express Courier Delivery</span>
                  <span className="font-semibold text-[#321B11]">
                    {shippingCharge === 0 ? (
                      <span className="text-emerald-700 uppercase font-bold">FREE</span>
                    ) : (
                      `₹${shippingCharge}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated GST (Included)</span>
                  <span className="text-[#321B11]">₹{Math.round((finalSubtotal * 0.05))}</span>
                </div>

                <div className="flex justify-between text-base font-serif font-bold text-[#321B11] pt-4 border-t-2 border-[#C49A42]/30">
                  <span>Grand Total</span>
                  <span className="text-[#C49A42] text-xl">₹{grandTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="w-full py-4 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center justify-center gap-2 shadow-royal transition-all duration-300 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="space-y-2 pt-2 text-[11px] text-[#7A685A]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C49A42]" />
                  <span>256-Bit Bank-Grade SSL Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#C49A42]" />
                  <span>Ships within 24-48 hours across India</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
