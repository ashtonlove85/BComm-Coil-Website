import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatDistance = (distanceKm: number) =>
  `${distanceKm.toFixed(1)} km away`;
