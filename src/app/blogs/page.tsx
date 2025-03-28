import BlogCard from "@/components/Blog/BlogCard";
import { BlogHeadLine } from "@/components/Blog/BlogHeadline";
import FeaturedPostCard from "@/components/Blog/FeaturedPostCard";
import {
  fetchBlogHeadline,
  fetchBlogs,
  fetchFeaturedBlog,
} from "@/services/main.services";
export async function generateMetadata() {
  // Fetch the headline blog for dynamic metadata
  const headline = await fetchBlogHeadline();

  // Extract title and description from the headline blog
  const { title, subtitle } = headline.data[0];

  return {
    title: `Blogs | ${title}`, // Dynamic title with a fallback
    description: subtitle || "Explore our latest blog posts and updates.", // Dynamic description with a fallback
    openGraph: {
      title: `${title} | Blogs`,
      description: subtitle || "Explore our latest blog posts and updates.",
      images: [
        {
          url: headline.data[0].banner_image.url, // Use the headline blog's banner image
          alt: title,
        },
      ],
    },
  };
}
export default async function page() {
  const headline = await fetchBlogHeadline();
  const blogs = await fetchBlogs();
  const featured_blogs = await fetchFeaturedBlog();
  return (
    <section className="my-16">
      <BlogHeadLine headline={headline.data[0]} />
      {/* <pre>{JSON.stringify(headline, null, 2)}</pre> */}

      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-[52px] font-bold text-gray-700">
          Recent Posts
        </h2>
      </div>
      <section className="container mx-auto px-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4">
          <div className="grid col-span-4 gap-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-evenly gap-5 mx-auto justify-evenly">
              {blogs.data
                .filter((blog) => blog.id !== headline.data[0].id) // Filter out the headline blog
                .map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
          </div>
          <div className="w-full col-span-full xl:col-span-1 mt-16 xl:mt-0 h-max">
            <h1 className="text-2xl font-bold text-white mb-3 text-center bg-gray-700 py-2">
              Featured Posts
            </h1>
            <div className="flex flex-wrap gap-2">
              {featured_blogs.data.map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-12 content-evenly gap-5 mx-auto justify-evenly">
          {blogs.data
            .filter((blog) => blog.id !== headline.data[0].id) // Filter out the headline blog
            .map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
        </div> */}
      </section>
    </section>
  );
}
