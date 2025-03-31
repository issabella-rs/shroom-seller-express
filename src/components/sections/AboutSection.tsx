
import React from "react";

const AboutSection: React.FC = () => {
  return (
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
  );
};

export default AboutSection;
