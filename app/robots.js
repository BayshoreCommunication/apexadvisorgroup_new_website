export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cgi-bin/",
    },
    sitemap: "https://www.apexadvisorgroup.com/sitemap.xml",
  };
}
