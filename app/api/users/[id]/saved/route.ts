import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasDatabaseUrl } from "@/lib/env";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { spotId } = (await request.json()) as { spotId: string };

  if (!spotId) {
    return NextResponse.json({ error: "Missing spotId" }, { status: 400 });
  }

  const userId = params.id === "me" ? process.env.DEMO_USER_ID : params.id;

  if (!userId) {
    return NextResponse.json({ error: "Missing user id" }, { status: 401 });
  }
  if (!hasDatabaseUrl || !prisma) {
    return NextResponse.json({ ok: true, saved: [spotId] });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const saved = user.savedSpots.includes(spotId)
      ? user.savedSpots.filter((id) => id !== spotId)
      : [...user.savedSpots, spotId];

    await prisma.user.update({
      where: { id: user.id },
      data: { savedSpots: saved }
    });

    return NextResponse.json({ ok: true, saved });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
