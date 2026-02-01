import React, { useRef, useState, useEffect, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const serviceData = [
  {
    title: "Custom\nWebsite Development",
    description:
      "Custom-built websites designed to match your brand, engage your audience, and drive results.",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    bgColor: "bg-[#FF5F1F]",
    textColor: "text-black",
  },
  {
    title: "Backend\nLogic",
    description:
      "Secure, scalable backend development with optimized APIs, databases, and server-side logic.",
    iconPath:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37",
    bgColor: "bg-[#0047AB]",
    textColor: "text-white",
  },
  {
    title: "Frontend\nArtistry",
    description:
      "We create visually appealing, fast, and user-friendly frontends that improve conversion rates.",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    bgColor: "bg-[#00FA9A]",
    textColor: "text-black",
  },
  {
    title: "UI/UX\nMastery",
    description:
      "Orchestrating digital journeys through empathy and pixel-precision.",
    iconPath: "M9.75 17L9 20l-1 1h6l-1-1l-.75-3M3 13h18",
    bgColor: "bg-[#1A1A1A]",
    textColor: "text-white",
  },
  {
    title: "React\nDevelopment",
    description:
      "Crafting dynamic interfaces with reusable components and seamless state flows.",
    iconPath: "M12 2a4 4 0 014 4v1h1a3 3 0 013 3v4",
    bgColor: "bg-[#0F172A]",
    textColor: "text-cyan-400",
  },
  {
    title: "Maintenance\n& Support",
    description:
      "Ensuring stability, performance, and continuous improvement long after launch.",
    iconPath: "M12 8v4l3 3M21 12a9 9 0 11-6.219-8.56",
    bgColor: "bg-[#1A1A1A]",
    textColor: "text-white",
  },
];

const ServiceCard = memo(({ service, index }) => (
  <div
    className={`group h-[420px] md:h-[500px] ${service.bgColor} ${service.textColor} border-[3px] md:border-4 border-black rounded-[1rem] p-8 md:p-12 flex flex-col justify-between shadow-[10px_10px_0px_0px_#000] transform-gpu will-change-transform`}
  >
    <div className="flex justify-between items-start">
      <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-current flex items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-12">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={service.iconPath}
          />
        </svg>
      </div>
      <span className="font-mono text-[10px] font-black opacity-40 uppercase">
        Dev_Log_0{index + 1}
      </span>
    </div>

    <div>
      <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-none whitespace-pre-line uppercase italic">
        {service.title}
      </h3>
      <p className="font-bold leading-tight text-sm md:text-lg opacity-80 max-w-[260px]">
        {service.description}
      </p>
    </div>

    <div className="pt-6 border-t border-current w-full flex justify-between items-center opacity-30">
      <span className="text-[8px] font-mono tracking-widest uppercase font-black">
        Archive_Index
      </span>
      <div className="w-8 h-[2px] bg-current rounded-full" />
    </div>
  </div>
));

const Services = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative bg-[#F0F0F0] py-16 md:py-40 px-4 overflow-hidden contain-layout">
      {/* 1. Hardware Accelerated Marquee */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden flex items-center">
        <span className="text-[25vh] md:text-[35vh] font-black whitespace-nowrap leading-none uppercase tracking-tighter animate-marquee transform-gpu">
          Capabilities • Capabilities • Capabilities • Capabilities •
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <header className="mb-12 md:mb-20">
          <span className="text-black font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block font-black opacity-50 italic">
            // Core_Systems_Archive
          </span>
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black text-black tracking-tighter leading-[0.85]">
            CRAFTING <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px black" }}
            >
              SOLUTIONS.
            </span>
          </h2>
        </header>

        <div className="relative group">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides={true} // Essential for coverflow optimization
            slidesPerView={1}
            initialSlide={1}
            loop={true}
            speed={600}
            // 2. Optimized Coverflow Settings for Mobile GPU
            coverflowEffect={{
              rotate: 0, // Keep at 0 to avoid heavy perspective recalculation
              stretch: 0, // Keep at 0
              depth: 150, // Depth is fine as it uses simple Z-translate
              modifier: 1,
              slideShadows: false, // SHADOWS ARE THE MAIN CAUSE OF HANGING - DISABLED.
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            // 3. Performance Flag
            watchSlidesProgress={true}
            className="!overflow-visible"
          >
            {serviceData.map((service, index) => (
              <SwiperSlide key={index} className="pb-10">
                <ServiceCard service={service} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-col items-center mt-12 gap-8">
            <div className="flex items-center gap-6 bg-black p-2 rounded-full shadow-2xl">
              <button
                ref={prevRef}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="custom-pagination flex gap-2 px-2" />
              <button
                ref={nextRef}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee { animation: marquee 60s linear infinite; }
        
        /* 4. GPU Optimization Classes */
        .transform-gpu { transform: translateZ(0); }
        .contain-layout { contain: layout; }
        
        .custom-pagination .swiper-pagination-bullet {
          background: #555 !important;
          width: 6px; height: 6px;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: white !important;
          width: 20px; border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Services;
