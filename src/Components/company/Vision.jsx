import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Entrance sequence
      tl.from(".reveal-h1", { y: 100, opacity: 0, duration: 1.5 })
        .from(".reveal-sub", { y: 40, opacity: 0, duration: 1 }, "-=1")
        .from(".bg-blur-blob", { opacity: 0, scale: 0.5, duration: 2 }, "-=1.5");

      // Scroll Reveal for Mission/Vision panels
      gsap.utils.toArray(".panel-reveal").forEach((panel) => {
        gsap.from(panel, {
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out"
        });
      });

      // Values Stagger
      gsap.from(".value-tile", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#050208] text-[#e0e0e0] min-h-screen font-sans overflow-hidden">
      
      {/* --- COSMIC BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="bg-blur-blob absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-violet-600/10 blur-[150px] rounded-full" />
      <div className="bg-blur-blob absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-cyan-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* --- HEADER SECTION --- */}
        <header className="text-center mb-32 md:mb-48">
          <div className="reveal-sub inline-block px-4 py-1 mb-6 border border-violet-500/30 rounded-full bg-violet-500/5 backdrop-blur-md">
            <span className="text-violet-400 text-[10px] font-bold tracking-[0.4em] uppercase font-mono italic">
              // The Pulse of WebKraftery
            </span>
          </div>
          <h1 className="reveal-h1 text-5xl md:text-[130px] font-black leading-[0.8] tracking-tighter italic mb-10">
            PURPOSE <br /> 
            <span className="not-italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-400">
              DEFINED.
            </span>
          </h1>
          <p className="reveal-sub max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light leading-relaxed italic">
            At WebKraftery, we don't just exist to code; we exist to lead the digital frontier through a focused mission and a visionary roadmap.
          </p>
        </header>

        {/* --- MISSION PANEL (Asymmetric Glass) --- */}
        <section className="panel-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
             <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-violet-600/10 border border-violet-500/20 rounded-[3rem] rotate-6 hover:rotate-0 transition-transform duration-700">
                <span className="text-8xl">🎯</span>
                <div className="absolute inset-0 animate-pulse bg-violet-500/5 rounded-[3rem] blur-2xl" />
             </div>
          </div>
          <div className="lg:col-span-8 bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[3rem] backdrop-blur-sm">
             <span className="text-violet-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block">01_The Mission</span>
             <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Empowering <br /><span className="not-italic font-black text-white">Digital Excellence.</span></h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed">
               Our mission is to arm businesses with the technical weaponry they need to dominate the online landscape. We transform complex digital challenges into high-performance opportunities, ensuring every client presence is not just functional, but legendary.
             </p>
          </div>
        </section>

        {/* --- VISION PANEL (Reverse Asymmetric) --- */}
        <section className="panel-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 mb-48 items-center">
          <div className="lg:col-span-8 lg:order-1 order-2 bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[3rem] backdrop-blur-sm lg:text-right">
             <span className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block">02_The Vision</span>
             <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Shaping the <br /><span className="not-italic font-black text-white uppercase tracking-tighter">New Frontier.</span></h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed">
               We envision a global ecosystem where "standard" is obsolete. WebKraftery aims to be the premier architect of the web, recognized for pushing the limits of what’s possible and setting the benchmark for digital growth across the planet.
             </p>
          </div>
          <div className="lg:col-span-4 lg:order-2 order-1 flex justify-center lg:justify-end">
             <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-cyan-600/10 border border-cyan-500/20 rounded-[3rem] -rotate-6 hover:rotate-0 transition-transform duration-700">
                <span className="text-8xl">🔭</span>
                <div className="absolute inset-0 animate-pulse bg-cyan-500/5 rounded-[3rem] blur-2xl" />
             </div>
          </div>
        </section>

        {/* --- CORE VALUES (The Bento Grid) --- */}
        <section className="values-grid">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-serif italic mb-4">The <span className="not-italic font-black text-violet-500 uppercase tracking-tighter">Principles.</span></h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Innovation", d: "Bleeding-edge tech as a standard, never an afterthought.", i: "🚀", bg: "bg-violet-600/10 border-violet-500/20" },
              { t: "Client Success", d: "Building partnerships based on ROI, trust, and zero fluff.", i: "🤝", bg: "bg-cyan-600/10 border-cyan-500/20" },
              { t: "Integrity", d: "Radical transparency and unwavering ethical standards.", i: "✨", bg: "bg-white/5 border-white/10" },
              { t: "Excellence", d: "Superior quality is our baseline; perfection is our pursuit.", i: "🏆", bg: "bg-white/5 border-white/10" },
              { t: "Collaboration", d: "Teamwork that spans time zones and technologies.", i: "💡", bg: "bg-violet-600/10 border-violet-500/20" },
              { t: "Adaptability", d: "Evolving at the speed of the digital pulse.", i: "🔄", bg: "bg-cyan-600/10 border-cyan-500/20" },
            ].map((v, idx) => (
              <div key={idx} className={`value-tile ${v.bg} border rounded-[2.5rem] p-10 group hover:scale-[1.02] transition-all duration-500`}>
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">{v.i}</div>
                <h3 className="text-xl font-bold uppercase tracking-[0.2em] mb-3">{v.t}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed italic">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* --- QUIRKY STATUS INDICATOR --- */}
      <div className="fixed bottom-10 left-10 z-[100] hidden md:flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
         <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
         </span>
         <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase leading-none">Values_Locked</span>
      </div>
    </div>
  );
};

export default Vision;