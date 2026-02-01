import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OurCompany = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const ghostTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Ghost Text
      gsap.to(ghostTextRef.current, {
        x: "-12%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Mask Reveal for Text
      gsap.fromTo(
        ".reveal-mask",
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 40 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 pt-24 md:pt-48 pb-32 md:pb-48 px-6 md:px-12 bg-[#050505] overflow-visible"
    >
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Ghost Background Text */}
      <div 
        ref={ghostTextRef}
        className="absolute top-1/4 left-0 whitespace-nowrap opacity-[0.01] pointer-events-none select-none font-black text-[25vw] tracking-tighter uppercase text-white"
      >
        Digital Architecture • Digital Architecture •
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        <div ref={leftColRef} className="lg:col-span-7 flex flex-col justify-center">
          <div className="reveal-mask overflow-hidden mb-6">
            <span className="block text-indigo-400 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold italic">
              // The Studio
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.1] text-white">
            <div className="reveal-mask italic">Crafting with</div>
            <div className="reveal-mask font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
              Technical Grit.
            </div>
          </h2>
        </div>

        <div ref={rightColRef} className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pt-12">
          <div className="desc-text relative pl-8 border-l border-white/10">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light italic">
              Specializing in <span className="text-white font-medium not-italic underline decoration-indigo-500/50 underline-offset-8">high-frequency</span> digital ecosystems.
            </p>
          </div>
          <p className="desc-text text-gray-500 text-lg font-light leading-relaxed pl-8">
            Every line of code is optimized for peak performance and absolute scalability.
          </p>
        </div>
      </div>

      {/* --- UNIQUE DOWNWARD BOUNDARY --- */}
      {/* 1. The Downward Curve: Uses ellipse at the top to create the "Bulge"
          2. Negative Bottom: We extend the height beyond the section to overlap 
      */}
      <div 
        className="absolute bottom-[-60px] md:bottom-[-100px] left-0 w-full h-32 md:h-52 bg-[#050505] z-30" 
        style={{ 
          clipPath: "ellipse(70% 100% at 50% 0%)",
        }} 
      />
      
      {/* Floating System HUD - Repositioned to sit on the "bulge" */}
      <div className="absolute bottom-[-20px] right-10 hidden xl:flex items-center gap-3 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-lg z-40 backdrop-blur-md">
        <div className="relative">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping absolute opacity-75" />
          <div className="w-2 h-2 bg-indigo-500 rounded-full relative" />
        </div>
        <span className="text-[9px] font-mono tracking-tighter text-gray-200 uppercase">
          Engine_Status: Optimal
        </span>
      </div>

      {/* Center Indicator */}
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 z-40 opacity-10">
         <div className="w-8 h-[2px] bg-white rotate-90" />
      </div>
    </section>
  );
};

export default OurCompany;