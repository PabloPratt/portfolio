'use client';

import { useState } from 'react';
import { Loader2, ChevronRight, RefreshCw, Target, Shield } from 'lucide-react';
import Link from 'next/link';

interface CompetitorResult {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  marketPosition: string;
  recommendations: string[];
  summary: string;
}

export default function CompetitorAnalyzer() {
  const [yourProduct, setYourProduct] = useState('');
  const [competitors, setCompetitors] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CompetitorResult | null>(null);
  const [error, setError] = useState('');

  const analyze = async () => {
    if (!yourProduct.trim() || !competitors.trim()) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch('/api/agents/competitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ yourProduct, competitors }),
      });
      if (!res.ok) throw new Error();
      setResult(await res.json());
    } catch {
      setError('Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <main id="main-content" className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
            <ChevronRight size={16} className="rotate-180" /> Back to Tools
          </Link>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">SWOT Analysis</h2>
              <p className="text-slate-600 mb-4">{result.summary}</p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Market Position</p>
                <p className="text-slate-700 mt-2">{result.marketPosition}</p>
              </div>
            </div>

            {/* SWOT Grid */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <h3 className="font-semibold text-green-900 mb-3">Strengths</h3>
                <ul className="space-y-2">
                  {result.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-semibold text-red-900 mb-3">Weaknesses</h3>
                <ul className="space-y-2">
                  {result.weaknesses.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h3 className="font-semibold text-blue-900 mb-3">Opportunities</h3>
                <ul className="space-y-2">
                  {result.opportunities.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                <h3 className="font-semibold text-yellow-900 mb-3">Threats</h3>
                <ul className="space-y-2">
                  {result.threats.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-3">Recommendations</h3>
              <ol className="space-y-2">
                {result.recommendations.map((r, i) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{r}</span>
                  </li>
                ))}
              </ol>
            </div>

            <button
              onClick={() => setResult(null)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <RefreshCw size={16} /> Analyze another
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
          <ChevronRight size={16} className="rotate-180" /> Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Competitor Analyzer</h1>
            <p className="text-slate-600 mt-2">Get AI-powered SWOT analysis to understand your competitive position.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Your Product/Service *</label>
              <textarea
                value={yourProduct}
                onChange={(e) => setYourProduct(e.target.value)}
                rows={3}
                placeholder="Describe your product, features, and unique selling points..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Main Competitors *</label>
              <textarea
                value={competitors}
                onChange={(e) => setCompetitors(e.target.value)}
                rows={3}
                placeholder="Name your top 3-5 competitors and their key features..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              onClick={analyze}
              disabled={!yourProduct.trim() || !competitors.trim() || loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
            >
              {loading ? <><Loader2 size={18} className="animate-spin" /> Analyzing...</> : <><Target size={18} /> Analyze Competition</>}
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
