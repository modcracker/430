import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SpectrumBar from '@/components/SpectrumBar';
import Section from '@/components/Section';
import ForSaleCTA from '@/components/ForSaleCTA';
import FAQ from '@/components/FAQ';
import { factSections, domainStats } from '@/lib/content';

export const metadata = {
  title: '430 — Number, Wavelength, History & More | 430.me',
  description: 'Everything about 430: HTTP status codes, 430nm violet light, 430 BC history, the 4:30 AM habit, and more. Also: 430.me domain for sale.',
};

export default function Home() {
  // Construct WebPage JSON-LD schema dynamically
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "430 — Number, Wavelength, History & More | 430.me",
    "description": "An exhaustive cultural, technical, and historical reference library exploring the significance of 430. Premium domain 430.me is currently available for purchase.",
    "url": "https://430.me",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": factSections.map((section, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": section.title,
        "description": section.shortDesc,
        "url": `https://430.me/#${section.id}`
      }))
    },
    "offers": {
      "@type": "Offer",
      "url": "https://430.me/#acquisition",
      "price": "Inquiries Welcome",
      "priceCurrency": "USD",
      "itemOffered": {
        "@type": "Product",
        "name": "430.me Premium Domain Name",
        "description": "Highly scarce 5-character premium domain name, perfect for tech, time, or geographic brands."
      }
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the HTTP Status Code 430?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Though not a standard IETF HTTP status, 430 is famously designated by Shopify's API proxy layer as 'Request Header Fields Too Large.' It functions as a rate-limiting sentinel, protecting server node resources from scraping scripts."
        }
      },
      {
        "@type": "Question",
        "name": "Why is 430 nm significant on the physical light spectrum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At 430 nanometers, light reaches the core of visible violet. This exact frequency matches the peak absorption spectrum of Chlorophyll A, making it the most critical wave for powering photosynthesis in terrestrial plants."
        }
      },
      {
        "@type": "Question",
        "name": "What is the rising hour of 4:30 AM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "4:30 AM is a peak productivity rising hour utilized by top leaders, Navy SEALs, and executives like Apple CEO Tim Cook to secure quiet, focused flow hours before daily distractions arise."
        }
      },
      {
        "@type": "Question",
        "name": "What is the status of the 430.me domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The highly scarce 5-character premium domain name 430.me is currently available for business development and is secure for immediate purchase on GoDaddy."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white selection:bg-violet-accent selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <Hero />

      {/* Signature Spectrum representation element */}
      <div className="relative border-t border-b border-white/5 py-4 bg-neutral-950/20">
        <SpectrumBar />
      </div>

      {/* Encyclopedic Sections */}
      <div className="relative">
        {factSections.map((section, idx) => (
          <Section key={section.id} section={section} index={idx} />
        ))}
      </div>

      {/* Search Engine Optimization FAQ Accordion Grid */}
      <FAQ />

      {/* Domain Acquisition Information Card */}
      <ForSaleCTA />

      {/* Mini Sitemap Editorial Footer */}
      <footer className="border-t border-white/5 bg-neutral-950 py-16 text-[#5a5a6a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-12 mb-12">
            
            {/* Nav Links / Quick Links */}
            <div>
              <h4 className="font-mono text-[10px] tracking-widest text-violet-accent uppercase mb-4">
                Reference Sections
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-mono">
                {factSections.map((section) => (
                  <li key={section.id} className="flex items-center gap-2">
                    <a 
                      href={`#${section.id}`} 
                      className="hover:text-white transition-colors"
                      id={`footer-link-${section.id}`}
                    >
                      # {section.category}
                    </a>
                    <span className="text-neutral-800">&bull;</span>
                    <Link 
                      href={`/wiki/${section.id}/`}
                      className="text-violet-accent hover:underline text-[11px]"
                    >
                      Deep Dive Entry
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assets details */}
            <div>
              <h4 className="font-mono text-[10px] tracking-widest text-[#a0a0b0] uppercase mb-4">
                Brand Integration Proposals
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-mono">
                <li>
                  <Link href="/pitch/developers/" className="text-violet-accent hover:underline">
                    &rarr; Developers &amp; APIs
                  </Link>
                </li>
                <li>
                  <Link href="/pitch/productivity/" className="text-violet-accent hover:underline">
                    &rarr; 4:30 AM App Founders
                  </Link>
                </li>
                <li>
                  <Link href="/pitch/scientific-brands/" className="text-violet-accent hover:underline">
                    &rarr; Photonic &amp; Solar Tech
                  </Link>
                </li>
                <li>
                  <Link href="/pitch/domain-investors/" className="text-violet-accent hover:underline">
                    &rarr; Strategic Domain Investors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal or Contact pitch */}
            <div>
              <h4 className="font-mono text-[10px] tracking-widest text-[#a0a0b0] uppercase mb-4">
                Commercial
              </h4>
              <p className="text-xs leading-relaxed font-sans mb-3">
                This domain is currently list-owned by a private collector. All transfers are facilitated securely via verified registrars and partners.
              </p>
              <a 
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=430.me"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-violet-accent hover:underline uppercase tracking-wider"
              >
                Acquire Domain &rarr;
              </a>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono">
            <span>
              &copy; {new Date().getFullYear()} 430.me. Design by{' '}
              <a 
                href="https://feelize.com/start" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-violet-accent transition-colors underline"
              >
                feelize
              </a>
              {' '}&bull; Registered asset in catalog.
            </span>
            <div className="flex gap-6">
              <a href="/robots.txt" className="hover:text-white transition-colors">robots.txt</a>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">sitemap.xml</a>
              <a href="#hero" className="hover:text-white transition-colors">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
