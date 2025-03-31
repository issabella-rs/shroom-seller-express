
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import BannerSection from "@/components/sections/BannerSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import { products } from "@/data/products";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-doorstep-yellow/30">
      <Header />
      <Hero />
      <BannerSection />
      <ProductsSection products={products} />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
