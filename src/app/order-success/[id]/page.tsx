'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  CheckCircle2,
  Package,
  Truck,
  Printer,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import { Order } from '@/types/cart';
import { GoldDivider } from '@/components/ui/GoldDivider';

export default function OrderSuccessPage() {
  const params = useParams();
  const orderId = params?.id as string;
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`royalora_order_${orderId}`);
      if (stored) {
        setOrder(JSON.parse(stored));
      } else {
        // Fallback demo order structure for direct visits
        setOrder({
          id: orderId,
          orderNumber: orderId,
          items: [],
          subtotal: 1299,
          shipping: 0,
          discount: 0,
          total: 1299,
          customer: {
            firstName: 'Royal',
            lastName: 'Patron',
            email: 'patron@royalora.com',
            phone: '+91 98765 43210',
            addressLine1: 'Heritage Villa, Palace Road',
            addressLine2: '',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400001',
            paymentMethod: 'upi',
          },
          paymentStatus: 'test_mode_success',
          paymentMethod: 'UPI / TEST GATEWAY',
          createdAt: new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          estimatedDelivery: '3 - 5 Business Days',
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, [orderId]);

  const handlePrint = () => {
    window.print();
  };

  if (!order) return null;

  return (
    <div className="bg-[#FAF6EF] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Card Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#C49A42]/30 shadow-2xl text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-6 ring-8 ring-emerald-50/50">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C49A42] block mb-2">
            Order Confirmed
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#321B11] font-normal mb-3">
            Thank You for Welcoming Royalty
          </h1>

          <GoldDivider className="mx-auto max-w-xs mb-4" />

          <p className="text-sm text-[#7A685A] max-w-lg mx-auto leading-relaxed mb-6">
            Your order <strong className="text-[#321B11]">#{order.orderNumber}</strong> has been received and scheduled for fresh batch micro-milling and precision packaging.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#321B11] bg-[#FAF6EF] px-5 py-2.5 rounded-full border border-[#C49A42]/30">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C49A42]" /> {order.createdAt}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#C49A42]" /> Est. Delivery: {order.estimatedDelivery}
            </span>
            <span>&bull;</span>
            <span className="text-emerald-700">Payment Status: Authorized (Demo Test)</span>
          </div>
        </div>

        {/* Order Receipt Details */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#C49A42]/30 shadow-royal space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#F4EBDD] gap-4">
            <div>
              <h2 className="font-serif text-xl text-[#321B11] font-medium">
                Consignment Receipt
              </h2>
              <p className="text-xs text-[#7A685A]">Order Reference: #{order.orderNumber}</p>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF6EF] hover:bg-[#E9D9BA] text-[#321B11] text-xs uppercase font-semibold rounded-lg border border-[#C49A42]/30 transition-colors self-start sm:self-auto"
            >
              <Printer className="w-4 h-4 text-[#C49A42]" /> Print Invoice
            </button>
          </div>

          {/* Items if available */}
          {order.items.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#321B11]">
                Packaged Creations
              </h3>
              <div className="divide-y divide-[#F4EBDD]">
                {order.items.map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#FAF6EF] flex-shrink-0 border border-[#C49A42]/20">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-[#321B11]">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-[#7A685A]">
                          {item.selectedPack.size} &bull; Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#321B11]">
                      ₹{item.selectedPack.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Delivery & Billing Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#F4EBDD]">
            <div className="space-y-2 text-xs">
              <h3 className="uppercase tracking-wider font-bold text-[#321B11] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C49A42]" /> Delivery Address
              </h3>
              <p className="font-semibold text-[#321B11]">
                {order.customer.firstName} {order.customer.lastName}
              </p>
              <p className="text-[#7A685A]">{order.customer.addressLine1}</p>
              {order.customer.addressLine2 && <p className="text-[#7A685A]">{order.customer.addressLine2}</p>}
              <p className="text-[#7A685A]">
                {order.customer.city}, {order.customer.state} - {order.customer.pincode}
              </p>
              <p className="text-[#7A685A]">Phone: {order.customer.phone}</p>
            </div>

            <div className="space-y-2 text-xs">
              <h3 className="uppercase tracking-wider font-bold text-[#321B11] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C49A42]" /> Payment &amp; Taxes
              </h3>
              <div className="space-y-1.5 text-[#7A685A]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-[#321B11]">₹{order.subtotal}</span>
                </div>
                {order.discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount:</span>
                    <span>-₹{order.discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>{order.shipping === 0 ? 'FREE' : `₹${order.shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-[#321B11] pt-2 border-t border-[#F4EBDD]">
                  <span>Total Paid:</span>
                  <span className="text-[#C49A42]">₹{order.total}</span>
                </div>
                <p className="text-[11px] pt-1">
                  Method: <strong>{order.paymentMethod}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-[#F4EBDD] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-4 text-xs text-[#7A685A]">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#C49A42]" /> care@royalora.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#C49A42]" /> Concierge Desk
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
