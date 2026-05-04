import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { hasDatabaseUrl } from "@/lib/env";
import { Button } from "@/components/ui/button";
import { cityDirectory, mapSeedSpots } from "@/lib/mock-data";

export default async function CityPage({
  params
}: {
  params: { slug: string };
}) {
  const city = hasDatabaseUrl && prisma
    ? await prisma.city.findUnique({ where: { slug: params.slug } }).catch(() => null)
    : null;
  const fallbackCity = cityDirectory.find((entry) => entry.slug === params.slug);
  const cityName = fallbackCity?.name ?? city?.name ?? "Madrid";
  const spots = hasDatabaseUrl && prisma
    ? await prisma.spot
        .findMany({ where: { city: cityName }, take: 6 })
        .catch(() => [])
    : mapSeedSpots.filter((spot) => spot.city === cityName).slice(0, 6);

  return (
    <main className="section-container py-8">
      <section className="relative h-80 overflow-hidden rounded-3xl">
        <Image
          src={
            city?.coverPhoto ??
            fallbackCity?.coverPhoto ??
            "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1600&q=80"
          }
          alt={cityName}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-6 bottom-6">
          <h1 className="heading-display text-6xl text-white">{cityName}</h1>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-3xl">Top Picks</h2>
          <Button variant="secondary">Get City Pass</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {spots.map((spot) => (
            <article key={spot.id} className="glass-card rounded-2xl p-5">
              <p className="text-xs uppercase text-gold">{spot.category}</p>
              <h3 className="mt-2 font-display text-2xl">{spot.name}</h3>
              <p className="mt-2 text-sm text-stone-600">{spot.description}</p>
              <Link href={`/spot/${spot.id}`} className="mt-3 inline-block text-sm text-coral">
                View spot
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
