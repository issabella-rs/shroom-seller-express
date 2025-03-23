
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";

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
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className={cn(
            "text-xl font-bold transition-all duration-300",
            isScrolled ? "text-foreground" : "text-foreground"
          )}>
            ShroomEssence
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Button variant="outline" size="icon" className="ml-2">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-40 glass animate-fade-in p-4">
            <nav className="flex flex-col gap-4 p-4">
              <a 
                href="#products" 
                className="text-lg py-2 border-b border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-lg py-2 border-b border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-lg py-2 border-b border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="mt-4 gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span>View Cart</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
