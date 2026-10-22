'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  Car,
  Database,
  ExternalLink,
  Flame,
  Globe,
  HardDrive,
  Lock,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Wrench,
  Radio,
  BookOpen,
  Activity,
  Cpu,
  Layers,
  Sprout,
  Printer,
  Tv,
  CheckCircle2,
  Terminal,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.13 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

type Project = {
  id: string;
  title: string;
  shortName: string;
  category: string;
  kicker: string;
  description: string;
  feynman: string;
  modules?: string[];
  audience: string;
  build: string;
  status: string;
  tags: string[];
  live: string;
  github?: string | null;
  isPrivate?: boolean;
  repoLabel?: string;
  icon: LucideIcon;
  accent: string;
  isFeaturedHero?: boolean;
};

const projects: Project[] = [
  {
    id: 'argus',
    title: 'Argus Cyber Intelligence',
    shortName: 'ARGUS',
    category: 'Security & Telecom',
    kicker: 'Unified digital sentry',
    isFeaturedHero: true,
    description:
      'An all-in-one cybersecurity operations console that protects people and businesses from digital threats across multiple domains.',
    feynman:
      'Think of Argus as an automated digital security guard. Instead of jumping between five different tools, it monitors everything in one window: it sniffs out unwanted Bluetooth tracking tags (like hidden AirTags), verifies incoming phone calls against caller-ID spoofing scams, audits website domain security, and flags abnormal network traffic—all using local offline AI that never transmits private data to the cloud.',
    modules: [
      'GhostSentry (RF & BLE AirTag Tracker Radar)',
      'Mobile Threat Observatory (Telephony SOC & STIR/SHAKEN)',
      'CitizenShield (Consumer Privacy & k-Anonymity Hashing)',
      'IndustryGuard (Critical Infra Threat Feeds)',
      'MotorMind (Vehicle Telemetry Sentry)',
    ],
    audience: 'Security analysts, corporate investigators, business owners, and privacy-conscious operators.',
    build: 'Next.js 15, TypeScript, Jest (37 passing tests), STIR/SHAKEN crypto engine, and local GPU Ollama inference.',
    status: '200 OK Live',
    tags: ['Cybersecurity', 'STIR/SHAKEN', 'BLE Radar', 'Local AI', '37 Unit Tests'],
    live: 'https://argus-delta-seven.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Enterprise Private Repo',
    icon: ShieldAlert,
    accent: 'from-blue-600 via-indigo-600 to-cyan-500',
  },
  {
    id: 'mto',
    title: 'Mobile Threat Observatory (MTO)',
    shortName: 'MTO',
    category: 'Security & Telecom',
    kicker: 'Enterprise telephony SOC console',
    isFeaturedHero: true,
    description:
      'Enterprise mobile call-intelligence console with cryptographic PASSporT inspection, live Android 17 ADB correlation, and explainable Wangiri fraud scoring.',
    feynman:
      'Most people receive dozens of scam phone calls with fake caller IDs. MTO acts like a forensic telecom laboratory: it checks incoming calls against official cryptographic security certificates (STIR/SHAKEN RFC 8588) to prove whether the caller actually owns the number, explains in plain English why a call is risky (like neighbor spoofing or foreign toll loops), and records evidence dossiers without exposing private cell phone numbers.',
    modules: [
      'STIR/SHAKEN Cryptographic PASSporT Token Inspector',
      'Android 17 Wireless ADB Real-Time Polling Engine',
      'Explainable Wangiri Toll-Fraud Scoring Algorithm',
      'Multi-Modal Forensic Evidence Dossiers',
    ],
    audience: 'Telephony SOC analysts, telecom compliance investigators, and enterprise fleet managers.',
    build: 'Next.js 15, TypeScript, Vitest (12 passing tests), Supabase Realtime, Kali Linux tshark engine, and ADB telemetry.',
    status: '200 OK Live',
    tags: ['STIR/SHAKEN', 'Android 17 ADB', 'Kali Linux', 'Telecom SOC', 'RFC 8588'],
    live: 'https://web-sable-zeta-57.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Enterprise SOC Architecture',
    icon: Radio,
    accent: 'from-indigo-600 via-blue-600 to-sky-500',
  },
  {
    id: 'motormind',
    title: 'MotorMind Telematics',
    shortName: 'MOTO',
    category: 'Hardware & Telemetry',
    kicker: 'Universal vehicle health & diagnostics',
    isFeaturedHero: true,
    description:
      'A smart, honest mechanic in your pocket for any car or truck that translates confusing sensor codes into plain English.',
    feynman:
      'When your car\'s "Check Engine" light turns on, mechanics often charge $150 just to read the code and quote expensive repairs you might not even need. MotorMind connects to any vehicle\'s standard diagnostic port to read the real raw data. It explains exactly what is happening in simple everyday words, tells you whether it\'s safe to keep driving, estimates fair parts and labor costs, and gives you clear DIY repair steps so you never get taken advantage of at the repair shop.',
    modules: [
      'Evidence-Based 5-Step Ford F-150 Turn Signal / BCM Wizard',
      'Texas Annual Inspection (I/M) Readiness Monitor Panel',
      'Interactive FORScan BCM Solid-State FET Driver Reset Simulator',
      'Authentic FORScan CSV Log Replay Engine',
    ],
    audience: 'Any car or truck owner who wants honest diagnostic answers, fair repair estimates, and DIY confidence.',
    build: 'Next.js 16, TypeScript, Vitest (19 passing tests), OBD-II CAN bus parser, and Texas DPS readiness analyzer.',
    status: '200 OK Live',
    tags: ['Automotive CAN', 'FORScan BCM Reset', 'Texas DPS I/M', 'Predictive Diagnostics', 'Vitest 19/19'],
    live: 'https://argus-delta-seven.vercel.app#motormind',
    github: null,
    isPrivate: true,
    repoLabel: 'Proprietary Diagnostic Tool',
    icon: Car,
    accent: 'from-amber-600 via-orange-600 to-red-600',
  },
  {
    id: 'paradox',
    title: 'Paradox Algo & Shifu',
    shortName: 'PARADOX',
    category: 'Quantitative Trading',
    kicker: 'Institutional market indicators & trade execution',
    isFeaturedHero: true,
    description:
      'Proprietary indicator suite and automated trade execution bridge co-developed for futures traders, powering a paid Discord community of 1,380+ active members.',
    feynman:
      'Day trading without clear rules usually leads to emotional gambling and blown accounts. Paradox Algo visualizes institutional market structure—where large banks and funds are buying and selling—and Shifu sends automated orders directly to funded prop firm accounts (Tradeify, Apex, Topstep) in milliseconds with strict daily loss limits.',
    modules: [
      'Dynamic Institutional Liquidity & Imbalance Zones',
      'Automated Sub-100ms Tradovate Webhook Bridge',
      'Trailing Drawdown Hard-Stop Risk Guardian',
      '1,380+ Member Active Discord Community Presets',
    ],
    audience: 'Futures (ES, NQ, CL) and options traders managing funded accounts who require systematic market structure.',
    build: 'TradingView Pine Script v5, Tradovate API, Node.js webhook engine, and live drawdown risk manager.',
    status: '200 OK Live',
    tags: ['1,380+ Paid Community', 'Pine Script v5', 'Tradovate API', 'Prop Firm Automation'],
    live: 'https://paradoxalgo.com',
    github: null,
    isPrivate: true,
    repoLabel: 'Proprietary Platforms',
    icon: TrendingUp,
    accent: 'from-emerald-600 via-teal-600 to-cyan-600',
  },
  {
    id: 'prop-calc',
    title: 'Prop Firm Pass Calculator',
    shortName: 'PROPCALC',
    category: 'Quantitative Trading',
    kicker: 'Monte Carlo evaluation risk engine',
    description:
      'Monte Carlo simulation engine calculating exact statistical odds of passing futures prop firm challenges (Tradeify, Apex, Topstep) vs maximum trailing drawdown.',
    feynman:
      'Most traders guess how many contracts to trade and end up blowing their accounts on bad streaks. This calculator runs 10,000 simulated trading careers in seconds based on your win rate and risk-reward ratio, showing you the exact mathematical probability of passing the evaluation before you risk a single dollar.',
    audience: 'Prop firm evaluation traders seeking mathematically verified position sizing.',
    build: 'JavaScript, Chart.js, client-side iterative Monte Carlo simulator, and risk-of-ruin engine.',
    status: '200 OK Live',
    tags: ['Monte Carlo Simulator', 'Chart.js', 'Risk of Ruin', 'Prop Firm Sizing'],
    live: 'https://prop-eval-calculator.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Client-Side Utility',
    icon: Flame,
    accent: 'from-amber-600 to-orange-500',
  },
  {
    id: 'janus',
    title: 'Janus Business Intelligence',
    shortName: 'JANUS',
    category: 'Business Intel & SaaS',
    kicker: 'Texas state business registration search engine',
    description:
      'Lightning-fast search and lead intelligence across millions of official Texas state corporate filings.',
    feynman:
      'Finding real, active companies in Texas used to mean digging through slow government databases. Janus indexes millions of official state comptroller filings into a clean, modern search engine. Sales reps, recruiters, and founders can filter businesses by city, ZIP code, industry, and registration date to find newly formed LLCs and verified decision-maker details in seconds.',
    audience: 'Sales teams, founders, legal researchers, and local operators sourcing Texas B2B leads.',
    build: 'Next.js, TypeScript, Clerk Authentication, Stripe Billing, and Supabase PostgreSQL indexing millions of public records.',
    status: '200 OK Live',
    tags: ['Next.js', 'PostgreSQL', 'Public Records', 'Clerk Auth', 'Stripe'],
    live: 'https://janus-eta.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Private Enterprise SaaS',
    icon: Database,
    accent: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'autonomy',
    title: 'AUTONOMY',
    shortName: 'AUTO',
    category: 'Business Intel & SaaS',
    kicker: 'Household financial command center',
    description:
      'A structured, deterministic financial planner that allocates every paycheck to clear debt and build savings.',
    feynman:
      'Most budgeting apps only tell you what you already spent after the money is gone. AUTONOMY works forward: the moment a paycheck arrives, it assigns every single dollar to upcoming bills, safety margins, and high-interest debt payoffs using mathematically optimal snowball and avalanche payoff schedules. It removes financial guesswork and isolates user data with enterprise-grade row-level security.',
    audience: 'Households and individuals seeking structured, zero-anxiety debt elimination and predictable cash flow.',
    build: 'Node.js, Supabase PostgreSQL with strict Row Level Security (RLS), Edge Functions, and automated session recovery.',
    status: '200 OK Live',
    tags: ['Household Finance', 'Supabase RLS', 'Debt Avalanche', 'Edge Functions', 'Open Source'],
    live: 'https://autonomy-wheat.vercel.app',
    github: 'https://github.com/PabloPratt/autonomy',
    isPrivate: false,
    repoLabel: 'GitHub Repo (Public)',
    icon: Wallet,
    accent: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'loki',
    title: 'Loki Footprint Scanner',
    shortName: 'LOKI',
    category: 'Security & Telecom',
    kicker: 'Zero-cloud digital footprint scanner',
    description:
      'A 100% private in-browser scanner that audits your historical social media posts for sensitive keywords and data exposure.',
    feynman:
      'People have years of old posts on social media that might contain forgotten personal details, phone numbers, or outdated comments. Most auditing tools ask you to upload your data to their cloud servers—which defeats the purpose of privacy. Loki runs entirely inside your own browser. You drop in your personal archive ZIP file, and your browser unpacks and scans it locally on your computer. Zero bytes ever leave your device.',
    audience: 'Professionals, public figures, and privacy-conscious users auditing their personal historical footprint.',
    build: 'Vanilla HTML5 and JavaScript with client-side ZIP stream parsing, regex pattern matching, and zero cloud uploads.',
    status: '200 OK Live',
    tags: ['Privacy', 'Client-side', 'Zero-Cloud', 'Security Audit', 'Archive Parser'],
    live: 'https://before-you-get-cancelled.vercel.app',
    github: 'https://github.com/PabloPratt/before-you-get-cancelled',
    isPrivate: false,
    repoLabel: 'GitHub Repo (Public)',
    icon: Lock,
    accent: 'from-amber-600 to-stone-500',
  },
  {
    id: 'doood',
    title: 'DOOOD Authoring Suite',
    shortName: 'DOOOD',
    category: 'Privacy & Authoring',
    kicker: 'Distraction-free book completion workspace',
    description:
      'A structured writing workspace that breaks rough drafts into milestones and keeps authors moving forward.',
    feynman:
      'Starting a book is easy; finishing one is where most writers get stuck. DOOOD (Day One Or One Day) takes your rough manuscript, automatically detects chapters, flags character name spelling inconsistencies, and creates a realistic chapter-by-chapter roadmap. Everything autosaves directly into your browser\'s local storage with snapshot rollbacks, so you can write offline with total privacy.',
    audience: 'Authors, novelists, and non-fiction writers who need structural accountability to finish their manuscript.',
    build: 'Vite, TypeScript, IndexedDB local-first storage, offline consistency checkers, and Word (.docx) / Markdown exports.',
    status: '200 OK Live',
    tags: ['Authoring', 'IndexedDB', 'Local-first', 'Writing UX', 'Markdown Export'],
    live: 'https://doood-claude.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Local-First Authoring Suite',
    icon: BookOpen,
    accent: 'from-zinc-500 to-amber-600',
  },
  {
    id: 'pc-advisor',
    title: 'PC Upgrade Advisor',
    shortName: 'PCADV',
    category: 'Hardware & Telemetry',
    kicker: 'System hardware bottleneck & headroom analyzer',
    description:
      'System hardware upgrade feasibility calculator with live Central Texas retail inventory, micro-center pricing scrapers, power headroom checks, and bottleneck analysis.',
    feynman:
      'Upgrading a PC can be intimidating because parts might not fit, power supplies can be too weak, or an expensive new graphics card might get held back by an old processor. This tool checks your exact components, highlights bottlenecks in plain English, calculates necessary power supply wattage, and finds current local retail deals.',
    audience: 'PC gamers, creators, and professionals planning cost-effective computer upgrades.',
    build: 'Next.js, TypeScript, hardware specifications database, retail pricing scrapers, and wattage calculator.',
    status: '200 OK Live',
    tags: ['PC Hardware', 'Bottleneck Engine', 'PSU Headroom', 'Retail Scraper'],
    live: 'https://pc-upgrade-advisor.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Hardware Intelligence Platform',
    icon: Cpu,
    accent: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'iq-test',
    title: 'Four-Domain Cognitive Assessment',
    shortName: 'IQTEST',
    category: 'Cognitive & Healthcare',
    kicker: 'Standardized normative psychometric test platform',
    description:
      'Standardized psychometric assessment benchmarking Verbal, Numerical, Spatial, and Working Memory logic against standardized normative curves.',
    feynman:
      'Most online IQ tests are spam quizzes designed to collect your email and charge your credit card for a fake score. This assessment delivers real psychometric evaluation across four distinct cognitive domains—Verbal, Numerical, Spatial Patterning, and Working Memory—comparing your score against actual standardized percentile bell curves with complete score breakdowns.',
    audience: 'Students, professionals, and cognitive enthusiasts wanting a clean, honest benchmark.',
    build: 'Next.js, TypeScript, HTML5 Canvas matrix puzzles, psychometric percentile calculations, and zero paywalls.',
    status: '200 OK Live',
    tags: ['Psychometrics', 'HTML5 Canvas', 'Percentile Curves', 'Normative Logic'],
    live: 'https://iq-test-six.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Psychometric Platform',
    icon: BrainCircuit,
    accent: 'from-purple-600 to-indigo-600',
  },
  {
    id: 'emdr',
    title: 'EMDR-BLS Clinical Utility',
    shortName: 'EMDR',
    category: 'Cognitive & Healthcare',
    kicker: 'Clinical bilateral visual & audio stimulation suite',
    description:
      'Clean, accessible bilateral visual and audio stimulation tool used for EMDR trauma reprocessing therapy with custom pacing controls.',
    feynman:
      'EMDR therapy helps people process traumatic memories using alternating eye movements or sounds. Commercial light-bars and devices can cost hundreds of dollars. This web application provides a distraction-free, clinical-grade bilateral visual tracker and alternating stereo audio pacer that runs on any tablet or computer for therapists and clients.',
    audience: 'Licensed mental health counselors, EMDR therapists, and patients.',
    build: 'React, HTML5 Canvas, Web Audio API stereo panner, and sub-millisecond pacing timers.',
    status: '200 OK Live',
    tags: ['EMDR Therapy', 'Web Audio API', 'HTML5 Canvas', 'Bilateral Pacing'],
    live: 'https://emdr-bls.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Clinical Health Utility',
    icon: Globe,
    accent: 'from-teal-600 to-cyan-600',
  },
  {
    id: 'atx-scout',
    title: 'ATX Services Scout',
    shortName: 'SCOUT',
    category: 'Business Intel & SaaS',
    kicker: 'Unbiased Central Texas contractor benchmark',
    description:
      'Central Texas services comparison platform benchmarking quotes, hourly rates, and verified reviews for mechanics, plumbers, and contractors without sponsored placement.',
    feynman:
      'Review websites like Yelp and Angi often rank businesses based on who pays the most advertising dollars. ATX Services Scout is an uncorrupted directory of Austin tradespeople that benchmarks actual hourly rates, verified credentials, and real customer reviews with zero sponsored placement.',
    audience: 'Central Texas homeowners and vehicle owners seeking fair contractor pricing.',
    build: 'Next.js, TypeScript, municipal rate database, and transparent review crawler.',
    status: '200 OK Live',
    tags: ['Austin Directory', 'Unbiased Pricing', 'Next.js', 'Contractor Rates', 'Open Source'],
    live: 'https://atx-services-scout.vercel.app',
    github: 'https://github.com/PabloPratt/atx-services-scout',
    isPrivate: false,
    repoLabel: 'GitHub Repo (Public)',
    icon: Wrench,
    accent: 'from-amber-600 to-yellow-600',
  },
  {
    id: 'futures-bridge',
    title: 'Futures Algo Bridge',
    shortName: 'BRIDGE',
    category: 'Quantitative Trading',
    kicker: 'TradingView webhook payload validator',
    description:
      'Diagnostic bridge and webhook syntax checker validating TradingView automated signal payloads for Tradovate, PickMyTrade, and Apex Trader Funding.',
    feynman:
      'When configuring automated trading bots, a single missing quote or misplaced bracket in your alert message will cause the trade to fail silently at the broker. This diagnostic bridge tests and validates your webhook syntax before you go live, ensuring your trades execute seamlessly.',
    audience: 'Algorithmic traders setting up automated TradingView execution hooks.',
    build: 'TypeScript, JSON schema validator, live webhook test simulator, and multi-broker syntax presets.',
    status: '200 OK Live',
    tags: ['TradingView Webhooks', 'JSON Validator', 'Tradovate', 'PickMyTrade', 'Open Source'],
    live: 'https://futures-algo-bridge.vercel.app',
    github: 'https://github.com/PabloPratt/futures-algo-bridge',
    isPrivate: false,
    repoLabel: 'GitHub Repo (Public)',
    icon: HardDrive,
    accent: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'ratemymanager',
    title: 'RateMyManager',
    shortName: 'RMM',
    category: 'Business Intel & SaaS',
    kicker: 'Anonymous 360 workplace leadership diagnostics',
    description:
      'Anonymous workplace management evaluation and 360-degree leadership feedback platform with sentiment aggregation and team health benchmarks.',
    feynman:
      'Employees rarely give completely candid feedback to their managers because they fear retaliation. RateMyManager provides an encrypted, anonymous channel where teams can rate leadership effectiveness across clear competencies (communication, support, psychological safety) to help organizations build better leaders.',
    audience: 'Engineering managers, department heads, and HR leaders seeking honest team sentiment.',
    build: 'Next.js, TypeScript, Supabase PostgreSQL, and sentiment scoring models.',
    status: '200 OK Live',
    tags: ['Leadership Feedback', 'Anonymous Diagnostics', 'Supabase', 'Team Benchmarks'],
    live: 'https://ratemymanager-chi.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Enterprise Feedback Platform',
    icon: Layers,
    accent: 'from-indigo-600 to-purple-600',
  },
];

const categories = [
  'All Systems',
  'Security & Telecom',
  'Quantitative Trading',
  'Business Intel & SaaS',
  'Hardware & Telemetry',
  'Cognitive & Healthcare',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Systems');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === 'All Systems' || p.category === activeCategory;
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const inTitle = p.title.toLowerCase().includes(q);
    const inKicker = p.kicker.toLowerCase().includes(q);
    const inDesc = p.description.toLowerCase().includes(q);
    const inFeynman = p.feynman.toLowerCase().includes(q);
    const inTech = p.tags.some((t) => t.toLowerCase().includes(q));
    return inTitle || inKicker || inDesc || inFeynman || inTech;
  });

  const featuredProjects = filteredProjects.filter((p) => p.isFeaturedHero);
  const secondaryProjects = filteredProjects.filter((p) => !p.isFeaturedHero);

  return (
    <section id="projects" className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Floating Controls Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const count =
                cat === 'All Systems' ? projects.length : projects.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition border ${
                    isActive
                      ? 'glow-pill-active'
                      : 'border-white/10 bg-slate-950/60 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat} <span className="font-mono text-[10px] ml-1 opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search systems by problem or stack..."
              className="w-full rounded-xl border border-white/10 bg-slate-950/90 py-2 pl-9 pr-8 text-xs text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* SECTION 1: FLAGSHIP TITANS BENTO SHOWCASE (When All or matching category) */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-6 rounded-full bg-blue-500" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-blue-400">
                Flagship Deployments & Production Architecture
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project) => {
                const Icon = project.icon;

                return (
                  <article
                    key={project.id}
                    className="glass-panel rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Top ambient glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                      {/* Meta header */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className="rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[11px] font-mono font-bold text-blue-300">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 status-ping" />
                          {project.status}
                        </span>
                      </div>

                      {/* Title block */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/25 to-indigo-600/10 border border-blue-500/30 text-blue-400 shadow-inner">
                          <Icon size={28} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{project.kicker}</p>
                          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-slate-300 mb-6">
                        {project.description}
                      </p>

                      {/* Interactive Visual HUD Mockup Card based on project ID */}
                      {project.id === 'argus' && (
                        <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 mb-6 shadow-inner font-mono text-xs">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                            <span className="flex items-center gap-2 text-slate-300">
                              <ShieldCheck size={14} className="text-blue-400" />
                              <span>Argus Sentry Engine</span>
                            </span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              37 Tests Passing
                            </span>
                          </div>
                          <div className="space-y-2 text-[11px] text-slate-400">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● BLE Radar</span>
                              <span className="text-emerald-400 font-semibold">Active · 0x004c Tracker Sniffer</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● Telephony PASSporT</span>
                              <span className="text-emerald-400 font-semibold">RFC 8588 Token Decoder Verified</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● Offline Inference</span>
                              <span className="text-blue-400 font-semibold">Ollama R1 Local GPU Bridge</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'motormind' && (
                        <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 mb-6 shadow-inner font-mono text-xs">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                            <span className="flex items-center gap-2 text-slate-300">
                              <Car size={14} className="text-amber-400" />
                              <span>Live OBD-II Telemetry Stream</span>
                            </span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              19/19 Vitest
                            </span>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                            <div className="rounded-lg bg-slate-900 border border-white/5 p-2">
                              <div className="text-white font-bold text-sm">720</div>
                              <div className="text-slate-400">RPM</div>
                            </div>
                            <div className="rounded-lg bg-slate-900 border border-white/5 p-2">
                              <div className="text-white font-bold text-sm">195°F</div>
                              <div className="text-slate-400">Coolant</div>
                            </div>
                            <div className="rounded-lg bg-slate-900 border border-white/5 p-2">
                              <div className="text-white font-bold text-sm">14.2V</div>
                              <div className="text-slate-400">Battery</div>
                            </div>
                            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-2 text-emerald-400 font-bold">
                              <div className="text-sm">PASS</div>
                              <div className="text-[9px]">Texas DPS</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'paradox' && (
                        <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 mb-6 shadow-inner font-mono text-xs">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                            <span className="flex items-center gap-2 text-slate-300">
                              <TrendingUp size={14} className="text-emerald-400" />
                              <span>Tradovate / Prop Firm Execution</span>
                            </span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              1,380+ Members
                            </span>
                          </div>
                          <div className="space-y-2 text-[11px] text-slate-400">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● Webhook Latency</span>
                              <span className="text-emerald-400 font-semibold">&lt; 85ms Direct Execution</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● Prop Accounts</span>
                              <span className="text-white font-semibold">Tradeify · Apex · Topstep</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● Risk Guardian</span>
                              <span className="text-blue-400 font-semibold">Hard Trailing Drawdown Cutoff</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'mto' && (
                        <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 mb-6 shadow-inner font-mono text-xs">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                            <span className="flex items-center gap-2 text-slate-300">
                              <Radio size={14} className="text-indigo-400" />
                              <span>Telephony Cryptography & SOC</span>
                            </span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              Android 17 ADB
                            </span>
                          </div>
                          <div className="space-y-2 text-[11px] text-slate-400">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● PASSporT Verification</span>
                              <span className="text-emerald-400 font-semibold">RFC 8588 Cryptographic Valid</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● Explainable Risk</span>
                              <span className="text-amber-400 font-semibold">Wangiri Toll Fraud + Spoof Radar</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-300">● Pixel 10 Pro ADB Tap</span>
                              <span className="text-blue-400 font-semibold">960 Real Records Sanitized</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Plain English Feynman Callout */}
                      <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 p-4 mb-6">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1.5">
                          <Sparkles size={14} />
                          <span>How it works in plain English</span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-300">{project.feynman}</p>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg bg-slate-800/80 border border-slate-700/60 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Launch Bar */}
                    <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-4 relative z-10">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.02]"
                      >
                        <span>Launch Platform</span>
                        <ExternalLink size={14} />
                      </a>

                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400">
                        <Lock size={12} className="text-slate-500" />
                        <span>{project.repoLabel}</span>
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 2: ADDITIONAL VERIFIED PRODUCTION PLATFORMS */}
        {secondaryProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-6 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-emerald-400">
                Additional Production Software & Interactive Utilities
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {secondaryProjects.map((project) => {
                const Icon = project.icon;

                return (
                  <article
                    key={project.id}
                    className="glass-panel rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <span className="rounded-md bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-300">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 status-ping" />
                          {project.status}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-blue-400">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{project.kicker}</p>
                          <h4 className="text-lg font-black text-white tracking-tight leading-snug">{project.title}</h4>
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed text-slate-300 mb-4">
                        {project.description}
                      </p>

                      {/* Feynman snippet */}
                      <div className="rounded-xl border border-white/5 bg-slate-950/60 p-3 mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-1">
                          <Sparkles size={11} />
                          Plain English
                        </p>
                        <p className="text-[11px] text-slate-300 leading-relaxed">{project.feynman}</p>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-slate-900 border border-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition"
                      >
                        <span>Launch</span>
                        <ExternalLink size={12} />
                      </a>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition"
                        >
                          <GithubIcon size={13} />
                          <span>Source</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
                          <Lock size={10} className="text-slate-400" />
                          <span>{project.repoLabel}</span>
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 3: PHYSICAL LABS, AGRONOMY & MEDIA BENTO */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest font-bold text-emerald-400">
                Physical Hardware & Real Ventures
              </p>
              <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                Fabrication, local agriculture, and broadcast coverage.
              </h3>
            </div>
            <Link
              href="/about#ventures"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
            >
              <span>Explore full venture portfolio</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* 3D Print Studio */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-400">
                    Active Studio
                  </span>
                  <Printer size={20} className="text-emerald-400" />
                </div>
                <h4 className="text-lg font-black text-white">3D Print Studio (WALL-E)</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Precision Bambu Lab A1 mini with AMS multi-color capabilities (and Creality K2 Plus on order). Producing custom replacement brackets, functional fixtures, and rapid mechanical prototypes.
                </p>
              </div>
              <Link
                href="/about#studio"
                className="mt-6 inline-flex items-center justify-between text-xs font-semibold text-blue-400 hover:text-blue-300 pt-3 border-t border-white/10"
              >
                <span>Studio Specifications & Quotes</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Austin Microgreens */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-teal-500/10 border border-teal-500/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-teal-400">
                    Hyper-Local
                  </span>
                  <Sprout size={20} className="text-teal-400" />
                </div>
                <h4 className="text-lg font-black text-white">Austin Microgreens Harvest</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Living indoor agricultural operation delivering nutrient-dense sunflower, pea shoot, and broccoli microgreens to Austin culinary establishments with 40x the vitamin density of mature greens.
                </p>
              </div>
              <Link
                href="/about#ventures"
                className="mt-6 inline-flex items-center justify-between text-xs font-semibold text-teal-400 hover:text-teal-300 pt-3 border-t border-white/10"
              >
                <span>Harvest Specifications</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Broadcast Press */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-purple-500/10 border border-purple-500/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-purple-400">
                    Broadcast Record
                  </span>
                  <Tv size={20} className="text-purple-400" />
                </div>
                <h4 className="text-lg font-black text-white">Broadcast & National Press</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Featured broadcast reporting across USA TODAY, Telemundo 52, Fox 7 Austin, CBS Austin, and student loan economic policy advocacy.
                </p>
              </div>
              <a
                href="https://pablo-pratt-site.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-between text-xs font-semibold text-purple-400 hover:text-purple-300 pt-3 border-t border-white/10"
              >
                <span>View Press Clippings</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
