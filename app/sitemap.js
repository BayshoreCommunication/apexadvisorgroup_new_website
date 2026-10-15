import GetAllPostData from "@/lib/GetAllPostData";
import { staticBlogPosts } from "@/lib/staticBlogPosts";
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

  // Blog dynamic & static routes
  let blogRoutes = [];
  try {
    const blogData = await GetAllPostData();
    const fetchedPosts = blogData?.data || [];
    const seenSlugs = new Set();
    const combinedPosts = [];

    // Prioritize fetched posts
    for (const post of fetchedPosts) {
      if (post?.slug && !seenSlugs.has(post.slug) && post.published !== false) {
        seenSlugs.add(post.slug);
        combinedPosts.push(post);
      }
    }

    // Ensure all static blog posts are included
    for (const post of staticBlogPosts) {
      if (post?.slug && !seenSlugs.has(post.slug) && post.published !== false) {
        seenSlugs.add(post.slug);
        combinedPosts.push(post);
      }
    }

    blogRoutes = combinedPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt
        ? new Date(post.updatedAt)
        : post.createdAt
        ? new Date(post.createdAt)
        : new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error generating blog sitemap entries:", error);
    blogRoutes = staticBlogPosts
      .filter((post) => post.published !== false)
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt
          ? new Date(post.updatedAt)
          : post.createdAt
          ? new Date(post.createdAt)
          : new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
