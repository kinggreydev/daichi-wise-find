import { createFileRoute } from "@tanstack/react-router";
import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteNav } from "@/components/landing/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daichi — Open-source anime discovery for Android" },
      {
        name: "description",
        content:
          "Daichi is a free, open-source anime discovery app for Android. Track what you watch, keep your own library, no accounts and no ads.",
      },
      { property: "og:title", content: "Daichi — Open-source anime discovery for Android" },
      {
        property: "og:description",
        content:
          "A free, open-source anime discovery app for Android. Discover, track and watch — nothing else in the way.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-[15px] leading-relaxed text-ink">
      <SiteNav />
      <main>
        <Hero />
        <Features />
      </main>
      <SiteFooter />
    </div>
  );
}
