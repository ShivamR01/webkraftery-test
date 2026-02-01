import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdArrowOutward, MdEmail, MdPhone } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: "01",
    name: 'Kunal Koushik',
    role: 'CEO & Founder',
    bio: "Software architect specializing in end-to-end development of scalable web applications. Focus is on high-performance user experiences.",
    email: "kunalkoushik44@gmail.com",
    color: "#a855f7" // Purple
  },
  {
    id: "02",
    name: 'Prince Tyagi',
    role: 'Co-Founder & CTO',
    bio: 'Passionate developer skilled in building seamless user experiences with a focus on clean, mission-critical code.',
    email: "princetyagi1901@gmail.com",
    color: "#6366f1" // Indigo
  },
  {
    id: "03",
    name: 'The RealCoder',
    role: 'Managing Director',
    bio: 'Expert in operational management and software architecture, translating digital visions into market-ready products.',
    email: "realcoder24@gmail.com",
    color: "#14b8a6" // Teal
  },
];

const LeadershipTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const bioRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Main Title
      gsap.from(".title-reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out"
      });

      // Background Parallax
      gsap.to(".bg-text", {
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate Bio change
  useEffect(() => {
    gsap.fromTo(bioRef.current, 
      { opacity: 0, x: 20 }, 
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative bg-[#050208] text-white min-h-screen overflow-hidden selection:bg-purple-500/30">
      
      {/* --- KINETIC BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bg-text absolute top-1/4 left-0 whitespace-nowrap text-[20vw] font-black opacity-[0.02] uppercase italic">
          Architecting Futures • Leadership • 
        </div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] transition-colors duration-1000 opacity-20"
          style={{ backgroundColor: teamMembers[activeIndex].color }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 md:py-32 flex flex-col min-h-screen">
        
        {/* --- HEADER --- */}
        <header className="mb-20">
          <p className="title-reveal text-purple-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 italic">
            // Core_Leadership
          </p>
          <h1 className="title-reveal text-6xl md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase italic">
            Minds behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10 not-italic font-light">the craft.</span>
          </h1>
        </header>

        {/* --- INTERACTIVE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Interactive List */}
          <div className="flex flex-col border-t border-white/10">
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative flex items-center justify-between py-10 border-b border-white/10 text-left outline-none"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-white/30">{member.id}</span>
                  <h2 className={`text-4xl md:text-7xl font-bold tracking-tighter transition-all duration-500 ${activeIndex === index ? 'pl-8 text-white' : 'text-white/20 group-hover:text-white/50'}`}>
                    {member.name}
                  </h2>
                </div>
                <div className={`transition-all duration-500 transform ${activeIndex === index ? 'opacity-100 scale-100 rotate-45' : 'opacity-0 scale-50'}`}>
                  <MdArrowOutward size={48} className="text-purple-500" />
                </div>
                
                {/* Underline Progress */}
                {activeIndex === index && (
                   <motion-div className="absolute bottom-0 left-0 h-[2px] bg-purple-500 w-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right: Dynamic Intelligence Card */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 p-12 bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[3rem] min-h-[500px] flex flex-col justify-between">
              
              <div ref={bioRef}>
                <p className="text-purple-500 font-mono text-[10px] tracking-widest uppercase mb-6 italic">
                  // Portfolio_Focus: {teamMembers[activeIndex].role}
                </p>
                <h3 className="text-4xl font-serif italic mb-8">"{teamMembers[activeIndex].bio}"</h3>
              </div>

              <div className="space-y-4">
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
                <div className="flex flex-col gap-2">
                  <a href={`mailto:${teamMembers[activeIndex].email}`} className="flex items-center gap-3 text-white/40 hover:text-purple-400 transition-colors group">
                    <MdEmail /> <span className="font-mono text-xs uppercase tracking-widest">{teamMembers[activeIndex].email}</span>
                  </a>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                 <div className="w-2 h-2 bg-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bio (Only visible on small screens) */}
        <div className="lg:hidden mt-10 p-8 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-purple-400 font-mono text-[10px] uppercase mb-4">Current Selection:</p>
          <p className="text-xl italic text-white/80">{teamMembers[activeIndex].bio}</p>
        </div>

      </div>

      {/* --- HUD STATUS --- */}
      <div className="fixed bottom-10 left-10 hidden xl:block z-50">
        <div className="rotate-[-90deg] origin-left flex items-center gap-4">
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">Leadership_Matrix_v1.0</span>
          <div className="w-20 h-[1px] bg-white/10" />
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;