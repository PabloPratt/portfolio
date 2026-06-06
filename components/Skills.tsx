export default function Skills() {
  const skillCategories = [
    {
      category: '🛠️ Engineering',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Accessibility (WCAG)'],
    },
    {
      category: '🤖 AI & Agent Systems',
      skills: ['Multi-agent Architecture', 'MCP Integration', 'Prompt Engineering', 'AI Product Design', 'Workflow Automation', 'Tool Orchestration', 'LLM Evaluation'],
    },
    {
      category: '🔒 Security & Privacy',
      skills: ['OWASP Top 10', 'Data Classification', 'GDPR Compliance', 'Information Security', 'Password Security', 'Risk Assessment', 'Cybersecurity'],
    },
    {
      category: '💼 Business & Finance',
      skills: ['Financial Analysis', 'Business Strategy', 'Market Research', 'Financial Modeling', 'Forecasting', 'ROI Calculation', 'Quantitative Finance', 'Options Strategy'],
    },
    {
      category: '📊 Data Engineering',
      skills: ['Financial Data APIs', 'SEC EDGAR', 'Alternative Data Sources', 'Market Data Pipelines', 'API Integration', 'Data Normalization', 'Dashboarding'],
    },
    {
      category: '🌍 Sales & Leadership',
      skills: ['Enterprise Sales (Dell)', '237% Quota Attainment', '146% Attainment for 3 Quarters', 'B2B Sales Strategy', 'C-suite Communication', 'Global Markets', 'ERG Leadership'],
    },
    {
      category: '🤝 Social Impact',
      skills: ['Nonprofit Operations', 'Grant Research', 'Fundraising Strategy', 'Impact Measurement', 'Community Development', 'Volunteer Management'],
    },
    {
      category: '🗣️ Languages',
      skills: ['English (Fluent)', 'Spanish (Fluent, Native)', 'Portuguese (Beginner)', 'Italian (Beginner)'],
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
            <p className="text-lg text-slate-600">The mix is technical, commercial, and a little unusual. That is the point.</p>
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 pt-8 border-t border-slate-200">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">237%</p>
              <p className="text-slate-600">Peak quota attainment at Dell</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">7.5K+</p>
              <p className="text-slate-600">Members led as Global Chair of Dell's Latino Connection ERG</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">Top 5%</p>
              <p className="text-slate-600">Selected into Dell's elite Technical Sales Program</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">EN/ES</p>
              <p className="text-slate-600">Fluent English and Spanish, with Portuguese and Italian at beginner level</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
