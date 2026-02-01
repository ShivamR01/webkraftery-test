// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Clients = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     // Infinite Horizontal Scroll Logic
//     const scrollWidth = scrollRef.current.scrollWidth;
//     gsap.to(scrollRef.current, {
//       x: -scrollWidth / 2,
//       duration: 30,
//       ease: "linear",
//       repeat: -1,
//     });
//   }, []);

//   const logos = [
//     { name: "Client A", color: "E0BBE4" },
//     { name: "Client B", color: "957DAD" },
//     { name: "Client C", color: "D291BC" },
//     { name: "Client D", color: "FFC72C" },
//     { name: "Client E", color: "A0DAA9" },
//     { name: "Client F", color: "F0F8FF" },
//   ];

//   // Double the logos for seamless loop
//   const displayLogos = [...logos, ...logos];

//   return (
//     <section className="relative bg-[#050505] py-24 overflow-hidden border-y border-white/5">
//       {/* Background Decorative Element */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative z-10">
//         {/* Header HUD Style */}
//         <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
//           <div className="md:w-2/3">
//             <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase mb-4 block italic font-bold">
//               // Trusted by Industry Leaders
//             </span>
//             <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white font-serif italic">
//               Global <span className="not-italic font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/20">Alliances.</span>
//             </h2>
//           </div>
//           <p className="text-gray-500 text-sm max-w-xs font-light italic text-right leading-relaxed">
//             Collaborating with visionaries to engineer the next generation of digital dominance.
//           </p>
//         </div>

//         {/* Infinite Scroll Wrapper */}
//         <div className="relative flex overflow-hidden py-10 select-none">
//           <div ref={scrollRef} className="flex whitespace-nowrap gap-8 px-4">
//             {displayLogos.map((logo, index) => (
//               <div
//                 key={index}
//                 className="group relative flex-shrink-0 w-48 h-28 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl flex items-center justify-center transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/50 hover:-translate-y-2"
//               >
//                 <img
//                   src={`https://placehold.co/120x60/${logo.color}/6C3483?text=${logo.name}`}
//                   alt={logo.name}
//                   className="max-w-[70%] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
//                 />
                
//                 {/* Subtle HUD scanline for quirk */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
//               </div>
//             ))}
//           </div>
          
//           {/* Masking Gradients for smooth fade in/out */}
//           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
//         </div>

//         {/* Quick Tech Tagging */}
//         <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-30 grayscale pointer-events-none font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400">
//            <span>Scale_Ready</span>
//            <span>•</span>
//            <span>Enterprise_Security</span>
//            <span>•</span>
//            <span>Performance_First</span>
//            <span>•</span>
//            <span>Cloud_Native</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;