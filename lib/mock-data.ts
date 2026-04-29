import { SpotCategory } from "@/types";

export const categories: SpotCategory[] = [
  "Food",
  "Coffee",
  "Nightlife",
  "Culture",
  "Shopping",
  "Views",
  "Hidden Gems"
];

export const cityNames = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "Malaga",
  "Granada",
  "San Sebastian"
];

export const testimonials = [
  {
    quote:
      "LocalPass showed me the side-street tapas bars and sunset miradores locals actually recommend.",
    author: "Clara, Creative Producer"
  },
  {
    quote:
      "From vermut hour in Madrid to tiny specialty coffee spots in Gracia, every recommendation felt personal.",
    author: "Jaime, Art Director"
  },
  {
    quote:
      "It is the anti-tourist guide I needed for Spain. Every creator pick had real barrio energy.",
    author: "Lucia, Freelancer"
  }
];

export const featuredSpots = [
  {
    id: "madrid-1",
    name: "Azotea Lavapies",
    city: "Madrid",
    neighborhood: "Lavapies",
    category: "Views",
    tags: ["Golden Hour", "DJ Set", "Skyline"],
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    description: "A sunset-forward rooftop lounge with vinyl-only sets."
  },
  {
    id: "barcelona-1",
    name: "Gracia Espresso Atelier",
    city: "Barcelona",
    neighborhood: "Gracia",
    category: "Coffee",
    tags: ["Slow Coffee", "Work Friendly"],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    description: "Design-forward coffee bar tucked behind a concept shop."
  },
  {
    id: "valencia-1",
    name: "Nocturna Ruzafa",
    city: "Valencia",
    neighborhood: "Ruzafa",
    category: "Nightlife",
    tags: ["Analog", "Intimate", "Cocktails"],
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    description: "Late-night listening cafe blending jazz and natural wine."
  }
];

export type SpotRecord = {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  category: SpotCategory;
  tags: string[];
  lat: number;
  lng: number;
  image: string;
  description: string;
};

export const mapSeedSpots: SpotRecord[] = [
  {
    id: "spot-mad-1",
    name: "Casa Verbena",
    neighborhood: "Malasana",
    category: "Food",
    tags: ["Tapas", "Late Night"],
    lat: 40.4268,
    lng: -3.7038,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=1000&q=80",
    description: "Bustling tavern for modern tapas and vermouth with locals."
  },
  {
    id: "spot-mad-2",
    name: "Cafe Gran Via",
    neighborhood: "Chueca",
    category: "Coffee",
    tags: ["Specialty", "Terrace"],
    lat: 40.4232,
    lng: -3.6972,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
    description: "Bright all-day cafe known for specialty roasts and terrace seats."
  },
  {
    id: "spot-bcn-1",
    name: "Sala Paralela",
    neighborhood: "El Raval",
    category: "Nightlife",
    tags: ["Vinyl", "Cocktails"],
    lat: 41.3782,
    lng: 2.1705,
    city: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c9f5f3f5?auto=format&fit=crop&w=1000&q=80",
    description: "Intimate cocktail den with analog sets and a late crowd."
  },
  {
    id: "spot-bcn-2",
    name: "Atelier Born",
    neighborhood: "El Born",
    category: "Shopping",
    tags: ["Design", "Independent"],
    lat: 41.3857,
    lng: 2.1803,
    city: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=80",
    description: "Independent fashion and objects from local Barcelona designers."
  },
  {
    id: "spot-val-1",
    name: "Mirador Turia Secret",
    neighborhood: "Ciutat Vella",
    category: "Hidden Gems",
    tags: ["Photo Spot", "Quiet"],
    lat: 39.4744,
    lng: -0.3763,
    city: "Valencia",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=80",
    description: "Quiet hidden viewpoint over old Valencia rooftops."
  },
  {
    id: "spot-sev-1",
    name: "Triana Patio Kitchen",
    neighborhood: "Triana",
    category: "Food",
    tags: ["Andalusian", "Live Guitar"],
    lat: 37.3862,
    lng: -6.0049,
    city: "Seville",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    description: "Warm neighborhood kitchen with sharable Andalusian classics."
  },
  {
    id: "spot-sev-2",
    name: "Azahar Courtyard",
    neighborhood: "Santa Cruz",
    category: "Culture",
    tags: ["Flamenco", "Courtyard"],
    lat: 37.3851,
    lng: -5.9925,
    city: "Seville",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    description: "Cultural nights with local dance, poetry, and acoustic sets."
  },
  {
    id: "spot-bil-1",
    name: "Ria View Deck",
    neighborhood: "Abando",
    category: "Views",
    tags: ["Riverwalk", "Sunset"],
    lat: 43.2642,
    lng: -2.9349,
    city: "Bilbao",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description: "Wide-open river views and one of the best golden-hour spots."
  },
  {
    id: "spot-bil-2",
    name: "Casco Vinyl House",
    neighborhood: "Casco Viejo",
    category: "Nightlife",
    tags: ["Vinyl", "Basque Cocktails"],
    lat: 43.2589,
    lng: -2.9236,
    city: "Bilbao",
    image:
      "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&w=1000&q=80",
    description: "Small-format music bar with deep playlists and craft drinks."
  },
  {
    id: "spot-mal-1",
    name: "Soho Espresso Studio",
    neighborhood: "Soho",
    category: "Coffee",
    tags: ["Single Origin", "Pastries"],
    lat: 36.7187,
    lng: -4.4213,
    city: "Malaga",
    image:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1000&q=80",
    description: "Compact coffee counter blending local beans and rotating art."
  },
  {
    id: "spot-gra-1",
    name: "Albaicin Alley Gallery",
    neighborhood: "Albaicin",
    category: "Culture",
    tags: ["Gallery", "Local Artists"],
    lat: 37.181,
    lng: -3.5926,
    city: "Granada",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=80",
    description: "Tiny independent gallery with monthly neighborhood exhibitions."
  },
  {
    id: "spot-ss-1",
    name: "Harbor Hidden Stair",
    neighborhood: "Old Town",
    category: "Hidden Gems",
    tags: ["Quiet", "Photo Spot"],
    lat: 43.3214,
    lng: -1.9853,
    city: "San Sebastian",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    description: "A tucked-away stairway leading to an underrated harbor vista."
  },
  {
    id: "spot-mad-3",
    name: "Mercado Norte Atelier",
    neighborhood: "Chamberi",
    category: "Shopping",
    tags: ["Handmade", "Design"],
    lat: 40.4321,
    lng: -3.6987,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1000&q=80",
    description: "Curated maker market with ceramics, leather goods, and prints."
  },
  {
    id: "spot-bcn-3",
    name: "Born Bistro Social",
    neighborhood: "El Born",
    category: "Food",
    tags: ["Seasonal", "Chef Counter"],
    lat: 41.3876,
    lng: 2.1823,
    city: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    description: "Modern bistro focused on seasonal Catalan ingredients."
  },
  {
    id: "spot-val-2",
    name: "Ruzafa Moon Room",
    neighborhood: "Ruzafa",
    category: "Nightlife",
    tags: ["Speakeasy", "DJ"],
    lat: 39.4629,
    lng: -0.3682,
    city: "Valencia",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
    description: "Stylish late-night lounge with intimate seating and DJs."
  },
  {
    id: "spot-mad-4",
    name: "Taberna Cava Baja 27",
    neighborhood: "La Latina",
    category: "Food",
    tags: ["Traditional", "Cocido", "Locals Favorite"],
    lat: 40.4113,
    lng: -3.7094,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
    description: "Classic taberna serving rich stews, seasonal tapas, and old-school charm."
  },
  {
    id: "spot-mad-5",
    name: "Retiro Row Boats",
    neighborhood: "Jeronimos",
    category: "Culture",
    tags: ["Park Day", "Iconic", "Relaxed"],
    lat: 40.4153,
    lng: -3.6844,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=80",
    description: "Slow afternoon boat rides and people-watching in Madrid's most loved park."
  },
  {
    id: "spot-mad-6",
    name: "Casa de Campo Mirador",
    neighborhood: "Casa de Campo",
    category: "Views",
    tags: ["Sunset", "Cable Car", "Panoramic"],
    lat: 40.4188,
    lng: -3.7476,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1000&q=80",
    description: "Wide skyline views with the palace in frame, especially good at golden hour."
  },
  {
    id: "spot-mad-7",
    name: "Barrio de las Letras Walk",
    neighborhood: "Huertas",
    category: "Hidden Gems",
    tags: ["Bookstores", "Historic Streets", "Quiet Morning"],
    lat: 40.4141,
    lng: -3.6956,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f0e?auto=format&fit=crop&w=1000&q=80",
    description: "A self-guided route through literary plazas, tiny galleries, and side streets."
  },
  {
    id: "spot-mad-8",
    name: "Mercado de San Miguel Counter Crawl",
    neighborhood: "Centro",
    category: "Food",
    tags: ["Market", "Tapas", "Quick Bites"],
    lat: 40.4155,
    lng: -3.7095,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    description: "Build your own tasting route across jamon, pintxos, and sweet stops."
  },
  {
    id: "spot-mad-9",
    name: "Sala Sol Sessions",
    neighborhood: "Sol",
    category: "Nightlife",
    tags: ["Live Music", "Late Set", "Crowd Energy"],
    lat: 40.4174,
    lng: -3.7031,
    city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    description: "Legendary venue for indie and electronic shows with a local-heavy crowd."
  }
];

export const cityDirectory = cityNames.map((name) => ({
  name,
  slug: name.toLowerCase().replace(/\s+/g, "-")
}));
