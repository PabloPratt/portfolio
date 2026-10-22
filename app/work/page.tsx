import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <div className="bg-[#06080f] text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
      <Header />
      <main id="main-content" className="bg-mesh-dark">
        {/* High-Fidelity Hero Header */}
        <section className="relative px-4 pt-16 pb-12 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="mx-auto max-w-7xl">
            {/* Top Verified Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-blue-300 mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 status-ping" />
              <span>Selected Software Projects</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
                  Architected for scale.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                    Built for everyday workflows.
                  </span>
                </h1>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  Explore business research, household finance, private writing, and digital footprint projects. Each listing includes a link to the application.
                </p>
              </div>

            </div>
          </div>
        </section>

        <Projects />
      </main>
      <Footer />
    </div>
  );
}
