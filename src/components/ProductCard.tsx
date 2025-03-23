
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { useCart, PriceTier } from "@/context/CartContext";

interface ProductCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  priceTiers: PriceTier[];
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  priceTiers,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const { addToCart } = useCart();

  return (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-all border-coastal-darkgray", className)}>
      <div className="relative overflow-hidden h-64">
        <div className={cn("transition-all", imageLoaded ? "opacity-100" : "opacity-0")}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-coastal-darkgray">
            <div className="animate-pulse h-8 w-8 rounded-full bg-coastal-red/20"></div>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <Badge variant="outline" className="w-fit mb-2 bg-accent/50 text-primary">Premium Quality</Badge>
        <CardTitle className="heading-sm">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className={cn("space-y-2", isExpanded ? "h-auto" : "h-12 overflow-hidden")}>
          {priceTiers.map((tier, index) => (
            <div 
              key={index} 
              className={cn(
                "flex justify-between items-center p-2 rounded-md cursor-pointer border transition-colors",
                selectedTierIndex === index 
                  ? "bg-coastal-red/10 border-coastal-red" 
                  : "bg-secondary border-transparent hover:bg-secondary/80"
              )}
              onClick={() => setSelectedTierIndex(index)}
            >
              <span className="font-medium">{tier.quantity}</span>
              <div className="flex items-center">
                <span className="font-bold text-lg mr-2">${tier.price}</span>
                <span className="text-xs text-muted-foreground">{tier.shipping}</span>
              </div>
            </div>
          ))}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>Show all prices</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          className="w-full gap-2 bg-coastal-red hover:bg-coastal-darkred text-white"
          onClick={() => addToCart({ title, imageUrl, priceTiers }, selectedTierIndex)}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
