import { prisma } from "@/lib/prisma";
import { hasDatabaseUrl } from "@/lib/env";

export default async function ProfilePage() {
  const user = hasDatabaseUrl ? await prisma.user.findFirst().catch(() => null) : null;
  const recommendations = hasDatabaseUrl
    ? await prisma.spot.findMany({ take: 5 }).catch(() => [])
    : [];

  return (
    <main className="section-container py-8">
      <h1 className="heading-display text-5xl">Your Dashboard</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="glass-card rounded-2xl p-6">
          <h2 className="font-display text-2xl">Saved Lists</h2>
          <p className="mt-3 text-sm text-stone-600">
            {user?.savedSpots.length ?? 0} saved places across your city lists.
          </p>
        </section>
        <section className="glass-card rounded-2xl p-6">
          <h2 className="font-display text-2xl">Membership</h2>
          <p className="mt-3 text-sm text-stone-600">
            {user?.isPremium ? "Premium Active" : "Free Plan"}
          </p>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="font-display text-3xl">Recommended for Your Vibe</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {recommendations.map((spot) => (
            <article key={spot.id} className="glass-card rounded-xl p-4">
              <h3 className="font-display text-xl">{spot.name}</h3>
              <p className="text-sm text-stone-600">{spot.city}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
