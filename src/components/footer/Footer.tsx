'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GoldDivider } from '../ui/GoldDivider';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#321B11] text-[#E9D9BA] border-t-2 border-[#C49A42] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#C49A42]/20">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-48">
                <Image
                  src="/images/royalora-logo.png"
                  alt="ROYALORA - A Royal Touch of Nutrition"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="font-serif italic text-base text-[#C49A42]">
              &quot;A Royal Touch of Nutrition.&quot;
            </p>
            <p className="text-xs text-[#E9D9BA]/80 max-w-sm leading-relaxed">
              ROYALORA crafts premium single-origin and micro-milled dry fruits powders. Bringing centuries of royal indulgence into modern health-conscious kitchens without additives, fillers, or artificial preservatives.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#20110A] border border-[#C49A42]/30 flex items-center justify-center text-[#C49A42] hover:bg-[#C49A42] hover:text-[#321B11] transition-all"
                aria-label="ROYALORA Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#20110A] border border-[#C49A42]/30 flex items-center justify-center text-[#C49A42] hover:bg-[#C49A42] hover:text-[#321B11] transition-all"
                aria-label="ROYALORA Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#20110A] border border-[#C49A42]/30 flex items-center justify-center text-[#C49A42] hover:bg-[#C49A42] hover:text-[#321B11] transition-all"
                aria-label="ROYALORA YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#20110A] border border-[#C49A42]/30 flex items-center justify-center text-[#C49A42] hover:bg-[#C49A42] hover:text-[#321B11] transition-all text-xs font-bold"
                aria-label="ROYALORA WhatsApp Support"
              >
                WA
              </a>
            </div>
          </div>

          {/* Column 2: The Royal Collection */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#C49A42] font-semibold">
              The Collection
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/product/almond-powder" className="hover:text-[#C49A42] transition-colors">
                  Royal Almond Powder
                </Link>
              </li>
              <li>
                <Link href="/product/cashew-powder" className="hover:text-[#C49A42] transition-colors">
                  Royal Cashew Powder
                </Link>
              </li>
              <li>
                <Link href="/product/pistachio-powder" className="hover:text-[#C49A42] transition-colors">
                  Royal Pistachio Powder
                </Link>
              </li>
              <li>
                <Link href="/product/royal-trio-collection" className="hover:text-[#C49A42] transition-colors">
                  The Royal Trio Gift Set
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-[#C49A42] hover:underline font-medium">
                  View All Products &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand & Heritage */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#C49A42] font-semibold">
              Our Heritage
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#C49A42] transition-colors">
                  About ROYALORA
                </Link>
              </li>
              <li>
                <Link href="/our-quality" className="hover:text-[#C49A42] transition-colors">
                  Quality & Micro-Milling
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#C49A42] transition-colors">
                  Nutritional FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C49A42] transition-colors">
                  Concierge Support
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-[#C49A42] transition-colors">
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Concierge */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#C49A42] font-semibold">
              Join the Royal Club
            </h4>
            <p className="text-xs text-[#E9D9BA]/80 leading-relaxed">
              Receive private tasting notes, seasonal harvest announcements, and royal privilege offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#20110A] border border-[#C49A42]/40 rounded px-3 py-2 text-xs text-[#F8F1E5] placeholder:text-[#E9D9BA]/50 focus:outline-none focus:border-[#C49A42]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#C49A42] text-[#321B11] rounded hover:bg-[#E9D9BA] transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#C49A42] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Thank you for joining the ROYALORA family.
                </p>
              )}
            </form>

            <div className="pt-2 border-t border-[#C49A42]/20 space-y-1.5 text-xs text-[#E9D9BA]/70">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C49A42]" />
                <span>care@royalora.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C49A42]" />
                <span>+91 [Editable Placeholder]</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C49A42]" />
                <span>Registered Office: [City, State, India]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Highlights Bar */}
        <div className="py-6 border-b border-[#C49A42]/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-[#E9D9BA]">
            <ShieldCheck className="w-4 h-4 text-[#C49A42]" />
            <span>100% Pure Nuts Guaranteed</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-[#E9D9BA]">
            <span className="text-[#C49A42] font-bold">₹0</span>
            <span>Free Shipping Over ₹999</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-[#E9D9BA]">
            <span className="text-[#C49A42] font-bold">24-48h</span>
            <span>Express Batch Dispatch</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-[#E9D9BA]">
            <span className="text-[#C49A42] font-bold">100%</span>
            <span>Secure Indian Payments</span>
          </div>
        </div>

        {/* Bottom Policies and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#E9D9BA]/60 gap-4">
          <p>© {new Date().getFullYear()} ROYALORA™. All rights reserved. A Royal Touch of Nutrition.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#C49A42] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#C49A42]/40">•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#C49A42] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#C49A42]/40">•</span>
            <Link href="/shipping-policy" className="hover:text-[#C49A42] transition-colors">
              Shipping & Delivery
            </Link>
            <span className="text-[#C49A42]/40">•</span>
            <Link href="/refund-policy" className="hover:text-[#C49A42] transition-colors">
              Return & Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
