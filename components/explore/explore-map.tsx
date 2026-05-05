"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type ExploreMapProps = {
  spots: Array<{
    id: string;
    name: string;
    city: string;
    lat: number;
    lng: number;
  }>;
  selectedId?: string;
};

const cityMapImages: Record<string, string> = {
  Madrid:
    "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=80",
  Barcelona:
    "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1400&q=80",
  Valencia:
    "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1400&q=80",
  Seville:
    "https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=1400&q=80",
  Bilbao:
    "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1400&q=80",
  Malaga:
    "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1400&q=80",
  Granada:
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80",
  "San Sebastian":
    "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1400&q=80"
};

export function ExploreMap({ spots, selectedId }: ExploreMapProps) {
  const [failedCityImages, setFailedCityImages] = useState<Record<string, boolean>>({});
  const availableCities = useMemo(
    () => Array.from(new Set(spots.map((spot) => spot.city))),
    [spots]
  );
  const selectedSpot = spots.find((spot) => spot.id === selectedId);
  const [activeCity, setActiveCity] = useState<string>(selectedSpot?.city ?? availableCities[0] ?? "Madrid");
  const heroCity = selectedSpot?.city ?? activeCity;
  const cityImage =
    failedCityImages[heroCity] || !cityMapImages[heroCity]
      ? cityMapImages.Madrid
      : cityMapImages[heroCity];
  const citySpots = spots.filter((spot) => spot.city === heroCity);

  return (
    <div className="h-full min-h-[600px] w-full rounded-2xl">
      <div className="relative h-[420px] overflow-hidden rounded-2xl border border-stone-200">
        <Image
          src={cityImage}
          alt={`${heroCity} map view`}
          fill
          className="object-cover"
          onError={() => setFailedCityImages((prev) => ({ ...prev, [heroCity]: true }))}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm text-stone-800">
          {heroCity} city view
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {availableCities.map((city) => (
          <button
            key={city}
            className={`rounded-full border px-3 py-1.5 text-xs ${
              city === heroCity
                ? "border-coral bg-coral text-white"
                : "border-stone-300 bg-white text-stone-700"
            }`}
            onClick={() => setActiveCity(city)}
          >
            {city}
          </button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 md:grid-cols-2">
        {citySpots.slice(0, 4).map((spot) => (
          <div key={spot.id} className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700">
            {spot.name}
          </div>
        ))}
      </div>
    </div>
  );
}
