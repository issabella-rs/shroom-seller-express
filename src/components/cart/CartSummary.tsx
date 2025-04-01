
import React from "react";

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
  isCheckoutView?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ 
  totalItems, 
  totalPrice, 
  isCheckoutView = false 
}) => {
  if (isCheckoutView) {
    return (
      <div className="bg-doorstep-yellow/20 p-4 rounded-lg mb-6">
        <h3 className="font-medium text-doorstep-darkgreen mb-2">Order Summary</h3>
        <div className="flex justify-between mb-1">
          <span className="text-sm">{totalItems} items</span>
          <span className="font-medium">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Shipping included where applicable
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4 border-t border-border mt-4">
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-sm text-muted-foreground">Shipping calculated at checkout</span>
      </div>
    </div>
  );
};

export default CartSummary;
