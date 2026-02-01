import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/About1.jpg';
import img2 from '../../assets/About2.jpg';
import CTA from '../Common/CTA';

gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Entrance sequence
      tl.from(".reveal-y", { y: 100, opacity: 0, stagger: 0.2, duration: 1.5 })
        .from(".hero-img-box", { scale: 0.8, opacity: 0, duration: 1.2 }, "-=1")
        .from(".bg-ghost-text", { x: 100, opacity: 0, duration: 2 }, "-=1");

      // Scroll reveals for cards
      gsap.utils.toArray(".bento-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#050208] text-[#e0e0e0] min-h-screen font-sans overflow-hidden">
      
      {/* --- BACKGROUND ART --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="bg-ghost-text absolute top-20 right-[-10%] whitespace-nowrap opacity-[0.02] pointer-events-none select-none font-black text-[25vw] leading-none italic">
        INNOVATION • 2026 • 
      </div>
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-600/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        
        {/* --- HERO SECTION: THE MANIFESTO --- */}
        <header className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          <div className="lg:w-2/3">
            <span className="reveal-y block text-purple-500 font-mono text-xs tracking-[0.5em] uppercase mb-6 italic">
              // The Digital Architects
            </span>
            <h1 className="reveal-y text-6xl md:text-[110px] font-medium leading-[0.85] tracking-tighter mb-10 font-serif italic">
              WebKraftery <br /> 
              <span className="not-italic font-black text-white">Future Ready.</span>
            </h1>
            <p className="reveal-y max-w-xl text-gray-500 text-lg md:text-xl font-light leading-relaxed">
              We don't just build platforms; we create the digital fabric of tomorrow. Empowering businesses through technical mastery and artistic vision.
            </p>
          </div>
          <div className="lg:w-1/3 hero-img-box relative">
            <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
            <img 
              src={img1} 
              className="relative z-10 rounded-[2.5rem] border border-white/10 shadow-2xl rotate-3 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Innovation" 
            />
          </div>
        </header>

        {/* --- EXPERTISE: THE BENTO GRID --- */}
        <section className="mb-40">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Full-Spectrum <br /><span className="not-italic font-black text-purple-500 tracking-tighter uppercase">Excellence.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              { t: "Custom Web", d: "Tailored digital ecosystems built from the ground up.", i: "🌐", col: "md:col-span-8" },
              { t: "Logic & Core", d: "Robust backend systems with millisecond latency.", i: "💻", col: "md:col-span-4" },
              { t: "E-Commerce", d: "High-conversion retail engines for global brands.", i: "🛒", col: "md:col-span-4" },
              { t: "UI/UX Labs", d: "Intuitive interfaces designed for human emotion.", i: "🎨", col: "md:col-span-8" },
            ].map((s, idx) => (
              <div key={idx} className={`bento-card ${s.col} group bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden relative`}>
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{s.i}</div>
                <h4 className="text-2xl font-serif italic mb-4 group-hover:text-purple-400 transition-colors">{s.t}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{s.d}</p>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full"></div>
              </div>
            ))}
          </div>
        </section>

        {/* --- APPROACH: THE COLLABORATION --- */}
        <section className="flex flex-col lg:flex-row items-center gap-20 mb-40">
          <div className="lg:w-1/2 bento-card order-2 lg:order-1 relative">
            <img 
              src={img2} 
              className="rounded-[3rem] border border-white/10 shadow-2xl -rotate-2 hover:rotate-0 transition-all duration-700" 
              alt="Approach" 
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="block text-purple-500 font-mono text-[10px] tracking-[0.4em] mb-4 uppercase font-bold">The Methodology</span>
            <h3 className="text-5xl font-serif italic mb-8 leading-[0.9]">Collaborative <br /><span className="not-italic font-black tracking-tighter text-white">TRANSFORMATION.</span></h3>
            
            <div className="space-y-8">
              {[
                { t: "Client-Centric DNA", d: "Your vision guides our architectural decisions.", icon: "✔️" },
                { t: "Atomic Security", d: "Fast, secure, and infinitely scalable solutions.", icon: "🚀" },
                { t: "Transparent Pulse", d: "Direct communication with the creators, no fluff.", icon: "🤝" }
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h5 className="font-bold text-gray-200 group-hover:text-purple-400 transition-colors uppercase tracking-widest text-xs mb-1">{item.t}</h5>
                    <p className="text-gray-500 text-sm font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- THE FINALE --- */}
        <div className="bento-card">
          <CTA />
        </div>

      </div>
    </div>
  );
};

export default AboutCompany;