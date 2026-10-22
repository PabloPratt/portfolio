'use client';

import { useState } from 'react';
import { Loader2, Copy, Check, ChevronRight, Mail, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface EmailResult {
  subject: string;
  email: string;
  followUpSubject: string;
  followUp: string;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="flex items-center gap-1 px-3 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
      aria-label="Copy to clipboard"
    >
      {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
    </button>
  );
}

export default function ColdEmailGenerator() {
  const [form, setForm] = useState({ senderName: '', senderRole: '', targetName: '', targetCompany: '', targetRole: '', value: '', cta: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EmailResult | null>(null);
  const [error, setError] = useState('');

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const generate = async () => {
    if (!form.senderName || !form.value) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch('/api/agents/cold-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setResult(await res.json());
    } catch {
      setError('Failed to generate. Try again.');
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
            <h1 className="text-4xl font-bold text-slate-900">AI Cold Email Generator</h1>
            <p className="text-slate-600 mt-2">Generate personalized, high-converting cold outreach emails with a follow-up sequence.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Your Name *</label>
                <input value={form.senderName} onChange={(e) => set('senderName', e.target.value)} placeholder="Pablo Pratt" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Your Role</label>
                <input value={form.senderRole} onChange={(e) => set('senderRole', e.target.value)} placeholder="Full Stack Developer" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Recipient Name</label>
                <input value={form.targetName} onChange={(e) => set('targetName', e.target.value)} placeholder="Jane Smith" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Recipient Company</label>
                <input value={form.targetCompany} onChange={(e) => set('targetCompany', e.target.value)} placeholder="Acme Corp" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Recipient Role</label>
                <input value={form.targetRole} onChange={(e) => set('targetRole', e.target.value)} placeholder="Head of Engineering" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Call to Action</label>
                <input value={form.cta} onChange={(e) => set('cta', e.target.value)} placeholder="15-minute intro call" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-1">Value Proposition *</label>
              <textarea value={form.value} onChange={(e) => set('value', e.target.value)} rows={3} placeholder="What specific value can you offer them? e.g. I built a similar product that reduced customer churn by 30%..." className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <button onClick={generate} disabled={!form.senderName || !form.value || loading} className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors">
              {loading ? <><Loader2 size={18} className="animate-spin" /> Generating...</> : <><Mail size={18} /> Generate Email + Follow-up</>}
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>

          {result && (
            <div className="space-y-6" aria-live="polite">
              {/* Primary Email */}
              <div className="bg-white rounded-lg shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Initial Email</h2>
                  <CopyButton text={`Subject: ${result.subject}\n\n${result.email}`} />
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1">Subject Line</p>
                  <p className="font-semibold text-slate-900">{result.subject}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <pre className="whitespace-pre-wrap text-sm text-slate-800 font-sans leading-relaxed">{result.email}</pre>
                </div>
              </div>

              {/* Follow-up Email */}
              <div className="bg-white rounded-lg shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Follow-up Email <span className="text-sm font-normal text-slate-500">(send after 7 days)</span></h2>
                  <CopyButton text={`Subject: ${result.followUpSubject}\n\n${result.followUp}`} />
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1">Subject Line</p>
                  <p className="font-semibold text-slate-900">{result.followUpSubject}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <pre className="whitespace-pre-wrap text-sm text-slate-800 font-sans leading-relaxed">{result.followUp}</pre>
                </div>
              </div>

              <button onClick={() => setResult(null)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <RefreshCw size={16} /> Generate another
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
