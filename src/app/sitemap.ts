import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://devnana.netlify.app",
      lastModified: new Date(),
    },
    {
      url: "https://devnana.netlify.app/projects",
      lastModified: new Date(),
    },
  ]
}