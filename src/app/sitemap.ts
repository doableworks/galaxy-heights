import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://humgalaxyheights.com";
const formattedBaseUrl = baseUrl.startsWith("http://") || baseUrl.startsWith("https://")
  ? baseUrl
  : `https://${baseUrl}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy-policy", "/terms-conditions"];

  return routes.map((route) => ({
    url: `${formattedBaseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.5,
  }));
}