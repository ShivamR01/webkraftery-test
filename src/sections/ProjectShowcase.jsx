import React, { useEffect, useRef, useState, memo, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { ExternalLink, Github, Cpu, Layers, ArrowUpRight, Zap } from 'lucide-react';
import { mockProjects } from '../data/mockProjects';

gsap.registerPlugin(ScrollTrigger);

// 1. Premium Color Protocol
const projectAccents = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'];

const Project3DCard = memo(({ project, progress, mousePos, isMobile, index }) => {
  const accentColor = projectAccents[index % projectAccents.length];
  
  const zPos = isMobile ? (1 - progress) * 800 : (1 - progress) * 2000;
  const yPos = isMobile ? (1 - progress) * 150 : 0;
  const opacity = progress > 0.8 ? 1 - (progress - 0.8) * 5 : progress * 5;

  const rotateX = isMobile ? 0 : (mousePos.y - 0.5) * 15;
  const rotateY = isMobile ? 0 : (mousePos.x - 0.5) * 20;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform px-4"
      style={{
        transform: `perspective(1200px) translate3d(0, ${yPos}px, ${-zPos}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        opacity: progress > 0 ? 1 : 0,
        zIndex: progress > 0.1 && progress < 0.9 ? 50 : 10,
        visibility: progress > 0 ? 'visible' : 'hidden'
      }}
    >
      <div 
        className={`relative w-full max-w-6xl ${isMobile ? 'aspect-[4/5] h-[70vh]' : 'aspect-video'} rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border-[2px] md:border-[6px] shadow-2xl bg-[#050505] transition-all duration-500`}
        style={{ borderColor: `${accentColor}40`, boxShadow: progress > 0.3 ? `0 0 50px ${accentColor}20` : 'none' }}
      >
        
        {/* Colorful Media Layer - High Saturation */}
        <div className="absolute inset-0">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover saturate-[1.2] brightness-[0.6] contrast-[1.1] transition-transform duration-700"
            style={{ transform: `scale(${1 + (1 - progress) * 0.3})` }}
          />
          {/* Dynamic Color Overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-color" style={{ backgroundColor: accentColor }} />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 md:p-16 flex flex-col justify-end">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_currentcolor]" style={{ backgroundColor: accentColor, color: accentColor }} />
                <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase italic">Node_0{project.id}</span>
             </div>
             <Zap size={14} className="text-white/20" />
          </div>
          
          <h3 className="text-white text-3xl md:text-7xl font-black uppercase italic leading-[0.85] mb-6 tracking-tighter">
            {project.title.split(' ').slice(0, 2).join(' ')} <br />
            <span className="text-transparent" style={{ WebkitTextStroke: isMobile ? `1px ${accentColor}` : `2px ${accentColor}` }}>
              {project.title.split(' ').slice(2).join(' ')}
            </span>
          </h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.slice(0, isMobile ? 3 : 5).map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] uppercase font-bold" style={{ color: accentColor }}>
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <a href={project.demoLink} target="_blank" className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:text-white transition-all" style={{ '--hover-bg': accentColor }}>
               Initialize_Live <ArrowUpRight size={14} />
             </a>
             <a href={project.githubLink} target="_blank" className="p-4 bg-white/5 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                <Github size={18} />
             </a>
          </div>
        </div>
      </div>
      {/* Removed per-card <style> injection to reduce DOM cost */}
    </div>
  );
});

const ProjectVault = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Throttle mouse updates using rAF to avoid flooding React state
    const mousePosRef = { current: { x: 0.5, y: 0.5 } };
    const rafRef = { id: null };
    const handleMouseMove = (e) => {
      if (isMobile) return;
      mousePosRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
      if (rafRef.id == null) {
        rafRef.id = requestAnimationFrame(() => {
          setMousePos(mousePosRef.current);
          rafRef.id = null;
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Reuse a global Lenis instance if present to avoid multiple RAF loops
    let lenis = window._lenisInstance;
    let createdLenis = false;
    let rafId;
    if (!lenis) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
      });
      // start RAF loop for Lenis
      function rafLoop(time) { lenis.raf(time); rafId = requestAnimationFrame(rafLoop); }
      rafId = requestAnimationFrame(rafLoop);
      // proxy scroller for ScrollTrigger
      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.documentElement.style.transform ? 'transform' : 'fixed'
      });
      window._lenisInstance = lenis;
      createdLenis = true;
    }

    // keep ScrollTrigger synced
    lenis.on && lenis.on('scroll', ScrollTrigger.update);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${mockProjects.length * 150}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => setScrollProgress(self.progress)
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      if (lenis && lenis.off) lenis.off('scroll', ScrollTrigger.update);
      if (createdLenis) {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        delete window._lenisInstance;
      }
    };
  }, []); // run once — resize/mouse handlers update state without re-creating animations

  const currentIndex = Math.min(Math.floor(scrollProgress * mockProjects.length), mockProjects.length - 1);
  const currentAccent = projectAccents[currentIndex % projectAccents.length];

  // Memoize SVG background data URI to avoid recreating on every render
  const bgSvg = useMemo(() => {
    return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60 L60 0 L0 0' fill='none' stroke='${encodeURIComponent(currentAccent)}' stroke-width='0.5'/%3E%3C/svg%3E")`;
  }, [currentAccent]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center contain-paint transition-colors duration-1000">
      
      {/* 4. PREMIUM BACKGROUND: COLOR-WAVE GRID */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.05] transition-opacity duration-1000" style={{ backgroundImage: bgSvg }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
        {/* Dynamic Ambient Glow */}
        <div 
          className="absolute inset-0 opacity-20 blur-[150px] transition-colors duration-1000"
          style={{ background: `radial-gradient(circle at center, ${currentAccent}, transparent)` }}
        />
      </div>

      {/* FLOATING HUD */}
      <div className="absolute inset-x-6 md:inset-x-12 top-1/2 -translate-y-1/2 z-50 flex justify-between pointer-events-none opacity-40 hidden sm:flex">
         <div className="flex flex-col gap-6">
            <Cpu size={18} style={{ color: currentAccent }} className="transition-colors duration-1000" />
            <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent" />
            <span className="font-mono text-[8px] rotate-90 origin-left uppercase tracking-[0.4em] text-white">System_Scan</span>
         </div>
         <div className="flex flex-col items-end gap-6">
            <span className="font-mono text-[8px] -rotate-90 origin-right uppercase tracking-[0.4em] text-white">Archive_0{currentIndex + 1}</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent" />
            <Layers size={18} style={{ color: currentAccent }} className="transition-colors duration-1000" />
         </div>
      </div>

      {/* THE 3D STAGE */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/**
         * Virtualize cards: render only current index and its neighbors to limit DOM/GPU work
         */}
        {([currentIndex - 1, currentIndex, currentIndex + 1]
          .filter(i => i >= 0 && i < mockProjects.length)
          .map(i => {
            const project = mockProjects[i];
            const cardStep = 1 / mockProjects.length;
            const localProgress = Math.max(0, Math.min(1, (scrollProgress - (i * cardStep)) / cardStep));
            return (
              <Project3DCard
                key={project.id}
                project={project}
                progress={localProgress}
                mousePos={mousePos}
                isMobile={isMobile}
                index={i}
              />
            );
        }))}
      </div>

      {/* NAVIGATION FOOTER */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-4 w-full px-6">
         <div className="flex justify-center gap-2 w-full max-w-[300px]">
            {mockProjects.map((_, i) => (
              <div 
                key={i} 
                className="h-1 rounded-full transition-all duration-700 ease-out"
                style={{ 
                  width: currentIndex === i ? '64px' : '16px',
                  backgroundColor: currentIndex === i ? currentAccent : 'rgba(255,255,255,0.1)'
                }}
              />
            ))}
         </div>
         <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentAccent }} />
            <span className="text-white/30 font-mono text-[9px] tracking-[0.4em] uppercase">Protocol: Data_Flow_Active</span>
         </div>
      </div>

    </section>
  );
};

export default ProjectVault;