'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const formatJson = (text: string) => {
    try {
      setError('');
      if (!text.trim()) {
        setOutput('');
        return;
      }
      const parsed = JSON.parse(text);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON');
      setOutput('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">JSON Formatter</h1>
            <p className="text-slate-600 mt-2">Paste your JSON to validate and format it beautifully.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Input */}
            <div className="space-y-4">
              <label htmlFor="json-input" className="block text-sm font-semibold text-slate-900">
                Paste JSON Here
              </label>
              <textarea
                id="json-input"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  formatJson(e.target.value);
                }}
                placeholder='{"key": "value"}'
                className="w-full h-96 p-4 border border-slate-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-describedby="input-help"
              />
              <p id="input-help" className="text-xs text-slate-500">
                Paste any JSON and it will be formatted instantly.
              </p>
            </div>

            {/* Output */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="json-output" className="block text-sm font-semibold text-slate-900">
                  Formatted Output
                </label>
                {output && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                    aria-label="Copy formatted JSON"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </div>

              {error ? (
                <div
                  className="w-full h-96 p-4 border-2 border-red-300 bg-red-50 rounded-lg font-mono text-sm text-red-700 overflow-auto flex items-center justify-center"
                  role="alert"
                >
                  <div className="text-center">
                    <p className="font-semibold">Invalid JSON</p>
                    <p className="text-sm mt-2">{error}</p>
                  </div>
                </div>
              ) : (
                <textarea
                  id="json-output"
                  value={output}
                  readOnly
                  className="w-full h-96 p-4 border border-slate-300 rounded-lg font-mono text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  aria-label="Formatted JSON output"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
