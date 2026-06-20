'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToFirstSection = () => {
    const el = document.getElementById('technology');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between items-center px-6 py-12 md:py-20 select-none overflow-hidden"
    >
      {/* High-fidelity ambient gradient light background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Domain Label */}
      <div className="w-full max-w-5xl flex justify-between items-center border-b border-white/5 pb-4">
        <span className="font-mono text-xs tracking-[0.2em] text-violet-accent uppercase font-semibold">
          430.me
        </span>
        <span className="font-mono text-[10px] tracking-widest text-[#5a5a6a] uppercase">
          Micro-Encyclopedia & Registry
        </span>
      </div>

      {/* Hero Central Typography */}
      <div className="flex flex-col items-center justify-center text-center my-auto py-12">
        {/* Massive Numeral */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-medium select-none tracking-tighter"
          style={{
            fontSize: 'var(--hero-text-size, clamp(110px, 22vw, 240px))',
            lineHeight: '0.8',
            fontFamily: 'var(--font-display)',
            textShadow: '0 0 40px rgba(124, 58, 237, 0.15)'
          }}
        >
          430
        </motion.h1>

        {/* Dynamic Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.0 }}
          className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-violet-accent mt-6 transition-all"
        >
          One Number. Many Worlds.
        </motion.p>

        {/* Descriptive Sentence */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.0 }}
          className="max-w-md text-sm text-[#8a8a9a] leading-relaxed mt-4 font-sans px-4"
        >
          An elegant investigation into a physical constant, historic timestamp, technological threshold, and premium digital asset.
        </motion.p>
      </div>

      {/* Footer/Navigation Interaction */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="flex flex-col items-center gap-3 cursor-pointer group"
        onClick={scrollToFirstSection}
        id="scroll-action"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#5a5a6a] group-hover:text-white transition-colors">
          Explore the Hub
        </span>
        <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-violet-accent/50 transition-colors animate-bounce">
          <ArrowDown className="w-3 h-3 text-violet-accent" />
        </div>
      </motion.div>
    </section>
  );
}
