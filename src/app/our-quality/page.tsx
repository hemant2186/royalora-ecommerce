import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight, ThermometerSnowflake, Droplets, PackageCheck } from 'lucide-react';

export const metadata = {
  title: 'Our Quality Standards | ROYALORA',
  description: 'Learn about ROYALORA’s low-temperature micro-milling, single-origin sourcing, and zero-adulteration quality assurance.',
};

export default function OurQualityPage() {
  const steps = [
    {
      num: '01',
      title: 'Graded Kernel Selection',
      desc: 'We start exclusively with hand-inspected, whole jumbo nut kernels. Kernels with broken skins, uneven roasting, or signs of rancidity are rejected.',
      icon: CheckCircle2,
    },
    {
      num: '02',
      title: 'Cryogenic & Low-Temp Milling',
      desc: 'Conventional grinders generate extreme heat exceeding 60°C, stripping aromatic monoterpenes and damaging delicate omega-3 and omega-6 fatty acids. We mill at controlled sub-temperatures to safeguard nutrients.',
      icon: ThermometerSnowflake,
    },
    {
      num: '03',
      title: 'Precision Micro-Sifting',
      desc: 'Our powders undergo micron-grade mechanical sifting to guarantee a velvety consistency that dissolves cleanly in warm liquids without sediment grittiness.',
      icon: Droplets,
    },
    {
      num: '04',
      title: 'Hermetic Barrier Packaging',
      desc: 'Immediately following pulverization, powders are sealed in moisture-impermeable, oxygen-barrier jars and pouches to prevent lipid oxidation and maintain fresh-from-the-orchard aromas.',
      icon: PackageCheck,
    },
  ];

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Header */}
      <section className="py-20 sm:py-24 bg-[#321B11] text-[#F8F1E5] text-center border-b-2 border-[#C49A42]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.3em] font-semibold text-[#C49A42] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Purity &amp; Science
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-wide mb-4">
            Nature&apos;s Goodness. Royal Standards.
          </h1>
          <GoldDivider className="mx-auto max-w-sm mb-6" />
          <p className="text-sm sm:text-base text-[#E9D9BA]/90 max-w-2xl mx-auto leading-relaxed">
            Every tablespoon of ROYALORA dry fruits powder is a testament to disciplined sourcing, advanced milling science, and zero tolerance for chemical adulterants.
          </p>
        </div>
      </section>

      {/* Quality Process Steps */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Milling Methodology"
          title="From Raw Harvest to Royal Velvet"
          subtitle="Explore the precision engineering behind our ultra-fine dry fruit powders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#C49A42]/30 shadow-royal flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#C49A42]/50">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#E9D9BA]/50 flex items-center justify-center text-[#C49A42]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#321B11] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#7A685A] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: ROYALORA vs Conventional Market Powders */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C49A42]/30 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#321B11] font-medium">
              The ROYALORA Purity Index
            </h3>
            <p className="text-xs text-[#7A685A] mt-1">
              How our pure nutrition compares to generic supermarket powders
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b-2 border-[#C49A42]/30 bg-[#F8F1E5] text-[#321B11] uppercase tracking-wider font-semibold text-[11px]">
                  <th className="py-4 px-4 sm:px-6">Quality Dimension</th>
                  <th className="py-4 px-4 sm:px-6 text-[#C49A42] bg-[#E9D9BA]/30 font-bold">
                    ROYALORA™ Dry Fruits Powder
                  </th>
                  <th className="py-4 px-4 sm:px-6 text-[#7A685A]">Generic Market Powders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4EBDD]">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#321B11]">Ingredients Composition</td>
                  <td className="py-4 px-4 sm:px-6 bg-[#E9D9BA]/10 font-bold text-[#321B11]">
                    100% Pure Whole Nuts Only
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#7A685A]">Often cut with starch, flour &amp; milk solids</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#321B11]">Added Sugar &amp; Flavors</td>
                  <td className="py-4 px-4 sm:px-6 bg-[#E9D9BA]/10 font-bold text-emerald-800">
                    0% Added Sugar • 0% Artificial Flavors
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#7A685A]">Up to 40-50% refined sucrose or maltodextrin</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#321B11]">Milling Temperature</td>
                  <td className="py-4 px-4 sm:px-6 bg-[#E9D9BA]/10 font-bold text-[#321B11]">
                    Controlled Low-Temperature Micro-Milling
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#7A685A]">High-speed blade heat damaging natural oils</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#321B11]">Natural Oil Retention</td>
                  <td className="py-4 px-4 sm:px-6 bg-[#E9D9BA]/10 font-bold text-emerald-800">
                    Full Vital Lipid &amp; Vitamin E Preservation
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#7A685A]">Often defatted or dried meal residue</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#321B11]">Solubility &amp; Mouthfeel</td>
                  <td className="py-4 px-4 sm:px-6 bg-[#E9D9BA]/10 font-bold text-[#321B11]">
                    Velvety, smooth micro-fine blend
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#7A685A]">Gritty, sediment-heavy mouthfeel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h3 className="font-serif text-2xl text-[#321B11] font-medium mb-3">
          Ready to Taste the Royal Difference?
        </h3>
        <p className="text-xs sm:text-sm text-[#7A685A] mb-6">
          Explore Almond, Cashew, and Pistachio creations prepared with unyielding devotion to purity.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-xl shadow-md transition-all"
        >
          <span>Shop All Powders</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
