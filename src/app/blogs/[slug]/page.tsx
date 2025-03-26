import BlogBanner from "@/components/Blog/BlogBanner";
import { fetchBlog } from "@/services/main.services";
import { Banner_image } from "../../../types/BlogsOut";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch the blog post by slug
  const blog = await fetchBlog(slug);

  // Check if the blog post exists
  if (!blog.data) {
    return <div className="mt-16">Blog post not found</div>;
  }

  return (
    <div className="mt-16">
      {/* <BlogBanner
        title={blog.data.title}
        image={blog.data.Banner_image.url}
        slug={blog.data.slug}
      /> */}
      <h1 className="text-4xl font-bold">{blog.data.title}</h1>
      <p className="text-gray-600 mt-4">{blog.data.subtitle}</p>
    </div>
  );
}
