// app/page.tsx (or app/music-snob/page.tsx)

"use client";

import { useState } from "react";

export default function MusicSnobPage() {
  const [input, setInput] = useState("");
  const [verdict, setVerdict] = useState<string | null>(null);

  const handleJudge = () => {
    setVerdict(judgeArtist(input));
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">The Music Snob</h1>
      <p className="max-w-xl text-center text-sm opacity-80">
        Ask the Snob what it thinks of an artist or band. Warning: it only truly
        respects dead Europeans who wrote symphonies.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="e.g., Nirvana, Bach, Smashing Pumpkins, Taylor Swift"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="border rounded px-4 py-2 text-sm font-semibold"
          onClick={handleJudge}
        >
          Judge
        </button>
      </div>

      {verdict && (
        <div className="mt-4 max-w-md text-center italic">
          {verdict}
        </div>
      )}
    </main>
  );
}

const classicalFavorites = [
  "bach",
  "beethoven",
  "mozart",
  "chopin",
  "debussy",
  "schubert",
  "bruckner",
  "mahler",
];

function judgeArtist(name: string): string {
  const n = name.trim().toLowerCase();

  if (!n) return "Say a name first, philistine.";

  if (n.includes("nirvana") || n.includes("smashing pumpkins")) {
    return "Derivative guitar noise. Try a string quartet sometime.";
  }

  if (classicalFavorites.some(c => n.includes(c))) {
    return "At last, someone with taste. Acceptable.";
  }

  return "I’m sure they’re very popular on Spotify. No further questions.";
}