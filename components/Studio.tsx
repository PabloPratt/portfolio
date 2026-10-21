import { Clock, Cpu, Mail, Sparkles, TrendingUp } from 'lucide-react';

export default function Studio() {
  return (
    <section id="studio" className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.1),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
            <Sparkles size={14} />
            Hardware & Commerce Venture
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            3D Print Lab & Deal Sourcing Studio
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            A blend of precision physical manufacturing and automated retail arbitrage. We pair high-speed 3D printers with custom market scrapers that spot mispriced inventory and high-ROI opportunities in real time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: 3D Printers */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold">The Print Setup</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Bambu Lab A1 mini, with a Creality K2 Plus on the way:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <strong className="text-white">Bambu Lab A1 mini (Active):</strong> 4-filament AMS multi-color precision, rapid prototyping & artistic designs.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <strong className="text-white">Creality K2 Plus (On the way):</strong> High-speed large-format engineering prints & durable structural parts planned.
              </li>
            </ul>
          </div>

          {/* Card 2: Deal Sourcing Bots */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/20">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold">Algorithmic Reselling</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              High-ROI commerce powered by custom scraping bots:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Continuous inventory scrapers monitoring price anomalies across retail and marketplace feeds.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Automated spread calculation factoring in shipping, fees, and velocity before purchase alerts.
              </li>
            </ul>
          </div>

          {/* Card 3: Custom Commissions & Orders */}
          <div className="rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-950/30 via-slate-950/80 to-slate-950 p-6 backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 mb-4 border border-amber-500/20">
              <Clock size={24} />
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Custom Print Orders</h3>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-300 uppercase tracking-wide">
                Taking custom orders
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              We are currently taking custom print orders and prototyping requests. We work directly with you to turn your ideas or 3D files into clean physical parts.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-400 mb-3">
                Have an STL file, idea, or replacement part you need fabricated?
              </p>
              <a
                href="mailto:pablo.a.pratt@gmail.com?subject=Custom%203D%20Print%20Quote%20Request"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500 shadow-md"
              >
                <Mail size={16} />
                pablo.a.pratt@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
