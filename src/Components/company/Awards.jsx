import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance for Title
      gsap.from(".reveal-awards", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out"
      });

      // Staggered reveal for award cards
      gsap.from(".award-card", {
        scrollTrigger: {
          trigger: ".award-grid",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const awardsList = [
    { title: "Best Tech Startup 2025", org: "Global Innovation Hub", icon: "🏆", year: "2025" },
    { title: "UI/UX Excellence", org: "Design Frontiers", icon: "🎨", year: "2024" },
    { title: "Performance Engineering", org: "Scalability Conf", icon: "⚡", year: "2024" },
    { title: "Safe Code Award", org: "Cyber Shield", icon: "🛡️", year: "2023" },
    { title: "Innovator of the Year", org: "Future Web Awards", icon: "💡", year: "2023" },
    { title: "Client Growth Partner", org: "ROI Masters", icon: "📈", year: "2022" },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#020202] text-[#e0e0e0] min-h-screen overflow-hidden font-sans">
      
      {/* --- PRESTIGE BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      
      {/* Floating Light Leaks */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-yellow-600/5 blur-[120px] rounded-full" />

      {/* Ghost Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.01] pointer-events-none select-none font-black text-[25vw] leading-none uppercase">
        HONORS • MERIT • 
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* --- HEADER --- */}
        <header className="mb-32 text-center md:text-left">
          <div className="reveal-awards inline-block px-4 py-1 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/5 backdrop-blur-md">
            <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase font-mono italic">
              // Hall of Excellence
            </span>
          </div>
          <h1 className="reveal-awards text-6xl md:text-[140px] font-black leading-[0.8] tracking-tighter mb-10">
            AWARDS & <br /> 
            <span className="not-italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white/20 uppercase">
              RECOGNITION.
            </span>
          </h1>
          <p className="reveal-awards max-w-2xl text-gray-500 text-lg md:text-xl font-light leading-relaxed italic">
            Celebrating the milestones where our code met the industry's highest standards of innovation and integrity.
          </p>
        </header>

        {/* --- AWARDS GRID --- */}
        <div className="award-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsList.map((award, idx) => (
            <div 
              key={idx} 
              className="award-card group relative bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 hover:bg-white/[0.05] hover:border-yellow-500/30 transition-all duration-700 overflow-hidden"
            >
              {/* Year Marker */}
              <span className="absolute top-8 right-10 text-xs font-mono text-gray-700 group-hover:text-yellow-500/50 transition-colors">
                {award.year}
              </span>

              {/* Icon */}
              <div className="text-6xl mb-8 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out">
                {award.icon}
              </div>

              {/* Info */}
              <h3 className="text-2xl font-serif italic mb-2 text-white group-hover:text-yellow-200 transition-colors">
                {award.title}
              </h3>
              <p className="text-gray-500 text-sm font-light tracking-wide uppercase">
                {award.org}
              </p>

              {/* HUD Decoration */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                 <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                 <span className="text-[10px] font-mono tracking-widest uppercase">Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM QUOTE --- */}
        <footer className="reveal-awards mt-40 text-center">
           <div className="w-px h-24 bg-gradient-to-b from-yellow-500/50 to-transparent mx-auto mb-10"></div>
           <p className="max-w-xl mx-auto text-gray-400 font-serif italic text-2xl">
             "Awards are just milestones; the true prize is the transformation we bring to our clients' digital lives."
           </p>
        </footer>
      </div>

      {/* --- QUIRKY UI HUD --- */}
      <div className="fixed bottom-10 right-10 hidden lg:flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full z-[60]">
         <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
         <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase leading-none italic">Prestige_Level: Max</span>
      </div>
    </div>
  );
};

export default Awards;