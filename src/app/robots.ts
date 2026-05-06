export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://devnana.netlify.app/sitemap.xml",
  };
}