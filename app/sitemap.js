import GetAllPostData from "@/lib/GetAllPostData";
import { serviceData } from "@/config/servicesData";

export default async function sitemap() {
  const baseUrl = "https://www.apexadvisorgroup.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/book-an-appointment",
    "/services",
    "/services-area",
    "/blog",
    "/tax-resolution",
    "/tax-planning",
    "/miami2024",
    "/credit-repair-and-counseling",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Services dynamic routes
  const serviceRoutes = serviceData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog dynamic routes
  let blogRoutes = [];
  try {
    const blogData = await GetAllPostData();
    if (blogData?.data) {
      blogRoutes = blogData.data
        .filter((post) => post.published !== false)
        .map((post) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: post.createdAt ? new Date(post.createdAt) : new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        }));
    }
  } catch (error) {
    console.error("Error generating blog sitemap entries:", error);
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
