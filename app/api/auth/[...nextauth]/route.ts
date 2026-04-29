import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const hasAuthSecret = Boolean(process.env.NEXTAUTH_SECRET);

const handler = hasAuthSecret
  ? NextAuth(authOptions)
  : async function missingAuthConfig() {
      return Response.json(
        { error: "Auth is not configured. Set NEXTAUTH_SECRET in environment variables." },
        { status: 503 }
      );
    };

export { handler as GET, handler as POST };
