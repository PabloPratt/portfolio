'use client';

import { useState } from 'react';
import { Loader2, ChevronRight, CheckCircle, XCircle, AlertCircle, FileText, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface ResumeResult {
  score: number;
  matchLevel: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  strengths: string[];
  gaps: string[];
  suggestions: string[];
  keywords: { found: string[]; missing: string[] };
  summary: string;
}

const matchColors = {
  Excellent: 'bg-green-100 text-green-800 border-green-300',
  Good: 'bg-blue-100 text-blue-800 border-blue-300',
  Fair: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  Poor: 'bg-red-100 text-red-800 border-red-300',
};

const scoreColor = (s: number) => s >= 70 ? 'text-green-600' : s >= 50 ? 'text-yellow-600' : 'text-red-600';
const scoreRing = (s: number) => s >= 70 ? 'stroke-green-500' : s >= 50 ? 'stroke-yellow-500' : 'stroke-red-500';

function ScoreCircle({ score }: { score: number }) {
  const r = 54, circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="140" height="140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} strokeWidth="10" fill="none" className="stroke-slate-200" />
        <circle cx="70" cy="70" r={r} strokeWidth="10" fill="none" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" className={`transition-all duration-700 ${scoreRing(score)}`} />
      </svg>
      <div className="absolute text-center">
        <p className={`text-3xl font-bold ${scoreColor(score)}`}>{score}</p>
        <p className="text-xs text-slate-500">/ 100</p>
      </div>
    </div>
  );
}

export default function ResumeScorer() {
  const [resume, setResume] = useState('');
  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResumeResult | null>(null);
  const [error, setError] = useState('');

  const analyze = async () => {
    if (!resume.trim() || !job.trim()) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch('/api/agents/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, jobDescription: job }),
      });
      if (!res.ok) throw new Error();
      setResult(await res.json());
    } catch {
      setError('Analysis failed. Please try again.');
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
            <h1 className="text-4xl font-bold text-slate-900">AI Resume Scorer</h1>
            <p className="text-slate-600 mt-2">Paste your resume and a job description. Get an instant AI score, gap analysis, and specific improvement suggestions.</p>
          </div>

          {!result ? (
            <div className="space-y-5">
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-slate-900 mb-2">Your Resume *</label>
                  <textarea id="resume" value={resume} onChange={(e) => setResume(e.target.value)} rows={18} placeholder="Paste your full resume text here..." className="w-full p-4 border border-slate-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label htmlFor="job" className="block text-sm font-semibold text-slate-900 mb-2">Job Description *</label>
                  <textarea id="job" value={job} onChange={(e) => setJob(e.target.value)} rows={18} placeholder="Paste the job description here..." className="w-full p-4 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
              </div>
              <button onClick={analyze} disabled={!resume.trim() || !job.trim() || loading} className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Analyzing resume...</> : <><FileText size={18} /> Analyze My Resume</>}
              </button>
              {error && <p className="text-red-600 text-sm flex items-center gap-1"><AlertCircle size={14} />{error}</p>}
            </div>
          ) : (
            <div className="space-y-6" aria-live="polite">
              {/* Score */}
              <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-center gap-6">
                <ScoreCircle score={result.score} />
                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-slate-900">Resume Match Score</h2>
                  <span className={`inline-block px-4 py-1 rounded-full border font-semibold text-sm ${matchColors[result.matchLevel]}`}>{result.matchLevel} Match</span>
                  <p className="text-slate-600">{result.summary}</p>
                </div>
              </div>

              {/* Strengths + Gaps */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-green-50 border border-green-200 rounded-lg p-5 space-y-3">
                  <div className="flex items-center gap-2"><CheckCircle size={20} className="text-green-600" /><h3 className="font-semibold text-slate-900">Strengths</h3></div>
                  <ul className="space-y-2">
                    {result.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-5 space-y-3">
                  <div className="flex items-center gap-2"><XCircle size={20} className="text-red-600" /><h3 className="font-semibold text-slate-900">Gaps</h3></div>
                  <ul className="space-y-2">
                    {result.gaps.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />{g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Keywords */}
              <div className="bg-white rounded-lg shadow p-5 space-y-4">
                <h3 className="font-semibold text-slate-900">Keyword Analysis</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-2">FOUND IN RESUME</p>
                    <div className="flex flex-wrap gap-2">
                      {result.keywords.found.map((k) => <span key={k} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{k}</span>)}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-700 mb-2">MISSING — ADD THESE</p>
                    <div className="flex flex-wrap gap-2">
                      {result.keywords.missing.map((k) => <span key={k} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">{k}</span>)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 space-y-3">
                <h3 className="font-semibold text-slate-900">How to Improve</h3>
                <ol className="space-y-2">
                  {result.suggestions.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                      <span className="pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <button onClick={() => setResult(null)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <RefreshCw size={16} /> Analyze another resume
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
