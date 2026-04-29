import { SpotCategory } from "@/types";

export const categorySlugMap: Record<SpotCategory, string> = {
  Food: "food",
  Coffee: "coffee",
  Nightlife: "nightlife",
  Culture: "culture",
  Shopping: "shopping",
  Views: "views",
  "Hidden Gems": "hidden-gems"
};

export const slugCategoryMap: Record<string, SpotCategory> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([category, slug]) => [slug, category])
) as Record<string, SpotCategory>;

export const toCategorySlug = (category: SpotCategory) => categorySlugMap[category];
