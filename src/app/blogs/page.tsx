import BlogCard from "@/components/Blog/BlogCard";
import { BlogHeadLine } from "@/components/Blog/BlogHeadline";
import { fetchBlogHeadline, fetchBlogs } from "@/services/main.services";
import React from "react";

export default async function page() {
  const headline = await fetchBlogHeadline();
  const blogs = await fetchBlogs();
  return (
    <section className="my-16">
      <BlogHeadLine headline={headline.data[0]} />
      {/* <pre>{JSON.stringify(headline, null, 2)}</pre> */}

      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-[52px] font-bold text-gray-700">
          Recent Posts
        </h2>
      </div>
      <section className="container mx-auto px-5">
        <div className="grid grid-cols-7 gap-2">
          <div className="grid grid-cols-3 col-span-6 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="bg-green-400 w-full h-24">
                hello
              </div>
            ))}
          </div>
          <div className="bg-blue-500 h-24 w-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-12 content-evenly gap-5 mx-auto justify-evenly">
          {blogs.data
            .filter((blog) => blog.id !== headline.data[0].id) // Filter out the headline blog
            .map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
      </section>
    </section>
  );
}
