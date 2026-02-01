import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote: "Kunal delivered a dynamic, well-designed solution. His skills helped position me as a Creative Director.",
    author: "Shashwat Prajapati",
    role: "Founder, Shazofyne",
    color: "bg-[#FF5F1F]", // Neon Orange
    text: "text-black"
  },
  {
    quote: "Stunning Donation platform. They translated our vision into a seamless and intuitive platform.",
    author: "Rajeswar Tyagi",
    role: "Trustee, Ladlilaxmi",
    color: "#0047AB", // Cobalt Blue
    text: "text-white"
  },
  {
    quote: "The React application is incredibly fast. We're genuinely impressed with the performance.",
    author: "Shivam Tyagi",
    role: "Senior Educator",
    color: "#00FA9A", // Spring Green
    text: "text-black"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#F0F0F0] py-24 px-6 md:px-12 flex items-center overflow-hidden"
    >
      {/* Background Kinetic Element */}
      <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none select-none">
        <span className="text-[30vh] font-black uppercase tracking-tighter leading-none italic">
          REVIEWS_2026
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT SIDE: Fixed Editorial Heading */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-block px-4 py-1 border-2 border-black rounded-full">
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase font-mono italic">
              // Client Intelligence
            </span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black text-black leading-[0.8] tracking-tighter uppercase">
            THE <br /> <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>VERDICT.</span>
          </h2>
          <p className="text-xl font-bold text-gray-600 max-w-sm border-l-4 border-black pl-6">
            Real stories from global leaders who scaled their digital presence through our architecture.
          </p>
          
          {/* Custom HUD Nav Buttons */}
          <div className="flex gap-4 pt-8">
            <button 
              onClick={nextSlide}
              className="px-10 py-5 bg-black text-white font-black rounded-full hover:scale-105 transition-all active:scale-95 uppercase tracking-widest text-xs flex items-center gap-4"
            >
              Next Evidence <span>→</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: The Animated Deck */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px]">
          {testimonials.map((t, i) => {
            const isActive = i === activeIndex;
            const isPrev = i === (activeIndex - 1 + testimonials.length) % testimonials.length;
            
            return (
              <div 
                key={i}
                className={`absolute w-full max-w-[550px] p-12 md:p-16 rounded-[1.5rem] border-4 border-black transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[20px_20px_0px_0px_#000]
                  ${isActive ? 'z-30 opacity-100 scale-100 translate-y-0 rotate-0' : ''}
                  ${isPrev ? 'z-10 opacity-0 -translate-y-[100%] rotate-[-10deg]' : 'z-20 opacity-40 scale-90 translate-y-12 rotate-2'}
                `}
                style={{ 
                    backgroundColor: t.color || '#fff', 
                    color: t.text === 'text-black' ? '#000' : '#fff',
                    visibility: isActive || !isPrev ? 'visible' : 'hidden'
                }}
              >
                {/* ID Header */}
                <div className="flex justify-between items-center mb-12 font-mono text-xs font-black uppercase opacity-60">
                   <span>ID://CLIENT_VERIFIED</span>
                   <span>00{i + 1}</span>
                </div>

                {/* The Quote */}
                <p className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase italic mb-12">
                   "{t.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-8 border-t-4 border-current">
                   <h4 className="text-2xl font-black uppercase leading-none">{t.author}</h4>
                   <p className="text-sm font-bold opacity-60 uppercase tracking-widest mt-2">{t.role}</p>
                </div>

                {/* Floating HUD element */}
                <div className="absolute top-10 right-10 flex gap-1">
                   {[...Array(3)].map((_, dot) => (
                     <div key={dot} className="w-1.5 h-1.5 rounded-full bg-current" />
                   ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FIXED CORNER INDICATOR */}
      <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-4">
          <div className="w-12 h-[2px] bg-black" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-black">
            Sync_Proof_V2.0
          </span>
      </div>
    </section>
  );
};

export default TestimonialsSection;