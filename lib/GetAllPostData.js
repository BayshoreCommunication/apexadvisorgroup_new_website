import { staticBlogPosts } from './staticBlogPosts';

export default async function GetAllPostData() {
  try {
    const bloData = await fetch(
      'https://backend-apexadvisor.vercel.app/site/blog',
      {
        cache: 'no-store',
      },
    );
    const remoteBlogData = await bloData.json();
    const remotePosts = remoteBlogData?.data || [];
    const remoteSlugs = new Set(remotePosts.map((post) => post?.slug));

    return {
      ...remoteBlogData,
      data: [
        ...staticBlogPosts.filter((post) => !remoteSlugs.has(post.slug)),
        ...remotePosts,
      ],
    };
  } catch (error) {
    return {
      data: staticBlogPosts,
    };
  }
}
