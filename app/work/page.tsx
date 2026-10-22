import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { ShieldCheck, Cpu, Activity, TrendingUp } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="bg-[#06080f] text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
      <Header />
      <main id="main-content" className="bg-mesh-dark">
        {/* High-Fidelity Hero Header */}
        <section className="relative px-4 pt-16 pb-12 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="mx-auto max-w-7xl">
            {/* Top Verified Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-blue-300 mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 status-ping" />
              <span>Production Systems · 100% Verified Live · Zero Mockups</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
                  Architected for scale.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                    Proven in production.
                  </span>
                </h1>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Every platform, algorithmic model, and diagnostic utility below is an active deployment backed by real users, authentic APIs, and verified test suites. If a tool isn&apos;t fully operational, it isn&apos;t listed here.
                </p>
              </div>

              {/* Real-time Fleet HUD Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/80 border border-white/10 rounded-2xl p-4 backdrop-blur-xl shadow-2xl">
                <div className="px-3 py-1.5 border-r border-white/5">
                  <div className="text-2xl font-black text-white font-mono">16</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Live Platforms</div>
                </div>
                <div className="px-3 py-1.5 border-r border-white/5">
                  <div className="text-2xl font-black text-emerald-400 font-mono">100%</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Verified 200</div>
                </div>
                <div className="px-3 py-1.5 border-r border-white/5">
                  <div className="text-2xl font-black text-indigo-400 font-mono">1,380+</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Paid Community</div>
                </div>
                <div className="px-3 py-1.5">
                  <div className="text-2xl font-black text-amber-400 font-mono">37+</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">Unit Tests</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
      </main>
      <Footer />
    </div>
  );
}
