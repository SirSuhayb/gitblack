// gitBlack - Expanded Commits Database
// Includes original Week 1 + new categories: Finance, Data Viz, Animation, VoIP, Crypto

export interface Inventor {
  name: string;
  birth: string;
  death?: string;
  birthplace: string;
  profession: string;
  photoUrl?: string;
  photoCredit?: string;
}

export interface Patent {
  number?: string;
  title: string;
  filed?: string;
  granted?: string;
  classification?: string;
}

export interface Fork {
  name: string;
  acquiredBy?: string;
  acquisitionAmount?: string;
  year?: number;
}

export interface ConnectionReasons {
  [key: string]: string;
}

export interface ConnectionTriggers {
  keywords: string[];
  professions: string[];
  industries: string[];
  tools: string[];
  locations: string[];
  connectionReasons: ConnectionReasons;
}

export interface Commit {
  day: number;
  inventor: Inventor;
  patent: Patent;
  problem: string;
  implementation: string[];
  quote?: {
    text: string;
    source: string;
    date?: string;
  };
  stats: {
    citations?: number;
    marketSize?: string;
    forks?: number;
  };
  descendants: Fork[];
  tension?: string;
  connectionTriggers: ConnectionTriggers;
  sources: string[];
}

export const commits: Commit[] = [
  // ============================================
  // DAY 1: W.E.B. DU BOIS - THE FOUNDATION
  // ============================================
  
  // DAY 1: W.E.B. Du Bois - Data Visualization / Design
  {
    day: 1,
    inventor: {
      name: "W.E.B. Du Bois",
      birth: "February 23, 1868",
      death: "August 27, 1963",
      birthplace: "Great Barrington, Massachusetts",
      profession: "Sociologist, Designer, Data Scientist, Activist",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg/1280px-W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg",
      photoCredit: "Photo: James E. Purdy, 1907 — Wikimedia Commons ↗",
    },
    patent: {
      title: "The Exhibit of American Negroes — 63 Hand-Drawn Data Visualizations",
      granted: "April 15, 1900",
    },
    problem: "No visual language existed to communicate the humanity, progress, and systemic oppression of Black Americans to a global audience. Statistics were dry. Racist caricatures dominated popular imagery. The truth needed a form.",
    implementation: [
      "63 hand-drawn infographics created in 4 months with Atlanta University students",
      "Invented the 'Du Bois Spiral' — wrapped bar charts for disproportionate data",
      "Bold geometric shapes 20 years before Bauhaus modernism",
      "Color palette (black, red, green, gold) predating Pan-African flag",
      "Comparative visualizations forcing European audiences to see scale",
      "Two series: 'The Georgia Negro' (32 charts) + national statistics (31 charts)",
    ],
    quote: {
      text: "I thought I might put my findings into plans, charts, and figures, so one might see what we were trying to accomplish.",
      source: "W.E.B. Du Bois, Autobiography",
    },
    stats: {
      citations: 1000,
      marketSize: "$3.5B (data visualization software, 2024)",
    },
    descendants: [
      { name: "Tableau" },
      { name: "D3.js" },
      { name: "Power BI" },
      { name: "Observable" },
      { name: "Modern infographics" },
      { name: "Data journalism" },
    ],
    tension: "The white American press completely ignored the exhibition. The charts were stored at Library of Congress and largely forgotten until 2018 when they were republished. Du Bois wanted them back to teach with but was denied.",
    connectionTriggers: {
      keywords: [
        "data", "visualization", "dataviz", "infographic", "chart", "graph",
        "dashboard", "analytics", "metrics", "kpi",
        "tableau", "d3", "powerbi", "observable", "plotly",
        "design", "visual", "graphics", "information design",
        "presentation", "powerpoint", "slides", "deck",
        "sociology", "research", "statistics", "census"
      ],
      professions: [
        "data scientist", "data analyst", "analyst",
        "designer", "graphic designer", "information designer",
        "product designer", "ux designer", "ui designer",
        "researcher", "sociologist", "economist",
        "journalist", "data journalist",
        "presentation designer", "visual designer",
        "frontend", "developer"
      ],
      industries: [
        "data", "analytics", "business intelligence",
        "design", "creative", "agency",
        "media", "journalism", "publishing",
        "research", "academic", "university",
        "consulting", "strategy"
      ],
      tools: [
        "tableau", "d3", "d3.js", "powerbi", "power bi",
        "observable", "plotly", "matplotlib", "seaborn",
        "figma", "sketch", "illustrator", "canva",
        "powerpoint", "keynote", "google slides",
        "excel", "google sheets", "notion"
      ],
      locations: [
        "atlanta", "georgia", "ga",
        "massachusetts", "great barrington",
        "paris", "france"
      ],
      connectionReasons: {
        profession_data: "You work with data visualization — Du Bois invented modern infographics 20 years before Bauhaus. His 1900 charts look like they could be in a 2024 pitch deck.",
        profession_designer: "You're a designer — Du Bois understood that how you present truth determines whether it's received. Form carries meaning.",
        profession_researcher: "You're a researcher — Du Bois founded the first American sociology program and used data viz to fight white supremacy with facts.",
        profession_presenter: "You make presentations — every time you build a slide deck with charts, you're using visual storytelling Du Bois pioneered.",
        industry_analytics: "You're in analytics/BI — the dashboard you're building descends from charts Du Bois hand-drew in 1900.",
        tool_tableau: "You use Tableau/D3/PowerBI — there's a 'Du Boisian Visualization Toolkit' to replicate his style in modern tools.",
        tool_figma: "You use design tools — Du Bois proved that data design is as important as the data itself.",
        general: "If you've ever made a chart, infographic, or data-driven presentation — you're building on his foundation."
      }
    },
    sources: [
      "loc.gov/pictures/collection/anedub/",
      "W.E.B. Du Bois's Data Portraits: Visualizing Black America (2018)",
      "nightingaledvs.com",
      "Smithsonian NMAAHC"
    ]
  },

  // ============================================
  // WEEK 1: DAYS 2-7
  // ============================================
  
  // DAY 2: Marie Van Brittan Brown - Home Security
  {
    day: 2,
    inventor: {
      name: "Marie Van Brittan Brown",
      birth: "October 30, 1922",
      death: "February 2, 1999",
      birthplace: "Jamaica, Queens, NY",
      profession: "Nurse",
    },
    patent: {
      number: "3,482,037",
      title: "Home Security System Utilizing Television Surveillance",
      filed: "August 1, 1966",
      granted: "December 2, 1969",
      classification: "H04N7/18 — Closed-circuit television systems",
    },
    problem: "High crime in Queens, unreliable police response times, and irregular nurse work hours left her vulnerable at home alone.",
    implementation: [
      "Motorized camera sliding between 4 peepholes at different heights",
      "Wireless video transmission to bedroom TV monitor",
      "Two-way audio intercom through door",
      "Remote-controlled electromagnetic door lock",
      "One-button alarm to alert police/security station",
      "Audio recording of visitor conversations",
    ],
    quote: {
      text: "A woman alone in the house could alarm the neighborhood immediately by pressing a button.",
      source: "New York Times",
      date: "December 6, 1969",
    },
    stats: {
      citations: 38,
      marketSize: "$84.4B (global home security, 2027)",
      forks: 7,
    },
    descendants: [
      { name: "Ring", acquiredBy: "Amazon", acquisitionAmount: "$1B", year: 2018 },
      { name: "Nest Doorbell", acquiredBy: "Google", acquisitionAmount: "$3.2B", year: 2014 },
      { name: "Arlo", acquiredBy: "Netgear spinoff", year: 2018 },
      { name: "Eufy", acquiredBy: "Anker" },
      { name: "SimpliSafe" },
      { name: "Vivint", acquiredBy: "NRG Energy", acquisitionAmount: "$2.8B", year: 2023 },
      { name: "ADT", acquiredBy: "Apollo Global", acquisitionAmount: "$7B", year: 2016 },
    ],
    tension: "Ring partners with 2,500+ police departments for warrantless footage access. Neighbors app reports disproportionately target POC. The tool she built for agency became a tool used against her community.",
    connectionTriggers: {
      keywords: [
        "security", "safety", "protection", "surveillance", "privacy",
        "camera", "smart home", "iot", "home automation", "connected home",
        "ring", "nest", "doorbell", "alarm", "monitoring",
        "cctv", "video", "intercom", "access control"
      ],
      professions: [
        "nurse", "nursing", "rn", "lpn", "healthcare worker",
        "security", "infosec", "cybersecurity", "security engineer",
        "product manager", "product designer", "hardware",
        "iot engineer", "embedded", "firmware"
      ],
      industries: [
        "healthcare", "health tech", "medtech", "nursing",
        "security", "home security", "proptech", "real estate",
        "smart home", "consumer electronics", "iot",
        "surveillance", "access control"
      ],
      tools: [
        "ring", "nest", "arlo", "simplisafe", "adt", "vivint",
        "alexa", "google home", "homekit", "smartthings",
        "wyze", "eufy", "blink"
      ],
      locations: [
        "queens", "nyc", "new york", "jamaica", "brooklyn", "manhattan"
      ],
      connectionReasons: {
        profession_nurse: "You work in healthcare — so did Marie Van Brittan Brown. She was a nurse working night shifts when she invented home security because police response times were unreliable.",
        profession_security: "You work in security — you're building on a foundation laid in 1966 by a Black nurse who needed to protect herself.",
        profession_product: "You build products — Brown invented the first integrated home security system: camera, monitor, intercom, remote lock, and alarm in one.",
        industry: "You're in the smart home/security space — every video doorbell traces back to patent #3,482,037.",
        tool: "You use Ring/Nest — direct descendants of Brown's 1966 invention. Amazon paid $1B for her architecture.",
        location: "You're in NYC — this was invented in Jamaica, Queens, probably a few subway stops from you.",
        general: "Your work touches home security, surveillance, or IoT — systems she architected 60 years ago."
      }
    },
    sources: [
      "patents.google.com/patent/US3482037",
      "New York Times, December 6, 1969",
      "BlackPast.org",
      "Lemelson-MIT"
    ]
  },

  // DAY 3: Lewis Latimer - Lightbulb
  {
    day: 3,
    inventor: {
      name: "Lewis Howard Latimer",
      birth: "September 4, 1848",
      death: "December 11, 1928",
      birthplace: "Chelsea, Massachusetts",
      profession: "Inventor, Draftsman, Engineer",
    },
    patent: {
      number: "252,386",
      title: "Process of Manufacturing Carbons",
      filed: "February 19, 1881",
      granted: "January 17, 1882",
    },
    problem: "Edison's lightbulbs burned out in hours. The carbon filaments were too fragile and inefficient for practical use.",
    implementation: [
      "Improved carbon filament manufacturing process",
      "Filaments that lasted significantly longer",
      "Made electric lighting commercially viable",
      "Supervised installation of electrical systems in NYC, Philadelphia, Montreal, and London",
    ],
    quote: {
      text: "We made what we thought was the very first step toward commercial lighting.",
      source: "Lewis Latimer",
    },
    stats: {
      citations: 100,
      marketSize: "$115B (global lighting market, 2024)",
      forks: 10,
    },
    descendants: [
      { name: "Philips Hue" },
      { name: "LIFX" },
      { name: "Nanoleaf" },
      { name: "GE Lighting" },
      { name: "Cree" },
      { name: "Sylvania/LEDVANCE" },
      { name: "Govee" },
      { name: "Lutron" },
    ],
    tension: "Latimer was the only Black member of the Edison Pioneers. His contributions were minimized for decades while Edison took credit for 'inventing' the lightbulb.",
    connectionTriggers: {
      keywords: [
        "light", "lighting", "bulb", "led", "lamp", "illumination",
        "energy", "electrical", "power", "grid", "utility",
        "edison", "filament", "carbon", "manufacturing",
        "drafting", "patent", "technical drawing", "cad",
        "hue", "smart light", "philips"
      ],
      professions: [
        "engineer", "electrical engineer", "ee",
        "draftsman", "technical illustrator", "cad",
        "patent", "ip", "intellectual property",
        "manufacturing", "production", "operations",
        "energy", "utilities", "power"
      ],
      industries: [
        "energy", "utilities", "power", "electrical",
        "lighting", "smart lighting", "led",
        "manufacturing", "hardware", "consumer electronics",
        "legal", "ip", "patents"
      ],
      tools: [
        "philips hue", "lifx", "nanoleaf", "govee",
        "lutron", "ge", "cree", "sylvania"
      ],
      locations: [
        "bridgeport", "connecticut", "ct",
        "boston", "massachusetts", "ma",
        "new york", "nyc"
      ],
      connectionReasons: {
        profession_engineer: "You're an engineer — Latimer was the engineering genius who made Edison's lightbulb actually work. Edison's filaments burned out in hours. Latimer's lasted.",
        profession_draft: "You work in drafting/CAD — Latimer drafted the patent drawings for Bell's telephone. His technical illustrations were legendary.",
        profession_patent: "You work in IP/patents — Latimer literally wrote the book on electric lighting (1890) and was an expert patent consultant.",
        industry_energy: "You're in energy/utilities — Latimer supervised installation of electrical systems in NYC, Philadelphia, and London.",
        industry_lighting: "You're in lighting — every bulb in your house descends from his carbon filament process.",
        tool: "You use smart bulbs — Philips, GE, and every lighting company builds on Latimer's 1882 breakthrough.",
        location: "You're in the Northeast — Latimer installed the electrical infrastructure for cities you live in.",
        general: "Every time you flip a light switch, you're running his code."
      }
    },
    sources: [
      "patents.google.com/patent/US252386",
      "BlackPast.org",
      "Smithsonian Institution"
    ]
  },

  // DAY 4: Garrett Morgan - Traffic Signal + Gas Mask
  {
    day: 4,
    inventor: {
      name: "Garrett Augustus Morgan Sr.",
      birth: "March 4, 1877",
      death: "July 27, 1963",
      birthplace: "Paris, Kentucky",
      profession: "Inventor, Entrepreneur, Publisher",
    },
    patent: {
      number: "1,475,024",
      title: "Traffic Signal",
      filed: "February 27, 1922",
      granted: "November 20, 1923",
    },
    problem: "Dangerous intersections with only 'stop' and 'go' signals caused frequent collisions between cars, horses, and pedestrians.",
    implementation: [
      "Three-position traffic signal (stop, go, caution)",
      "All-stop position for pedestrians",
      "Standardized intersection control",
      "Also invented Safety Hood (gas mask) - Patent #1,113,675 (1914)",
    ],
    quote: {
      text: "I was able to save the lives of these men, even though they were prejudiced against me.",
      source: "Garrett Morgan, on the 1916 Lake Erie tunnel rescue",
    },
    stats: {
      citations: 50,
      marketSize: "$10.2B (traffic management systems, 2024)",
      forks: 6,
    },
    descendants: [
      { name: "Modern traffic lights (every intersection)" },
      { name: "Waymo/autonomous vehicle signal recognition" },
      { name: "Connected vehicle infrastructure (V2I)" },
      { name: "Smart city traffic systems" },
    ],
    tension: "Morgan had to hire a white actor to demonstrate his gas mask because fire departments refused to buy from a Black inventor. After personally rescuing tunnel workers in 1916, sales dropped when his race was discovered.",
    connectionTriggers: {
      keywords: [
        "traffic", "transportation", "transit", "driving", "cars", "automotive",
        "signal", "intersection", "stoplight", "red light",
        "safety", "fire", "rescue", "emergency", "first responder",
        "gas mask", "respirator", "ppe", "protective equipment",
        "autonomous", "self-driving", "av", "waymo", "cruise"
      ],
      professions: [
        "firefighter", "fire", "emt", "paramedic", "first responder",
        "police", "officer", "law enforcement",
        "driver", "trucker", "delivery", "logistics",
        "urban planner", "city planner", "civil engineer",
        "automotive", "mechanical engineer",
        "safety", "osha", "ehs", "industrial hygiene"
      ],
      industries: [
        "transportation", "transit", "automotive", "mobility",
        "logistics", "delivery", "shipping", "freight",
        "fire", "emergency services", "public safety",
        "urban planning", "city", "municipal", "government",
        "autonomous vehicles", "av", "robotics"
      ],
      tools: [
        "waymo", "cruise", "tesla autopilot", "mobileye",
        "uber", "lyft", "doordash", "instacart",
        "waze", "google maps", "apple maps"
      ],
      locations: [
        "cleveland", "ohio", "detroit", "michigan",
        "chicago", "midwest"
      ],
      connectionReasons: {
        profession_responder: "You're a first responder — Morgan invented the gas mask after watching firefighters die in a tunnel explosion. He personally used it to rescue workers in 1916.",
        profession_transit: "You work in transportation — Morgan's three-position traffic signal (stop, go, caution) is at every intersection you drive through.",
        profession_planner: "You're in urban planning — Morgan's traffic signal made modern city traffic flow possible.",
        profession_safety: "You work in safety/PPE — Morgan's 'safety hood' was the precursor to modern respirators and gas masks.",
        industry_av: "You're in autonomous vehicles — every self-driving car has to understand the traffic signal system Morgan invented.",
        industry_logistics: "You're in logistics/delivery — your entire operation runs on infrastructure Morgan designed.",
        tool: "You use navigation apps — they're all routing you through Morgan's traffic signal system.",
        location: "You're in Cleveland/Ohio — Morgan was a Cleveland legend who the city tried to erase.",
        general: "You've stopped at a red light. You're running his code."
      }
    },
    sources: [
      "patents.google.com/patent/US1475024",
      "BlackPast.org",
      "US Department of Transportation"
    ]
  },

  // DAY 5: Dr. Charles Drew - Blood Bank
  {
    day: 5,
    inventor: {
      name: "Dr. Charles Richard Drew",
      birth: "June 3, 1904",
      death: "April 1, 1950",
      birthplace: "Washington, D.C.",
      profession: "Surgeon, Medical Researcher",
    },
    patent: {
      title: "Blood Plasma Preservation Methods",
      // Research-based, not a patent
    },
    problem: "Blood couldn't be stored for long periods, limiting transfusions during surgery and wartime. Whole blood deteriorated too quickly.",
    implementation: [
      "Developed methods for processing and preserving blood plasma",
      "Plasma could be stored much longer than whole blood",
      "Directed first large-scale blood bank programs (US and UK, WWII)",
      "Created 'bloodmobiles' for mobile blood donation",
      "Doctoral thesis: 'Banked Blood: A Study on Blood Preservation'",
    ],
    quote: {
      text: "There is no scientific basis for the separation of the bloods of different races.",
      source: "Dr. Charles Drew, resigning from Red Cross over blood segregation",
    },
    stats: {
      marketSize: "$46B (global blood products market, 2024)",
    },
    descendants: [
      { name: "American Red Cross Blood Banks" },
      { name: "Blood Banks International" },
      { name: "Plasma-derived medicines" },
      { name: "Modern transfusion medicine" },
    ],
    tension: "Drew resigned from the Red Cross in 1942 when they continued segregating blood by race — despite his own research proving plasma was identical regardless of donor race. The man who built the blood bank system couldn't donate to his own system.",
    connectionTriggers: {
      keywords: [
        "blood", "plasma", "transfusion", "donation", "donor",
        "medical", "medicine", "healthcare", "hospital", "clinical",
        "research", "scientist", "phd", "md",
        "red cross", "blood bank", "blood drive",
        "surgery", "surgical", "trauma", "emergency"
      ],
      professions: [
        "doctor", "physician", "md", "surgeon",
        "nurse", "rn", "lpn", "nursing",
        "researcher", "scientist", "phd",
        "emt", "paramedic", "first responder",
        "phlebotomist", "lab tech", "medical technician",
        "biotech", "pharmaceutical", "pharma"
      ],
      industries: [
        "healthcare", "health tech", "medtech",
        "biotech", "pharmaceutical", "pharma", "life sciences",
        "hospital", "clinical", "medical",
        "research", "academic", "university"
      ],
      tools: [
        "epic", "cerner", "meditech",
        "red cross", "blood bank"
      ],
      locations: [
        "washington dc", "dc", "howard",
        "new york", "columbia", "presbyterian",
        "atlanta", "morehouse"
      ],
      connectionReasons: {
        profession_doctor: "You're a physician — Dr. Drew revolutionized blood transfusion. He ran the first large-scale blood banks for the US and UK during WWII.",
        profession_nurse: "You're in nursing — every blood transfusion you've assisted with uses methods Drew pioneered.",
        profession_researcher: "You're a researcher — Drew's work on plasma preservation was groundbreaking science that he had to fight to get recognized.",
        profession_responder: "You're a first responder — the blood supply system that saves trauma patients exists because of Drew.",
        industry_biotech: "You're in biotech/pharma — Drew's plasma preservation methods are foundational to modern blood products.",
        location_howard: "You're connected to Howard/DC — Drew was a Howard professor and transformed their medical program.",
        general: "If you've ever had surgery, received blood, or donated — you've benefited from his work.",
        irony: "Drew resigned from the Red Cross in protest after they segregated blood by race. The man who built the blood bank couldn't donate to his own system."
      }
    },
    sources: [
      "BlackPast.org",
      "National Library of Medicine",
      "Howard University Archives"
    ]
  },

  // DAY 6: Granville T. Woods - Railway Telegraph
  {
    day: 6,
    inventor: {
      name: "Granville Tailer Woods",
      birth: "April 23, 1856",
      death: "January 30, 1910",
      birthplace: "Columbus, Ohio",
      profession: "Inventor, Electrical Engineer",
    },
    patent: {
      number: "373,383",
      title: "Railway Telegraph",
      filed: "November 28, 1885",
      granted: "November 15, 1887",
    },
    problem: "Moving trains couldn't communicate with stations or other trains, causing deadly collisions and inefficient rail operations.",
    implementation: [
      "Induction telegraph allowing communication between moving trains and stations",
      "Synchronous Multiplex Railway Telegraph",
      "Third rail power improvements for electric streetcars",
      "60+ patents total in his lifetime",
    ],
    quote: {
      text: "The Black Edison",
      source: "Contemporary newspapers describing Woods",
    },
    stats: {
      citations: 60,
      forks: 8,
    },
    descendants: [
      { name: "Modern rail communication systems" },
      { name: "Subway safety signaling (MTA, BART, CTA)" },
      { name: "Electric streetcar systems" },
      { name: "Positive Train Control (PTC)" },
    ],
    tension: "Edison twice tried to claim Woods' inventions as his own and twice lost in court. Woods beat Edison at his own game — literally.",
    connectionTriggers: {
      keywords: [
        "railway", "railroad", "train", "transit", "subway", "metro",
        "telegraph", "communication", "wireless", "signal",
        "electrical", "power", "third rail", "induction",
        "mta", "amtrak", "bart", "cta", "mbta"
      ],
      professions: [
        "engineer", "electrical engineer", "ee",
        "transit", "railroad", "train operator", "conductor",
        "telecommunications", "telecom", "network engineer",
        "embedded", "systems engineer", "firmware",
        "inventor", "maker", "hardware"
      ],
      industries: [
        "transportation", "transit", "railroad", "rail",
        "telecommunications", "telecom", "communications",
        "electrical", "power", "utilities",
        "logistics", "freight", "shipping"
      ],
      tools: [
        "mta", "amtrak", "bart", "caltrain", "metra",
        "cta", "mbta", "wmata", "septa", "nj transit"
      ],
      locations: [
        "columbus", "ohio", "cincinnati",
        "new york", "nyc", "chicago"
      ],
      connectionReasons: {
        profession_engineer: "You're an engineer — Woods held 60+ patents. Edison twice tried to buy him out, twice failed, and twice lost patent disputes to him.",
        profession_transit: "You work in transit — Woods invented the system that lets moving trains communicate with stations. Every subway uses descendants of his tech.",
        profession_telecom: "You're in telecommunications — Woods pioneered induction telegraphy, letting signals pass between moving vehicles.",
        industry_rail: "You're in rail/transit — the third rail system that powers electric trains? Woods improved that too.",
        tool: "You ride the subway — the safety systems keeping trains from colliding trace back to Woods' 1887 patent.",
        location: "You're in Ohio — Woods was born in Columbus and his inventions transformed American infrastructure.",
        general: "If you've ridden a train, subway, or streetcar — you've benefited from his 60+ patents."
      }
    },
    sources: [
      "patents.google.com/patent/US373383",
      "BlackPast.org",
      "Smithsonian Institution"
    ]
  },

  // DAY 7: Mark Dean - IBM PC
  {
    day: 7,
    inventor: {
      name: "Mark Dean",
      birth: "March 2, 1957",
      birthplace: "Jefferson City, Tennessee",
      profession: "Computer Engineer, IBM Fellow",
    },
    patent: {
      title: "IBM PC Architecture (3 of 9 original patents)",
      granted: "1981-1999",
    },
    problem: "Early personal computers had no standardized way for components to communicate with each other, limiting expansion and compatibility.",
    implementation: [
      "Co-invented Industry Standard Architecture (ISA) bus",
      "Enabled peripherals (keyboard, mouse, printer) to connect to PC",
      "Led development of first color PC monitor",
      "Led team that created first 1 GHz processor chip (1999)",
    ],
    stats: {
      citations: 20,
      forks: 10,
    },
    descendants: [
      { name: "Every personal computer architecture" },
      { name: "PCI/PCIe bus standards" },
      { name: "USB connectivity" },
      { name: "Modern motherboard design" },
    ],
    tension: "Despite holding 3 of IBM's original 9 PC patents, Dean's contributions are rarely mentioned in the history of personal computing. He became the first Black IBM Fellow in 1995.",
    connectionTriggers: {
      keywords: [
        "computer", "pc", "ibm", "hardware", "chip", "processor",
        "architecture", "bus", "isa", "pci", "motherboard",
        "software", "developer", "engineer", "coding", "programming",
        "gigahertz", "ghz", "cpu", "intel", "amd"
      ],
      professions: [
        "software engineer", "developer", "programmer", "swe",
        "hardware engineer", "chip designer", "asic",
        "computer scientist", "cs", "ml engineer", "ai",
        "devops", "sre", "platform", "infrastructure",
        "frontend", "backend", "fullstack", "web developer",
        "mobile", "ios", "android", "react", "engineer"
      ],
      industries: [
        "tech", "technology", "software", "saas",
        "hardware", "semiconductors", "chips",
        "ai", "ml", "machine learning", "artificial intelligence",
        "crypto", "web3", "blockchain", "fintech"
      ],
      tools: [
        "mac", "macbook", "windows", "linux", "ubuntu",
        "vscode", "vim", "github", "git",
        "react", "node", "python", "javascript", "typescript",
        "aws", "gcp", "azure", "vercel"
      ],
      locations: [
        "san francisco", "sf", "bay area", "silicon valley",
        "new york", "nyc", "austin", "seattle",
        "tennessee", "jefferson city"
      ],
      connectionReasons: {
        profession_swe: "You're a software engineer — you write code that runs on architecture Mark Dean co-invented. He holds 3 of IBM's original 9 PC patents.",
        profession_hardware: "You're in hardware — Dean led the team that created the ISA bus, letting components talk to each other. Every PC since descends from that.",
        profession_dev: "You're a developer — the computer you're coding on exists because Dean figured out how to make components work together.",
        industry_tech: "You're in tech — Dean co-invented the PC and later led the team that broke the gigahertz barrier. Your laptop runs on his breakthroughs.",
        industry_ai: "You're in AI/ML — every model you train runs on hardware architectures Dean pioneered.",
        tool: "You're on a computer right now. That's the point.",
        location: "You're in tech hubs — Dean helped create the entire personal computer industry.",
        general: "If you're reading this on a computer, phone, or tablet — you're running on his architecture."
      }
    },
    sources: [
      "IBM Archives",
      "National Inventors Hall of Fame",
      "BlackPast.org"
    ]
  },

  // DAY 8: Dr. Patricia Bath - Laserphaco Probe
  {
    day: 8,
    inventor: {
      name: "Dr. Patricia Era Bath",
      birth: "November 4, 1942",
      death: "May 30, 2019",
      birthplace: "Harlem, New York",
      profession: "Ophthalmologist, Inventor",
    },
    patent: {
      number: "4,744,360",
      title: "Apparatus for Ablating and Removing Cataract Lenses",
      filed: "December 12, 1986",
      granted: "May 17, 1988",
    },
    problem: "Cataract surgery was invasive, risky, and often ineffective. Many patients remained blind or partially sighted after surgery.",
    implementation: [
      "Laserphaco Probe uses laser to vaporize cataracts",
      "Less invasive than traditional surgery",
      "Restored sight to patients blind for over 30 years",
      "Founded American Institute for the Prevention of Blindness",
      "Pioneered 'community ophthalmology' concept",
    ],
    quote: {
      text: "Don't let anyone rob you of your imagination, your creativity, or your curiosity.",
      source: "Dr. Patricia Bath",
    },
    stats: {
      marketSize: "$28B (global ophthalmic devices, 2024)",
    },
    descendants: [
      { name: "Modern laser cataract surgery" },
      { name: "LASIK eye surgery technology" },
      { name: "Femtosecond laser systems" },
    ],
    tension: "Bath faced discrimination at UCLA where colleagues initially refused to give her lab space. She was the first woman ophthalmology resident there and had to fight for recognition.",
    connectionTriggers: {
      keywords: [
        "eye", "eyes", "vision", "sight", "blind", "blindness",
        "laser", "surgery", "surgical", "medical device",
        "cataract", "ophthalmology", "optometry",
        "healthcare", "medical", "doctor", "medicine"
      ],
      professions: [
        "doctor", "physician", "md", "surgeon",
        "ophthalmologist", "optometrist", "eye doctor",
        "nurse", "rn", "healthcare",
        "researcher", "scientist", "phd",
        "medical device", "biomedical engineer",
        "laser", "optics", "photonics"
      ],
      industries: [
        "healthcare", "health tech", "medtech",
        "medical devices", "biomedical",
        "ophthalmology", "vision", "eye care",
        "laser", "optics", "photonics",
        "biotech", "life sciences"
      ],
      tools: [
        "lasik", "laser eye", "vision correction"
      ],
      locations: [
        "los angeles", "la", "ucla",
        "new york", "nyc", "harlem", "columbia",
        "washington dc", "howard"
      ],
      connectionReasons: {
        profession_doctor: "You're a physician — Dr. Bath was the first Black woman to receive a medical patent. She invented a device that has restored sight to people blind for over 30 years.",
        profession_ophth: "You're in ophthalmology/optometry — the Laserphaco probe revolutionized cataract surgery worldwide.",
        profession_researcher: "You're a researcher — Bath founded the American Institute for the Prevention of Blindness and pioneered 'community ophthalmology.'",
        profession_meddevice: "You're in medical devices — Bath's laser probe was a breakthrough in precision surgical instruments.",
        industry_health: "You're in healthcare — Bath's invention has restored sight to patients across the globe, including people blind for decades.",
        location_la: "You're in LA — Bath was the first woman ophthalmology resident at UCLA and fought for her position.",
        location_harlem: "You're connected to Harlem — Bath grew up there, inspired by her mother's domestic work and her father's stories.",
        general: "If you or anyone you know has had cataract surgery, there's a good chance Bath's invention was involved."
      }
    },
    sources: [
      "patents.google.com/patent/US4744360",
      "BlackPast.org",
      "National Library of Medicine"
    ]
  },

  // ============================================
  // WEEK 2: DAYS 9-14
  // Finance, Animation, VoIP, Design, Crypto
  // ============================================

  // DAY 9: Maggie Lena Walker - Banking
  {
    day: 9,
    inventor: {
      name: "Maggie Lena Walker",
      birth: "July 15, 1864",
      death: "December 15, 1934",
      birthplace: "Richmond, Virginia",
      profession: "Banker, Entrepreneur, Civic Leader",
    },
    patent: {
      title: "St. Luke Penny Savings Bank Charter",
      granted: "November 1903",
    },
    problem: "Black Americans were denied banking services, loans, and mortgages by white institutions. Without access to capital, wealth building was impossible.",
    implementation: [
      "Founded St. Luke Penny Savings Bank (1903)",
      "First woman of any race to charter a bank in the US",
      "First Black woman to serve as bank president",
      "Loans as small as $5 to serve modest-income customers",
      "Down payments as low as 10% (vs. industry standard 50%)",
      "Also founded St. Luke Herald newspaper (1902)",
      "Also founded St. Luke Emporium department store",
    ],
    quote: {
      text: "Let us put our moneys together... let us put our money out at usury among ourselves, and reap the benefit ourselves... Let us have a bank that will take the nickels and turn them into dollars.",
      source: "Maggie Lena Walker",
    },
    stats: {
      marketSize: "$600B (community banking assets, US)",
    },
    descendants: [
      { name: "Consolidated Bank and Trust (oldest Black-operated bank as of 2010)" },
      { name: "Community Development Financial Institutions (CDFIs)" },
      { name: "Black-owned banks movement" },
      { name: "Modern neobanks focused on underserved communities" },
    ],
    tension: "Walker operated during Jim Crow, where Black economic success was met with violence. The St. Luke Emporium faced boycotts from white businesses and reluctance from some Black customers afraid of retaliation.",
    connectionTriggers: {
      keywords: [
        "bank", "banking", "finance", "financial", "fintech",
        "credit", "loan", "mortgage", "savings", "checking",
        "wealth", "money", "capital", "investment",
        "community", "underserved", "underbanked", "unbanked",
        "neobank", "challenger bank"
      ],
      professions: [
        "banker", "finance", "financial advisor",
        "fintech", "founder", "ceo", "entrepreneur",
        "product manager", "product", "growth",
        "community organizer", "nonprofit"
      ],
      industries: [
        "banking", "finance", "fintech",
        "payments", "lending", "credit",
        "insurance", "wealth management",
        "community development", "nonprofit"
      ],
      tools: [
        "stripe", "plaid", "unit", "treasury prime",
        "chime", "current", "varo", "aspiration",
        "greenwood", "first boulevard", "oneunited"
      ],
      locations: [
        "richmond", "virginia", "va",
        "washington dc", "dc", "atlanta", "ga"
      ],
      connectionReasons: {
        profession_banker: "You're in banking — Maggie Walker was the first woman to charter and lead a bank in America. She built financial infrastructure when Black Americans were denied basic services.",
        profession_fintech: "You're in fintech — Walker was solving financial inclusion in 1903. Neobanks serving underbanked communities are following her playbook.",
        profession_founder: "You're a founder — Walker built a bank, a newspaper, and a department store as an integrated economic ecosystem for her community.",
        industry_finance: "You're in finance — Walker proved that serving overlooked communities isn't charity, it's sustainable business. Her bank survived the Great Depression.",
        industry_community: "You work in community development — Walker's model of economic self-determination is the foundation of CDFIs and community banking.",
        tool_neobank: "You work with banking infrastructure — Greenwood, First Boulevard, and other Black neobanks cite Walker as inspiration.",
        general: "If you believe in financial inclusion, you're building on what she started 120 years ago."
      }
    },
    sources: [
      "Library of Congress",
      "National Park Service (Maggie L. Walker National Historic Site)",
      "Federal Reserve Bank of Richmond",
      "Encyclopedia Virginia"
    ]
  },

  // DAY 10: Lisa Gelobter - GIFs / Web Animation
  {
    day: 10,
    inventor: {
      name: "Lisa Gelobter",
      birth: "1971",
      birthplace: "Washington, D.C.",
      profession: "Computer Scientist, CEO",
    },
    patent: {
      title: "Shockwave Animation Technology",
      granted: "1990s",
    },
    problem: "The early web was static and text-based. There was no way to create rich, interactive, animated experiences online.",
    implementation: [
      "Key developer of Shockwave at Macromedia",
      "Developed animation technology used to create GIFs",
      "Shockwave enabled web games, animations, and interactive content",
      "Laid groundwork for Flash, HTML5 video",
      "Also contributed to Hulu, Brightcove, Joost (streaming video)",
      "Chief Digital Service Officer, US Dept of Education (Obama admin)",
      "Helped fix Healthcare.gov after troubled rollout",
    ],
    quote: {
      text: "I'm a Black woman in tech. I exist. And I always have.",
      source: "Lisa Gelobter",
    },
    stats: {
      marketSize: "$350B (digital media/streaming, 2024)",
    },
    descendants: [
      { name: "GIFs (the format you use every day)" },
      { name: "Giphy", acquiredBy: "Meta/Facebook", acquisitionAmount: "$400M", year: 2020 },
      { name: "Tenor", acquiredBy: "Google", year: 2018 },
      { name: "Flash (RIP)" },
      { name: "HTML5 video/animation" },
      { name: "Lottie animations" },
      { name: "Streaming platforms (Hulu, etc.)" },
    ],
    tension: "Despite her foundational work on web animation and streaming, Gelobter's contributions are rarely cited. She became one of only 34 Black women to raise $1M+ in venture capital with her company tEQuitable.",
    connectionTriggers: {
      keywords: [
        "gif", "gifs", "animation", "animated", "meme", "memes",
        "shockwave", "flash", "multimedia", "interactive",
        "streaming", "video", "hulu", "netflix",
        "web", "internet", "html5", "lottie"
      ],
      professions: [
        "designer", "motion designer", "animator",
        "frontend", "developer", "engineer",
        "product", "ux", "ui",
        "social media", "content creator", "creator",
        "marketer", "marketing"
      ],
      industries: [
        "media", "entertainment", "streaming",
        "social media", "content", "creator economy",
        "gaming", "games", "interactive",
        "advertising", "marketing", "creative"
      ],
      tools: [
        "giphy", "tenor", "imgur",
        "after effects", "lottie", "rive",
        "figma", "framer",
        "tiktok", "instagram", "twitter", "x",
        "slack", "discord"
      ],
      locations: [
        "washington dc", "dc",
        "new york", "nyc",
        "san francisco", "sf", "bay area"
      ],
      connectionReasons: {
        profession_animator: "You work in animation/motion design — Gelobter developed the animation technology that powers GIFs. Every reaction GIF traces back to her work.",
        profession_frontend: "You're a frontend developer — Gelobter's Shockwave work laid the foundation for web animation, from Flash to HTML5 to Lottie.",
        profession_social: "You work in social media — GIFs are the language of the internet. She helped create that language.",
        profession_creator: "You're a content creator — the GIF you just posted exists because of animation tech she pioneered.",
        industry_streaming: "You're in streaming/media — Gelobter also helped build Hulu and pioneered internet video.",
        tool_giphy: "You use Giphy/Tenor/GIFs — Facebook paid $400M for Giphy. That's the value of what she helped create.",
        tool_slack: "You use Slack/Discord — the GIF reactions you send all day? Her code.",
        general: "If you've ever sent a GIF, watched a web animation, or streamed video — you're using her work."
      }
    },
    sources: [
      "BlackPast.org",
      "Wikipedia",
      "Computer History Museum",
      "Forbes"
    ]
  },

  // DAY 11: Marian Croak - VoIP
  {
    day: 11,
    inventor: {
      name: "Dr. Marian Rogers Croak",
      birth: "1955",
      birthplace: "New York City",
      profession: "Engineer, Vice President of Engineering at Google",
    },
    patent: {
      title: "Voice over Internet Protocol (VoIP) & Text-to-Donate Patents",
      // 200+ patents
    },
    problem: "Voice communication required expensive dedicated phone lines. Charitable donations required checks or cash, limiting impulse giving during disasters and events.",
    implementation: [
      "Pioneered Voice over Internet Protocol (VoIP) technology",
      "200+ patents in voice and data technology",
      "Invented text-to-donate system (patent filed 2005)",
      "At AT&T: Led Domain 2.0 Architecture (cloud transformation)",
      "At Google: VP of Engineering, led Project Loon and Indian rail Wi-Fi",
    ],
    quote: {
      text: "We wanted to give people a way to donate from wherever they were.",
      source: "Marian Croak, on text-to-donate",
    },
    stats: {
      citations: 200,
      marketSize: "$102B (VoIP market, 2024)",
    },
    descendants: [
      { name: "Zoom" },
      { name: "Microsoft Teams" },
      { name: "Google Meet" },
      { name: "WhatsApp calling" },
      { name: "FaceTime" },
      { name: "Discord voice" },
      { name: "Text-to-donate campaigns (Red Cross, Haiti earthquake, etc.)" },
    ],
    tension: "Despite holding 200+ patents and being a VP at Google, Croak's name is rarely mentioned when discussing video calling technology. She was inducted into the National Inventors Hall of Fame in 2022.",
    connectionTriggers: {
      keywords: [
        "voip", "voice", "video call", "video chat",
        "zoom", "teams", "meet", "facetime", "whatsapp",
        "telecommunications", "telecom", "call", "calling",
        "donate", "donation", "charity", "fundraising", "text to give",
        "conference", "meeting", "remote work", "wfh"
      ],
      professions: [
        "engineer", "telecom", "network engineer",
        "product manager", "product", "pm",
        "remote", "distributed", "wfh",
        "nonprofit", "fundraising", "development",
        "communications", "pr", "comms"
      ],
      industries: [
        "telecommunications", "telecom",
        "tech", "software", "saas",
        "nonprofit", "charity", "philanthropy",
        "enterprise", "collaboration"
      ],
      tools: [
        "zoom", "teams", "microsoft teams", "google meet",
        "facetime", "whatsapp", "signal",
        "discord", "slack huddle",
        "twilio", "vonage", "ringcentral"
      ],
      locations: [
        "new york", "nyc",
        "san francisco", "sf", "mountain view", "google",
        "new jersey", "nj"
      ],
      connectionReasons: {
        profession_engineer: "You're an engineer — Croak holds 200+ patents in voice technology. The video calls you take every day run on infrastructure she pioneered.",
        profession_remote: "You work remotely — your Zoom/Teams/Meet calls exist because of VoIP technology Croak helped invent.",
        profession_nonprofit: "You're in nonprofit/fundraising — Croak invented text-to-donate. The $43M raised for Haiti earthquake relief in 2010? Her system.",
        industry_telecom: "You're in telecommunications — Croak spent 30+ years at AT&T Bell Labs and now leads engineering at Google.",
        industry_collab: "You're in enterprise collaboration — every voice/video product builds on VoIP foundations Croak established.",
        tool_zoom: "You use Zoom/Teams/Meet — these are all applications of VoIP technology she pioneered.",
        tool_twilio: "You build with Twilio/communications APIs — you're building on her 200+ patents.",
        general: "If you've made a video call, donated by text, or used voice chat — you're using her work."
      }
    },
    sources: [
      "National Inventors Hall of Fame",
      "Google Blog",
      "BlackPast.org",
      "AT&T Archives"
    ]
  },

  // DAY 12: Georg Olden - TV Graphics / Graphic Design
  {
    day: 12,
    inventor: {
      name: "Georg Olden",
      birth: "1920",
      death: "February 25, 1975",
      birthplace: "Birmingham, Alabama",
      profession: "Graphic Designer, Art Director",
    },
    patent: {
      title: "CBS Television Network Graphics (1945-1960)",
    },
    problem: "Television was a new medium with no established visual language. Shows needed title cards, logos, and on-screen graphics to create professional broadcast experiences.",
    implementation: [
      "First African American to hold creative position at major US corporation",
      "Head graphic designer at CBS Television (1945-1960)",
      "Created on-air graphics for 'I Love Lucy', 'Gunsmoke', and other shows",
      "First Black designer to create a US postage stamp (Emancipation Proclamation, 1963)",
      "Seven-time Emmy Award winner for television graphics",
    ],
    stats: {
      forks: 10,
    },
    descendants: [
      { name: "Modern TV graphics and title sequences" },
      { name: "Network branding and logos" },
      { name: "Motion graphics for broadcast" },
      { name: "US Postal Service stamp design legacy" },
    ],
    tension: "Olden worked in an era of extreme segregation, becoming the first Black creative at a major corporation. His groundbreaking work went largely unrecognized in design history until recent years.",
    connectionTriggers: {
      keywords: [
        "television", "tv", "broadcast", "network",
        "graphics", "motion graphics", "title sequence",
        "logo", "branding", "identity",
        "design", "visual", "creative"
      ],
      professions: [
        "designer", "graphic designer", "creative director",
        "motion designer", "broadcast designer",
        "art director", "brand designer",
        "animator", "vfx"
      ],
      industries: [
        "media", "television", "broadcast",
        "entertainment", "film", "video",
        "design", "creative", "agency",
        "advertising", "marketing"
      ],
      tools: [
        "after effects", "premiere", "final cut",
        "illustrator", "photoshop",
        "figma", "sketch"
      ],
      locations: [
        "new york", "nyc",
        "los angeles", "la", "hollywood",
        "birmingham", "alabama"
      ],
      connectionReasons: {
        profession_designer: "You're a graphic designer — Olden was the first Black creative at a major US corporation. He created the visual language of television.",
        profession_motion: "You're in motion design — Olden designed title cards and graphics for 'I Love Lucy' and dozens of other shows. Every title sequence descends from his work.",
        profession_brand: "You work in branding — Olden shaped how CBS looked to millions of Americans. Network identity design started with him.",
        industry_media: "You're in media/TV — Olden won seven Emmys for television graphics. He literally invented broadcast design.",
        industry_design: "You're in the design industry — Olden was a pioneer who proved Black designers belonged at the highest levels.",
        general: "If you've watched TV, you've seen the descendants of his work."
      }
    },
    sources: [
      "AIGA Design Archives",
      "Smithsonian National Postal Museum",
      "BlackPast.org"
    ]
  },

  // DAY 13: Arthur Hayes - Crypto/BitMEX (Contemporary)
  {
    day: 13,
    inventor: {
      name: "Arthur Hayes",
      birth: "1985",
      birthplace: "Buffalo, New York",
      profession: "Entrepreneur, Crypto Exchange Founder",
    },
    patent: {
      title: "BitMEX - Bitcoin Derivatives Exchange",
      granted: "Founded 2014",
    },
    problem: "Early cryptocurrency markets lacked sophisticated trading instruments. Traders couldn't hedge positions or speculate on Bitcoin's price with leverage.",
    implementation: [
      "Co-founded BitMEX, first major crypto derivatives exchange",
      "Created perpetual swap contract (now industry standard)",
      "Enabled leveraged trading up to 100x",
      "Handled $100M+ daily trading volume at peak",
      "Background: Equity derivatives trader at Deutsche Bank and Citibank",
    ],
    quote: {
      text: "We are building the financial infrastructure of the future.",
      source: "Arthur Hayes",
    },
    stats: {
      marketSize: "$2T (crypto derivatives daily volume, 2024)",
    },
    descendants: [
      { name: "Binance Futures" },
      { name: "FTX (RIP)" },
      { name: "dYdX" },
      { name: "GMX" },
      { name: "Perpetual Protocol" },
      { name: "Bybit" },
    ],
    tension: "Hayes stepped down as CEO amid regulatory scrutiny. BitMEX faced US charges for operating without proper licensing. The exchange he built became a template for the entire crypto derivatives industry.",
    connectionTriggers: {
      keywords: [
        "crypto", "cryptocurrency", "bitcoin", "btc", "ethereum", "eth",
        "defi", "derivatives", "futures", "perpetual", "leverage",
        "trading", "exchange", "dex", "cex",
        "web3", "blockchain"
      ],
      professions: [
        "trader", "quant", "quantitative",
        "crypto", "defi", "web3",
        "finance", "fintech",
        "founder", "entrepreneur"
      ],
      industries: [
        "crypto", "cryptocurrency", "blockchain",
        "defi", "trading", "exchange",
        "finance", "fintech",
        "web3"
      ],
      tools: [
        "bitmex", "binance", "dydx", "gmx",
        "metamask", "ledger", "trezor",
        "tradingview", "coingecko"
      ],
      locations: [
        "hong kong", "singapore",
        "new york", "nyc",
        "miami", "dubai"
      ],
      connectionReasons: {
        profession_trader: "You're a trader — Hayes brought Wall Street derivatives to crypto. The perpetual swap he created is now the most traded crypto instrument.",
        profession_crypto: "You're in crypto — BitMEX was the first major derivatives exchange. Every perps platform copies the model Hayes built.",
        profession_defi: "You're in DeFi — decentralized derivatives protocols like dYdX and GMX are on-chain versions of what Hayes created.",
        profession_founder: "You're a crypto founder — Hayes proved a Black man could build one of the most important exchanges in the industry.",
        industry_crypto: "You're in the crypto industry — BitMEX handled more daily volume than most stock exchanges. Hayes built that.",
        tool_perps: "You trade perpetuals — Hayes invented the perpetual swap contract. Every time you trade perps, that's his innovation.",
        general: "If you've ever traded crypto derivatives, you're using financial instruments he pioneered."
      }
    },
    sources: [
      "BitMEX Blog",
      "Bloomberg",
      "CoinDesk"
    ]
  },

  // DAY 14: Shawn Wilkinson - Decentralized Storage (Storj)
  {
    day: 14,
    inventor: {
      name: "Shawn Wilkinson",
      birth: "1991",
      birthplace: "United States",
      profession: "Entrepreneur, Blockchain Developer",
    },
    patent: {
      title: "Storj - Decentralized Cloud Storage Protocol",
      granted: "Founded 2014",
    },
    problem: "Cloud storage was centralized, creating single points of failure, surveillance vulnerabilities, and data ownership concerns.",
    implementation: [
      "Founded Storj at a Bitcoin hackathon (2014)",
      "Decentralized cloud storage using blockchain",
      "Files encrypted, shredded into 'shards', distributed globally",
      "No central server to be compromised",
      "Users can rent unused hard drive space",
      "First startup at age 8 (pillow business)",
    ],
    stats: {
      marketSize: "$376B (cloud storage market, 2024)",
    },
    descendants: [
      { name: "Filecoin" },
      { name: "Arweave" },
      { name: "IPFS integration" },
      { name: "Sia" },
    ],
    tension: "Decentralized storage challenges the business model of AWS, Google Cloud, and Azure. Wilkinson built an alternative to Big Tech's data monopoly.",
    connectionTriggers: {
      keywords: [
        "storage", "cloud", "decentralized", "distributed",
        "blockchain", "crypto", "web3",
        "privacy", "encryption", "security",
        "aws", "s3", "ipfs", "filecoin"
      ],
      professions: [
        "developer", "engineer", "devops", "sre",
        "crypto", "blockchain", "web3",
        "infrastructure", "cloud", "platform"
      ],
      industries: [
        "cloud", "infrastructure", "storage",
        "crypto", "blockchain", "web3",
        "privacy", "security"
      ],
      tools: [
        "storj", "filecoin", "arweave", "ipfs", "sia",
        "aws", "s3", "gcp", "azure"
      ],
      locations: [
        "atlanta", "georgia", "ga"
      ],
      connectionReasons: {
        profession_devops: "You're in DevOps/infrastructure — Wilkinson built decentralized storage that can't be censored or have downtime. No single point of failure.",
        profession_web3: "You're in Web3 — Storj was one of the first decentralized storage solutions, launched same time as Ethereum.",
        profession_privacy: "You care about privacy — Storj encrypts and shards files so no one, not even Storj, has a complete copy.",
        industry_cloud: "You're in cloud infrastructure — Wilkinson built an alternative to AWS/GCP/Azure monopoly.",
        tool_storage: "You use cloud storage — decentralized alternatives like Storj, Filecoin, and IPFS all trace back to his work.",
        general: "If you believe data shouldn't be controlled by Big Tech, you're aligned with what he built."
      }
    },
    sources: [
      "Storj.io",
      "CoinDesk",
      "TechCrunch"
    ]
  },
];

// Export helper to get commit by day
export const getCommitByDay = (day: number): Commit | undefined => {
  return commits.find(c => c.day === day);
};

export const slugifyInventor = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

// Export helper to get current day's commit (based on BHM date)
export const getTodaysCommit = (): Commit | undefined => {
  const now = new Date();
  const day = now.getDate(); // 1-28 for February
  return commits.find(c => c.day === day);
};

// Export all inventors for bio scanning
export const getAllConnectionTriggers = () => {
  return commits.map(c => ({
    day: c.day,
    inventorName: c.inventor.name,
    patentTitle: c.patent.title,
    triggers: c.connectionTriggers
  }));
};
