import { ExploreShell, Spot } from "@/components/explore/explore-shell";
import { mapSeedSpots } from "@/lib/mock-data";

export default function ExplorePage() {
  return <ExploreShell initialSpots={mapSeedSpots as Spot[]} />;
}
