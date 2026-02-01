import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020202] text-white pt-32 pb-12 px-6 md:px-12 overflow-hidden border-t-[1px] border-white/10">
      
      {/* --- KINETIC BACKGROUND TICKER (Premium Editorial) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none whitespace-nowrap py-4 border-b border-white/10">
        <div className="flex animate-marquee font-black text-[12vw] uppercase italic leading-none tracking-tighter">
          <span>&nbsp; WEBKRAFTERY STUDIO // ARCHITECTING THE FUTURE // DESIGN & CODE //&nbsp;</span>
          <span>&nbsp; WEBKRAFTERY STUDIO // ARCHITECTING THE FUTURE // DESIGN & CODE //&nbsp;</span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* 1. BRAND MONOLITH (4 Cols) */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.8]">
                WEB <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>KRAFTERY.</span>
              </h3>
              <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed max-w-sm uppercase italic">
                Engineering high-frequency web ecosystems where technical logic meets human emotion.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedinIn />, url: "#" },
                { icon: <FaGithub />, url: "#" },
                { icon: <FaInstagram />, url: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-500 hover:-translate-y-2 shadow-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION SLABS (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-indigo-500 font-black">// System_Map</span>
              <ul className="space-y-4">
                {["About", "Solutions", "Showcase", "Intelligence", "FAQs"].map((item, i) => (
                  <li key={i}>
                    <Link to="/" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all group flex items-center gap-2">
                      <span className="w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-4" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-indigo-500 font-black">// Core_Nodes</span>
              <ul className="space-y-4">
                {["Web Dev", "React Labs", "UI/UX Opt", "System Arch", "Cloud Ops"].map((item, i) => (
                  <li key={i}>
                    <Link to="/" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all group flex items-center gap-2">
                      <span className="w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-4" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. CONTACT HUD (3 Cols) */}
          <div className="lg:col-span-3 space-y-10 bg-white/[0.03] border border-white/5 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
               <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
            </div>
            
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-indigo-500 font-black">// Connect_Portal</span>
            
            <div className="space-y-8">
              <div className="group/item">
                <p className="text-[9px] font-mono text-gray-600 uppercase mb-2 tracking-[0.2em]">HQ_Location</p>
                <p className="text-xs font-black uppercase text-gray-200 group-hover/item:text-indigo-400 transition-colors">Ghaziabad, UP, IN</p>
              </div>

              <div className="group/item">
                <p className="text-[9px] font-mono text-gray-600 uppercase mb-2 tracking-[0.2em]">Voice_Lines</p>
                <a href="tel:+918882320645" className="block text-xs font-black text-gray-200 hover:text-indigo-400">+91 8882320645</a>
              </div>

              <div className="group/item">
                <p className="text-[9px] font-mono text-gray-600 uppercase mb-2 tracking-[0.2em]">Digital_Mail</p>
                <a href="mailto:info@webkraftery.com" className="text-xs font-black text-gray-200 hover:text-indigo-400 truncate block transition-all">info.web@kraftery.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC BOTTOM BAR --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative">
          
          <div className="flex flex-col gap-2">
             <p className="text-[10px] font-mono tracking-[0.3em] text-gray-600 uppercase">
                &copy; {currentYear} WebKraftery Archive. v2.0.6 // Stable_Build
             </p>
          </div>

          <div className="flex gap-12 text-[9px] font-mono tracking-[0.4em] uppercase">
            <Link to="#" className="text-gray-500 hover:text-indigo-400 transition-all">Privacy_Log</Link>
            <Link to="#" className="text-gray-500 hover:text-indigo-400 transition-all">Legal_Protocol</Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="group p-4 bg-white/5 border border-white/10 rounded-full hover:bg-indigo-600 transition-all active:scale-95"
          >
            <FaArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* CSS Animation for Ticker */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default memo(Footer);