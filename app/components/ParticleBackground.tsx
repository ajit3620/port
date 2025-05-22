'use client';

import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.2; // Increased to 120% of viewport height
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

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
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = (Math.random() - 0.5) * 0.8;
        this.directionY = (Math.random() - 0.5) * 0.8;
        this.size = 3;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
      }

      draw() {
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

    // Create particle array
    const particleArray: Particle[] = [];
    const numberOfParticles = 150;

    for (let i = 0; i < numberOfParticles; i++) {
      particleArray.push(new Particle());
    }

    // Connect particles that are close to each other
    const connect = () => {
      for (let i = 0; i < particleArray.length; i++) {
        for (let j = i + 1; j < particleArray.length; j++) {
          const dx = particleArray[i].x - particleArray[j].x;
          const dy = particleArray[i].y - particleArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            // Lighter colors for connections
            const opacity = isDarkMode ? 0.4 - distance/500 : 0.25 - distance/500;
            ctx.strokeStyle = isDarkMode 
              ? `rgba(220, 220, 220, ${opacity})`
              : `rgba(150, 150, 150, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particleArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connect();
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
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