
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, ShoppingCart, Bitcoin, DollarSign, CreditCard, Copy, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

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

  const [paymentMethod, setPaymentMethod] = useState<"solana" | "usdt" | "card" | "bitcoin" | "chime">("card");
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "payment" | "confirmation" | "payment-instructions">("cart");
  const [transactionHash, setTransactionHash] = useState("");
  
  const handleCheckout = () => {
    if (checkoutStep === "cart") {
      setCheckoutStep("payment");
      return;
    }
    
    if (checkoutStep === "payment") {
      if (paymentMethod === "bitcoin" || paymentMethod === "chime") {
        setCheckoutStep("payment-instructions");
        return;
      }
      
      // Process the payment (in a real app, this would connect to a payment processor)
      toast({
        title: "Payment Processing",
        description: `Processing payment of $${getTotalPrice().toFixed(2)} with ${paymentMethod.toUpperCase()}`,
      });
      
      // Simulate payment processing
      setTimeout(() => {
        toast({
          title: "Payment Successful",
          description: "Your order has been placed successfully!",
        });
        clearCart();
        setCheckoutStep("cart");
        setIsCartOpen(false);
      }, 2000);
    }
    
    if (checkoutStep === "payment-instructions") {
      if (!transactionHash.trim()) {
        toast({
          title: "Transaction ID Required",
          description: "Please enter your transaction ID or receipt number",
          variant: "destructive"
        });
        return;
      }
      
      toast({
        title: "Order Received",
        description: "We'll verify your payment and process your order soon!",
      });
      
      setTimeout(() => {
        clearCart();
        setCheckoutStep("cart");
        setIsCartOpen(false);
        setTransactionHash("");
      }, 2000);
    }
  };
  
  const goBackToCart = () => {
    if (checkoutStep === "payment-instructions") {
      setCheckoutStep("payment");
    } else {
      setCheckoutStep("cart");
    }
  };
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: `${label} has been copied to your clipboard.`,
      });
    });
  };

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
            {checkoutStep === "cart" ? "Your Cart" : 
             checkoutStep === "payment" ? "Payment Method" : 
             checkoutStep === "payment-instructions" ? "Payment Instructions" : 
             "Checkout"}
          </SheetTitle>
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
            {checkoutStep === "cart" && (
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
            )}
            
            {checkoutStep === "payment" && (
              <div className="mt-6 space-y-6">
                <div className="bg-doorstep-yellow/20 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-doorstep-darkgreen mb-2">Order Summary</h3>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{getTotalItems()} items</span>
                    <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Shipping included where applicable
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Select Payment Method</h3>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={(value) => setPaymentMethod(value as any)}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent">
                      <RadioGroupItem value="bitcoin" id="bitcoin" />
                      <Label htmlFor="bitcoin" className="flex items-center gap-2 cursor-pointer">
                        <Bitcoin className="h-5 w-5 text-amber-500" />
                        <div>
                          <div className="font-medium">Bitcoin</div>
                          <div className="text-xs text-muted-foreground">Pay with Bitcoin cryptocurrency</div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent">
                      <RadioGroupItem value="chime" id="chime" />
                      <Label htmlFor="chime" className="flex items-center gap-2 cursor-pointer">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium">Chime</div>
                          <div className="text-xs text-muted-foreground">Pay with Chime payment link</div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent">
                      <RadioGroupItem value="solana" id="solana" />
                      <Label htmlFor="solana" className="flex items-center gap-2 cursor-pointer">
                        <Bitcoin className="h-5 w-5 text-purple-600" />
                        <div>
                          <div className="font-medium">Solana</div>
                          <div className="text-xs text-muted-foreground">Pay with Solana cryptocurrency</div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent">
                      <RadioGroupItem value="usdt" id="usdt" />
                      <Label htmlFor="usdt" className="flex items-center gap-2 cursor-pointer">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium">USDT</div>
                          <div className="text-xs text-muted-foreground">Pay with Tether USD stablecoin</div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">Credit Card</div>
                          <div className="text-xs text-muted-foreground">Pay with Visa, Mastercard, etc.</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}
            
            {checkoutStep === "payment-instructions" && (
              <div className="mt-6 space-y-6">
                <div className="bg-doorstep-yellow/20 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-doorstep-darkgreen mb-2">Order Summary</h3>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{getTotalItems()} items</span>
                    <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
                
                {paymentMethod === "bitcoin" && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Bitcoin Payment</h3>
                    <div className="p-4 border rounded-md bg-accent/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Bitcoin Address</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0"
                          onClick={() => copyToClipboard("161i4Gk8GviZowSE7Gkk4Kw6vPCSkbcni3", "Bitcoin address")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="mt-2 p-2 bg-white/80 rounded text-xs break-all font-mono">
                        161i4Gk8GviZowSE7Gkk4Kw6vPCSkbcni3
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        Send exactly ${getTotalPrice().toFixed(2)} worth of Bitcoin to the address above.
                      </p>
                    </div>
                  </div>
                )}
                
                {paymentMethod === "chime" && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Chime Payment</h3>
                    <div className="p-4 border rounded-md bg-accent/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Chime Payment Link</span>
                        <a 
                          href="https://app.chime.com/link/qr?u=JustSmile" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-doorstep-green hover:text-doorstep-darkgreen"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="mt-2 p-2 bg-white/80 rounded text-xs break-all">
                        <a 
                          href="https://app.chime.com/link/qr?u=JustSmile" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-doorstep-green hover:text-doorstep-darkgreen underline"
                        >
                          https://app.chime.com/link/qr?u=JustSmile
                        </a>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        Send exactly ${getTotalPrice().toFixed(2)} to the Chime account "JustSmile".
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 mt-6">
                  <h3 className="font-medium">After Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    After sending payment, please enter your transaction ID or receipt number below and send it to:
                  </p>
                  
                  <div className="p-3 border rounded-md flex flex-col gap-2 bg-doorstep-yellow/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Twitter:</span>
                      <a 
                        href="https://x.com/bekindtypaway?s=11" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-doorstep-green hover:text-doorstep-darkgreen text-sm underline"
                      >
                        @bekindtypaway
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Telegram:</span>
                      <span className="text-doorstep-green text-sm">zhaintheplug</span>
                    </div>
                  </div>
                  
                  <Input
                    type="text"
                    placeholder="Enter transaction ID or receipt number"
                    value={transactionHash}
                    onChange={(e) => setTransactionHash(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            )}
            
            <div className="pt-4 border-t border-border mt-4">
              {checkoutStep === "cart" && (
                <>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Shipping calculated at checkout</span>
                  </div>
                </>
              )}
            </div>
            
            <SheetFooter className="flex-col gap-2 sm:flex-col mt-4">
              <Button 
                className="w-full bg-coastal-red hover:bg-coastal-darkred"
                onClick={handleCheckout}
              >
                {checkoutStep === "cart" ? "Proceed to Checkout" : 
                 checkoutStep === "payment" ? "Continue" : 
                 checkoutStep === "payment-instructions" ? "Confirm Payment Sent" : 
                 "Complete Purchase"}
              </Button>
              <div className="flex gap-2 w-full">
                {checkoutStep === "cart" ? (
                  <>
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
                  </>
                ) : (
                  <Button
                    variant="outline"
                    onClick={goBackToCart}
                    className="w-full"
                  >
                    Back
                  </Button>
                )}
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
