'use client';

import React, { useState, useRef, MouseEvent, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  glareOpacity?: number;
  style?: React.CSSProperties;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
  glareOpacity = 0.25,
  style = {},
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setGlareStyle({
      opacity: glareOpacity,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 25%, transparent 70%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlareStyle({ opacity: 0, transition: 'opacity 0.5s ease' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card-wrapper ${className}`}
      style={{
        ...style,
        transform: transformStyle,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
        position: 'relative',
      }}
    >
      {children}
      {/* Pure White Specular Glare Reflection */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 20,
          mixBlendMode: 'overlay',
          ...glareStyle,
        }}
      />
    </div>
  );
}
