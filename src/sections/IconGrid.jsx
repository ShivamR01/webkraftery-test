import React from 'react';

const IconGrid = () => {
  return (
    <div className="group relative w-12 h-12 flex items-center justify-center">
      {/* --- Rotating Outer Ring (Quirky Tech touch) --- */}
      <div className="absolute inset-0 border border-blue-500/20 rounded-xl animate-[spin_8s_linear_infinite] group-hover:border-blue-400/50 transition-colors" />
      
      {/* --- Main Icon Container --- */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-white/10 group-hover:border-blue-500/30 transition-all duration-500 transform group-hover:scale-110">
        
        {/* --- The Grid --- */}
        <div className="grid grid-cols-2 gap-1.5 relative overflow-hidden">
          
          {/* Active Node 1 */}
          <div className="w-2.5 h-2.5 bg-blue-400 rounded-[2px] shadow-[0_0_8px_#60a5fa] animate-pulse" />
          
          {/* Inactive Node 1 */}
          <div className="w-2.5 h-2.5 bg-slate-700 rounded-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Inactive Node 2 */}
          <div className="w-2.5 h-2.5 bg-slate-700 rounded-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
          
          {/* Active Node 2 */}
          <div className="w-2.5 h-2.5 bg-blue-400 rounded-[2px] shadow-[0_0_8px_#60a5fa] animate-pulse delay-300" />

          {/* --- The "Scanner" Line (Futuristic Detail) --- */}
          <div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent -translate-y-full animate-[scan_2s_linear_infinite] pointer-events-none" />
        </div>
      </div>

      {/* --- Global Styles for custom animations --- */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
};

export default IconGrid;