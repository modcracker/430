'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FactSection } from '@/lib/content';

interface SectionProps {
  section: FactSection;
  index: number;
}

export default function Section({ section, index }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Zero-dependency Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.1,
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={elementRef}
      id={section.id}
      className={`relative py-24 md:py-36 border-t border-white/5 transition-all duration-1000 transform motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Editorial Grid */}
        <div className={`grid grid-cols-1 ${isEven ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-12 lg:gap-16`}>
          
          {/* Main Info Column */}
          <div className={`lg:col-span-5 ${!isEven && 'lg:order-last'}`}>
            <div className="sticky top-12">
              <span className="font-mono text-xs text-violet-accent tracking-[0.25em] uppercase font-semibold">
                {String(index + 1).padStart(2, '0')} / {section.category}
              </span>
              
              <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mt-4 font-display leading-[1.15]">
                {section.title}
              </h2>
              
              <p className="text-sm font-mono text-violet-accent/80 tracking-wide mt-2">
                {section.subtitle}
              </p>
              
              <p className="text-sm text-[#8a8a9a] leading-relaxed mt-6">
                {section.prose}
              </p>

              <div className="mt-8">
                <Link
                  href={`/wiki/${section.id}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-violet-accent hover:text-white transition-colors group/link"
                >
                  Explore detailed database entry 
                  <span className="inline-block transform group-hover/link:translate-x-1 transition-transform font-sans">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Technical and Fact Items List */}
          <div className="lg:col-span-7 flex flex-col gap-10 md:gap-12 justify-center">
            {section.items.map((item, itemIdx) => (
              <div 
                key={itemIdx} 
                className="group border-b border-white/5 pb-8 last:border-b-0 last:pb-0"
                id={`fact-item-${section.id}-${itemIdx}`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-lg text-white font-medium group-hover:text-violet-accent transition-colors">
                    {item.name}
                  </h3>
                  
                  {item.technicalKey && (
                    <span className="font-mono text-[9px] tracking-widest text-[#5a5a6a] uppercase shrink-0 bg-white/5 py-1 px-2 rounded-sm self-start md:self-baseline">
                      {item.technicalKey}: <span className="text-[#a0a0b0]">{item.technicalValue}</span>
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-[#7a7a8a] leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
