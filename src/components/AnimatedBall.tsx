
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

const AnimatedBall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    // Create scene
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(150, 150);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create sphere
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    
    // Create material with gradient texture
    const textureSize = 512;
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = textureSize;
    textureCanvas.height = textureSize;
    const textureContext = textureCanvas.getContext('2d');
    
    if (textureContext) {
      // Create gradient
      const gradient = textureContext.createRadialGradient(
        textureSize / 2, textureSize / 2, 0,
        textureSize / 2, textureSize / 2, textureSize / 2
      );
      
      gradient.addColorStop(0, '#4CBB17');
      gradient.addColorStop(0.5, '#3CB043');
      gradient.addColorStop(1, '#125929');
      
      textureContext.fillStyle = gradient;
      textureContext.fillRect(0, 0, textureSize, textureSize);
    }
    
    const texture = new THREE.CanvasTexture(textureCanvas);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.2,
      metalness: 0.3,
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      renderer.setSize(150, 150);
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.firstChild) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, [isMobile]);
  
  // Don't render the container at all on mobile
  if (isMobile) return null;
  
  return (
    <div 
      ref={containerRef} 
      className="absolute left-8 top-1/2 -translate-y-1/2 w-[150px] h-[150px] z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBall;
