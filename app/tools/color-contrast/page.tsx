'use client';

import { useState } from 'react';
import Link from 'next/link';

function getLuminance(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map((x) => {
    x = x / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrast(fg: string, bg: string): number {
  const getrgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
  };

  const [r1, g1, b1] = getrgb(fg);
  const [r2, g2, b2] = getrgb(bg);
  const l1 = getLuminance(r1, g1, b1);
  const l2 = getLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

interface WCAGLevel {
  level: string;
  ratio: number;
  icon: string;
}

function getWCAGLevel(ratio: number): WCAGLevel {
  if (ratio >= 7) return { level: 'AAA (Enhanced)', ratio: 7, icon: '✓✓✓' };
  if (ratio >= 4.5) return { level: 'AA (Standard)', ratio: 4.5, icon: '✓✓' };
  if (ratio >= 3) return { level: 'AA Large Text', ratio: 3, icon: '✓' };
  return { level: 'Fails', ratio: 0, icon: '✗' };
}

export default function ColorContrast() {
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');

  const ratio = getContrast(fgColor, bgColor);
  const wcag = getWCAGLevel(ratio);

  const presets = [
    { fg: '#000000', bg: '#ffffff', label: 'Black on White' },
    { fg: '#ffffff', bg: '#000000', label: 'White on Black' },
    { fg: '#0066cc', bg: '#ffffff', label: 'Blue Link' },
    { fg: '#ff0000', bg: '#ffffff', label: 'Red Error' },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Color Contrast Checker</h1>
            <p className="text-slate-600 mt-2">Check WCAG AA/AAA compliance for text and background colors.</p>
          </div>

          {/* Color Pickers */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Foreground */}
              <div className="space-y-3">
                <label htmlFor="fg-color" className="block text-sm font-semibold text-slate-900">
                  Foreground (Text)
                </label>
                <div className="flex gap-3">
                  <input
                    id="fg-color"
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-20 h-12 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="flex-1 px-3 border border-slate-300 rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Background */}
              <div className="space-y-3">
                <label htmlFor="bg-color" className="block text-sm font-semibold text-slate-900">
                  Background
                </label>
                <div className="flex gap-3">
                  <input
                    id="bg-color"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-20 h-12 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="flex-1 px-3 border border-slate-300 rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Preview */}
            <div
              className="p-8 rounded-lg border-2 border-slate-200 text-center"
              style={{ color: fgColor, backgroundColor: bgColor }}
            >
              <p className="text-lg font-semibold">Sample Text Preview</p>
              <p className="text-sm mt-2">This is how your text will look</p>
            </div>
          </div>

          {/* Results */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Contrast Ratio */}
            <div className="bg-white rounded-lg shadow p-6 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Contrast Ratio</h3>
              <div className="text-4xl font-bold text-blue-600">{ratio.toFixed(2)}:1</div>
              <p className="text-slate-600">Higher is better (7:1 is best)</p>
            </div>

            {/* WCAG Level */}
            <div
              className={`rounded-lg shadow p-6 space-y-4 ${
                wcag.level.includes('Fails') ? 'bg-red-50' : wcag.level.includes('AAA') ? 'bg-green-50' : 'bg-blue-50'
              }`}
            >
              <h3 className="text-lg font-semibold text-slate-900">WCAG Level</h3>
              <div className="text-3xl font-bold">{wcag.icon}</div>
              <p className={wcag.level.includes('Fails') ? 'text-red-700' : 'text-green-700'}>
                {wcag.level}
              </p>
            </div>
          </div>

          {/* Presets */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Quick Presets</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setFgColor(preset.fg);
                    setBgColor(preset.bg);
                  }}
                  className="p-4 bg-white hover:bg-slate-100 rounded transition-colors text-left"
                >
                  <p className="font-semibold text-slate-900">{preset.label}</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-6 h-6 rounded border border-slate-300" style={{ backgroundColor: preset.fg }} />
                    <div className="w-6 h-6 rounded border border-slate-300" style={{ backgroundColor: preset.bg }} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="bg-slate-100 border border-slate-300 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">WCAG Guidelines</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>
                <strong>4.5:1</strong> - AA for normal text (minimum standard)
              </li>
              <li>
                <strong>3:1</strong> - AA for large text (18pt+ or 14pt bold+)
              </li>
              <li>
                <strong>7:1</strong> - AAA for enhanced accessibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
