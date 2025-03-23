
import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Cart: React.FC = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice,
    clearCart,
    isCartOpen,
    setIsCartOpen
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
          <SheetTitle className="text-xl font-bold">Your Cart</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button 
              variant="outline" 
              onClick={() => setIsCartOpen(false)} 
              className="mt-4"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 my-4">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-4 p-3 border border-border rounded-md"
                >
                  <div className="h-16 w-16 relative overflow-hidden rounded-md shrink-0">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.selectedTier.quantity}</p>
                    <div className="flex items-center mt-1">
                      <span className="font-bold">${item.selectedTier.price}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {item.selectedTier.shipping}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 items-end">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6 p-0" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-6 text-center">{item.quantity}</span>
                      
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6 p-0" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-sm text-muted-foreground">Shipping calculated at checkout</span>
              </div>
            </div>
            
            <SheetFooter className="flex-col gap-2 sm:flex-col mt-4">
              <Button className="w-full bg-coastal-red hover:bg-coastal-darkred">
                Checkout
              </Button>
              <div className="flex gap-2 w-full">
                <Button 
                  variant="outline" 
                  onClick={() => setIsCartOpen(false)} 
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={clearCart} 
                  className="flex-1"
                >
                  Clear Cart
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
