import React from 'react';
import { Mail, Phone, User, Pen, ArrowUpRight } from 'lucide-react';

const CTACard = ({ 
  name, 
  role, 
  email, 
  phone, 
  bio,
  logoText = "EBKRAFTERY" 
}) => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="relative group bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 w-full transition-all duration-500 hover:bg-white/[0.06] hover:border-purple-500/40">
      
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-purple-500/5 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Header with Icon and Top Action */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-white/5">
            <User className="w-5 h-5 text-purple-400" />
          </div>
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
            {logoText}
          </span>
        </div>
        <ArrowUpRight className="text-white/20 group-hover:text-purple-400 transition-colors" size={20} />
      </div>

      {/* Primary Identity */}
      <div className="relative z-10 mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-purple-100 transition-colors">
          {name}
        </h2>
        <p className="text-purple-500 font-mono text-[10px] tracking-widest uppercase italic">
          {role}
        </p>
      </div>

      {/* Bio Section */}
      <div className="relative z-10 flex gap-3 mb-8 bg-white/5 p-4 rounded-xl border border-white/5">
        <Pen className="w-4 h-4 text-purple-500 shrink-0 mt-1" />
        <p className="text-gray-400 text-xs leading-relaxed text-justify italic font-light">
          {bio}
        </p>
      </div>

      {/* Contact Actions */}
      <div className="relative z-10 space-y-3 pt-6 border-t border-white/10">
        <button
          onClick={handleEmailClick}
          className="flex items-center gap-3 text-xs text-white/40 hover:text-white transition-all duration-300 group/link w-full"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-purple-500/50">
            <Mail className="w-3.5 h-3.5 text-purple-500" />
          </div>
          <span className="truncate">{email}</span>
        </button>
        
        <button
          onClick={handlePhoneClick}
          className="flex items-center gap-3 text-xs text-white/40 hover:text-white transition-all duration-300 group/link w-full"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-purple-500/50">
            <Phone className="w-3.5 h-3.5 text-purple-500" />
          </div>
          <span>+91 {phone}</span>
        </button>
      </div>
    </div>
  );
};

export default CTACard;