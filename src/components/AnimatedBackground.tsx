
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-aigentzy-light-violet/10 to-aigentzy-medium-blue/5 animate-gradient-shift"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-aigentzy-light-violet/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-aigentzy-medium-blue/15 rounded-lg rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-aigentzy-deep-violet/10 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-aigentzy-neutral-gray/30 rounded-lg animate-float-slow"></div>
      
      {/* Pulsing dots */}
      <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-aigentzy-deep-violet/40 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-aigentzy-medium-blue/50 rounded-full animate-pulse-medium"></div>
      <div className="absolute bottom-1/3 left-2/3 w-4 h-4 bg-aigentzy-light-violet/60 rounded-full animate-pulse-fast"></div>
      
      {/* Interactive cursor glow */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-aigentzy-deep-violet/5 to-transparent rounded-full transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh animate-mesh-move opacity-30"></div>
    </div>
  );
};

export default AnimatedBackground;
