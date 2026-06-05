'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const tools = [
  {
    id: 'resume-scorer',
    title: 'AI Resume Scorer',
    description: 'Paste your resume and job description. Get an instant AI match score, gaps, and improvements.',
    path: '/tools/resume-scorer',
    ai: true,
  },
  {
    id: 'business-validator',
    title: 'AI Business Idea Validator',
    description: 'Validate business ideas with market analysis, competitors, risks, and viability scoring.',
    path: '/tools/business-validator',
    ai: true,
  },
  {
    id: 'cold-email',
    title: 'AI Cold Email Generator',
    description: 'Generate personalized cold outreach emails with follow-ups using AI.',
    path: '/tools/cold-email',
    ai: true,
  },
  {
    id: 'invoice-generator',
    title: 'AI Invoice Generator',
    description: 'Create professional invoices instantly with AI-formatted text.',
    path: '/tools/invoice-generator',
    ai: true,
  },
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    description: 'Paste JSON and get formatted, validated output. Detects errors instantly.',
    path: '/tools/json-formatter',
  },
  {
    id: 'timestamp-converter',
    title: 'Unix Timestamp Converter',
    description: 'Convert between epoch timestamps and human-readable dates.',
    path: '/tools/timestamp-converter',
  },
  {
    id: 'base64',
    title: 'Base64 Encoder/Decoder',
    description: 'Encode and decode strings and files to/from Base64.',
    path: '/tools/base64',
  },
  {
    id: 'color-contrast',
    title: 'Color Contrast Checker',
    description: 'Check WCAG AA/AAA compliance for text and background colors.',
    path: '/tools/color-contrast',
  },
  {
    id: 'word-counter',
    title: 'Word Counter',
    description: 'Count words, characters, reading time, and more.',
    path: '/tools/word-counter',
  },
  {
    id: 'regex-tester',
    title: 'Regex Tester',
    description: 'Test regex patterns with live matching and explanations.',
    path: '/tools/regex-tester',
  },
];

export default function ToolsPage() {
  return (
    <main id="main-content" className="flex flex-col">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ChevronRight size={18} className="rotate-180" />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Developer Tools</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Free, open-source utilities to save you time and make development easier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">🤖 AI-Powered Tools</h3>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {tools.filter(t => t.ai).map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.path}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md hover:shadow-lg hover:border-blue-600 transition-all border border-blue-200 p-6 flex flex-col gap-4 group"
                >
                  <div>
                    <div className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-2">AI TOOL</div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-slate-600 mt-2">{tool.description}</p>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Try it <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">Utility Tools</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {tools.filter(t => !t.ai).map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.path}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg hover:border-blue-600 transition-all border border-slate-200 p-6 flex flex-col gap-4 group"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-slate-600 mt-2">{tool.description}</p>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Try it <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
