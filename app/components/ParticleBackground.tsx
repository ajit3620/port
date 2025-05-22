'use client';

import React, { useEffect, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  
  constructor(canvas: HTMLCanvasElement) {
    this.size = 3;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.directionX = (Math.random() - 0.5) * 0.8;
    this.directionY = (Math.random() - 0.5) * 0.8;
  }

  update(canvas: HTMLCanvasElement) {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    this.x += this.directionX;
    this.y += this.directionY;
  }

  draw(ctx: CanvasRenderingContext2D, isDarkMode: boolean) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = isDarkMode 
      ? 'rgba(220, 220, 220, 0.5)' 
      : 'rgba(150, 150, 150, 0.3)';
    ctx.fill();
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();

    const isDarkMode = document.documentElement.classList.contains('dark');

    // Initialize particles
    const particleCount = 100;
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle(canvas));

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update(canvas);
        particle.draw(ctx, isDarkMode);
      });
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none opacity-100"
      />
    </div>
  );
};

export default ParticleBackground; 