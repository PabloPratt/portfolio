'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { BarChart3, Settings, LogOut, Zap, Users, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'API Calls', value: '2,547', icon: TrendingUp },
  { label: 'Active Tools', value: '8', icon: Zap },
  { label: 'Team Members', value: '1', icon: Users },
];

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
  if (!user) return <div>Not authenticated</div>;

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Welcome back, {user.firstName}!
            </h1>
            <p className="text-slate-600 mt-1">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/tools"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Open Tools
            </Link>
            <button className="px-4 py-2 border border-slate-300 hover:bg-slate-100 rounded-lg font-medium transition-colors">
              Settings
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-lg shadow p-6 border border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <Icon size={32} className="text-blue-600 opacity-20" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscription Card */}
        <div className="bg-white rounded-lg shadow border border-slate-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Your Plan</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              Free Plan
            </span>
          </div>
          <p className="text-slate-600 mb-4">
            You have 98 uses remaining this month. Upgrade to Pro for unlimited access.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Upgrade to Pro
          </Link>
        </div>

        {/* Tool Usage Chart */}
        <div className="bg-white rounded-lg shadow border border-slate-200 p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 size={20} className="text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Tool Usage This Month</h2>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Resume Scorer', uses: 12, limit: 50 },
              { name: 'Business Validator', uses: 8, limit: 50 },
              { name: 'Cold Email Generator', uses: 5, limit: 50 },
              { name: 'JSON Formatter', uses: 23, limit: 'unlimited' },
            ].map((tool) => (
              <div key={tool.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-slate-900">{tool.name}</span>
                  <span className="text-sm text-slate-600">
                    {tool.uses} / {tool.limit === 'unlimited' ? '∞' : tool.limit}
                  </span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{
                      width: `${
                        tool.limit === 'unlimited'
                          ? 100
                          : (tool.uses / (tool.limit as number)) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/tools/resume-scorer"
            className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-slate-900">Resume Scorer</h3>
            <p className="text-sm text-slate-600 mt-1">
              Get AI feedback on your resume matching
            </p>
          </Link>
          <Link
            href="/tools/business-validator"
            className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-slate-900">Business Validator</h3>
            <p className="text-sm text-slate-600 mt-1">
              Validate your business ideas with AI analysis
            </p>
          </Link>
          <Link
            href="/tools/content-generator"
            className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-slate-900">Content Generator</h3>
            <p className="text-sm text-slate-600 mt-1">
              Create engaging content for any format
            </p>
          </Link>
          <Link
            href="/tools/seo-analyzer"
            className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-slate-900">SEO Analyzer</h3>
            <p className="text-sm text-slate-600 mt-1">
              Get SEO optimization recommendations
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
