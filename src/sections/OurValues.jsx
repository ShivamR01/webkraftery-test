import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OurValues = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kinetic Text Animation
      gsap.to(".marquee-text", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Cards "Elevate" on Scroll
      gsap.utils.toArray(".v-card").forEach((card, i) => {
        gsap.from(card, {
          y: 200,
          opacity: 0,
          rotateY: i % 2 === 0 ? 15 : -15,
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "top 70%",
            scrub: 1,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      title: "Radical\nInnovation",
      desc: "We invent protocols, we don't just follow patterns.",
      tag: "01",
      span: "lg:col-span-8",
      color: "#FF5F1F", // Neon Safety Orange
      text: "#000",
      height: "h-[500px]"
    },
    {
      title: "Atomic\nQuality",
      desc: "Precision down to the millisecond.",
      tag: "02",
      span: "lg:col-span-4",
      color: "#0047AB", // Cobalt Blue
      text: "#FFF",
      height: "h-[500px]"
    },
    {
      title: "Fluid\nLogic",
      desc: "Systems that breathe and adapt in real-time.",
      tag: "03",
      span: "lg:col-span-4",
      color: "#00FA9A", // Spring Green
      text: "#000",
      height: "h-[400px]"
    },
    {
      title: "Legacy\nScale",
      desc: "Building the infrastructure for the next century.",
      tag: "04",
      span: "lg:col-span-8",
      color: "#1A1A1A", // Obsidian
      text: "#FFF",
      height: "h-[400px]"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-40 bg-[#F0F0F0] overflow-hidden">
      
      {/* KINETIC BACKGROUND MARQUEE */}
      <div className="absolute top-10 left-0 w-[200%] whitespace-nowrap opacity-[0.05] pointer-events-none">
        <span className="marquee-text inline-block text-[25vh] font-black uppercase tracking-tighter">
          ARCHITECTING THE FUTURE • BENDING THE LOGIC • ARCHITECTING THE FUTURE • BENDING THE LOGIC •
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        {/* HEADER: Ultra-Condensed Layout */}
        <header className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(4rem,12vw,12rem)] font-black leading-[0.75] tracking-tighter text-black uppercase">
              THE <br /> <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>VALUES.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-xl font-bold uppercase tracking-widest text-black border-l-4 border-black pl-6">
              [ 2026_PROTOCOL_V.1 ] <br />
              <span className="font-normal normal-case text-gray-600 italic">Redefining the standard of digital craftsmanship.</span>
            </p>
          </div>
        </header>

        {/* THE "LIVING" GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 perspective-[2000px]">
          {values.map((v, i) => (
            <div 
              key={i}
              className={`${v.span} ${v.height} v-card group relative p-12 rounded-[1rem] flex flex-col justify-between overflow-hidden shadow-[20px_20px_0px_0px_#000] transition-all duration-500 hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[15px] hover:translate-y-[15px]`}
              style={{ backgroundColor: v.color, color: v.text }}
            >
              <div className="flex justify-between items-start font-mono text-sm font-bold">
                <span className="bg-white text-black px-3 py-1 rounded-full shadow-sm">ID://{v.tag}</span>
                <span className="uppercase tracking-widest opacity-50">Confidential_Draft</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-5xl md:text-7xl font-black leading-none uppercase mb-6 whitespace-pre-line tracking-tighter">
                  {v.title}
                </h3>
                <p className="text-lg md:text-xl font-bold max-w-xs leading-tight opacity-90">
                  {v.desc}
                </p>
              </div>

              {/* Unique Interactive HUD element on each card */}
              <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2">
                 <div className="w-24 h-[2px] bg-current opacity-30" />
                 <div className="w-16 h-[2px] bg-current opacity-30 group-hover:w-24 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FIXED SIDEBAR STATUS */}
      {/* <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-50 mix-blend-difference">
         <div className="w-[2px] h-32 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" />
         </div>
         <p className="font-mono text-[10px] text-white tracking-[0.5em] rotate-90 origin-left uppercase">
           Core_Engine_Stable
         </p>
      </div> */}
    </section>
  );
};

export default OurValues;