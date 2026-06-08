import { Mail, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get In Touch</h2>
            <p className="text-lg text-slate-600">
              Best way to reach me is email. No phone number on the public site.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Email Card */}
            <a
              href="mailto:pablo.a.pratt@gmail.com"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 p-8 flex flex-col items-center gap-4 text-center hover:border-blue-600"
            >
              <Mail size={40} className="text-blue-600" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Email</h3>
                <p className="text-slate-600 mt-2">pablo.a.pratt@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/pablopratt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 p-8 flex flex-col items-center gap-4 text-center hover:border-blue-600"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.13 1 2.5 1 4.98 2.13 4.98 3.5zM0 8.98h5v15H0v-15zm7.98 0h4.78v2.05h.07c.67-1.27 2.31-2.62 4.75-2.62 5.08 0 6.02 3.35 6.02 7.7V24h-5v-6.66c0-1.59-.03-3.63-2.21-3.63-2.22 0-2.56 1.73-2.56 3.52V24h-5v-15z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-slate-900">LinkedIn</h3>
                <p className="text-slate-600 mt-2">linkedin.com/in/pablopratt</p>
              </div>
            </a>
          </div>

          {/* Links Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">My Projects & Links</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: 'Janus Live', href: 'https://janus-eta.vercel.app' },
                { label: 'Contest Finder', href: 'https://contest-finder-self.vercel.app' },
                { label: 'Obsidian Flow', href: 'https://obsidian-flow-three.vercel.app' },
                { label: 'ATX Services Scout', href: 'https://atx-services-scout.vercel.app' },
                { label: 'EMDR-BLS Prototype', href: 'https://emdr-bls.vercel.app' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{link.label}</span>
                  <ExternalLink size={18} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 sm:p-12 text-white text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">Send me the weird problem.</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              I am usually most interested when the idea is a little messy: data, sales, security, markets, operations, or a workflow nobody has made pleasant yet.
            </p>
            <a
              href="mailto:pablo.a.pratt@gmail.com"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
