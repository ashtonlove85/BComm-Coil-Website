import Image from "next/image";
import Link from "next/link";
import logoImage from "@/Logo/logo1.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/95 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <Image src={logoImage} alt="LocalPass logo" className="h-12 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-3 md:flex">
          <Link
            href="/explore"
            className="rounded-full border border-coral/60 bg-coral px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-coral hover:text-coral"
          >
            Blog
          </Link>
        </nav>
        <Link
          href="/onboarding"
          className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-800 transition hover:border-coral hover:text-coral"
        >
          Start free
        </Link>
      </div>
    </header>
  );
}
