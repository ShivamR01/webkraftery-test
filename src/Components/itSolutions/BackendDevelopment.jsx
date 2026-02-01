import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import backendimg1 from "../../assets/Backend1.jpeg";
import backendimg2 from "../../assets/backend2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const BackendDevelopment = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth Hero Reveal
      const tl = gsap.timeline();
      tl.from(".hero-reveal", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.4,
        ease: "expo.out"
      })
      .from(".glass-card", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1");

      // Floating Parallax Elements
      gsap.to(".floating-sphere", {
        y: -50,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Horizontal Scroll / Parallax for background text
      gsap.to(".bg-text-scroll", {
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#020202] text-[#e5e5e5] min-h-screen font-sans overflow-hidden">
      
      {/* --- PREMUM BACKGROUND ELEMENTS --- */}
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      
      {/* High-End Light Leaks */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />

      {/* Background Scrolling Title (The "Quirky" Premium touch) */}
      <div className="absolute top-40 left-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <h2 className="bg-text-scroll text-[20vw] font-black leading-none">SYSTEM ARCHITECTURE • CORE LOGIC •</h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        
        {/* --- Hero Section --- */}
        <header className="mb-40">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-4xl">
              <span className="hero-reveal block text-emerald-400 font-mono text-sm tracking-[0.4em] uppercase mb-4 italic">
                // Excellence in Engineering
              </span>
              <h1 className="hero-reveal text-7xl md:text-[140px] font-medium leading-[0.85] tracking-tighter mb-8 font-serif">
                Backend <br /> 
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">Refined.</span>
              </h1>
            </div>
            <div className="hero-reveal pb-6">
              <div className="w-24 h-[1px] bg-emerald-500 mb-4"></div>
              <p className="text-gray-500 text-sm max-w-[200px] font-light italic">
                Specialized in high-concurrency environments and data integrity.
              </p>
            </div>
          </div>
        </header>

        {/* --- Bento Layout: Premium Feature Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-40">
          
          {/* Feature 1: The Main Hub */}
          <div className="glass-card md:col-span-7 bg-[#0a0a0a] border border-white/5 rounded-3xl p-12 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-4xl font-serif mb-6 italic">Precision APIs</h3>
              <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed mb-8">
                We craft REST and GraphQL interfaces with surgical precision, ensuring seamless handshakes between your data and your users.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold hover:bg-white hover:text-black transition-all duration-500">
                  EXPLORE STACK
                </button>
              </div>
            </div>
            <img 
              src={backendimg1} 
              alt="System Core" 
              className="absolute right-[-10%] bottom-[-10%] w-2/3 opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
            />
          </div>

          {/* Feature 2: Mini Metric */}
          <div className="glass-card md:col-span-5 bg-gradient-to-br from-emerald-950/20 to-transparent border border-emerald-500/10 rounded-3xl p-12 flex flex-col justify-between overflow-hidden relative">
            <div className="floating-sphere absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <h4 className="text-emerald-400 font-mono text-xs tracking-widest uppercase">Performance</h4>
            <div>
              <span className="text-8xl font-serif italic leading-none">9ms</span>
              <p className="text-gray-500 text-sm mt-2 font-light tracking-wide italic leading-tight uppercase">Average latency for critical <br /> data delivery pipelines.</p>
            </div>
          </div>

          {/* Feature 3: Full Width Process HUD */}
          <div className="glass-card md:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 mt-4">
            {[
              { title: "Architect", desc: "Solid schema foundations for long-term scalability.", icon: "01" },
              { title: "Develop", desc: "Writing clean, unit-tested, and maintainable Node.js.", icon: "02" },
              { title: "Harden", desc: "Rigorous security audits and penetration testing.", icon: "03" }
            ].map((step, idx) => (
              <div key={idx} className="p-8 hover:bg-white/[0.02] rounded-2xl transition-colors border border-transparent hover:border-white/5 group">
                <span className="text-emerald-500 font-mono text-xs mb-4 block">STEP_{step.icon}</span>
                <h5 className="text-2xl font-serif italic mb-4 group-hover:text-emerald-400 transition-colors">{step.title}</h5>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Image Showcase: Premium Contrast --- */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <img 
                    src={backendimg2} 
                    className="rounded-lg shadow-2xl relative z-10 filter brightness-75 hover:brightness-100 transition-all duration-1000" 
                    alt="Process Illustration" 
                />
            </div>
            <div>
                <h2 className="text-5xl font-serif italic mb-8">The "Quirky" <br /><span className="text-emerald-500 not-italic font-sans font-black tracking-tighter">ENGINEERING</span> Spirit.</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                    We believe backend development is an art form. It's about finding the elegant path through complex logic. Our quirky approach means we solve problems others haven't even identified yet.
                </p>
                <ul className="space-y-4 font-mono text-sm text-gray-500 uppercase tracking-widest">
                    <li className="flex items-center gap-3"><span className="text-emerald-500">→</span> Automated CI/CD Workflows</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">→</span> Distributed System Design</li>
                    <li className="flex items-center gap-3"><span className="text-emerald-500">→</span> Failover & Redundancy</li>
                </ul>
            </div>
        </section>

        {/* --- Minimalist Premium CTA --- */}
        <footer className="text-center py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
          
          <h2 className="text-4xl md:text-6xl font-serif italic mb-12">
            Ready to <span className="not-italic font-black text-white underline decoration-emerald-500 decoration-1 underline-offset-8">Commence?</span>
          </h2>
          
          <button
            onClick={() => navigate("/contactus")}
            className="group relative px-16 py-6 bg-transparent overflow-hidden"
          >
            <span className="relative z-10 text-white font-mono tracking-[0.5em] text-xs uppercase group-hover:text-black transition-colors duration-500">
                Establish Connection
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[expo.inOut]"></div>
            <div className="absolute inset-0 border border-white/20"></div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BackendDevelopment;