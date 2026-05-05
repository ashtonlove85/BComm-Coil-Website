"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/mock-data";
import { SpotCategory } from "@/types";
import { ExploreMap } from "@/components/explore/explore-map";

export type Spot = {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  category: SpotCategory;
  tags: string[];
  image: string;
  lat: number;
  lng: number;
};

const PER_PAGE = 12;
const categoryLabels: Record<SpotCategory, string> = {
  Food: "Tapas & Food",
  Coffee: "Cafe Culture",
  Nightlife: "Noche",
  Culture: "Cultura",
  Shopping: "Mercados & Shops",
  Views: "Miradores",
  "Hidden Gems": "Joyas Ocultas"
};

export function ExploreShell({ initialSpots }: { initialSpots: Spot[] }) {
  const [activeCategory, setActiveCategory] = useState<SpotCategory | "All">("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "city" | "category">("city");
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [selectedId, setSelectedId] = useState<string>();
  const normalizedQuery = query.trim().toLowerCase();

  const filteredSpots = useMemo(() => {
    const byCategory = initialSpots.filter((spot) =>
      activeCategory === "All" ? true : spot.category === activeCategory
    );

    const byQuery = byCategory.filter((spot) =>
      normalizedQuery.length === 0
        ? true
        : `${spot.name} ${spot.neighborhood} ${spot.city}`.toLowerCase().includes(normalizedQuery)
    );

    const sorted = [...byQuery].sort((a, b) => {
      if (sortBy === "city") return a.city.localeCompare(b.city);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return a.name.localeCompare(b.name);
    });

    // Surface one spot per city first so every city appears upfront.
    const seenCities = new Set<string>();
    const cityFirst: Spot[] = [];
    const remainder: Spot[] = [];

    sorted.forEach((spot) => {
      if (!seenCities.has(spot.city)) {
        seenCities.add(spot.city);
        cityFirst.push(spot);
        return;
      }
      remainder.push(spot);
    });

    return [...cityFirst, ...remainder];
  }, [activeCategory, initialSpots, normalizedQuery, sortBy]);

  const visibleSpots = useMemo(() => filteredSpots.slice(0, visibleCount), [filteredSpots, visibleCount]);

  useEffect(() => {
    setVisibleCount(PER_PAGE);
  }, [activeCategory, sortBy, normalizedQuery]);

  async function toggleSave(id: string) {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function useNearMe() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const nearest = [...filteredSpots].sort((a, b) => {
        const d1 = Math.hypot(a.lat - latitude, a.lng - longitude);
        const d2 = Math.hypot(b.lat - latitude, b.lng - longitude);
        return d1 - d2;
      });
      setSelectedId(nearest[0]?.id);
    });
  }

  return (
    <main className="section-container py-8">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="heading-display text-4xl">Explore Spain Like a Local</h1>
          <p className="mt-1 text-sm text-stone-600">
            Discover barrios, plazas, tapas bars, and creator-picked city corners.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            placeholder="Search city, barrio, or spot"
            className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm outline-none placeholder:text-stone-400 focus:border-coral"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm outline-none focus:border-coral"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "name" | "city" | "category")}
          >
            <option value="name">Sort: Name</option>
            <option value="city">Sort: City</option>
            <option value="category">Sort: Category</option>
          </select>
          <Button variant="secondary" onClick={useNearMe}>
            Cerca de mi
          </Button>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        <button
          className={`rounded-full px-3 py-1.5 text-xs ${activeCategory === "All" ? "bg-coral text-white" : "border border-stone-300 text-stone-700"}`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full px-3 py-1.5 text-xs ${activeCategory === category ? "bg-coral text-white" : "border border-stone-300 text-stone-700"}`}
            onClick={() => setActiveCategory(category)}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <section className="grid gap-4 lg:grid-cols-[420px_1fr]">
        <div className="space-y-3 pr-1">
          {visibleSpots.map((spot, idx) => (
            <motion.article
              key={spot.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              className="glass-card group rounded-2xl p-3 hover:border-coral/50"
              onMouseEnter={() => setSelectedId(spot.id)}
            >
              <div className="relative h-44 w-full overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-xl">{spot.name}</h2>
                    <p className="text-sm text-stone-600">
                      {spot.neighborhood}, {spot.city}
                    </p>
                  </div>
                  <button
                    className="rounded-full border border-stone-300 px-3 py-1 text-xs hover:border-coral"
                    onClick={() => toggleSave(spot.id)}
                  >
                    {saved[spot.id] ? "Saved" : "Save"}
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {spot.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <Link href={`/spot/${spot.id}`} className="mt-3 inline-block text-sm text-coral">
                  Open spot
                </Link>
              </div>
            </motion.article>
          ))}
          {visibleCount < filteredSpots.length && (
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setVisibleCount((count) => count + PER_PAGE)}
            >
              Load More
            </Button>
          )}
        </div>

        <div className="glass-card overflow-hidden rounded-2xl p-2">
          <ExploreMap spots={visibleSpots} selectedId={selectedId} />
        </div>
      </section>
    </main>
  );
}
