'use client';

import { useState } from 'react';
import { ChevronRight, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface BudgetItem {
  id: string;
  category: string;
  item: string;
  amount: number;
}

const categories = [
  { name: 'Programs', emoji: '📋', color: 'bg-blue-50 border-blue-200' },
  { name: 'Administration', emoji: '⚙️', color: 'bg-slate-50 border-slate-200' },
  { name: 'Fundraising', emoji: '💰', color: 'bg-emerald-50 border-emerald-200' },
  { name: 'Personnel', emoji: '👥', color: 'bg-purple-50 border-purple-200' },
];

export default function NonprofitBudget() {
  const [budget, setBudget] = useState<BudgetItem[]>([
    { id: '1', category: 'Programs', item: 'Direct services', amount: 50000 },
    { id: '2', category: 'Administration', item: 'Office operations', amount: 15000 },
    { id: '3', category: 'Fundraising', item: 'Events and campaigns', amount: 10000 },
  ]);

  const [newItem, setNewItem] = useState({ category: 'Programs', item: '', amount: '' });

  const addItem = () => {
    if (newItem.item && newItem.amount) {
      setBudget([
        ...budget,
        {
          id: Date.now().toString(),
          category: newItem.category,
          item: newItem.item,
          amount: parseFloat(newItem.amount),
        },
      ]);
      setNewItem({ category: 'Programs', item: '', amount: '' });
    }
  };

  const removeItem = (id: string) => {
    setBudget(budget.filter((item) => item.id !== id));
  };

  const total = budget.reduce((sum, item) => sum + item.amount, 0);

  const categoryTotals = categories.map((cat) => ({
    name: cat.name,
    emoji: cat.emoji,
    color: cat.color,
    total: budget.filter((item) => item.category === cat.name).reduce((sum, item) => sum + item.amount, 0),
  }));

  const categoryPercentages = categoryTotals.map((cat) => ({
    ...cat,
    percentage: total > 0 ? Math.round((cat.total / total) * 100) : 0,
  }));

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tools" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center gap-1">
          <ChevronRight size={16} className="rotate-180" /> Back to Tools
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Nonprofit Budget Planner</h1>
            <p className="text-slate-600 mt-2">Plan budgets with nonprofit-specific categories and visualizations.</p>
          </div>

          {/* Total Budget */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-8">
            <p className="text-blue-100 text-sm mb-2">Total Annual Budget</p>
            <p className="text-5xl font-bold">${total.toLocaleString()}</p>
          </div>

          {/* Budget by Category */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Budget Allocation</h2>
            <div className="space-y-3">
              {categoryPercentages.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-slate-900">
                      {cat.emoji} {cat.name}
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      ${cat.total.toLocaleString()} ({cat.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        cat.name === 'Programs' ? 'bg-blue-500' :
                        cat.name === 'Administration' ? 'bg-slate-500' :
                        cat.name === 'Fundraising' ? 'bg-emerald-500' :
                        'bg-purple-500'
                      }`}
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Items */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Budget Items</h2>

            {categories.map((cat) => {
              const items = budget.filter((item) => item.category === cat.name);
              if (items.length === 0) return null;

              return (
                <div key={cat.name} className={`border rounded-lg p-4 ${cat.color}`}>
                  <p className="font-semibold text-slate-900 mb-3">{cat.emoji} {cat.name}</p>
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded border border-slate-200">
                        <span className="text-slate-700">{item.item}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-900">${item.amount.toLocaleString()}</span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Item */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Add Budget Item</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Category</label>
                <select
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Item Description</label>
                <input
                  type="text"
                  value={newItem.item}
                  onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
                  placeholder="e.g., Staff salaries"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Amount ($)</label>
                <input
                  type="number"
                  value={newItem.amount}
                  onChange={(e) => setNewItem({ ...newItem, amount: e.target.value })}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <button
              onClick={addItem}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Plus size={18} /> Add Item
            </button>
          </div>

          {/* Nonprofit Budgeting Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-3">📊 Nonprofit Budgeting Tips</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• <strong>Programs (60-70%):</strong> The majority of budget should directly support your mission</li>
              <li>• <strong>Administration (20-30%):</strong> Back-office functions necessary to operate effectively</li>
              <li>• <strong>Fundraising (5-15%):</strong> Investment in raising funds for sustainability</li>
              <li>• <strong>Rule of thumb:</strong> Funders want to see at least 65-75% going to programs</li>
              <li>• <strong>Monitor quarterly:</strong> Compare actual spending vs. budget to stay on track</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
