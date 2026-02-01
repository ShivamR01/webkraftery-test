import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/uiux1.jpeg';
import img2 from '../../assets/uiux-4.jpeg';

gsap.registerPlugin(ScrollTrigger);

const UIUX = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Title Entrance
      tl.from(".reveal-text", { y: 100, opacity: 0, stagger: 0.2, duration: 1.5 })
        .from(".glass-card", { 
          scale: 0.9, 
          opacity: 0, 
          duration: 1.2,
          ease: "back.out(1.2)" 
        }, "-=1")
        .from(".floating-ui", { y: 40, opacity: 0, stagger: 0.1 }, "-=0.5");

      // Background Parallax
      gsap.to(".bg-shape", {
        y: -100,
        rotation: 15,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 2,
        }
      });

      // Reveal sections on scroll
      gsap.utils.toArray(".reveal-on-scroll").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1.2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#08040a] text-[#f0f0f0] min-h-screen font-sans overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      
      {/* Abstract Glowing Shapes */}
      <div className="bg-shape absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="bg-shape absolute bottom-[10%] left-[-5%] w-[35vw] h-[35vw] bg-fuchsia-600/10 blur-[100px] rounded-full" />

      {/* Background Kinetic Typography */}
      <div className="absolute top-1/4 left-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none italic font-black text-[20vw] leading-none">
        EMPATHY • PIXELS • FLOW • 
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* --- HERO SECTION --- */}
        <header className="text-center mb-40">
          <div className="reveal-text inline-block px-4 py-1 mb-8 border border-purple-500/30 rounded-full bg-purple-500/5 backdrop-blur-md">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase font-mono">
              The Architecture of Delight
            </span>
          </div>
          <h1 className="reveal-text text-6xl md:text-[140px] font-black leading-[0.8] tracking-tighter italic mb-10">
            UI/UX <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-fuchsia-500 not-italic font-serif font-light tracking-normal">
              AESTHETICS.
            </span>
          </h1>
          <p className="reveal-text max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            We don't just design screens; we orchestrate human emotions through intuitive digital journeys.
          </p>
        </header>

        {/* --- BENTO CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40">
          
          {/* Main Visual Thinking Card */}
          <div className="glass-card md:col-span-8 bg-white/[0.03] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden group">
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-4xl font-serif italic mb-6">Designing for <br />Conversion.</h2>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Our philosophy is simple: empathy leads to engagement. We analyze human behavior to eliminate friction and spark joy in every interaction.
              </p>
              <div className="flex flex-wrap gap-3">
                {['User Research', 'Wireframing', 'Prototyping', 'Accessibility'].map(step => (
                  <span key={step} className="floating-ui px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] tracking-widest font-bold uppercase text-purple-300">{step}</span>
                ))}
              </div>
            </div>
            <img 
              src={img1} 
              alt="Design Flow" 
              className="absolute right-[-10%] bottom-[-5%] w-2/3 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 rotate-2 group-hover:rotate-0 scale-110"
            />
          </div>

          {/* Metric/Quirky Card */}
          <div className="glass-card md:col-span-4 bg-purple-950/20 border border-purple-500/10 rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden relative group">
            <div className="text-purple-400 font-mono text-[10px] uppercase tracking-widest">SYSTEM_CHECK</div>
            <div className="relative z-10">
              <span className="text-8xl font-black italic text-white tracking-tighter">0.3s</span>
              <p className="text-gray-500 text-xs mt-2 uppercase tracking-[0.2em] font-light italic">Average time to <br /> establish user trust.</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/20 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-700" />
          </div>

          {/* Process Section HUD */}
          <div className="reveal-on-scroll md:col-span-12 mt-6 bg-[#0c0812] border border-white/5 rounded-[3rem] p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <img 
                  src={img2} 
                  className="rounded-[2.5rem] border border-white/10 shadow-2xl filter brightness-90 hover:brightness-100 transition-all duration-700"
                  alt="User Journey"
                />
              </div>
              <div className="space-y-10">
                <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-[0.4em]">The Design HUD</span>
                <h3 className="text-5xl font-serif italic mb-6">Empathy-Driven <br /><span className="text-white not-italic font-black tracking-tighter uppercase">Framework.</span></h3>
                <div className="space-y-6">
                  {[
                    { t: "Human Research", d: "Deep diving into persona psychology." },
                    { t: "Iterative Testing", d: "Breaking the design to build it better." },
                    { t: "Dev Sync", d: "Seamless handoff for pixel-perfect code." }
                  ].map((s, i) => (
                    <div key={i} className="group border-l border-white/10 pl-6 hover:border-purple-500 transition-colors">
                      <h5 className="text-lg font-bold group-hover:text-purple-400 transition-colors">{s.t}</h5>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- LUXURY CTA --- */}
        <footer className="reveal-on-scroll text-center py-32 relative rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">
            Ready to <span className="not-italic font-black text-white underline decoration-purple-500 decoration-1 underline-offset-[14px]">Transcend?</span>
          </h2>
          
          <button
            onClick={() => navigate('/contactus')}
            className="group relative px-20 py-6 bg-transparent overflow-hidden"
          >
            <span className="relative z-10 text-white font-mono tracking-[0.6em] text-[10px] uppercase group-hover:text-black transition-colors duration-500">
                Initiate Project
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[expo.inOut]"></div>
            <div className="absolute inset-0 border border-white/20"></div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default UIUX;