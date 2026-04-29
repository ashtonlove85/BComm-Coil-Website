import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { hasDatabaseUrl } from "@/lib/env";
import { mapSeedSpots } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function SpotDetailPage({
  params
}: {
  params: { id: string };
}) {
  const spot = hasDatabaseUrl
    ? await prisma.spot
        .findUnique({
          where: { id: params.id },
          include: { creator: { include: { user: true } }, reviews: true }
        })
        .catch(() => null)
    : null;

  const fallback = mapSeedSpots.find((item) => item.id === params.id) ?? mapSeedSpots[0];

  return (
    <main className="section-container py-8">
      <div className="grid gap-5 md:grid-cols-3">
        {(spot?.photos ?? [fallback.image, fallback.image, fallback.image]).map((src, idx) => (
          <div key={idx} className="relative h-56 overflow-hidden rounded-2xl">
            <Image src={src} alt="Spot photo" fill className="object-cover" />
          </div>
        ))}
      </div>

      <section className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <article>
          <h1 className="heading-display text-5xl">{spot?.name ?? fallback.name}</h1>
          <p className="mt-3 text-stone-600">
            {(spot?.category ?? fallback.category)} • {(spot?.neighborhood ?? fallback.neighborhood)}
          </p>
          <p className="mt-5 max-w-3xl text-stone-700">{spot?.description ?? fallback.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {(spot?.tags ?? fallback.tags).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="font-display text-2xl">Locals Say</h2>
            <div className="mt-3 space-y-3">
              {(spot?.reviews ?? []).slice(0, 3).map((review) => (
                <blockquote key={review.id} className="glass-card rounded-xl p-4 text-stone-700">
                  {review.content}
                </blockquote>
              ))}
            </div>
          </div>
        </article>

        <aside className="glass-card rounded-2xl p-5">
          <h3 className="font-display text-2xl">Details</h3>
          <p className="mt-3 text-sm text-stone-600">Hours: {spot?.hours ?? "10AM - 11PM"}</p>
          <p className="text-sm text-stone-600">Address: 128 Local Lane</p>
          <p className="mt-5 text-sm text-stone-600">
            Recommended by {spot?.creator?.user?.name ?? "Nova Lane"}
          </p>
          <div className="mt-6 flex gap-2">
            <Button>Save to List</Button>
            <Button variant="ghost">Share</Button>
          </div>
        </aside>
      </section>
    </main>
  );
}
