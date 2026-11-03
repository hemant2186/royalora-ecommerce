import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const QualitySection: React.FC = () => {
  const ingredients = [
    {
      title: 'California & Kashmir Almonds',
      role: 'Heart of Vitality',
      desc: 'Selected whole almond kernels, prized for high vitamin E and monounsaturated fatty acids.',
      image: 'https://images.unsplash.com/photo-1508061252445-5350f3ab0a55?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Coastal Mangalore Cashews',
      role: 'Creamy Velveteen Base',
      desc: 'Naturally buttery ivory kernels with zero added starches, offering plant-based iron and zinc.',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Emerald Green Pistachios',
      role: 'Antioxidant Radiance',
      desc: 'Naturally vibrant kernels loaded with lutein, zeaxanthin, and potassium, free of synthetic food color.',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F4EBDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Ingredients of Distinction"
          title="Nature's Goodness. Royal Standards."
          subtitle="We believe royal nutrition requires nothing more and nothing less than 100% unadulterated whole nuts, processed with utmost care."
        />

        {/* 3 Ingredient Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ingredients.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl overflow-hidden border border-[#C49A42]/30 shadow-royal hover:shadow-royal-gold transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6EF]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#321B11]/85 backdrop-blur-sm text-[#E9D9BA] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded border border-[#C49A42]/30">
                  {item.role}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#321B11] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A685A] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-[#F4EBDD] text-[11px] text-[#321B11]/90">
                  <div className="flex items-center gap-1.5 text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Zero Preservatives &amp; Fillers</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Cold-Temperature Micro-Pulverized</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards Banner */}
        <div className="bg-[#FAF6EF] rounded-2xl p-8 sm:p-10 border border-[#C49A42]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#E9D9BA] flex items-center justify-center text-[#C49A42] flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#321B11] font-medium">
                Our Non-Negotiable Standards of Purity
              </h4>
              <p className="text-xs text-[#7A685A] mt-1 max-w-xl">
                Certified batch laboratory testing, moisture control below critical thresholds, and food-grade barrier packaging to prevent oxidation.
              </p>
            </div>
          </div>

          <Link
            href="/our-quality"
            className="flex-shrink-0 px-6 py-3 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded transition-all flex items-center gap-2 group"
          >
            <span>Read Quality Protocol</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
