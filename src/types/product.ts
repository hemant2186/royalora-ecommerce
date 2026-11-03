export interface PackOption {
  size: string;
  weightGrams: number;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  sku: string;
}

export interface NutritionFact {
  nutrient: string;
  amountPer100g: string;
  dailyValuePercent?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  packPurchased: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: 'powder' | 'blend' | 'premium';
  shortDescription: string;
  fullDescription: string;
  accentNote: string;
  images: string[];
  bannerImage?: string;
  packOptions: PackOption[];
  badge?: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  ingredientNotes: string;
  nutritionFacts: NutritionFact[];
  servingSize: string;
  storageInstructions: string[];
  allergenInfo: string;
  benefits: {
    title: string;
    description: string;
  }[];
  howToUse: string[];
  origin: string;
  fssaiNumberPlaceholder?: string;
}
