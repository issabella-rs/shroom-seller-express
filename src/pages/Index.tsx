
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const products = [
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
            <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary">Our Products</span>
            <h2 className="heading-lg mt-4">Premium Quality Selections</h2>
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
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-coastal-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center animate-fade-up">
              <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary">About Us</span>
              <h2 className="heading-lg mt-4">Committed to Excellence</h2>
              <p className="body-md text-muted-foreground mt-4">
                We believe in providing our customers with the highest quality products. 
                Our commitment to excellence drives everything we do, from carefully selecting the 
                finest strains to ensuring safe and reliable delivery.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-coastal-darkgray p-6 rounded-lg animate-fade-up" style={{ animationDelay: "100ms" }}>
                <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Carefully selected and cultivated for the best experience.</p>
              </div>
              
              <div className="bg-coastal-darkgray p-6 rounded-lg animate-fade-up" style={{ animationDelay: "200ms" }}>
                <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">Quick and discreet delivery across the United States.</p>
              </div>
              
              <div className="bg-coastal-darkgray p-6 rounded-lg animate-fade-up" style={{ animationDelay: "300ms" }}>
                <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
                <p className="text-muted-foreground">Dedicated support team ready to assist with any questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary">Get In Touch</span>
            <h2 className="heading-lg mt-4">Questions? Contact Us</h2>
            <p className="body-md text-muted-foreground mt-4">
              Our team is ready to answer any questions you might have about our products, shipping, or ordering process.
            </p>
            
            <div className="mt-8 p-8 bg-coastal-black/50 backdrop-blur-md border border-coastal-darkgray rounded-xl">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-border bg-coastal-darkgray/50 text-foreground"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-md border border-border bg-coastal-darkgray/50 text-foreground"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-coastal-darkgray/50 text-foreground"
                ></textarea>
                <button className="w-full px-4 py-3 bg-coastal-red text-white rounded-md hover:bg-coastal-darkred transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-coastal-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-coastal-red">Coastal Roots</h3>
              <p className="text-muted-foreground mt-2">Premium Quality Products</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-semibold mb-2">Quick Links</h4>
                <ul className="space-y-1">
                  <li><a href="#products" className="text-muted-foreground hover:text-coastal-red">Products</a></li>
                  <li><a href="#about" className="text-muted-foreground hover:text-coastal-red">About Us</a></li>
                  <li><a href="#contact" className="text-muted-foreground hover:text-coastal-red">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Legal</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-muted-foreground hover:text-coastal-red">Terms of Service</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-coastal-red">Privacy Policy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-coastal-red">Shipping Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-coastal-darkgray" />
          
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Coastal Roots. All rights reserved.</p>
            <p className="mt-1">This is a demo website. Not intended for actual purchases.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
