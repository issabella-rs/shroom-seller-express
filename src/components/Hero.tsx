
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-mushroom-100/30 to-background z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block">
              <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary">
                Premium Mushroom Products
              </span>
            </div>
            
            <h1 className="heading-xl">
              Discover Nature's <br />
              <span className="text-mushroom-600">Finest Mushrooms</span>
            </h1>
            
            <p className="body-lg text-muted-foreground max-w-xl mx-auto">
              Carefully cultivated premium mushroom products, delivered straight to your door. 
              Experience nature's excellence with our curated selection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-mushroom-600 hover:bg-mushroom-700 text-white"
                onClick={scrollToProducts}
              >
                Explore Products
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-20 md:mt-32 animate-subtle-float">
            <Button 
              variant="ghost" 
              className="rounded-full"
              onClick={scrollToProducts}
            >
              <ArrowDownCircle className="h-10 w-10 text-mushroom-600" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
