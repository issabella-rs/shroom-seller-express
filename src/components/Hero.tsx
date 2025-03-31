
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, AlertTriangle } from "lucide-react";
import AnimatedBall from "./AnimatedBall";

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
      
      {/* 3D Animated Ball */}
      <AnimatedBall />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="space-y-6 animate-fade-up mb-8">            
            <div className="inline-block">
              <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-doorstep-green">
                Premium Organic Products
              </span>
            </div>
            
            {/* Age Requirement Notice */}
            <div className="bg-doorstep-darkgreen/20 p-3 rounded-lg flex items-center justify-center gap-2 text-doorstep-darkgreen border border-doorstep-darkgreen/20">
              <AlertTriangle size={18} />
              <span className="text-sm font-medium">21+ Age Requirement: All products are for adults 21 years or older</span>
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
