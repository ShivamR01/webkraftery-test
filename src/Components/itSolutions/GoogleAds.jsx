import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import adimg1 from '../../assets/ADS3.jpeg';
import adimg2 from "../../assets/ADS2.jpeg";
import adimg3 from "../../assets/ADS5.jpeg";

gsap.registerPlugin(ScrollTrigger);

const GoogleAds = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Entrance Sequence
      tl.from(".reveal-h1", { y: 100, opacity: 0, duration: 1.4 })
        .from(".search-bar-ui", { scale: 0.8, opacity: 0, duration: 1 }, "-=1")
        .from(".hero-card", { y: 50, opacity: 0, stagger: 0.1, duration: 1 }, "-=0.5");

      // Scroll reveal for bento sections
      gsap.utils.toArray(".bento-reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#020617] text-[#f8fafc] min-h-screen font-sans overflow-hidden">
      
      {/* --- PREMIUM DYNAMIC BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-yellow-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* --- HERO SECTION --- */}
        <header className="text-center mb-40">
          <div className="search-bar-ui inline-flex items-center gap-4 px-6 py-3 mb-10 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl shadow-2xl">
            <span className="text-blue-400 font-bold">G</span>
            <div className="w-[1px] h-4 bg-white/20"></div>
            <span className="text-sm font-light text-gray-400 italic">"Best digital advertising agency near me"</span>
            <div className="bg-blue-600 p-1 rounded-full text-[10px]">🔍</div>
          </div>
          
          <h1 className="reveal-h1 text-6xl md:text-[140px] font-black leading-[0.8] tracking-tighter mb-10">
            MAXIMIZE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-yellow-300 italic font-serif font-light tracking-normal">
              VISIBILITY.
            </span>
          </h1>
          <p className="reveal-h1 max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Stop guessing. Start growing. We engineer high-intent Google Ads campaigns that dominate the auction and multiply your ROI.
          </p>
        </header>

        {/* --- BENTO CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40">
          
          {/* Main Strategy Hub */}
          <div className="hero-card md:col-span-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group">
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-4xl font-serif italic mb-6">Strategic Domination.</h2>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Our team leverages Search intent analysis and search engine metrics to build campaigns that deliver measurable results, whether it's lead generation or brand authority.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Keyword Targeting', 'Conversion Tracking', 'A/B Testing', 'Remarketing'].map(tag => (
                  <span key={tag} className="px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] tracking-widest font-bold uppercase text-blue-400">{tag}</span>
                ))}
              </div>
            </div>
            <img 
              src={adimg1} 
              className="absolute right-[-10%] bottom-[-5%] w-2/3 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110"
              alt="Strategy" 
            />
          </div>

          {/* Metric Quirky Card */}
          <div className="hero-card md:col-span-4 bg-yellow-500/5 border border-yellow-500/20 rounded-[2.5rem] p-12 flex flex-col justify-between overflow-hidden relative group">
            <div className="text-yellow-500 font-mono text-[10px] uppercase tracking-widest font-bold">// PERFORMANCE_METRIC</div>
            <div className="relative z-10">
              <span className="text-8xl font-black italic text-white tracking-tighter">5.2</span>
              <span className="text-2xl font-serif text-yellow-300">x</span>
              <p className="text-gray-500 text-xs mt-2 uppercase tracking-[0.2em] font-light italic">Average increase in ROI <br /> across retail accounts.</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-500/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Process Section HUD */}
          <div className="bento-reveal md:col-span-12 mt-6 bg-[#0a0f1e] border border-white/5 rounded-[3rem] p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em] mb-4 block">Engineered Growth</span>
                <h3 className="text-5xl font-serif italic mb-10">Data-Driven <br /><span className="text-white not-italic font-black">AD STRATEGY.</span></h3>
                
                <div className="space-y-8">
                  {[
                    { t: "INTENT MAPPING", d: "Targeting users at the exact moment of decision." },
                    { t: "CONVERSION OPTIMIZATION", d: "Every click is treated as a potential client." },
                    { t: "MARKET ANALYTICS", d: "Using competitor data to out-bid and out-maneuver." }
                  ].map((s, i) => (
                    <div key={i} className="group border-l border-white/10 pl-6 hover:border-blue-500 transition-colors">
                      <h5 className="text-lg font-bold group-hover:text-blue-400 transition-colors uppercase tracking-widest">{s.t}</h5>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={adimg2} 
                  className="rounded-[2.5rem] border border-white/10 shadow-2xl filter brightness-90 hover:brightness-100 transition-all duration-700"
                  alt="Data Analytics"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- FULL WIDTH WHY SECTION --- */}
        <section className="bento-reveal grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40 px-10">
          <img 
            src={adimg3} 
            className="rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
            alt="Visibility"
          />
          <div>
             <h2 className="text-5xl font-serif italic mb-8">Reach the <br /><span className="text-blue-400 not-italic font-black tracking-tighter">HIGH-INTENT</span> Audience.</h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                Google Ads is the world's most powerful digital marketing tool. We ensure your brand appears at the top of search results, driving qualified traffic directly to your website.
             </p>
             <div className="space-y-4">
               {['Search Engine Results', 'PPC Advertising', 'Remarketing Campaigns'].map(item => (
                 <div key={item} className="flex items-center gap-4 group cursor-default">
                    <div className="w-8 h-[1px] bg-blue-500 group-hover:w-12 transition-all" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-300">{item}</span>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* --- PREMIUM CALL TO ACTION --- */}
        <footer className="bento-reveal text-center py-32 relative rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">
            Ready to <span className="not-italic font-black text-white underline decoration-blue-500 decoration-1 underline-offset-[14px]">Accelerate?</span>
          </h2>
          
          <button
            onClick={() => navigate('/contactus')}
            className="group relative px-20 py-6 bg-transparent overflow-hidden"
          >
            <span className="relative z-10 text-white font-mono tracking-[0.6em] text-[10px] uppercase group-hover:text-black transition-colors duration-500">
                Launch Campaign
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[expo.inOut]"></div>
            <div className="absolute inset-0 border border-white/20"></div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default GoogleAds;