'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ClassificationResult {
  level: 'public' | 'internal' | 'confidential' | 'restricted';
  confidence: number;
  indicators: string[];
  recommendations: string[];
}

function classifyData(text: string): ClassificationResult {
  const indicators: string[] = [];
  let restrictedScore = 0;
  let confidentialScore = 0;
  let internalScore = 0;

  // Check for PII (Personally Identifiable Information)
  if (/\d{3}-\d{2}-\d{4}/.test(text)) {
    indicators.push('Social Security Number detected');
    restrictedScore += 3;
  }
  if (/\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}/.test(text)) {
    indicators.push('Credit card number detected');
    restrictedScore += 3;
  }
  if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(text)) {
    indicators.push('Email address detected');
    internalScore += 1;
  }
  if (/(\+1|1)?[\s.-]?\(?[0-9]{3}\)?[\s.-]?[0-9]{3}[\s.-]?[0-9]{4}/.test(text)) {
    indicators.push('Phone number detected');
    internalScore += 1;
  }

  // Check for sensitive keywords
  const sensitiveKeywords = [
    'password', 'secret', 'private key', 'api key', 'confidential',
    'proprietary', 'trade secret', 'financial', 'salary', 'medical',
    'health records', 'ssn', 'passport', 'security clearance'
  ];
  sensitiveKeywords.forEach(keyword => {
    if (text.toLowerCase().includes(keyword)) {
      indicators.push(`Contains '${keyword}'`);
      restrictedScore += 2;
    }
  });

  // Check for business keywords
  const businessKeywords = ['strategy', 'budget', 'forecast', 'employee', 'contract', 'internal memo'];
  businessKeywords.forEach(keyword => {
    if (text.toLowerCase().includes(keyword)) {
      confidentialScore += 1;
    }
  });

  // Determine classification level
  let level: 'public' | 'internal' | 'confidential' | 'restricted' = 'public';
  let confidence = 0;

  if (restrictedScore >= 3) {
    level = 'restricted';
    confidence = Math.min(100, restrictedScore * 20);
  } else if (restrictedScore >= 1) {
    level = 'confidential';
    confidence = Math.min(100, restrictedScore * 30);
  } else if (confidentialScore >= 2) {
    level = 'confidential';
    confidence = 70;
  } else if (internalScore >= 2) {
    level = 'internal';
    confidence = 65;
  } else if (confidentialScore >= 1 || internalScore >= 1) {
    level = 'internal';
    confidence = 50;
  } else {
    level = 'public';
    confidence = 90;
  }

  const recommendations = [];
  switch (level) {
    case 'restricted':
      recommendations.push('Only share with authorized personnel');
      recommendations.push('Use end-to-end encryption for transmission');
      recommendations.push('Implement access controls and audit logging');
      recommendations.push('Consider data minimization and anonymization');
      break;
    case 'confidential':
      recommendations.push('Limit distribution to approved team members');
      recommendations.push('Use secure channels for sharing');
      recommendations.push('Implement document-level access controls');
      recommendations.push('Maintain audit trails of access and modifications');
      break;
    case 'internal':
      recommendations.push('Can be shared within organization');
      recommendations.push('Use internal secure channels for distribution');
      recommendations.push('Document ownership and retention period');
      break;
    case 'public':
      recommendations.push('Safe for public distribution');
      recommendations.push('Can be shared via any channel');
      break;
  }

  return { level, confidence, indicators, recommendations };
}

export default function DataClassifier() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<ClassificationResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    if (value.trim()) {
      setResult(classifyData(value));
    } else {
      setResult(null);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'restricted': return 'bg-red-50 border-red-200 text-red-700';
      case 'confidential': return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'internal': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'public': return 'bg-green-50 border-green-200 text-green-700';
      default: return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'restricted': return '🔴 RESTRICTED';
      case 'confidential': return '🟡 CONFIDENTIAL';
      case 'internal': return '🔵 INTERNAL';
      case 'public': return '🟢 PUBLIC';
      default: return 'UNCLASSIFIED';
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
            <h1 className="text-4xl font-bold text-slate-900">Data Classification Tool</h1>
            <p className="text-slate-600 mt-2">Classify data sensitivity levels (Public, Internal, Confidential, Restricted) and get security recommendations.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Paste Data to Classify</label>
              <textarea
                value={text}
                onChange={handleChange}
                rows={6}
                placeholder="Paste the data content you want to classify..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {result && (
              <div className="space-y-6">
                {/* Classification Result */}
                <div className={`border-2 rounded-lg p-6 ${getLevelColor(result.level)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold">{getLevelLabel(result.level)}</h2>
                    <span className="text-sm font-semibold">{result.confidence}% confident</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        result.level === 'restricted' ? 'bg-red-500' :
                        result.level === 'confidential' ? 'bg-yellow-500' :
                        result.level === 'internal' ? 'bg-blue-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                </div>

                {/* Indicators */}
                {result.indicators.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Data Elements Detected</h3>
                    <div className="space-y-2">
                      {result.indicators.map((indicator) => (
                        <div key={indicator} className="flex items-start gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                          <span className="text-slate-400 mt-0.5">→</span>
                          <span className="text-slate-700">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h3 className="font-semibold text-slate-900 mb-3">Security Recommendations</h3>
                  <ol className="space-y-2">
                    {result.recommendations.map((rec, i) => (
                      <li key={rec} className="flex gap-3 text-sm text-slate-700">
                        <span className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{rec}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Classification Guidelines */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-green-900 mb-2">🟢 PUBLIC</p>
                    <p className="text-sm text-slate-700">No sensitive data. Safe to share publicly.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-2">🔵 INTERNAL</p>
                    <p className="text-sm text-slate-700">For internal use. Requires access controls.</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="font-semibold text-yellow-900 mb-2">🟡 CONFIDENTIAL</p>
                    <p className="text-sm text-slate-700">Sensitive business data. Limited distribution.</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="font-semibold text-red-900 mb-2">🔴 RESTRICTED</p>
                    <p className="text-sm text-slate-700">Highly sensitive. Strict access controls required.</p>
                  </div>
                </div>
              </div>
            )}

            {!result && text === '' && (
              <div className="text-center py-8 text-slate-500">
                <p>Paste data above to classify its sensitivity level</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
