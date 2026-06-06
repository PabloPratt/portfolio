'use client';

import { type FormEvent, useEffect, useState } from 'react';

type Trip = {
  id: string;
  place: string;
  date: string;
  note: string;
  image: string;
};

const seedTrips: Trip[] = [
  {
    id: 'seed-austin',
    place: 'Austin',
    date: '2026-01-01',
    note: 'Home base, but still worth a photo when the light is right.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'seed-road',
    place: 'On the road',
    date: '2026-01-01',
    note: 'The kind of trip where a diner stop ends up being the best part.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
];

const destinationGroups = [
  {
    label: 'Countries',
    items: ['Scotland', 'England', 'Mexico', 'Spain', 'Bolivia', 'Ireland', 'Argentina', 'Chile', 'Peru'],
  },
  {
    label: 'National Parks',
    items: ['Grand Canyon', 'Zion', 'White Sands', 'Big Bend', 'Carlsbad Caverns', 'Arches National Park'],
  },
];

export default function TravelJournal() {
  const [trips, setTrips] = useState<Trip[]>(seedTrips);
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const raw = window.localStorage.getItem('travel-journal');
    if (raw) setTrips(JSON.parse(raw));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('travel-journal', JSON.stringify(trips));
  }, [trips]);

  const handleImage = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result || ''));
    reader.readAsDataURL(file);
  };

  const addTrip = (event: FormEvent) => {
    event.preventDefault();
    if (!place.trim() || !date || !note.trim() || !image) return;
    setTrips([
      {
        id: crypto.randomUUID(),
        place: place.trim(),
        date,
        note: note.trim(),
        image,
      },
      ...trips,
    ]);
    setPlace('');
    setDate('');
    setNote('');
    setImage('');
  };

  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Travel</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">A simple photo journal.</h1>
            <p className="mt-5 leading-8 text-slate-600">
              Add a photo, a place, and a short note. Keep it easy. This is meant to feel more like a wall of snapshots than a polished travel blog.
            </p>
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Open road with mountains in the distance"
              className="mt-8 h-64 w-full rounded-lg object-cover shadow-md"
            />
            <div className="mt-6 space-y-4">
              {destinationGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPlace(item)}
                        className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={addTrip} className="mt-8 space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div>
                <label className="text-sm font-semibold text-slate-700">Place</label>
                <input value={place} onChange={(e) => setPlace(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Madrid, Austin, Scotland..." />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Date</label>
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Note</label>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="What made the place worth saving?" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImage(e.target.files?.[0] || null)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2"
                />
              </div>
              <button type="submit" className="w-full rounded-lg bg-slate-950 px-4 py-3 font-semibold text-white">
                Add trip
              </button>
            </form>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {trips.map((trip) => (
              <article key={trip.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[16/10]">
                  <img src={trip.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{trip.date}</p>
                  <h2 className="mt-2 text-xl font-black text-slate-950">{trip.place}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{trip.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
