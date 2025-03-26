import { BlogHeadLine } from "@/components/Blog/BlogHeadline";
import { fetchBlogHeadline } from "@/services/main.services";
import React from "react";

export default async function page() {
  const headline = await fetchBlogHeadline();
  return (
    <div className="mt-16">
      <BlogHeadLine headline={headline.data[0]} />
      {/* <pre>{JSON.stringify(headline, null, 2)}</pre> */}
    </div>
  );
}
