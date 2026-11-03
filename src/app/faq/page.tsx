'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQS } from '@/data/faq';
import { ChevronDown, ChevronUp, HelpCircle, Mail, ArrowRight } from 'lucide-react';

export default function FAQPage() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Product & Quality', 'Usage & Recipes', 'Packaging & Storage', 'Orders & Shipping', 'Payments & Security', 'Allergen Advisory'];

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter(
    (f) => selectedCategory === 'all' || f.category === selectedCategory
  );

  return (
    <div className="bg-[#FAF6EF] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Help & Knowledge Base"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our dry fruits powders, quality assurances, culinary usage, and delivery protocols."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#321B11] text-[#E9D9BA] shadow-sm'
                  : 'bg-white text-[#7A685A] border border-[#C49A42]/20 hover:border-[#C49A42]'
              }`}
            >
              {cat === 'all' ? 'All Questions' : cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-[#C49A42]/25 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF6EF]/50 transition-colors"
                >
                  <span className="font-serif text-sm sm:text-base font-medium text-[#321B11]">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#E9D9BA]/50 flex items-center justify-center text-[#C49A42] flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#7A685A] leading-relaxed border-t border-[#F4EBDD] bg-[#FAF6EF]/30 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-[#C49A42] font-semibold">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-[#F8F1E5] rounded-2xl p-8 border border-[#C49A42]/30 shadow-royal text-center">
          <HelpCircle className="w-10 h-10 text-[#C49A42] mx-auto mb-3" />
          <h3 className="font-serif text-xl text-[#321B11] font-medium mb-1">
            Have a Specific Question?
          </h3>
          <p className="text-xs text-[#7A685A] max-w-md mx-auto mb-6">
            Our royal concierge team is glad to assist you regarding custom bulk orders, special festive packaging, or nutritional details.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-lg shadow-sm transition-all"
          >
            <Mail className="w-3.5 h-3.5" /> Contact Our Concierge Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
