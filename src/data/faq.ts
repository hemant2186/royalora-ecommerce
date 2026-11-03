export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Product & Quality',
    question: 'Are ROYALORA dry fruit powders 100% natural with no additives?',
    answer: 'Yes, absolutely. Every ROYALORA product contains 100% pure single-origin or carefully graded whole nuts with zero added sugars, preservatives, starches, artificial flavorings, or chemical free-flowing agents. What you taste is pure, unadulterated nature.'
  },
  {
    id: 'faq-2',
    category: 'Product & Quality',
    question: 'How are the nuts ground without losing their healthy natural oils?',
    answer: 'We utilize cold-temperature micro-milling and precision stone pulverization. High-speed commercial blenders heat up the nuts and extract their oils prematurely into a paste; our gradual low-temperature process retains the natural volatile aromas, essential omega fats, and micronutrients intact.'
  },
  {
    id: 'faq-3',
    category: 'Usage & Recipes',
    question: 'How do I incorporate ROYALORA powders into my daily diet?',
    answer: 'Our powders are exceptionally versatile: stir 2 tablespoons into warm morning milk or saffron water, blend into protein shakes and smoothies, fold into pancake or cake batters, whisk into rich curries and gravies, or dust over yogurt and desserts.'
  },
  {
    id: 'faq-4',
    category: 'Packaging & Storage',
    question: 'What is the recommended storage procedure and shelf life?',
    answer: 'Unopened packages have a recommended shelf life of 9 months from packaging date when kept in a cool, dry pantry away from direct sunlight. Once opened, we strongly recommend transferring to an airtight container or keeping refrigerated, and consuming within 60 to 90 days for peak aromatic bouquet.'
  },
  {
    id: 'faq-5',
    category: 'Orders & Shipping',
    question: 'How long does shipping take across India?',
    answer: 'Orders are dispatched within 24 to 48 business hours from our facility via express courier partners (BlueDart, Delhivery, DTDC). Metro deliveries typically arrive within 2-4 business days, while rest of India arrives within 4-6 business days. Tracking links are sent via SMS and email upon dispatch.'
  },
  {
    id: 'faq-6',
    category: 'Orders & Shipping',
    question: 'Is free shipping available?',
    answer: 'Yes! We offer complimentary express delivery across India on all orders above ₹999. Standard shipping of ₹70 applies on orders below ₹999.'
  },
  {
    id: 'faq-7',
    category: 'Payments & Security',
    question: 'What payment modes are accepted?',
    answer: 'We support all major payment methods including UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards (Visa, Mastercard, RuPay, Amex), Net Banking across 50+ banks, and Cash on Delivery (COD) for serviceable pin codes.'
  },
  {
    id: 'faq-8',
    category: 'Allergen Advisory',
    question: 'Are your products safe for people with tree nut allergies?',
    answer: 'No. Our products are made directly from tree nuts (Almonds, Cashews, Pistachios) and are processed in a dedicated nut facility. Individuals with tree nut allergies must avoid consuming these products.'
  }
];
