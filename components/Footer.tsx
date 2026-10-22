import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#04060b] text-slate-400 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold font-mono text-xs">
                PP
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">Pablo Pratt</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Enterprise sales leader (237% quota), UT Austin M.S. in Information Security, and production software engineer building high-reliability telemetry, algorithmic trading, and cybersecurity platforms.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 status-ping" />
              <span>Explore Selected Software Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">Production Work</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About & Career</Link>
              </li>
              <li>
                <Link href="/about#ventures" className="hover:text-white transition-colors">Ventures & Studio</Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-white transition-colors">Enterprise Leadership</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Direct Contact</Link>
              </li>
            </ul>
          </div>

          {/* Connect & Verified Sites */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Direct Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/in/pablopratt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/PabloPratt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="mailto:pablo.a.pratt@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  pablo.a.pratt@gmail.com
                </a>
              </li>
              <li>
                <span className="font-mono text-[11px] text-slate-400">Austin, Texas · Central Time</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
          <p>
            © {currentYear} Pablo Pratt · Built with Next.js 16, TypeScript, & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://portfolio-zeta-green-62.vercel.app" className="hover:text-slate-300">
              Master Portfolio
            </a>
            <span>·</span>
            <a href="https://pablo-projects-hub.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              Projects Hub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
