import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle, Award, Target, Landmark, HelpCircle } from 'lucide-react';
import { pitchAudiences, PitchAudience } from '@/lib/pitches';
import SpectrumBar from '@/components/SpectrumBar';

// Required for static generation
export async function generateStaticParams() {
  return pitchAudiences.map((pitch) => ({
    audience: pitch.id,
  }));
}

// Metadata Generator
export async function generateMetadata({ params }: { params: Promise<{ audience: string }> }): Promise<Metadata> {
  const { audience } = await params;
  const pitch = pitchAudiences.find((p) => p.id === audience);

  if (!pitch) {
    return {
      title: 'Premium Brand Acquisition | 430.me',
    };
  }

  return {
    title: `${pitch.title} | Acquire 430.me`,
    description: `A targeted proposal blueprint for ${pitch.target}. ${pitch.headline}. Clean transfer brokered via GoDaddy.`,
    alternates: {
      canonical: `/pitch/${audience}`,
    },
    openGraph: {
      title: `${pitch.title} | Acquire 430.me`,
      description: `Targeted positioning profile outlining value-metrics for buying the premium asset 430.me.`,
      url: `https://430.me/pitch/${audience}`,
      type: 'article',
    },
  };
}

export default async function PitchAudiencePage({ params }: { params: Promise<{ audience: string }> }) {
  const { audience } = await params;
  const pitch = pitchAudiences.find((p) => p.id === audience);

  if (!pitch) {
    return (
      <main className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-display font-medium tracking-tight mb-4">Pitch Section Not Found</h1>
        <p className="text-[#8a8a9a] text-xs mb-6 max-w-sm text-center">
          The requested positioning profile does not exist in the 430.me acquisition system index.
        </p>
        <Link href="/" className="font-mono text-xs text-violet-accent hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return to Main Hub
        </Link>
      </main>
    );
  }

  // Cross-link other pitch targets to pass semantic SEO value/juice
  const otherPitches = pitchAudiences.filter((p) => p.id !== audience);

  // Schema markup promoting high-yield search relevance for dynamic commercial products (the domain name)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "430.me Premium 5-Character Domain Name",
    "image": "https://picsum.photos/seed/430/1200/630",
    "description": `Premium 5-character digital brand asset 430.me positioned explicitly for ${pitch.target}. ${pitch.headline}.`,
    "offers": {
      "@type": "Offer",
      "url": "https://www.godaddy.com/domainsearch/find?domainToCheck=430.me",
      "price": "Inquiries Welcome",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Person",
        "name": "Private Domain Collector"
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white selection:bg-violet-accent selection:text-white">
      {/* Structural Schema Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Editorial Sticky Navigation Row */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-xs font-mono text-[#8a8a9a] hover:text-white transition-colors group">
            <ArrowLeft className="w-3.5 h-3.5 text-violet-accent group-hover:-translate-x-0.5 transition-transform" />
            Back to Encyclopedia
          </Link>
          <span className="font-mono text-[9px] tracking-widest text-violet-accent uppercase">
            Proposal Blueprint: {pitch.id.toUpperCase().replace('-', ' ')}
          </span>
          <a 
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=430.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono leading-none bg-violet-accent hover:bg-violet-accent/90 text-white py-2 px-3 rounded-sm transition-colors border border-violet-accent/20"
          >
            Buy 430.me
          </a>
        </div>
      </nav>

      {/* Hero Visual Blueprint Pitch Section */}
      <section className="relative py-20 md:py-28 px-6 border-b border-white/5 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <span className="font-mono text-[10px] tracking-[0.25em] text-violet-accent uppercase bg-violet-accent/5 border border-violet-accent/10 py-1.5 px-3 rounded-full inline-block mb-6 font-semibold">
            Target Audience: {pitch.target}
          </span>
          
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-display leading-[1.1]">
            {pitch.headline} <span className="text-violet-accent">430.me</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm text-[#8a8a9a] leading-relaxed mt-6">
            Explore the calculated brand benefits and operational advantages of acquiring this rare 5-character digital asset for your organization.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=430.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-accent hover:bg-violet-accent/90 text-white font-sans text-xs font-medium tracking-wide px-7 py-3 rounded-sm transition-all"
            >
              Acquire via GoDaddy Escrow 
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-sans text-xs font-medium tracking-wide px-7 py-3 rounded-sm transition-all"
            >
              Read Technical Wiki
            </Link>
          </div>
        </div>
      </section>

      {/* Main Pitch Details Editorial Layout */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Pitch Info Pitch prose left */}
          <div className="lg:col-span-7">
            <h2 className="font-mono text-[10px] tracking-widest text-[#5a5a6a] uppercase mb-4">
              Strategic Rationale
            </h2>
            <p className="text-lg text-white leading-relaxed font-sans mb-8">
              {pitch.description}
            </p>

            {/* Accent Quote block */}
            <div className="border-l-2 border-violet-accent pl-6 py-2 my-10 italic text-sm text-[#a0a0b0] bg-violet-accent/[0.02]">
              &ldquo;{pitch.accentQuote}&rdquo;
            </div>

            {/* Custom List of intended Use Cases */}
            <h3 className="text-lg text-white font-medium font-display mb-6">
              Potential Domain Deployments
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pitch.useCases.map((useCase, idx) => (
                <li key={idx} className="flex gap-2.5 p-4 border border-white/5 bg-neutral-950/20 rounded-sm">
                  <CheckCircle className="w-4 h-4 text-violet-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-[#8a8a9a] leading-relaxed">
                    {useCase}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value Props & Domain Statistics right sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 border border-white/5 bg-white/[0.01] rounded-sm">
              <h3 className="font-mono text-[10px] tracking-widest text-violet-accent uppercase mb-6">
                Value Proposition Matrix
              </h3>
              <div className="space-y-6">
                {pitch.valueProps.map((prop, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-xs text-white font-semibold flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#5a5a6a]">0{idx+1} /</span>
                      {prop.title}
                    </h4>
                    <p className="text-xs text-[#7a7a8a] leading-relaxed pl-6">
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* General digital asset facts card */}
            <div className="p-6 border border-[#7C3AED]/20 bg-gradient-to-tr from-neutral-950 to-[#7C3AED]/5 rounded-sm">
              <h4 className="text-sm text-white font-medium mb-3">Asset Technical Specs</h4>
              <dl className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-[#5a5a6a]">Domain Name</dt>
                  <dd className="text-white font-semibold">430.me</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-[#5a5a6a]">Length</dt>
                  <dd className="text-white">5 Characters</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-[#5a5a6a]">Extension type</dt>
                  <dd className="text-white">Premium TLD</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-[#5a5a6a]">Brokered Via</dt>
                  <dd className="text-violet-accent underline">GoDaddy Escrow</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#5a5a6a]">Transfer Speed</dt>
                  <dd className="text-white">Under 2 hours</dd>
                </div>
              </dl>
              <a 
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=430.me"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-semibold bg-violet-accent text-white hover:bg-violet-accent/95 py-2.5 px-4 rounded-sm mt-6 transition-all"
              >
                Buy Domain Now
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Visible spectrum integration for scientific audiences */}
      {pitch.id === 'scientific-brands' && (
        <section className="bg-neutral-950/40 border-t border-b border-white/5 py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-mono text-center text-white mb-2 uppercase tracking-widest">
              Physical Constant Alignment Index
            </h3>
            <SpectrumBar />
          </div>
        </section>
      )}

      {/* Traverse other positioning profiles to drive deep crawler architecture */}
      <section className="border-t border-white/5 py-20 md:py-28 px-6 bg-neutral-950/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl text-white font-medium tracking-tight font-display mb-2 text-center md:text-left">
            Alternative Positioning Profiles
          </h2>
          <p className="text-xs text-[#5a5a6a] font-mono mb-8 text-center md:text-left">
            Select an audience category to observe specific custom brand proposals:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherPitches.map((other) => (
              <Link
                key={other.id}
                href={`/pitch/${other.id}`}
                className="group p-5 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-violet-accent/40 transition-all rounded-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[9px] text-[#5a5a6a] uppercase block mb-1">
                    {other.target}
                  </span>
                  <h4 className="text-xs text-white font-medium group-hover:text-violet-accent transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-[10px] text-[#7a7a8a] leading-relaxed mt-2 line-clamp-3">
                    {other.description}
                  </p>
                </div>
                <span className="font-mono text-[9px] text-violet-accent/75 group-hover:text-violet-accent mt-6 block">
                  View position proposal &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with feelize start link */}
      <footer className="border-t border-white/5 bg-neutral-950 py-12 text-[#5a5a6a]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
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
            {' '}&bull; Strategic Domain Pitch Deck.
          </span>
          <div className="flex gap-6 text-[10px]">
            <Link href="/" className="hover:text-white transition-colors">All Index Facts</Link>
            <a href="/robots.txt" className="hover:text-white transition-colors">robots.txt</a>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">sitemap.xml</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
