import { ExternalLink, Newspaper, Radio, Tv } from 'lucide-react';

type PressItem = {
  outlet: string;
  type: string;
  title: string;
  date: string;
  description: string;
  url: string;
  tag: string;
  icon: typeof Newspaper;
};

const pressItems: PressItem[] = [
  {
    outlet: 'USA TODAY',
    type: 'National Feature',
    title: 'Gen Z, Student Loans and Financial Anxiety',
    date: 'Sept 2025',
    description:
      'Featured in a national front-page story examining how rising living expenses and student debt impact young borrowers navigating early careers. Also syndicated in print by the Times Record.',
    url: 'https://www.usatoday.com/story/life/health-wellness/2025/09/03/gen-z-student-loan-financial-anxiety-stress/85724653007/',
    tag: 'National Press',
    icon: Newspaper,
  },
  {
    outlet: 'Telemundo 52',
    type: 'Television Broadcast',
    title: 'Opciones de Pago de Deuda Estudiantil (Tu Dinero)',
    date: 'Oct 2025',
    description:
      'Spanish-language broadcast interview covering concrete repayment strategies, borrower rights, and public assistance programs for Hispanic families and students across the country.',
    url: 'https://www.telemundo52.com/tu-dinero/opciones-pago-deuda-estudiantil/2808422/',
    tag: 'Spanish Media',
    icon: Tv,
  },
  {
    outlet: 'Fox 7 Austin & CBS Austin',
    type: 'Consumer News Series',
    title: 'The Receipts: Navigating Federal Student Loan Shifts',
    date: 'Aug 2026',
    description:
      'Broadcast investigative interview analyzing automatic plan transitions, interest capitalization, and the real-world financial pressure facing Austin workers and households.',
    url: 'https://cbsaustin.com/news/local/austin-borrowers-warns-of-stress-as-federal-student-loan-plans-shift-automatically',
    tag: 'Broadcast TV',
    icon: Tv,
  },
  {
    outlet: 'Young Invincibles',
    type: 'National Alumni Highlight',
    title: 'From Community College to Enterprise Tech & Civic Leadership',
    date: 'July 2023',
    description:
      'National advisory board profile highlighting civic advocacy, healthcare and tenant rights policy work, and the educational journey from Austin Community College to UT Austin.',
    url: 'https://younginvincibles.org/2023/07/10/alumni-highlight-pablo-pratt/',
    tag: 'Policy & Board',
    icon: Radio,
  },
  {
    outlet: 'OtherWords Syndicate',
    type: 'Published Op-Ed',
    title: 'The Real Economic Value of Community College',
    date: 'National Syndicate',
    description:
      'Commentary examining community college pathways as accessible springboards for tech sales, software engineering, and upward economic mobility without lifelong debt.',
    url: 'https://otherwords.org/the-value-of-community-college/',
    tag: 'Op-Ed',
    icon: Newspaper,
  },
  {
    outlet: 'The Daily Texan',
    type: 'Campus & Civic Coverage',
    title: 'Austin Housing, Student Representation, and Campus Safety',
    date: '2019 – 2021',
    description:
      'Featured and quoted across university reporting on municipal gentrification, College Student Commission advocacy, and West Campus physical safety initiatives.',
    url: 'https://thedailytexan.com/2021/12/15/utpd-plans-long-term-improvements-to-west-campus-safety-following-shooting-other-incidents/',
    tag: 'Civic Reporting',
    icon: Newspaper,
  },
];

export default function Press() {
  return (
    <section id="press" className="bg-stone-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Media & Press</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">Interviews and public reporting.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Conversations on student debt, consumer finance, local economic policy, and education access across national outlets, television broadcasts, and Spanish-language media.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pressItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                      <Icon size={14} />
                      {item.outlet}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-950 leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.tag}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    Read piece
                    <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
