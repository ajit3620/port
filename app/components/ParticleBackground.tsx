'use client';

import React, { useEffect, useRef, useState } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();

    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Particle class
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      
      constructor() {
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.size = 3;
      }

      init(canvas: HTMLCanvasElement) {
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

      draw(ctx: CanvasRenderingContext2D) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Lighter colors for both modes
        ctx.fillStyle = isDarkMode 
          ? 'rgba(220, 220, 220, 0.5)' 
          : 'rgba(150, 150, 150, 0.3)';
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = 100;
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const particle = new Particle();
      particle.init(canvas);
      newParticles.push(particle);
    }
    particlesRef.current = newParticles;
    setParticles(newParticles);

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update(canvas);
        particle.draw(ctx);
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