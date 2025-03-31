
import React from "react";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
  variant?: "primary" | "secondary" | "white";
  text?: string;
  fullScreen?: boolean;
}

export function Loader({
  size = "default",
  variant = "primary",
  text,
  fullScreen = false,
  className,
  ...props
}: LoaderProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const variantClasses = {
    primary: "text-doorstep-green",
    secondary: "text-doorstep-darkgreen",
    white: "text-white",
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-doorstep-yellow/80 backdrop-blur-sm z-50" {...props}>
        <LoaderCircle
          className={cn(
            "animate-spin",
            sizeClasses[size],
            variantClasses[variant],
            className
          )}
        />
        {text && <p className="mt-4 text-doorstep-darkgreen font-medium">{text}</p>}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)} {...props}>
      <LoaderCircle
        className={cn(
          "animate-spin",
          sizeClasses[size],
          variantClasses[variant]
        )}
      />
      {text && <p className="mt-2 text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
