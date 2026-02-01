import React, { useEffect, useRef, useState, memo } from 'react';
import { gsap } from 'gsap';

const testimonials = [
  {
    quote: "Kunal delivered a dynamic, well-designed solution. His skills helped position me as a Creative Director.",
    author: "Shashwat Prajapati",
    role: "Founder, Shazofyne",
    color: "bg-[#FF5F1F]",
    text: "text-black"
  },
  {
    quote: "Stunning Donation platform. They translated our vision into a seamless and intuitive platform.",
    author: "Rajeswar Tyagi",
    role: "Trustee, Ladlilaxmi",
    color: "bg-[#0047AB]",
    text: "text-white"
  },
  {
    quote: "The React application is incredibly fast. We're genuinely impressed with the performance.",
    author: "Shivam Tyagi",
    role: "Senior Educator",
    color: "bg-[#00FA9A]",
    text: "text-black"
  }
];

// Memoized Card component to prevent unnecessary re-renders
const TestimonialCard = memo(({ t, index, cardRef }) => (
  <div 
    ref={cardRef}
    className={`absolute w-full max-w-[550px] p-10 md:p-16 rounded-[1.5rem] border-[3px] border-black shadow-[15px_15px_0px_0px_#000] opacity-0 ${t.color} ${t.text}`}
  >
    <div className="flex justify-between items-center mb-10 font-mono text-[10px] font-black uppercase opacity-60">
       <span>ID://VERIFIED</span>
       <span>00{index + 1}</span>
    </div>

    <p className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase italic mb-10">
       "{t.quote}"
    </p>

    <div className="pt-6 border-t-[3px] border-current">
       <h4 className="text-xl md:text-2xl font-black uppercase leading-none">{t.author}</h4>
       <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-1">{t.role}</p>
    </div>
  </div>
));

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    // We only animate the active and the "next" card to keep it lightweight
    const currentCard = cardsRef.current[activeIndex];
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const prevCard = cardsRef.current[prevIndex];

    // Reset all cards that aren't active or leaving to a "waiting" state
    gsap.set(cardsRef.current.filter((_, i) => i !== activeIndex && i !== prevIndex), {
      y: 60, scale: 0.85, opacity: 0, zIndex: 10, rotation: 2
    });

    // Animate Active Card
    gsap.to(currentCard, {
      y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 30,
      duration: 0.8, ease: "expo.out"
    });

    // Animate Leaving Card
    if (prevCard) {
      gsap.to(prevCard, {
        y: -120, scale: 0.9, rotation: -5, opacity: 0, zIndex: 10,
        duration: 0.6, ease: "power2.inOut"
      });
    }
  }, [activeIndex]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="relative min-h-screen bg-[#F0F0F0] py-20 px-6 flex items-center overflow-hidden">
      
      {/* Editorial Background - Fixed (Lightweight span) */}
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[25vh] font-black uppercase italic leading-none">VERDICT</span>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Editorial Static Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-block px-3 py-1 border-2 border-black rounded-full">
            <span className="text-black text-[9px] font-black tracking-widest uppercase font-mono italic">Proof_Log</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.8] tracking-tighter uppercase">
            THE <br /> <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>VERDICT.</span>
          </h2>
          
          <div className="pt-6">
            <button 
              onClick={nextSlide}
              className="px-8 py-4 bg-black text-white font-black rounded-full hover:bg-indigo-600 transition-colors active:scale-95 uppercase text-[10px] tracking-widest flex items-center gap-4"
            >
              Next Evidence <span>→</span>
            </button>
          </div>
        </div>

        {/* Right: The Deck Chamber */}
        <div className="lg:col-span-7 relative h-[450px] md:h-[550px] flex items-center justify-center">
          {testimonials.map((t, i) => (
            <TestimonialCard 
              key={i} 
              t={t} 
              index={i} 
              cardRef={el => cardsRef.current[i] = el} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;