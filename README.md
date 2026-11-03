# ROYALORA — A Royal Touch of Nutrition
### Premium Luxury E-Commerce Website for Artisanal Dry Fruits Powder

![ROYALORA Banner](/public/images/royalora-logo.png)

> **"Experience the goodness of premium dry fruits with ROYALORA. Carefully crafted nutrition, inspired by nature and presented with a royal touch."**

---

## 1. Brand Identity & Visual Design System

ROYALORA is positioned as an award-winning, royal, healthy, natural, trustworthy luxury D2C brand specializing in micro-pulverized, single-origin dry fruit powders:

* **Royal Gold**: `#C49A42` (Warm, regal accent detailing, active buttons, crowns, and borders)
* **Deep Brown**: `#321B11` / `#20110A` (Rich aristocratic contrast, dark footer, primary buttons)
* **Cream**: `#F8F1E5` (Warm luxury backdrop, navbar background)
* **Soft Champagne**: `#E9D9BA` (Card borders, dividers, subtle pill badges)
* **Light Beige**: `#F4EBDD` (Editorial section contrast, thumbnail borders)
* **Parchment**: `#FAF6EF` (Clean, spacious page background)
* **Typography**:
  - **Headings**: `Playfair Display` serif font with delicate gold dividers and royal crests.
  - **Body**: `Plus Jakarta Sans` clean modern sans-serif optimized for mobile-first legibility.

---

## 2. Implemented Pages & Architecture

All pages share the unified luxury design system, responsive announcement bar, sticky navigation, slide-over royal cart drawer, wishlist context, and footer:

| Route | Page Name | Key Features & Modules |
| :--- | :--- | :--- |
| `/` | **Homepage** | All 12 master sections (Announcement Bar, Sticky Header, Hero Banner, Royal Collection 3-Card Showcase, Best Sellers, Why Choose Us, Brand Story, Quality & Ingredients, Testimonial Carousel, Newsletter with Consent, Concierge Quick Contact, Footer). |
| `/shop` | **Shop All Products** | Dynamic filtering (All, Single Dry Fruit Powders, Luxury Gift Sets), instant search input, price/rating sorting, active count, reset triggers, pack-size selectors, quick view modal. |
| `/product/[slug]` | **Product Detail Pages** | High-res gallery with thumbnail previews, title, subtitle, live pack-size selector (250g, 500g, 1kg), quantity adjuster, Add to Cart, Buy Now, interactive tabs (Culinary & Benefits, Nutritional Fact Table per 100g, Storage & Allergens, Reviews), Related Products. |
| `/about` | **About ROYALORA** | Editorial brand heritage, historical royal court inspiration, our four royal pillars, transparent editable founder placeholders. |
| `/our-quality` | **Quality & Standards** | 4-step low-temperature micro-milling methodology, nutrient preservation, comparative purity index against generic supermarket powders. |
| `/faq` | **Nutritional & Order FAQ** | Categorized interactive accordions addressing cold-milling, recipes, shelf-life, allergen advisories, courier shipping, and security. |
| `/cart` | **Shopping Cart Page** | Free shipping progress bar (threshold ₹999), quantity adjustment, line removal, coupon codes (`ROYAL10`, `FIRST15`), order gifting notes, live totals. |
| `/checkout` | **Checkout Flow** | Delivery address form, 6-digit PIN validation, GSTIN field, Payment Gateway selection (UPI, Credit/Debit Card, Net Banking, COD), sandbox test mode notice, order placement. |
| `/order-success/[id]` | **Order Confirmation** | Dynamic consignment receipt, order reference ID, delivery timeframe, customer address, printable invoice button, link back to shop. |
| `/wishlist` | **Patron Wishlist** | Persistent saved items, one-click add to cart, empty state curation. |
| `/privacy-policy` | **Privacy Policy** | Compliant privacy notice detailing customer data handling, 256-bit SSL encryption, and grievance officer email. |
| `/terms-and-conditions`| **Terms & Conditions** | Transparent purchasing rules, allergen disclaimers, IP protection, and governing laws. |
| `/shipping-policy` | **Shipping & Delivery** | Pan-India courier guidelines, metro 2-4 day timelines, express handling, free delivery over ₹999. |
| `/refund-policy` | **Return & Refund** | Strict consumable food safety hygiene protocols, damaged consignment replacement instructions, refund timelines. |
| `/api/razorpay` | **Payment Gateway API** | Server-side endpoint generating Razorpay orders with paise conversion, secure secret isolation, and sandbox simulation. |

---

## 3. Project Directory Structure

```
Client/
├── public/
│   └── images/
│       └── royalora-logo.png      # Official ROYALORA 3D gold & brown logo
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with fonts, cart/wishlist context, nav & footer
│   │   ├── page.tsx               # Complete 12-section luxury homepage
│   │   ├── globals.css            # Tailwind directives, custom scrollbars, animations
│   │   ├── robots.ts              # Search engine crawler instructions
│   │   ├── sitemap.ts             # Dynamic XML sitemap generator
│   │   ├── about/page.tsx         # Brand philosophy & story
│   │   ├── our-quality/page.tsx   # Milling science & purity standards
│   │   ├── shop/page.tsx          # Catalog with filters, search, and sorting
│   │   ├── product/[slug]/page.tsx# Comprehensive product detail page template
│   │   ├── cart/page.tsx          # Dedicated shopping cart page
│   │   ├── checkout/page.tsx      # Multi-method checkout with Indian Rupees & GST
│   │   ├── order-success/[id]/page.tsx # Order confirmation receipt & invoice printing
│   │   ├── wishlist/page.tsx      # Saved products page
│   │   ├── contact/page.tsx       # Concierge contact desk
│   │   ├── faq/page.tsx           # Categorized interactive FAQ
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-and-conditions/page.tsx
│   │   ├── shipping-policy/page.tsx
│   │   ├── refund-policy/page.tsx
│   │   └── api/
│   │       └── razorpay/route.ts  # Secure Razorpay backend endpoint
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── Navbar.tsx         # Sticky nav with logo, mobile menu, search popup
│   │   │   └── AnnouncementBar.tsx# Auto-cycling top announcement bar
│   │   ├── footer/
│   │   │   └── Footer.tsx         # Deep brown luxury footer with newsletter & policies
│   │   ├── cart/
│   │   │   ├── CartContext.tsx    # Reactive state & localStorage cart synchronization
│   │   │   └── CartDrawer.tsx     # Slide-over cart with coupon code & free shipping bar
│   │   ├── wishlist/
│   │   │   └── WishlistContext.tsx# Persistent customer wishlist
│   │   ├── product/
│   │   │   ├── ProductCard.tsx    # Reusable luxury product card with pack selector
│   │   │   └── QuickViewModal.tsx # Fast product preview overlay
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx     # Breathtaking luxury hero section
│   │   │   ├── FeaturedCollection.tsx # 3-card signature powder showcase
│   │   │   ├── BestSellers.tsx    # Customer favorites grid
│   │   │   ├── WhyChooseUs.tsx    # 4 royal feature pillars
│   │   │   ├── BrandStorySection.tsx # Editorial brand introduction
│   │   │   ├── QualitySection.tsx # Raw harvest ingredients & purity standards
│   │   │   ├── TestimonialCarousel.tsx # Patron review showcase
│   │   │   ├── NewsletterSection.tsx # Family subscription with privacy consent
│   │   │   └── QuickContactSection.tsx # Concierge desk inquiry form
│   │   └── ui/
│   │       ├── SectionHeading.tsx # Serif title, eyebrow, and gold divider
│   │       └── GoldDivider.tsx    # Crest-accented royal gold divider line
│   ├── data/
│   │   ├── products.ts            # Detailed product catalog (Almond, Cashew, Pista, Trio Box)
│   │   └── faq.ts                 # Categorized FAQ data
│   └── types/
│       ├── product.ts             # TypeScript definitions for products, reviews, nutrition
│       └── cart.ts                # TypeScript definitions for cart, order, and checkout
├── .env.example                   # Environment variables template
├── .env.example                   # Safe environment variable template
├── tailwind.config.ts             # Royalora gold, brown, cream, champagne palette
├── tsconfig.json                  # Strict TypeScript configuration
└── package.json
```

---

## 4. Setup & Running Instructions

### Prerequisites
* Node.js v18.0+ or v20.0+ (Tested on Node v24.14.0)
* npm, pnpm, or bun

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in Development Mode
```bash
npm run dev
```
Open your browser at [http://localhost:3000](http://localhost:3000) to view the live website.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 5. Environment Variables

Copy `.env.example` to `.env.local` for local development. The checked-in
example contains placeholders only. Never commit `.env.local` or any other
real environment file.

The current checkout route runs in simulated demo mode with placeholder
Razorpay values. Live payments are not configured or operational in this
repository. Configure real credentials only in the deployment environment
after completing the required payment integration and verification work.

## 6. Payment Gateway Integration (Optional)

### Sandbox / Test Mode (Default)
The checkout route includes a simulated demo response for review. It does not
process real transactions.

### Transitioning to Live Payments
1. Sign up for a merchant account at [https://dashboard.razorpay.com](https://dashboard.razorpay.com).
2. Generate API Keys in **Settings > API Keys**.
3. Add your credentials to your server environment or `.env.local`:
   ```bash
   RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
   RAZORPAY_KEY_SECRET=your_live_secret_key
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
   ```
4. Load the Razorpay Checkout SDK script in `checkout/page.tsx` for client-side popups, and verify transaction signatures server-side via `api/razorpay/verify`.

> **Security Rule**: API Secret keys are strictly handled inside server API routes (`src/app/api/razorpay/route.ts`) and are never exposed to client-side bundles.

---

## 7. Connecting a Production Backend (Supabase / PostgreSQL)

Currently, the product catalog is structured in `src/data/products.ts` for instant zero-dependency rendering, and customer orders are securely synchronized to client storage.

To connect Supabase:
1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL schema to create `products`, `orders`, and `reviews` tables:
   ```sql
   CREATE TABLE products (
     id TEXT PRIMARY KEY,
     slug TEXT UNIQUE NOT NULL,
     name TEXT NOT NULL,
     subtitle TEXT,
     category TEXT,
     short_description TEXT,
     full_description TEXT,
     images JSONB,
     pack_options JSONB,
     nutrition_facts JSONB,
     rating NUMERIC DEFAULT 5.0
   );
   ```
3. Set your environment variables:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Fetch dynamic products directly inside Next.js Server Components.

---

## 8. Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Visit [https://vercel.com/new](https://vercel.com/new) and select your repository.
3. Next.js will be detected automatically.
4. Under **Environment Variables**, paste the values from `.env.example`.
5. Click **Deploy**. Your site will be live with automatic global CDN caching and SSL certificates.

### Deploying to a Node.js VPS / Hostinger / AWS EC2
```bash
git clone <repo-url>
cd Client
npm install --production
npm run build
pm2 start npm --name "royalora" -- start
```

---

## 9. Remaining Business Information Required Before Commercial Launch

Before opening the store to real monetary transactions and marketing campaigns, the brand owner should supply:

1. **FSSAI License Number**: Update the placeholder `FSSAI Lic. No. [Pending Business Registration]` with your official 14-digit food safety license in `src/data/products.ts` and packaging labels.
2. **Certified Laboratory Nutritional Analysis**: Update the sample nutrient breakdown (energy, protein, fat, vitamins per 100g) in `src/data/products.ts` with certified lab test certificates for each production batch.
3. **Official Merchant Contact Details**:
   - Customer support phone number (e.g. WhatsApp Business contact).
   - Physical registered corporate office address for invoices and footer.
4. **GSTIN Registration Number**: Set your business Goods & Services Tax identification number for automated customer invoices.
5. **Commercial Pack Pricing & Weights**: Confirm whether retail sizes will be 250g, 500g, or 1kg pouches/glass jars, and set exact wholesale/retail MRPs.
6. **Live Customer Reviews**: Replace sample patron testimonials in `src/data/products.ts` with verified customer ratings as initial sales commence.
