import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";

type PropType = {
  title: string | undefined;
  slug?: string | undefined;
  image?: string | undefined;
  show_read_more?: boolean;
  headline: boolean | false;
  show_back_button: boolean;
};
const BlogBanner: React.FC<PropType> = ({
  title,
  slug,
  image,
  show_read_more,
  headline,
  show_back_button,
}) => {
  return (
    <>
      <div className="h-[70vh]  xl:max-h-[60vh] xll:max-h-[60vh] relative">
        <Image
          src={`${image}`}
          alt="hero image"
          height={2000}
          width={2000}
          className="h-[70vh] xl:max-h-[60vh] xll:max-h-[60vh] w-screen object-cover brightness-50"
        />
        <div className="absolute h-full top-0 w-full flex  text-white ">
          <div className="flex flex-col justify-center w-full col-span-2 px-5">
            <div className="grid sm:pl-8">
              <h1 className="text-3xl  xl:text-4xl xxl:text-6xl font-bold mt-3">
                {title}{" "}
                {headline ? (
                  <span className="text-lg font-medium"> / Headline</span>
                ) : null}
              </h1>
              {show_read_more ? (
                <Link
                  href={`/blogs/${slug}`}
                  className="w-max mt-3 border border-white text-white px-5 py-3 capitalize"
                >
                  read more
                </Link>
              ) : null}
              {show_back_button ? (
                <Link
                  href="/blogs"
                  className="border border-white text-white px-5 py-3 capitalize rounded-full h-12 w-12 flex justify-center items-center mt-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                  <ReplyIcon />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBanner;
