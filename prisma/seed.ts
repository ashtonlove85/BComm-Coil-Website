import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cityConfigs = [
  {
    name: "Madrid",
    country: "Spain",
    slug: "madrid",
    coverPhoto:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=80",
    featured: true
  },
  {
    name: "Barcelona",
    country: "Spain",
    slug: "barcelona",
    coverPhoto:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1400&q=80",
    featured: true
  },
  {
    name: "Valencia",
    country: "Spain",
    slug: "valencia",
    coverPhoto:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1400&q=80",
    featured: true
  },
  {
    name: "Seville",
    country: "Spain",
    slug: "seville",
    coverPhoto:
      "https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=1400&q=80",
    featured: false
  },
  {
    name: "Bilbao",
    country: "Spain",
    slug: "bilbao",
    coverPhoto:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1400&q=80",
    featured: false
  },
  {
    name: "Malaga",
    country: "Spain",
    slug: "malaga",
    coverPhoto:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1400&q=80",
    featured: false
  },
  {
    name: "Granada",
    country: "Spain",
    slug: "granada",
    coverPhoto:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80",
    featured: false
  },
  {
    name: "San Sebastian",
    country: "Spain",
    slug: "san-sebastian",
    coverPhoto:
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1400&q=80",
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
