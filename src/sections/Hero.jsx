import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";


const FloatingShapes = ({ isMobile }) => {
  return (
    <group scale={isMobile ? 0.7 : 1}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[isMobile ? 0 : -2.5, isMobile ? 1.2 : 1, 0]}>
          <torusKnotGeometry args={[0.8, 0.25, 150, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={isMobile ? 2 : 4}
            thickness={1.5}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            color="#a5b4fc"
          />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[isMobile ? 0.5 : 2.5, isMobile ? -1.5 : -1, -1]}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            speed={3}
            distort={0.4}
            radius={1}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
};

// 2. Optimized Particle Field
const Particles = ({ isMobile }) => {
  const count = isMobile ? 600 : 1500;
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        pos: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((p, i) => {
      p.t += p.speed;
      dummy.position.set(
        p.pos[0] + Math.cos(p.t) * 0.5,
        p.pos[1] + Math.sin(p.t) * 0.5,
        p.pos[2]
      );
      const s = Math.cos(p.t) * 0.03;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ffffff" emissive="#6366f1" />
    </instancedMesh>
  );
};

const Hero = () => {
  // Simple check for mobile responsiveness within React
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center bg-[#030303] overflow-hidden">
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: isMobile ? 60 : 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} />
          <FloatingShapes isMobile={isMobile} />
          <Particles isMobile={isMobile} />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} />
        </Canvas>
      </div>

      {/* Premium Overlay: Vignette & Noise */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black z-10 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center max-w-5xl">
          
          {/* Subtitle with tracking */}
          <div className="overflow-hidden mb-4">
            <span className="inline-block text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Est. 2026 — Digital Agency
            </span>
          </div>
          
          {/* Fluid Typography Heading */}
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black text-white leading-[1.1] tracking-tighter mb-8 italic-none">
            Architects of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-indigo-500">
              Digital Success.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We craft high-performance digital experiences where 
            <span className="text-white font-medium"> art meets code.</span>
          </p>

          {/* Interactive Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:pr-14">
              <span className="relative z-10">Start a Project</span>
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </button>
            
            {/* <div className="flex items-center gap-4 group cursor-pointer">
              <div className="h-[1px] w-8 bg-white/30 group-hover:w-12 transition-all duration-300" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Corner UI Elements (Premium Touch) */}
      {/* <div className="absolute bottom-10 left-10 hidden lg:block z-20">
        <p className="text-white/30 text-[10px] tracking-widest uppercase rotate-90 origin-left">
          Scroll to Explore
        </p>
      </div> */}

      <div className="absolute top-10 right-10 z-20">
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;