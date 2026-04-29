"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories, cityDirectory, mapSeedSpots } from "@/lib/mock-data";
import { toCategorySlug } from "@/lib/category-utils";

export function LandingPage() {
  const madridPicks = mapSeedSpots.filter((spot) => spot.city === "Madrid").slice(0, 6);
  const madridRestaurants = mapSeedSpots
    .filter((spot) => spot.city === "Madrid" && spot.category === "Food")
    .slice(0, 4);

  return (
    <main className="pb-24">
      <section className="section-container grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-stone-700">
            Real local city picks
          </span>
          <h1 className="mt-5 font-display text-5xl leading-tight text-stone-900 sm:text-6xl">
            Find great food, coffee, culture, and hidden gems.
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            Local plans, made effortless
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium text-stone-800">
            LocalPass turns scattered recommendations into a clear neighborhood-by-neighborhood
            plan, so you spend less time researching and more time exploring.
          </p>
          <p className="mt-5 max-w-xl text-stone-600">
            LocalPass is your premium city guide with handpicked spots, beautiful imagery, and
            fast category browsing built for real-world planning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/explore">
              <Button>Start Exploring</Button>
            </Link>
            <Link href="/explore">
              <Button variant="secondary">Build Your Perfect City Day</Button>
            </Link>
            <Link href="/category/food">
              <Button variant="ghost">Browse Food</Button>
            </Link>
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-stone-200">
          <Image
            src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1400&q=80"
            alt="Hidden gem viewpoint in Spain at sunset"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="section-container mt-4">
        <div className="grid gap-4 md:grid-cols-3">
          {mapSeedSpots.slice(0, 3).map((spot) => (
            <article key={spot.id} className="glass-card rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-coral">{spot.category}</p>
              <h3 className="mt-2 font-display text-2xl">{spot.name}</h3>
              <p className="mt-2 text-sm text-stone-600">{spot.description}</p>
              <Link href={`/spot/${spot.id}`} className="mt-4 inline-block text-sm text-coral">
                View details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container mt-14">
        <h2 className="font-display text-3xl">Explore and Blog Highlights</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-coral">Explore requirement</p>
            <h3 className="mt-2 font-display text-3xl text-stone-900">Explore Spain Like a Local</h3>
            <p className="mt-3 text-stone-600">
              Jump into the map/list experience with filters, category chips, and city-by-city picks
              for food, culture, nightlife, and hidden gems.
            </p>
            <Link href="/explore" className="mt-4 inline-block text-sm font-medium text-coral">
              Open Explore
            </Link>
          </article>
          <article className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-coral">Blog requirement</p>
            <h3 className="mt-2 font-display text-3xl text-stone-900">
              Weekly LocalPass Blog Stories
            </h3>
            <p className="mt-3 text-stone-600">
              Read curated guides, neighborhood breakdowns, and weekend itineraries built around real
              local recommendations.
            </p>
            <Link href="/blog" className="mt-4 inline-block text-sm font-medium text-coral">
              Read Blog
            </Link>
          </article>
        </div>
      </section>

      <section className="section-container mt-14">
        <h2 className="font-display text-3xl">Browse by category</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${toCategorySlug(category)}`}
              className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition hover:border-coral hover:text-coral"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="section-container mt-14">
        <h2 className="font-display text-3xl">Madrid experiences</h2>
        <p className="mt-2 max-w-2xl text-sm text-stone-600">
          Build a full Madrid day with morning coffee, cultural stops, food markets, and late-night
          music.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {madridPicks.map((spot) => (
            <article key={spot.id} className="glass-card rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-coral">{spot.category}</p>
              <h3 className="mt-2 font-display text-xl">{spot.name}</h3>
              <p className="mt-1 text-sm text-stone-500">{spot.neighborhood}</p>
              <p className="mt-2 text-sm text-stone-600">{spot.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container mt-14">
        <h2 className="font-display text-3xl">Madrid restaurants and food stops</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {madridRestaurants.map((spot) => (
            <article key={spot.id} className="glass-card rounded-xl p-4">
              <h3 className="font-display text-2xl">{spot.name}</h3>
              <p className="mt-1 text-sm text-stone-500">{spot.neighborhood}, Madrid</p>
              <p className="mt-3 text-sm text-stone-600">{spot.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {spot.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container mt-14">
        <h2 className="font-display text-3xl">City pages</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cityDirectory.map((city) => (
            <Link
              key={city.slug}
              href={`/city/${city.slug}`}
              className="glass-card rounded-xl p-4 text-stone-700 transition hover:border-coral"
            >
              <p className="font-display text-xl">{city.name}</p>
              <p className="mt-1 text-sm text-stone-500">Open guide</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="section-container mt-16 border-t border-stone-200 pt-10 text-center">
        <h2 className="heading-display text-5xl">Ready to explore like a local?</h2>
        <p className="mt-3 text-stone-600">Built for launch with complete category and city flows.</p>
        <div className="mt-6">
          <Link href="/explore">
            <Button>Open Explore</Button>
          </Link>
        </div>
      </footer>
    </main>
  );
}
