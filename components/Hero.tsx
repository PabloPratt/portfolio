export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Full Stack Developer & Product Builder
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl">
              I build innovative web applications that solve real problems. From financial market analysis to mental health tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              View My Work
            </a>
            <a
              href="/tools"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
            >
              Developer Tools
            </a>
            <a
              href="https://github.com/PabloPratt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
            >
              GitHub Profile
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-slate-700">
            <div>
              <p className="text-3xl font-bold text-blue-400">5</p>
              <p className="text-slate-400">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">100%</p>
              <p className="text-slate-400">Accessible</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">2+</p>
              <p className="text-slate-400">Years Building</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">♾️</p>
              <p className="text-slate-400">Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
