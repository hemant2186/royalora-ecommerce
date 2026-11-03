import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { Sparkles, Crown, ShieldCheck, HeartHandshake, ArrowRight, Award } from 'lucide-react';

export const metadata = {
  title: 'About ROYALORA | A Royal Touch of Nutrition',
  description: 'Discover the philosophy, culinary heritage, and micro-milling standards behind ROYALORA premium dry fruits powders.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#321B11] text-[#F8F1E5] overflow-hidden border-b-2 border-[#C49A42]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C49A42]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.3em] font-semibold text-[#C49A42] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Our Heritage &amp; Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide mb-4 text-[#F8F1E5]">
            A Royal Touch of Nutrition.
          </h1>
          <GoldDivider className="mx-auto max-w-sm mb-6" />
          <p className="text-base sm:text-lg text-[#E9D9BA]/90 leading-relaxed max-w-2xl mx-auto">
            ROYALORA was established with a singular vision: to bring the regal nourishment of whole, micro-pulverized dry fruits into modern daily rituals.
          </p>
        </div>
      </section>

      {/* Brand Vision Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#C49A42]/30 shadow-2xl bg-[#F4EBDD]">
              <Image
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1200&q=85"
                alt="ROYALORA Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C49A42]">
              The ROYALORA Essence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#321B11] font-normal tracking-tight leading-tight">
              Honoring Nature&apos;s Finest Treasures
            </h2>
            <div className="space-y-4 text-sm text-[#7A685A] leading-relaxed">
              <p>
                In the royal courts of antiquity, nuts were revered as divine gifts of vitality, longevity, and indulgence. Carefully roasted, sweetened, and powdered, they formed the bedrock of royal stamina and culinary opulence.
              </p>
              <p>
                Today, however, the modern consumer is often forced to choose between cumbersome whole-nut soaking and grinding at home, or supermarket powders laden with cornstarch, maltodextrin, and artificial flavoring agents.
              </p>
              <p>
                <strong>ROYALORA</strong> refuses both compromises. We offer only 100% pure Almond, Cashew, and Pistachio powders, micro-milled at cold temperatures to protect their delicate essential oils, authentic fragrance, and micronutrients.
              </p>
            </div>

            <div className="p-4 bg-[#E9D9BA]/40 rounded-xl border border-[#C49A42]/30 text-xs text-[#321B11]">
              <p className="font-serif font-bold text-sm text-[#321B11] mb-1">
                Editable Brand Foundation Note
              </p>
              <p className="text-[#7A685A]">
                Founding story, founders&apos; background, and regional manufacturing certifications can be seamlessly updated via our structured data system as commercial operations expand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values 4 Pillars */}
      <section className="py-20 bg-[#F8F1E5] border-t border-b border-[#C49A42]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Values"
            title="The Four Royal Pillars"
            subtitle="The uncompromising standards that shape every grain of powder bearing the ROYALORA crown."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Crown,
                title: 'Regal Excellence',
                desc: 'Only superior grade nuts qualify for our pulverization processes. No broken discards or second-grade kernels.',
              },
              {
                icon: ShieldCheck,
                title: 'Unadulterated Purity',
                desc: 'Strictly 0% added sugar, 0% starches, 0% preservatives, and 0% synthetic anti-caking agents.',
              },
              {
                icon: Award,
                title: 'Cold Micro-Milling',
                desc: 'Low-speed, low-temperature milling ensures delicate natural omega fatty acids and vitamin E remain intact.',
              },
              {
                icon: HeartHandshake,
                title: 'Everyday Versatility',
                desc: 'Engineered for seamless dissolution in breakfast milk, lattes, protein shakes, or royal gourmet confectionery.',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-[#C49A42]/20 shadow-sm text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E9D9BA]/50 flex items-center justify-center text-[#C49A42] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#321B11] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#7A685A] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Invitation CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#321B11] font-normal mb-3">
          Experience the Royal Difference Today
        </h2>
        <GoldDivider className="mx-auto max-w-xs mb-6" />
        <p className="text-sm text-[#7A685A] max-w-xl mx-auto leading-relaxed mb-8">
          Elevate your daily milk, morning oatmeal, and artisanal desserts with the rich touch of pure dry fruits powder.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-xl shadow-royal transition-all duration-300"
        >
          <span>Shop The Royal Collection</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
