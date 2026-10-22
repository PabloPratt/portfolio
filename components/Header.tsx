'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Mail, ExternalLink } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Ventures', href: '/about#ventures' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Hobbies', href: '/hobbies' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06080f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
        {/* Monogram Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold font-mono text-xs shadow-inner group-hover:border-blue-400 group-hover:text-blue-300 transition">
              PP
            </div>
            <div>
              <span className="text-sm font-extrabold tracking-tight text-white group-hover:text-blue-300 transition">
                Pablo Pratt
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] font-mono text-slate-400">
                Enterprise & Software
              </span>
            </div>
          </Link>
        </div>

        {/* Live Systems Telemetry Badge & Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 status-ping"></span>
            <span>16/16 Systems Live (200 OK)</span>
          </div>

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/pablopratt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg border border-transparent hover:border-white/10"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pablo.a.pratt@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition"
          >
            <Mail size={13} />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-950/95 border-b border-white/10 p-5 shadow-2xl lg:hidden flex flex-col gap-3.5 backdrop-blur-2xl">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-400 self-start mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 status-ping"></span>
              <span>16 Systems Live (200 OK)</span>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://www.linkedin.com/in/pablopratt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white transition"
              >
                LinkedIn Profile
              </a>
              <a
                href="mailto:pablo.a.pratt@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white"
              >
                <Mail size={13} />
                <span>Email Pablo</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
