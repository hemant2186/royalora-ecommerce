import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RotateCcw, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Return & Refund Policy | ROYALORA',
  description: 'Understand ROYALORA return terms, damaged packaging replacements, and refund protocols.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#FAF6EF] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patron Assurance"
          title="Return & Refund Policy"
          subtitle="Our commitment to complete satisfaction and food safety assurance."
        />

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#C49A42]/30 shadow-royal space-y-8 text-xs sm:text-sm text-[#7A685A] leading-relaxed">
          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              1. Food Safety &amp; Return Guidelines
            </h3>
            <p>
              Due to strict food hygiene and safety standards mandated for consumable nutrition products, opened jars and powders cannot be returned or resold once the factory tamper-proof seal has been broken.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              2. Damaged or Defective Consignments
            </h3>
            <p>
              We inspect every package before dispatch. However, if your order arrives with broken seals, damaged transit packaging, or an incorrect item, we will immediately arrange a complimentary replacement or 100% refund.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Notify our concierge desk within <strong>48 hours</strong> of courier delivery.</li>
              <li>Provide clear photographs or an unboxing video of the outer shipping box and damaged container.</li>
              <li>Email the details to <a href="mailto:care@royalora.com" className="text-[#C49A42] underline">care@royalora.com</a> along with your Order Reference ID.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              3. Refund Processing
            </h3>
            <p>
              Once your claim is validated by our quality desk, approved refunds will be processed to the original payment source (UPI, Credit/Debit Card, or Net Banking) within <strong>5 to 7 working days</strong> according to your bank&apos;s settlement schedule.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              4. Cancellations
            </h3>
            <p>
              Orders may be cancelled free of charge before the dispatch status updates to &quot;In Transit&quot;. Once handed to the express courier partner, shipments cannot be cancelled in route.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
