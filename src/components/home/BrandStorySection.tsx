import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GoldDivider } from '../ui/GoldDivider';

export const BrandStorySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#321B11] text-[#F8F1E5] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C49A42]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#C49A42]/40 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=80"
                alt="Artisanal nut powder and pure ingredients"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#321B11]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 bg-[#20110A]/85 backdrop-blur-sm p-4 rounded-xl border border-[#C49A42]/30 text-center">
                <p className="font-serif italic text-sm text-[#E9D9BA]">
                  &quot;Nutrition inspired by nature, refined for royalty.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Text Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C49A42] mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Our Brand Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-[#F8F1E5] leading-tight mb-4">
              A Royal Touch of Nutrition.
            </h2>
            <GoldDivider className="lg:mr-auto lg:ml-0 mx-auto max-w-sm mb-6" />

            <div className="space-y-4 text-sm sm:text-base text-[#E9D9BA]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                In the royal courts of history, dry fruits were celebrated not merely as sustenance, but as treasures of strength, longevity, and indulgence. Carefully selected almonds, rich cashews, and aromatic pistachios adorned royal banquets and energized royalty across generations.
              </p>
              <p>
                <strong>ROYALORA</strong> was envisioned to rekindle this regal heritage for the modern lifestyle. In today&apos;s fast-paced world, preparing and grinding whole nuts every morning can be cumbersome. We bridge that gap by offering 100% natural, micro-pulverized dry fruit powders that retain their wholesome oils, delicate aromas, and natural nutrients.
              </p>
              <p className="text-xs italic text-[#E9D9BA]/70">
                [Brand History &amp; Founder Information is kept editable for brand release]
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C49A42] hover:bg-[#E9D9BA] text-[#321B11] text-xs uppercase tracking-[0.2em] font-semibold rounded shadow-lg transition-all duration-300 group"
              >
                <span>Learn More About Our Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
