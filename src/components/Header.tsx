
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Cart from "./Cart";
import ThemeToggle from "./ThemeToggle";

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
        isScrolled || mobileMenuOpen ? "bg-doorstep-darkgreen/90 backdrop-blur-md py-3 dark:bg-black/70 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img 
            src="/lovable-uploads/07fcccec-c6da-4506-93b7-9ecbe2de90e7.png" 
            alt="DoorstepAction Logo" 
            className="h-10 w-10 rounded-full object-cover border-2 border-doorstep-green dark:border-doorstep-brightgreen group-hover:scale-105 transition-transform"
          />
          <span className={cn(
            "text-xl font-bold transition-all duration-300 text-doorstep-green dark:text-doorstep-brightgreen group-hover:text-doorstep-brightgreen dark:group-hover:text-white",
          )}>
            DoorstepAction
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a href="#products" className="text-foreground/80 hover:text-doorstep-green dark:hover:text-doorstep-brightgreen transition-colors relative group">
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-doorstep-green dark:bg-doorstep-brightgreen transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/80 hover:text-doorstep-green dark:hover:text-doorstep-brightgreen transition-colors relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-doorstep-green dark:bg-doorstep-brightgreen transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-doorstep-green dark:hover:text-doorstep-brightgreen transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-doorstep-green dark:bg-doorstep-brightgreen transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
          <Cart />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Cart />
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground hover:bg-doorstep-green/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[72px] z-40 bg-doorstep-darkgreen/95 dark:bg-black/90 backdrop-blur-md animate-fade-in md:hidden">
            <nav className="flex flex-col gap-4 p-6">
              <a 
                href="#products" 
                className="text-lg py-3 border-b border-border/20 text-foreground hover:text-doorstep-green dark:hover:text-doorstep-brightgreen transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-lg py-3 border-b border-border/20 text-foreground hover:text-doorstep-green dark:hover:text-doorstep-brightgreen transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-lg py-3 border-b border-border/20 text-foreground hover:text-doorstep-green dark:hover:text-doorstep-brightgreen transition-colors"
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
