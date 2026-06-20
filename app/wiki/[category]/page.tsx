import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Globe, Landmark, Clock, Cpu, Award, Compass, HelpCircle, Plane, Car, Sparkles, Database, Leaf, Shield } from 'lucide-react';
import { factSections, FactSection } from '@/lib/content';
import SpectrumBar from '@/components/SpectrumBar';

// Static params generation for standalone / static deployment compatibility
export async function generateStaticParams() {
  return factSections.map((section) => ({
    category: section.id,
  }));
}

// Generate dynamic Metadata for each wiki page
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const section = factSections.find((s) => s.id === category);
  
  if (!section) {
    return {
      title: '430 Encyclopedia Entry Not Found | 430.me',
    };
  }

  return {
    title: `Exploring 430: ${section.title} | 430.me`,
    description: `${section.shortDesc} Discover the historical, mathematical, physical, and technological dimensions of 430.`,
    alternates: {
      canonical: `/wiki/${category}`,
    },
    openGraph: {
      title: `Exploring 430: ${section.title} | 430.me`,
      description: `${section.shortDesc} Part of the interactive cultural and reference portal 430.me.`,
      url: `https://430.me/wiki/${category}`,
      type: 'article',
    },
  };
}

// Map key category icons
function getCategoryIcon(id: string) {
  switch (id) {
    case 'technology': return <Cpu className="w-6 h-6 text-violet-accent" />;
    case 'time': return <Clock className="w-6 h-6 text-violet-accent" />;
    case 'history': return <Landmark className="w-6 h-6 text-violet-accent" />;
    case 'science': return <HelpCircle className="w-6 h-6 text-violet-accent" />;
    case 'geography': return <Compass className="w-6 h-6 text-violet-accent" />;
    case 'culture': return <Award className="w-6 h-6 text-violet-accent" />;
    case 'aviation': return <Plane className="w-6 h-6 text-violet-accent" />;
    case 'automotive': return <Car className="w-6 h-6 text-violet-accent" />;
    case 'numerology': return <Sparkles className="w-6 h-6 text-violet-accent" />;
    case 'computing': return <Database className="w-6 h-6 text-violet-accent" />;
    case 'nature': return <Leaf className="w-6 h-6 text-violet-accent" />;
    case 'military': return <Shield className="w-6 h-6 text-violet-accent" />;
    default: return <Globe className="w-6 h-6 text-violet-accent" />;
  }
}

export default async function WikiCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const section = factSections.find((s) => s.id === category);

  if (!section) {
    return (
      <main className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-display font-medium tracking-tight mb-4">404: Entry Not Found</h1>
        <p className="text-[#8a8a9a] text-sm mb-6 max-w-sm text-center">
          The mathematical, cultural, or physical segment regarding &ldquo;430&rdquo; you are searching for is outside this scope.
        </p>
        <Link href="/" className="font-mono text-xs text-violet-accent hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return to Database Hub
        </Link>
      </main>
    );
  }

  // Crosslinked categories excluding the current one to allow heavy semantic traversal / link juice
  const horizontalCrosslinks = factSections.filter((s) => s.id !== category);

  // Dynamic breadcrumbs structure schema JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://430.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Wiki",
        "item": `https://430.me/wiki/${category}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white selection:bg-violet-accent selection:text-white">
      {/* Insert Breadcrumbs Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Top sticky editorial bar */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 text-xs font-mono text-[#8a8a9a] hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 text-violet-accent group-hover:-translate-x-0.5 transition-transform" />
            Back to Registry
          </Link>
          <span className="font-mono text-[10px] tracking-widest text-[#5a5a6a] uppercase hidden sm:inline">
            SYSTEM INDEX &bull; WIKI PAGE
          </span>
          <a 
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=430.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono font-medium text-violet-accent hover:underline uppercase tracking-wide bg-violet-accent/5 py-1.5 px-3 rounded-sm border border-violet-accent/10"
          >
            Acquire 430.me
          </a>
        </div>
      </nav>

      {/* Deep-dive Content Body */}
      <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header Block */}
        <header className="border-b border-white/5 pb-10 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
              {getCategoryIcon(section.id)}
            </div>
            <span className="font-mono text-xs text-violet-accent tracking-[0.2em] uppercase font-bold">
              Database Entry: Category {section.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl text-white font-medium tracking-tight font-display mb-4">
            {section.title}
          </h1>

          <p className="text-lg text-violet-accent/90 font-mono tracking-wide mb-6">
            {section.subtitle}
          </p>

          <p className="text-sm text-[#8a8a9a] leading-relaxed max-w-3xl">
            {section.shortDesc}
          </p>
        </header>

        {/* Narrative prose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="prose prose-invert max-w-none text-sm leading-relaxed text-[#a0a0b0] space-y-6">
              <p className="text-[#c0c0d0]">
                {section.prose}
              </p>
              
              <p>
                In general taxonomy, numbers represent critical metadata points that coordinate spatial layout, computer systems protocols, and historical frameworks. Section {section.category} serves as a central registry mapping of how the number 430 stands as a threshold value.
              </p>

              <div className="p-6 border border-white/5 bg-neutral-950/40 rounded-sm italic mt-8 text-xs text-[#a0a0b0]">
                &ldquo;Understanding the deep interconnectivity of physical constants and historical milestones provides insights into underlying systemic patterns of scientific and cultural progress.&rdquo;
              </div>
            </div>

            {/* In-depth breakdown details */}
            <div className="mt-16 space-y-12">
              <h2 className="text-xl text-white font-medium tracking-tight font-display border-b border-white/5 pb-3">
                Key Recorded Coordinates
              </h2>

              {section.items.map((item, idx) => (
                <div key={idx} className="group p-6 border border-white/5 bg-white/[0.01] hover:border-violet-accent/20 transition-all rounded-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                    <h3 className="text-lg text-white font-medium group-hover:text-violet-accent transition-colors">
                      {item.name}
                    </h3>
                    {item.technicalKey && (
                      <span className="font-mono text-[9px] tracking-widest text-[#5a5a6a] bg-white/5 px-2 py-1 rounded-sm">
                        {item.technicalKey}: <span className="text-[#9090a0]">{item.technicalValue}</span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#8a8a9a] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick sidebar metadata */}
          <div className="lg:col-span-4">
            <aside className="sticky top-24 space-y-8">
              <div className="border border-white/5 bg-neutral-950/60 p-6 rounded-sm">
                <h3 className="font-mono text-[10px] tracking-widest text-violet-accent uppercase mb-4">
                  Registry Metadata
                </h3>
                <dl className="space-y-4 text-xs font-mono">
                  <div>
                    <dt className="text-[#5a5a6a]">Index Key</dt>
                    <dd className="text-white mt-0.5">430::{section.id}</dd>
                  </div>
                  <div>
                    <dt className="text-[#5a5a6a]">Authority Class</dt>
                    <dd className="text-white mt-0.5">Physical / Historical / Cultural</dd>
                  </div>
                  <div>
                    <dt className="text-[#5a5a6a]">Link Value</dt>
                    <dd className="text-white mt-0.5">Active Crawl Element</dd>
                  </div>
                  <div>
                    <dt className="text-[#5a5a6a]">Context State</dt>
                    <dd className="text-violet-accent mt-0.5">Verified Standard Reference</dd>
                  </div>
                </dl>
              </div>

              <div className="p-4 border border-violet-accent/10 bg-violet-accent/5 rounded-sm">
                <h4 className="text-white text-xs font-medium mb-2">Own the Hub</h4>
                <p className="text-[11px] text-[#8a8a9a] leading-relaxed mb-4">
                  The domain <strong>430.me</strong> serves as the parent directory for this database. Secure the asset today on GoDaddy.
                </p>
                <a 
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=430.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-[10px] font-mono leading-none bg-violet-accent hover:bg-violet-accent/90 text-white py-2 px-3 rounded-sm transition-colors"
                >
                  Acquire on GoDaddy
                </a>
              </div>
            </aside>
          </div>
        </div>

        {section.id === 'technology' && (
          <div className="mt-16 border-t border-white/5 pt-12">
            <h3 className="text-base text-white font-medium mb-4 text-center">Interactive Spectral Absorption Graph</h3>
            <SpectrumBar />
          </div>
        )}

        {/* SEO Crosslink Traverse Hub Grid */}
        <section className="mt-24 border-t border-white/5 pt-16">
          <h2 className="text-2xl text-white font-medium tracking-tight font-display mb-2 text-center md:text-left">
            Traverse 430 Interconnected Modules
          </h2>
          <p className="text-xs text-[#5a5a6a] font-mono mb-8 text-center md:text-left">
            Semantically bridged references. Navigate other core structural dimensions of the 430 ecosystem:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {horizontalCrosslinks.map((cross) => (
              <Link 
                key={cross.id}
                href={`/wiki/${cross.id}`}
                className="group p-5 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-violet-accent/40 transition-all rounded-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[9px] text-[#5a5a6a] uppercase block mb-1">
                    {cross.category}
                  </span>
                  <h4 className="text-xs text-white font-medium group-hover:text-violet-accent transition-colors line-clamp-1">
                    {cross.title}
                  </h4>
                  <p className="text-[10px] text-[#7a7a8a] leading-snug mt-2 line-clamp-2">
                    {cross.shortDesc}
                  </p>
                </div>
                <span className="font-mono text-[9px] text-violet-accent/70 group-hover:text-violet-accent mt-4 inline-flex items-center gap-1">
                  Read entry &rarr;
                </span>
              </Link>
            ))}
            
            {/* Direct Home Module link */}
            <Link 
              href="/"
              className="p-5 border border-white/10 bg-violet-accent/5 hover:bg-violet-accent/10 hover:border-violet-accent/30 transition-all rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[9px] text-violet-accent uppercase block mb-1">
                  Repository
                </span>
                <h4 className="text-xs text-white font-medium">
                  Main Index
                </h4>
                <p className="text-[10px] text-[#8a8a9a] leading-snug mt-2">
                  Return to the primary interactive micro-encyclopedia directory.
                </p>
              </div>
              <span className="font-mono text-[9px] hover:underline text-white mt-4 inline-flex items-center gap-1">
                Return home &rarr;
              </span>
            </Link>
          </div>
        </section>

      </article>

      {/* Elegant Footer with Feelize credentials */}
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
            {' '}&bull; Dynamic SEO Wiki Registry.
          </span>
          <div className="flex gap-6 text-[10px]">
            <Link href="/" className="hover:text-white transition-colors">Main Hub</Link>
            <a href="/robots.txt" className="hover:text-white transition-colors">robots.txt</a>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">sitemap.xml</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
