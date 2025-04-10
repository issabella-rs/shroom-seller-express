
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Twitter, ExternalLink } from "lucide-react";

const FooterSection: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-doorstep-darkgreen text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-doorstep-green">DoorstepAction</h3>
            <p className="text-white/80 mt-2">Premium Quality Products</p>
            <div className="mt-4 flex gap-4 justify-center md:justify-start items-center">
              <a href="https://x.com/bekindtypaway?s=11" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-doorstep-green transition-colors group">
                <div className="relative flex items-center gap-2">
                  <Twitter size={24} className="group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline text-sm opacity-80 group-hover:opacity-100">@bekindtypaway</span>
                  <span className="absolute -top-2 -right-2 w-2 h-2 bg-doorstep-green rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></span>
                </div>
              </a>
              <a href="https://x.com/285rey?s=11" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-doorstep-green transition-colors group">
                <div className="relative flex items-center gap-2">
                  <Twitter size={24} className="group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline text-sm opacity-80 group-hover:opacity-100">@DoorSteppin</span>
                  <span className="absolute -top-2 -right-2 w-2 h-2 bg-doorstep-green rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 mb-8 md:mb-0 text-center sm:text-left">
            <div className="mb-6 sm:mb-0">
              <h4 className="font-semibold mb-3 text-doorstep-green">Quick Links</h4>
              <ul className="space-y-2 flex flex-col items-center sm:items-start">
                <li><a href="#products" className="text-white/70 hover:text-doorstep-green transition-colors py-1">Products</a></li>
                <li><a href="#about" className="text-white/70 hover:text-doorstep-green transition-colors py-1">About Us</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-doorstep-green transition-colors py-1">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-doorstep-green">Payment</h4>
              <ul className="space-y-2 flex flex-col items-center sm:items-start">
                <li><span className="text-white/70 flex items-center gap-1 py-1">PayPal: <span className="font-medium text-doorstep-green">DLKNEWZ@gmail.com</span></span></li>
                <li><span className="text-white/70 flex items-center gap-1 py-1">Cash App: <span className="font-medium text-doorstep-green">$Muragg</span></span></li>
                <li><a href="#" className="text-white/70 hover:text-doorstep-green transition-colors py-1">Shipping Policy</a></li>
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
