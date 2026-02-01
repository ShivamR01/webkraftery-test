import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Media = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".reveal-media", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out"
      });

      // Floating Background Elements
      gsap.to(".media-blob", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mock data for media items
  const mediaItems = [
    { title: "Project Launch 2026", category: "Video", date: "JAN 12", color: "from-purple-500" },
    { title: "UI/UX Workshop", category: "Gallery", date: "JAN 05", color: "from-cyan-500" },
    { title: "Backend Architecture", category: "Insights", date: "DEC 28", color: "from-emerald-500" },
    { title: "Client Success Stories", category: "Interviews", date: "DEC 15", color: "from-fuchsia-500" },
    { title: "Tech Summit Recap", category: "Event", date: "NOV 30", color: "from-blue-500" },
    { title: "Future of React", category: "Webinar", date: "NOV 12", color: "from-orange-500" },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#050505] text-white min-h-screen overflow-hidden font-sans">
      
      {/* --- BROADCAST BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="media-blob absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="media-blob absolute bottom-20 right-1/4 w-80 h-80 bg-teal-600/10 blur-[100px] rounded-full" />

      {/* Background HUD Text */}
      <div className="absolute top-40 left-0 whitespace-nowrap opacity-[0.01] pointer-events-none select-none font-black text-[20vw] leading-none italic uppercase">
        BROADCAST • FEED • MEDIA • 
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        
        {/* --- HEADER --- */}
        <header className="mb-24 text-center">
          <div className="reveal-media inline-block px-4 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-500/5 backdrop-blur-md">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase font-mono italic">
              // Live Transmission
            </span>
          </div>
          <h1 className="reveal-media text-6xl md:text-[120px] font-black leading-[0.8] tracking-tighter italic mb-8 uppercase">
            MEDIA <br />
            <span className="not-italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/20">
              CHANNEL.
            </span>
          </h1>
          <p className="reveal-media max-w-xl mx-auto text-gray-500 text-lg font-light leading-relaxed italic">
            Visual stories of innovation, technical breakthroughs, and the people redefining the digital frontier.
          </p>
        </header>

        {/* --- MEDIA GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, idx) => (
            <div 
              key={idx} 
              className="reveal-media group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-4 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Media Thumbnail Placeholder */}
              <div className={`relative aspect-video rounded-[2rem] overflow-hidden bg-gradient-to-br ${item.color} to-black/80`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-500">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="mt-6 px-4 pb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold">{item.category}</span>
                  <span className="text-[10px] font-mono text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-serif italic text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* --- LOAD MORE / FOOTER --- */}
        <div className="reveal-media mt-20 text-center">
          <button className="group relative px-10 py-4 bg-transparent overflow-hidden">
            <span className="relative z-10 text-white font-mono tracking-[0.5em] text-[10px] uppercase group-hover:text-black transition-colors duration-500">
              Synchronize More
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[expo.inOut]"></div>
            <div className="absolute inset-0 border border-white/20 rounded-full"></div>
          </button>
        </div>

      </div>

      {/* --- QUIRKY UI ELEMENT --- */}
      <div className="fixed bottom-10 left-10 hidden lg:flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-[60]">
         <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]" />
         <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase leading-none italic">Rec_Active</span>
      </div>
    </div>
  );
};

export default Media;