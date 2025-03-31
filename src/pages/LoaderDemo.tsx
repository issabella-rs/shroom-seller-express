
import React, { useState } from "react";
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const LoaderDemo = () => {
  const [showFullScreen, setShowFullScreen] = useState(false);

  return (
    <div className="min-h-screen bg-doorstep-yellow/30">
      <Header />
      
      {showFullScreen && (
        <Loader 
          fullScreen 
          text="Loading your products..." 
          size="lg" 
        />
      )}
      
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg text-doorstep-darkgreen mb-8">Loader Component Demo</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="heading-sm mb-6 text-doorstep-darkgreen">Small Loader</h2>
              <Loader size="sm" />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="heading-sm mb-6 text-doorstep-darkgreen">Default Loader</h2>
              <Loader />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="heading-sm mb-6 text-doorstep-darkgreen">Large Loader</h2>
              <Loader size="lg" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-doorstep-darkgreen p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="heading-sm mb-6 text-white">Primary Variant</h2>
              <Loader variant="primary" />
            </div>
            
            <div className="bg-doorstep-darkgreen p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="heading-sm mb-6 text-white">Secondary Variant</h2>
              <Loader variant="secondary" />
            </div>
            
            <div className="bg-doorstep-darkgreen p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="heading-sm mb-6 text-white">White Variant</h2>
              <Loader variant="white" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center mb-12">
            <h2 className="heading-sm mb-6 text-doorstep-darkgreen">With Text</h2>
            <Loader text="Loading products..." />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="heading-sm mb-6 text-doorstep-darkgreen">Fullscreen Loader Demo</h2>
            <Button 
              onClick={() => {
                setShowFullScreen(true);
                setTimeout(() => setShowFullScreen(false), 3000);
              }}
              className="bg-doorstep-green hover:bg-doorstep-darkgreen text-white"
            >
              Show Fullscreen Loader (3s)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderDemo;
