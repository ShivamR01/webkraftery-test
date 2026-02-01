import React, { useEffect, useRef } from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import OurValues from "../sections/OurValues";
import OurCompany from "../sections/OurCompany";
import TestimonialsSection from "../sections/TestimonialsSection";
import CTA from "../Components/Common/CTA";
import ProjectVault from "../sections/ProjectShowcase";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".reveal-section");

      sections.forEach((section, i) => {
        // We create a "Z-Space" reveal
        // The section starts small and deep, then grows to full screen
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom", 
            end: "top top",
            scrub: 1,
          }
        });

        tl.fromTo(section, 
          { 
            scale: 0.8,
            opacity: 0,
            filter: "blur(15px) brightness(0.5)",
            // Geometric Aperture Mask
            clipPath: "circle(0% at 50% 50%)" 
          },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px) brightness(1)",
            clipPath: "circle(100% at 50% 50%)",
            ease: "none"
          }
        );

        // Parallax for the content inside to give "Atmospheric Depth"
        gsap.fromTo(section.querySelector(".content-inner"), 
          { z: -500, opacity: 0 },
          { 
            z: 0, 
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: 1
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#020202] text-white overflow-x-hidden selection:bg-indigo-500">
      
      {/* --- PREMIUM HUD NAVIGATION INDICATOR --- */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-4 mix-blend-difference">
         <span className="text-[9px] font-mono tracking-[0.5em] rotate-90 origin-right uppercase opacity-30">Stream_Scroll</span>
         <div className="w-[1px] h-32 bg-white/20" />
      </div>

      <div className="relative">
        
        {/* HERO - Fixed in place while next section 'grows' over it */}
        <section className="relative z-10 h-screen overflow-hidden">
          <Hero />
        </section>

        {/* SEQUENTIAL REVEALS */}
        <section className="reveal-section relative z-20 mt-[-20vh]">
          <div className="content-inner perspective-[1000px]">
            <OurCompany />
          </div>
        </section>

        <section className="reveal-section relative z-30 mt-[-20vh]">
          <div className="content-inner perspective-[1000px]">
            <Services />
          </div>
        </section>

        {/* ProjectVault handles its own internal 3D logic */}
        <section className="relative z-40">
          <ProjectVault />
        </section>

        <section className="reveal-section relative z-30 mt-[-20vh]">
          <div className="content-inner perspective-[1000px]">
            <OurValues />
          </div>
        </section>

        <section className="reveal-section relative z-20">
          <div className="content-inner perspective-[1000px]">
            <TestimonialsSection />
          </div>
        </section>

        {/* FINAL SLAB */}
        <div className="relative z-50 bg-[#020202] border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
          <CTA />
        </div>

      </div>

      {/* ATMOSPHERIC NOISE (The Cinematic Grain) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <style>{`
        .reveal-section {
          will-change: transform, clip-path, filter;
          background: #020202;
        }
        /* Prevents jitter during clip-path animations */
        .reveal-section > div {
           transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default HomePage;