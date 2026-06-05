import { Mail, ExternalLink } from 'lucide-react';

function GithubIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get In Touch</h2>
            <p className="text-lg text-slate-600">
              Interested in my work or want to collaborate? Reach out through any of these channels.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Email Card */}
            <a
              href="mailto:pratt3508@gmail.com"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 p-8 flex flex-col items-center gap-4 text-center hover:border-blue-600"
            >
              <Mail size={40} className="text-blue-600" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Email</h3>
                <p className="text-slate-600 mt-2">pratt3508@gmail.com</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/PabloPratt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 p-8 flex flex-col items-center gap-4 text-center hover:border-blue-600"
            >
              <GithubIcon size={40} className="text-blue-600" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">GitHub</h3>
                <p className="text-slate-600 mt-2">github.com/PabloPratt</p>
              </div>
            </a>
          </div>

          {/* Links Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">My Projects & Links</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: 'Janus Live', href: 'https://janus-signalinput25-s-projects.vercel.app' },
                { label: 'Earnings Radar', href: 'https://earnings-radar.vercel.app' },
                { label: 'EMDR-BLS Tool', href: 'https://emdr-bls.vercel.app' },
                { label: 'All Repos', href: 'https://github.com/PabloPratt?tab=repositories' },
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
            <h3 className="text-2xl sm:text-3xl font-bold">Let's Build Something Great</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              I'm always interested in interesting projects and collaborations. Feel free to reach out if you have an idea or want to chat about web development.
            </p>
            <a
              href="mailto:pratt3508@gmail.com"
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
