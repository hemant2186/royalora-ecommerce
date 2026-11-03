'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ChevronRight, X } from 'lucide-react';

const MESSAGES = [
  'A Royal Touch of Nutrition — Handcrafted Dry Fruits Powder',
  'Complimentary Express Shipping Across India on Orders Above ₹999',
  'Use Code "ROYAL10" for 10% Off Your First Royal Selection',
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-[#321B11] text-[#E9D9BA] text-[11px] sm:text-xs py-2 px-4 transition-all border-b border-[#C49A42]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-1.5 text-[#C49A42]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wider uppercase font-medium text-[10px]">Royal Privileges</span>
        </div>

        <div className="flex-1 text-center font-medium tracking-wide flex items-center justify-center gap-2">
          <span className="transition-opacity duration-500 ease-in-out">
            {MESSAGES[index]}
          </span>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center text-[#C49A42] hover:text-white underline underline-offset-2 ml-2 text-[11px]"
          >
            Explore <ChevronRight className="w-3 h-3 ml-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-[11px] text-[#E9D9BA]/80">
            Care: care@royalora.com
          </span>
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="text-[#E9D9BA]/60 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
