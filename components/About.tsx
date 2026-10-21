import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Briefcase, Globe, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-stone-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Intro Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} />
            Background & Philosophy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            I build practical software and sell technology by solving real problems.
          </h1>
          <p className="text-lg leading-8 text-slate-700">
            I am a first-generation American, a native Spanish speaker, and a builder who learned business by working close to the customer. Whether selling multi-million-dollar cloud infrastructure at Dell or writing software late at night, I live by the Feynman principle: if you can't explain how something works in simple everyday words, you don't understand it well enough. No buzzwords, no empty facades, and no tech for the sake of tech.
          </p>
        </div>

        {/* Visual Story Grid */}
        <div className="grid gap-6 md:grid-cols-[1fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Engineering and development workspace"
              className="h-56 w-full rounded-xl object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Telemetry and analytics data graphs"
              className="h-56 w-full rounded-xl object-cover shadow-sm"
            />
            <div className="sm:col-span-2 rounded-xl bg-slate-900 p-6 text-white shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-1">Guiding Principle</p>
                <p className="text-base font-semibold italic text-slate-100">
                  "If you can't explain it to a six-year-old, you don't understand it yourself."
                </p>
              </div>
              <p className="text-xs text-slate-400 mt-4">— Richard Feynman</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-950">The Short Version</h2>
              <div className="mt-4 space-y-3.5 text-sm leading-6 text-slate-600">
                <p>
                  <strong>Where I come from:</strong> I started college at Austin Community College (ACC) while working odd jobs, transferred to UT Austin, completed dual B.A.s in International Relations & Finance, and earned my Master's in Information Security & Privacy.
                </p>
                <p>
                  <strong>Where I learned business:</strong> On the road as an Uber Account Executive pitching restaurant owners across Texas, then five years at Dell selling enterprise and cloud data center infrastructure, achieving 237% quota attainment and leading 7,500+ ERG members globally.
                </p>
                <p>
                  <strong>What I build now:</strong> Production software with zero fluff—from cybersecurity intelligence consoles (Argus) and universal vehicle diagnostics (MotorMind) to automated trading algorithms (Shifu & Paradox Algo) and an active 3D fabrication lab.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Austin, Texas</span>
              <a
                href="mailto:pratt3508@gmail.com"
                className="text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
              >
                pratt3508@gmail.com →
              </a>
            </div>
          </div>
        </div>

        {/* Career & Milestones Timeline */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Professional Journey */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
              <Briefcase size={20} className="text-blue-600" />
              Career & Commercial Milestones
            </h3>

            <div className="space-y-4">
              <div className="border-l-2 border-blue-600 pl-4 space-y-1">
                <p className="text-sm font-bold text-slate-900">Global Cloud & Infrastructure Sales — Dell</p>
                <p className="text-xs text-slate-500">5 Years • SLED, SMB, Enterprise & Cloud Accounts</p>
                <p className="text-xs leading-5 text-slate-600">
                  Supported Dell's largest cloud providers and data center clients. Achieved 237% peak quota attainment and three consecutive quarters at 146%. Selected into elite Technical Sales Program (Top 5%).
                </p>
              </div>

              <div className="border-l-2 border-amber-600 pl-4 space-y-1">
                <p className="text-sm font-bold text-slate-900">Global Chair — Latino Connection ERG</p>
                <p className="text-xs text-slate-500">Dell • 7,500+ Global Members</p>
                <p className="text-xs leading-5 text-slate-600">
                  Youngest sitting ERG leader in Dell's history. Represented Dell at the United Nations and co-presented with Michael Dell during a global Quarterly Business Review.
                </p>
              </div>

              <div className="border-l-2 border-emerald-600 pl-4 space-y-1">
                <p className="text-sm font-bold text-slate-900">Co-Developer — Shifu & Paradox Algo</p>
                <p className="text-xs text-slate-500">Algorithmic Trading • 1,380+ Paid Discord Community</p>
                <p className="text-xs leading-5 text-slate-600">
                  Co-developed automated execution algorithms and indicator systems bridging TradingView Pine Script alerts to Tradovate accounts with disciplined drawdown parameters, powering a private paid community of 1,380+ futures traders.
                </p>
              </div>

              <div className="border-l-2 border-cyan-600 pl-4 space-y-1">
                <p className="text-sm font-bold text-slate-900">Account Executive — Uber</p>
                <p className="text-xs text-slate-500">Field Sales & Restaurant Partnerships across Texas</p>
                <p className="text-xs leading-5 text-slate-600">
                  Drove across Texas signing local restaurants. Learned how small business operators think, cash-flow realities, and outbound prospecting from zero.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Civic Leadership */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
              <GraduationCap size={20} className="text-emerald-600" />
              Education & Civic Leadership
            </h3>

            <div className="space-y-4">
              <div className="border-l-2 border-emerald-600 pl-4 space-y-1">
                <p className="text-sm font-bold text-slate-900">The University of Texas at Austin</p>
                <p className="text-xs text-slate-500">M.S. in Information Security & Privacy</p>
                <p className="text-xs leading-5 text-slate-600">
                  Focus on cryptographic systems, data governance, regulatory compliance, and threat mitigation. Every tool built is architected security-first.
                </p>
              </div>

              <div className="border-l-2 border-blue-600 pl-4 space-y-1">
                <p className="text-sm font-bold text-slate-900">The University of Texas at Austin</p>
                <p className="text-xs text-slate-500">Dual B.A. in International Relations & Finance • Minor in Computer Science</p>
                <p className="text-xs leading-5 text-slate-600">
                  Quantitative financial modeling, global economic policy, and core algorithms.
                </p>
              </div>

              <div className="border-l-2 border-slate-400 pl-4 space-y-1">
                <p className="text-sm font-bold text-slate-900">Austin Community College (ACC)</p>
                <p className="text-xs text-slate-500">Associate of Arts, General Studies</p>
                <p className="text-xs leading-5 text-slate-600">
                  The foundation that made higher education possible. Published op-eds in national syndicates on community college affordability.
                </p>
              </div>

              <div className="border-l-2 border-purple-600 pl-4 space-y-1">
                <p className="text-sm font-bold text-slate-900">National Youth Advisory Board & Civic Boards</p>
                <p className="text-xs text-slate-500">Young Invincibles • TNOYS Texas Emerging Leaders</p>
                <p className="text-xs leading-5 text-slate-600">
                  Advocated on student loan policy, healthcare access, tenant rights, and education equity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-black text-slate-950 mb-6">How I Work</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-blue-600" />
                Security First
              </p>
              <p className="text-xs leading-5 text-slate-600">
                Master's in InfoSec means user privacy, row-level data isolation, and cryptographic integrity are non-negotiable baselines.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <TrendingUp size={16} className="text-emerald-600" />
                Commercial Realism
              </p>
              <p className="text-xs leading-5 text-slate-600">
                Enterprise sales background ensures every line of code connects to genuine user demand, unit economics, and operational ROI.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <Globe size={16} className="text-indigo-600" />
                Native Bilingual
              </p>
              <p className="text-xs leading-5 text-slate-600">
                Native fluency in Spanish and English with beginner Portuguese and Italian. Experienced presenting across international teams and diverse stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
