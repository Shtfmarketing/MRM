import React, { useEffect, useState } from 'react';

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main glow */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          {/* Inner glow */}
          <div className="absolute w-4 h-4 bg-[#D5B803] rounded-full opacity-50 blur-sm" />
          {/* Outer glow */}
          <div className="absolute w-8 h-8 bg-[#D5B803] rounded-full opacity-20 blur-md -inset-4" />
          {/* Core */}
          <div className="w-2 h-2 bg-[#D5B803] rounded-full" />
        </div>
      </div>

      {/* Targeting lines */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute h-px w-16 bg-gradient-to-r from-transparent via-[#D5B803]/30 to-transparent -translate-x-1/2" />
          {/* Vertical line */}
          <div className="absolute w-px h-16 bg-gradient-to-b from-transparent via-[#D5B803]/30 to-transparent -translate-y-1/2" />
        </div>
      </div>
    </>
  );
};

export default GlowingCursor;