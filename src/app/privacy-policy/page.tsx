import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Privacy Policy | ROYALORA',
  description: 'ROYALORA customer privacy, data protection, and cookie compliance protocols.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF6EF] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Legal & Compliance"
          title="Privacy Policy"
          subtitle="Last updated: November 2026. How ROYALORA protects and manages customer information."
        />

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#C49A42]/30 shadow-royal space-y-8 text-xs sm:text-sm text-[#7A685A] leading-relaxed">
          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              1. Introduction &amp; Commitment
            </h3>
            <p>
              At ROYALORA (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), protecting the privacy and personal integrity of our esteemed patrons is paramount. This Privacy Policy details how we collect, process, store, and safeguard your personal details when you visit, browse, or purchase through our website.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              2. Information We Collect
            </h3>
            <p>We may collect information when you interact with our platform:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Full name, billing and shipping address, email address, contact phone number.</li>
              <li><strong>Transaction Information:</strong> Order item history, payment confirmation tokens (we do not store raw credit card credentials or banking passwords; all payments are processed through secure PCI-DSS certified gateways such as Razorpay).</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and interaction metrics used to enhance platform speed and security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              3. Purpose of Processing
            </h3>
            <p>Your details are used strictly for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Processing, packaging, and dispatching your dry fruits powder orders.</li>
              <li>Sending automated courier tracking updates via SMS and email.</li>
              <li>Providing responsive customer support via our concierge desk.</li>
              <li>Sending optional newsletter tasting notes and royal privilege discounts (with your affirmative consent).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              4. Data Sharing &amp; Third Parties
            </h3>
            <p>
              We never sell, rent, or trade your personal data to advertisers. Data is shared exclusively with necessary operational partners:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Logistics and courier partners (e.g. BlueDart, Delhivery) for safe delivery.</li>
              <li>Payment gateways (e.g. Razorpay) for transaction settlement.</li>
              <li>Legal authorities only when mandated by prevailing Indian laws.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              5. Data Security &amp; Contact
            </h3>
            <p>
              We implement industry-standard 256-bit SSL encryption across our entire application. For any questions, data modification requests, or privacy concerns, contact our Grievance Officer at <a href="mailto:care@royalora.com" className="text-[#C49A42] underline">care@royalora.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
