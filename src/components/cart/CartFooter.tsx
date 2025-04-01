
import React from "react";
import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";

interface CartFooterProps {
  checkoutStep: "cart" | "payment" | "confirmation" | "payment-instructions";
  handleCheckout: () => void;
  goBackToCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
}

const CartFooter: React.FC<CartFooterProps> = ({
  checkoutStep,
  handleCheckout,
  goBackToCart,
  closeCart,
  clearCart,
}) => {
  return (
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
              onClick={closeCart} 
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
  );
};

export default CartFooter;
