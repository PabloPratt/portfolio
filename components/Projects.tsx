'use client';

import { useState } from 'react';

import { ExternalLink, Lock, Search, Sparkles, Database, Wallet, BookOpen, Wrench } from 'lucide-react';
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
    id: 'janus',
    title: 'Janus Business Intelligence',
    shortName: 'JANUS',
    category: 'Business Intel & SaaS',
    kicker: 'Texas state business registration search engine',
    description:
      'Search and lead research using Texas business filings.',
    feynman:
      'Finding real, active companies in Texas used to mean digging through slow government databases. Janus brings state comptroller filings into a clean, modern search engine. Sales reps, recruiters, and founders can filter businesses by city, ZIP code, industry, and registration date to find newly formed LLCs and verified decision-maker details in seconds.',
    audience: 'Sales teams, founders, legal researchers, and local operators sourcing Texas B2B leads.',
    build: 'Next.js, TypeScript, Clerk Authentication, Stripe Billing, and Supabase PostgreSQL for public records.',
    status: 'Project link',
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
    status: 'Project link',
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
    title: 'Loki',
    shortName: 'LOKI',
    category: 'Security & Telecom',
    kicker: 'Zero-cloud digital footprint scanner',
    description:
      'A 100% private in-browser scanner that audits your historical social media posts for sensitive keywords and data exposure.',
    feynman:
      'People have years of old posts on social media that might contain forgotten personal details, phone numbers, or outdated comments. Most auditing tools ask you to upload your data to their cloud servers—which defeats the purpose of privacy. Loki runs entirely inside your own browser. You drop in your personal archive ZIP file, and your browser unpacks and scans it locally on your computer. Zero bytes ever leave your device.',
    audience: 'Professionals, public figures, and privacy-conscious users auditing their personal historical footprint.',
    build: 'Vanilla HTML5 and JavaScript with client-side ZIP stream parsing, regex pattern matching, and zero cloud uploads.',
    status: 'Project link',
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
    status: 'Project link',
    tags: ['Authoring', 'IndexedDB', 'Local-first', 'Writing UX', 'Markdown Export'],
    live: 'https://doood-claude.vercel.app',
    github: null,
    isPrivate: true,
    repoLabel: 'Local-First Authoring Suite',
    icon: BookOpen,
    accent: 'from-zinc-500 to-amber-600',
  },


];

const categories = ['All Systems', ...new Set(projects.map((project) => project.category))];

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

        {/* SECTION 2: ADDITIONAL VERIFIED PRODUCTION PLATFORMS */}
        {filteredProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-6 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-emerald-400">
                Software Projects
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => {
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

      </div>
    </section>
  );
}
