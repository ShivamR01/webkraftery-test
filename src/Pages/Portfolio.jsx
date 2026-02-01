import React, { useEffect, useRef, useState, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ChevronRight, Cpu } from 'lucide-react';
import { mockProjects } from '../data/mockProjects';

gsap.registerPlugin(ScrollTrigger);

// 1. Optimized High-Fidelity Project Frame
const ProjectFrame = memo(({ project, isActive }) => (
  <div
    className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${
      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
    }`}
  >
    <img 
      src={project.thumbnail} 
      alt={project.title}
      className="w-full h-full object-cover brightness-[0.4] contrast-[1.2] saturate-[1.2]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
  </div>
));

const Profile = () => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // PINNING LOGIC: Only pins the 'containerRef' when it reaches the top
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${mockProjects.length * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * mockProjects.length),
            mockProjects.length - 1
          );
          setActiveIndex(index);
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="bg-[#030303] w-full">
      
      {/* --- LARGE EDITORIAL HEADING --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-20 max-w-[1800px] mx-auto overflow-hidden">
        <div className="flex flex-col">
          <span className="text-indigo-500 font-mono text-xs md:text-sm tracking-[0.8em] uppercase font-black mb-6 animate-pulse">
            // Intelligence_Output
          </span>
          <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
            PROJECT <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>MAPPING.</span>
          </h1>
          <div className="mt-12 flex items-center gap-10">
            <div className="w-24 h-[1px] bg-white/20 hidden md:block" />
            <p className="text-gray-500 text-lg md:text-2xl font-light italic max-w-xl leading-tight">
              A cinematic deep-dive into digital architecture and engineered ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* --- CINEMATIC PROJECT VAULT (Slightly Smaller View) --- */}
      <section 
        ref={containerRef} 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-10 pb-10"
      >
        <div className="relative w-full max-w-[1600px] h-[70vh] md:h-[80vh] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-[1px] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,1)] bg-black">
          
          {/* Video Frames */}
          {mockProjects.map((project, i) => (
            <ProjectFrame key={project.id} project={project} isActive={activeIndex === i} />
          ))}

          {/* HUD Layer */}
          <div className="absolute inset-0 z-30 pointer-events-none p-8 md:p-16 flex flex-col justify-between">
            <div className="flex justify-between items-start">
               <div className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#dc2626]" />
                  <span className="text-white font-mono text-[10px] tracking-widest uppercase">Archive_Feed: 0{activeIndex + 1}</span>
               </div>
               <Cpu className="text-white/20" size={24} />
            </div>

            <div className="max-w-4xl">
              {mockProjects.map((project, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-out transform absolute bottom-16 md:bottom-24 left-8 md:left-16 ${
                    activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
                >
                  <h2 className="text-white text-4xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-8">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-mono text-[10px] uppercase font-black shadow-[4px_4px_0px_0px_#000]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-8 pointer-events-auto">
                    {/* <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-indigo-600 hover:text-white transition-all">
                      View_Case <ChevronRight size={16} />
                    </button> */}
                    <div className="flex gap-4 opacity-40 hover:opacity-100 transition-opacity">
                       <a href={project.githubLink}><Github size={20} className="text-white"/></a>
                       <a href={project.demoLink}><ExternalLink size={20} className="text-white"/></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Strip */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/5 z-50">
            <div 
              className="h-full bg-indigo-500 shadow-[0_0_20px_#6366f1] transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / mockProjects.length) * 100}%` }}
            />
          </div>

        </div>
      </section>

      {/* FOOTER PADDING */}
      <div className="h-32" />
    </div>
  );
};

export default Profile;