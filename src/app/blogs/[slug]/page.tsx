import BlogBanner from "@/components/Blog/BlogBanner";
import { fetchBlog } from "@/services/main.services";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/common/BlockRendererClient";

export type paramsType = Promise<{ slug: string }>;

export default async function PhotoPage(props: { params: paramsType }) {
  const { slug } = await props.params;

  // Fetch the blog post by slug
  const blog = await fetchBlog(slug);

  // Check if the blog post exists
  if (!blog.data) {
    return <div className="mt-16">Blog post not found</div>;
  }

  return (
    <div className="mt-16">
      {/* <pre>{JSON.stringify(blog, null, 2)}</pre> */}

      <BlogBanner
        title={blog.data.title}
        image={blog.data.banner_image.url}
        slug={blog.data.slug}
        show_read_more={false}
        headline={blog.data.headline}
        show_back_button={true}
      />
      <div className="container mx-auto max-w-6xl">
        <h3 className="mt-8 font-bold text-3xl text-gray-800 my-3">
          {blog.data.subtitle}
        </h3>
        <section id="blog" className="">
          <BlockRendererClient content={blog.data.body as BlocksContent} />
        </section>
      </div>
    </div>
  );
}
