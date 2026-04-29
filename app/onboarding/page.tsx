"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Vibe } from "@/types";

const vibeOptions: Vibe[] = [
  "Foodie",
  "Night Owl",
  "Culture Seeker",
  "Hidden Gems",
  "Design Hunter",
  "Coffee Lover"
];
const vibeLabels: Record<Vibe, string> = {
  Foodie: "Foodie / Tapeo",
  "Night Owl": "Night Owl / Noche",
  "Culture Seeker": "Culture Seeker / Cultura",
  "Hidden Gems": "Hidden Gems / Joyas Ocultas",
  "Design Hunter": "Design Hunter / Diseno",
  "Coffee Lover": "Coffee Lover / Cafecito"
};

export default function OnboardingPage() {
  const [selected, setSelected] = useState<Vibe[]>([]);

  const toggle = (vibe: Vibe) =>
    setSelected((prev) =>
      prev.includes(vibe) ? prev.filter((item) => item !== vibe) : [...prev, vibe]
    );

  return (
    <main className="section-container py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="heading-display text-5xl">Pick your vibe</h1>
        <p className="mt-3 text-stone-600">
          We will personalize your Spain city feed with spots that match your
          energy.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {vibeOptions.map((vibe) => (
            <button
              key={vibe}
              onClick={() => toggle(vibe)}
              className={`rounded-full px-4 py-2 text-sm ${
                selected.includes(vibe)
                  ? "bg-coral text-white"
                  : "border border-stone-300 text-stone-700"
              }`}
            >
              {vibeLabels[vibe]}
            </button>
          ))}
        </div>
        <Button className="mt-8">Finish Setup</Button>
      </div>
    </main>
  );
}
