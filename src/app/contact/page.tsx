import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { QuickContactSection } from '@/components/home/QuickContactSection';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Contact ROYALORA Concierge | A Royal Touch of Nutrition',
  description: 'Reach out to the ROYALORA concierge team for order support, chef collaborations, and corporate gifting inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-[#321B11] text-[#F8F1E5] text-center border-b-2 border-[#C49A42]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C49A42] block mb-2">
            Royal Concierge Desk
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-wide mb-3">
            At Your Service
          </h1>
          <p className="text-sm sm:text-base text-[#E9D9BA]/90 max-w-xl mx-auto leading-relaxed">
            We are honored to assist you with inquiries regarding product details, order tracking, corporate hampers, or culinary partnerships.
          </p>
        </div>
      </section>

      {/* Main Interactive Form & Details */}
      <QuickContactSection />

      {/* Regional Concierge Points */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#C49A42]/20 shadow-sm text-center">
            <Mail className="w-8 h-8 text-[#C49A42] mx-auto mb-3" />
            <h3 className="font-serif text-base font-semibold text-[#321B11] mb-1">
              General &amp; Order Support
            </h3>
            <p className="text-xs text-[#7A685A] mb-3">
              Fast email response within 24 business hours
            </p>
            <a
              href="mailto:care@royalora.com"
              className="text-xs font-semibold text-[#C49A42] hover:underline"
            >
              care@royalora.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C49A42]/20 shadow-sm text-center">
            <Phone className="w-8 h-8 text-[#C49A42] mx-auto mb-3" />
            <h3 className="font-serif text-base font-semibold text-[#321B11] mb-1">
              Direct Phone &amp; WhatsApp
            </h3>
            <p className="text-xs text-[#7A685A] mb-3">
              Mon - Sat &bull; 9:30 AM to 6:30 PM IST
            </p>
            <span className="text-xs font-semibold text-[#321B11]">
              +91 [Editable Business Contact]
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C49A42]/20 shadow-sm text-center">
            <MapPin className="w-8 h-8 text-[#C49A42] mx-auto mb-3" />
            <h3 className="font-serif text-base font-semibold text-[#321B11] mb-1">
              Registered Head Office
            </h3>
            <p className="text-xs text-[#7A685A] mb-3">
              ROYALORA Brand Facilities
            </p>
            <span className="text-xs text-[#7A685A]">
              [City, State, PIN, India — Editable Placeholder]
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
