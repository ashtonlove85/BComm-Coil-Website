import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "cursor-target inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-coral text-white shadow-glow hover:-translate-y-0.5 hover:brightness-110",
        variant === "secondary" &&
          "border border-gold/40 bg-gold/10 text-stone-900 hover:border-gold hover:bg-gold/20",
        variant === "ghost" &&
          "border border-stone-300 bg-transparent text-stone-800 hover:bg-stone-100",
        className
      )}
      {...props}
    />
  );
}
