import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero-workspace.png"
          alt="Developer workspace with dashboards"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="space-y-8 max-w-2xl">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">Builder Portfolio</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Pablo Pratt
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300">
              Software projects for public data, market signals, personal productivity, and practical decision tools.
            </p>
            <p className="text-lg text-slate-400">
              Full-stack developer with a background in security, privacy, and enterprise leadership. I build focused interfaces for messy real-world information.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              View Projects
            </a>
            <a
              href="https://github.com/PabloPratt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-slate-600"
            >
              GitHub Profile
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 border-t border-slate-800">
            <div>
              <p className="text-3xl font-bold text-blue-400">10+</p>
              <p className="text-slate-400 text-sm">Live Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">25K+</p>
              <p className="text-slate-400 text-sm">Lines of Code</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">3</p>
              <p className="text-slate-400 text-sm">Degrees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
