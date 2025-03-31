
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Cart from "./Cart";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo py-4 px-6",
        isScrolled || mobileMenuOpen ? "bg-doorstep-darkgreen/90 backdrop-blur-md py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/07fcccec-c6da-4506-93b7-9ecbe2de90e7.png" 
            alt="Smiling Vibes Logo" 
            className="h-10 w-10 rounded-full object-cover border-2 border-doorstep-green"
          />
          <span className={cn(
            "text-xl font-bold transition-all duration-300 text-doorstep-green",
          )}>
            Smiling Vibes
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a href="#products" className="text-foreground/80 hover:text-doorstep-green transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/80 hover:text-doorstep-green transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-doorstep-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Cart />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Cart />
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[72px] z-40 bg-doorstep-darkgreen/95 backdrop-blur-md animate-fade-in md:hidden">
            <nav className="flex flex-col gap-4 p-6">
              <a 
                href="#products" 
                className="text-lg py-3 border-b border-border/20 text-foreground hover:text-doorstep-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-lg py-3 border-b border-border/20 text-foreground hover:text-doorstep-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-lg py-3 border-b border-border/20 text-foreground hover:text-doorstep-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
