'use client';

import { useState } from 'react';
import { Loader2, Copy, Check, ChevronRight, DollarSign, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface InvoiceResult {
  invoiceNumber: string;
  invoiceText: string;
  summary: { subtotal: number; tax: number; total: number };
}

export default function InvoiceGenerator() {
  const [form, setForm] = useState({ clientName: '', description: '', rate: 150, hours: 10, dueDate: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InvoiceResult | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const set = (k: string, v: string | number) => setForm((f) => ({ ...f, [k]: v }));

  const generate = async () => {
    if (!form.clientName || !form.description) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch('/api/agents/invoice', {
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

  const copy = () => {
    if (result) {
      navigator.clipboard.writeText(result.invoiceText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
            <h1 className="text-4xl font-bold text-slate-900">AI Invoice Generator</h1>
            <p className="text-slate-600 mt-2">Generate professional invoices instantly with AI-formatted text ready to send.</p>
          </div>

          {!result ? (
            <div className="bg-white rounded-lg shadow p-6 space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1">Client Name *</label>
                  <input value={form.clientName} onChange={(e) => set('clientName', e.target.value)} placeholder="Acme Corp" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1">Hourly Rate ($) *</label>
                  <input type="number" value={form.rate} onChange={(e) => set('rate', parseFloat(e.target.value))} min="10" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1">Hours *</label>
                  <input type="number" value={form.hours} onChange={(e) => set('hours', parseFloat(e.target.value))} min="0.5" step="0.5" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1">Due Date</label>
                  <input type="date" value={form.dueDate} onChange={(e) => set('dueDate', e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Work Description *</label>
                <textarea value={form.description} onChange={(e) => set('description', e.target.value)} rows={4} placeholder="E.g. Full-stack web development for e-commerce platform, including API design and React frontend..." className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold">Total: </span>
                  <span className="text-lg font-bold text-blue-600">${(form.rate * form.hours).toLocaleString()}</span>
                </p>
              </div>

              <button onClick={generate} disabled={!form.clientName || !form.description || loading} className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Generating...</> : <><DollarSign size={18} /> Generate Invoice</>}
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
          ) : (
            <div className="space-y-5">
              <div className="bg-white rounded-lg shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">{result.invoiceNumber}</h2>
                  <button onClick={copy} className="flex items-center gap-1 px-3 py-1 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors">
                    {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy Invoice</>}
                  </button>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed">{result.invoiceText}</pre>
                </div>

                <div className="border-t border-slate-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Subtotal:</span>
                    <span className="font-semibold">${result.summary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Tax:</span>
                    <span className="font-semibold">${result.summary.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-slate-200">
                    <span>Total:</span>
                    <span className="text-blue-600">${result.summary.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setResult(null)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <RefreshCw size={16} /> Create another invoice
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
