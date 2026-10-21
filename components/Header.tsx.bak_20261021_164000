'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Hobbies', href: '/hobbies' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center" aria-label="Primary">
        <Link href="/" className="text-xl font-bold text-slate-900 hover:text-blue-700 transition-colors">
          Pablo Pratt
        </Link>

        <div className="hidden sm:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-700 hover:text-blue-700 transition-colors font-semibold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/pablopratt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-700 hover:text-blue-700 transition-colors font-semibold"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 sm:hidden">
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/pablopratt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
