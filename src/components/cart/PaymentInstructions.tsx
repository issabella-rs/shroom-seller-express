
import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface PaymentInstructionsProps {
  paymentMethod: "bitcoin" | "chime";
  totalPrice: number;
  transactionHash: string;
  setTransactionHash: (hash: string) => void;
}

const PaymentInstructions: React.FC<PaymentInstructionsProps> = ({
  paymentMethod,
  totalPrice,
  transactionHash,
  setTransactionHash,
}) => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: `${label} has been copied to your clipboard.`,
      });
    });
  };

  return (
    <div className="space-y-4">
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
              Send exactly ${totalPrice.toFixed(2)} worth of Bitcoin to the address above.
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
              Send exactly ${totalPrice.toFixed(2)} to the Chime account "JustSmile".
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
  );
};

export default PaymentInstructions;
