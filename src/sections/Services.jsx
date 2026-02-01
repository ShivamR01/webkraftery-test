import React, { useRef, useState, useEffect, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const serviceData = [
  { 
    title: 'Custom\nWeb Dev', 
    description: 'Bespoke digital ecosystems engineered for high-performance scale and speed.', 
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', 
    bgColor: 'bg-[#FF5F1F]', 
    textColor: 'text-black' 
  },
  { 
    title: 'Backend\nLogic', 
    description: 'Robust server-side architecture designed for millisecond latency.', 
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', 
    bgColor: 'bg-[#0047AB]', 
    textColor: 'text-white' 
  },
  { 
    title: 'Frontend\nArtistry', 
    description: 'Immersive interfaces where human emotion meets digital logic.', 
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', 
    bgColor: 'bg-[#00FA9A]', 
    textColor: 'text-black' 
  },
  { 
    title: 'UI/UX\nMastery', 
    description: 'Orchestrating digital journeys through empathy and pixel-precision.', 
    iconPath: 'M9.75 17L9 20l-1 1h6l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', 
    bgColor: 'bg-[#1A1A1A]', 
    textColor: 'text-white' 
  },
];

const ServiceCard = memo(({ service, index }) => (
  <div className={`group h-[450px] md:h-[500px] ${service.bgColor} ${service.textColor} border-4 border-black rounded-[1rem] p-8 md:p-12 flex flex-col justify-between transition-transform duration-500 shadow-[12px_12px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-[8px] hover:translate-y-[8px] will-change-transform`}>
    <div className="flex justify-between items-start">
      <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-current flex items-center justify-center rounded-full group-hover:rotate-12 transition-transform duration-500">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
        </svg>
      </div>
      <span className="font-mono text-xs font-black tracking-tighter opacity-40">#00{index + 1}</span>
    </div>

    <div>
      <h3 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter leading-none whitespace-pre-line uppercase italic">
        {service.title}
      </h3>
      <p className="font-bold leading-tight text-base md:text-lg opacity-80 max-w-[250px]">
        {service.description}
      </p>
    </div>
    
    <div className="pt-6 border-t-2 border-current w-full flex justify-between items-center opacity-30">
      <span className="text-[9px] font-mono tracking-widest uppercase font-black">Arch_Index</span>
      <div className="w-10 h-1 bg-current rounded-full" />
    </div>
  </div>
));

const Services = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // This ensures Swiper's navigation is only initialized when DOM refs are ready
    if (swiperInstance && swiperInstance.params) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative bg-[#F0F0F0] py-20 md:py-40 px-4 md:px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden flex items-center">
        <span className="text-[35vh] font-black whitespace-nowrap leading-none uppercase tracking-tighter animate-marquee">
          Capabilities • Capabilities • Capabilities •
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <header className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <span className="text-black font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 block font-black">
              // Service Portfolio
            </span>
            <h2 className="text-[clamp(2.5rem,9vw,7rem)] font-black text-black tracking-tighter leading-[0.85]">
              CRAFTING <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>SOLUTIONS.</span>
            </h2>
          </div>
        </header>

        <div className="relative group">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides={false}
            slidesPerView={1}
            spaceBetween={20}
            loop
            speed={800}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 40 },
            }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            className="!overflow-visible"
          >
            {serviceData.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard service={service} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-col items-center mt-16 md:mt-24 gap-8 md:gap-10">
            <div className="flex items-center gap-6 md:gap-12 bg-black p-2 md:p-3 rounded-full shadow-xl">
              <button 
                ref={prevRef}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all z-50 pointer-events-auto"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="custom-pagination flex gap-2 md:gap-3 px-2 md:px-4" />

              <button 
                ref={nextRef}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all z-50 pointer-events-auto"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 60s linear infinite; }
        .custom-pagination .swiper-pagination-bullet {
          background: rgba(255,255,255,0.4) !important;
          opacity: 1 !important;
          width: 5px; height: 5px;
          transition: width 0.3s ease-out;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: white !important;
          width: 25px; border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default Services;