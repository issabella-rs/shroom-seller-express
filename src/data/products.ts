
export interface PriceTier {
  quantity: string;
  price: string;
  shipping: string;
}

export interface Product {
  title: string;
  description: string;
  imageUrl: string;
  priceTiers: PriceTier[];
}

export const products: Product[] = [
  {
    title: "Blue Meanie Mushrooms",
    description: "Premium quality Blue Meanie mushrooms, known for their potent effects and unique blue bruising.",
    imageUrl: "/lovable-uploads/4983e586-9570-416a-888d-1c3d37848289.png", 
    priceTiers: [
      { quantity: "1 Oz", price: "85", shipping: "shipped 🇺🇸" },
      { quantity: "2 Oz", price: "150", shipping: "shipped 🇺🇸" },
      { quantity: "Qp", price: "275", shipping: "shipped 🇺🇸" },
      { quantity: "Hp", price: "450", shipping: "shipped 🇺🇸" },
    ],
  },
  {
    title: "Deja Vu Shroom Bars",
    description: "Artisanal chocolate bars with 4.4 grams of premium mushrooms for a delightful experience.",
    imageUrl: "/lovable-uploads/fc28c7d8-de6c-4848-8b51-318c24ca2b4b.png", 
    priceTiers: [
      { quantity: "1 Bar", price: "35", shipping: "+ $5 shipping 🇺🇲" },
      { quantity: "2 Bars", price: "60", shipping: "shipped 🇺🇸" },
      { quantity: "5+ Bars", price: "27", shipping: "Per shipped 🇺🇸" },
    ],
  },
  {
    title: "Indoor Cannabis Infused Pre-rolls",
    description: "Premium indoor-grown cannabis pre-rolls in Frosted Cherries or Triple Cherries strains (5 count).",
    imageUrl: "/lovable-uploads/636ed36f-a316-445c-ad0e-d2c3fd59d346.png", 
    priceTiers: [
      { quantity: "1 Jar (5 count)", price: "35", shipping: "+ $5 shipping 🇺🇲" },
      { quantity: "2 Jars (10 count)", price: "65", shipping: "shipped 🇺🇸" },
      { quantity: "5+ Jars", price: "27", shipping: "per Jar shipped 🇺🇸" },
    ],
  },
  {
    title: "THC Pacman Disposables",
    description: "High-quality THC disposable vapes available in Indica, Sativa, or Hybrid varieties for your preference.",
    imageUrl: "/lovable-uploads/7ba52141-7299-49d3-b6bb-f5f7f236929a.png", 
    priceTiers: [
      { quantity: "1 Disposable", price: "40", shipping: "+ $5 shipping 🇺🇲" },
      { quantity: "2 Disposables", price: "75", shipping: "shipped 🇺🇸" },
      { quantity: "5+ Disposables", price: "35", shipping: "per unit shipped 🇺🇸" },
    ],
  },
];
