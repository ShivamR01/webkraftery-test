import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import CTA from '../Common/CTA';

gsap.registerPlugin(ScrollTrigger);

const ChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Entrance sequence
      tl.from(".reveal-y", { y: 100, opacity: 0, stagger: 0.2, duration: 1.5 })
        .from(".bento-card", { 
          scale: 0.9, 
          opacity: 0, 
          stagger: 0.1, 
          duration: 1.2,
          ease: "back.out(1.2)" 
        }, "-=1");

      // Floating parallax blobs
      gsap.to(".bg-blob", {
        y: -100,
        x: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 2,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    { 
      t: "Expertise & Innovation", 
      d: "Our veterans engineer future-proof architectures using the latest tech stacks.", 
      i: "💡", 
      size: "md:col-span-8",
      tag: "// Tech_Pioneer"
    },
    { 
      t: "Custom Solutions", 
      d: "Tailored DNA for your brand. No templates, just bespoke code.", 
      i: "✨", 
      size: "md:col-span-4",
      tag: "// Unique_ID"
    },
    { 
      t: "Maximum ROI", 
      d: "Conversion-optimized designs that turn traffic into revenue.", 
      i: "📈", 
      size: "md:col-span-4",
      tag: "// Growth_Sync"
    },
    { 
      t: "Client-Centric", 
      d: "Transparent communication with direct access to our lead engineers.", 
      i: "🤝", 
      size: "md:col-span-8",
      tag: "// Human_Interface"
    },
    { 
      t: "Scalable & Secure", 
      d: "Military-grade encryption and elastic scaling built into every core.", 
      i: "🔒", 
      size: "md:col-span-6",
      tag: "// Iron_Clad"
    },
    { 
      t: "Full-Spectrum", 
      d: "From design to cloud maintenance, we are your 360° digital partner.", 
      i: "✅", 
      size: "md:col-span-6",
      tag: "// All_In_One"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#050208] text-[#e0e0e0] min-h-screen font-sans overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="bg-blob absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-indigo-600/10 blur-[150px] rounded-full" />
      <div className="bg-blob absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-purple-600/10 blur-[120px] rounded-full" />

      {/* Background Kinetic Text */}
      <div className="absolute top-40 left-0 whitespace-nowrap opacity-[0.01] pointer-events-none select-none font-black text-[20vw] leading-none italic uppercase">
        WHY US • THE ADVANTAGE • 
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* --- HEADER SECTION --- */}
        <header className="text-center mb-32">
          <div className="reveal-y inline-block px-4 py-1 mb-8 border border-indigo-500/30 rounded-full bg-indigo-500/5 backdrop-blur-md">
            <span className="text-indigo-400 text-[10px] font-bold tracking-[0.4em] uppercase font-mono italic">
              // Partner with Excellence
            </span>
          </div>
          <h1 className="reveal-y text-5xl md:text-[110px] font-black leading-[0.8] tracking-tighter mb-10 italic">
            THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 not-italic font-serif font-light tracking-normal lowercase">
              advantage.
            </span>
          </h1>
          <p className="reveal-y max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light leading-relaxed italic">
            Choosing a partner is choosing a future. At WebKraftery, we combine architectural mastery with client-first empathy to build something unstoppable.
          </p>
        </header>

        {/* --- BENTO REASONS GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className={`bento-card ${item.size} group relative bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-700 overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-5xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                    {item.i}
                  </div>
                  <span className="text-[10px] font-mono text-indigo-500/50 tracking-widest uppercase">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-3xl font-serif italic mb-4 group-hover:text-white transition-colors">
                  {item.t}
                </h3>
                <p className="text-gray-500 text-base font-light leading-relaxed max-w-md">
                  {item.d}
                </p>
              </div>

              {/* HUD Decoration */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-500/5 blur-[60px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />
            </div>
          ))}
        </section>

        {/* --- PREMIUM CTA --- */}
        <div className="reveal-y bento-card relative rounded-[4rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />
          <CTA />
        </div>

      </div>

      {/* --- QUIRKY HUD ELEMENT --- */}
      <div className="fixed bottom-10 left-10 hidden lg:flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full z-50">
        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_#6366f1]" />
        <span className="text-[10px] font-mono tracking-[0.3em] text-gray-400 uppercase">Alliance_Sync_Active</span>
      </div>
    </div>
  );
};

export default ChooseUs;