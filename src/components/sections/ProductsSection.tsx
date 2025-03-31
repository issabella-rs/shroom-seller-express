
import React from "react";
import ProductCard from "@/components/ProductCard";

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  priceTiers: {
    quantity: string;
    price: string;
    shipping: string;
  }[];
}

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-doorstep-green">Our Products</span>
          <h2 className="heading-lg mt-4 text-doorstep-darkgreen">Premium Quality Selections</h2>
          <p className="body-md text-muted-foreground mt-4">
            Each product is carefully selected and prepared to ensure the highest quality experience. 
            Explore our exclusive collection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
