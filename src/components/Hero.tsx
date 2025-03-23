
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-doorstep-yellow">
      <div className="absolute inset-0 bg-gradient-to-b from-doorstep-green/5 to-doorstep-yellow/70 z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="space-y-6 animate-fade-up mb-8">
            <img 
              src="/lovable-uploads/07fcccec-c6da-4506-93b7-9ecbe2de90e7.png" 
              alt="Door Step Action Logo" 
              className="max-w-xs md:max-w-md mx-auto"
            />
            
            <div className="inline-block">
              <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-doorstep-green">
                Premium Organic Products
              </span>
            </div>
            
            <h1 className="heading-xl text-doorstep-darkgreen">
              Discover Nature's <br />
              <span className="text-doorstep-green">Finest Selection</span>
            </h1>
            
            <p className="body-lg text-muted-foreground max-w-xl mx-auto">
              Carefully cultivated premium products, delivered straight to your door. 
              Experience nature's excellence with our curated selection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-doorstep-green hover:bg-doorstep-darkgreen text-white"
                onClick={scrollToProducts}
              >
                Explore Products
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-doorstep-green text-doorstep-darkgreen hover:bg-doorstep-green/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 animate-subtle-float">
            <Button 
              variant="ghost" 
              className="rounded-full"
              onClick={scrollToProducts}
            >
              <ArrowDownCircle className="h-10 w-10 text-doorstep-green" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
