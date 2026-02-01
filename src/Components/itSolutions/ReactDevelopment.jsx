import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import React1 from '../../assets/React1.png';
import React2 from '../../assets/React2.webp';

gsap.registerPlugin(ScrollTrigger);

const ReactDevelopment = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Entrance Sequence
      tl.from(".reveal-h1", { y: 80, opacity: 0, duration: 1.2 })
        .from(".reveal-sub", { y: 40, opacity: 0, duration: 1 }, "-=0.8")
        .from(".bento-card", { 
          scale: 0.9, 
          opacity: 0, 
          stagger: 0.1, 
          duration: 1.2,
          ease: "back.out(1.4)" 
        }, "-=0.5");

      // Scroll reveal for images and sections
      gsap.utils.toArray(".scroll-reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#02040a] text-[#e1e1e1] min-h-screen font-sans overflow-hidden">
      
      {/* --- COSMIC BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* --- HERO SECTION --- */}
        <header className="text-center mb-32">
          <div className="inline-block px-4 py-1 mb-6 border border-blue-500/30 rounded-full bg-blue-500/5 backdrop-blur-md">
            <span className="text-blue-400 text-[10px] font-bold tracking-[0.4em] uppercase">Atomic Design Logic</span>
          </div>
          <h1 className="reveal-h1 text-7xl md:text-[140px] font-black leading-[0.8] tracking-tighter mb-8">
            REACT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 italic font-serif font-light">
              REVOLUTION
            </span>
          </h1>
          <p className="reveal-sub max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            Harnessing the Virtual DOM to create blazing fast, component-driven experiences that redefine the modern web.
          </p>
        </header>

        {/* --- BENTO CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40">
          
          {/* Main Why React Card */}
          <div className="bento-card md:col-span-8 group bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden transition-all hover:bg-white/[0.04]">
            <div className="relative z-10">
              <h2 className="text-4xl font-serif italic mb-8">Engineered for Performance.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-gray-400 font-light leading-relaxed">
                  React isn't just a library; it's a blueprint for scalability. We use its component-based DNA to build systems that are as maintainable as they are beautiful.
                </p>
                <ul className="space-y-3">
                  {[
                    "Virtual DOM Optimization",
                    "State Management (Redux/Zustand)",
                    "Server-Side Rendering (Next.js)",
                    "Micro-Frontend Readiness"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-mono text-blue-400">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Background Image Overlay */}
            <img 
              src={React1} 
              className="absolute right-[-15%] top-[-10%] w-2/3 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-1000 rotate-12"
              alt="React Abstract" 
            />
          </div>

          {/* Quick Metrics Card */}
          <div className="bento-card md:col-span-4 bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 rounded-[2.5rem] p-12 flex flex-col justify-between">
            <div className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4">// System Status</div>
            <div>
              <span className="text-8xl font-black italic text-white tracking-tighter">60</span>
              <span className="text-3xl font-serif italic text-blue-400">fps</span>
              <p className="text-gray-500 text-sm mt-2 uppercase tracking-[0.2em] font-light">Fluid Rendering Guaranteed</p>
            </div>
          </div>

          {/* Process Section (Scroll-Reveal) */}
          <div className="scroll-reveal md:col-span-12 mt-10 bg-[#0a0c14] border border-white/5 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <img 
                  src={React2} 
                  className="rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="React Process" 
                />
              </div>
              <div>
                <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Lifecycle</span>
                <h3 className="text-5xl font-serif italic mb-10">Agile Delivery <br /><span className="text-white not-italic font-black">SYNCED.</span></h3>
                
                <div className="space-y-8">
                  {[
                    { t: "Atomic Discovery", d: "Breaking your idea into modular components." },
                    { t: "Iterative Sprints", d: "Rapid prototyping with live feedback loops." },
                    { t: "Rigorous QA", d: "End-to-end testing for bulletproof stability." }
                  ].map((s, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-blue-500 font-bold font-mono">0{i+1}.</span>
                        <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors uppercase tracking-widest">{s.t}</h4>
                      </div>
                      <p className="text-gray-500 font-light ml-10">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PREMIUM CALL TO ACTION --- */}
        <div className="scroll-reveal text-center py-32 relative rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 overflow-hidden">
          {/* Background React Logo (Quirky element) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] text-blue-500/5 pointer-events-none select-none animate-spin-slow">
            ⚛
          </div>
          
          <h2 className="relative z-10 text-4xl md:text-7xl font-serif italic mb-12">
            Build the <span className="not-italic font-black text-white underline decoration-blue-500 decoration-2 underline-offset-[12px]">Exceptional.</span>
          </h2>
          
          <button
            onClick={() => navigate('/contactus')}
            className="relative z-10 group px-16 py-6 bg-white text-black font-black tracking-widest text-xs uppercase rounded-full overflow-hidden hover:text-white transition-colors duration-500"
          >
            <span className="relative z-10">Commence Consultation</span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[expo.out]"></div>
          </button>
        </div>

      </div>
      
      {/* Custom Styles for Quirky Rotation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ReactDevelopment;