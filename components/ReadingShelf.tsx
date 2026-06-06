const shelves = [
  {
    title: 'Leadership and sales',
    books: [
      ['How to Win Friends and Influence People', 'Dale Carnegie'],
      ['Principles', 'Ray Dalio'],
      ['Start with Why', 'Simon Sinek'],
      ['Extreme Ownership', 'Jocko Willink'],
      ['The Dichotomy of Leadership', 'Jocko Willink'],
      ['How to Win at the Sport of Business', 'Mark Cuban'],
      ['Extraordinary Leadership', 'Robin Sharma'],
      ['The 10X Rule', 'Grant Cardone'],
      ['Sell or Be Sold', 'Grant Cardone'],
      ['The Hard Thing About Hard Things', 'Ben Horowitz'],
      ['Shoe Dog', 'Phil Knight'],
      ['The Ride of a Lifetime', 'Robert Iger'],
      ['Play Nice but Win', 'Michael Dell'],
      ['Customer-Centric Selling', 'Michael T. Bosworth'],
      ['The Infinite Game', 'Simon Sinek'],
    ],
  },
  {
    title: 'Business and investing',
    books: [
      ['Thinking, Fast and Slow', 'Daniel Kahneman'],
      ['The Millionaire Next Door', 'Thomas Stanley'],
      ['I Will Teach You to Be Rich', 'Ramit Sethi'],
      ['The Total Money Makeover', 'Dave Ramsey'],
      ['Rich Dad Poor Dad', 'Robert Kiyosaki'],
      ['Everyday Millionaires', 'Chris Hogan'],
      ['The Richest Man in Babylon', 'George S. Clason'],
      ['Think and Grow Rich', 'Napoleon Hill'],
      ['The Snowball', 'Alice Schroeder'],
      ['Digital Gold', 'Nathaniel Popper'],
      ['Blockchain Revolution', 'Don Tapscott'],
      ['Money', 'Felix Martin'],
      ['The Fifth Risk', 'Michael Lewis'],
      ['Misbehaving', 'Richard H. Thaler'],
      ['The Four', 'Scott Galloway'],
    ],
  },
  {
    title: 'Power and history',
    books: [
      ['1984', 'George Orwell'],
      ['48 Laws of Power', 'Robert Greene'],
      ['The Prince', 'Niccolò Machiavelli'],
      ['The Art of War', 'Sun Tzu'],
      ['Genghis Khan and the Making of the Modern World', 'Jack Weatherford'],
      ['On Tyranny', 'Timothy Snyder'],
      ['Dark Money', 'Jane Mayer'],
      ['Dog Whistle Politics', 'Ian Haney López'],
      ['The War on Normal People', 'Andrew Yang'],
      ['The Mueller Report', 'Robert Mueller'],
      ['Superclass', 'David Rothkopf'],
      ["The Dictator's Handbook", 'Bruce Bueno de Mesquita and Alastair Smith'],
      ['Upheaval', 'Jared Diamond'],
      ['Legacy of Ashes', 'Tim Weiner'],
      ['The Right Side of History', 'Ben Shapiro'],
    ],
  },
  {
    title: 'Tech and the future',
    books: [
      ['The Everything Store', 'Brad Stone'],
      ['Zero to One', 'Peter Thiel'],
      ['How Google Works', 'Eric Schmidt'],
      ['Cracking the Tech Interview', 'Gayle Laakman McDowell'],
      ['Permanent Record', 'Edward Snowden'],
      ['Ghost in the Wires', 'Kevin Mitnick'],
      ['The Industries of the Future', 'Alec Ross'],
      ['The Next 100 Years', 'George Friedman'],
      ['The Next Pandemic', 'Ali S. Khan'],
      ['Human Errors', 'Nathan H. Lents'],
      ['Ten Drugs', 'Thomas Hager'],
      ["What Doesn't Kill Us", 'Scott Carney'],
      ['Underland', 'Robert Macfarlane'],
      ['The Grand Design', 'Stephen Hawking'],
      ['Astrophysics for People in a Hurry', 'Neil deGrasse Tyson'],
    ],
  },
  {
    title: 'Mindset and habits',
    books: [
      ['The War of Art', 'Steven Pressfield'],
      ['The Dip', 'Seth Godin'],
      ['Linchpin', 'Seth Godin'],
      ['Tribes', 'Seth Godin'],
      ['The Power of Habit', 'Charles Duhigg'],
      ['The Obstacle Is the Way', 'Ryan Holiday'],
      ['Ego Is the Enemy', 'Ryan Holiday'],
      ['Stillness Is the Key', 'Ryan Holiday'],
      ['The Power of Now', 'Eckhart Tolle'],
      ['Grit', 'Angela Duckworth'],
      ['The 5 Second Rule', 'Mel Robbins'],
      ['Atomic Habits', 'James Clear'],
    ],
  },
  {
    title: 'Memoir and fiction',
    books: [
      ['Born a Crime', 'Trevor Noah'],
      ['Becoming', 'Michelle Obama'],
      ['Promise Me, Dad', 'Joe Biden'],
      ['Make Your Bed', 'W. H. McRaven'],
      ['Sea Stories', 'W. H. McRaven'],
      ['Lone Survivor', 'Marcus Luttrell'],
      ['American Sniper', 'Chris Kyle'],
      ['Steve Jobs', 'Walter Isaacson'],
      ['Elon Musk', 'Ashlee Vance'],
      ['A Promised Land', 'Barack Obama'],
      ['Greenlights', 'Matthew McConaughey'],
      ['Endurance', 'Alfred Lansing'],
      ['The Things They Carried', "Tim O'Brien"],
      ['Project Hail Mary', 'Andy Weir'],
      ['Randomize', 'Andy Weir'],
      ['The Egg', 'Andy Weir'],
      ['Artemis', 'Andy Weir'],
      ['Annihilation', 'Jeff VanderMeer'],
      ['Harry Potter and the Philosopher\'s Stone', 'J. K. Rowling'],
      ['Harry Potter and the Chamber of Secrets', 'J. K. Rowling'],
      ['Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling'],
      ['Harry Potter and the Goblet of Fire', 'J. K. Rowling'],
      ['Harry Potter and the Order of the Phoenix', 'J. K. Rowling'],
      ['Harry Potter and the Half-Blood Prince', 'J. K. Rowling'],
      ['Harry Potter and the Deathly Hallows', 'J. K. Rowling'],
      ['A Game of Thrones', 'George R. R. Martin'],
      ['A Clash of Kings', 'George R. R. Martin'],
      ['A Storm of Swords', 'George R. R. Martin'],
      ['A Feast for Crows', 'George R. R. Martin'],
      ['A Dance with Dragons', 'George R. R. Martin'],
      ['Fire and Blood', 'George R. R. Martin'],
      ['A Knight of the Seven Kingdoms', 'George R. R. Martin'],
      ['The Ballad of Songbirds and Snakes', 'Suzanne Collins'],
      ['The Hobbit', 'J. R. R. Tolkien'],
      ['Norse Mythology', 'Neil Gaiman'],
      ['The Tale of Beedle the Bard', 'J. K. Rowling'],
      ['Peter Pan', 'J. M. Barrie'],
      ['Treasure Island', 'Robert Louis Stevenson'],
      ['Slaughterhouse-Five', 'Kurt Vonnegut'],
    ],
  },
];

export default function ReadingShelf() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Reading</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">Books I have actually read.</h1>
            <p className="mt-5 leading-8 text-slate-600">
              A broad shelf of the books I actually read, grouped by theme. I left out test prep and language drills so the list reads like a real shelf, not a class syllabus.
            </p>
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80"
              alt="Books stacked on a table"
              className="mt-8 h-72 w-full rounded-lg object-cover shadow-md"
            />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Fiction, business, history, memoir, and the occasional book that still does useful work in your head.
            </p>
          </div>

          <div className="grid gap-8">
            {shelves.map((shelf, index) => (
              <section key={shelf.title} className={`rounded-lg border border-slate-200 bg-white p-5 shadow-sm ${index < 3 ? 'ring-1 ring-blue-100' : ''}`}>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-black text-slate-950">{shelf.title}</h2>
                  {index < 3 && <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Featured</span>}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {shelf.books.map(([title, author]) => (
                    <article key={title} className="rounded-md border border-slate-100 bg-stone-50 p-3">
                      <p className="font-semibold text-slate-950">{title}</p>
                      <p className="text-sm text-slate-600">{author}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
