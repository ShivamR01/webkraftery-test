import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const serviceData = [
  { 
    title: 'Custom\nWeb Dev', 
    description: 'Bespoke digital ecosystems engineered for high-performance scale and speed.', 
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', 
    bgColor: 'bg-[#FF5F1F]', // Neon Orange
    textColor: 'text-black' 
  },
  { 
    title: 'Backend\nLogic', 
    description: 'Robust server-side architecture designed for millisecond latency.', 
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066...', 
    bgColor: 'bg-[#0047AB]', // Cobalt Blue
    textColor: 'text-white' 
  },
  { 
    title: 'Frontend\nArtistry', 
    description: 'Immersive interfaces where human emotion meets digital logic.', 
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', 
    bgColor: 'bg-[#00FA9A]', // Spring Green
    textColor: 'text-black' 
  },
  { 
    title: 'UI/UX\nMastery', 
    description: 'Orchestrating digital journeys through empathy and pixel-precision.', 
    iconPath: 'M9.75 17L9 20l-1 1h6l-1-1l-.75-3...', 
    bgColor: 'bg-[#1A1A1A]', // Obsidian
    textColor: 'text-white' 
  },
];

const Services = () => {
  const [swiper, setSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <section className="relative bg-[#F0F0F0] py-24 md:py-40 px-6 overflow-hidden">
      
      {/* Background Kinetic Detail */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden flex items-center">
        <span className="text-[40vh] font-black whitespace-nowrap leading-none uppercase tracking-tighter">
          Capabilities • Capabilities • Capabilities •
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Header Section - Modern Condensed */}
        <header className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <span className="text-black font-mono text-xs tracking-[0.5em] uppercase mb-4 block font-black">
              // Service Portfolio
            </span>
            <h2 className="text-[clamp(3rem,10vw,8rem)] font-black text-black tracking-tighter leading-[0.8]">
              CRAFTING <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>SOLUTIONS.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 border-l-4 border-black pl-6 pb-2 hidden lg:block">
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest leading-relaxed">
              [ Engine_v.2.0 ] <br />
              Deploying high-frequency digital assets for global enterprises.
            </p>
          </div>
        </header>

        {/* Swiper Wrapper */}
        <div className="relative group perspective-[2000px]">
          <Swiper
            onSwiper={setSwiper}
            modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, el: '.custom-pagination', type: 'bullets' }}
            className="!overflow-visible"
          >
            {serviceData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className={`group h-[500px] ${service.bgColor} ${service.textColor} border-4 border-black rounded-[1rem] p-12 flex flex-col justify-between transition-all duration-500 shadow-[15px_15px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[10px] hover:translate-y-[10px]`}>
                  
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 border-2 border-current flex items-center justify-center rounded-full group-hover:rotate-12 transition-transform duration-500`}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                      </svg>
                    </div>
                    <span className="font-mono text-xs font-black tracking-tighter opacity-50">#00{index + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-none whitespace-pre-line uppercase italic">
                      {service.title}
                    </h3>
                    <p className="font-bold leading-tight text-lg opacity-80 max-w-[250px]">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t-2 border-current w-full flex justify-between items-center opacity-30">
                    <span className="text-[10px] font-mono tracking-widest uppercase font-black">Architecture_Index</span>
                    <div className="w-12 h-1 bg-current rounded-full" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- MINIMAL HUD DOCK --- */}
          <div className="flex flex-col items-center mt-24 gap-10">
            <div className="flex items-center gap-12 bg-black p-3 rounded-full shadow-2xl">
              
              <button 
                ref={prevRef}
                className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="custom-pagination flex gap-3 px-4" />

              <button 
                ref={nextRef}
                className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>

            <div className="flex items-center gap-4 group cursor-crosshair">
               <div className="w-2 h-2 bg-black rounded-full animate-ping" />
               <span className="text-[10px] font-mono tracking-[0.6em] font-black uppercase text-black/40">Status: Protocols_Active</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          background: rgba(255,255,255,0.3) !important;
          opacity: 1 !important;
          width: 6px;
          height: 6px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: white !important;
          width: 30px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Services;