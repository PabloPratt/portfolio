import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-stone-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Me</h2>
            <p className="text-lg text-slate-600">
              I'm a first-generation American, a native Spanish speaker, and someone who likes turning complicated systems into something people can actually use. I learned sales at Uber in the field, then spent five years selling enterprise infrastructure at Dell across SLED, SMB, enterprise, and global alliances. I now support Dell's largest cloud service providers and data center customers. I think in connections: how a security decision, a financial model, a sales motion, and a user's real problem all shape the same product. I lead Dell's 7,500-member Latino Connection ERG, have served on the Texas Emerging Leaders Board for TNOYS and the National Youth Advisory Board at Young Invincibles, and I start IE University's dual International MBA / M.S. in Business Analytics & Data Science in January 2027.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_1.15fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                alt="Desk with laptop and notebook"
                className="h-56 w-full rounded-lg object-cover shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Open road travel scene"
                className="h-56 w-full rounded-lg object-cover shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80"
                alt="Books and notebook on a table"
                className="h-56 w-full rounded-lg object-cover shadow-md sm:col-span-2"
              />
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900">Short version</h3>
              <p className="mt-4 leading-7 text-slate-600">
                I am most comfortable where technical work meets business pressure. That can mean helping a customer understand infrastructure risk, building a market dashboard, cleaning up a messy dataset, or turning an idea into a working product people can click through.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                The through-line is practical: make the complex thing understandable, useful, and honest.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Outside work, I keep a low-key rotation of travel, books, writing, and projects that are a little less polished than the public version but usually more interesting.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-slate-500 pl-4">
                  <p className="font-bold text-slate-900">Austin Community College</p>
                  <p className="text-slate-600">General Studies, Associate of Arts</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-slate-900">The University of Texas at Austin</p>
                  <p className="text-slate-600">M.S. in Information Security & Privacy</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-bold text-slate-900">The University of Texas at Austin</p>
                  <p className="text-slate-600">B.A.s in International Relations & Global Studies and Finance, with a minor in Computer Science</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-bold text-slate-900">IE University</p>
                  <p className="text-slate-600">Dual International MBA / M.S. in Business Analytics & Data Science, Madrid, starting January 2027</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Background</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-slate-900">Global Sales Leader</p>
                  <p className="text-slate-600">Dell across SLED, SMB, enterprise, and global alliances</p>
                  <p className="text-sm text-slate-500 mt-1">Currently supporting Dell's largest cloud service providers and data center customers</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-bold text-slate-900">Technical Sales Program</p>
                  <p className="text-slate-600">Selected into Dell's elite Technical Sales Program, Top 5%</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-bold text-slate-900">Global ERG Chair</p>
                  <p className="text-slate-600">Youngest sitting ERG leader in Dell's history, leading the 7,500+ member Latino Connection ERG</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-bold text-slate-900">Executive Communication</p>
                  <p className="text-slate-600">Represented Dell at the United Nations and spoke alongside Michael Dell during a global Quarterly Broadcast Review</p>
                </div>
                <div className="border-l-4 border-slate-500 pl-4">
                  <p className="font-bold text-slate-900">Bilingual</p>
                  <p className="text-slate-600">Fluent in English and Spanish; Spanish is my native language</p>
                  <p className="text-sm text-slate-500 mt-1">Portuguese: beginner | Italian: beginner</p>
                </div>
              </div>
            </div>
          </div>

          {/* What I Bring */}
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">How I Work</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">Security Mindset</p>
                <p className="text-sm text-slate-700">Master's in Information Security & Privacy means every product I build is built with security first, protecting users and their data.</p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">Business Judgment</p>
                <p className="text-sm text-slate-700">Enterprise sales, financial modeling, and trading work help me understand business metrics, ROI, and tools that directly impact the bottom line.</p>
              </div>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">Global Perspective</p>
                <p className="text-sm text-slate-700">International Relations and Finance training, plus 5 years at Dell navigating global markets, help me understand diverse needs and cultural contexts.</p>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">Sales & Communication</p>
                <p className="text-sm text-slate-700">Full-cycle and global account experience means I can articulate value, solve complex problems, and communicate with technical teams and C-suite stakeholders.</p>
              </div>

              <div className="p-4 bg-pink-50 border border-pink-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">Impact-Driven</p>
                <p className="text-sm text-slate-700">Leading a 7,500+ member global ERG ties my impact work to real organizational leadership, not just volunteer participation.</p>
              </div>

              <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">Full-Stack Builder</p>
                <p className="text-sm text-slate-700">I can take ideas from concept to production, understanding every layer from security to UI/UX to business model.</p>
              </div>
            </div>
          </div>

          {/* Tools Built for Different Audiences */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Tools I've Built</h3>
            <p className="text-slate-600">These are live routes, not placeholders. They cover the tools I actually use and the ones I built for specific workflows.</p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: 'Resume Scorer', text: 'Match a resume to a role and surface the gaps.', href: '/tools/resume-scorer' },
                { title: 'Cold Email Generator', text: 'Generate outreach and follow-up drafts for sales motion.', href: '/tools/cold-email' },
                { title: 'Business Idea Validator', text: 'Check viability, competitors, and market shape.', href: '/tools/business-validator' },
                { title: 'Pitch Deck Generator', text: 'Build investor-style structure and talking points.', href: '/tools/pitch-generator' },
                { title: 'Competitor Analyzer', text: 'Compare positioning and market alternatives.', href: '/tools/competitor-analyzer' },
                { title: 'All Tools', text: 'Open the full tool library.', href: '/tools' },
              ].map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-50 hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Tool</p>
                  <h4 className="mt-2 text-xl font-bold text-slate-900">{tool.title}</h4>
                  <p className="mt-2 leading-7 text-slate-600">{tool.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
