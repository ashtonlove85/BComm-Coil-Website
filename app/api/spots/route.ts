import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasDatabaseUrl } from "@/lib/env";
import { mapSeedSpots } from "@/lib/mock-data";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.toLowerCase() ?? "";
  const category = request.nextUrl.searchParams.get("category");

  if (!hasDatabaseUrl || !prisma) {
    const filtered = mapSeedSpots.filter((spot) => {
      const matchesCategory = category ? spot.category === category : true;
      const matchesQuery =
        query.length === 0 ||
        spot.name.toLowerCase().includes(query) ||
        spot.city.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
    return NextResponse.json(filtered);
  }

  try {
    const spots = await prisma.spot.findMany({
      where: {
        ...(category ? { category } : {}),
        ...(query
          ? {
              OR: [
                { name: { contains: query, mode: "insensitive" } },
                { city: { contains: query, mode: "insensitive" } }
              ]
            }
          : {})
      },
      take: 40
    });

    return NextResponse.json(
      spots.map((spot) => ({
        id: spot.id,
        name: spot.name,
        neighborhood: spot.neighborhood,
        city: spot.city,
        category: spot.category,
        tags: spot.tags,
        image: spot.photos[0] ?? mapSeedSpots[0].image,
        lat: spot.lat,
        lng: spot.lng
      }))
    );
  } catch {
    const filtered = mapSeedSpots.filter((spot) => {
      const matchesCategory = category ? spot.category === category : true;
      const matchesQuery =
        query.length === 0 ||
        spot.name.toLowerCase().includes(query) ||
        spot.city.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
    return NextResponse.json(filtered);
  }
}
