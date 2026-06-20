'use client';

import React from 'react';
import { ShieldCheck, Globe, Star } from 'lucide-react';
import { domainStats } from '@/lib/content';

export default function ForSaleCTA() {
  return (
    <section 
      id="acquisition" 
      className="relative py-24 md:py-36 border-t border-white/5 bg-gradient-to-b from-transparent to-neutral-950/40 select-none overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Decorative Element */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-accent/20 bg-violet-accent/5 mb-8">
          <Star className="w-3 h-3 text-violet-accent animate-pulse" />
          <span className="font-mono text-[9px] tracking-widest text-[#a0a0b0] uppercase">
            Premium Digital Asset
          </span>
        </div>

        {/* Headings */}
        <h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight font-display">
          Acquire <span className="text-violet-accent font-semibold">430.me</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-sm text-[#8a8a9a] leading-relaxed mt-4">
          A vanishingly rare, highly memorable 5-character domain. Perfect for high-frequency trading platforms, time/habit trackers, developer services, spectral analytics, or strong personal portfolios.
        </p>

        {/* Dynamic Property Specifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto my-12 text-left">
          <div className="border border-white/5 bg-white/[0.01] p-4 rounded-sm">
            <span className="block font-mono text-[9px] text-[#5a5a6a] uppercase tracking-wider mb-1">Length</span>
            <span className="text-sm font-sans font-medium text-white">5 Characters</span>
          </div>
          <div className="border border-white/5 bg-white/[0.01] p-4 rounded-sm">
            <span className="block font-mono text-[9px] text-[#5a5a6a] uppercase tracking-wider mb-1">Extension</span>
            <span className="text-sm font-sans font-medium text-white">.me premium</span>
          </div>
          <div className="border border-white/5 bg-white/[0.01] p-4 rounded-sm">
            <span className="block font-mono text-[9px] text-[#5a5a6a] uppercase tracking-wider mb-1">Transfer</span>
            <span className="text-sm font-sans font-medium text-white">Instant Push</span>
          </div>
          <div className="border border-white/5 bg-white/[0.01] p-4 rounded-sm">
            <span className="block font-mono text-[9px] text-[#5a5a6a] uppercase tracking-wider mb-1">Inquiries</span>
            <span className="text-sm font-sans font-medium text-violet-accent">Open / GoDaddy</span>
          </div>
        </div>

        {/* Transaction / Benefit Points */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-xs text-[#6a6a7a] font-mono mb-12">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-violet-accent" />
            Escrow protection available
          </span>
          <span className="hidden sm:inline text-neutral-800">&bull;</span>
          <span className="flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-violet-accent" />
            Global DNS compatibility
          </span>
        </div>

        {/* Primary Acquisition Link */}
        <div className="flex flex-col items-center justify-center gap-4">
          <a 
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=430.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-violet-accent hover:bg-violet-accent/90 text-white font-sans text-xs md:text-sm font-medium tracking-wide px-8 py-3.5 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 20px rgba(124, 58, 237, 0.25)' }}
            id="acquire-button"
          >
            <Globe className="w-4 h-4" />
            Acquire 430.me on GoDaddy
          </a>
          <span className="font-mono text-[10px] text-[#5a5a6a] mt-2">
            Secure checkout &bull; Safe transaction brokered via GoDaddy
          </span>
        </div>
      </div>
    </section>
  );
}
