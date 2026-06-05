export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Me</h2>
            <p className="text-lg text-slate-600">A unique blend of engineering, security, business acumen, and global sales experience.</p>
          </div>

          {/* Education */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">🎓 Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-slate-900">Master's Degree</p>
                  <p className="text-slate-600">Information Security & Privacy</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-bold text-slate-900">Bachelor's Degree</p>
                  <p className="text-slate-600">Finance</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-bold text-slate-900">Bachelor's Degree</p>
                  <p className="text-slate-600">International Relations & Global Studies</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-bold text-slate-900">MBA Applications</p>
                  <p className="text-slate-600">Applying to top 10 globally ranked programs</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">💼 Professional Background</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-slate-900">Global Sales Leader</p>
                  <p className="text-slate-600">5+ years at Dell Technologies</p>
                  <p className="text-sm text-slate-500 mt-1">Enterprise sales, key account management, international markets</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="font-bold text-slate-900">Active Sales Job Search</p>
                  <p className="text-slate-600">Leveraging tech + business expertise</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-bold text-slate-900">Nonprofit Work</p>
                  <p className="text-slate-600">Several years of community service and impact work</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-bold text-slate-900">Full-Stack Developer</p>
                  <p className="text-slate-600">Building products that solve real problems</p>
                </div>
              </div>
            </div>
          </div>

          {/* What I Bring */}
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">What I Bring to the Table</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">🔒 Security Mindset</p>
                <p className="text-sm text-slate-700">Master's in Information Security & Privacy means every product I build is built with security first, protecting users and their data.</p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">💰 Business Intelligence</p>
                <p className="text-sm text-slate-700">Finance degree enables me to understand business metrics, ROI, and create tools that directly impact the bottom line.</p>
              </div>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">🌍 Global Perspective</p>
                <p className="text-sm text-slate-700">International Relations background + 5 years at Dell navigating global markets means I understand diverse needs and cultural contexts.</p>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">🤝 Sales & Communication</p>
                <p className="text-sm text-slate-700">Enterprise sales experience means I can articulate value, solve complex problems, and build lasting relationships.</p>
              </div>

              <div className="p-4 bg-pink-50 border border-pink-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">🎯 Impact-Driven</p>
                <p className="text-sm text-slate-700">Nonprofit work demonstrates commitment to using technology and business skills for social good, not just profit.</p>
              </div>

              <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                <p className="font-bold text-slate-900 mb-2">🚀 Full-Stack Builder</p>
                <p className="text-sm text-slate-700">I can take ideas from concept to production, understanding every layer from security to UI/UX to business model.</p>
              </div>
            </div>
          </div>

          {/* Tools Built for Different Audiences */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">🛠️ Tools I've Built</h3>
            <p className="text-slate-600">My portfolio reflects my diverse background:</p>

            <div className="grid gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">For Sales Professionals:</p>
                <p className="text-slate-700">Resume Scorer, Cold Email Generator, Sales Pipeline Tools</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">For MBA Candidates & Entrepreneurs:</p>
                <p className="text-slate-700">Business Idea Validator, Pitch Deck Generator, Competitor Analyzer, Financial Tools</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">For Security & Privacy Advocates:</p>
                <p className="text-slate-700">Password Strength Checker, Data Classification Tool, OWASP Vulnerability Reference</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">For Nonprofits & Social Impact:</p>
                <p className="text-slate-700">Donation Impact Calculator, Nonprofit Budget Planner, Grant Research Assistant</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">For Developers:</p>
                <p className="text-slate-700">JSON Formatter, Base64 Encoder, Regex Tester, Color Contrast Checker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
