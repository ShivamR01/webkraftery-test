import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Maintainance1 from '../../assets/Maintainance1.jpeg';
import Maintainance2 from '../../assets/Software-Maintenance2.jpg';

gsap.registerPlugin(ScrollTrigger);

const SoftwareMaintenance = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Title & Hero Entrance
      tl.from(".reveal-title", { y: 100, opacity: 0, stagger: 0.2, duration: 1.5 })
        .from(".hero-card", { scale: 0.9, opacity: 0, duration: 1.2 }, "-=1")
        .from(".status-tag", { x: -20, opacity: 0, duration: 0.8 }, "-=0.5");

      // Scroll reveals
      gsap.utils.toArray(".reveal-section").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#05070a] text-[#e0e0e0] min-h-screen font-sans overflow-hidden">
      
      {/* --- PREMIUM TECH BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>

      {/* High-End Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-blue-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* --- HERO SECTION --- */}
        <header className="mb-40">
          <div className="status-tag inline-flex items-center gap-3 px-4 py-1 mb-8 border border-emerald-500/30 rounded-full bg-emerald-500/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-[10px] font-bold tracking-[0.3em] uppercase font-mono">
              System Active: 24/7 Monitoring
            </span>
          </div>
          
          <h1 className="reveal-title text-6xl md:text-[130px] font-black leading-[0.85] tracking-tighter mb-10">
            ELITE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200 italic font-serif font-light">
              MAINTENANCE.
            </span>
          </h1>
          <p className="reveal-title max-w-2xl text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            Software isn't static. We provide the continuous engineering pulse that keeps your infrastructure secure, optimized, and future-proof.
          </p>
        </header>

        {/* --- BENTO GRID CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40">
          
          {/* Main Maintenance Hub */}
          <div className="hero-card md:col-span-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-12 relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl font-serif italic mb-6">Zero Downtime <br />Philosophy.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <p className="text-gray-400 font-light leading-relaxed">
                  We don't wait for things to break. Our proactive protocols identify vulnerabilities and performance bottlenecks before they impact your users.
                </p>
                <ul className="space-y-3">
                  {[
                    "Security Patching",
                    "Performance Tuning",
                    "Database Optimization",
                    "Feature Scaling"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs font-mono text-blue-400 tracking-wider">
                      <span className="w-4 h-[1px] bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img 
              src={Maintainance1} 
              alt="Diagnostics" 
              className="absolute right-[-10%] bottom-[-15%] w-2/3 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-110"
            />
          </div>

          {/* Uptime Quirky Card */}
          <div className="hero-card md:col-span-4 bg-blue-900/20 border border-blue-500/20 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative group">
            <div className="text-blue-400 font-mono text-[10px] uppercase tracking-widest italic font-bold">Health_Report</div>
            <div className="relative z-10">
              <span className="text-8xl font-black italic text-white tracking-tighter">99.9</span>
              <span className="text-2xl font-serif text-blue-400">%</span>
              <p className="text-gray-500 text-xs mt-2 uppercase tracking-[0.2em] font-light">Service availability <br /> across all managed nodes.</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Support HUD Section */}
          <div className="reveal-section md:col-span-12 mt-6 bg-[#0a0c12] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <img 
                  src={Maintainance2} 
                  className="relative z-10 rounded-[2rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Support Command Center"
                />
              </div>
              <div className="space-y-10">
                <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em]">Integrated Response</span>
                <h3 className="text-5xl font-serif italic">The Human <br /><span className="text-white not-italic font-black tracking-tighter uppercase underline decoration-blue-500 decoration-1 underline-offset-8">Support Layer.</span></h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Rapid Triage", d: "Sub-hour response times for critical incidents." },
                    { t: "Proactive Guard", d: "Automated alerts before thresholds are reached." },
                    { t: "Code Hygiene", d: "Regular refactoring to reduce technical debt." },
                    { t: "Cloud Mastery", d: "Expert management of AWS, Azure, & GCP." }
                  ].map((s, i) => (
                    <div key={i} className="group">
                      <h5 className="text-blue-400 font-mono text-[10px] mb-2 font-bold uppercase tracking-widest">0{i+1}_</h5>
                      <h6 className="text-lg font-bold mb-1 group-hover:text-blue-300 transition-colors uppercase tracking-tighter italic">{s.t}</h6>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PREMIUM CTA --- */}
        <footer className="reveal-section text-center py-32 relative rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">
            Secure your <span className="not-italic font-black text-white underline decoration-blue-500 decoration-1 underline-offset-[12px]">Digital Legacy.</span>
          </h2>
          
          <button
            onClick={() => navigate('/contactus')}
            className="group relative px-20 py-6 bg-transparent overflow-hidden"
          >
            <span className="relative z-10 text-white font-mono tracking-[0.6em] text-[10px] uppercase group-hover:text-black transition-colors duration-500">
                Deploy Support Plan
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[expo.inOut]"></div>
            <div className="absolute inset-0 border border-white/20"></div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SoftwareMaintenance;