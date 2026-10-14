import type { MetadataRoute } from "next";
import { projects, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: "2026-10-14" },
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: "2026-10-14" })),
  ];
}
