import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react'; // Using a cleaner icon

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0); // Start with first open for design impact
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header with a "staggered clip-up" effect
      gsap.from(".header-char", {
        y: 100,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out"
      });

      // Parallax for the decorative text
      gsap.to(".floating-text", {
        x: -200,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const faqItems = [
    { q: 'Digital Arsenal', a: 'We offer custom web development, backend engineering, React ecosystems, and high-ROI Google Advertising.' },
    { q: 'Project Blueprint', a: 'We deep-dive into your metrics, followed by an agile sprint methodology that ensures transparency.' },
    { q: 'SEO DNA', a: 'We build for algorithms. Clean code, semantic HTML, and lightning performance are integrated from day one.' },
    { q: 'Retail Engines', a: 'We engineer high-conversion E-commerce platforms designed to handle massive scale frictionless user journeys.' },
    { q: 'Elite Support', a: 'The launch is just the beginning. We provide security hardening and monitoring so your asset never ages.' }
  ];

  return (
    <div ref={containerRef} className="bg-[#030303] text-white min-h-screen selection:bg-teal-500/30">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-500/10 blur-[120px] animate-pulse" />
        <div className="floating-text absolute bottom-20 left-0 text-[15vw] font-black text-white/[0.02] whitespace-nowrap uppercase">
          Precision • Engineering • Design •
        </div>
      </div>

      <main className="relative z-10 px-6 md:px-20 py-32">
        {/* Modern Header Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-teal-500" />
            <span className="text-teal-500 font-mono text-xs tracking-[0.5em] uppercase">FAQ // 01</span>
          </div>
          
          <h1 className="text-7xl md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase overflow-hidden">
            <span className="header-char inline-block">Mind</span> 
            <span className="header-char inline-block text-transparent stroke-white stroke-1 italic font-light ml-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Mapping</span>
          </h1>
        </section>

        {/* The "Minimalist List" Layout */}
        <section className="max-w-6xl mx-auto border-t border-white/10">
          {faqItems.map((item, i) => (
            <div 
              key={i}
              onMouseEnter={() => setOpenIndex(i)}
              className={`group relative border-b border-white/10 transition-all duration-700 ${openIndex === i ? 'bg-white/[0.02]' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-start py-12 px-4 gap-8">
                
                {/* ID & Status */}
                <div className="w-24 shrink-0 font-mono text-sm text-white/20">
                  {i < 9 ? `0${i + 1}` : i + 1} — {openIndex === i ? 'ACTIVE' : 'IDLE'}
                </div>

                {/* Content Area */}
                <div className="flex-grow">
                  <h3 className={`text-3xl md:text-5xl font-bold tracking-tight transition-all duration-500 ${openIndex === i ? 'text-teal-400 translate-x-4' : 'text-white/40 group-hover:text-white'}`}>
                    {item.q}
                  </h3>
                  
                  <div className={`mt-8 overflow-hidden transition-all duration-700 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                      {item.a}
                    </p>
                    <button 
                      onClick={() => navigate('/contactus')}
                      className="mt-8 flex items-center gap-2 text-teal-500 font-mono text-xs tracking-widest uppercase hover:gap-4 transition-all"
                    >
                      Learn More <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>

                {/* Icon */}
                <div className={`hidden md:block transition-transform duration-500 ${openIndex === i ? 'rotate-45 text-teal-500' : 'text-white/20'}`}>
                  <Plus size={40} strokeWidth={1} />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Ultra-Modern CTA */}
        <section className="mt-48 flex flex-col items-center">
          <div className="relative group cursor-pointer" onClick={() => navigate('/contactus')}>
            <div className="absolute -inset-8 bg-teal-500/20 rounded-full blur-2xl group-hover:bg-teal-500/40 transition-all duration-700 opacity-0 group-hover:opacity-100" />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center relative bg-[#030303] group-hover:border-teal-500 transition-colors duration-500">
              <div className="text-center">
                <p className="text-[10px] font-mono tracking-[0.4em] text-white/40 mb-2 uppercase">Ready?</p>
                <p className="text-xl md:text-2xl font-black uppercase">Start_</p>
              </div>
            </div>
            {/* Orbital Text or Element */}
            <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                <div className="w-2 h-2 bg-teal-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2" />
            </div>
          </div>
        </section>
      </main>

      {/* Side HUD Status */}
      <div className="fixed left-10 bottom-10 hidden xl:block">
        <div className="rotate-[-90deg] origin-left flex items-center gap-4">
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">System_Active_v3.0</span>
          <div className="w-10 h-[1px] bg-white/10" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;