'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const toolCategories = [
  {
    name: 'Sales & Business',
    tools: [
      {
        id: 'resume-scorer',
        title: 'Resume Scorer',
        description: 'Paste your resume and job description. Get an instant match score, gaps, and improvements for sales roles.',
        path: '/tools/resume-scorer',
        tag: 'Premium',
      },
      {
        id: 'cold-email',
        title: 'Cold Email Generator',
        description: 'Generate personalized outreach emails with follow-ups. Perfect for B2B sales prospecting.',
        path: '/tools/cold-email',
        tag: 'Premium',
      },
      {
        id: 'business-validator',
        title: 'Business Idea Validator',
        description: 'Validate business ideas with market analysis, competitors, and viability scoring.',
        path: '/tools/business-validator',
        tag: 'Premium',
      },
    ],
  },
  {
    name: 'Business & Finance',
    tools: [
      {
        id: 'pitch-generator',
        title: 'Pitch Deck Generator',
        description: 'Generate investor-ready pitch deck outlines with talking points and key metrics.',
        path: '/tools/pitch-generator',
        tag: 'Premium',
      },
      {
        id: 'competitor-analyzer',
        title: 'Competitor Analyzer',
        description: 'SWOT analysis for competitive positioning and market strategy.',
        path: '/tools/competitor-analyzer',
        tag: 'Premium',
      },
      {
        id: 'invoice-generator',
        title: 'Invoice Generator',
        description: 'Create professional invoices. Useful for freelancers and startups.',
        path: '/tools/invoice-generator',
        tag: 'Premium',
      },
    ],
  },
  {
    name: 'Security & Privacy',
    tools: [
      {
        id: 'password-checker',
        title: 'Password Strength Checker',
        description: 'Analyze password security, entropy, and vulnerability to common attacks.',
        path: '/tools/password-checker',
        tag: 'Free',
      },
      {
        id: 'data-classifier',
        title: 'Data Classification Tool',
        description: 'Classify data sensitivity levels (Public, Internal, Confidential, Restricted) and get security recommendations.',
        path: '/tools/data-classifier',
        tag: 'Free',
      },
      {
        id: 'owasp-checker',
        title: 'OWASP Vulnerability Checker',
        description: 'Identify common security vulnerabilities and get remediation steps.',
        path: '/tools/owasp-checker',
        tag: 'Free',
      },
    ],
  },
  {
    name: 'Nonprofit Impact',
    tools: [
      {
        id: 'nonprofit-budget',
        title: 'Nonprofit Budget Planner',
        description: 'Plan budgets with nonprofit-specific categories (Programs, Admin, Fundraising).',
        path: '/tools/nonprofit-budget',
        tag: 'Free',
      },
      {
        id: 'donation-calculator',
        title: 'Donation Impact Calculator',
        description: 'Calculate and visualize the impact of donations on nonprofit programs.',
        path: '/tools/donation-calculator',
        tag: 'Free',
      },
      {
        id: 'grant-finder',
        title: 'Grant Research Assistant',
        description: 'Research grant opportunities and get tips for applications.',
        path: '/tools/grant-finder',
        tag: 'Free',
      },
    ],
  },
  {
    name: 'Developer Utilities',
    tools: [
      {
        id: 'json-formatter',
        title: 'JSON Formatter',
        description: 'Paste JSON and get formatted, validated output. Detects errors instantly.',
        path: '/tools/json-formatter',
        tag: 'Free',
      },
      {
        id: 'timestamp-converter',
        title: 'Unix Timestamp Converter',
        description: 'Convert between epoch timestamps and human-readable dates.',
        path: '/tools/timestamp-converter',
        tag: 'Free',
      },
      {
        id: 'base64',
        title: 'Base64 Encoder/Decoder',
        description: 'Encode and decode strings and files to/from Base64.',
        path: '/tools/base64',
        tag: 'Free',
      },
      {
        id: 'color-contrast',
        title: 'Color Contrast Checker',
        description: 'Check WCAG AA/AAA compliance for text and background colors.',
        path: '/tools/color-contrast',
        tag: 'Free',
      },
      {
        id: 'word-counter',
        title: 'Word Counter',
        description: 'Count words, characters, reading time, and more.',
        path: '/tools/word-counter',
        tag: 'Free',
      },
      {
        id: 'regex-tester',
        title: 'Regex Tester',
        description: 'Test regex patterns with live matching and explanations.',
        path: '/tools/regex-tester',
        tag: 'Free',
      },
    ],
  },
];

export default function ToolsPage() {
  return (
    <main id="main-content" className="flex flex-col">
      <section className="bg-slate-950 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ChevronRight size={18} className="rotate-180" />
              Back to Portfolio
            </Link>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Experiments</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Smaller tools and work in progress.</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              These are useful prototypes and utilities, but the main portfolio is Janus, DOOOD, ATX Services Scout, Obsidian Flow, and EMDR-BLS.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {toolCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{category.name}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={tool.path}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg hover:border-blue-600 transition-all border border-slate-200 p-6 flex flex-col gap-4 group"
                  >
                    <div>
                      <div className={`inline-block px-2 py-0.5 text-xs font-bold rounded-full mb-2 ${
                        tool.tag === 'Premium'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {tool.tag === 'Premium' ? 'In progress' : 'Utility'}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-slate-600 mt-2 text-sm">{tool.description}</p>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Try it <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
