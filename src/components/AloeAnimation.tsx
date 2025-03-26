import React, { useEffect, useRef } from 'react';

const AloeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add the script dynamically
    const script = document.createElement('script');
    script.src = '/js/script.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="word-cloud-container" 
      ref={containerRef}
      className="relative w-full md:w-4/5 max-w-2xl aspect-[1.5] mx-auto"
    >
      {/* Instead of an image, use a styled div with a gradient background */}
      <div 
        id="aloe-image" 
        className="absolute inset-0 opacity-0 z-10 transition-opacity duration-[3000ms] delay-1000"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(144, 238, 144, 0.5) 0%, rgba(144, 238, 144, 0.3) 50%, rgba(144, 238, 144, 0) 70%)',
        }}
      ></div>
    </div>
  );
};

export default AloeAnimation; 