export default function Now() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Now</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">What I am focused on right now.</h1>
            <p className="mt-5 leading-8 text-slate-600">
              This page is the current version of the stack, the work, and the personal stuff that does not need a full bio paragraph. I keep it here so the site feels current without making the whole home page read like a résumé.
            </p>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Desk with notebooks and coffee"
              className="mt-8 h-72 w-full rounded-lg object-cover shadow-md"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Work', 'Dell cloud service providers and data center customers. The day job is still where a lot of the real pressure lives.'],
              ['Focus', 'Building portfolio projects around market intelligence, business search, writing tools, and service comparison.'],
              ['Reading', 'A selected shelf of books about leadership, power, business, history, and human behavior.'],
              ['Builds', 'Janus, Obsidian Flow, ATX Services Scout, and the portfolio itself'],
              ['Travel', 'Photos and notes from cities, road trips, and places that stay in your head. The good trips always end up with one story worth saving.'],
              ['Personal', 'Keeping the public site honest, polished, and less like a resume. That usually means cutting whatever sounds inflated.'],
            ].map(([label, value]) => (
              <article key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
