import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <main className="section-container flex min-h-screen items-center justify-center py-10">
      <div className="glass-card w-full max-w-md rounded-2xl p-8">
        <h1 className="heading-display text-4xl">Create your LocalPass</h1>
        <p className="mt-2 text-sm text-stone-600">
          Join locals and creators discovering authentic city experiences.
        </p>
        <Button className="mt-6 w-full">Sign up with Google</Button>
        <Link href="/onboarding" className="mt-3 inline-block w-full">
          <Button variant="ghost" className="w-full">
            Continue to Onboarding
          </Button>
        </Link>
      </div>
    </main>
  );
}
