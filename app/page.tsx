import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const paths = [
  {
    title: "About",
    href: "/about",
    kicker: "Background",
    text: "Dell and Uber sales, UT Austin, public-interest work, and the slightly messy path that led to building software.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Work",
    href: "/work",
    kicker: "Projects",
    text: "Janus, DOOOD, ATX Services Scout, Contest Finder, Obsidian Flow, EMDR-BLS, and the experiments that sit behind them.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Leadership",
    href: "/leadership",
    kicker: "Dell + ERG",
    text: "Quota wins, technical sales training, global accounts, Latino Connection, UN representation, and executive communication.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hobbies",
    href: "/hobbies",
    kicker: "Under the pictures",
    text: "Reading, writing, projects, and the quieter corners of the site.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contact",
    href: "/contact",
    kicker: "Reach out",
    text: "Email, LinkedIn, and the live links worth clicking first.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Consulting",
    href: "/consulting",
    kicker: "Contract work",
    text: "Focused advisory for product, data, sales, dashboards, and stuck prototypes that need a clear next step.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-stone-50 text-slate-950">
        <section className="relative min-h-[72vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85"
            alt="Warm workspace with notebooks, laptop, and city light"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
                Product builder / sales leader / security generalist
              </p>
              <h1 className="text-5xl font-black leading-[0.95] sm:text-7xl">
                I build useful software from messy real-world problems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                I learned sales at Uber and Dell, studied security and business at UT Austin, and now build tools around markets, business data, and everyday workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-3xl font-black text-slate-950">237%</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">Peak quota attainment at Dell</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-3xl font-black text-slate-950">7.5K+</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">ERG members led globally</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-3xl font-black text-slate-950">EN/ES</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">Fluent bilingual, native Spanish speaker</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-3xl font-black text-slate-950">M.S.</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">Information Security & Privacy at UT Austin</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Explore</p>
              <h2 className="text-3xl font-black text-slate-950">Pick a lane.</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Start with the project portfolio, then use the rest of the site for background, leadership, and contact.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {paths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/8] overflow-hidden">
                  <img
                    src={path.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{path.kicker}</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">{path.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{path.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
