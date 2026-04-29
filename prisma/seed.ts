import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cityConfigs = [
  {
    name: "Austin",
    country: "USA",
    slug: "austin",
    coverPhoto:
      "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1400&q=80",
    featured: true
  },
  {
    name: "New York City",
    country: "USA",
    slug: "nyc",
    coverPhoto:
      "https://images.unsplash.com/photo-1448317846460-907988886b33?auto=format&fit=crop&w=1400&q=80",
    featured: true
  },
  {
    name: "Tokyo",
    country: "Japan",
    slug: "tokyo",
    coverPhoto:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80",
    featured: true
  }
];

const categories = [
  "Food",
  "Coffee",
  "Nightlife",
  "Culture",
  "Shopping",
  "Views",
  "Hidden Gems"
] as const;

async function main() {
  await prisma.review.deleteMany();
  await prisma.spot.deleteMany();
  await prisma.city.deleteMany();
  await prisma.creator.deleteMany();
  await prisma.user.deleteMany();

  const creatorUser = await prisma.user.create({
    data: {
      name: "Nova Lane",
      email: "nova@localpass.app",
      isPremium: true,
      vibes: ["Culture Seeker", "Night Owl"]
    }
  });

  const creator = await prisma.creator.create({
    data: {
      userId: creatorUser.id,
      bio: "City creative capturing hidden corners and after-dark gems.",
      following: 9210,
      spotCount: 30
    }
  });

  for (const city of cityConfigs) {
    await prisma.city.create({ data: city });

    for (let i = 0; i < 10; i++) {
      const category = categories[i % categories.length];
      await prisma.spot.create({
        data: {
          name: `${city.name} ${category} Spot ${i + 1}`,
          category,
          city: city.name,
          neighborhood: `District ${i + 1}`,
          description: `A carefully curated ${category.toLowerCase()} experience in ${city.name}.`,
          photos: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1200&q=80"
          ],
          lat: 30.2672 + Math.random() * 0.12 - 0.06,
          lng: -97.7431 + Math.random() * 0.12 - 0.06,
          hours: "10:00 AM - 11:00 PM",
          tags: [category, "Local Favorite", "Editorial Pick"],
          creatorId: creator.id
        }
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
