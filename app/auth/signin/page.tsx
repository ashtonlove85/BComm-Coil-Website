"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <main className="section-container flex min-h-screen items-center justify-center py-10">
      <div className="glass-card w-full max-w-md rounded-2xl p-8">
        <h1 className="heading-display text-4xl">Welcome Back</h1>
        <p className="mt-2 text-sm text-stone-600">
          Login to sync your saved spots and premium guides.
        </p>
        <div className="mt-6 space-y-3">
          <Button className="w-full" onClick={() => signIn("google")}>
            Continue with Google
          </Button>
          <Button className="w-full" variant="ghost">
            Continue with Email
          </Button>
        </div>
      </div>
    </main>
  );
}
