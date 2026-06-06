import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  status?: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Janus',
    description: 'Texas business intelligence & privacy SaaS. Search 3M+ TX businesses by ZIP, city, county. AI chat-powered lead generation + registered agent service.',
    tags: ['Next.js 16', 'TypeScript', 'Clerk', 'Stripe', 'Supabase'],
    live: 'https://janus-eta.vercel.app',
    github: 'https://github.com/PabloPratt/Janus',
    featured: true,
  },
  {
    id: 2,
    title: 'Obsidian Flow',
    description: 'CLI trading dashboard and price screener for monitoring crypto and stocks. Real-time price updates, technical analysis, and custom alerts.',
    tags: ['Node.js', 'CLI', 'TypeScript', 'Dashboard', 'Trading Tools'],
    live: 'https://obsidian-flow-three.vercel.app',
    github: 'https://github.com/PabloPratt/obsidian-flow',
    featured: true,
  },
  {
    id: 3,
    title: 'ATX Services Scout',
    description: 'Austin services comparison app for mechanics, cleaners, lawn care, plumbers, and electricians. Tracks known prices, quote-required providers, source notes, manual updates, and outreach queues without relying on paid data APIs.',
    tags: ['JavaScript', 'Vercel', 'Local Data', 'Search UX', 'Price Research', 'Service Marketplace'],
    live: 'https://atx-services-scout.vercel.app',
    github: 'https://github.com/PabloPratt/atx-services-scout',
    featured: true,
  },
  {
    id: 4,
    title: 'DOOOD',
    description: 'Day One Or One Day. An AI-powered book completion platform that turns an idea into a blueprint, writing quests, chapter milestones, and a finish-the-book dashboard.',
    tags: ['Next.js 16', 'Gemini API', 'Writing UX', 'Gamification', 'Publishing'],
    status: 'Coming soon',
    featured: true,
  },
  {
    id: 5,
    title: 'EMDR-BLS',
    description: 'Bilateral stimulation therapy tool for EMDR using moving dots, audio tones, and imagery. Includes bilateral pacing timer and multiple visual modes.',
    tags: ['Next.js 16', 'React', 'Web Audio API', 'Canvas', 'Accessibility'],
    live: 'https://emdr-bls.vercel.app',
    github: 'https://github.com/PabloPratt/emdr-bls',
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured Projects</h2>
            <p className="text-lg text-slate-600">A selection of applications I've built from concept to production.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  {project.status && (
                    <span className="inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
                      {project.status}
                    </span>
                  )}
                  <p className="text-slate-600 flex-1">{project.description}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon size={18} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {otherProjects.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Other Projects</h3>
              <div className="space-y-4">
                {otherProjects.map((project) => (
                  <article
                    key={project.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 p-6 flex items-start justify-between gap-4"
                  >
                    <div className="flex-1 space-y-3">
                      <h4 className="text-xl font-bold text-slate-900">{project.title}</h4>
                      <p className="text-slate-600">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon size={18} />
                          Code
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
