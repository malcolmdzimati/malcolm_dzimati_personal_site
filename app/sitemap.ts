import { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://malcolmdzimati.com";
const routes = ["", "/about", "/projects", "/cv", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
