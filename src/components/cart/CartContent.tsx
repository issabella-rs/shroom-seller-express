
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import PaymentMethodSelector from "./PaymentMethodSelector";
import PaymentInstructions from "./PaymentInstructions";
import CartFooter from "./CartFooter";

interface CartContentProps {
  onClose: () => void;
}

const CartContent: React.FC<CartContentProps> = ({ onClose }) => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice,
    clearCart 
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
        onClose();
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
        onClose();
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

  return (
    <>
      {checkoutStep === "cart" && (
        <div className="flex flex-col gap-4 my-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
      )}
      
      {checkoutStep === "payment" && (
        <div className="mt-6 space-y-6">
          <CartSummary 
            totalItems={getTotalItems()} 
            totalPrice={getTotalPrice()} 
            isCheckoutView={true} 
          />
          <PaymentMethodSelector
            selectedMethod={paymentMethod}
            onMethodChange={setPaymentMethod}
          />
        </div>
      )}
      
      {checkoutStep === "payment-instructions" && (
        <div className="mt-6 space-y-6">
          <CartSummary 
            totalItems={getTotalItems()} 
            totalPrice={getTotalPrice()} 
            isCheckoutView={true} 
          />
          <PaymentInstructions
            paymentMethod={paymentMethod as "bitcoin" | "chime"}
            totalPrice={getTotalPrice()}
            transactionHash={transactionHash}
            setTransactionHash={setTransactionHash}
          />
        </div>
      )}
      
      {checkoutStep === "cart" && (
        <CartSummary totalItems={getTotalItems()} totalPrice={getTotalPrice()} />
      )}
      
      <CartFooter
        checkoutStep={checkoutStep}
        handleCheckout={handleCheckout}
        goBackToCart={goBackToCart}
        closeCart={onClose}
        clearCart={clearCart}
      />
    </>
  );
};

export default CartContent;
