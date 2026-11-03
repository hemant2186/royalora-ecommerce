import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Truck, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Shipping & Delivery Policy | ROYALORA',
  description: 'Learn about ROYALORA courier partners, dispatch timelines, free shipping thresholds, and tracking.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-[#FAF6EF] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Logistics & Dispatch"
          title="Shipping & Delivery Policy"
          subtitle="How we securely transport royal nutrition to your doorstep across India."
        />

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#C49A42]/30 shadow-royal space-y-8 text-xs sm:text-sm text-[#7A685A] leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-[#F4EBDD]">
            <div className="p-4 bg-[#FAF6EF] rounded-xl border border-[#C49A42]/20">
              <Truck className="w-5 h-5 text-[#C49A42] mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#321B11] mb-1">
                Free Express Delivery
              </h4>
              <p className="text-xs">Complimentary on all orders above ₹999 across India.</p>
            </div>
            <div className="p-4 bg-[#FAF6EF] rounded-xl border border-[#C49A42]/20">
              <Clock className="w-5 h-5 text-[#C49A42] mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#321B11] mb-1">
                24-48 Hour Dispatch
              </h4>
              <p className="text-xs">Freshly milled and dispatched in tamper-proof seals.</p>
            </div>
          </div>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              1. Delivery Coverage
            </h3>
            <p>
              ROYALORA provides express door-to-door delivery across serviceable pin codes in India through our premier logistics networks including BlueDart, Delhivery, and DTDC.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              2. Delivery Timelines
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Metro Cities (Mumbai, Delhi NCR, Bengaluru, Chennai, Kolkata, Hyderabad, Pune):</strong> 2 to 4 business days from dispatch date.</li>
              <li><strong>Tier-2 &amp; Tier-3 Cities:</strong> 3 to 6 business days from dispatch date.</li>
              <li><strong>Remote &amp; North East Locations:</strong> 5 to 7 business days.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              3. Shipping Charges
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Orders ₹999 &amp; Above:</strong> Free Express Shipping.</li>
              <li><strong>Orders Below ₹999:</strong> Flat ₹70 handling and courier charge.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              4. Real-Time Tracking
            </h3>
            <p>
              Once your order has been packaged and handed over to our courier partners, an automated notification containing your airway bill (AWB) number and live tracking link will be sent to your registered email address and phone number.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
