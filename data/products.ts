export interface Product {
  id: string;
  name: string;
  urlSlug: string;
  category: string;
  subcategory: string;
  images: string[];
  rating: number;
  reviewCount: number;
  actualPrice: number;
  discountedPrice: number;
  discountPercent: number;
  units: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: "p-001",
    name: "Pioneer Maize Seeds (3355)",
    urlSlug: "pioneer-maize-3355",
    category: "Seeds",
    subcategory: "Maize",
    images: [
      "https://placehold.co/400x400/e2e8f0/64748b?text=Maize+Image+1",
      "https://placehold.co/400x400/e2e8f0/64748b?text=Maize+Image+2",
      "https://placehold.co/400x400/e2e8f0/64748b?text=Maize+Image+3"
    ],
    rating: 4.5,
    reviewCount: 132,
    actualPrice: 500,
    discountedPrice: 420,
    discountPercent: 16,
    units: ["1 Kg", "5 Kg", "10 Kg"],
    description: "High-quality Pioneer brand maize seeds for excellent yield. Suitable for all soil types."
  },
  {
    id: "p-002",
    name: "Super Shakti Pesticide",
    urlSlug: "super-shakti-pesticide",
    category: "Chemical",
    subcategory: "Pesticide",
    images: [
      "https://placehold.co/400x400/e2e8f0/64748b?text=Pesticide"
    ],
    rating: 4.2,
    reviewCount: 87,
    actualPrice: 1200,
    discountedPrice: 1000,
    discountPercent: 17,
    units: ["1 Litre", "500 ml"],
    description: "Effective pesticide for crop protection. Kills all major pests."
  },
  {
    id: "p-003",
    name: "Paddy Seeds Premium",
    urlSlug: "paddy-seeds-premium",
    category: "Seeds",
    subcategory: "Paddy",
    images: [
      "https://placehold.co/400x400/e2e8f0/64748b?text=Paddy+Seeds"
    ],
    rating: 4.7,
    reviewCount: 245,
    actualPrice: 800,
    discountedPrice: 650,
    discountPercent: 19,
    units: ["1 Kg", "5 Kg", "25 Kg"],
    description: "Premium quality paddy seeds with high germination rate."
  },
  {
    id: "p-004",
    name: "NPK Fertilizer 19:19:19",
    urlSlug: "npk-fertilizer",
    category: "Fertilizers",
    subcategory: "MajorNutrients",
    images: [
      "https://placehold.co/400x400/e2e8f0/64748b?text=NPK+Fertilizer"
    ],
    rating: 4.4,
    reviewCount: 156,
    actualPrice: 1500,
    discountedPrice: 1300,
    discountPercent: 13,
    units: ["1 Kg", "5 Kg", "25 Kg", "50 Kg"],
    description: "Balanced NPK fertilizer for all crops. Improves soil fertility."
  },
  {
    id: "p-005",
    name: "Herbicide Glyphosate",
    urlSlug: "herbicide-glyphosate",
    category: "CropProtection",
    subcategory: "Herbicide",
    images: [
      "https://placehold.co/400x400/e2e8f0/64748b?text=Herbicide"
    ],
    rating: 4.3,
    reviewCount: 98,
    actualPrice: 900,
    discountedPrice: 750,
    discountPercent: 17,
    units: ["500 ml", "1 Litre", "5 Litre"],
    description: "Effective weed killer for all types of weeds. Safe for crops."
  },
  {
    id: "p-006",
    name: "Wheat Seeds HD-2967",
    urlSlug: "wheat-seeds-hd2967",
    category: "Seeds",
    subcategory: "Wheat",
    images: [
      "https://placehold.co/400x400/e2e8f0/64748b?text=Wheat+Seeds"
    ],
    rating: 4.6,
    reviewCount: 189,
    actualPrice: 600,
    discountedPrice: 510,
    discountPercent: 15,
    units: ["1 Kg", "5 Kg", "25 Kg"],
    description: "High yielding wheat variety suitable for all regions."
  },
  {
    id: "p-007",
    name: "Tomato Seeds Hybrid",
    urlSlug: "tomato-seeds-hybrid",
    category: "Seeds",
    subcategory: "Vegetable",
    images: [
      "https://placehold.co/400x400/e2e8f0/64748b?text=Tomato+Seeds"
    ],
    rating: 4.8,
    reviewCount: 312,
    actualPrice: 400,
    discountedPrice: 320,
    discountPercent: 20,
    units: ["10 gm", "50 gm", "100 gm"],
    description: "Hybrid tomato seeds with excellent disease resistance."
  },
  {
    id: "p-008",
    name: "Zinc Sulphate Micronutrient",
    urlSlug: "zinc-sulphate",
    category: "Fertilizers",
    subcategory: "Micronutrients",
    images: [
      "https://placehold.co/400x400/e2e8f0/64748b?text=Zinc+Sulphate"
    ],
    rating: 4.5,
    reviewCount: 145,
    actualPrice: 350,
    discountedPrice: 280,
    discountPercent: 20,
    units: ["500 gm", "1 Kg", "5 Kg"],
    description: "Essential micronutrient for healthy crop growth."
  }
];

export const categories = [
  {
    name: "Seeds",
    slug: "seeds",
    image: "category-seeds.jpg",
    subcategories: ["Maize", "Paddy", "Wheat", "Vegetable"]
  },
  {
    name: "Fertilizers",
    slug: "fertilizers",
    image: "category-fertilizers.jpg",
    subcategories: ["Micronutrients", "MajorNutrients", "Organic"]
  },
  {
    name: "Crop Protection",
    slug: "crop-protection",
    image: "category-chemicals.jpg",
    subcategories: ["Herbicide", "Insecticide", "Fungicide", "SeedTreatment"]
  },
  {
    name: "Tools",
    slug: "tools",
    image: "category-tools.jpg",
    subcategories: []
  }
];
