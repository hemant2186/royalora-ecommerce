import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Gem, ShieldCheck, HeartPulse, Crown } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Gem,
      title: 'Premium Ingredients',
      description: 'Carefully selected dry fruits sourced from reputable orchards, graded for supreme kernel size, natural oil density, and vibrant taste profile.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Focused',
      description: 'A dedicated commitment to consistent product quality through low-temperature milling, stringent hygiene protocols, and zero adulteration.',
    },
    {
      icon: HeartPulse,
      title: 'Nutrition Inspired',
      description: 'Bringing pure dry fruits into effortless everyday food experiences—from morning smoothies and lattes to rich festive confectionery.',
    },
    {
      icon: Crown,
      title: 'Royal Experience',
      description: 'From airtight luxury jar presentation to fast courier tracking and dedicated concierge service, every touchpoint honors our royal pledge.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Royal Distinction"
          title="Why Choose ROYALORA?"
          subtitle="Guided by uncompromising principles of purity, taste, and everyday nutrition."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 p-8 rounded-xl border border-[#C49A42]/20 hover:border-[#C49A42] hover:shadow-royal transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-[#E9D9BA]/50 border border-[#C49A42]/40 flex items-center justify-center text-[#C49A42] mb-6 group-hover:scale-110 group-hover:bg-[#C49A42] group-hover:text-[#321B11] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#321B11] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7A685A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
