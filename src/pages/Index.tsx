
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";
import { Twitter } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-doorstep-yellow/30">
      <Header />
      
      {/* Hero Section with Banner */}
      <Hero />
      
      {/* Banner Image Section */}
      <section className="w-full py-8">
        <div className="container mx-auto">
          <img 
            src="/lovable-uploads/24ed5f35-6ad1-47b1-92e9-21a3cf28fd4f.png" 
            alt="Door Step Action Banner" 
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>
      
      {/* Products Section */}
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
      
      {/* About Section - Improved text readability */}
      <section id="about" className="py-20 px-4 bg-doorstep-darkgreen">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center animate-fade-up">
              <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-doorstep-green">About Us</span>
              <h2 className="heading-lg mt-4 text-white">Committed to Excellence</h2>
              <p className="body-md text-white opacity-90 mt-4 leading-relaxed">
                We believe in providing our customers with only the finest quality products. 
                Our commitment to excellence is at the core of everything we do, from selecting 
                premium strains to ensuring safe, reliable delivery.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-doorstep-darkgreen/80 p-6 rounded-lg shadow-md animate-fade-up border border-doorstep-green/30" style={{ animationDelay: "100ms" }}>
                <h3 className="font-semibold text-lg mb-3 text-doorstep-green">Premium Quality</h3>
                <p className="text-white opacity-80 leading-relaxed">Carefully selected and cultivated products that deliver exceptional experiences.</p>
              </div>
              
              <div className="bg-doorstep-darkgreen/80 p-6 rounded-lg shadow-md animate-fade-up border border-doorstep-green/30" style={{ animationDelay: "200ms" }}>
                <h3 className="font-semibold text-lg mb-3 text-doorstep-green">Fast Shipping</h3>
                <p className="text-white opacity-80 leading-relaxed">Quick and discreet delivery services throughout the United States.</p>
              </div>
              
              <div className="bg-doorstep-darkgreen/80 p-6 rounded-lg shadow-md animate-fade-up border border-doorstep-green/30" style={{ animationDelay: "300ms" }}>
                <h3 className="font-semibold text-lg mb-3 text-doorstep-green">Customer Support</h3>
                <p className="text-white opacity-80 leading-relaxed">Dedicated team ready to assist with any questions or concerns you may have.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-doorstep-yellow/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-doorstep-green">Get In Touch</span>
            <h2 className="heading-lg mt-4 text-doorstep-darkgreen">Questions? Contact Us</h2>
            <p className="body-md text-muted-foreground mt-4">
              Our team is ready to answer any questions you might have about our products, shipping, or ordering process.
            </p>
            
            <div className="mt-8 p-8 bg-white/80 backdrop-blur-md border border-doorstep-green/20 rounded-xl shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen"
                ></textarea>
                <button className="w-full px-4 py-3 bg-doorstep-green text-white rounded-md hover:bg-doorstep-darkgreen transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer - Improved for mobile */}
      <footer className="py-12 px-4 bg-doorstep-darkgreen text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold text-doorstep-green">Smiling Vibes</h3>
              <p className="text-white/80 mt-2">Premium Quality Products</p>
              <div className="mt-4 flex justify-center md:justify-start items-center">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-doorstep-green transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-8 md:mb-0 text-center sm:text-left">
              <div className="mb-6 sm:mb-0">
                <h4 className="font-semibold mb-3 text-doorstep-green">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#products" className="text-white/70 hover:text-doorstep-green transition-colors">Products</a></li>
                  <li><a href="#about" className="text-white/70 hover:text-doorstep-green transition-colors">About Us</a></li>
                  <li><a href="#contact" className="text-white/70 hover:text-doorstep-green transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-doorstep-green">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-doorstep-green transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-white/70 hover:text-doorstep-green transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/70 hover:text-doorstep-green transition-colors">Shipping Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-doorstep-green/20" />
          
          <div className="text-center text-white/70 text-sm">
            <p>&copy; {new Date().getFullYear()} Smiling Vibes. All rights reserved.</p>
            <p className="mt-2">This is a demo website. Not intended for actual purchases.</p>
            <p className="mt-2 text-doorstep-green font-medium">21+ Age Requirement for All Products</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
