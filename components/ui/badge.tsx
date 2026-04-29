import { cn } from "@/lib/utils";

export function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs text-stone-700",
        className
      )}
    >
      {children}
    </span>
  );
}
