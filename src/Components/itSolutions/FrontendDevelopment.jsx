import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import frontendimg from '../../assets/WEBdesign.jpeg';
import frontendimg2 from '../../assets/Webdesign2.jpeg';

gsap.registerPlugin(ScrollTrigger);

const FrontendDevelopment = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Entrance Sequence
      tl.from(".hero-line", { y: 100, opacity: 0, stagger: 0.1, duration: 1.5 })
        .from(".glass-panel", { scale: 0.9, opacity: 0, duration: 1.2 }, "-=1")
        .from(".floating-tech", { y: 30, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5");

      // Parallax for background text
      gsap.to(".parallax-text", {
        xPercent: -30,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
        }
      });

      // Reveal on scroll
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power4.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#030005] text-[#f0f0f0] min-h-screen font-sans overflow-hidden">
      
      {/* --- BACKGROUND ART --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[50vw] h-[50vw] bg-teal-500/10 blur-[120px] rounded-full" />

      {/* Floating Kinetic Text */}
      <div className="absolute top-64 left-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <h2 className="parallax-text text-[25vw] font-black leading-none uppercase tracking-tighter">
          VISUAL INTERFACE • REACT • INTERACTIVE • NEXT.JS • 
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* --- HERO SECTION --- */}
        <header className="mb-40">
          <span className="hero-line block text-teal-400 font-mono text-xs tracking-[0.5em] uppercase mb-4">
            // Digital Aesthetics 2.0
          </span>
          <h1 className="hero-line text-7xl md:text-[150px] font-medium leading-[0.8] tracking-tighter font-serif italic mb-10">
            Frontend <br /> 
            <span className="not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-teal-400">
              Mavericks.
            </span>
          </h1>
          <p className="hero-line max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            We bridge the gap between human emotion and digital logic through high-fidelity interfaces and fluid motion.
          </p>
        </header>

        {/* --- BENTO GRID CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40">
          
          {/* Main Visual Hub */}
          <div className="glass-panel md:col-span-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-12 relative overflow-hidden group">
            <div className="relative z-10 md:w-1/2">
              <h3 className="text-4xl font-serif italic mb-6">Pixel Perfection</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Our interfaces aren't just responsive; they are "adaptive organisms." We ensure your brand feels premium on a 4K monitor or a handheld device.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ReactJS', 'Next.js', 'GSAP', 'Tailwind'].map(tech => (
                  <span key={tech} className="floating-tech px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] tracking-widest font-bold uppercase">{tech}</span>
                ))}
              </div>
            </div>
            <img 
              src={frontendimg} 
              alt="Design" 
              className="absolute right-[-10%] bottom-[-10%] w-2/3 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 rotate-3 group-hover:rotate-0"
            />
          </div>

          {/* Quirky Stats Card */}
          <div className="glass-panel md:col-span-4 bg-teal-500/5 border border-teal-500/20 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative group">
            <div className="text-teal-400 font-mono text-xs mb-4">OPTIMIZATION_LOG</div>
            <div className="relative z-10">
              <span className="text-8xl font-black text-white leading-none tracking-tighter italic">100</span>
              <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">Lighthouse Performance Score</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-400/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Full Width Process HUD */}
          <div className="reveal md:col-span-12 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white/[0.02] border border-white/5 rounded-[3rem] p-8">
            {[
              { title: "Blueprint", desc: "Translating wireframes into modular component structures.", id: "01" },
              { title: "Kinetic Build", desc: "Injecting life with GSAP animations and micro-interactions.", id: "02" },
              { title: "Performance", desc: "Aggressive optimization for instant visual delivery.", id: "03" }
            ].map((step, idx) => (
              <div key={idx} className="p-10 hover:bg-white/[0.03] rounded-[2rem] transition-all group">
                <span className="text-purple-500 font-mono text-[10px] mb-4 block uppercase tracking-[0.3em]">Phase_{step.id}</span>
                <h4 className="text-2xl font-serif italic mb-4 group-hover:text-teal-400 transition-colors">{step.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECONDARY CONTENT SECTION --- */}
        <section className="reveal grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img 
              src={frontendimg2} 
              className="relative z-10 rounded-[2rem] border border-white/10 shadow-2xl filter brightness-90 group-hover:brightness-100 transition-all duration-700"
              alt="Frontend Process"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-serif italic mb-8">Where Experience <br /><span className="text-teal-400 not-italic font-black tracking-tighter">MEETS EMOTION.</span></h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
              We don't just write HTML/CSS; we curate journeys. Our process ensures that your user feels the premium quality of your brand through every hover, click, and scroll.
            </p>
            <div className="space-y-6">
               {['Modular Component Architecture', 'Accessible (A11y) Compliant', 'Ultra-Responsive Fluidity'].map((feature, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-teal-500" />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300">{feature}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- HIGH-END CTA --- */}
        <footer className="reveal text-center py-32 relative border-t border-white/5 overflow-hidden rounded-[4rem] bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
          
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">
            Ready to <span className="not-italic font-black text-white underline decoration-teal-500 decoration-1 underline-offset-[12px]">Illuminate?</span>
          </h2>
          
          <button
            onClick={() => navigate('/contactus')}
            className="group relative px-20 py-6 bg-transparent overflow-hidden"
          >
            <span className="relative z-10 text-white font-mono tracking-[0.6em] text-[10px] uppercase group-hover:text-black transition-colors duration-500">
                Begin Transformation
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[expo.inOut]"></div>
            <div className="absolute inset-0 border border-white/20"></div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default FrontendDevelopment;