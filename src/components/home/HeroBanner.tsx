'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { GoldDivider } from '../ui/GoldDivider';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6EF] via-[#F8F1E5] to-[#F4EBDD] py-16 sm:py-24 lg:py-28 border-b border-[#C49A42]/20">
      {/* Subtle luxury ambient pattern / radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#E9D9BA]/40 via-[#C49A42]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#C49A42]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-[#321B11]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Royal Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9D9BA]/60 border border-[#C49A42]/40 text-[#321B11] text-xs uppercase tracking-[0.2em] font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C49A42]" />
              <span>A Royal Touch of Nutrition</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#321B11] font-normal tracking-tight leading-[1.15] mb-6">
              Discover the <br className="hidden sm:inline" />
              <span className="relative inline-block font-medium">
                Royal Taste
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#C49A42] via-[#E9D9BA] to-[#C49A42]/40" />
              </span>{' '}
              of Nutrition.
            </h1>

            <GoldDivider className="lg:mr-auto lg:ml-0 mx-auto max-w-sm mb-6" />

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#7A685A] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Experience the goodness of premium dry fruits with <strong>ROYALORA</strong>. Carefully crafted nutrition, inspired by nature and presented with a royal touch.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-[0.2em] font-semibold rounded shadow-royal transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#321B11]/80 hover:border-[#C49A42] text-[#321B11] hover:text-[#C49A42] hover:bg-[#E9D9BA]/30 text-xs uppercase tracking-[0.2em] font-semibold rounded transition-all duration-300 text-center"
              >
                Explore Our Story
              </Link>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#C49A42]/20 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E9D9BA]/50 flex items-center justify-center text-[#C49A42] flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#321B11] leading-tight">100% Pure</h4>
                  <p className="text-[10px] text-[#7A685A]">Zero Additives</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E9D9BA]/50 flex items-center justify-center text-[#C49A42] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#321B11] leading-tight">Cold-Milled</h4>
                  <p className="text-[10px] text-[#7A685A]">Preserved Oils</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E9D9BA]/50 flex items-center justify-center text-[#C49A42] flex-shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#321B11] leading-tight">Royal Grade</h4>
                  <p className="text-[10px] text-[#7A685A]">Hand-Selected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Official Logo & Products Mockup */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Framed luxury composition */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C49A42]/50 bg-gradient-to-b from-white via-[#FAF6EF] to-[#F4EBDD] p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508061252445-5350f3ab0a55?auto=format&fit=crop&w=1200&q=85"
                  alt="ROYALORA Premium Dry Fruits Powder and Whole Nuts"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#321B11]/90 via-[#321B11]/25 to-transparent" />

                {/* Floating Official ROYALORA Emblem Badge inside hero */}
                <div className="absolute top-4 inset-x-4 flex justify-center">
                  <div className="bg-[#FAF6EF]/95 backdrop-blur-md px-5 py-2 rounded-xl shadow-lg border border-[#C49A42]/40 flex items-center gap-3">
                    <div className="relative h-9 w-28">
                      <Image
                        src="/images/royalora-logo.png"
                        alt="ROYALORA"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 inset-x-5 text-center text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E9D9BA] font-semibold block mb-1">
                    Signature Artisanal Range
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                    Almond • Cashew • Pistachio
                  </h3>
                  <p className="text-xs text-[#E9D9BA]/90 mt-1">
                    Micro-milled to velvety perfection for royal wellness
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Floating Pill */}
            <div className="absolute -bottom-4 bg-white/95 backdrop-blur-md border border-[#C49A42] px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2.5 text-xs text-[#321B11] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Free Delivery in India on ₹999+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
