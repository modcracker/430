export interface FactSection {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  items: {
    name: string;
    description: string;
    technicalKey?: string;
    technicalValue?: string;
  }[];
  prose: string;
}

export const factSections: FactSection[] = [
  {
    id: "technology",
    category: "Technology",
    title: "430 in Technology & Engineering",
    subtitle: "Status codes, spectrum limits, and quantum boundaries.",
    shortDesc: "From custom internet protocols to high-frequency radio waves and optical wavelengths, 430 is a fundamental marker in engineering.",
    prose: "In the digital and physical architecture of modern technology, 430 acts as a crucial boundary and communication sentinel. Whether routing millions of global API queries in distributed server architectures, transmitting data across radio propagation waves, or defining the physical lithography limits of high-performance microchips, this number underpins critical parameters of our modern interconnected life.",
    items: [
      {
        name: "HTTP Status Code 430 (Shopify Rate Limits)",
        description: "While not a standard IETF HTTP status code, 430 is utilized by Shopify's enterprise API infrastructure as a specialized warning: 'Request Header Fields Too Large'. It acts as a defense mechanism against server inundation, warning automated scraping scripts and heavy integrations to throttle their traffic.",
        technicalKey: "HTTP Protocol",
        technicalValue: "430 Request Header Fields Too Large"
      },
      {
        name: "430 MHz Amateur Radio Spectrum",
        description: "Operating within the ultra-high frequency (UHF) 70-centimeter band (historically 430-450 MHz), this spectrum is a vital haven for amateur radio operators. Offering exceptional line-of-sight propagation and tropospheric ducting, it is frequently used for meteorological balloons, experimental satellite communication, and local digital repeaters.",
        technicalKey: "Frequency Range",
        technicalValue: "430.000 — 440.000 MHz (UHF)"
      },
      {
        name: "430 nm Violet Wavelength",
        description: "On the electromagnetic spectrum, 430 nanometers represents deep blue-violet light. This precise wavelength is critical in biology, matching the peak light absorption of Chlorophyll A in plants to fuel photosynthesis. It is also used in advanced phototherapy treatments and high-precision laser lithography for silicon wafer printing.",
        technicalKey: "Optics / Spectrum",
        technicalValue: "λ = 430 nm (Violet Light)"
      }
    ]
  },
  {
    id: "time",
    category: "Chronology",
    title: "430 in Time, Habit & Rhythms",
    subtitle: "The twin hours of high productivity and warm transitions.",
    shortDesc: "Exploring both 4:30 AM — the legendary dawn hour of high achievers — and 4:30 PM — the golden twilight of societal transition.",
    prose: "Time is divided by our daily habits and biological rhythms. The coordinate of 4:30 marks two profound transition points on the clock. It represents both the final deep stillness of the early morning before the world wakes and the shifting amber warmth of the late afternoon, where day bridges into evening.",
    items: [
      {
        name: "4:30 AM — The Rising Hour",
        description: "The peak of the 'Miracle Morning' and a cornerstone schedule for leaders, Navy SEALs, monastics, and top executives like Apple CEO Tim Cook. Waking at 4:30 AM grants uninterrupted flow, visual clarity, and mental silence before the digital storm of emails, notifications, and social pressure begins.",
        technicalKey: "Diurnal Phase",
        technicalValue: "04:30 UTC-Local / Astronomical Dawn"
      },
      {
        name: "4:30 PM — The Golden Hour",
        description: "In the natural world, 4:30 PM represents the iconic 'golden hour' for photographers across mid-latitudes during spring and autumn. The low-angle sunlight filters through the atmosphere, scattering blue light and bathing landscapes in rich, long, warm shadows that dramatize architecture and portraiture alike.",
        technicalKey: "Solar Angle",
        technicalValue: "16:30 / Low-Angle Rayleigh Scattering"
      }
    ]
  },
  {
    id: "history",
    category: "Chronicles",
    title: "430 in Classical & Medieval History",
    subtitle: "A year of devastating pestilence, changing dynasties, and philosophical deaths.",
    shortDesc: "The pivotal events of 430 BC during Greece's Golden Age, and the dusk of late antiquity in 430 AD.",
    prose: "History pivots around specific decades. The years 430 BC and 430 AD stand out as monumental milestones in human civilization. One marked the tragic erosion of ancient Athenian democracy under the weight of active biological plague; the other marked the intellectual bridge between classical Roman philosophy and the dark ages of Medieval Europe.",
    items: [
      {
        name: "430 BC — The Plague of Athens",
        description: "During the second year of the Peloponnesian War, a devastating epidemic swept through the crowded city-state of Athens. It killed nearly a quarter of its citizens — including the visionary democratic statesmen Pericles. This catastrophe permanently crippled Athenian military dominance and fundamentally altered the path of classical Greek democracy.",
        technicalKey: "Antiquity Year",
        technicalValue: "430 BCE / Peloponnesian War"
      },
      {
        name: "430 AD — Passing of Saint Augustine",
        description: "As the Germanic Vandals laid siege to the North African city of Hippo Regius, its bishop, Saint Augustine, passed away at the age of 75. His landmark philosophical texts, including 'City of God' and 'Confessions', survived the city's destruction and became the cornerstone of Western theological philosophy for the next millennium.",
        technicalKey: "Late Roman Era",
        technicalValue: "430 CE / Fall of Hippo"
      }
    ]
  },
  {
    id: "science",
    category: "Science & Mathematics",
    title: "430 in Science & Mathematics",
    subtitle: "Thermal thresholds, sphenic structures, and prime factors.",
    shortDesc: "Analyzing the mathematical taxonomy of 430 as a sphenic number, its thermal expressions, and cosmic scales.",
    prose: "Mathematics and physical chemistry reveal the internal structure of numbers. When observed under thermodynamic equations or number theory, 430 presents itself as an elegant compound structure — an intersection of physics formulas, chemical points of reaction, and prime factor compositions.",
    items: [
      {
        name: "The Mathematical Anatomy of 430",
        description: "430 is classified as a sphenic number: a positive integer that is the product of exactly three distinct prime factors (2 × 5 × 43). It is additionally a nontotient number, meaning that under Euler's totient function φ(x), there exists no integer x that outputs exactly 430, denoting its raw mathematical rarity.",
        technicalKey: "Number Theory",
        technicalValue: "Sphenic / 2 × 5 × 43 / Nontotient"
      },
      {
        name: "430 Kelvin (156.85°C / 314.33°F)",
        description: "Under physical science, 430 K represents a significant heat index. It serves as a vital transition point for many polymer materials (such as Nylon and organic thermoplasts) where they cross their glass transition temperatures and become ductile, crucial for additive manufacturing.",
        technicalKey: "Thermodynamics",
        technicalValue: "T = 430 Kelvin (156.85°C)"
      }
    ]
  },
  {
    id: "geography",
    category: "Geography & Earth",
    title: "430 in Modern Geography",
    subtitle: "Arterial concrete, parallel lines, and terrestrial coordinates.",
    shortDesc: "A journey along the global 43.0°N latitude line and major regional transit ways mapped globally.",
    prose: "Lines of latitude and concrete infrastructure define how humanity moves and organizes itself. The number 430 manifests physically as regional lifelines of transit and a precise imaginary circle wrapping around the temperate middle zone of the Earth's northern hemisphere.",
    items: [
      {
        name: "43.0°N Latitude Line",
        description: "This parallel is a major geographic anchor across North America and Europe. It passes through Oregon, southern Wisconsin (just south of Milwaukee), upstate New York (Syracuse), the Pyrenees mountains of France, Italy's Tuscan coast, and the northern peninsula of Japan, marking a zone of intense seasonal agricultural fertility.",
        technicalKey: "Geographic Coordinate",
        technicalValue: "43°00'00\" N"
      },
      {
        name: "U.S. State Route 430",
        description: "Across state infrastructure maps, Route 430 corridors (like Ohio's SR 430 or local bypass loops in tourist regions) act as crucial auxiliary connectors. They weave together historical farming bypasses with modern commercial logistics networks, channeling shipping and daily commutes.",
        technicalKey: "Asphalt Arterial",
        technicalValue: "Highway SR-430"
      }
    ]
  },
  {
    id: "culture",
    category: "Human Culture",
    title: "430 in Culture, Sports & Media",
    subtitle: "Symbolic identifiers, endurance jerseys, and structural marks.",
    shortDesc: "From marathon bibs to pop culture references, 430 carries a unique symbolic value.",
    prose: "Numbers acquire personality when humans paint meaning onto them. Outside textbook graphs and engineering codes, 430 persists in human mythology, serving as an identity tag in sports competitions, a temporal metaphor in film scripts, and a badge of honor for endurance athletes.",
    items: [
      {
        name: "#430 Athletic Legacy",
        description: "In major international marathons and endurance trials, 430 represents a coveted 'milestone' bib grouping. It is also found in amateur and historic motorcycle racing registries, representing privateer teams competing against massive corporate-sponsored rosters.",
        technicalKey: "Sports Iconography",
        technicalValue: "Bib #430 / Endurance Marker"
      },
      {
        name: "Cinematic & Musical Liminality",
        description: "4:30 is repeatedly referenced in songwriting and movies as the peak hour of emotional honesty — a point in the middle of the night where characters are either unable to sleep due to romantic existentialism, or are actively beginning their journey into a new morning.",
        technicalKey: "Arts / Media",
        technicalValue: "The 4:30 Transition"
      }
    ]
  },
  {
    id: "aviation",
    category: "Aviation & Cosmos",
    title: "430 in Aviation & Cosmos",
    subtitle: "Atmospheric limits, minor planets, and supersonic speeds.",
    shortDesc: "From astronomical coordinates of far-out celestial bodies to the aerodynamics of commercial aerospace, 430 defines several space and flight constants.",
    prose: "Human flight and space exploration rely on precise tolerances. The number 430 emerges in our maps of the solar system and in the thermal controls of atmospheric cruisers. Whether it is the orbit of a carbonaceous asteroid sailing in the asteroid belt or the wind velocity parameters of experimental transport containers, this value guides modern aviation science.",
    items: [
      {
        name: "Asteroid 430 Hybris",
        description: "Discovered in 1897 by Auguste Charlois in Nice, France, 430 Hybris is a minor planet orbiting within the outer asteroid belt. With a carbon-rich C-type surface composition and a diameter of approximately 32 kilometers, its orbital period lasts exactly 4.30 Julian years.",
        technicalKey: "Asteroid Index",
        technicalValue: "430 Hybris (A901 AA)"
      },
      {
        name: "Mach 4.30 High-Hypersonic Limits",
        description: "In hypersonic flight research, Mach 4.30 serves as a critical aerodynamic transit phase where frictional atmospheric air heating begins to exceed traditional titanium alloy tolerances, requiring advanced active cooling skin mechanisms.",
        technicalKey: "Aerodynamics",
        technicalValue: "V = Mach 4.30 (~5267 km/h)"
      }
    ]
  },
  {
    id: "automotive",
    category: "Automotive & Heavy Industry",
    title: "430 in Automotive & Heavy Industry",
    subtitle: "Performance blocks, legacy chassis, and high-torque machinery.",
    shortDesc: "Representing legendary cylinder displacement classes, heavy machinery torque ratings, and chassis configurations.",
    prose: "Great engines are designed around volumetric efficiency and force output. In automotive history, the designation 430 is synonymous with high-displacement V8 powerplants and rugged vehicle platforms built to handle intense payloads. It stands as a badge of classic industrial power and heavy-duty engineering.",
    items: [
      {
        name: "The Lincoln 430 MEL V8 Engine",
        description: "Introduced in 1958, the 430 MEL (Mercury-Edsel-Lincoln) was a massive 7.0-liter iron-block V8 designed for American luxury cruisers. Delivering up to 400 horsepower, it became legendary for propelling heavy land yachts with effortless low-end torque.",
        technicalKey: "Engine displacement",
        technicalValue: "430 Cubic Inches (7.0L)"
      },
      {
        name: "Volvo FH16 430 Commercial Heavy Lifter",
        description: "In heavy commercial transport, the Volvo 430 series represented a powerhouse of logistics. Powered by high-efficiency turbo-intercooled engines putting out 430 metric horsepower, these rigs shaped overland supply chains in the late 20th century.",
        technicalKey: "Power output",
        technicalValue: "430 HP / Turbo-Diesel"
      }
    ]
  },
  {
    id: "numerology",
    category: "Numerology & Philosophy",
    title: "430 in Numerology & Philosophy",
    subtitle: "Stabilizing vectors, ancient alphabets, and vibrational alignments.",
    shortDesc: "Analyzing the spiritual, symbolic, and metaphysical alignments of 430 across cross-cultural number systems.",
    prose: "Throughout history, humans have looked at numbers not just as cold calculations, but as energetic coordinates. In metaphysical thought and modern numerology, 430 is understood as a stabilizing anchor—fusing the structured discipline of 4, the limitless potential of 3, and the pure amplifying power of 0.",
    items: [
      {
        name: "The 430 Angel Number (Foundations & Growth)",
        description: "In esoteric circles, seeing 430 is regarded as a sign of spiritual stabilization. It urges individuals to align practical, real-world foundations (4) with creative inner communication (3) to attract infinite abundance and universal flow (0).",
        technicalKey: "Esoteric frequency",
        technicalValue: "Vibrational Key 430"
      },
      {
        name: "Hebrew Gematria Code 430 (Shekel & Soul)",
        description: "In traditional Kabbalistic gematria, 430 is equivalent to the Hebrew words 'Nefesh' (acting soul) and 'Shekel' (classical unit of weighted exchange). This coordinates the number as a bridge between spiritual vitality and material stability.",
        technicalKey: "Ancient gematria",
        technicalValue: "Value 430 = נפש (Nefesh)"
      }
    ]
  },
  {
    id: "computing",
    category: "Computing & Systems Design",
    title: "430 in Computing & Systems Design",
    subtitle: "Port configurations, encoding limits, and microarchitecture.",
    shortDesc: "Investigating 430 across standard network ports, text encodings, and motherboard architectures.",
    prose: "Modern microprocessors and internet routing rules rely on dense system configuration files. Across key software repositories, the integer 430 designates critical port protocols, interface parameters, and layout limits designed to keep software packages operating in harmony.",
    items: [
      {
        name: "Port 430 (UTMI Protocol)",
        description: "In networking registers, UDP/TCP port 430 is historically designated for the Unified Transfer Model Interface (UTMI). This governs how local monitoring processes transmit diagnostics in federated server closets.",
        technicalKey: "Networking Port",
        technicalValue: "Port 430 TCP/UDP"
      },
      {
        name: "EBCDIC Code Page 420/430 (Arabic Compatibility)",
        description: "In computing history, system page 430 was an extended mainframe character map helping early IBM terminals process Arabic glyphs and technical symbols with complete binary compatibility.",
        technicalKey: "Text Encoding",
        technicalValue: "Code Page 430"
      }
    ]
  },
  {
    id: "nature",
    category: "Nature & Ecology",
    title: "430 in Nature & Ecological Thresholds",
    subtitle: "Sub-oceanic zones, alpine limits, and species migration.",
    shortDesc: "Understanding how 430 meters represents deep biological pressure curves, altitude caps, and botanical biology.",
    prose: "Geochemical ecosystems display clean mathematical limits when adjusting for atmospheric pressure or ocean depth. At 430 units of scale, biology enters new phases—from lightless oceanic trenches hosting deep-water creatures to mountain elevations where specialized conifers adapt to harsh cold climates.",
    items: [
      {
        name: "430-Meter Demersal Marine Zone",
        description: "In marine oceanography, 430 meters down marks the transition from the twilight mesopelagic zone to the lightless boundaries of the bathypelagic zone. Species found at this depth have adapted specialized bioluminescent organs and hyper-sensitive baroreception systems to withstand over 43 atmospheres of water pressure.",
        technicalKey: "Ocean Depth",
        technicalValue: "D = 430 m / 43 atm pressure"
      },
      {
        name: "Eucalyptus regnans (430-Year Lifespans)",
        description: "The Eucalyptus regnans, or Mountain Ash, reaches its biological maturity and peak carbon filtration capacity at approximately 430 years. Standing as the tallest flowering plant on Earth, these giants form the ancient canopy systems of southeast Australia.",
        technicalKey: "Dendrochronology",
        technicalValue: "T = 430 Years (Maturity)"
      }
    ]
  },
  {
    id: "military",
    category: "Military & Naval Chronicles",
    title: "430 in Military & Naval Chronicles",
    subtitle: "Naval combatants, tactical battalions, and aerial groups.",
    shortDesc: "Tracking military divisions, naval asset classifications, and defense operations bearing the number 430.",
    prose: "Sovereign defense forces utilize rigorous numeric indexing to organize fleet assets, fighter squadrons, and operations maps. Number 430 frequently represents specialized military units, decorated escort vessels, and tactical aviation divisions that served with distinction during historical conflicts.",
    items: [
      {
        name: "USS Cobb (SS-430)",
        description: "Planned as a Balao-class submarine during World War II, the hull designated SS-430 (USS Cobb) was a specialized fleet attack submarine designed for long-range patrols in deep waters. Her assembly was part of the immense late-war industrial expansion before peace was concluded.",
        technicalKey: "Naval Architecture",
        technicalValue: "USS Cobb (SS-430)"
      },
      {
        name: "The 430th Expeditionary Fighter Squadron",
        description: "Under aviation history, the 430th Fighter Squadron (famed as the 'Vampire Squadron' flying P-38 Lightnings in WWII) achieved extensive aerial defense records. They were deployed across Europe and later re-activated to maintain tactical surveillance lines during critical cold war operations.",
        technicalKey: "Air Force Registry",
        technicalValue: "430th Tactical Fighter Sq."
      }
    ]
  }
];

export const domainStats = {
  domain: "430.me",
  price: "Inquiries Welcome",
  email: "hello@example.com",
  registrar: "Namecheap",
  registrarLink: "https://www.namecheap.com",
  length: "6 Characters (including dot)",
  extension: ".me (Perfect for personal hubs, microsites, APIs, and portfolios)"
};
