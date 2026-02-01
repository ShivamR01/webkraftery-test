import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-gray-400 py-20 px-6 overflow-hidden border-t border-white/5">
      {/* --- BACKGROUND ART (QUIRKY PREMIUM) --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[25vw] font-black leading-none translate-y-1/2">
          KRAFTERY
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. Brand Identity */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black tracking-tighter text-white font-serif italic">
              WebKraftery<span className="text-purple-500">.</span>
            </h3>
            <p className="text-sm leading-relaxed font-light italic text-gray-500">
              Architecting the digital frontier. We engineer high-frequency web ecosystems that turn complex logic into human emotion.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedinIn />, url: "#" },
                { icon: <FaTwitter />, url: "#" },
                { icon: <FaFacebookF />, url: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation HUD */}
          <div className="hidden md:block">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-purple-500 font-bold mb-8 block">// System_Map</span>
            <ul className="space-y-4">
              {["About Us", "Our Services", "Why Choose Us", "Leadership Team", "FAQs"].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="text-sm font-medium hover:text-white transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Solutions HUD */}
          <div className="hidden md:block">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-purple-500 font-bold mb-8 block">// Core_Functions</span>
            <ul className="space-y-4">
              {[
                { name: "Custom Web Dev", path: "/solutions/web-development" },
                { name: "React Ecosystems", path: "/solutions/react-development" },
                { name: "Global Ads", path: "/solutions/google-advertising" },
                { name: "UI/UX Labs", path: "/solutions/ui-ux" },
                { name: "System Maintenance", path: "/solutions/software-maintenanace" },
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    to={service.path}
                    className="text-sm font-medium hover:text-white transition-colors duration-300 relative group"
                  >
                    {service.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Terminal Contact */}
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-purple-500 font-bold mb-8 block">// Terminal_Link</span>
            <div className="space-y-4 font-mono text-[11px] tracking-wider uppercase">
              <div>
                <p className="text-gray-600 mb-1">LOC://</p>
                <p className="text-gray-300">Ghaziabad, UP - 201001</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">TEL://</p>
                <a href="tel:+918882320645" className="text-gray-300 hover:text-purple-400 block transition-colors">+91 8882320645</a>
                <a href="tel:+918936950459" className="text-gray-300 hover:text-purple-400 block transition-colors">+91 8936950459</a>
              </div>
              <div>
                <p className="text-gray-600 mb-1">MAIL://</p>
                <a href="mailto:info.webkraftery@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">info.web@kraftery.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono tracking-widest text-gray-600">
            &copy; {currentYear} WebKraftery. Engine_v.2.0.6_Active
          </p>
          <div className="flex gap-8 text-[10px] font-mono tracking-widest uppercase">
            <Link to="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-purple-500/30">Privacy_Protocol</Link>
            <Link to="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-purple-500/30">Terms_of_Service</Link>
          </div>
        </div>
      </div>

      {/* Quirky Status Pulse */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 opacity-20">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
        <span className="text-[9px] font-mono tracking-[0.5em] uppercase">Global_Sync_Stable</span>
      </div>
    </footer>
  );
};

export default Footer;