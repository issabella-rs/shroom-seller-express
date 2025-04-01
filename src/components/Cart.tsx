
import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import EmptyCart from "./cart/EmptyCart";
import CartContent from "./cart/CartContent";

const Cart: React.FC = () => {
  const { 
    getTotalItems, 
    isCartOpen, 
    setIsCartOpen,
    items
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-coastal-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">
            {items.length === 0 ? "Your Cart" : (
              isCartOpen && (
                items.length === 0 ? "Your Cart" :
                items.length > 0 && getTotalItems() > 0 ? "Your Cart" : "Checkout"
              )
            )}
          </SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <EmptyCart onClose={() => setIsCartOpen(false)} />
        ) : (
          <CartContent onClose={() => setIsCartOpen(false)} />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
