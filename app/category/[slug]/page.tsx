import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { slugCategoryMap } from "@/lib/category-utils";
import { mapSeedSpots } from "@/lib/mock-data";

export default function CategoryPage({
  params
}: {
  params: { slug: string };
}) {
  const category = slugCategoryMap[params.slug];
  if (!category) notFound();

  const spots = mapSeedSpots.filter((spot) => spot.category === category);

  return (
    <main className="section-container py-8">
      <section className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-coral">Category</p>
          <h1 className="heading-display mt-2 text-5xl">{category}</h1>
          <p className="mt-2 text-stone-600">Curated places with photos, details, and quick access.</p>
        </div>
        <Link href="/explore" className="text-sm text-coral">
          Open full explorer
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {spots.map((spot) => (
          <article key={spot.id} className="glass-card overflow-hidden rounded-2xl">
            <div className="relative h-52">
              <Image src={spot.image} alt={spot.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="font-display text-2xl">{spot.name}</h2>
              <p className="mt-1 text-sm text-stone-500">
                {spot.neighborhood}, {spot.city}
              </p>
              <p className="mt-3 text-sm text-stone-700">{spot.description}</p>
              <Link href={`/spot/${spot.id}`} className="mt-3 inline-block text-sm text-coral">
                View details
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
