import type { MetadataRoute } from "next";

const siteUrls = [
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://humemeraldheights.com",
  "https://humemeraldheights.in",
].map((siteUrl) =>
  siteUrl.startsWith("http://") || siteUrl.startsWith("https://")
    ? siteUrl
    : `https://${siteUrl}`,
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/thank-you",
    },
    sitemap: siteUrls.map((siteUrl) => `${siteUrl}/sitemap.xml`),
  };
}