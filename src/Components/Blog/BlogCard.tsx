import { BlogOut } from "@/types/BlogsOut";
import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";

interface PropType {
  blog: BlogOut;
}

const BlogCard: React.FC<PropType> = ({ blog }) => {
  const formattedDate = moment(blog.publishedAt).calendar();

  // Truncate the excerpt to 300 characters
  const truncatedExcerpt =
    blog.excerpt.length > 100
      ? `${blog.excerpt.substring(0, 150)}...`
      : blog.excerpt;

  return (
    <article className="rounded-lg shadow-lg overflow-hidden pb-2 h-full flex flex-col">
      {/* Image Section */}
      <div>
        <Image
          height={1000}
          width={1000}
          src={`http://localhost:8000${blog.banner_image.url}`}
          alt={blog.title}
          className="h-auto w-full shadow-lg dark:shadow-none"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 pb-8 md:p-6 flex-grow flex flex-col">
        <p className="font-light text-sm leading-6">
          By{" "}
          <a href="#!" className="text-blue-600">
            {blog.author} <span className="text-gray-600">{formattedDate}</span>
          </a>
        </p>
        <h4 className="font-medium text-xl mt-2">{blog.title}</h4>
        <p className="opacity-60 mt-3 mb-3 flex-grow">{truncatedExcerpt}</p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="py-2 px-5 border border-gray-600 transition mt-auto w-max text-gray-600"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
