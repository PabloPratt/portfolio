'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Camera,
  Car,
  Check,
  Cpu,
  ExternalLink,
  Layers,
  Mail,
  MapPin,
  Mountain,
  Printer,
  Sparkles,
  Sprout,
  Wrench,
} from 'lucide-react';

export default function Hobbies() {
  return (
    <section className="bg-stone-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-800 mb-4">
            <Sparkles size={14} />
            Life Outside the Screen
          </div>
          <h1 className="text-3xl font-black text-slate-950 sm:text-5xl tracking-tight">
            Craft, outdoor trails & hands-on making.
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
            A look into the things I cultivate, build, and explore when I step away from code and calls. From growing fresh microgreens for Austin chefs to backcountry hiking, 3D printing physical parts, and restoring old hardware at the workbench.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* 1. Urban Agriculture & Microgreens */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <Sprout size={24} />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                  <MapPin size={12} />
                  Austin, TX Harvest
                </div>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1200&q=80"
                  alt="Lush green microgreens growing in trays"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-2xl font-black text-slate-950">Urban Farming & Microgreens</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Soil-to-Table • Direct to Austin Restaurants
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Growing high-nutrient microgreens (up to 40x the nutrient concentration of mature greens) under controlled vertical shelving. Harvested live and delivered directly to local chefs, food trucks, and restaurants across the Austin area.
              </p>

              {/* Fast Turnaround Varieties */}
              <div className="mt-5 rounded-xl border border-slate-200 bg-stone-50 p-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  High-Turnaround Restaurant Varieties:
                </p>
                <div className="grid gap-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Rambo & Daikon Radish (5–7 days):</strong> Peppery punch, vibrant magenta stems for tacos and burgers.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Speckled Pea Shoots (8–10 days):</strong> Sweet, crunchy, and leafy; high-volume favorite for salads and stir-fries.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Black Oil Sunflower (7–10 days):</strong> Hearty, nutty crunch favored for sandwiches and grain bowls.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Calabrese Broccoli (7–10 days):</strong> Mild, delicate brassica packed with sulforaphane.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Spicy Mustard & Cabbage (7–9 days):</strong> Intense horseradish kick with violet contrast on the plate.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Weekly fresh harvest</span>
              <a
                href="mailto:pablo.a.pratt@gmail.com?subject=Austin%20Microgreens%20Inquiry"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                <Mail size={13} />
                Restaurant & Order Inquiries →
              </a>
            </div>
          </div>

          {/* 2. Hiking & Landscape Photography */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 border border-blue-500/20">
                  <Mountain size={24} />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-blue-100/70 px-2.5 py-0.5 text-xs font-bold text-blue-800">
                  <Camera size={12} />
                  Fine Art Photography
                </div>
              </div>

              {/* Photo Showcase Grid */}
              <div className="grid grid-cols-2 gap-2 mb-5 overflow-hidden rounded-xl">
                <div className="aspect-[4/3] overflow-hidden border border-slate-200 rounded-lg">
                  <img
                    src="/prints/zion.jpg"
                    alt="Zion National Park, Utah"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden border border-slate-200 rounded-lg">
                  <img
                    src="/prints/perito-moreno.jpg"
                    alt="Perito Moreno Glacier, Patagonia, Argentina"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden border border-slate-200 rounded-lg">
                  <img
                    src="/prints/machu-picchu.jpg"
                    alt="Machu Picchu, Peru"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden border border-slate-200 rounded-lg">
                  <img
                    src="/prints/scottish-highlands.jpg"
                    alt="Scottish Highlands"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-950">Hiking & Landscape Photography</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                National Parks • Trail Backpacking • Fine Art Prints
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                I love hiking rugged backcountry trails and spending hours in open wild terrain. Proof of the journey lives on Fine Art America, where my nature and travel photography is sold as museum-grade canvas, acrylic, and framed wall art.
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-stone-50 p-4 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-900">Favorite Trails & Destinations:</p>
                <p className="leading-5">
                  Big Bend, Zion, Grand Canyon, White Sands, Carlsbad Caverns, Arches, the Patagonian ice fields of Argentina, Peru&apos;s Sacred Valley, and the Scottish Highlands.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Fine Art America Artist</span>
              <a
                href="https://fineartamerica.com/profiles/pablo-pratt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
              >
                Shop Prints on Fine Art America
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* 3. 3D Printing & Physical Fabrication */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-700 border border-purple-500/20">
                  <Printer size={24} />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-purple-100/70 px-2.5 py-0.5 text-xs font-bold text-purple-800">
                  <Layers size={12} />
                  WALL-E Print Lab
                </div>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-5">
                <img
                  src="/prints/austin-topo.png"
                  alt="Austin Topographical 3D Map Rendering"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-2xl font-black text-slate-950">3D Printing & Prototyping</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
                Parametric CAD • Bambu Lab A1 mini • OpenSCAD & Blender
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Turning code and digital geometry into physical plastic parts. Operating our Bambu Lab A1 mini with 4-color AMS multi-material precision (with a Creality K2 Plus on the way for large-format engineering prints).
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-stone-50 p-4 space-y-2 text-xs text-slate-600">
                <p className="font-bold text-slate-900">Custom Builds & Models:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>Austin Topo-Skyline 3D Map:</strong> Multi-material terrain and building map generated from LiDAR and OpenStreetMap data.</li>
                  <li><strong>Custom 3D Monopoly Set:</strong> 50+ bespoke 3D-modeled multi-color game pieces and modular board organizers.</li>
                  <li><strong>Workshop & Farm Fixtures:</strong> T5 light mounts, 120mm wire rack cooling clips, and custom seed shakers.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Taking custom commissions</span>
              <Link
                href="/about#ventures"
                className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
              >
                View 3D Studio Setup <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* 4. Taking Apart Old Tech & Electronics Repair */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/20">
                  <Wrench size={24} />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-amber-100/70 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                  <Cpu size={12} />
                  Hardware Bench
                </div>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1200&q=80"
                  alt="Electronics circuit board and soldering repair bench"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-2xl font-black text-slate-950">Hardware Teardowns & Board Repair</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
                Fixing Forgotten Tech • Soldering • Custom PC Building
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                I love taking apart broken electronics, tracing circuits with a multimeter, and soldering replacement components to bring dead hardware back to life. No black boxes—understanding how circuits, firmware, and power rails actually interact at the metal.
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-stone-50 p-4 space-y-2 text-xs text-slate-600">
                <p className="font-bold text-slate-900">Workbench Experiments:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>Thermal Label Printer Hacking:</strong> Writing custom GDI raster pipelines to blast raw bitmap art to USB thermal heads.</li>
                  <li><strong>Custom Desktop PC Builds:</strong> Hardware tuning, thermal optimization, and OpenRGB peripheral lighting scripts.</li>
                  <li><strong>Board-Level Diagnostics:</strong> Replacing blown capacitors, testing relay continuity, and fixing connector pins.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Bench testing & repair</span>
              <a
                href="mailto:pablo.a.pratt@gmail.com?subject=Hardware%20Repair%20Tinkering"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
              >
                Talk Hardware <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* 5. DIY Automotive Mechanics & Vehicle Telemetry */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-700 border border-rose-500/20">
                  <Car size={24} />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-rose-100/70 px-2.5 py-0.5 text-xs font-bold text-rose-800">
                  Garage Telemetry
                </div>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"
                  alt="Car mechanic engine bay and diagnostic tools"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-2xl font-black text-slate-950">DIY Wrenching & Garage Mechanics</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-rose-700">
                OBD-II CAN-Bus Logging • Ford F-150 & Toyota RAV4 Maintenance
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Maintaining our family vehicles through hands-on garage wrenching paired with digital diagnostics. Using FORScan, OBDLink adapters, and Python CAN-bus sniffers to diagnose body control modules, clear solid-state FET driver latches, and monitor transmission fluid temperature curves.
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-stone-50 p-4 space-y-2 text-xs text-slate-600">
                <p className="font-bold text-slate-900">Garage Benchmarks:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>+$1,280+ Net DIY Savings:</strong> Diagnosed Ford F-150 BCM lighting circuits, cleaned chassis grounds, and replaced multi-function stalks.</li>
                  <li><strong>Toyota Techstream Inspection:</strong> D-4S dual-injection monitoring and fluid services.</li>
                  <li><strong>Built MotorMind:</strong> Translating obscure automotive diagnostic codes into plain English procedures.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Self-sufficient garage work</span>
              <Link
                href="/work"
                className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 hover:text-rose-900 transition-colors"
              >
                Explore MotorMind on Work <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* 6. Creative Writing & Speculative Fiction */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-700 border border-indigo-500/20">
                  <BookOpen size={24} />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-indigo-100/70 px-2.5 py-0.5 text-xs font-bold text-indigo-800">
                  Worldbuilding
                </div>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
                  alt="Writing desk with notebook and fountain pen"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-2xl font-black text-slate-950">Fiction Writing & Folklore</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                Epic Fantasy Manuscripts • Children&apos;s Folktales • Essays
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Writing is where I explore complex systems of culture, memory, and myth. I draft long-form speculative fiction manuscripts and co-author multicultural children&apos;s folktales, alongside personal essays and advocacy op-eds on higher education affordability.
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-stone-50 p-4 space-y-2 text-xs text-slate-600">
                <p className="font-bold text-slate-900">Manuscripts & Works in Progress:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>Chronicles of the Veil:</strong> Finished 132,000-word epic fantasy novel manuscript.</li>
                  <li><strong>Folklore & Children&apos;s Books:</strong> <em>The Heart of the Hemisphere</em> and <em>Of Stones and Stars</em>.</li>
                  <li><strong>Essays & Op-Eds:</strong> Published reflections on transferring from community college to UT Austin.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Long-form storytelling</span>
              <Link
                href="/writing"
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 transition-colors"
              >
                Read Selected Essays <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Navigation Footer */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Explore Further</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'Work Showcase', href: '/work', isExternal: false },
              { label: 'Real-World Ventures', href: '/about#ventures', isExternal: false },
              { label: 'Fine Art America Gallery', href: 'https://fineartamerica.com/profiles/pablo-pratt', isExternal: true },
              { label: 'Writing Shelf', href: '/writing', isExternal: false },
              { label: 'Reading List', href: '/reading', isExternal: false },
              { label: 'Get in Touch', href: '/contact', isExternal: false },
            ].map((item) =>
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-stone-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
                >
                  {item.label}
                  <ExternalLink size={12} />
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-slate-300 bg-stone-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
