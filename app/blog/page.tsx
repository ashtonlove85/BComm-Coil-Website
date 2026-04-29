import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="section-container py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-coral">Blog</p>
        <h1 className="heading-display mt-2 text-5xl">LocalPass Stories</h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          City-by-city guides, neighborhood notes, and sample itineraries to help you get more from
          every trip.
        </p>
      </div>

      <section className="grid gap-5">
        <article className="glass-card rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Featured story</p>
          <h2 className="mt-2 font-display text-3xl">Why We Built LocalPass</h2>
          <p className="mt-3 text-stone-700">
            LocalPass started from one simple frustration: spending hours scrolling generic lists,
            then ending up in crowded tourist spots that felt disconnected from the city itself.
          </p>
          <p className="mt-3 text-stone-700">
            We wanted a cleaner way to discover places with neighborhood personality. That means
            fewer "must-see" checklists and more local bars, courtyards, bookshops, markets, and
            sunset viewpoints that people actually return to.
          </p>
          <p className="mt-3 text-stone-700">
            Every guide is designed for real movement through a city: coffee first, food nearby,
            culture in walking distance, and nightlife that makes sense at the end of the route.
          </p>
        </article>

        <article className="glass-card rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Food guide</p>
          <h2 className="mt-2 font-display text-3xl">Favorite Food Spots by City</h2>
          <p className="mt-3 text-stone-700">
            <strong>Madrid:</strong> Start with market bites near Centro, then move toward La Latina
            for slower tavern-style dinners.
          </p>
          <p className="mt-2 text-stone-700">
            <strong>Barcelona:</strong> Mix one chef-led bistro stop with neighborhood vermouth bars
            for a better balance of modern and classic.
          </p>
          <p className="mt-2 text-stone-700">
            <strong>Valencia & Seville:</strong> Focus on local specialties and ask staff for
            seasonal dishes; the best meals are often off-menu.
          </p>
        </article>

        <article className="glass-card rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Itinerary</p>
          <h2 className="mt-2 font-display text-3xl">How to Plan a Perfect Weekend in Madrid</h2>
          <p className="mt-3 text-stone-700">
            <strong>Friday night:</strong> light tapas and a live music venue around Sol.
            <br />
            <strong>Saturday:</strong> specialty coffee in Chueca, Retiro culture stop, then sunset
            viewpoints before dinner in La Latina.
            <br />
            <strong>Sunday:</strong> market browsing, neighborhood walk in Huertas, and a relaxed
            final lunch near Chamberi.
          </p>
        </article>

        <article className="glass-card rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Neighborhood focus</p>
          <h2 className="mt-2 font-display text-3xl">Lavapies for Creative Energy</h2>
          <p className="mt-3 text-stone-700">
            Lavapies is where gallery pop-ups, globally inspired food, and late-night social bars
            all live within a short walking radius. Plan to wander rather than over-schedule.
          </p>
        </article>

        <article className="glass-card rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Coffee edit</p>
          <h2 className="mt-2 font-display text-3xl">Best Morning Coffee Loops</h2>
          <p className="mt-3 text-stone-700">
            Build your mornings around two nearby cafes max, then pair each one with a bookstore,
            market, or plaza stop. This keeps the day local, flexible, and less rushed.
          </p>
        </article>
      </section>

      <div className="mt-8">
        <Link href="/explore" className="text-sm text-coral">
          Back to Explore
        </Link>
      </div>
    </main>
  );
}
