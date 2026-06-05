'use client';

import { useState } from 'react';
import { ChevronRight, Eye, EyeOff, Check, X } from 'lucide-react';
import Link from 'next/link';

interface PasswordAnalysis {
  score: number;
  strength: string;
  entropy: number;
  feedback: string[];
  suggestions: string[];
}

function analyzePassword(password: string): PasswordAnalysis {
  const feedback = [];
  const suggestions = [];
  let score = 0;

  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;

  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;

  if (/(.)\1{2,}/.test(password)) {
    feedback.push('⚠️ Contains repeated characters');
    suggestions.push('Avoid repeating characters (aaa, 111)');
  }

  if (/^[a-z]+$/i.test(password)) {
    feedback.push('⚠️ Only contains letters');
    suggestions.push('Add numbers and special characters');
  }

  const commonPatterns = ['password', 'admin', 'qwerty', '123456', 'letmein'];
  if (commonPatterns.some(p => password.toLowerCase().includes(p))) {
    feedback.push('🚨 Contains common password pattern');
    suggestions.push('Avoid dictionary words and common patterns');
  }

  if (password.length < 12) suggestions.push('Use at least 12 characters for better security');
  if (!/[A-Z]/.test(password)) suggestions.push('Add uppercase letters');
  if (!/[0-9]/.test(password)) suggestions.push('Add numbers');
  if (!/[^a-zA-Z0-9]/.test(password)) suggestions.push('Add special characters (!@#$%^&*)');

  const entropy = Math.log2(Math.pow(95, password.length));
  const strength = score <= 2 ? 'Weak' : score <= 4 ? 'Fair' : score <= 5 ? 'Good' : 'Strong';

  return {
    score: Math.min(score, 7),
    strength,
    entropy,
    feedback: feedback.length > 0 ? feedback : ['✅ No obvious issues detected'],
    suggestions: suggestions.length > 0 ? suggestions : ['Password is strong!'],
  };
}

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [analysis, setAnalysis] = useState<PasswordAnalysis | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (pwd) {
      setAnalysis(analyzePassword(pwd));
    } else {
      setAnalysis(null);
    }
  };

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'Weak': return 'text-red-600 bg-red-50 border-red-200';
      case 'Fair': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Good': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Strong': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
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
            <h1 className="text-4xl font-bold text-slate-900">Password Strength Checker</h1>
            <p className="text-slate-600 mt-2">Analyze password security, entropy, and vulnerability to common attacks.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Enter Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handleChange}
                  placeholder="Type a password to analyze..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">💡 Your password is analyzed locally and never sent to any server.</p>
            </div>

            {analysis && (
              <div className="space-y-6">
                {/* Strength Badge */}
                <div className={`border rounded-lg p-4 ${getStrengthColor(analysis.strength)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Strength: {analysis.strength}</h3>
                    <span className="text-sm font-mono">{analysis.score}/7</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        analysis.strength === 'Weak' ? 'bg-red-500 w-1/4' :
                        analysis.strength === 'Fair' ? 'bg-yellow-500 w-1/2' :
                        analysis.strength === 'Good' ? 'bg-blue-500 w-3/4' :
                        'bg-green-500 w-full'
                      }`}
                    />
                  </div>
                </div>

                {/* Password Metrics */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-sm text-slate-600 mb-1">Length</p>
                    <p className="text-2xl font-bold text-slate-900">{password.length}</p>
                    <p className="text-xs text-slate-500 mt-1">Recommended: 12+ characters</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-sm text-slate-600 mb-1">Entropy</p>
                    <p className="text-2xl font-bold text-slate-900">{Math.round(analysis.entropy)} bits</p>
                    <p className="text-xs text-slate-500 mt-1">Higher = harder to crack</p>
                  </div>
                </div>

                {/* Character Types */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Character Types</h3>
                  <div className="grid gap-2">
                    {[
                      { label: 'Lowercase (a-z)', test: /[a-z]/ },
                      { label: 'Uppercase (A-Z)', test: /[A-Z]/ },
                      { label: 'Numbers (0-9)', test: /[0-9]/ },
                      { label: 'Special (!@#$%^&*)', test: /[^a-zA-Z0-9]/ },
                    ].map(({ label, test }) => (
                      <div key={label} className="flex items-center gap-2">
                        {test.test(password) ? (
                          <Check size={18} className="text-green-600" />
                        ) : (
                          <X size={18} className="text-slate-400" />
                        )}
                        <span className={test.test(password) ? 'text-slate-900 font-medium' : 'text-slate-500'}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feedback */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Analysis</h3>
                  <div className="space-y-2">
                    {analysis.feedback.map((item) => (
                      <p key={item} className="text-sm text-slate-700">{item}</p>
                    ))}
                  </div>
                </div>

                {/* Suggestions */}
                {analysis.suggestions.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 mb-3">Suggestions for Improvement</h3>
                    <ol className="space-y-2">
                      {analysis.suggestions.map((item, i) => (
                        <li key={item} className="text-sm text-slate-700 flex gap-3">
                          <span className="shrink-0 font-semibold text-blue-600">{i + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            )}

            {!analysis && password === '' && (
              <div className="text-center py-8 text-slate-500">
                <p>Enter a password above to see strength analysis</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
