import React from 'react';
import { HeroBanner } from '@/components/home/HeroBanner';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { BestSellers } from '@/components/home/BestSellers';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { BrandStorySection } from '@/components/home/BrandStorySection';
import { QualitySection } from '@/components/home/QualitySection';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { QuickContactSection } from '@/components/home/QuickContactSection';

export default function HomePage() {
  return (
    <>
      {/* SECTION 3: Hero Banner */}
      <HeroBanner />

      {/* SECTION 4: Shop Our Products */}
      <FeaturedCollection />

      {/* SECTION 5: Best Sellers */}
      <BestSellers />

      {/* SECTION 6: Why Choose ROYALORA? */}
      <WhyChooseUs />

      {/* SECTION 7: Our Brand Story */}
      <BrandStorySection />

      {/* SECTION 8: Quality & Ingredients */}
      <QualitySection />

      {/* SECTION 9: Customer Reviews */}
      <TestimonialCarousel />

      {/* SECTION 10: Newsletter */}
      <NewsletterSection />

      {/* SECTION 11: Contact Us */}
      <QuickContactSection />
    </>
  );
}
