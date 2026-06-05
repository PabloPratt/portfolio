export default function Skills() {
  const skillCategories = [
    {
      category: '🛠️ Engineering',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Accessibility (WCAG)'],
    },
    {
      category: '🔒 Security & Privacy',
      skills: ['OWASP Top 10', 'Data Classification', 'GDPR Compliance', 'Information Security', 'Password Security', 'Risk Assessment', 'Cybersecurity'],
    },
    {
      category: '💼 Business & Finance',
      skills: ['Financial Analysis', 'Business Strategy', 'Market Research', 'Financial Modeling', 'Forecasting', 'ROI Calculation', 'Budget Planning'],
    },
    {
      category: '🌍 Sales & Leadership',
      skills: ['Enterprise Sales (Dell)', 'B2B Sales Strategy', 'Negotiation', 'Client Relationships', 'Global Markets', 'International Relations', 'Team Leadership'],
    },
    {
      category: '🤝 Social Impact',
      skills: ['Nonprofit Operations', 'Grant Research', 'Fundraising Strategy', 'Impact Measurement', 'Community Development', 'Volunteer Management'],
    },
    {
      category: '🔌 Integrations & APIs',
      skills: ['Anthropic Claude API', 'Stripe Payments', 'Clerk Auth', 'Supabase', 'UnusualWhales API', 'Vercel', 'GitHub'],
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
              <p className="text-3xl font-bold text-blue-600">3</p>
              <p className="text-slate-600">Advanced Degrees (Masters, Finance, Intl Relations)</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">5</p>
              <p className="text-slate-600">Years at Dell Global Sales</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">25+</p>
              <p className="text-slate-600">Tools & Features Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
