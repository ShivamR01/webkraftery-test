import React, { useEffect, useRef, useState, memo } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    quote:
      "Kunal delivered a dynamic, well-designed solution. His skills helped position me as a Creative Director.",
    author: "Shashwat Prajapati",
    role: "Founder, Shazofyne",
    color: "bg-[#FF5F1F]",
    text: "text-black",
  },
  {
    quote:
      "Stunning Donation platform. They translated our vision into a seamless and intuitive platform.",
    author: "Rajeswar Tyagi",
    role: "Trustee, Ladlilaxmi",
    color: "bg-[#0047AB]",
    text: "text-white",
  },
  {
    quote:
      "The React application is incredibly fast. We're genuinely impressed with the performance.",
    author: "Shivam Tyagi",
    role: "Senior Educator",
    color: "bg-[#00FA9A]",
    text: "text-black",
  },
];

// 1. Optimized Card: Uses will-change to prep the GPU
const TestimonialCard = memo(({ t, index, cardRef }) => (
  <div
    ref={cardRef}
    className={`absolute w-full max-w-[550px] p-10 md:p-16 rounded-[1.5rem] border-[3px] border-black shadow-[15px_15px_0px_0px_#000] opacity-0 pointer-events-none will-change-transform transform-gpu ${t.color} ${t.text}`}
  >
    <div className="flex justify-between items-center mb-10 font-mono text-[10px] font-black uppercase opacity-60">
      <span>ID://VERIFIED</span>
      <span>00{index + 1}</span>
    </div>

    <p className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase italic mb-10">
      "{t.quote}"
    </p>

    <div className="pt-6 border-t-[3px] border-current">
      <h4 className="text-xl md:text-2xl font-black uppercase leading-none">
        {t.author}
      </h4>
      <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-1">
        {t.role}
      </p>
    </div>
  </div>
));

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // 2. Use GSAP Context for memory cleanup
    let ctx = gsap.context(() => {
      const currentCard = cardsRef.current[activeIndex];
      const prevIndex =
        (activeIndex - 1 + testimonials.length) % testimonials.length;
      const prevCard = cardsRef.current[prevIndex];

      // Reset hidden cards: move them off-screen or hide them to stop GPU overdraw
      cardsRef.current.forEach((card, i) => {
        if (i !== activeIndex && i !== prevIndex) {
          gsap.set(card, {
            opacity: 0,
            y: 50,
            scale: 0.9,
            pointerEvents: "none",
          });
        }
      });

      // Animate Active Card
      gsap.to(currentCard, {
        y: 0,
        scale: 1,
        opacity: 1,
        pointerEvents: "auto",
        zIndex: 30,
        duration: 0.7,
        ease: "power4.out",
        force3D: true, // Forces GPU layer
      });

      // Animate Leaving Card
      if (prevCard) {
        gsap.to(prevCard, {
          y: -100,
          scale: 0.95,
          opacity: 0,
          zIndex: 10,
          duration: 0.5,
          ease: "power2.inOut",
          force3D: true,
        });
      }
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP to prevent memory leaks
  }, [activeIndex]);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#F0F0F0] py-20 px-6 flex items-center overflow-hidden contain-paint"
    >
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[25vh] font-black uppercase italic leading-none">
          VERDICT
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-block px-3 py-1 border-2 border-black rounded-full">
            <span className="text-black text-[9px] font-black tracking-widest uppercase font-mono italic">
              Proof_Log
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.8] tracking-tighter uppercase">
            THE <br />{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px black" }}
            >
              VERDICT.
            </span>
          </h2>

          <div className="pt-6">
            <button
              onClick={nextSlide}
              className="px-8 py-4 bg-black text-white font-black rounded-full hover:bg-indigo-600 transition-colors active:scale-95 uppercase text-[10px] tracking-widest flex items-center gap-4 shadow-xl"
            >
              Next Evidence <span>→</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[450px] md:h-[550px] flex items-center justify-center">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              t={t}
              index={i}
              cardRef={(el) => (cardsRef.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
