import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import VantaBackground from './VantaBackground';
import { motion, useScroll, useSpring } from 'framer-motion';
import TimelineCurve from './TimelineCurve';
import TimelineNode from './TimelineNode';
import ProjectModal from './ProjectModal';
import ZoomControls from './ZoomControls';
import { mockProjects } from '../../data/mockProjects';

const Timeline = () => {
  const [scale, setScale] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(2000);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateLayout = () => {
      const baseHeight = window.innerHeight < 768 ? 1.4 : 1.8;
      setContainerHeight(Math.max(window.innerHeight * baseHeight, mockProjects.length * 450 + 800));
      setScreenWidth(window.innerWidth);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const handleZoom = useCallback((delta) => {
    setScale(prev => Math.min(Math.max(prev + delta, 0.5), 2.0));
  }, []);

  const nodePositions = useMemo(() => {
    return mockProjects.map((_, i) => {
      const progress = i / (mockProjects.length - 1);
      const y = 150 + progress * (containerHeight - 500);
      
      let amplitude;
      if (screenWidth < 480) amplitude = 15;
      else if (screenWidth < 768) amplitude = 20;
      else amplitude = 30 + (progress * 5); // Quirky expanding curve
      
      const side = i % 2 === 0 ? 1 : -1;
      const x = 50 + side * amplitude; // Centered curve
      
      return { x: `${x}%`, y };
    });
  }, [containerHeight, screenWidth]);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-[#e0e0e0] overflow-hidden relative selection:bg-purple-500/30">
      <VantaBackground />
      
      {/* --- PREMIUM HUD PROGRESS BAR --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* --- GHOST TEXT BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden">
        <h2 className="text-[30vw] font-black italic select-none">PORTFOLIO</h2>
      </div>

      {/* Header: Editorial Style */}
      <div className="relative z-10 pt-24 pb-20 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-500/5 backdrop-blur-md"
        >
          <span className="text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase font-mono italic">
            // Archive_Log: 2024-2026
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-[120px] font-black tracking-tighter italic leading-none mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          INNOVATION <br />
          <span className="not-italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white/20">
            milestones.
          </span>
        </motion.h1>
      </div>

      {/* Timeline Display */}
      <div className="flex justify-center w-full relative">
        <div
          className="relative transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] w-full max-w-[1200px]"
          style={{
            height: `${containerHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'center top',
          }}
        >
          <TimelineCurve scale={scale} containerHeight={containerHeight} nodePositions={nodePositions} />

          {mockProjects.map((project, index) => (
            <TimelineNode
              key={project.id}
              project={project}
              position={nodePositions[index]}
              onClick={(p) => { setSelectedProject(p); setIsModalOpen(true); }}
              index={index}
              isLast={index === mockProjects.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Floating HUD Instructions */}
      <motion.div 
        className="hidden lg:block fixed top-32 left-10 z-40 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 max-w-[200px] shadow-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">System_Active</span>
        </div>
        <ul className="space-y-4">
          {[
            { l: 'Select Node', i: '01' },
            { l: 'Zoom Navigation', i: '02' },
            { l: 'Milestone Details', i: '03' }
          ].map((item, i) => (
            <li key={i} className="flex items-baseline gap-3">
              <span className="text-[9px] font-mono text-purple-500">{item.i}</span>
              <span className="text-xs font-light text-gray-300 italic tracking-wide">{item.l}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <ZoomControls
        className="fixed bottom-10 right-10 z-[60]"
        scale={scale}
        onZoomIn={() => handleZoom(0.2)}
        onZoomOut={() => handleZoom(-0.2)}
        onReset={() => setScale(1)}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setTimeout(() => setSelectedProject(null), 300); }}
      />
    </div>
  );
};

export default Timeline;