'use client';

import { useState } from 'react';
import { ChevronRight, ExternalLink, Download } from 'lucide-react';
import Link from 'next/link';

interface Grant {
  id: string;
  name: string;
  funder: string;
  amount: string;
  focus: string[];
  deadline: string;
  eligibility: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
}

const sampleGrants: Grant[] = [
  {
    id: '1',
    name: 'National Giving Partnership Grant',
    funder: 'Community Foundation',
    amount: '$10,000 - $50,000',
    focus: ['Education', 'Community Development'],
    deadline: 'March 31, 2024',
    eligibility: '501(c)(3) nonprofit, focus on underserved communities',
    difficulty: 'Easy',
  },
  {
    id: '2',
    name: 'Tech for Good Initiative',
    funder: 'Google.org',
    amount: '$100,000 - $500,000',
    focus: ['Technology', 'Social Impact'],
    deadline: 'June 15, 2024',
    eligibility: 'Nonprofits using technology for social good',
    difficulty: 'Moderate',
  },
  {
    id: '3',
    name: 'Healthcare Innovation Grant',
    funder: 'Gates Foundation',
    amount: '$250,000 - $2,000,000',
    focus: ['Healthcare', 'Public Health'],
    deadline: 'December 1, 2024',
    eligibility: '501(c)(3), demonstrated impact in healthcare',
    difficulty: 'Challenging',
  },
  {
    id: '4',
    name: 'Youth Development Fund',
    funder: 'Ford Foundation',
    amount: '$50,000 - $200,000',
    focus: ['Youth', 'Education', 'Social Justice'],
    deadline: 'April 30, 2024',
    eligibility: 'Organizations serving youth aged 13-24',
    difficulty: 'Moderate',
  },
  {
    id: '5',
    name: 'Environmental Conservation Grant',
    funder: 'National Geographic',
    amount: '$25,000 - $100,000',
    focus: ['Environment', 'Conservation'],
    deadline: 'May 15, 2024',
    eligibility: 'Global environmental nonprofit work',
    difficulty: 'Easy',
  },
];

export default function GrantFinder() {
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const allFocusAreas = Array.from(
    new Set(sampleGrants.flatMap((g) => g.focus))
  );

  const filteredGrants = sampleGrants.filter((grant) => {
    const matchesFocus = selectedFocus.length === 0 ||
      selectedFocus.some((f) => grant.focus.includes(f));
    const matchesSearch =
      grant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grant.funder.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFocus && matchesSearch;
  });

  const toggleFocus = (focus: string) => {
    setSelectedFocus((prev) =>
      prev.includes(focus)
        ? prev.filter((f) => f !== focus)
        : [...prev, focus]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Moderate': return 'bg-yellow-100 text-yellow-700';
      case 'Challenging': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
          <ChevronRight size={16} className="rotate-180" /> Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Grant Research Assistant</h1>
            <p className="text-slate-600 mt-2">Research grant opportunities and get tips for successful applications.</p>
          </div>

          {/* Search */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by grant name or funder..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Filter by Focus Area</h3>
              <div className="flex flex-wrap gap-2">
                {allFocusAreas.map((focus) => (
                  <button
                    key={focus}
                    onClick={() => toggleFocus(focus)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedFocus.includes(focus)
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {focus}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-600">
              Found {filteredGrants.length} grant{filteredGrants.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Grant List */}
          <div className="space-y-4">
            {filteredGrants.map((grant) => (
              <div
                key={grant.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 p-6 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">{grant.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">by {grant.funder}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${getDifficultyColor(grant.difficulty)}`}>
                    {grant.difficulty}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate-600">Amount</p>
                    <p className="font-semibold text-slate-900">{grant.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Deadline</p>
                    <p className="font-semibold text-slate-900">{grant.deadline}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-2">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {grant.focus.map((area) => (
                      <span
                        key={area}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-xs text-slate-600 font-semibold mb-1">Eligibility</p>
                  <p className="text-sm text-slate-700">{grant.eligibility}</p>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors text-sm">
                  <ExternalLink size={16} /> Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Grant Application Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">📝 Grant Application Tips</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">1. Tell a Compelling Story</p>
                <p>Funders want to understand your mission and impact. Use concrete data and examples.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">2. Align with Funder Priorities</p>
                <p>Read the grant requirements carefully and match your proposal to what they're seeking.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">3. Show Measurable Outcomes</p>
                <p>Include specific metrics and KPIs to demonstrate how you'll measure success.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">4. Build Evidence of Effectiveness</p>
                <p>Provide evaluation data, testimonials, and outcomes from previous work.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">5. Include a Strong Budget</p>
                <p>Show realistic costs, explain how funds will be used, and demonstrate fiscal responsibility.</p>
              </div>
            </div>
          </div>

          {/* Grant Resources */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-3">🔗 Grant Research Resources</h3>
            <div className="grid gap-3">
              {[
                { name: 'GrantStation', url: 'https://www.grantstation.com' },
                { name: 'Foundation Center', url: 'https://www.candid.org' },
                { name: 'Grants.gov', url: 'https://www.grants.gov' },
                { name: 'ProMatch Grant Research', url: 'https://www.promatchgrants.com' },
              ].map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded border border-emerald-200 hover:border-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  <span className="font-medium text-slate-900">{resource.name}</span>
                  <ExternalLink size={16} className="text-emerald-600" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
