export default function Leadership() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">Leadership</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            The work outside the job title matters too.
          </h1>
          <p className="mt-6 leading-8 text-slate-300">
            My Dell experience is not just quota and pipeline. It is also global accounts, technical selling, executive communication, and leading a community at real scale.
          </p>

          <div className="mt-8 space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Organizations</p>
            <div className="space-y-3 text-slate-200">
              <p><span className="font-semibold text-white">Dell Latino Connection ERG</span> - Global Chair, 7,500+ members</p>
              <p><span className="font-semibold text-white">TNOYS</span> - Texas Emerging Leaders Board</p>
              <p><span className="font-semibold text-white">Young Invincibles</span> - National Youth Advisory Board</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {[
            {
              stat: "7,500+",
              title: "Global Chair, Dell Latino Connection ERG",
              text: "Leading Dell's largest and fastest-growing employee network, and the youngest sitting ERG leader in company history.",
            },
            {
              stat: "237%",
              title: "Peak quota attainment",
              text: "Exceeded quota up to 237%, with 146% attainment for three consecutive quarters.",
            },
            {
              stat: "Top 5%",
              title: "Technical Sales Program",
              text: "Selected into Dell's elite Technical Sales Program, strengthening technical discovery and solution positioning across security, cloud, and infrastructure.",
            },
            {
              stat: "UN",
              title: "Executive-level representation",
              text: "Represented Dell at the United Nations and spoke alongside Michael Dell during a global Quarterly Broadcast Review.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-black text-amber-300">{item.stat}</p>
              <h2 className="mt-3 text-xl font-bold">{item.title}</h2>
              <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
