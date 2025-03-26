import BlogCard from "@/components/Blog/BlogCard";
import { BlogHeadLine } from "@/components/Blog/BlogHeadline";
import { fetchBlogHeadline, fetchBlogs } from "@/services/main.services";
import React from "react";

export default async function page() {
  const headline = await fetchBlogHeadline();
  const blogs = await fetchBlogs();
  return (
    <div className="mt-16">
      <BlogHeadLine headline={headline.data[0]} />
      {/* <pre>{JSON.stringify(headline, null, 2)}</pre> */}

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="w-2/3">
          <h2 className="text-3xl md:text-[52px] font-bold text-gray-700">
            Recent Posts
          </h2>
        </div>
      </div>
      <section className="container px-8">
        <div className="grid grid-cols-6 mt-12 gap-6">
          {blogs.data.map((blog, i) => (
            <div
              className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
              key={i}
            >
              {/* {headline.data[0].id != blog.id ? <BlogCard blog={blog} /> : null} */}
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
