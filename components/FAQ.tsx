'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is the HTTP Status Code 430?",
    answer: "Though not a standard IETF HTTP status, 430 is famously designated by Shopify's API proxy layer as \"Request Header Fields Too Large.\" It functions as a rate-limiting sentinel, protecting server node resources from scraping scripts and heavy query loads."
  },
  {
    question: "Why is 430 nm significant on the physical light spectrum?",
    answer: "At 430 nanometers, light reaches the core of visible violet. This exact frequency matches the peak absorption spectrum of Chlorophyll A, making it the most critical wave for powering photosynthesis in terrestrial plants, as well as a vital frequency in UV phototherapy."
  },
  {
    question: "What is the \"Miracle Morning\" significance of 4:30 AM?",
    answer: "4:30 AM represents astronomical dawn and the peak circadian threshold for high achievers, monks, and modern executives like Apple's Tim Cook. Rising at 4:30 AM secures deep, completely silent, distraction-free creative hours before the digital world floods with notifications."
  },
  {
    question: "What is the cultural meaning of the 430 Angel Number?",
    answer: "In professional numerology patterns, 430 is an energetic signal of dynamic stabilization. Fusing the material foundations of 4, the self-expression and creative growth of 3, and the infinite multiplier power of 0, it calls for aligning realistic plans with high-vibe creative purpose."
  },
  {
    question: "What is Port 430 in computer networking registers?",
    answer: "UDP/TCP Port 430 is historically registered under IANA rules to the UTMI (Unified Transfer Model Interface) protocol. It manages underlying telemetry systems, channeling diagnostic signals safely to centralized corporate server environments."
  },
  {
    question: "What is the Lincoln 430 MEL V8 engine?",
    answer: "The Lincoln 430 MEL is an iconic 7.0-liter American luxury iron-block engine introduced in 1958. Generating up to 400 HP and immense low-end torque, it became the benchmark powerhouse for heavy high-end American cruisers and classic continentals."
  },
  {
    question: "How did 430 BC alter classical antiquity?",
    answer: "In 430 BC, during the second year of the Peloponnesian War, a devastating plague decimated ancient Athens, killing statesman Pericles and nearly a quarter of its citizens. This catastrophic event permanently eroded Athenian military dominance and forever changed the course of Classical Greek democracy."
  },
  {
    question: "Is the premium domain name 430.me available for business acquisition?",
    answer: "Yes, 430.me is a highly valuable, short, 5-character premium domain name with immense brand development potential. It is currently listed for secure acquisition and instant transfer brokered entirely through GoDaddy."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5 select-none"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-accent/20 bg-violet-accent/5 mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-violet-accent" />
          <span className="font-mono text-[9px] tracking-widest text-[#a0a0b0] uppercase">
            Search Index FAQ
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-display text-white font-medium tracking-tight">
          Frequently Answered Coordinates
        </h2>
        <p className="text-xs text-[#6a6a7a] font-mono mt-2 uppercase tracking-wide">
          Answering common search queries regarding the number 430
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border border-white/5 bg-white/[0.01] hover:bg-[#0E0E14] hover:border-violet-accent/20 transition-all rounded-sm overflow-hidden"
              id={`faq-item-${index}`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left p-5 md:p-6 text-white font-medium text-xs md:text-sm font-sans focus:outline-none"
              >
                <span className={isOpen ? "text-violet-accent font-semibold transition-colors" : "transition-colors"}>
                  {item.question}
                </span>
                <span className="shrink-0 p-1 bg-white/5 rounded-sm border border-white/5 text-violet-accent ml-4">
                  {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-40 border-t border-white/5 p-5 md:p-6 text-[#8a8a9a]' : 'max-h-0'
                }`}
              >
                <p className="text-xs md:text-sm leading-relaxed font-sans">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
