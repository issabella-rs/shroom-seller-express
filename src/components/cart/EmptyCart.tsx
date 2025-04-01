
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyCartProps {
  onClose: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
      <p className="text-muted-foreground">Your cart is empty</p>
      <Button 
        variant="outline" 
        onClick={onClose} 
        className="mt-4"
      >
        Continue Shopping
      </Button>
    </div>
  );
};

export default EmptyCart;
