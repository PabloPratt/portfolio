'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WordCounter() {
  const [text, setText] = useState('');

  const stats = {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0,
    paragraphs: text.trim() ? text.split(/\n\n+/).filter(Boolean).length : 0,
    lines: text.trim() ? text.split('\n').length : 0,
    readingTime: Math.ceil((text.trim() ? text.trim().split(/\s+/).length : 0) / 200),
  };

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Word Counter</h1>
            <p className="text-slate-600 mt-2">Analyze text with word count, reading time, and more.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Text Area */}
            <div className="lg:col-span-2">
              <label htmlFor="text-input" className="block text-sm font-semibold text-slate-900 mb-4">
                Paste Your Text
              </label>
              <textarea
                id="text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste or type your text here..."
                className="w-full h-96 p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => setText('')}
                className="mt-4 px-4 py-2 text-sm bg-slate-700 hover:bg-slate-800 text-white rounded transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Stats */}
            <div className="space-y-3">
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-sm text-slate-600">Words</p>
                <p className="text-3xl font-bold text-blue-600">{stats.words}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-sm text-slate-600">Characters</p>
                <p className="text-3xl font-bold text-blue-600">{stats.characters}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-sm text-slate-600">Reading Time</p>
                <p className="text-3xl font-bold text-blue-600">{stats.readingTime} min</p>
              </div>
            </div>
          </div>

          {/* Detailed Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Words', value: stats.words },
              { label: 'Characters', value: stats.characters },
              { label: 'Characters (no spaces)', value: stats.charactersNoSpaces },
              { label: 'Sentences', value: stats.sentences },
              { label: 'Paragraphs', value: stats.paragraphs },
              { label: 'Lines', value: stats.lines },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg shadow p-4 border border-slate-200">
                <p className="text-sm text-slate-600">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Reading Time Calculation</h3>
            <p className="text-slate-700 text-sm">
              Reading time is calculated based on an average reading speed of 200 words per minute. This is a standard estimate used in educational and content publishing contexts.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
