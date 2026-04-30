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

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article className="glass-card rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Travel reality</p>
          <h2 className="mt-2 font-display text-3xl">Skip the Line. Find the Real Spain.</h2>
          <p className="mt-3 text-stone-700">
            You can spend months planning a Spain trip and still end up in long lines, crowded buses,
            and restaurants packed with tourists. The highlight reels are beautiful, but they often
            leave out the waiting, traffic, and missed moments.
          </p>
          <p className="mt-3 text-stone-700">
            The best version of a city is often one block away from the busiest attraction. Locals
            know where to go for personality, pace, and better experiences, but most travelers do
            not have those connections.
          </p>
          <p className="mt-3 text-stone-700">
            LocalPass helps close that gap by connecting travelers to verified local recommendations,
            so you can skip tourist traps and discover authentic restaurants and attractions with far
            less guesswork.
          </p>
        </article>

        <article className="glass-card rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Hidden gems</p>
          <h2 className="mt-2 font-display text-3xl">The Spain Google Will Never Show You</h2>
          <p className="mt-3 text-stone-700">
            Many travelers hit must-see landmarks and nearby restaurants, then leave feeling like the
            trip was generic. The most memorable places are usually smaller local businesses tucked
            inside real neighborhoods, not the highest-traffic tourist zones.
          </p>
          <p className="mt-3 text-stone-700">
            A better approach is intent-based search: look for local businesses, hidden gems, and
            neighborhood-specific recommendations. Areas like Lavapies or Chamberi often reveal more
            character, stronger community reviews, and experiences worth repeating.
          </p>
          <p className="mt-3 text-stone-700">
            If you want to skip hours of searching, LocalPass helps you go straight to verified local
            recommendations so each trip feels unique instead of average.
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
