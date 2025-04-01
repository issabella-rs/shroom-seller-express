
import React from "react";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus } from "lucide-react";
import { CartItem as CartItemType } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  removeFromCart, 
  updateQuantity 
}) => {
  return (
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
  );
};

export default CartItem;
