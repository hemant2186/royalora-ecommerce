'use client';

import React, { useState } from 'react';
import { notFound, useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Info,
  Check,
  ArrowRight,
} from 'lucide-react';
import { PRODUCTS, SAMPLE_REVIEWS } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';
import { useWishlist } from '@/components/wishlist/WishlistContext';
import { PackOption } from '@/types/product';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug);

  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'nutrition' | 'storage' | 'reviews'>('details');
  const [added, setAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const selectedPack: PackOption = product.packOptions[selectedPackIndex] || product.packOptions[0];
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedPack, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, selectedPack, quantity);
    router.push('/checkout');
  };

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#FAF6EF] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#7A685A] mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#C49A42]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C49A42]" />
          <Link href="/shop" className="hover:text-[#C49A42]">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C49A42]" />
          <span className="text-[#321B11] font-semibold">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 mb-20 items-start">
          {/* Left: Product Image Gallery (5 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F4EBDD] border-2 border-[#C49A42]/30 shadow-royal">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#321B11]/90 backdrop-blur-sm text-[#E9D9BA] text-xs uppercase font-semibold tracking-wider px-3 py-1.5 rounded shadow border border-[#C49A42]/40">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail navigation */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-[#C49A42] ring-2 ring-[#C49A42]/30 scale-105'
                        : 'border-[#C49A42]/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Purchasing Details (7 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Royal Eyebrow */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C49A42]">
                  {product.accentNote}
                </span>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-2 rounded-full border transition-colors ${
                    isWishlisted
                      ? 'bg-[#C49A42] text-[#321B11] border-[#C49A42]'
                      : 'bg-white text-[#7A685A] border-[#C49A42]/30 hover:text-[#C49A42]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#321B11]' : ''}`} />
                </button>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321B11] tracking-wide mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-[#7A685A] font-medium mb-4">{product.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center text-[#C49A42]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-[#C49A42]' : 'fill-[#C49A42]/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#321B11]">{product.rating}</span>
                <span className="text-xs text-[#7A685A]">({product.reviewCount} Connoisseur Ratings)</span>
              </div>

              {/* Price Block */}
              <div className="bg-[#F8F1E5] p-5 rounded-xl border border-[#C49A42]/20 mb-6 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-3xl font-bold text-[#321B11]">
                      ₹{selectedPack.price}
                    </span>
                    {selectedPack.originalPrice && (
                      <span className="text-base text-[#7A685A] line-through">
                        ₹{selectedPack.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-emerald-800 font-medium">
                    MRP inclusive of all taxes. Free Express Shipping on orders ₹999+
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded">
                  In Stock &amp; Freshly Milled
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#7A685A] leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {/* Pack-Size Selection */}
              <div className="mb-6">
                <label className="block text-xs uppercase font-bold tracking-wider text-[#321B11] mb-2">
                  Select Pack Size: <span className="text-[#C49A42]">{selectedPack.size}</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.packOptions.map((pack, idx) => (
                    <button
                      key={pack.size}
                      type="button"
                      onClick={() => setSelectedPackIndex(idx)}
                      className={`p-3.5 rounded-xl text-left border-2 transition-all ${
                        selectedPackIndex === idx
                          ? 'border-[#C49A42] bg-[#E9D9BA]/50 shadow-sm'
                          : 'border-[#C49A42]/20 bg-white hover:border-[#C49A42]/50'
                      }`}
                    >
                      <span className="block text-xs font-semibold text-[#321B11]">
                        {pack.size}
                      </span>
                      <span className="block text-sm font-bold text-[#C49A42] mt-0.5">
                        ₹{pack.price}
                      </span>
                      <span className="block text-[10px] text-[#7A685A]">
                        (₹{(pack.price / (pack.weightGrams / 100)).toFixed(1)}/100g)
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#321B11]">
                  Quantity:
                </span>
                <div className="flex items-center border-2 border-[#C49A42]/40 rounded-lg bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm font-bold text-[#321B11] hover:bg-[#E9D9BA]/40 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-bold text-[#321B11]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm font-bold text-[#321B11] hover:bg-[#E9D9BA]/40 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#7A685A]">
                  Subtotal: <strong>₹{selectedPack.price * quantity}</strong>
                </span>
              </div>

              {/* Action Buttons: Add to Cart & Buy Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full py-4 text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center justify-center gap-2 shadow-royal transition-all duration-300 ${
                    added
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Royal Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Cart (₹{selectedPack.price * quantity})
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-4 text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center justify-center gap-2 bg-[#C49A42] hover:bg-[#E9D9BA] text-[#321B11] shadow-royal transition-all duration-300"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Guarantees Strip */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-[#F8F1E5] rounded-xl border border-[#C49A42]/20 text-center text-[11px] text-[#321B11]">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-[#C49A42]" />
                  <span>Pan-India Express</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#C49A42]" />
                  <span>100% Pure Nuts</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-[#C49A42]" />
                  <span>Tamper-Proof Seal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-2xl border border-[#C49A42]/30 shadow-royal overflow-hidden mb-20">
          {/* Tab Headers */}
          <div className="flex border-b border-[#C49A42]/20 bg-[#F8F1E5] overflow-x-auto">
            {[
              { id: 'details', label: 'Culinary & Benefits' },
              { id: 'nutrition', label: 'Nutritional Table' },
              { id: 'storage', label: 'Storage & Allergens' },
              { id: 'reviews', label: `Reviews (${product.reviewCount})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-[#C49A42] bg-white'
                    : 'text-[#7A685A] hover:text-[#321B11]'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute top-0 inset-x-0 h-1 bg-[#C49A42]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-10">
            {activeTab === 'details' && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl text-[#321B11] font-medium mb-3">
                    Ingredients &amp; Sourcing
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A685A] leading-relaxed mb-2">
                    <strong>Ingredients:</strong> {product.ingredients.join(', ')}
                  </p>
                  <p className="text-[11px] text-[#7A685A] italic bg-[#FAF6EF] p-3 rounded border border-[#C49A42]/20">
                    {product.ingredientNotes}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#321B11] font-medium mb-4">
                    Key Nutritional Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="p-4 bg-[#FAF6EF] rounded-xl border border-[#C49A42]/20">
                        <h4 className="font-serif text-sm font-semibold text-[#321B11] mb-1">
                          {b.title}
                        </h4>
                        <p className="text-xs text-[#7A685A]">{b.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#321B11] font-medium mb-3">
                    How to Enjoy Royal Nutrition
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#7A685A]">
                    {product.howToUse.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#E9D9BA] text-[#321B11] font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-[#321B11] font-medium">
                      Nutritional Value per 100g
                    </h3>
                    <p className="text-xs text-[#7A685A]">Serving Size: {product.servingSize}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A685A] bg-[#FAF6EF] px-3 py-1 rounded border border-[#C49A42]/30 mt-2 sm:mt-0">
                    [Verified Lab Placeholder Format]
                  </span>
                </div>

                <div className="overflow-x-auto border border-[#C49A42]/20 rounded-xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F8F1E5] text-[#321B11] uppercase font-semibold text-[10px] tracking-wider border-b border-[#C49A42]/20">
                      <tr>
                        <th className="py-3 px-4">Nutrient Metric</th>
                        <th className="py-3 px-4">Amount per 100g</th>
                        <th className="py-3 px-4">% Daily Value (RDA)*</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F4EBDD]">
                      {product.nutritionFacts.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF6EF]/50'}>
                          <td className="py-3 px-4 font-medium text-[#321B11]">{row.nutrient}</td>
                          <td className="py-3 px-4 text-[#7A685A] font-semibold">{row.amountPer100g}</td>
                          <td className="py-3 px-4 text-[#7A685A]">{row.dailyValuePercent || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-[#7A685A] mt-3">
                  *Percent Daily Values are based on a standard 2,000 calorie reference adult diet. Actual values subject to minor harvest variations.
                </p>
              </div>
            )}

            {activeTab === 'storage' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-[#321B11] font-medium mb-3">
                    Preservation &amp; Storage Protocols
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#7A685A]">
                    {product.storageInstructions.map((instruction, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C49A42] flex-shrink-0 mt-0.5" />
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <h4 className="font-serif text-sm font-semibold text-amber-900 mb-1 flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-700" /> Allergen Advisory
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    {product.allergenInfo}
                  </p>
                </div>

                <div className="text-xs text-[#7A685A]">
                  <p><strong>Country of Origin:</strong> {product.origin}</p>
                  <p className="mt-1"><strong>FSSAI License:</strong> {product.fssaiNumberPlaceholder}</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#F4EBDD]">
                  <div>
                    <h3 className="font-serif text-2xl text-[#321B11] font-medium">
                      Customer Reviews
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-[#C49A42]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#C49A42]" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#321B11]">{product.rating} out of 5</span>
                      <span className="text-xs text-[#7A685A]">based on {product.reviewCount} reviews</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#7A685A] bg-[#FAF6EF] px-3 py-1 rounded border border-[#C49A42]/30 mt-3 sm:mt-0">
                    [Development Mode: Sample Patron Feedback]
                  </span>
                </div>

                {/* Sample reviews */}
                <div className="space-y-4">
                  {(SAMPLE_REVIEWS.all || []).map((rev) => (
                    <div key={rev.id} className="p-4 bg-[#FAF6EF] rounded-xl border border-[#C49A42]/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-bold text-[#321B11]">{rev.author}</span>
                          {rev.verifiedPurchase && (
                            <span className="text-[10px] text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                              Verified
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#7A685A]">{rev.date}</span>
                      </div>
                      <div className="flex text-[#C49A42] mb-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#C49A42]" />
                        ))}
                      </div>
                      <h4 className="font-semibold text-xs text-[#321B11] mb-1">{rev.title}</h4>
                      <p className="text-xs text-[#7A685A]">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like Section */}
        <div>
          <SectionHeading
            eyebrow="Pair With Royalty"
            title="Complete Your Royal Pantry"
            subtitle="Explore complementary nut powders and curated gift chests."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
