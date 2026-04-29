import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "LocalPass | Premium Local Discovery",
  description:
    "Skip tourist traps and discover authentic city experiences curated by locals."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SmoothScrollProvider>
            <SiteHeader />
            {children}
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
