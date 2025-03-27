import { BlogOut } from "@/types/BlogsOut";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PropType {
  post: BlogOut;
}
const FeaturedPostCard: React.FC<PropType> = ({ post }) => {
  const formattedDate = moment(post.publishedAt).calendar();

  //   Truncate the excerpt to 300 characters
  const truncatedExcerpt =
    post.title.length > 20 ? `${post.title.substring(0, 20)}...` : post.title;
  return (
    <Link href={`/blogs/${post.slug}`} key={post.id} className="w-full">
      <div className="flex gap-1 justify-items-center shadow-xl px-2 py-2 rounded-xl">
        <div>
          {/* {post?.banner_image?.url} */}
          <Image
            height={2000}
            width={2000}
            src={`http://localhost:8000${post.banner_image.url}`}
            alt={post.title}
            className="h-12 w-12 min-w-12 rounded-lg"
          />
        </div>
        <div className="grid">
          <h1 className="text-sm truncate">{truncatedExcerpt}</h1>
          <h5 className="text-blue-600 text-sm">{post.author}</h5>
          <h5 className="text-gray-600 text-xs">{formattedDate}</h5>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
