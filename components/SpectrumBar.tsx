'use client';

import React, { useState } from 'react';

export default function SpectrumBar() {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-full max-w-2xl mx-auto my-12 px-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      id="spectrum-container"
    >
      <div className="flex justify-between text-[10px] font-mono tracking-widest text-[#5a5a6a] uppercase mb-2">
        <span>380 nm &bull; Ultraviolet</span>
        <span className={`text-violet-accent font-medium transition-all duration-300 ${hovered ? 'scale-105 filter drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]' : ''}`}>
          430 nm &bull; Violet Peak
        </span>
        <span>700 nm &bull; Infrared</span>
      </div>

      <div className="relative h-1 w-full bg-neutral-900 rounded-full overflow-visible">
        {/* Subtle, beautiful spectral light gradient */}
        <div 
          className="absolute inset-x-0 top-0 bottom-0 rounded-full" 
          style={{
            background: 'linear-gradient(to right, #4c0099 0%, #7C3AED 15%, #0055ff 35%, #00b981 55%, #f59e0b 75%, #ef4444 100%)'
          }}
        />

        {/* Pulsing indicator specifically for 430 nm (Violet) approximately at 15% mark */}
        <div 
          className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 group"
          style={{ transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Animated ripple circle */}
          <span className="absolute -inset-2 rounded-full bg-violet-accent/20 animate-ping opacity-75" />
          
          {/* Main glowing pin */}
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-accent border border-white/20" />
          </span>

          {/* Understated tool-tip showing the value */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-950/90 border border-neutral-800 text-[9px] font-mono px-2 py-0.5 rounded text-white translate-y-1 opacity-80 group-hover:opacity-100 transition-opacity">
            Visible Violet Spectrum Peak
          </div>
        </div>
      </div>

      <p className="text-center text-[10px] font-mono text-[#5a5a6a] mt-6 tracking-wide leading-relaxed">
        The 430 nm wavelength is the optimal absorbance band for Chlorophyll a driving plant photosynthesis.
      </p>
    </div>
  );
}
