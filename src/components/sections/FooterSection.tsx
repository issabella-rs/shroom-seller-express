
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Twitter } from "lucide-react";

const FooterSection: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-doorstep-darkgreen text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-doorstep-green">DoorstepAction</h3>
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
          <p>&copy; {new Date().getFullYear()} DoorstepAction. All rights reserved.</p>
          <p className="mt-2">This is a demo website. Not intended for actual purchases.</p>
          <p className="mt-2 text-doorstep-green font-medium">21+ Age Requirement for All Products</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
