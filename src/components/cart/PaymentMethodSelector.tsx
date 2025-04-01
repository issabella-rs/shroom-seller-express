
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Bitcoin, DollarSign, CreditCard } from "lucide-react";

type PaymentMethod = "solana" | "usdt" | "card" | "bitcoin" | "chime";

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  selectedMethod,
  onMethodChange,
}) => {
  return (
    <div>
      <h3 className="font-medium mb-4">Select Payment Method</h3>
      <RadioGroup
        value={selectedMethod}
        onValueChange={(value) => onMethodChange(value as PaymentMethod)}
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
  );
};

export default PaymentMethodSelector;
