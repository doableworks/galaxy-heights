import type { MetadataRoute } from "next";

const siteUrls = [
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://humemeraldheights.com",
  "https://humemeraldheights.in",
].map((siteUrl) =>
  siteUrl.startsWith("http://") || siteUrl.startsWith("https://")
    ? siteUrl
    : `https://${siteUrl}`,
);

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrls.map((siteUrl) => ({
    url: `${siteUrl}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}