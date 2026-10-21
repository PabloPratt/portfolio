import Link from 'next/link';
import { ArrowRight, Bot, Check, Globe, Image as ImageIcon, Mail, Printer, ShoppingBag, Sparkles, Sprout, TrendingUp } from 'lucide-react';

export default function Ventures() {
  return (
    <section id="ventures" className="bg-white py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-800 mb-4">
            <Sparkles size={14} />
            Real-World Ventures
          </div>
          <h2 className="text-3xl font-black text-slate-950 sm:text-5xl tracking-tight">
            Hands-on businesses built on honest value.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Beyond writing software, I run small, tangible businesses grounded in everyday economics: catching underpriced deals, running automated trading, selling travel photography as wall art, manufacturing physical parts, growing fresh food, and building websites for local operators. No buzzwords—just clear work that solves real needs.
          </p>
        </div>

        {/* Venture Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Venture 1: Flipping & Reselling */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-stone-50/50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-700 border border-amber-500/20">
                  <ShoppingBag size={24} />
                </div>
                <span className="rounded-full bg-amber-100/70 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                  Arbitrage
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950">Flipping & Reselling</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Surplus Stores • Penny Deals • Pricing Errors
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                We buy underpriced stock from surplus stores, clearance &ldquo;penny&rdquo; deals, and retailer pricing mistakes, then resell it on eBay and other online marketplaces.
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-600 bg-white rounded-lg p-3.5 border border-slate-200">
                <p className="font-bold text-slate-900">How it works in plain words:</p>
                <p>
                  Sometimes a store marks something down to pennies or types the wrong price, and it only lasts until someone notices. Our bots and scrapers watch store listings around the clock and flag those prices the moment they appear, checking each one against what the item actually sells for. We approve the best ones, buy from a dedicated deal fund before the price gets fixed, and resell at the normal market price.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Primary platform: eBay</span>
              <span className="inline-flex items-center gap-1 font-bold text-amber-800">
                <Bot size={14} /> Bots on watch 24/7
              </span>
            </div>
          </div>

          {/* Venture 2: 3D Printing Studio */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-stone-50/50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 border border-blue-500/20">
                  <Printer size={24} />
                </div>
                <span className="rounded-full bg-blue-100/70 px-2.5 py-0.5 text-xs font-bold text-blue-800">
                  Fabrication
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950">3D Printing Studio</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Custom Prints & In-House Designs
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                We turn digital designs into physical plastic parts. We print our own original designs as well as custom requests—replacement brackets, household organizers, adapters, and custom prototypes.
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-600 bg-white rounded-lg p-3.5 border border-slate-200">
                <p className="font-bold text-slate-900">The current setup:</p>
                <p>
                  Powered by our Bambu Lab A1 mini with 4-color multi-material precision, with a high-speed Creality K2 Plus on the way for large-format engineering parts.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
              <a
                href="mailto:pablo.a.pratt@gmail.com?subject=Custom%203D%20Print"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-500 shadow-sm"
              >
                <Mail size={15} />
                Want something custom? Email me
              </a>
              <div className="text-center">
                <Link
                  href="#studio"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  View 3D Print Lab specs
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Venture 3: Microgreens */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-stone-50/50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <Sprout size={24} />
                </div>
                <span className="rounded-full bg-emerald-100/70 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                  Local Harvest
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950">Microgreens</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Grown Local • Delivered Fresh
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                We grow nutrient-dense microgreens locally in Austin and sell directly to neighborhood restaurants, chefs, and food lovers who want crisp texture and bold flavor.
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-600 bg-white rounded-lg p-3.5 border border-slate-200">
                <p className="font-bold text-slate-900">What they are & why they matter:</p>
                <p>
                  Microgreens are young vegetable greens harvested right after the first leaves sprout (10–14 days). Many varieties pack more vitamins per bite than the full-grown plant, and they add intense flavor to salads, sandwiches, and entrees.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href="mailto:pablo.a.pratt@gmail.com?subject=Microgreens"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-600 shadow-sm text-center"
              >
                <Mail size={15} />
                Restaurant or need custom delivery? Let us know
              </a>
            </div>
          </div>

          {/* Venture 4: Automated Trading */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-stone-50/50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 text-violet-700 border border-violet-500/20">
                  <TrendingUp size={24} />
                </div>
                <span className="rounded-full bg-violet-100/70 px-2.5 py-0.5 text-xs font-bold text-violet-800">
                  Trading
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950">Automated Futures Trading</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Paradox Algo • Shifu • Prop Firm Capital
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                We trade stock-index and gold futures with computer-run strategies instead of gut feeling, using a prop firm&apos;s capital rather than our own.
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-600 bg-white rounded-lg p-3.5 border border-slate-200">
                <p className="font-bold text-slate-900">How it works in plain words:</p>
                <p>
                  Paradox Algo strategies watch the chart and decide when to buy or sell. Shifu passes each signal to the broker in under a second, and every trade goes in with its stop-loss already set. Daily loss limits shut things off automatically, so fear and greed never get a vote.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Risk caps enforced automatically</span>
              <a href="/work" className="inline-flex items-center gap-1 font-bold text-violet-800 hover:text-violet-950">
                Details <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Print on Demand: wall art gallery */}
        <div className="rounded-xl border border-slate-200 bg-stone-50/50 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500/10 text-rose-700 border border-rose-500/20">
                  <ImageIcon size={24} />
                </div>
                <span className="rounded-full bg-rose-100/70 px-2.5 py-0.5 text-xs font-bold text-rose-800">
                  Print on Demand
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Wall Art from My Travels</h3>
              <p className="mt-3 text-sm sm:text-base leading-6 text-slate-600">
                Photos I&apos;ve taken from Patagonia to the Scottish Highlands, sold as canvas, metal and framed prints. Print on demand means each piece is printed and shipped only when someone orders it, so there&apos;s no warehouse and nothing goes to waste.
              </p>
            </div>
            <a
              href="https://fineartamerica.com/profiles/pablo-pratt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 shadow-md shrink-0"
            >
              Shop the prints <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { src: '/prints/zion.jpg', place: 'Zion National Park, Utah' },
              { src: '/prints/perito-moreno.jpg', place: 'Perito Moreno Glacier, Argentina' },
              { src: '/prints/machu-picchu.jpg', place: 'Machu Picchu, Peru' },
              { src: '/prints/scottish-highlands.jpg', place: 'Scottish Highlands' },
              { src: '/prints/cabo.jpg', place: 'Cabo San Lucas, Mexico' },
              { src: '/prints/edinburgh-2.jpg', place: 'Edinburgh Castle, Scotland' },
            ].map((photo) => (
              <figure key={photo.src} className="group overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.place}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-3 py-2 text-xs font-semibold text-slate-600">{photo.place}</figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Also on Redbubble. Want a specific photo, size or a custom piece?{' '}
            <a href="mailto:pablo.a.pratt@gmail.com?subject=Wall%20Art%20Print" className="font-bold text-slate-900 underline underline-offset-2">
              Email me
            </a>
            .
          </p>
        </div>

        {/* Venture 5: Custom Websites with 3 Pricing Tiers */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-stone-50 via-white to-slate-50 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 border border-slate-200">
                <Globe size={14} className="text-blue-600" />
                Web Design & Development
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Custom Websites for Small Businesses & Individuals
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-6 text-slate-600">
                We build clean, fast, mobile-friendly websites that you actually own. No bloated templates, no confusing page builders, and no monthly agency retainers.
              </p>
            </div>
            <a
              href="mailto:pablo.a.pratt@gmail.com?subject=Website%20Project"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 shadow-md shrink-0"
            >
              <Mail size={16} />
              Start a Website Project
            </a>
          </div>

          {/* Pricing Tiers (3 Cards) */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Tier 1: Basic */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-black text-slate-950">Basic</h4>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Starter</span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-950">$500</span>
                  <span className="text-xs font-semibold text-slate-500">one-time</span>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  Ideal for freelancers, solo practitioners, or simple one-location service businesses.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>One to three page site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mobile friendly on all screen sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Working contact form delivered to your inbox</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Launched on your own custom domain</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="mailto:pablo.a.pratt@gmail.com?subject=Website%20Project%20-%20Basic"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-900 transition hover:bg-slate-50 shadow-sm"
                >
                  <Mail size={14} />
                  Choose Basic
                </a>
              </div>
            </div>

            {/* Tier 2: Standard */}
            <div className="rounded-xl border-2 border-blue-600 bg-white p-6 shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                Most Popular
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-black text-slate-950">Standard</h4>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Growth</span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-950">$1,500</span>
                  <span className="text-xs font-semibold text-slate-500">one-time</span>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  Best for growing local businesses, contractors, restaurants, and medical practices.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Up to eight custom pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom design crafted to match your brand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Appointment booking or simple online store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Basic SEO so local customers find you on Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>One full month of edits and updates included</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="mailto:pablo.a.pratt@gmail.com?subject=Website%20Project%20-%20Standard"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-500 shadow-sm"
                >
                  <Mail size={14} />
                  Choose Standard
                </a>
              </div>
            </div>

            {/* Tier 3: Premium */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-black text-slate-950">Premium</h4>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bespoke</span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-slate-950">Contact for pricing</span>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  For businesses that need interactive software, membership access, or data workflows.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom web apps and client portals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Interactive dashboards and secure user logins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Payment systems & recurring subscriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom software, database & API integrations</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="mailto:pablo.a.pratt@gmail.com?subject=Website%20Project%20-%20Premium"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-900 transition hover:bg-slate-50 shadow-sm"
                >
                  <Mail size={14} />
                  Request Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
