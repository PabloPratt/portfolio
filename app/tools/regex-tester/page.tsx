'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [text, setText] = useState('');
  const [matches, setMatches] = useState<RegExpExecArray[]>([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const testRegex = (pat: string, txt: string, flgs: string) => {
    try {
      setError('');
      if (!pat) {
        setMatches([]);
        return;
      }

      const regex = new RegExp(pat, flgs);
      const allMatches: RegExpExecArray[] = [];
      let match;

      if (flgs.includes('g')) {
        while ((match = regex.exec(txt)) !== null) {
          allMatches.push(match);
        }
      } else {
        match = regex.exec(txt);
        if (match) allMatches.push(match);
      }

      setMatches(allMatches);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid regex');
      setMatches([]);
    }
  };

  const handlePatternChange = (p: string) => {
    setPattern(p);
    testRegex(p, text, flags);
  };

  const handleTextChange = (t: string) => {
    setText(t);
    testRegex(pattern, t, flags);
  };

  const handleFlagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.checked ? flags + e.target.value : flags.replace(e.target.value, '');
    setFlags(f);
    testRegex(pattern, text, f);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`/${pattern}/${flags}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presets = [
    { label: 'Email', pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' },
    { label: 'URL', pattern: 'https?:\\/\\/[^\\s]+' },
    { label: 'Phone (US)', pattern: '\\(?\\d{3}\\)?[-\\.\\s]?\\d{3}[-\\.\\s]?\\d{4}' },
    { label: 'Hex Color', pattern: '#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})' },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Regex Tester</h1>
            <p className="text-slate-600 mt-2">Test regular expressions with live matching and results.</p>
          </div>

          {/* Pattern Input */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <div>
              <label htmlFor="pattern" className="block text-sm font-semibold text-slate-900 mb-2">
                Regex Pattern
              </label>
              <div className="flex gap-2">
                <span className="flex items-center text-slate-600">/</span>
                <input
                  id="pattern"
                  type="text"
                  value={pattern}
                  onChange={(e) => handlePatternChange(e.target.value)}
                  placeholder="Enter regex pattern..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <span className="flex items-center text-slate-600">/</span>
                <input
                  type="text"
                  value={flags}
                  readOnly
                  className="w-16 px-2 py-2 border border-slate-300 rounded-lg font-mono text-sm bg-slate-50"
                />
              </div>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </div>

            {/* Flags */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-900">Flags</p>
              <div className="flex gap-4">
                {[
                  { value: 'g', label: 'Global (g)' },
                  { value: 'i', label: 'Ignore case (i)' },
                  { value: 'm', label: 'Multiline (m)' },
                ].map((flag) => (
                  <label key={flag.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={flag.value}
                      checked={flags.includes(flag.value)}
                      onChange={handleFlagsChange}
                      className="rounded"
                    />
                    <span className="text-sm text-slate-700">{flag.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Copy */}
            {pattern && (
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : `Copy /${pattern}/${flags}`}
              </button>
            )}
          </div>

          {/* Test Text */}
          <div>
            <label htmlFor="test-text" className="block text-sm font-semibold text-slate-900 mb-2">
              Test Text
            </label>
            <textarea
              id="test-text"
              value={text}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Enter text to test against the regex..."
              className="w-full h-48 p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Results */}
          {!error && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Matches: <span className="text-blue-600">{matches.length}</span>
              </h3>
              {matches.length > 0 ? (
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {matches.map((match, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-4 border border-blue-200 font-mono text-sm space-y-2">
                      <p>
                        <strong>Match {idx + 1}:</strong> <span className="text-blue-600">{match[0]}</span>
                      </p>
                      {match.length > 1 && (
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Groups:</p>
                          {match.slice(1).map((group, gIdx) => (
                            <p key={gIdx} className="text-xs text-slate-700">
                              Group {gIdx + 1}: <span className="text-green-600">{group || '(empty)'}</span>
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : pattern && text ? (
                <div className="bg-slate-100 border border-slate-300 rounded-lg p-4 text-slate-600 text-center">
                  No matches found
                </div>
              ) : null}
            </div>
          )}

          {/* Presets */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Common Patterns</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => handlePatternChange(preset.pattern)}
                  className="text-left p-3 bg-white hover:bg-blue-100 rounded transition-colors"
                >
                  <p className="font-semibold text-slate-900 text-sm">{preset.label}</p>
                  <p className="text-xs text-slate-600 font-mono mt-1 break-all">{preset.pattern}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
