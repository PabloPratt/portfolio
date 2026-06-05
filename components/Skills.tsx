export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Accessibility (WCAG)', 'Web Audio API', 'Canvas API'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'TypeScript', 'API Routes', 'Supabase', 'PostgreSQL', 'Clerk Auth', 'Stripe Payments', 'WebHooks'],
    },
    {
      category: 'Integrations',
      skills: ['Gemini API', 'UnusualWhales API', 'Socrata Data API', 'Vercel', 'GitHub', 'TradingView', 'Web Audio'],
    },
    {
      category: 'Tools & Practices',
      skills: ['Git/GitHub', 'CLI Development', 'Real-time Data', 'Testing', 'Performance Optimization', 'SEO', 'Deployment'],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Skills & Technologies</h2>
            <p className="text-lg text-slate-600">Full-stack development with modern tools and best practices.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" aria-hidden="true" />
                      <span className="text-slate-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid gap-6 md:grid-cols-3 pt-8 border-t border-slate-200">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-slate-600">Accessibility Compliant (WCAG AA)</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">5+</p>
              <p className="text-slate-600">Production Apps Deployed</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">10+</p>
              <p className="text-slate-600">APIs Integrated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
