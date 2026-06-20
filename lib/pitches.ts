export interface PitchAudience {
  id: string;
  target: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  valueProps: {
    title: string;
    description: string;
  }[];
  useCases: string[];
  ctaText: string;
  accentQuote: string;
}

export const pitchAudiences: PitchAudience[] = [
  {
    id: "developers",
    target: "API & Software Engineering Teams",
    title: "430.me for Developers & APIs",
    subtitle: "Built for sub-millisecond endpoints, rate-limit logs, and sleek developer consoles.",
    headline: "The Ultimate Ultra-Short Developer Endpoint or Technical Interface",
    description: "In the developer ecosystem where every byte matters, 430.me offers a vanishingly rare, 5-character domain that developers will instantly key into their command lines. Perfect for custom URL shorteners, API documentation hubs, telemetry logging gateways, or a modern proxy endpoint.",
    valueProps: [
      {
        title: "Subsecond Memorability",
        description: "Only 5 characters total (including the dot). Extremely rapid to type in terminals (`curl api.430.me`) and minimizes bytes in packet headers."
      },
      {
        title: "Built-in Tech Context",
        description: "Direct resonance with HTTP Status Code 430 (Shopify Rate limits) and 430 MHz RF channels, establishing instant technical authority."
      },
      {
        title: "Secure Domain Integrity",
        description: "The .me extension is universally trusted, recognized by major registries, and fully compatible with state-of-the-art TLS/SSL and DNS configurations."
      }
    ],
    useCases: [
      "Custom REST/GraphQL API root (e.g. `api.430.me`)",
      "Developer documentation portals & technical wikis",
      "Log monitoring, ping, and status dashboard services",
      "Shortlink generator for multi-tenant SaaS environments"
    ],
    ctaText: "Secure 430.me for your Dev Stack",
    accentQuote: "A short, system-neutral address in code configurations signals professional engineering precision and instant microservice reliability."
  },
  {
    id: "productivity",
    target: "Habit Hackers, Biohackers & Founders",
    title: "430.me for the 4:30 AM Community",
    subtitle: "A digital hub for early risers, peak performers, and mindfulness builders.",
    headline: "Establish the Supreme Hub for Morning Achievement, Calendars & Focus Tools",
    description: "4:30 AM is the ultimate hour of uninterrupted flow, championed by Navy SEALs, monastics, and Silicon Valley's elite who wake before dawn. 430.me is the perfect brand anchor for daily journals, habit tracking suites, sunrise applications, sleep metrics, or time-blocking task runners.",
    valueProps: [
      {
        title: "Iconic Habit Brand",
        description: "Direct alignment with the 'Miracle Morning' lifestyle category. Wakes up your brand presence with clean, unforgettable numbers."
      },
      {
        title: "Personal / Portfolio Focus",
        description: "The '.me' domain extension naturally frames individual empowerment, personal dashboards, and tailored tracking spaces."
      },
      {
        title: "Product Launch Catalyst",
        description: "Instantly scalable from a single landing page to a global mobile app backend, commanding organic premium placement."
      }
    ],
    useCases: [
      "High-performance circadian and sleep rhythm trackers",
      "Morning mindfulness or ambient audio synthesizer startups",
      "Time block planners and collaborative team calendar boards",
      "Biometric and sleep-health wearable companion websites"
    ],
    ctaText: "Secure 430.me for your Life Brand",
    accentQuote: "The hour of 4:30 AM represents the boundary between systemic rest and relentless execution. Own the digital command center for this movement."
  },
  {
    id: "scientific-brands",
    target: "Photonic, Optical & Laser Startups",
    title: "430.me for Optical & Laser Physics",
    subtitle: "Calibrated to the 430 nm violet absorption limit driving global photosynthesis.",
    headline: "A Premium Scientific Marker Perfect for Spectral Tech & Advanced Research",
    description: "430 nm represents true violet on the electromagnetic spectrum—the optical epicenter for Chlorophyll A light-harvesting complex in plants, advanced UV phototherapy, and microscopic lithography. It offers optical engineers, labs, and modern laser manufacturers a distinct, brand-aligned portal.",
    valueProps: [
      {
        title: "Spectral Authenticity",
        description: "Direct scientific alignment with 430 nm. Establishes instant peer-reviewed authority for specialized laboratories and equipment suppliers."
      },
      {
        title: "Clean Modern Optics Branding",
        description: "Extremely rare numeric domain that stands out in medical-tech and agricultural-industry catalogs."
      },
      {
        title: "Photosynthetic Tech Alignment",
        description: "Ideal for agriculture startups, smart LED grow systems, and climate technology organizations."
      }
    ],
    useCases: [
      "Deep-tech photonics, laser, and spectrum research institutes",
      "Agricultural LED lighting catalogs and smart farming apps",
      "Medical optical therapy devices and diagnostic systems",
      "UV laboratory supplies and advanced lithography databases"
    ],
    ctaText: "Acquire 430.me for Spectrophotometry Tech",
    accentQuote: "Chlorophyll A molecules peak precisely at 430 nm to absorb raw solar force. Own the ultimate digital wavelength for green energy, optics, and light tech."
  },
  {
    id: "domain-investors",
    target: "Domain Investors & Digital Asset Flippers",
    title: "430.me for Strategic Brand Investors",
    subtitle: "A highly liquid 5-character numeric domain targeting multiple hot verticals.",
    headline: "A High-Value, Multi-Industry Liquid Digital Asset in an Era of Scarce Domains",
    description: "Numeric domains and liquid short-string assets are continuously rising in valuation due to the finite supply of premium internet real estate. 430.me intersects high-value niches across SaaS rate-limiting APIs, early-morning routine trackers, solar spectrum equipment, and geography, presenting immense exit collateral.",
    valueProps: [
      {
        title: "Ultra-Premium 5-Character Value",
        description: "Only 5 letters long, incredibly simple to input, pronounce, and type. No hyphens, numbers-only prefixes, or awkward phonetics."
      },
      {
        title: "Multiple High-Value Exit Routes",
        description: "Resell directly to deep-tech software platforms, morning routines startups, optical manufacturers, or geographic/travel brands."
      },
      {
        title: "Rapid Domain Liquidity",
        description: "The .me extension has high global transfer speed. High-quality generic properties in key niches boast steady visual branding potential."
      }
    ],
    useCases: [
      "Custom branded redirect shortener to inflate premium asset portfolios",
      "Strategic digital property for corporate brand defensiveness",
      "High-liquidity investment targeting tech or athletic buyers",
      "Understated custom portfolio and personal landing page hosting"
    ],
    ctaText: "Buy 430.me on GoDaddy Today",
    accentQuote: "Short, premium numeric domains with organic cross-category search queries are finite digital real estate. Secure ownership before the window closes."
  }
];
