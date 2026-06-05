'use client';

import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle, TrendingUp, Target, Shield, ArrowRight, BarChart2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ValidationResult {
  viabilityScore: number;
  marketSize: string;
  verdict: 'Strong' | 'Moderate' | 'Weak';
  competitors: string[];
  uniqueAdvantages: string[];
  risks: string[];
  nextSteps: string[];
  summary: string;
}

const verdictColors = {
  Strong: 'bg-green-100 text-green-800 border-green-300',
  Moderate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  Weak: 'bg-red-100 text-red-800 border-red-300',
};

const scoreColor = (score: number) =>
  score >= 70 ? 'text-green-600' : score >= 40 ? 'text-yellow-600' : 'text-red-600';

const scoreRing = (score: number) =>
  score >= 70 ? 'stroke-green-500' : score >= 40 ? 'stroke-yellow-500' : 'stroke-red-500';

function ScoreCircle({ score }: { score: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="140" height="140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} strokeWidth="10" fill="none" className="stroke-slate-200" />
        <circle
          cx="70" cy="70" r={r} strokeWidth="10" fill="none"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round"
          className={`transition-all duration-700 ${scoreRing(score)}`}
        />
      </svg>
      <div className="absolute text-center">
        <p className={`text-3xl font-bold ${scoreColor(score)}`}>{score}</p>
        <p className="text-xs text-slate-500">/ 100</p>
      </div>
    </div>
  );
}

export default function BusinessValidator() {
  const [idea, setIdea] = useState('');
  const [market, setMarket] = useState('');
  const [monetization, setMonetization] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [error, setError] = useState('');

  const validate = async () => {
    if (!idea.trim() || !market.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/agents/business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea, market, monetization }),
      });
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setResult(data);
    } catch {
      setError('Failed to analyze. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
          <ChevronRight size={16} className="rotate-180" /> Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">AI Business Idea Validator</h1>
            <p className="text-slate-600 mt-2">Get an instant AI-powered analysis of your business idea — market size, competitors, risks, and actionable next steps.</p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow p-6 space-y-5">
            <div>
              <label htmlFor="idea" className="block text-sm font-semibold text-slate-900 mb-2">Business Idea *</label>
              <textarea
                id="idea"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g. A SaaS platform that helps freelancers automatically track billable hours using AI..."
                rows={3}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="market" className="block text-sm font-semibold text-slate-900 mb-2">Target Market *</label>
              <input
                id="market"
                type="text"
                value={market}
                onChange={(e) => setMarket(e.target.value)}
                placeholder="e.g. Freelance developers and designers in North America"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="monetization" className="block text-sm font-semibold text-slate-900 mb-2">Monetization Strategy</label>
              <select
                id="monetization"
                value={monetization}
                onChange={(e) => setMonetization(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select a model...</option>
                <option>SaaS Subscription</option>
                <option>Marketplace / Commission</option>
                <option>Freemium</option>
                <option>One-time Purchase</option>
                <option>Advertising</option>
                <option>Consulting / Services</option>
                <option>API / Usage-based</option>
              </select>
            </div>

            <button
              onClick={validate}
              disabled={!idea.trim() || !market.trim() || loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
            >
              {loading ? <><Loader2 size={18} className="animate-spin" /> Analyzing...</> : <><TrendingUp size={18} /> Validate My Idea</>}
            </button>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm" role="alert">
                <AlertCircle size={16} /> {error}
              </div>
            )}
          </div>

          {/* Results */}
          {result && (
            <div className="space-y-6" aria-live="polite">
              {/* Score + Verdict */}
              <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-center gap-6">
                <ScoreCircle score={result.viabilityScore} />
                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-slate-900">Viability Score</h2>
                  <span className={`inline-block px-4 py-1 rounded-full border font-semibold text-sm ${verdictColors[result.verdict]}`}>
                    {result.verdict} Opportunity
                  </span>
                  <p className="text-slate-600">{result.summary}</p>
                </div>
              </div>

              {/* Market Size */}
              <div className="bg-white rounded-lg shadow p-5 flex items-start gap-4">
                <BarChart2 size={24} className="text-blue-600 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Market Size</p>
                  <p className="text-slate-600 mt-1">{result.marketSize}</p>
                </div>
              </div>

              {/* Competitors */}
              <div className="bg-white rounded-lg shadow p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-blue-600" />
                  <h3 className="font-semibold text-slate-900">Key Competitors</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.competitors.map((c) => (
                    <span key={c} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">{c}</span>
                  ))}
                </div>
              </div>

              {/* Advantages vs Risks */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-green-50 border border-green-200 rounded-lg p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <h3 className="font-semibold text-slate-900">Unique Advantages</h3>
                  </div>
                  <ul className="space-y-2">
                    {result.uniqueAdvantages.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield size={20} className="text-red-600" />
                    <h3 className="font-semibold text-slate-900">Key Risks</h3>
                  </div>
                  <ul className="space-y-2">
                    {result.risks.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 space-y-3">
                <h3 className="font-semibold text-slate-900">Next Steps</h3>
                <ol className="space-y-2">
                  {result.nextSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <button
                onClick={() => { setResult(null); setIdea(''); setMarket(''); setMonetization(''); }}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <ArrowRight size={16} className="rotate-180" /> Validate another idea
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
