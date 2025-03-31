
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
    title: "Blue Meanie Shrooms",
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
    title: "Deja Vu Mushroom Bars",
    description: "Artisanal mushroom chocolate bars crafted with premium ingredients for a delightful experience.",
    imageUrl: "/lovable-uploads/fc28c7d8-de6c-4848-8b51-318c24ca2b4b.png", 
    priceTiers: [
      { quantity: "1 Bar", price: "35", shipping: "+ $5 shipping 🇺🇲" },
      { quantity: "2 Bars", price: "60", shipping: "shipped 🇺🇸" },
      { quantity: "5+ Bars", price: "27", shipping: "Per shipped 🇺🇸" },
    ],
  },
  {
    title: "Pre-rolls infused cannabis",
    description: "Expertly crafted pre-rolls infused with premium cannabis for an enhanced experience.",
    imageUrl: "/lovable-uploads/636ed36f-a316-445c-ad0e-d2c3fd59d346.png", 
    priceTiers: [
      { quantity: "1 Jar (5 count)", price: "35", shipping: "+ $5 shipping 🇺🇲" },
      { quantity: "2 Jars (10 count)", price: "65", shipping: "shipped 🇺🇸" },
      { quantity: "5+ Jars", price: "27", shipping: "per Jar shipped 🇺🇸" },
    ],
  },
];
