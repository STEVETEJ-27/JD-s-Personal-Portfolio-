import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimized Neural Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const getParticleCount = () => {
      if (width < 480) return 30;
      if (width < 768) return 45;
      if (width < 1280) return 65;
      return 90;
    };

    const getConnectionDistance = () => (width < 768 ? 100 : 130);

    const updateCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // Use device pixel ratio for crisp rendering
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.8;
        this.opacity = Math.random() * 0.5 + 0.4;
      }

      update() {
        // Subtle mouse attraction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          this.vx += (dx / dist) * 0.02;
          this.vy += (dy / dist) * 0.02;
        }

        // Speed limit
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 1.2) {
          this.vx = (this.vx / speed) * 1.2;
          this.vy = (this.vy / speed) * 1.2;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      const count = getParticleCount();
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    updateCanvasSize();
    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      // Subtle dark overlay for trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.12)';
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      const connDist = getConnectionDistance();

      particles.forEach(p => p.update());

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connDist) {
            const alpha = (1 - dist / connDist) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles on top
      particles.forEach(p => p.draw());

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Neural Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      <Navigation />
      <Hero scrollY={scrollY} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <footer className="relative py-5 px-4 border-t border-slate-800/50 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-600 text-xs">
          <p>
            © 2024{' '}
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }} className="text-slate-500">
              Kaladari Teja Swaneeth
            </span>
          </p>
          <a
            href="https://github.com/T4x-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 font-mono"
          >
            github.com/T4x-Dev
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;