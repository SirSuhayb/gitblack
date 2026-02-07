"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { commits as allCommits } from "../data/commits";
import { scanSignals } from "../lib/scanner";
import { fetchFollowedChannels } from "../lib/farcaster";
import { vtcDuBois } from "../lib/fonts";

export default function GitBlackDay1({ day = 1 } = {}) {
  const [installed, setInstalled] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const [activeChart, setActiveChart] = useState(0);
  const [activeSubChart, setActiveSubChart] = useState(0);
  const [readmeTab, setReadmeTab] = useState("overview");
  const [isReadmeOpen, setIsReadmeOpen] = useState(true);
  const [isChartsOpen, setIsChartsOpen] = useState(true);
  const [isDependencyOpen, setIsDependencyOpen] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [portraitError, setPortraitError] = useState(false);
  const [shareText, setShareText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setInstalled(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setImageError(false);
  }, [activeChart]);

  useEffect(() => {
    setActiveSubChart(0);
  }, [activeChart]);

  useEffect(() => {
    const origin = window.location.origin;
    const defaultText = buildDefaultShareText(origin);
    setShareText(defaultText);

    const params = new URLSearchParams(window.location.search);
    const fid = params.get("fid");
    if (!fid) return;

    let isActive = true;
    const loadSignals = async () => {
      try {
        const data = await fetchFollowedChannels(fid);
        const channelTerms = extractChannelTerms(data);
        if (!channelTerms.length) return;

        const matches = scanSignals(
          { channelTerms },
          allCommits
        );
        if (matches.length && isActive) {
          setShareText(buildShareTextForMatch(matches[0], origin));
        }
      } catch (error) {
        // Default share text already set.
      }
    };

    loadSignals();
    return () => {
      isActive = false;
    };
  }, []);

  const baseCommit = allCommits.find((entry) => entry.day === day);
  const commit = {
    day: baseCommit?.day ?? day,
    date: "February 1, 2026",
    work: {
      title:
        baseCommit?.patent?.title?.split(" — ")[0] ??
        "The Exhibit of American Negroes",
      venue: "Exposition Universelle, Paris",
      created: "December 1899 — April 1900",
      displayed: "April 15 — November 12, 1900",
      visitors: "50,000,000+",
      series: [
        "The Georgia Negro: A Social Study (32 charts)",
        "A Series of Statistical Charts... (31 charts)"
      ],
      materials: "Ink, watercolor, gouache on cardboard (~28\" × 22\")",
      location: "Library of Congress, Prints and Photographs Division"
    },
    inventor: {
      name: baseCommit?.inventor?.name ?? "W.E.B. Du Bois",
      born: baseCommit?.inventor?.birth ?? "February 23, 1868",
      died: baseCommit?.inventor?.death ?? "August 27, 1963",
      birthplace: baseCommit?.inventor?.birthplace ?? "Great Barrington, Massachusetts",
      profession: baseCommit?.inventor?.profession ?? "Sociologist, Designer, Data Scientist",
      collaborators: "Students and alumni of Atlanta University",
      timeToCreate: "~4 months",
      photoUrl:
        baseCommit?.inventor?.photoUrl ??
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg/1280px-W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg",
      photoCredit:
        baseCommit?.inventor?.photoCredit ??
        "Photo: James E. Purdy, 1907 — Wikimedia Commons ↗"
    },
    problem: "No visual language existed to communicate the humanity, progress, and systemic oppression of Black Americans to a global audience. Statistics were dry. Racist caricatures dominated popular imagery. The truth needed a form.",
    designDecisions: [
      {
        decision: "Hand-drawn, not printed",
        why: "Each stroke carries intention. Mass production would strip the work of its humanity — the very thing he was arguing for."
      },
      {
        decision: "Bold geometric shapes",
        why: "Modernist aesthetics 20 years before Bauhaus. Clean lines demand to be taken seriously. No decoration, no apology."
      },
      {
        decision: "Black, red, green, gold palette",
        why: "Colors that would later define Pan-Africanism. Likely coincidental, but prophetic. Red for blood and struggle. Gold for wealth being built."
      },
      {
        decision: "The 'Du Bois Spiral'",
        why: "When data is so disproportionate a bar chart fails, spiral it. Let the grotesque ratio overwhelm visually. Make inequality *felt*, not just read."
      },
      {
        decision: "Comparison to European nations",
        why: "Force the white gaze to see scale. '7.5 million — nearly half as many as Spaniards in Spain.' You cannot dismiss a nation."
      },
      {
        decision: "Show progress AND oppression",
        why: "Not poverty porn. Not respectability propaganda. Both truths: we are rising AND being held down."
      }
    ],
    quote: {
      text: "I wanted to set down its aim and method in some outstanding way which would bring my work to the thinking world. The great World's Fair at Paris was being planned and I thought I might put my findings into plans, charts, and figures, so one might see what we were trying to accomplish.",
      source: "W.E.B. Du Bois, Autobiography"
    },
    secondQuote: {
      text: "An honest, straightforward exhibit of a small nation of people, picturing their life and development without apology or gloss, and above all made by themselves.",
      source: "W.E.B. Du Bois, on the exhibit's intent"
    },
    stats: {
      charts: 63,
      months: 4,
      yearsBefore: "20+ years before Bauhaus",
      forgotten: "118 years until republished",
      locCollection: "LOT 11931"
    },
    innovations: [
      {
        name: "Du Bois Spiral",
        description: "A wrapped bar chart that coils disproportionate data into a spiral, making extreme ratios viscerally apparent",
        modern: "Coined by D3 expert Elijah Meeks. Now recreated in Tableau, R, D3."
      },
      {
        name: "Comparative Fan Charts",
        description: "Side-by-side radial charts comparing occupations between races — same form, different fills, instant disparity",
        modern: "Foundational to modern comparison visualizations"
      },
      {
        name: "Area Charts as Arguments",
        description: "Using area to show growth over time, with color blocking to separate free vs. enslaved populations",
        modern: "Standard in every BI tool today"
      },
      {
        name: "Geographic Data Portraits",
        description: "Maps that don't just show where, but why — routes of slave trade starring Georgia",
        modern: "Precursor to modern data journalism maps"
      }
    ],
    charts: [
      {
        title: "City and Rural Population. 1890.",
        description: "The iconic Du Bois Spiral. 734,952 rural (red) vs 120,000 urban total. The spiral makes the disparity undeniable.",
        insight: "Black life in Georgia was overwhelmingly rural — and that meant agricultural labor, often on the same land their parents were enslaved.",
        loc: "ppmsca.33873"
      },
      {
        title: "Assessed Value of Household and Kitchen Furniture Owned by Georgia Negroes",
        description: "From $21,186 in 1875 to $1,434,975 in 1899. A 6,673% increase spiraling outward.",
        insight: "Economic progress despite every structural barrier. The spiral form makes the growth feel like momentum.",
        loc: "ppmsca.33887"
      },
      {
        title: "Slaves and Free Negroes",
        description: "A stacked area chart showing free Black population never exceeded 1.7% until 1865.",
        insight: "The red mass of enslavement. The tiny sliver of freedom. One glance tells the whole story.",
        loc: "ppmsca.33864",
        subCharts: [
          {
            title: "Proportion of freemen and slaves among American Negroes.",
            description:
              "A filled form that makes the weight of slavery visible until a sliver of freedom breaks through after 1860.",
            caption:
              "Proportion of freemen and slaves among American Negroes (1790–1870).",
            insight:
              "The dark mass reads as oppressive weight; the thin green band is hope piercing through.",
            technique: {
              label: "WEIGHTED AREA",
              description:
                "A filled area form where the mass itself carries meaning — not just the line."
            },
            loc: "ppmsca.33913",
            sourceUrl: "https://www.loc.gov/item/2014645356/"
          },
          {
            title: "The rise of the Negroes from slavery to freedom in one generation.",
            description:
              "Bar graph shows percentage of African Americans in slavery in 1860 and percentage of African Americans who owned property in 1890.",
            caption:
              "Slavery in 1860 vs. property ownership in 1890 — a generational shift in one view.",
            insight:
              "Freedom became measurable in ownership — a visual leap from bondage to property.",
            technique: {
              label: "COMPARATIVE BAR",
              description:
                "Two-period comparison to show a generational shift in a single frame."
            },
            loc: "ppmsca.33912",
            sourceUrl: "https://www.loc.gov/item/2014645355/"
          }
        ]
      },
      {
        title: "Income and Expenditure of 150 Negro Families in Atlanta, Ga., U.S.A.",
        description: "Bar graph showing amounts spent on rent, food, clothes, taxes, and other expenses by families in various income brackets.",
        insight: "Budgets render dignity visible — a lived economics often erased in narrative accounts.",
        loc: "ppmsca.33893"
      },
      {
        title: "Occupations of Negroes and Whites in Georgia",
        description: "Two fan charts side by side. Same structure, same occupations — radically different distributions.",
        insight: "Agriculture dominates Black labor. The comparison makes structural racism legible.",
        loc: "ppmsca.33906"
      },
      {
        title: "Race Amalgamation in Georgia",
        description: "A single bar showing 56% of Black Georgians had mixed ancestry — a corporeal record of slavery's violence.",
        insight: "Du Bois made visible what polite society refused to discuss: the rape endemic to slavery.",
        loc: "ppmsca.33875"
      }
    ],
    forks: [
      { name: "Tableau", type: "tool", note: "Du Bois Challenge 2021" },
      { name: "D3.js", type: "tool", note: "Elijah Meeks' recreations" },
      { name: "Observable", type: "tool", note: "Interactive recreations" },
      { name: "Power BI", type: "tool", note: "Enterprise dataviz" },
      { name: "Data Journalism", type: "field", note: "NYT, WaPo, Guardian" },
      { name: "Infographics", type: "field", note: "Every pitch deck, ever" },
      { name: "ISOTYPE", type: "influence", note: "Neurath's pictograms, 1920s" },
      { name: "Sociology", type: "field" }
    ],
    tension: {
      original: "A Black sociologist using design to make white audiences see Black humanity",
      current: "Data visualization often still serves power — dashboards for surveillance, metrics for extraction",
      irony: "The American press completely ignored the exhibit. The charts sat in the Library of Congress for 118 years before being republished. Du Bois asked to have them returned to teach with. He was denied."
    },
    legacy: {
      book: "W.E.B. Du Bois's Data Portraits: Visualizing Black America (2018)",
      challenge: "#DuBoisChallenge — recreate his charts in modern tools (2021)",
      toolkit: "Du Boisian Visualization Toolkit by Dignity and Debt (2021)",
      exhibition: "Cooper Hewitt, Smithsonian Design Museum (2022-2023)"
    },
    sources: [
      "loc.gov/pictures/collection/anedub/",
      "W.E.B. Du Bois's Data Portraits (Princeton Architectural Press, 2018)",
      "nightingaledvs.com — Jason Forrest's analysis",
      "Smithsonian NMAAHC",
      "Du Bois, Autobiography"
    ]
  };

  const readmeTabs = [
    { key: "overview", label: "Overview" },
    { key: "process", label: "The Process" },
    { key: "intent", label: "Design Intent" },
    { key: "erasure", label: "Erasure" },
    { key: "legacy", label: "Legacy" }
  ];

  const processItems = [
    "Something of the negro's history",
    "Education of the race",
    "Effects of education upon illiteracy",
    "Effects of education upon occupation",
    "Effects of education upon property",
    "Mental development — books, pamphlets, newspapers written by the race",
    "Mechanical genius — patents granted to American negroes",
    "Business and industrial development",
    "What the negro is doing for himself through his own church organizations",
    "A general sociological study of racial conditions in the United States"
  ];

  const chartCaptions = [
    "78,139 Negroes in Cities of over 10,000 inhabitants / 8,025 Negroes in Cities from 5,000 to 10,000 / 37,699 Negroes in Cities from 2,500 to 5,000 / 734,952 Negroes living in the country and villages",
    "Assessed value of household and kitchen furniture owned by Georgia Negroes (1875–1899).",
    "Slaves and Free Negroes in the United States (1790–1870).",
    "Income and expenditure by 150 Negro families in Atlanta, Georgia, by income bracket.",
    "Occupations of Negroes and Whites in Georgia.",
    "Race Amalgamation in Georgia."
  ];

  const chartTabs = [
    "City & Rural",
    "Home & Kitchen",
    "Slaves & Free",
    "Income & Spend",
    "Occupations",
    "Race Mix"
  ];

  const forkItems = [
    {
      name: "ISOTYPE",
      url: "https://en.wikipedia.org/wiki/Isotype_(picture_language)",
      meta: "Otto Neurath • 1920s",
      description:
        "Visual language for universal communication. Neurath was a sociologist too — same mission, different continent."
    },
    {
      name: "Bauhaus Information Design",
      url: "https://www.getty.edu/research/exhibitions_events/exhibitions/bauhaus/new_artist/history/",
      meta: "Moholy–Nagy, Gropius • 1919–1933",
      description:
        "The school known for blending science and art and leading the charge for modernism. Du Bois had inadvertently pioneered this practice 20 years prior under sociology."
    },
    {
      name: "VTC Du Bois Type Family",
      url: "https://www.vocaltype.co/history-of/du-bois",
      meta: "Tre Seals • 2020",
      description:
        "Influenced by civil rights activism, Tre’s studio Vocal Type unified Du Bois’ work as a digital typeface."
    }
  ];

  const contributorItems = [
    { name: "W.E.B. Du Bois", role: "Lead • Sociologist • Designer" },
    { name: "Thomas J. Calloway", role: "Special Agent • Exhibit Commissioner" },
    {
      name: "Atlanta University Students",
      role: "Design • Research",
      note: "led by William Andrew Rogers"
    },
    {
      name: "Booker T. Washington",
      role: "Advocate • Secured President McKinley’s support"
    }
  ];

  const commitRecordItems = [
    { label: "Exhibition", value: "Exposition Universelle, Paris 1900" },
    { label: "Venue", value: "Palace of Social Economy" },
    { label: "Date", value: "April 15 — November 12, 1900" },
    { label: "Archive", value: "Library of Congress, Lot 11931" },
    { label: "Awards", value: "Grand Prize + Gold Medals" },
    { label: "Visitors", value: "50,000,000+" }
  ];

  const sourceItems = [
    "Library of Congress",
    "W.E.B. Du Bois's Data Portraits (2018)",
    "Cooper Hewitt: Deconstructing Power",
    "Nightingale / Jason Forrest",
    "Du Bois, Autobiography"
  ];

  const chartTechniques = [
    {
      label: "DU BOIS SPIRAL",
      description:
        "A wrapped bar chart that coils disproportionate data into a spiral, making extreme ratios viscerally apparent."
    },
    {
      label: "GROWTH SPIRAL",
      description:
        "A spiral form that makes compounding growth legible at a glance without flattening scale."
    },
    {
      label: "AREA ARGUMENT",
      description:
        "Area charts used as proof — the weight of the shape makes disparities felt, not just read."
    },
    {
      label: "ECONOMIC BARS",
      description:
        "Stacked bars for household budgets that make spending priorities visible across income levels."
    },
    {
      label: "COMPARATIVE FAN",
      description:
        "Side-by-side radial charts with identical structure to make structural disparity immediate."
    },
    {
      label: "SINGLE BAR",
      description:
        "A single, brutal bar to quantify violence embedded in ancestry."
    }
  ];

  const sectionStyles = {
    shell: "bg-white border border-[#d0d7de] rounded-none overflow-hidden mb-6",
    header: "border-b border-[#d0d7de] px-4 py-3 flex items-center justify-between bg-[#f6f8fa]",
    title: "text-sm font-semibold text-[#1f2328]",
    mutedTitle: "text-xs font-semibold text-[#57606a] uppercase tracking-wide",
    subtitle: "text-[#57606a] text-xs mt-1",
    body: "p-4"
  };

  const processChecklist = [
    `December 1899 — April 1900: Du Bois and Atlanta University students built ${commit.stats.charts} charts by hand.`,
    `Two series: ${commit.work.series[0]} and ${commit.work.series[1]}.`,
    `Materials: ${commit.work.materials}.`,
    `Displayed at ${commit.work.venue} (${commit.work.displayed}).`,
    `Archived at ${commit.work.location}.`
  ];

  const getLocImageUrl = (locId) => {
    if (!locId) return null;
    const [, id] = locId.split(".");
    if (!id) return null;
    const bucket = `${id.slice(0, 3)}00`;
    return `https://tile.loc.gov/storage-services/service/pnp/ppmsca/${bucket}/${id}r.jpg`;
  };

  const buildDefaultShareText = (origin) => {
    return `I'm running W.E.B. Du Bois' Data Portraits (1900) — he helped shape how we use data visualization today.\n\nBlack is in everything. Scan your bio: @${origin}\n\n#gitBlack`;
  };

  const extractChannelTerms = (data) => {
    const channels =
      data?.channels ??
      data?.result?.channels ??
      data?.data?.channels ??
      [];
    if (!Array.isArray(channels)) return [];

    return channels
      .flatMap((channel) => [
        channel?.id,
        channel?.name,
        channel?.url
      ])
      .filter((value) => typeof value === "string")
      .map((value) => value.toLowerCase());
  };

  const getYearFromDate = (value) => {
    if (!value) return null;
    const match = String(value).match(/\b(18|19|20)\d{2}\b/);
    return match ? match[0] : null;
  };

  const buildShareTextForMatch = (match, origin) => {
    const year =
      getYearFromDate(match?.commit?.patent?.granted) ||
      getYearFromDate(match?.commit?.patent?.filed);
    const yearLabel = year ? ` (${year})` : "";
    const reason =
      match?.reason ||
      "Black innovation built the tools we use to visualize the world.";
    return `I'm running ${match.commit.inventor.name}${yearLabel} — ${reason}\n\nBlack is in everything. Scan your bio: @${origin}\n\n#gitBlack`;
  };

  const activeLocUrl = getLocImageUrl(commit.charts[activeChart]?.loc);


  const handleShare = async () => {
    const shareUrl = window.location.href;
    const baseUrl = window.location.origin;
    const resolvedShareText = shareText || buildDefaultShareText(baseUrl);
    const shareData = {
      title: `gitBlack — Day ${commit.day}`,
      text: resolvedShareText,
      url: shareUrl
    };
    const warpcastIntent = `https://warpcast.com/~/compose?text=${encodeURIComponent(
      resolvedShareText
    )}&embeds[]=${encodeURIComponent(shareUrl)}`;

    try {
      const { sdk } = await import("@farcaster/miniapp-sdk");
      const inMiniApp =
        typeof sdk.isInMiniApp === "function"
          ? await sdk.isInMiniApp()
          : false;

      if (inMiniApp) {
        if (typeof sdk.actions?.composeCast === "function") {
          await sdk.actions.composeCast({
            text: resolvedShareText,
            embeds: [shareUrl]
          });
          return;
        }
        if (typeof sdk.actions?.openUrl === "function") {
          await sdk.actions.openUrl(warpcastIntent);
          return;
        }
        return;
      }
    } catch (error) {
      // Ignore and fall back to regular sharing.
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
    } catch (error) {
      // Ignore and fall back to Warpcast/clipboard.
    }

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      }
    } catch (error) {
      // Ignore copy errors to avoid blocking the UI.
    }

    window.open(warpcastIntent, "_blank", "noopener,noreferrer");
  };

  const formatDate = (value) => {
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");
    const year = value.getFullYear();
    return `${month}.${day}.${year}`;
  };

  const formatTime = (value) => {
    const hours = String(value.getHours()).padStart(2, "0");
    const minutes = String(value.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="min-h-screen bg-white text-[#1f2328] font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 border-b border-[#d0d7de] bg-white px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm">
          <div>
            <Link href="/" className={`text-2xl ${vtcDuBois.className}`}>
              gitBlack
            </Link>
            <div className="text-[#64748b]">tracing America&#39;s foundation</div>
          </div>
          <div className={`text-[#64748b] text-right ${vtcDuBois.className} font-bold`}>
            <div>{formatDate(now)}</div>
            <div>
              <span>{formatTime(now).split(":")[0]}</span>
              <span className="font-mono">:</span>
              <span>{formatTime(now).split(":")[1]}</span>
        </div>
      </div>
    </div>
      </header>

      <div className="pt-20">
        {/* Page Title */}
        <div className="border-b border-[#d0d7de] px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="text-[#1f2328] text-2xl font-mono"
              aria-label="Back"
            >
              ←
            </Link>
            <h1 className={`text-xl font-normal text-[#1f2328] ${vtcDuBois.className}`}>
              Sociology as Design
            </h1>
            <span className={`text-[#1f2328] text-xl font-normal ${vtcDuBois.className}`}>
              <span>1</span>
              <span className="font-mono">/</span>
              <span>28</span>
            </span>
          </div>
          </div>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Terminal Install Animation */}
        <div className="bg-white border border-[#d0d7de] rounded-none p-4 mb-6 font-mono text-sm">
          <div className="flex items-center gap-2 text-[#57606a] mb-2">
            <span className="text-[#6f5bd4]">$</span>
            <span>npm install data-visualization --trace-dependencies</span>
          </div>
          
          {!installed ? (
            <div className="text-[#57606a] animate-pulse">
              Resolving dependency tree...
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-[#1f883d]">✓ Found root dependency</div>
              <div className="text-[#1f2328] pl-4">
                └── <span className="text-[#0969da]">exhibit-american-negroes</span>
                <span className="text-[#57606a]">@1900.04.15</span>
              </div>
              <div className="text-[#57606a] pl-8 text-xs">
                63 charts · Paris Exposition Universelle
              </div>
            </div>
          )}
        </div>

        {installed && (
          <>
            {/* Main Commit Card */}
            <div className="bg-white border border-[#d0d7de] rounded-none overflow-hidden mb-6">
              {/* Commit Header */}
              <div className="border-b border-[#d0d7de] p-4 space-y-3">
                    <span className="inline-flex items-center bg-[#cfe2c2] text-[#1f4f1b] text-xs px-3 py-1 rounded-none font-mono w-fit">
                  active
                </span>
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold text-[#1f2328] leading-tight">
                      {commit.work.title}
                    </h1>
                  <p className="text-[#1f2328] text-sm font-mono">
                    {commit.work.subtitle}
                  </p>
                  <div className="flex flex-col gap-1 text-sm text-[#57606a] font-mono">
                      <span>{commit.work.venue}</span>
                      <span>{commit.work.displayed}</span>
                      <span>{commit.work.visitors} visitors</span>
                  </div>
                </div>
              </div>

              {/* Inventor Info */}
              <div className="border-b border-[#d0d7de] p-4 space-y-3">
                <p className="text-[#57606a] text-xs uppercase tracking-wide">Authored by</p>
                <div className="text-left">
                  <h2 className="text-2xl font-semibold text-[#1f2328]">
                    {commit.inventor.name}
                  </h2>
                  <p className="text-[#57606a] text-sm font-mono">
                    {commit.inventor.born} — {commit.inventor.died}
                  </p>
                  <p className="text-[#57606a] text-sm font-mono">
                      {commit.inventor.birthplace}
                    </p>
                  <p className="text-[#d97706] text-sm mt-2 font-mono">
                    Sociologist, Designer, Data Scientist, + MORE [Strong Multi-Hyphenate]
                    </p>
                  </div>
                <div className="-mx-4 bg-[#f6f5f1] overflow-hidden">
                  {!portraitError ? (
                    <img
                      src={commit.inventor.photoUrl}
                      alt={`${commit.inventor.name} portrait`}
                      className="block w-full h-80 object-cover"
                      loading="lazy"
                      onError={() => setPortraitError(true)}
                    />
                  ) : (
                    <div className="p-8 text-center text-[#6f5bd4] font-semibold">
                      {commit.inventor.name}
                </div>
                  )}
              </div>
                {!portraitError && commit.inventor.photoCredit && (
                  <p className="text-[11px] text-[#57606a]">
                    {commit.inventor.photoCredit}
                  </p>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 divide-x divide-[#d0d7de]">
                <div className="p-4 text-center">
                  <div className={`text-2xl font-bold text-[#1f2328] ${vtcDuBois.className}`}>
                    {commit.stats.charts}
                    </div>
                  <div className="text-xs text-[#57606a]">Charts Created</div>
                </div>
                <div className="p-4 text-center">
                  <div className={`text-2xl font-bold text-[#6f5bd4] ${vtcDuBois.className}`}>
                    {commit.stats.months}
              </div>
                  <div className="text-xs text-[#57606a]">Months to Make</div>
              </div>
                <div className="p-4 text-center">
                  <div className={`text-2xl font-bold text-[#1f883d] ${vtcDuBois.className}`}>
                    20+
                </div>
                  <div className="text-xs text-[#57606a]">Years Before Bauhaus</div>
                </div>
                <div className="p-4 text-center">
                  <div className={`text-2xl font-bold text-[#57606a] ${vtcDuBois.className}`}>
                    118
                </div>
                  <div className="text-xs text-[#57606a]">Years Forgotten</div>
                </div>
              </div>
            </div>

            {/* README */}
            <div className={sectionStyles.shell}>
              <button
                type="button"
                onClick={() => setIsReadmeOpen((open) => !open)}
                className={`${sectionStyles.header} w-full`}
              >
                <h3 className="text-sm font-mono tracking-wide text-[#1f2328]">README</h3>
                <span className="text-[#1f2328] text-lg">{isReadmeOpen ? "▾" : "▸"}</span>
              </button>
              {isReadmeOpen && (
                <>
                  <div className="border-b border-[#d0d7de] p-2 flex gap-2 overflow-x-auto bg-[#f6f8fa]">
                    {readmeTabs.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setReadmeTab(tab.key)}
                        className={`px-3 py-1.5 text-xs rounded whitespace-nowrap transition-colors font-mono uppercase tracking-wide ${
                          readmeTab === tab.key
                            ? "bg-[#c7c6ee] text-[#1f2a44]"
                            : "bg-[#eef1f2] text-[#1f2328] border border-[#d0d7de]"
                        }`}
                      >
                        {tab.label}
                      </button>
                  ))}
                </div>
                  <div className={`${sectionStyles.body} space-y-4`}>
                    {readmeTab === "overview" && (
                      <>
                        <h4 className="text-lg font-semibold text-[#1f3b53]">
                          THE TRUTH NEEDED FORM
                        </h4>
                        <div className="border border-[#1f3b53] border-b-[3px] bg-[#eef1f2] p-4 text-[#1f3b53] font-sans leading-relaxed">
                          To be black was to be subjected to lies. Statistics were ignored. Photographs were staged as mockery.
                          The dominant image of Black life was the caricature — grinning, subservient, less than human.
                          DeBois sought to break that image through data.
              </div>
                        <p className="text-[#1f3b53] font-sans leading-relaxed">
                          What W.E.B. DuBois had done with his students at Atlanta University shone a light on the
                          achievements Black Americans had made in the face of overwhelming adversity and pervasive
                          racism in the US and abroad. For 118 years, these groundbreaking diagrams were kept sealed
                          by the Library of Congress. In 2018, they were finally compiled together in a book
                          <em> W.E.B. DuBois' Data Portraits: Visualizing Black America </em>
                          and 20 graphs were displayed at Cooper Hewitt's exhibition <em>Deconstructing Power: W. E. B. Du Bois at the 1900 World's Fair</em> in 2022–2023.
                        </p>
                        <p className="text-[#1f3b53] font-sans leading-relaxed">
                          For decades, one of the founding fathers of data visualization via applied practice through
                          sociology had been lost to us. Now, with his work publicly available, we are able to map his
                          work to the greater tapestry of Information Design.
                        </p>
                      </>
                    )}
                {readmeTab === "process" && (
                  <>
                    <h4 className="text-lg font-semibold text-[#1f3b53] uppercase">
                      No printing press. No budget. No precedent.
                    </h4>
                    <div className="border border-[#1f3b53] border-b-[3px] bg-[#eef1f2] p-4 text-[#1f3b53] font-sans leading-relaxed">
                      In December 1899 — less than four months before the Paris World's Fair opened — W.E.B. Du Bois and his students at Atlanta University began.
            </div>
                    <div className="space-y-4 text-[#1f3b53] font-sans leading-relaxed">
                      <p>
                        On November 15, 1899, Thomas J. Calloway received his commission. He had five months
                        to collect, transport 3,500 miles across the ocean, and install in a foreign land an
                        exhibit that would reflect credit upon nine million people scattered over 45 states.
                      </p>
                      <p>
                        President McKinley had become interested. Booker T. Washington made a personal visit
                        on behalf of the movement. The exhibit was approved.
                      </p>
                      <p>
                        Calloway laid out ten things the Exhibit of American Negroes needed to prove:
                </p>
              </div>
                    <div className="space-y-2">
                      {processItems.map((item, index) => (
                        <div
                          key={item}
                          className={`border bg-white rounded p-3 text-[#1f3b53] font-sans ${
                            index === processItems.length - 1
                              ? "border-[#7a6a4a] border-l-4"
                              : "border-[#9aa6b2]"
                          }`}
                        >
                          <p>{item}</p>
                          {index === processItems.length - 1 && (
                            <p className="mt-4 text-[#7a6a4a] font-mono">
                              *DU BOIS TOOK ON THIS ENDEAVOR*
                            </p>
                          )}
                        </div>
                ))}
              </div>
                    <div className="space-y-4 text-[#1f3b53] font-sans leading-relaxed">
                      <p>
                        On December 28, 1899, W.E.B. Du Bois agreed to develop a sociology study of Georgia,
                        the state with the largest Black population. A Commissioner-General Peck appropriated
                        $2,500. Du Bois employed ten or twelve clerks and set in motion the machinery of a special census.
                      </p>
                      <p>
                        No printing press, no precedent, and with 4 months before the exhibit, Du Bois' team
                        just had rulers, compasses, French curves, and Philadelphia watercolors. Every letter
                        drafted by hand. Every curve reduced to angles for speed. Sixty-three charts painted
                        on cardboard — one set telling the story of Georgia, another telling the story of the
                        whole country — then shipped six weeks across the Atlantic.
                      </p>
                        </div>
                    <p className="text-[#6f5bd4] font-sans leading-relaxed">
                      What they made would predate Bauhaus by twenty years and forgotten for over a century.
                    </p>
                  </>
                )}
                {readmeTab === "intent" && (
                  <>
                    <h4 className="text-lg font-semibold text-[#1f3b53]">
                      DESIGNED WITH INTENT
                        </h4>
                    <div className="border border-[#5b5ab5] border-l-[6px] bg-[#c7c6ee] p-4 text-[#1f2a44] font-sans leading-relaxed">
                      <p>
                        "An honest, straightforward exhibit of a small nation of people, picturing their life
                        and development without apology or gloss, and above all made by themselves."
                      </p>
                      <p className="mt-2 italic">~ W.E.B. DuBois</p>
                            </div>
                    <div className="space-y-4 text-[#1f3b53] font-sans leading-relaxed">
                      <p>
                        To be Black in America is to have your existence politicized down to the letter. Every
                        gesture scrutinized. Every statistic weaponized. Every image controlled by someone else.
                      </p>
                      <p>
                        Du Bois understood: if your life is already political, your design must be too.
                      </p>
                      <p className="font-semibold">
                        So every choice was a statement.
                      </p>
                      <p>
                        Because of the cost constraint, it became very vital to reach excellence with the work
                        and by extension, the perception of black people. To do this, they made data, a core
                        language of science turn onto itself.
                      </p>
                      <p>
                        The art of information as a defiant act inadvertently set in motion visual artifacts
                        that feel like the vestige of modernism: bold colors, stripped down compositions, sans serif
                        monospace typography. Instead of bar charts, he invented new forms. The spiral that wraps
                        around itself isn't a flourish—it's the only way to make a 734,952–to–37,699 ratio hit you
                        in the chest.
                      </p>
                      <p>
                        He wasn't just presenting data. He was designing arguments that couldn't be dismissed.
                        </p>
                      </div>
                    <div className="border border-[#1f3b53] bg-[#eef1f2] p-4 text-[#1f3b53] font-sans">
                      <span className="font-semibold">And the argument was:</span> we are here, we are rising,
                      and you will see us.
                    </div>
                  </>
                )}
                {readmeTab === "erasure" && (
                  <>
                    <h4 className="text-lg font-semibold text-[#1f3b53] uppercase">
                      Denied Without Cause
                        </h4>
                    <div className="border border-[#1f3b53] border-b-[3px] bg-[#eef1f2] p-4 text-[#1f3b53] font-sans leading-relaxed">
                      The exhibit won a Grand Prize and several gold medals. Fifty million people passed
                      through the Paris Exposition.
                          </div>
                    <div className="space-y-4 text-[#1f3b53] font-sans leading-relaxed">
                      <p>
                        The charts were shipped to the Library of Congress, where they sat in storage for
                        118 years. Du Bois asked to have them returned so he could teach with them.
                      </p>
                      <p className="font-semibold">He was denied.</p>
                      <p>
                        European and American press lauded the work. So why wasn&#39;t he able to continue with
                        these artifacts?
                      </p>
                      <p>
                        Du Bois could speak about the work. He could describe the charts, reference the data,
                        retell the story of Paris. But an artifact carries weight that words cannot. A hand-drawn
                        chart, held in your hands, studied in a classroom, passed between students becomes proof.
                        Inheritance. Something that can be built upon.
                      </p>
                        </div>
                    <div className="border border-[#1f3b53] border-b-[3px] bg-[#eef1f2] p-4 text-[#1f3b53] font-sans leading-relaxed">
                      For over a century, the work existed only as memory. As oral history. As a story that
                      could be doubted, diminished, forgotten.
                        </div>
                    <div className="space-y-4 text-[#1f3b53] font-sans leading-relaxed">
                      <p>
                        In 1921, Tulsa burned. Rosewood burned. The wealth Du Bois had charted: the acres, the
                        furniture, the taxable property climbing year over year had erased in fire, political
                        violence and abject silence.
                      </p>
                      <p>
                        What if the charts had traveled? What if the international acclaim Du Bois found in Paris
                        had followed him home — or followed him forward, to London, to Accra, to the Pan-African
                        Congresses he would later convene? A visual vocabulary that crossed languages. A case for
                        Black humanity that didn&#39;t need to beg, only to show.
                      </p>
                      <p>
                        What if a generation of Black students had learned to see themselves not as a problem
                        to be studied, but as a nation with receipts?
                      </p>
                      <p>
                        What if the visual language he invented had spread through Atlanta, through Howard,
                        through every HBCU, into the hands of organizers and economists and artists — two decades
                        before Bauhaus gave white Europe the same ideas?
                        </p>
                      </div>
                    <div className="border border-[#1f3b53] border-b-[3px] bg-[#eef1f2] p-4 text-[#1f3b53] font-sans leading-relaxed">
                      Instead, the charts sat in a box. The growth they depicted was systematically undone.
                      And the world learned about leveraging truth through data visualization from other sources,
                      in other languages, without his name attached.
                  </div>
                    <p className="text-[#1f3b53] font-sans font-semibold">
                      You have to wonder if that was the point.
                    </p>
                  </>
                )}
                {readmeTab === "legacy" && (
                  <>
                    <h4 className="text-lg font-semibold text-[#1f3b53]">
                      THE LEGACY STARTS WITH US
                    </h4>
                    <div className="space-y-4 text-[#1f3b53] font-sans leading-relaxed">
                      <p>In 2015, the Library of Congress released the charts digitally in full.</p>
                      <p>
                        In 2018, a full book was published <em>W.E.B. DuBois&#39; Data Portraits: Visualizing Black America.</em>
                      </p>
                      <p>
                        In 2022, Cooper Hewitt displayed twenty of them in an exhibition called
                        <em> Deconstructing Power: W. E. B. Du Bois at the 1900 World&#39;s Fair.</em> The originals are too
                        fragile to touch — cardboard and watercolor, 125 years old, crumbling at the edges.
                      </p>
                      <p className="font-semibold">But they&#39;re visible now.</p>
                      <p>
                        Every dashboard. Every pitch deck. Every infographic on your timeline. Every time you
                        use a chart to make a case, to reveal a disparity, to insist on being seen — you&#39;re
                        working in a language Du Bois helped invent.
                      </p>
                      <p>
                        He didn&#39;t get to teach with it. But you&#39;re learning from it now.
                    </p>
                  </div>
                  </>
                )}
                </div>
                </>
              )}
            </div>

            {/* Selected Charts */}
            <div className={sectionStyles.shell}>
              <button
                type="button"
                onClick={() => setIsChartsOpen((open) => !open)}
                className={`${sectionStyles.header} w-full text-left`}
              >
                <div className="flex-1 text-left">
                <h3 className="text-sm font-mono tracking-wide text-[#1f2328] uppercase">
                    Selected Charts
                </h3>
                  <p className="text-[#57606a] text-xs">
                    Each visualization was a deliberate choice
                  </p>
              </div>
                <span className="text-[#1f2328] text-lg">{isChartsOpen ? "▾" : "▸"}</span>
              </button>
              {isChartsOpen && (
                <>
                  {/* Chart selector */}
                  <div className="border-b border-[#d0d7de] p-2 flex gap-2 overflow-x-auto bg-[#f6f8fa]">
                    {commit.charts.map((chart, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveChart(i)}
                        className={`px-3 py-1.5 text-xs rounded whitespace-nowrap transition-colors font-mono uppercase tracking-wide ${
                          activeChart === i
                            ? "bg-[#c7c6ee] text-[#1f2a44]"
                            : "bg-[#eef1f2] text-[#1f2328] border border-[#d0d7de]"
                        }`}
                      >
                        {chartTabs[i] ?? chart.title.split(".")[0]}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 pt-3">
                    {commit.charts[activeChart].subCharts && (
                      <div className="flex items-center justify-between mb-2 text-xs text-[#57606a]">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveSubChart((prev) =>
                              prev === 0 ? commit.charts[activeChart].subCharts.length - 1 : prev - 1
                            )
                          }
                          className="border border-[#d0d7de] px-2 py-1"
                        >
                          Prev
                        </button>
                        <span>
                          {activeSubChart + 1}/{commit.charts[activeChart].subCharts.length}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveSubChart((prev) =>
                              prev === commit.charts[activeChart].subCharts.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="border border-[#d0d7de] px-2 py-1"
                        >
                          Next
                        </button>
                  </div>
                    )}
                    <h4 className="text-lg font-semibold text-[#1f3b53]">
                      {commit.charts[activeChart].subCharts
                        ? commit.charts[activeChart].subCharts[activeSubChart].title
                        : commit.charts[activeChart].title}
                    </h4>
                    <p className="text-[#1f3b53] mt-1">
                      {commit.charts[activeChart].subCharts
                        ? commit.charts[activeChart].subCharts[activeSubChart].description
                        : commit.charts[activeChart].description}
                    </p>
                    <div className="mt-3 border border-[#d0d7de] bg-white p-3">
                      {getLocImageUrl(
                        commit.charts[activeChart].subCharts
                          ? commit.charts[activeChart].subCharts[activeSubChart].loc
                          : commit.charts[activeChart].loc
                      ) && !imageError ? (
                        <img
                          src={getLocImageUrl(
                            commit.charts[activeChart].subCharts
                              ? commit.charts[activeChart].subCharts[activeSubChart].loc
                              : commit.charts[activeChart].loc
                          )}
                          alt={
                            commit.charts[activeChart].subCharts
                              ? commit.charts[activeChart].subCharts[activeSubChart].title
                              : commit.charts[activeChart].title
                          }
                          className="w-full h-auto"
                          loading="lazy"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="text-[#57606a] text-sm">
                          LOC scan unavailable for this chart.
                </div>
                      )}
                </div>
                    <p className="text-[#57606a] text-xs mt-3">
                      Source: Library of Congress:{" "}
                      {commit.charts[activeChart].subCharts ? (
                        <a
                          href={commit.charts[activeChart].subCharts[activeSubChart].sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          {commit.charts[activeChart].subCharts[activeSubChart].loc}
                        </a>
                      ) : (
                        <a
                          href={`https://www.loc.gov/pictures/search/?q=${encodeURIComponent(
                            commit.charts[activeChart].loc
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          {commit.charts[activeChart].loc}
                        </a>
                      )}{" "}
                      ↗
                    </p>
                    <p className="text-[#57606a] text-sm mt-2">
                      Caption:{" "}
                      {commit.charts[activeChart].subCharts
                        ? commit.charts[activeChart].subCharts[activeSubChart].caption
                        : chartCaptions[activeChart]}
                    </p>
                    <div className="mt-4 border border-[#1f3b53] border-b-[3px] bg-[#eef1f2] p-4 text-[#1f3b53]">
                      <p className="text-xs font-semibold uppercase tracking-wide">Insight</p>
                      <p className="mt-2">
                        {commit.charts[activeChart].subCharts
                          ? commit.charts[activeChart].subCharts[activeSubChart].insight
                          : commit.charts[activeChart].insight}
                      </p>
              </div>
                    <div className="mt-4 border border-[#1d4ed8] border-b-[3px] bg-[#eef3ff] p-4 text-[#1d4ed8]">
                      <p className="text-xs font-semibold uppercase tracking-wide">
                        Design Technique |{" "}
                        {commit.charts[activeChart].subCharts
                          ? commit.charts[activeChart].subCharts[activeSubChart].technique.label
                          : chartTechniques[activeChart].label}
                      </p>
                      <p className="mt-2">
                        {commit.charts[activeChart].subCharts
                          ? commit.charts[activeChart].subCharts[activeSubChart].technique.description
                          : chartTechniques[activeChart].description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Dependency Tree */}
            <div className={sectionStyles.shell}>
                <button
                type="button"
                onClick={() => setIsDependencyOpen((open) => !open)}
                className={`${sectionStyles.header} w-full text-left`}
              >
                <div className="flex-1 text-left">
                  <p className="font-mono text-sm text-[#1f2328]">$ npm ls --all</p>
                  <p className="text-[#57606a] text-xs">
                    Modern tools that depend on this work
                  </p>
                  </div>
                <span className="text-[#1f2328] text-lg">{isDependencyOpen ? "▾" : "▸"}</span>
                </button>
              {isDependencyOpen && (
                <div className={sectionStyles.body}>
                  <div className="font-mono text-sm space-y-2 text-[#1f2328]">
                    <div className="text-[#0969da]">
                      exhibit-of-american-negroes@1900.04.15
                      </div>
                      {commit.forks.map((fork, i) => (
                        <div key={i} className="pl-4 flex items-center gap-2">
                        <span className="text-[#1f2328]">
                            {i === commit.forks.length - 1 ? '└──' : '├──'}
                          </span>
                        <span className="text-[#1f2328]">{fork.name}</span>
                        <span className="text-[#1f2328] text-xs">[{fork.type}]</span>
                          {fork.note && (
                          <span className="text-[#57606a] text-xs">
                              — {fork.note}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            {/* Contributors */}
            <div className={sectionStyles.shell}>
              <div className={sectionStyles.header}>
                <h3 className="font-mono text-sm tracking-wide text-[#1f2328] uppercase">
                  Contributors
                </h3>
              </div>
              <div className={sectionStyles.body}>
                <div className="divide-y divide-[#d0d7de]">
                  {contributorItems.map((contributor) => (
                    <div key={contributor.name} className="py-4">
                      <p className="text-[#0969da] text-base">{contributor.name}</p>
                      {contributor.note && (
                        <p className="text-[#57606a] text-base">{contributor.note}</p>
                      )}
                      <p className="text-[#1f2328] text-base mt-1">{contributor.role}</p>
                  </div>
                  ))}
                </div>
                  </div>
                </div>

            {/* Forks */}
            <div className={sectionStyles.shell}>
              <div className={sectionStyles.header}>
                <h3 className="font-mono text-sm tracking-wide text-[#1f2328] uppercase">
                  Forks ({forkItems.length})
                </h3>
                  </div>
              <div className={sectionStyles.body}>
                <div className="divide-y divide-[#d0d7de]">
                  {forkItems.map((fork) => (
                    <div key={fork.name} className="py-4">
                      {fork.url ? (
                        <a
                          href={fork.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#0969da] text-base underline"
                        >
                          {fork.name}
                        </a>
                      ) : (
                        <p className="text-[#0969da] text-base">{fork.name}</p>
                      )}
                      <p className="text-[#57606a] text-base">{fork.meta}</p>
                      <p className="text-[#1f2328] text-base mt-2">{fork.description}</p>
                </div>
                  ))}
                  </div>
              </div>
            </div>

            {/* Commit Record */}
            <div className={sectionStyles.shell}>
              <div className={sectionStyles.header}>
                <h3 className="font-mono text-sm tracking-wide text-[#1f2328] uppercase">
                  Commit Record
                </h3>
              </div>
              <div className={sectionStyles.body}>
                <div className="grid gap-4">
                  {commitRecordItems.map((item) => (
                    <div key={item.label} className="grid grid-cols-3 gap-4">
                      <span className="font-mono text-sm text-[#57606a] uppercase tracking-wide">
                        {item.label}
                      </span>
                      <span className="col-span-2 text-[#1f2328] text-base">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className={sectionStyles.shell}>
              <div className={sectionStyles.header}>
                <h3 className="font-mono text-sm tracking-wide text-[#1f2328] uppercase">
                Sources
              </h3>
              </div>
              <div className={`${sectionStyles.body} flex flex-col gap-3`}>
                {sourceItems.map((source, i) => (
                  <span 
                    key={source}
                    className={`inline-flex w-fit px-3 py-2 bg-[#f1f3f4] font-mono text-sm ${
                      i === 0 ? "text-[#0a3069]" : "text-[#1f2328]"
                    }`}
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>

            {/* Share + Back to Top */}
            <div className="border border-[#d0d7de] bg-[#eef1f2] px-4 py-5">
              <div className="flex items-center justify-between text-[#1f2328] font-mono uppercase">
                <button type="button" onClick={handleShare} className="text-base">
                  Share Repo
                </button>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-base underline"
                >
                  Back to Top
                </button>
              </div>
            </div>

            {/* Navigation */}
            {/*
            <div className="flex justify-end items-center mt-6 pt-6 border-t border-[#d0d7de]">
              <button className="flex items-center gap-2 text-[#57606a] hover:text-[#1f2328] transition-colors">
                <span className="text-sm">Day 2: Marie Van Brittan Brown</span>
                <span>→</span>
              </button>
            </div>
            */}
          </>
        )}
      </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#d0d7de] px-4 py-6">
        <div className="max-w-4xl mx-auto text-center text-[#57606a] text-xs">
          <p>gitBlack — 28 days of commits that built the modern world</p>
          <p className="mt-2">
            View original charts: <span className="text-[#0969da]">loc.gov/pictures/collection/anedub/</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
