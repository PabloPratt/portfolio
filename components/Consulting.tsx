export default function Consulting() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">Consulting</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Contract work for messy problems that need a clear head.
          </h1>
          <p className="mt-6 leading-8 text-slate-300">
            I take on focused consulting and contract work when a team needs someone who can think across sales, product, data, and execution without making the process heavier than it needs to be.
          </p>

          <div className="mt-8 space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Good Fit</p>
            <div className="space-y-3 text-slate-200">
              <p><span className="font-semibold text-white">Product / workflow</span> - turn a rough idea into something people can actually use</p>
              <p><span className="font-semibold text-white">Sales / positioning</span> - sharpen a pitch, workflow, or customer story</p>
              <p><span className="font-semibold text-white">Data / dashboards</span> - make noisy information readable and actionable</p>
              <p><span className="font-semibold text-white">Prototype rescue</span> - simplify, prioritize, and get a stuck project moving</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {[
            {
              title: 'Short, focused engagements',
              text: 'Best for teams that need a clear outcome, a practical plan, and someone who can get hands-on quickly.',
            },
            {
              title: 'Cross-functional perspective',
              text: 'Sales, security, product, and business context all matter. I tend to work best where those overlap.',
            },
            {
              title: 'Deliverables first',
              text: 'I like the work to end with something usable: a flow, a deck, a dashboard, a spec, or a clearer decision.',
            },
            {
              title: 'Human pacing',
              text: 'No performance theater. Just direct communication and steady movement toward a finished thing.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
