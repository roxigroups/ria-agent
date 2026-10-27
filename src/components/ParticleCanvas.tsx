'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseX: number;
  baseY: number;
  color: string;
  speed: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Monochromatic particles
    // Monochromatic particles (idle) and vibrant harmonic particles (speaking)
    const defaultColors = [
      'rgba(255, 255, 255, 0.95)',
      'rgba(230, 230, 230, 0.75)',
      'rgba(180, 180, 180, 0.55)',
      'rgba(255, 255, 255, 0.85)',
    ];

    const speakingColors = [
      'rgba(103, 232, 249, 0.95)', // electric cyan
      'rgba(244, 114, 182, 0.95)', // neon magenta
      'rgba(129, 140, 248, 0.95)', // cosmic violet
      'rgba(56, 189, 248, 0.9)',   // sky cyan
      'rgba(255, 255, 255, 0.95)', // crisp star white
    ];

    const particleCount = 75;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        z: Math.random() * 2 + 0.5,
        radius: Math.random() * 2 + 1,
        color: defaultColors[Math.floor(Math.random() * defaultColors.length)],
        speed: (Math.random() * 0.4 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const render = () => {
      const isSpeaking = typeof document !== 'undefined' && document.body.classList.contains('ria-agent-speaking');

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const offsetX = (mouseX - width / 2) * 0.04;
      const offsetY = (mouseY - height / 2) * 0.04;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.baseY += isSpeaking ? p.speed * 1.6 : p.speed;

        if (p.baseY < 0) p.baseY = height;
        if (p.baseY > height) p.baseY = 0;

        const drawX = p.baseX + offsetX * p.z;
        const drawY = p.baseY + offsetY * p.z;

        const particleColor = isSpeaking ? speakingColors[i % speakingColors.length] : p.color;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius * p.z, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = isSpeaking ? p.radius * 12 : p.radius * 6;
        ctx.shadowColor = particleColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
        opacity: 0.8,
      }}
    />
  );
}
