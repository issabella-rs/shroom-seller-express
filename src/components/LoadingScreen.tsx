
import React from "react";
import { Loader } from "@/components/ui/loader";

const LoadingScreen: React.FC = () => {
  return (
    <Loader 
      fullScreen 
      text="Welcome to Smiling Vibes..." 
      size="lg" 
      variant="primary"
    />
  );
};

export default LoadingScreen;
