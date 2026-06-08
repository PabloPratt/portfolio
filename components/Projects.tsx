import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Database,
  ExternalLink,
  LineChart,
  Search,
  ShieldCheck,
  Timer,
  Trophy,
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
  audience: string;
  build: string;
  status: string;
  dataNote?: string;
  tags: string[];
  live: string;
  github: string;
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
    title: 'Janus',
    shortName: 'JA',
    kicker: 'Texas business intelligence',
    description:
      'Business search and lead intelligence for Texas companies, including ZIP, city, county, registered agent, and privacy-focused workflow support.',
    audience: 'Founders, operators, and sales teams researching Texas businesses.',
    build:
      'Built with Next.js, TypeScript, Clerk, Stripe, and Supabase around a multi-million-record business dataset.',
    status: 'Live SaaS',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Clerk', 'Stripe'],
    live: 'https://janus-eta.vercel.app',
    github: 'https://github.com/PabloPratt/Janus',
    icon: Database,
    accent: 'from-sky-900 via-blue-800 to-cyan-700',
  },
  {
    title: 'DOOOD',
    shortName: 'DO',
    kicker: 'Book completion platform',
    description:
      'Day One Or One Day helps writers turn a book idea or rough manuscript into a blueprint, chapters, quests, milestones, and a finish-the-book dashboard.',
    audience: 'Authors who have started a book and need structure to finish it.',
    build:
      'Local-first MVP with import flows, project storage, chapter/page/line editing modes, and optional blueprint generation.',
    status: 'Live MVP',
    tags: ['Next.js', 'Writing UX', 'Local Storage', 'AI Optional'],
    live: 'https://doood-xi.vercel.app',
    github: 'https://github.com/PabloPratt/doood',
    icon: BookOpen,
    accent: 'from-zinc-950 via-stone-800 to-amber-700',
  },
  {
    title: 'ATX Services Scout',
    shortName: 'ATX',
    kicker: 'Austin services comparison',
    description:
      'Comparison app for mechanics, cleaners, lawn care, plumbers, and electricians, with public price tracking, quote-required flags, and manual research workflows.',
    audience: 'Austin residents comparing everyday service providers without paid data feeds.',
    build:
      'Built around transparent source notes, local service categories, search filters, and a path to Supabase-backed provider data.',
    status: 'Live MVP',
    tags: ['Vercel', 'Search UX', 'Manual Data', 'Local Services'],
    live: 'https://atx-services-scout.vercel.app',
    github: 'https://github.com/PabloPratt/atx-services-scout',
    icon: Search,
    accent: 'from-emerald-950 via-teal-800 to-lime-700',
  },
  {
    title: 'Contest Finder',
    shortName: 'AMOE',
    kicker: 'AMOE sweepstakes finder',
    description:
      'World Cup promotional contest finder that surfaces sweepstakes with AMOE no-purchase entry paths, entry deadlines, prize details, and mail-in or online requirements.',
    audience: 'People looking for legitimate no-purchase AMOE sweepstakes opportunities and clean entry instructions.',
    build:
      'Built with Next.js, structured contest records, filtering, AMOE verification fields, application tracking, and agent-assisted rule analysis.',
    status: 'Live MVP',
    dataNote:
      'Contest rules can change, so entries should be verified against official rules before submitting anything.',
    tags: ['Next.js', 'AMOE', 'Sweepstakes', 'Rules UX', 'Database'],
    live: 'https://contest-finder-self.vercel.app',
    github: 'https://github.com/PabloPratt/AMOE-Contest-Finder',
    icon: Trophy,
    accent: 'from-amber-950 via-orange-800 to-yellow-600',
  },
  {
    title: 'Obsidian Flow',
    shortName: 'OF',
    kicker: 'Options trading lab',
    description:
      'Options trading dashboard for scanning contracts, tracking spotlight picks, and comparing market signals in an options-first workspace.',
    audience: 'Personal options traders who want a focused scanner and accountability layer.',
    build:
      'Prototype terminal with watchlists, filters, staged orders, spotlight tracking, provider status, and streaming-ready architecture.',
    status: 'Prototype',
    dataNote:
      'Currently uses no-key prototype data with a path toward OPRA-backed feeds through Alpaca, Tradier, Massive/Polygon, or Unusual Whales.',
    tags: ['Options', 'Trading UI', 'Yahoo Fallback', 'Provider Ready'],
    live: 'https://obsidian-flow-lab.vercel.app',
    github: 'https://github.com/PabloPratt/obsidian-flow',
    icon: LineChart,
    accent: 'from-neutral-950 via-red-950 to-amber-700',
  },
  {
    title: 'EMDR-BLS',
    shortName: 'BLS',
    kicker: 'Bilateral stimulation tool',
    description:
      'Browser-based bilateral stimulation tool with moving visual targets, pacing controls, audio cues, session timing, and multiple visual modes.',
    audience: 'People who need a configurable bilateral stimulation timer and visual pacing tool.',
    build:
      'Built with React, Web Audio, Canvas-style motion patterns, accessible controls, and session configuration.',
    status: 'Live tool',
    tags: ['React', 'Web Audio', 'Motion UI', 'Accessibility'],
    live: 'https://emdr-bls.vercel.app',
    github: 'https://github.com/PabloPratt/emdr-bls',
    icon: Timer,
    accent: 'from-indigo-950 via-violet-800 to-fuchsia-700',
  },
];

const experiments: Experiment[] = [
  {
    title: 'Resume Scorer',
    description: 'Role-fit scoring and gap notes for sales resumes.',
    href: '/tools/resume-scorer',
  },
  {
    title: 'Cold Email Generator',
    description: 'Outbound draft generator for follow-up and prospecting motion.',
    href: '/tools/cold-email',
  },
  {
    title: 'Business Idea Validator',
    description: 'Lightweight viability, competitor, and market-shape checks.',
    href: '/tools/business-validator',
  },
  {
    title: 'Pitch Deck Generator',
    description: 'Investor-style structure and talking points from a rough idea.',
    href: '/tools/pitch-generator',
  },
  {
    title: 'Competitor Analyzer',
    description: 'Positioning comparison for early market research.',
    href: '/tools/competitor-analyzer',
  },
  {
    title: 'All Experiments',
    description: 'Developer, nonprofit, security, and writing utilities.',
    href: '/tools',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Selected work</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">The projects worth clicking first.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            These are the strongest live builds: real workflows, deployed products, clear technical surfaces, and honest notes where a product is still a prototype.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.25fr]">
                  <div className={`relative min-h-64 bg-gradient-to-br ${project.accent} p-6 text-white`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_26%)]" />
                    <div className="relative flex h-full min-h-52 flex-col justify-between">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                          {project.status}
                        </span>
                        <span className="text-sm font-bold text-white/70">0{index + 1}</span>
                      </div>
                      <div>
                        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-lg border border-white/20 bg-black/20 shadow-2xl backdrop-blur">
                          <Icon size={34} />
                        </div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">{project.kicker}</p>
                        <h3 className="mt-2 text-4xl font-black tracking-tight">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-xl font-bold leading-8 text-slate-950">{project.description}</p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
                          <ShieldCheck size={16} />
                          User
                        </div>
                        <p className="text-sm leading-6 text-slate-700">{project.audience}</p>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
                          <BrainCircuit size={16} />
                          Build
                        </div>
                        <p className="text-sm leading-6 text-slate-700">{project.build}</p>
                      </div>
                    </div>

                    {project.dataNote && (
                      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                        <span className="font-bold">Data note:</span> {project.dataNote}
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-bold text-white transition hover:bg-blue-700"
                        aria-label={`Open ${project.title} live site`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 font-bold text-white transition hover:bg-slate-700"
                        aria-label={`Open ${project.title} source code`}
                      >
                        <GithubIcon size={18} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Experiments</p>
              <h3 className="mt-2 text-3xl font-black text-slate-950">Smaller tools and work in progress.</h3>
            </div>
            <Link href="/tools" className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900">
              Browse all experiments
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {experiments.map((experiment) => (
              <Link
                key={experiment.title}
                href={experiment.href}
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <Wrench size={20} />
                </div>
                <h4 className="text-lg font-black text-slate-950">{experiment.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{experiment.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
