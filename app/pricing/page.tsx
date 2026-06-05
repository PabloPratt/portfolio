'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const plans = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for trying out our tools',
    features: [
      '100 uses/month across all tools',
      'JSON Formatter',
      'Timestamp Converter',
      'Base64 Encoder',
      'Color Contrast Checker',
      'Word Counter',
      'Regex Tester',
      'Limited to 2 premium tool uses/month',
      'Community support',
    ],
    excluded: ['Unlimited usage', 'Priority support', 'All AI agents', 'API access'],
    cta: 'Get Started',
    color: 'slate',
  },
  {
    name: 'Pro',
    price: 29,
    period: '/month',
    description: 'For professionals & freelancers',
    features: [
      'Unlimited uses/month',
      'All utility tools',
      'Resume Scorer',
      'Business Validator',
      'Cold Email Generator',
      'Invoice Generator',
      'Content Generator',
      'SEO Analyzer',
      'Code Reviewer',
      'LinkedIn Post Generator',
      'Priority email support',
      'Monthly credits for API',
    ],
    excluded: ['API access'],
    cta: 'Subscribe to Pro',
    color: 'blue',
    popular: true,
    stripeId: 'price_pro_monthly',
  },
  {
    name: 'Enterprise',
    price: 99,
    period: '/month',
    description: 'For teams & organizations',
    features: [
      'Everything in Pro',
      'Team workspace (up to 10 members)',
      'Full API access',
      'Custom integrations',
      'Dedicated support',
      'Advanced analytics',
      'Team usage reports',
      'SSO & advanced security',
      'Custom rate limits',
      'Bulk credits (10k/month)',
    ],
    excluded: [],
    cta: 'Contact Sales',
    color: 'purple',
    stripeId: 'price_enterprise_monthly',
  },
];

export default function PricingPage() {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string) => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    setLoading(priceId);
    try {
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const { sessionId } = await res.json();
      // Redirect to Stripe Checkout
      window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
    } catch (error) {
      console.error('Error:', error);
      setLoading(null);
    }
  };

  const colorClasses = {
    slate: 'border-slate-200 bg-slate-50/50',
    blue: 'border-blue-300 bg-blue-50 ring-2 ring-blue-500',
    purple: 'border-purple-300 bg-purple-50',
  };

  return (
    <main id="main-content" className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${colorClasses[plan.color as keyof typeof colorClasses]} p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-6 px-4 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-600 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                {plan.period && <span className="text-slate-600">{plan.period}</span>}
              </div>

              <button
                onClick={() => plan.stripeId && handleSubscribe(plan.stripeId)}
                disabled={loading === plan.stripeId}
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border border-slate-300 hover:bg-slate-100 text-slate-900'
                } disabled:opacity-50`}
              >
                {loading === plan.stripeId ? 'Loading...' : plan.cta}
              </button>

              <div className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
                {plan.excluded.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <X size={20} className="text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">{feature}</span>
                  </div>
                ))}
              </div>

              {!plan.stripeId && (
                <p className="text-xs text-slate-500 text-center">
                  No credit card required
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {[
            {
              q: 'Can I change plans?',
              a: 'Yes! Upgrade or downgrade anytime. Changes take effect at the next billing cycle.',
            },
            {
              q: 'Is there a free trial?',
              a: 'Yes, the Free plan is permanent. Pro gives you unlimited access for $29/month.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards via Stripe. Enterprise can arrange invoicing.',
            },
            {
              q: 'Do you offer refunds?',
              a: 'Yes, we offer a 14-day money-back guarantee on Pro and Enterprise plans.',
            },
          ].map((faq) => (
            <div key={faq.q} className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-semibold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
