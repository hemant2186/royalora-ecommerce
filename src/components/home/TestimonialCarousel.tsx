'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SAMPLE_REVIEWS } from '@/data/products';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export const TestimonialCarousel: React.FC = () => {
  const reviews = SAMPLE_REVIEWS.all || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? reviews.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF6EF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Voices"
          title="Words From Our Customers"
          subtitle="Real impressions from connoisseurs who have welcomed the royal touch of nutrition into their homes."
        />

        {/* Development Mode Notice as required by prompt */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-[#E9D9BA]/50 text-[#7A685A] text-[10px] uppercase tracking-wider rounded border border-[#C49A42]/30">
            [Development Mode: Verified sample reviews shown. Replace with live customer feedback prior to store launch]
          </span>
        </div>

        {/* Carousel Card */}
        {current && (
          <div className="relative bg-white rounded-2xl p-8 sm:p-12 shadow-royal border border-[#C49A42]/30 min-h-[300px] flex flex-col justify-between">
            <Quote className="w-12 h-12 text-[#C49A42]/20 absolute top-6 right-6" />

            <div>
              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-4 text-[#C49A42]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < current.rating ? 'fill-[#C49A42]' : 'fill-[#C49A42]/30'
                    }`}
                  />
                ))}
                <span className="text-xs font-bold text-[#321B11] ml-2">
                  5.0 / 5.0 Rating
                </span>
              </div>

              {/* Review Headline & Body */}
              <h3 className="font-serif text-lg sm:text-xl font-medium text-[#321B11] mb-3">
                &ldquo;{current.title}&rdquo;
              </h3>
              <p className="text-sm sm:text-base text-[#7A685A] leading-relaxed italic mb-6">
                &ldquo;{current.comment}&rdquo;
              </p>
            </div>

            {/* Author info & Navigation */}
            <div className="pt-6 border-t border-[#F4EBDD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-base font-semibold text-[#321B11]">
                    {current.author}
                  </h4>
                  {current.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified Patron
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#7A685A] mt-0.5">
                  Purchased: <strong className="text-[#321B11]">{current.productName}</strong> ({current.packPurchased}) • {current.date}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#C49A42]/40 bg-[#FAF6EF] hover:bg-[#C49A42] hover:text-[#321B11] text-[#321B11] flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-semibold text-[#321B11] px-2">
                  {currentIndex + 1} / {reviews.length}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#C49A42]/40 bg-[#FAF6EF] hover:bg-[#C49A42] hover:text-[#321B11] text-[#321B11] flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
