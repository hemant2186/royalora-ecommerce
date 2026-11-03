import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Terms & Conditions | ROYALORA',
  description: 'Terms of service and purchasing conditions for ROYALORA e-commerce website.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#FAF6EF] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Legal & Governance"
          title="Terms & Conditions"
          subtitle="Please review these terms governing your patronage of the ROYALORA brand platform."
        />

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#C49A42]/30 shadow-royal space-y-8 text-xs sm:text-sm text-[#7A685A] leading-relaxed">
          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing, browsing, or purchasing products from the ROYALORA website, you agree to be bound by these Terms and Conditions. If you do not accept these terms, please refrain from using our e-commerce platform.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              2. Product Descriptions &amp; Pricing
            </h3>
            <p>
              ROYALORA strives to provide accurate descriptions, high-resolution imagery, and verified ingredient specifications for our Almond, Cashew, and Pistachio powders. All prices are listed in Indian Rupees (INR) and are inclusive of applicable goods and services taxes (GST). We reserve the right to correct typographical pricing errors before order fulfillment.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              3. Dietary and Allergen Notice
            </h3>
            <p>
              All products manufactured and sold by ROYALORA are made from 100% pure tree nuts (Almonds, Cashews, Pistachios) and are processed in a dedicated nut facility. It is the responsibility of the purchaser to ensure that neither they nor any consumer of the product has nut allergies. ROYALORA disclaims liability for allergic reactions arising from consumption of known tree nut products.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              4. Intellectual Property
            </h3>
            <p>
              The ROYALORA wordmark, logo, crown emblem, taglines, visual layout, and product photography are the exclusive intellectual property of ROYALORA. Unauthorized reproduction, scraping, or commercial exploitation is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#321B11]">
              5. Governing Law &amp; Jurisdiction
            </h3>
            <p>
              These terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with orders or services shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
