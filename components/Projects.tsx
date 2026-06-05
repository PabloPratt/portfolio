import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
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
    title: 'Earnings Radar Lite',
    description: 'Market watchlist filtering upcoming earnings by signal strength, surprise history, and guidance risk. Search, sort, and compare upcoming vs. past results.',
    tags: ['Vanilla JS', 'HTML5', 'Responsive', 'Real-time Data'],
    live: 'https://pablopratt.github.io/earnings-radar-lite/',
    github: 'https://github.com/PabloPratt/earnings-radar-lite',
    featured: true,
  },
  {
    id: 3,
    title: 'EMDR-BLS',
    description: 'Bilateral Stimulation therapy tool for EMDR using moving dots, audio tones, and imagery. Includes bilateral pacing timer and multiple visual modes.',
    tags: ['Next.js 16', 'React', 'Web Audio API', 'Canvas', 'Accessibility'],
    live: 'https://emdr-bls.vercel.app',
    github: 'https://github.com/PabloPratt/emdr-bls',
    featured: true,
  },
  {
    id: 4,
    title: 'Rate My Manager',
    description: 'Anonymous review platform for manager accountability. Search by manager, company, or department. View ratings, compensation, and detailed feedback.',
    tags: ['Firebase', 'JavaScript', 'Responsive Design', 'Anonymous'],
    live: 'https://pablopratt.github.io/RateMyManager/',
    github: 'https://github.com/PabloPratt/RateMyManager',
    featured: true,
  },
  {
    id: 5,
    title: 'Obsidian Flow',
    description: 'Stock market analytics dashboard. Real-time price updates, technical analysis, earnings tracking, and custom alerts for stocks and crypto.',
    tags: ['Next.js', 'React', 'API Integration', 'Dashboard'],
    live: 'https://obsidian-flow-production.up.railway.app',
    github: 'https://github.com/PabloPratt/obsidian-flow',
    featured: false,
  },
  {
    id: 6,
    title: 'Civic Search Dashboard',
    description: 'Analyst UI for searching public-record signals across counties, categories, and source confidence. Prototype for civic intelligence tooling.',
    tags: ['React', 'Data Visualization', 'Public Records', 'Search'],
    live: 'https://pablopratt.github.io/civic-search-dashboard/',
    github: 'https://github.com/PabloPratt/civic-search-dashboard',
    featured: false,
  },
  {
    id: 7,
    title: 'Manager Signal Board',
    description: 'Dashboard for feedback themes, coaching priorities, and privacy-aware people analytics. Demo for HR and management workflows.',
    tags: ['React', 'Dashboard', 'Analytics', 'Data Viz'],
    live: 'https://pablopratt.github.io/manager-signal-board/',
    github: 'https://github.com/PabloPratt/manager-signal-board',
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured Projects</h2>
            <p className="text-lg text-slate-600">A selection of applications I've built from concept to production.</p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
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
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Other Projects */}
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
