import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasDatabaseUrl } from "@/lib/env";
import { cityNames } from "@/lib/mock-data";

export async function GET() {
  if (!hasDatabaseUrl || !prisma) {
    return NextResponse.json(
      cityNames.map((name) => ({
        id: name.toLowerCase().replace(/\s/g, "-"),
        name
      }))
    );
  }
  try {
    const cities = await prisma.city.findMany({ orderBy: { featured: "desc" } });
    return NextResponse.json(cities);
  } catch {
    return NextResponse.json(
      cityNames.map((name) => ({
        id: name.toLowerCase().replace(/\s/g, "-"),
        name
      }))
    );
  }
}
