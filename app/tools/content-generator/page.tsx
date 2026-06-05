'use client';

import { useState } from 'react';
import { Loader2, ChevronRight, RefreshCw, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

interface ContentResult {
  title: string;
  content: string;
  seoKeywords: string[];
  summary: string;
}

const formats = ['Blog Post', 'Social Media Thread', 'Email Newsletter', 'Product Description', 'Landing Page Copy'];
const tones = ['Professional', 'Casual', 'Humorous', 'Inspirational', 'Technical'];
const lengths = ['Short (500 words)', 'Medium (1000 words)', 'Long (2000+ words)'];

export default function ContentGenerator() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [form, setForm] = useState({ topic: '', format: 'Blog Post', tone: 'Professional', length: 'Medium (1000 words)' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ContentResult | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isLoaded) return <div className="p-8">Loading...</div>;
  if (!user) {
    router.push('/sign-in');
    return null;
  }

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const generate = async () => {
    if (!form.topic.trim()) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch('/api/agents/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setResult(await res.json());
    } catch {
      setError('Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copy = () => {
    if (result) {
      navigator.clipboard.writeText(result.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
          <ChevronRight size={16} className="rotate-180" /> Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">AI Content Generator</h1>
            <p className="text-slate-600 mt-2">Generate high-quality, SEO-optimized content in minutes for any format or topic.</p>
          </div>

          {!result ? (
            <div className="bg-white rounded-lg shadow p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Your Topic or Idea *</label>
                <textarea
                  value={form.topic}
                  onChange={(e) => set('topic', e.target.value)}
                  rows={3}
                  placeholder="e.g. The future of AI in healthcare, how to start a side business, tips for remote work..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Format</label>
                  <select value={form.format} onChange={(e) => set('format', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    {formats.map((f) => <option key={f}>{f}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Tone</label>
                  <select value={form.tone} onChange={(e) => set('tone', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    {tones.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Length</label>
                  <select value={form.length} onChange={(e) => set('length', e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    {lengths.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <button
                onClick={generate}
                disabled={!form.topic.trim() || loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? <><Loader2 size={18} className="animate-spin" /> Generating...</> : <>✨ Generate Content</>}
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{result.title}</h2>
                    <p className="text-slate-600 mt-1">{result.summary}</p>
                  </div>
                  <button
                    onClick={copy}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
                  >
                    {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
                  </button>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed">{result.content}</pre>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-slate-900 mb-2">SEO Keywords</p>
                  <div className="flex flex-wrap gap-2">
                    {result.seoKeywords.map((kw) => (
                      <span key={kw} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setResult(null)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <RefreshCw size={16} /> Generate another
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
