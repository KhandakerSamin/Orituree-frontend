export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.oriture.co/sitemap.xml",
    host: "https://www.oriture.co",
  };
}
