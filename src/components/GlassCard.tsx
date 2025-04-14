import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-black/5 backdrop-blur-md rounded-xl relative overflow-hidden ${className}`}>
      {/* Industrial Graph Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute left-0 right-0 top-[2%] h-px bg-white/20"></div>
        <div className="absolute left-0 right-0 top-[4%] h-px bg-white/20"></div>
        <div className="absolute left-0 right-0 top-[6%] h-px bg-white/20"></div>
        <div className="absolute left-0 right-0 top-[94%] h-px bg-white/20"></div>
        <div className="absolute left-0 right-0 top-[96%] h-px bg-white/20"></div>
        <div className="absolute left-0 right-0 top-[98%] h-px bg-white/20"></div>
        {/* Vertical lines */}
        <div className="absolute top-0 bottom-0 left-[2%] w-px bg-white/20"></div>
        <div className="absolute top-0 bottom-0 left-[4%] w-px bg-white/20"></div>
        <div className="absolute top-0 bottom-0 left-[6%] w-px bg-white/20"></div>
        <div className="absolute top-0 bottom-0 left-[94%] w-px bg-white/20"></div>
        <div className="absolute top-0 bottom-0 left-[96%] w-px bg-white/20"></div>
        <div className="absolute top-0 bottom-0 left-[98%] w-px bg-white/20"></div>

      </div>
      {children}
    </div>
  );
};

export default GlassCard;