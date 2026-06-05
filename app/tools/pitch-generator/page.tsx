'use client';

import { useState } from 'react';
import { Loader2, ChevronRight, Copy, Check } from 'lucide-react';
import Link from 'next/link';

interface PitchResult {
  slides: Array<{ title: string; content: string }>;
  hook: string;
  closing: string;
  timeline: string;
  keyMetrics: string[];
  summary: string;
}

export default function PitchGenerator() {
  const [form, setForm] = useState({
    companyName: '',
    problem: '',
    solution: '',
    market: '',
    fundingAsk: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PitchResult | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const generate = async () => {
    if (!form.companyName.trim() || !form.problem.trim()) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch('/api/agents/pitch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setResult(await res.json());
    } catch {
      setError('Generation failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    const allText = [result.hook, result.summary, ...result.slides.map(s => s.content), result.closing].join('\n\n');

    return (
      <main id="main-content" className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
            <ChevronRight size={16} className="rotate-180" /> Back to Tools
          </Link>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Pitch Deck: {form.companyName}</h2>
                  <p className="text-slate-600 mt-2">{result.summary}</p>
                </div>
                <button
                  onClick={() => { navigator.clipboard.writeText(allText); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded"
                >
                  {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy All</>}
                </button>
              </div>

              {/* Hook */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-slate-900 mb-2">Opening Hook</p>
                <p className="text-slate-800 italic">"{result.hook}"</p>
              </div>

              {/* Slides */}
              <div className="space-y-4 mb-6">
                {result.slides.map((slide, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-2">Slide {i + 1}: {slide.title}</p>
                    <p className="text-slate-700 text-sm whitespace-pre-wrap">{slide.content}</p>
                  </div>
                ))}
              </div>

              {/* Closing */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-slate-900 mb-2">Closing Statement</p>
                <p className="text-slate-800">{result.closing}</p>
              </div>

              {/* Key Metrics */}
              <div>
                <p className="font-semibold text-slate-900 mb-3">Key Metrics to Emphasize</p>
                <div className="flex flex-wrap gap-2">
                  {result.keyMetrics.map((m) => (
                    <span key={m} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setResult(null)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Generate another pitch
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
            <h1 className="text-4xl font-bold text-slate-900">Pitch Deck Generator</h1>
            <p className="text-slate-600 mt-2">AI-powered pitch deck outlines ready to present to investors.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-8 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Company Name *</label>
                <input value={form.companyName} onChange={(e) => set('companyName', e.target.value)} placeholder="YourStartup" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Funding Ask *</label>
                <input value={form.fundingAsk} onChange={(e) => set('fundingAsk', e.target.value)} placeholder="$2M Series A" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-1">Problem *</label>
              <textarea value={form.problem} onChange={(e) => set('problem', e.target.value)} rows={2} placeholder="What problem does your company solve?" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-1">Solution</label>
              <textarea value={form.solution} onChange={(e) => set('solution', e.target.value)} rows={2} placeholder="How do you solve it differently?" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-1">Target Market</label>
              <textarea value={form.market} onChange={(e) => set('market', e.target.value)} rows={2} placeholder="Who is your target customer?" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <button
              onClick={generate}
              disabled={!form.companyName.trim() || !form.problem.trim() || loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <><Loader2 size={18} className="animate-spin" /> Generating...</> : <>✨ Generate Pitch Deck</>}
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
