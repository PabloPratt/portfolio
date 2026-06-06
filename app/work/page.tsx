import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1800&q=85"
            alt="Data dashboard on a monitor"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="relative mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">Work</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Projects that came from actual problems.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Some are production apps. Some are prototypes. The point is the same: take a messy workflow and make it easier to understand or act on.
            </p>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
