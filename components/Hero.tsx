import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero-workspace.png"
          alt="Developer workspace with dashboards"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">Builder Portfolio</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">Pablo Pratt</h1>
            <p className="max-w-3xl text-xl text-slate-300 sm:text-2xl">
              Sales leader, builder, and security graduate
            </p>
            <p className="max-w-3xl text-lg text-slate-400">
              UT Austin M.S. in Information Security & Privacy, dual B.A.s in International Relations & Global Studies and Finance, Computer Science minor, fluent English/Spanish, and five years at Dell
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-8 sm:flex-row">
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-600"
            >
              Contact
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-12 sm:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-blue-400">237%</p>
              <p className="text-slate-400">Peak Quota Attainment</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">7.5K+</p>
              <p className="text-slate-400">ERG Members Led</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">EN/ES</p>
              <p className="text-slate-400">Fluent bilingual, native Spanish speaker</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">Jan 2027</p>
              <p className="text-slate-400">IE dual MBA / analytics start</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
