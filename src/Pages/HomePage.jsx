import React, { useEffect, useRef, Suspense, lazy } from "react";
import Hero from "../sections/Hero";
// Lazy-load below-fold/heavy sections to reduce initial bundle
const OurCompany = lazy(() => import("../sections/OurCompany"));
const Services = lazy(() => import("../sections/Services"));
const OurValues = lazy(() => import("../sections/OurValues"));
const TestimonialsSection = lazy(() => import("../sections/TestimonialsSection"));
const CTA = lazy(() => import("../Components/Common/CTA"));
const ProjectVault = lazy(() => import("../sections/ProjectShowcase"));
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis"; // Install this: npm install @studio-freight/lenis

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. INITIALIZE LENIS (The secret to "Smooth & Fast")
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Single RAF loop for Lenis (avoid duplicate RAFs / gsap.ticker calls)
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Keep ScrollTrigger in sync with Lenis's scroller
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".nexus-slab");

      sections.forEach((section, i) => {
        // Skip hero for the entrance, but give it a "recede" effect
        if (i === 0) {
          gsap.to(section.querySelector(".inner-content"), {
            yPercent: -20,
            opacity: 0,
            scale: 0.9,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          return;
        }

        // 2. THE "SLAB UNVEIL" ANIMATION
        // Fast, snappy entrance with a GPU-accelerated blur/scale
        gsap.fromTo(section,
          { 
            y: "30vh", 
            rotateX: -5,
            transformOrigin: "top center" 
          },
          {
            y: 0,
            rotateX: 0,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top 10%",
              scrub: 1, // Snappy scrub for fast response
            }
          }
        );

        // 3. INTERNAL CONTENT PARALLAX
        // Makes the images/text inside move slightly faster to create depth
        const inner = section.querySelector(".inner-content");
        if (inner) {
          gsap.fromTo(inner,
            { y: 80, opacity: 0 },
            { 
              y: 0, 
              opacity: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "top center",
                scrub: 2
              }
            }
          );
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#020202] text-white selection:bg-indigo-500">
      
      {/* HUD: FIXED PERSPECTIVE INDICATOR */}
      {/* <div className="fixed top-12 left-12 z-[100] pointer-events-none opacity-20 hidden md:block">
          <div className="flex items-center gap-4 mb-2">
             <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
             <div className="h-[1px] w-24 bg-gradient-to-r from-indigo-500 to-transparent" />
          </div>
          <span className="font-mono text-[9px] tracking-[0.6em] uppercase">Architecture_Nexus_v1.0</span>
      </div> */}

      <div className="relative">
        
        <section className="nexus-slab relative z-10 h-screen overflow-hidden">
          <div className="inner-content h-full w-full">
            <Hero />
          </div>
        </section>

        {/* EACH SECTION IS A 'SLAB' */}
        <div className="relative z-20 space-y-[-1px]">
          
          <section className="nexus-slab relative bg-[#020202] border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
            <div className="inner-content p-0">
              <Suspense fallback={<div className="min-h-[200px]" />}>
                <OurCompany />
              </Suspense>
            </div>
          </section>

          <section className="nexus-slab relative bg-[#050505] border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
            <div className="inner-content p-0">
              <Suspense fallback={<div className="min-h-[160px]" />}>
                <Services />
              </Suspense>
            </div>
          </section>

          {/* PROJECT VAULT: The "Core" Node */}
          <section className="relative z-40">
            <Suspense fallback={<div className="min-h-[320px]" />}>
              <ProjectVault />
            </Suspense>
          </section>

          <section className="nexus-slab relative bg-[#020202] border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
            <div className="inner-content p-0">
              <Suspense fallback={<div className="min-h-[160px]" />}>
                <OurValues />
              </Suspense>
            </div>
          </section>

          <section className="nexus-slab relative bg-black border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,1)]">
            <div className="inner-content p-0">
              <Suspense fallback={<div className="min-h-[160px]" />}>
                <TestimonialsSection />
              </Suspense>
            </div>
          </section>

          <div className="relative z-50 bg-[#020202] border-t border-white/10 shadow-[0_-100px_100px_rgba(0,0,0,1)]">
            <Suspense fallback={<div className="py-8" />}>
              <CTA />
            </Suspense>
          </div>

        </div>
      </div>

      {/* NOISE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.012] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <style>{`
        /* Essential for smooth performance */
        .nexus-slab {
          will-change: transform;
          contain: paint;
        }
        .inner-content {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default HomePage;