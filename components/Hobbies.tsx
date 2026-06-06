import Link from 'next/link';

const hobbies = [
  {
    title: 'Reading',
    href: '/reading',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80',
    text: 'Mostly business, history, politics, memoir, and anything that makes me think harder than I want to.',
  },
  {
    title: 'Writing',
    href: '/writing',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    text: 'Articles, interviews, and the occasional piece that is worth keeping public.',
  },
  {
    title: 'Projects',
    href: '/work',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    text: 'Trading, market structure, and tools that make sense of noisy data.',
  },
  {
    title: 'Now',
    href: '/now',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
    text: 'The current state of work, school, reading, and whatever else is active this month.',
  },
];

export default function Hobbies() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Hobbies</p>
            <h1 className="text-4xl font-black text-slate-950 sm:text-5xl">The quieter side of the site.</h1>
          </div>
          <p className="max-w-xl text-slate-600">
            A little quieter than the work pages. Just the things I keep coming back to when I am not on a project or a call.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {hobbies.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={item.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Explore from here</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              ['Reading', '/reading'],
              ['Writing', '/writing'],
              ['Projects', '/work'],
              ['Now', '/now'],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
