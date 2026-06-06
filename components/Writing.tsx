export default function Writing() {
  const featured = [
    {
      title: 'Gen Z is facing the biggest student loan shakeup in 20 years',
      source: 'USA Today',
      href: 'https://www.usatoday.com/story/life/health-wellness/2025/09/03/gen-z-student-loan-financial-anxiety-stress/85724653007/',
      note: 'A profile on student debt, family pressure, and how policy changes are affecting your day-to-day life.',
    },
    {
      title: 'Consumer Reports: Student loan delinquency and default',
      source: 'WISN',
      href: 'https://www.wisn.com/article/consumer-reports-student-loan-delinquency-and-default/70406067',
      note: 'A consumer finance segment that uses your situation to explain how borrowers can avoid falling behind.',
    },
  ];

  const mentions = [
    {
      title: 'Alumni Highlight: Pablo Pratt',
      source: 'Young Invincibles',
      href: 'https://younginvincibles.org/2023/07/10/alumni-highlight-pablo-pratt/',
      note: 'A profile tied to your advocacy background, coalition work, and Young Invincibles leadership.',
    },
    {
      title: 'Alumni Perspectives',
      source: 'UT Austin',
      href: 'https://liberalarts.utexas.edu/irg/beyond-the-classroom/alumni-perspectives.html',
      note: 'A UT alumni profile that connects your academic background to your career and public service work.',
    },
    {
      title: 'TNOYS at the Texas Capitol',
      source: 'TNOYS',
      href: 'https://tnoys.org/tnoys-at-the-texas-capitol-highlights-from-march/',
      note: 'A public mention connected to your Texas Emerging Leaders Board work and youth advocacy.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Writing</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">Selected articles and public mentions.</h1>
            <p className="mt-5 leading-8 text-slate-600">
              This is the clean place for the pieces that matter: a few strong summaries, a few public profiles, and nothing that feels like filler.
            </p>
            <img
              src="https://images.unsplash.com/photo-1516321310764-8d8b6d5f5f7b?auto=format&fit=crop&w=1200&q=80"
              alt="Desk with writing tools"
              className="mt-8 h-72 w-full rounded-lg object-cover shadow-md"
            />
          </div>

          <div className="grid gap-5">
            {featured.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg border bg-stone-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${index === 0 ? 'border-blue-300 ring-1 ring-blue-100' : 'border-slate-200'}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{item.source}</p>
                <h2 className="mt-2 text-xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.note}</p>
              </a>
            ))}

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Selected mentions</p>
              <div className="mt-4 grid gap-4">
                {mentions.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-slate-200 bg-white p-4 transition hover:border-blue-500 hover:bg-blue-50"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{item.source}</p>
                    <h3 className="mt-1 text-lg font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
