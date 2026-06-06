import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Pablo Pratt</h3>
            <p className="text-sm">
              Builder, Dell sales leader, security student, and native Spanish speaker based in Austin.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-sm hover:text-white transition-colors">Work</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/leadership" className="text-sm hover:text-white transition-colors">Leadership</Link>
              </li>
              <li>
                <Link href="/hobbies" className="text-sm hover:text-white transition-colors">Hobbies</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/consulting" className="text-sm hover:text-white transition-colors">Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Social</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/pablopratt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:pablo.a.pratt@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} Pablo Pratt. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
