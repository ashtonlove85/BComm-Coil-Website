"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [lightSection, setLightSection] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(target?.closest(".cursor-target"));
      const isLight = Boolean(target?.closest("[data-cursor-tone='light']"));
      setActive(isInteractive);
      setLightSection(isLight);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        className={cn(
          "absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-200",
          lightSection ? "bg-charcoal" : "bg-cream"
        )}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300",
          lightSection ? "border-charcoal/40" : "border-cream/50",
          active ? "h-16 w-16" : "h-8 w-8"
        )}
        style={{ left: pos.x, top: pos.y }}
      />
    </div>
  );
}
