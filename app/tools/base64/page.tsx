'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function Base64Converter() {
  const [text, setText] = useState('');
  const [encoded, setEncoded] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const handleEncode = (input: string) => {
    setText(input);
    if (input) {
      try {
        setEncoded(btoa(input));
      } catch {
        setEncoded('Error: Invalid input');
      }
    } else {
      setEncoded('');
    }
  };

  const handleDecode = (input: string) => {
    setEncoded(input);
    if (input) {
      try {
        setText(atob(input));
      } catch {
        setText('Error: Invalid Base64');
      }
    } else {
      setText('');
    }
  };

  const handleCopy = (value: string, type: string) => {
    navigator.clipboard.writeText(value);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Base64 Encoder/Decoder</h1>
            <p className="text-slate-600 mt-2">Instantly encode and decode Base64 strings.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Plain Text */}
            <div className="space-y-4">
              <label htmlFor="plain-text" className="block text-sm font-semibold text-slate-900">
                Plain Text
              </label>
              <textarea
                id="plain-text"
                value={text}
                onChange={(e) => handleEncode(e.target.value)}
                placeholder="Enter text to encode..."
                className="w-full h-64 p-4 border border-slate-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {text && (
                <button
                  onClick={() => handleCopy(text, 'text')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
                >
                  {copied === 'text' ? <Check size={16} /> : <Copy size={16} />}
                  {copied === 'text' ? 'Copied!' : 'Copy Text'}
                </button>
              )}
            </div>

            {/* Base64 */}
            <div className="space-y-4">
              <label htmlFor="base64-text" className="block text-sm font-semibold text-slate-900">
                Base64 Encoded
              </label>
              <textarea
                id="base64-text"
                value={encoded}
                onChange={(e) => handleDecode(e.target.value)}
                placeholder="Base64 will appear here..."
                className="w-full h-64 p-4 border border-slate-300 rounded-lg font-mono text-sm break-all focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {encoded && !encoded.startsWith('Error') && (
                <button
                  onClick={() => handleCopy(encoded, 'encoded')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
                >
                  {copied === 'encoded' ? <Check size={16} /> : <Copy size={16} />}
                  {copied === 'encoded' ? 'Copied!' : 'Copy Base64'}
                </button>
              )}
            </div>
          </div>

          {/* Quick Examples */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Try It</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: 'Hello World', value: 'Hello World' },
                { label: 'API Key', value: 'sk_live_abc123xyz' },
                { label: 'JSON', value: '{"name":"Pablo"}' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleEncode(item.value)}
                  className="text-left p-3 bg-white hover:bg-blue-100 rounded transition-colors"
                >
                  <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                  <p className="text-xs text-slate-600 mt-1 truncate">{item.value}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
