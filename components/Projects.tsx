import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Car,
  Database,
  ExternalLink,
  LineChart,
  Lock,
  Radio,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.13 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

type Project = {
  title: string;
  shortName: string;
  kicker: string;
  description: string;
  feynman: string;
  modules?: string[];
  audience: string;
  build: string;
  status: string;
  tags: string[];
  live: string;
  github?: string;
  icon: LucideIcon;
  accent: string;
};

type Experiment = {
  title: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  {
    title: 'Argus Cyber Intelligence',
    shortName: 'ARGUS',
    kicker: 'Unified digital sentry',
    description:
      'An all-in-one cybersecurity operations console that protects people and businesses from digital threats across multiple domains.',
    feynman:
      `Think of Argus as an automated digital security guard. Instead of jumping between five different tools, it monitors everything in one window: it identifies unrepresented local businesses that need websites, sniffs out unwanted Bluetooth tracking tags (like hidden AirTags), verifies incoming phone calls against caller-ID spoofing scams, and flags abnormal home network traffic—all using local offline AI that never transmits your private data to the cloud.`,
    modules: [
      'Lead Recon (B2B Municipal Discovery)',
      'GhostSentry (BLE Anti-Stalking Radar)',
      'Mobile Threat Observatory (Telephony SOC & STIR/SHAKEN)',
      'CitizenShield (Consumer Safety Defense)',
      'IndustryGuard (Critical Infra Threat Feeds)',
      'MotorMind (Vehicle Telemetry Sentry)',
    ],
    audience: 'Security analysts, investigators, business owners, and privacy-conscious operators.',
    build: 'Next.js 15, TypeScript, Tailwind CSS, Jest (32 tests), STIR/SHAKEN crypto engine, and local GPU Ollama inference.',
    status: 'Live Platform',
    tags: ['Cybersecurity', 'STIR/SHAKEN', 'BLE Radar', 'Local AI', 'Full Stack'],
    live: 'https://argus-delta-seven.vercel.app',
    github: 'https://github.com/PabloPratt/argus',
    icon: ShieldAlert,
    accent: 'from-slate-950 via-blue-950 to-indigo-900',
  },
  {
    title: 'MotorMind',
    shortName: 'MOTO',
    kicker: 'Universal vehicle health & diagnostics',
    description:
      'A smart, honest mechanic in your pocket for any car or truck that translates confusing sensor codes into plain English.',
    feynman:
      `When your car's "Check Engine" light turns on, mechanics often charge $150 just to read the code and quote expensive repairs you might not even need. MotorMind connects to any vehicle's standard diagnostic port to read the real raw data. It explains exactly what is happening in simple everyday words, tells you whether it's safe to keep driving, estimates fair parts and labor costs, and gives you clear DIY repair steps so you never get taken advantage of at the repair shop.`,
    audience: 'Any car or truck owner who wants honest diagnostic answers, fair repair estimates, and DIY confidence.',
    build: 'Next.js 16, TypeScript, Tailwind CSS, Vitest (31 tests), live OBD-II telemetry parser, and state inspection readiness analyzer.',
    status: 'Live Platform',
    tags: ['Vehicle Diagnostics', 'OBD-II / CAN', 'Predictive Maintenance', 'DIY Repair', 'Cost Transparency'],
    live: 'https://argus-delta-seven.vercel.app/motormind',
    github: 'https://github.com/PabloPratt/argus',
    icon: Car,
    accent: 'from-amber-950 via-orange-950 to-red-900',
  },
  {
    title: 'Shifu & Paradox Algo',
    shortName: 'SHIFU',
    kicker: 'Algorithmic trading & prop execution',
    description:
      'Automated trading execution platform and proprietary indicator suite co-developed for futures and options traders.',
    feynman:
      `Most traders lose money because of human emotion—fear, greed, and hesitating at critical moments. Shifu and Paradox Algo automate disciplined trading strategies. They analyze real-time market structure on the chart and send automated buy/sell orders directly to prop firm accounts (like Tradeify, Apex, and Topstep). The system enforces strict daily loss limits and trailing drawdowns automatically, so trades are executed with machine discipline and zero hesitation.`,
    audience: 'Futures and options traders managing funded prop firm accounts who require disciplined, automated execution.',
    build: 'TradingView Pine Script indicators, high-speed webhook execution bridge, Tradovate API, and live PnL risk-capping engine.',
    status: 'Production Platforms',
    tags: ['Algorithmic Trading', 'Futures & Options', 'Prop Firm Automation', 'Tradovate API', 'Pine Script'],
    live: 'https://shifu.trade/dashboard',
    icon: TrendingUp,
    accent: 'from-emerald-950 via-teal-950 to-cyan-900',
  },
  {
    title: 'Janus',
    shortName: 'JA',
    kicker: 'Texas business intelligence directory',
    description:
      'Lightning-fast search and lead intelligence across millions of official Texas state business registrations.',
    feynman:
      `Finding real, active companies in Texas used to mean digging through slow government databases. Janus indexes millions of official state comptroller filings into a clean, modern search engine. Sales reps, recruiters, and founders can filter businesses by city, ZIP code, industry, and registration date to find newly formed LLCs and verified decision-maker details in seconds.`,
    audience: 'Sales teams, founders, legal researchers, and local operators sourcing Texas B2B leads.',
    build: 'Next.js, TypeScript, Clerk Authentication, Stripe Billing, and Supabase PostgreSQL indexing millions of public records.',
    status: 'Live SaaS',
    tags: ['Next.js', 'PostgreSQL', 'Public Records', 'Clerk Auth', 'Stripe'],
    live: 'https://janus-eta.vercel.app',
    github: 'https://github.com/PabloPratt/Janus',
    icon: Database,
    accent: 'from-sky-950 via-blue-900 to-indigo-800',
  },
  {
    title: 'AUTONOMY',
    shortName: 'AUTO',
    kicker: 'Household financial command center',
    description:
      'A structured, deterministic financial planner that allocates every paycheck to clear debt and build savings.',
    feynman:
      `Most budgeting apps only tell you what you already spent after the money is gone. AUTONOMY works forward: the moment a paycheck arrives, it assigns every single dollar to upcoming bills, safety margins, and high-interest debt payoffs using mathematically optimal snowball and avalanche payoff schedules. It removes financial guesswork and isolates user data with enterprise-grade row-level security.`,
    audience: 'Households and individuals seeking structured, zero-anxiety debt elimination and predictable cash flow.',
    build: 'Node.js, Supabase PostgreSQL with strict Row Level Security (RLS), Edge Functions, and automated session recovery.',
    status: 'Live Platform',
    tags: ['Household Finance', 'Supabase RLS', 'Debt Avalanche', 'Edge Functions', 'Cash Flow Engine'],
    live: 'https://autonomy-wheat.vercel.app',
    github: 'https://github.com/PabloPratt/autonomy',
    icon: Wallet,
    accent: 'from-emerald-950 via-green-900 to-teal-800',
  },
  {
    title: 'Loki',
    shortName: 'LOKI',
    kicker: 'Zero-cloud digital footprint scanner',
    description:
      'A 100% private in-browser scanner that audits your historical social media posts for sensitive keywords and data exposure.',
    feynman:
      `People have years of old posts on social media that might contain forgotten personal details, phone numbers, or outdated comments. Most auditing tools ask you to upload your data to their cloud servers—which defeats the purpose of privacy. Loki runs entirely inside your own browser. You drop in your personal archive ZIP file, and your browser unpacks and scans it locally on your computer. Zero bytes ever leave your device.`,
    audience: 'Professionals, public figures, and privacy-conscious users auditing their personal historical footprint.',
    build: 'Vanilla HTML5 and JavaScript with client-side ZIP stream parsing, regex pattern matching, and zero cloud uploads.',
    status: 'Live Privacy Tool',
    tags: ['Privacy', 'Client-side', 'Zero-Cloud', 'Security Audit', 'Archive Parser'],
    live: 'https://before-you-get-cancelled.vercel.app',
    github: 'https://github.com/PabloPratt/before-you-get-cancelled',
    icon: Lock,
    accent: 'from-stone-950 via-amber-950 to-neutral-900',
  },
  {
    title: 'DOOOD',
    shortName: 'DO',
    kicker: 'Distraction-free book completion tool',
    description:
      'A structured writing workspace that breaks rough drafts into milestones and keeps authors moving forward.',
    feynman:
      `Starting a book is easy; finishing one is where most writers get stuck. DOOOD (Day One Or One Day) takes your rough manuscript, automatically detects chapters, flags character name spelling inconsistencies, and creates a realistic chapter-by-chapter roadmap. Everything autosaves directly into your browser's local storage with snapshot rollbacks, so you can write offline with total privacy.`,
    audience: 'Authors, novelists, and non-fiction writers who need structural accountability to finish their manuscript.',
    build: 'Vite, TypeScript, IndexedDB local-first storage, offline consistency checkers, and Word (.docx) / Markdown exports.',
    status: 'Live Tool',
    tags: ['Authoring', 'IndexedDB', 'Local-first', 'Writing UX', 'Markdown Export'],
    live: 'https://doood-claude.vercel.app',
    github: 'https://github.com/PabloPratt/doood-claude',
    icon: BookOpen,
    accent: 'from-zinc-950 via-stone-900 to-amber-900',
  },
];

const experiments: Experiment[] = [
  {
    title: '3D Print Lab & Deal Sourcing',
    description: 'Creality K2 Plus & Bambu Lab A1 mini print farm paired with automated inventory arbitrage scrapers.',
    href: '/about#studio',
  },
  {
    title: 'Media & Press Coverage',
    description: 'National and broadcast reporting across USA TODAY, Telemundo 52, Fox 7 Austin, and CBS Austin.',
    href: '/about#press',
  },
  {
    title: 'ATX Services Scout',
    description: 'Central Texas directory comparing local mechanics, cleaners, and plumbers without sponsored placement.',
    href: 'https://atx-services-scout.vercel.app',
  },
  {
    title: 'Resume Scorer',
    description: 'Role-fit scoring and practical gap analysis for sales and technical resumes.',
    href: '/tools/resume-scorer',
  },
  {
    title: 'Cold Email Generator',
    description: 'Structured outbound sales draft generator for prospecting and multi-touch follow-up.',
    href: '/tools/cold-email',
  },
  {
    title: 'All Tools & Experiments',
    description: 'Browse the broader library of developer, security, and writing utilities.',
    href: '/tools',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Production Work</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">Real software built for real problems.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Every project here represents real code, active users, and verified data. If a tool isn't fully functional or ready for public use, we don't list it here.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-[0.85fr_1.3fr]">
                  <div className={`relative min-h-64 bg-gradient-to-br ${project.accent} p-8 text-white flex flex-col justify-between`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.1),transparent_30%)]" />
                    <div className="relative">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                          {project.status}
                        </span>
                        <span className="text-sm font-mono font-bold text-white/70">0{index + 1}</span>
                      </div>
                      <div className="mt-8 mb-6 flex h-20 w-20 items-center justify-center rounded-xl border border-white/20 bg-black/20 shadow-2xl backdrop-blur">
                        <Icon size={36} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{project.kicker}</p>
                      <h3 className="mt-2 text-3xl font-black tracking-tight">{project.title}</h3>
                    </div>

                    {project.modules && (
                      <div className="relative mt-6 pt-4 border-t border-white/15">
                        <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Integrated Modules:</p>
                        <div className="grid grid-cols-1 gap-1 text-xs text-white/90">
                          {project.modules.map((m) => (
                            <div key={m} className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                              <span>{m}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xl font-bold leading-snug text-slate-950">{project.description}</p>

                      {/* Feynman Principle Explanation Box */}
                      <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50/60 p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1.5 flex items-center gap-1.5">
                          <Sparkles size={14} />
                          How it works in plain English
                        </p>
                        <p className="text-sm leading-6 text-slate-800">{project.feynman}</p>
                      </div>

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
                          <div className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                            <ShieldCheck size={14} />
                            Who It's For
                          </div>
                          <p className="text-xs leading-5 text-slate-700">{project.audience}</p>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
                          <div className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                            <BrainCircuit size={14} />
                            How It's Built
                          </div>
                          <p className="text-xs leading-5 text-slate-700">{project.build}</p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700 shadow-sm"
                        aria-label={`Open ${project.title} live site`}
                      >
                        <ExternalLink size={16} />
                        Launch Platform
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800 shadow-sm"
                          aria-label={`Open ${project.title} source code`}
                        >
                          <GithubIcon size={16} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Experiments and Complementary Ventures */}
        <div className="mt-16 border-t border-slate-200 pt-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Venture Lab & Experiments</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Physical labs, media coverage, and specialized tools.</h3>
            </div>
            <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
              Browse all tools
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {experiments.map((experiment) => (
              <Link
                key={experiment.title}
                href={experiment.href}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700">
                    <Wrench size={18} />
                  </div>
                  <h4 className="text-base font-black text-slate-950">{experiment.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{experiment.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                  <span>Explore</span>
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
