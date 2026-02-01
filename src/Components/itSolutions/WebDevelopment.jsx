import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import uiux3img from '../../assets/uiux3.jpeg';
import Frontendimg from '../../assets/Frontend1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const heroImageRef = useRef(null);
  const floatingBlobRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from(".reveal", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        stagger: 0.2
      })
      .from(heroImageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2
      }, "-=1");

      // Floating Background Animation
      gsap.to(".blob", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut"
      });

      // Scroll Animations for Sections
      gsap.utils.toArray(".scroll-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#0f0715] text-white min-h-screen overflow-hidden font-sans">
      {/* Quirky Background Blobs */}
      <div className="blob absolute top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="blob absolute bottom-20 -right-20 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* --- Hero Section --- */}
        <header className="text-center mb-24">
          <div className="overflow-hidden">
            <h1 ref={titleRef} className="reveal text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-500">
              CUSTOM WEB <br /> SOLUTIONS
            </h1>
          </div>
          <p className="reveal text-purple-200/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We don't just build websites; we craft digital playgrounds that convert visitors into lifelong fans.
          </p>
        </header>

        {/* --- Content Section 1: Hero Image & Intro --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div ref={heroImageRef} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={uiux3img}
                alt="Web Design"
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-serif italic text-white leading-tight">
              Build a presence that <span className="text-purple-400">actually</span> works.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              In a sea of templates, be a custom masterpiece. We blend technical SEO with high-end aesthetics to ensure your brand stands out in the noise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {['Bespoke Design', 'SEO Optimized', 'Scalable Code', 'E-commerce'].map((item) => (
                <div key={item} className="flex items-center space-x-2 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Content Section 2: Process (The Quirky Part) --- */}
        <section className="scroll-section bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-4 py-1 rounded-full border border-purple-500/50 text-purple-400 text-xs tracking-widest uppercase">The Strategy</span>
              <h3 className="text-4xl font-bold">Collaborative Magic</h3>
              <p className="text-gray-400 leading-relaxed">
                Our process is a dialogue, not a monologue. We iterate fast, break things (safely), and rebuild them better until your vision is perfectly pixel-ready.
              </p>
              <ul className="space-y-4">
                {['Discovery & Brainstorming', 'UI/UX Prototyping', 'Modern Tech Stack Build', 'Go-Live & Support'].map((step, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="text-purple-500 font-mono font-bold">0{i+1}.</span>
                    <span className="group-hover:text-purple-300 transition-colors">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={Frontendimg}
                alt="Process"
                className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="scroll-section text-center py-20 relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-950">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 px-4">
              Ready to break the internet <br /> (in a good way)?
            </h2>
            <button
              onClick={() => navigate('/contactus')}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
            >
              Get a Free Consultation
              <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;