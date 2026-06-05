'use client';

import { useState } from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Impact {
  label: string;
  value: string;
}

function calculateImpact(amount: number, category: string): Impact[] {
  const impacts: { [key: string]: Impact[] } = {
    education: [
      { label: 'School supplies for', value: `${Math.floor(amount / 25)} students` },
      { label: 'Scholarships provided', value: `$${Math.floor(amount * 0.8).toLocaleString()}` },
      { label: 'Books purchased', value: Math.floor(amount / 15) + '' },
    ],
    health: [
      { label: 'Medical checkups', value: Math.floor(amount / 50) + '' },
      { label: 'Vaccines provided', value: Math.floor(amount / 5) + '' },
      { label: 'Mental health sessions', value: Math.floor(amount / 100) + '' },
    ],
    hunger: [
      { label: 'Meals provided', value: Math.floor(amount / 3) + '' },
      { label: 'Food kits distributed', value: Math.floor(amount / 50) + '' },
      { label: 'Days of nutrition', value: Math.floor(amount / 10) + '' },
    ],
    housing: [
      { label: 'Nights of shelter', value: Math.floor(amount / 30) + '' },
      { label: 'Housing assistance', value: `$${Math.floor(amount * 0.9).toLocaleString()}` },
      { label: 'Emergency housing units', value: Math.floor(amount / 1000) + '' },
    ],
    environment: [
      { label: 'Trees planted', value: Math.floor(amount / 2) + '' },
      { label: 'CO2 offset (kg)', value: Math.floor(amount * 10) + '' },
      { label: 'Conservation acres', value: Math.floor(amount / 100) + '' },
    ],
    water: [
      { label: 'People with clean water', value: Math.floor(amount / 5) + '' },
      { label: 'Wells repaired', value: Math.floor(amount / 500) + '' },
      { label: 'Water filters provided', value: Math.floor(amount / 25) + '' },
    ],
  };
  return impacts[category] || impacts.education;
}

export default function DonationCalculator() {
  const [amount, setAmount] = useState(100);
  const [category, setCategory] = useState('education');
  const [impacts, setImpacts] = useState<Impact[]>(calculateImpact(100, 'education'));

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value) || 0;
    setAmount(newAmount);
    setImpacts(calculateImpact(newAmount, category));
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setImpacts(calculateImpact(amount, newCategory));
  };

  const categories = [
    { id: 'education', label: '🎓 Education', emoji: '📚' },
    { id: 'health', label: '🏥 Health Care', emoji: '💊' },
    { id: 'hunger', label: '🍽️ Food & Hunger', emoji: '🥘' },
    { id: 'housing', label: '🏠 Housing', emoji: '🏡' },
    { id: 'environment', label: '🌍 Environment', emoji: '♻️' },
    { id: 'water', label: '💧 Clean Water', emoji: '💧' },
  ];

  const selectedCategoryLabel = categories.find(c => c.id === category)?.label || '';
  const selectedCategoryEmoji = categories.find(c => c.id === category)?.emoji || '';

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
          <ChevronRight size={16} className="rotate-180" /> Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Donation Impact Calculator</h1>
            <p className="text-slate-600 mt-2">See the real-world impact of your donation on nonprofit programs.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-8 space-y-6">
            {/* Donation Amount */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Donation Amount</label>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-blue-600">${amount.toLocaleString()}</span>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="10"
                  value={amount}
                  onChange={handleAmountChange}
                  className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="mt-3 px-4 py-2 border border-slate-300 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter custom amount"
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Cause Category</label>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`p-3 rounded-lg border-2 transition-all text-left font-medium ${
                      category === cat.id
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Impact Display */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedCategoryEmoji}</span>
                <div>
                  <p className="text-sm text-slate-600">Your impact in:</p>
                  <p className="text-2xl font-bold text-slate-900">{selectedCategoryLabel}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 mt-6">
                {impacts.map((impact) => (
                  <div key={impact.label} className="bg-white rounded-lg p-4 text-center border border-blue-100">
                    <p className="text-sm text-slate-600 mb-1">{impact.label}</p>
                    <p className="text-2xl font-bold text-blue-600">{impact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Giving Tips */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp size={18} className="text-emerald-600" />
                Maximizing Your Impact
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Recurring donations often have lower processing fees</li>
                <li>✓ Giving to effective nonprofits (verified by GiveWell/Charity Navigator) maximizes impact</li>
                <li>✓ Donations to donor-advised funds provide tax benefits while you decide where to give</li>
                <li>✓ Matching donations during campaigns can double your impact</li>
                <li>✓ Skills-based volunteering complements financial giving</li>
              </ul>
            </div>

            {/* Finding Nonprofits */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-3">Find Great Nonprofits</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { name: 'GiveWell', url: 'https://givewell.org' },
                  { name: 'Charity Navigator', url: 'https://charitynavigator.org' },
                  { name: 'GuideStar', url: 'https://www.candid.org' },
                  { name: 'Charity Watch', url: 'https://www.charitywatch.org' },
                ].map((org) => (
                  <a
                    key={org.name}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white rounded border border-blue-200 hover:border-blue-600 hover:bg-blue-50 transition-colors text-sm"
                  >
                    <span className="font-medium text-slate-900">{org.name}</span>
                    <span className="text-blue-600">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
