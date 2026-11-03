'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  CreditCard,
  QrCode,
  Building2,
  Banknote,
  ArrowRight,
  Info,
  CheckCircle2,
  Lock,
  ChevronLeft,
} from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckoutForm, Order } from '@/types/cart';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    subtotal,
    discountAmount,
    amountNeededForFreeShipping,
    clearCart,
    promoCode,
  } = useCart();

  const finalSubtotal = Math.max(0, subtotal - discountAmount);
  const shippingCharge = amountNeededForFreeShipping === 0 ? 0 : 70;
  const grandTotal = finalSubtotal + (items.length > 0 ? shippingCharge : 0);

  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    gstNumber: '',
    orderNotes: '',
    paymentMethod: 'upi',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const indianStates = [
    'Andhra Pradesh', 'Assam', 'Bihar', 'Delhi', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.phone || !formData.addressLine1 || !formData.city || !formData.pincode) {
      setErrorMessage('Please fill in all required shipping address fields.');
      return;
    }

    if (items.length === 0) {
      setErrorMessage('Your cart is empty. Please add products before placing an order.');
      return;
    }

    setLoading(true);

    try {
      // Call our internal Razorpay test order route
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: grandTotal,
          receipt: `rcpt_${Date.now()}`,
          notes: {
            customer: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
          },
        }),
      });

      const orderData = await response.json();

      // Create local order record
      const orderId = `RYL-${Date.now().toString().slice(-6)}`;
      const completedOrder: Order = {
        id: orderId,
        orderNumber: orderId,
        items: [...items],
        subtotal,
        discount: discountAmount,
        shipping: shippingCharge,
        total: grandTotal,
        customer: { ...formData },
        paymentStatus: 'test_mode_success',
        paymentMethod: formData.paymentMethod.toUpperCase(),
        createdAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        estimatedDelivery: '3 - 5 Business Days',
      };

      // Store in localStorage for the order-success page to read
      localStorage.setItem(`royalora_order_${orderId}`, JSON.stringify(completedOrder));

      // Clear cart
      clearCart();

      // Redirect to confirmation page
      router.push(`/order-success/${orderId}`);
    } catch (err: any) {
      console.error(err);
      setErrorMessage('An error occurred during order processing. Please retry.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAF6EF] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation back to cart */}
        <div className="mb-6">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#7A685A] hover:text-[#C49A42] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Return to Cart
          </Link>
        </div>

        <SectionHeading
          eyebrow="Express Checkout"
          title="Complete Your Royal Order"
          subtitle="Provide delivery destination and select your preferred payment mode."
        />

        {/* Sandbox Test Mode Notice as required by prompt */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-8 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong className="block text-sm font-serif font-bold text-amber-950 mb-0.5">
              Secure Sandbox / Demo Mode Active
            </strong>
            Orders placed here simulate payment verification for review. Real customer transactions and automated Razorpay webhooks activate when production API credentials are configured in your environment.
          </div>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Customer and Shipping Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Shipping Address Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C49A42]/30 shadow-royal space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F4EBDD]">
                  <h3 className="font-serif text-lg font-medium text-[#321B11]">
                    1. Shipping &amp; Delivery Destination
                  </h3>
                  <span className="text-[11px] text-[#C49A42] font-semibold">Pan-India Courier</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="e.g. Vikram"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="e.g. Singhania"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      Email Address (for order tracking) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      Mobile Number (for courier SMS) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#321B11] mb-1">
                    Street Address / House No. / Building *
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    required
                    placeholder="e.g. Flat 402, Royal Residency, 14th Main Road"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#321B11] mb-1">
                    Landmark / Apartment Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="addressLine2"
                    placeholder="Near Heritage Club"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Mumbai"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    >
                      {indianStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      Pincode (6 digits) *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      maxLength={6}
                      placeholder="400001"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                </div>

                {/* Optional GSTIN */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#321B11] mb-1">
                    GSTIN for Business Tax Invoice (Optional)
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    placeholder="27AAAAA0000A1Z5"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42] uppercase"
                  />
                </div>
              </div>

              {/* Payment Method Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C49A42]/30 shadow-royal space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F4EBDD]">
                  <h3 className="font-serif text-lg font-medium text-[#321B11]">
                    2. Payment Gateway Mode
                  </h3>
                  <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    256-Bit Encrypted
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      id: 'upi',
                      label: 'UPI Instant Payment',
                      sub: 'Google Pay, PhonePe, Paytm, BHIM UPI QR',
                      icon: QrCode,
                      badge: 'Fastest',
                    },
                    {
                      id: 'card',
                      label: 'Credit / Debit Card',
                      sub: 'Visa, MasterCard, RuPay, American Express',
                      icon: CreditCard,
                    },
                    {
                      id: 'netbanking',
                      label: 'Net Banking',
                      sub: 'HDFC, ICICI, SBI, Axis & 50+ Banks',
                      icon: Building2,
                    },
                    {
                      id: 'cod',
                      label: 'Cash on Delivery (COD)',
                      sub: 'Pay with cash or UPI on courier arrival',
                      icon: Banknote,
                    },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    const isSelected = formData.paymentMethod === mode.id;
                    return (
                      <label
                        key={mode.id}
                        className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#C49A42] bg-[#FAF6EF] shadow-sm'
                            : 'border-[#F4EBDD] bg-white hover:border-[#C49A42]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={mode.id}
                          checked={isSelected}
                          onChange={handleInputChange}
                          className="mt-1 text-[#C49A42] focus:ring-[#C49A42]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-serif text-sm font-semibold text-[#321B11] flex items-center gap-2">
                              <Icon className="w-4 h-4 text-[#C49A42]" />
                              {mode.label}
                            </span>
                            {mode.badge && (
                              <span className="text-[10px] font-bold text-[#C49A42] bg-[#E9D9BA]/50 px-2 py-0.5 rounded">
                                {mode.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#7A685A] mt-0.5">{mode.sub}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Order Review Summary (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#C49A42]/30 shadow-royal space-y-6">
              <h3 className="font-serif text-xl font-medium text-[#321B11] pb-3 border-b border-[#F4EBDD]">
                Order Review ({items.reduce((s, i) => s + i.quantity, 0)} Items)
              </h3>

              {/* Items List */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 py-2 border-b border-[#F4EBDD]/60 last:border-none">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#FAF6EF] flex-shrink-0 border border-[#C49A42]/20">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-xs font-semibold text-[#321B11] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#7A685A]">
                        {item.selectedPack.size} &bull; Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#321B11]">
                      ₹{item.selectedPack.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals Breakdown */}
              <div className="space-y-2.5 text-xs text-[#7A685A] pt-4 border-t border-[#F4EBDD]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#321B11]">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Privilege Coupon ({promoCode})</span>
                    <span className="font-semibold">-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Express Courier Shipping</span>
                  <span className="font-semibold text-[#321B11]">
                    {shippingCharge === 0 ? (
                      <span className="text-emerald-700 uppercase font-bold">FREE</span>
                    ) : (
                      `₹${shippingCharge}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Applicable GST (5% Included)</span>
                  <span className="text-[#321B11]">₹{Math.round(finalSubtotal * 0.05)}</span>
                </div>

                <div className="flex justify-between text-lg font-serif font-bold text-[#321B11] pt-4 border-t-2 border-[#C49A42]/30">
                  <span>Total Amount Payable</span>
                  <span className="text-[#C49A42] text-2xl">₹{grandTotal}</span>
                </div>
              </div>

              {/* Error Notice */}
              {errorMessage && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading || items.length === 0}
                className="w-full py-4 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-xl shadow-royal transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                <Lock className="w-4 h-4 text-[#C49A42] group-hover:text-[#321B11]" />
                <span>{loading ? 'Securing Order...' : `Authorize & Place Order (₹${grandTotal})`}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="space-y-2 pt-2 text-[10px] text-[#7A685A] text-center">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C49A42]" />
                  <span>Tamper-Proof Quality Packaging &amp; Fast Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
