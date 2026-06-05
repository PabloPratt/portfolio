'use client';

import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState('');
  const [date, setDate] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (timestamp) {
      const ts = parseInt(timestamp);
      if (!isNaN(ts)) {
        const d = new Date(ts * 1000);
        setDate(d.toISOString());
      }
    }
  }, [timestamp]);

  useEffect(() => {
    if (date) {
      try {
        const d = new Date(date);
        const ts = Math.floor(d.getTime() / 1000);
        setTimestamp(ts.toString());
      } catch {
        setTimestamp('');
      }
    }
  }, [date]);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const now = Math.floor(Date.now() / 1000);

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Unix Timestamp Converter</h1>
            <p className="text-slate-600 mt-2">Convert between epoch timestamps and human-readable dates.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Timestamp Input */}
            <div className="bg-white rounded-lg shadow p-6 space-y-4">
              <label htmlFor="timestamp" className="block text-sm font-semibold text-slate-900">
                Unix Timestamp (seconds)
              </label>
              <input
                id="timestamp"
                type="text"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                placeholder="1609459200"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => setTimestamp(now.toString())}
                className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded transition-colors text-sm"
              >
                Use Current Time
              </button>
              {timestamp && (
                <button
                  onClick={() => handleCopy(timestamp, 'ts')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
                >
                  {copied === 'ts' ? <Check size={16} /> : <Copy size={16} />}
                  {copied === 'ts' ? 'Copied!' : 'Copy Timestamp'}
                </button>
              )}
            </div>

            {/* Date Input */}
            <div className="bg-white rounded-lg shadow p-6 space-y-4">
              <label htmlFor="date" className="block text-sm font-semibold text-slate-900">
                ISO 8601 Date
              </label>
              <input
                id="date"
                type="datetime-local"
                value={date.slice(0, 16)}
                onChange={(e) => {
                  if (e.target.value) {
                    setDate(new Date(e.target.value).toISOString());
                  }
                }}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => setDate(new Date().toISOString())}
                className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded transition-colors text-sm"
              >
                Set to Now
              </button>
              {date && (
                <button
                  onClick={() => handleCopy(date, 'date')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
                >
                  {copied === 'date' ? <Check size={16} /> : <Copy size={16} />}
                  {copied === 'date' ? 'Copied!' : 'Copy Date'}
                </button>
              )}
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Quick Reference</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: 'Unix Epoch', ts: '0' },
                { label: 'Current Time', ts: now.toString() },
                { label: '1 Hour Ago', ts: (now - 3600).toString() },
                { label: 'Tomorrow', ts: (now + 86400).toString() },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => setTimestamp(item.ts)}
                  className="text-left p-3 bg-white hover:bg-blue-100 rounded transition-colors"
                >
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-600 font-mono">{item.ts}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
