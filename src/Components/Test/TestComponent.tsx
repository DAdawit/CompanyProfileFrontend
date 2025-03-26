import React from "react";
import { HeadLine } from "@/types/BlogHeadLineOut";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";

// const blogs = [
//   {
//     title: "Beautiful Woman Smiling With Hands In Hair",
//     description:
//       "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
//     author: "Ben Stokes",
//     image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
//     date: "26",
//     month: "Oct",
//     year: "2016",
//   },
//   {
//     title: "Not Your Regular Home Decoration?",
//     description:
//       "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames .",
//     author: "Moein Ali",
//     image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_1.jpg",
//     date: "11",
//     month: "May",
//     year: "2020",
//   },
//   {
//     title: "Fashion Essentials All Men Should Know",
//     description:
//       "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
//     author: "Maxy Paulo",
//     image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
//     date: "19",
//     month: "Mar",
//     year: "2021",
//   },
// ];

// const BlogItem = ({ blog }) => {
//   const { title, description, author, date, month, year, image } = blog;

//   return (
//     <article className="rounded-lg shadow-lg overflow-hidden pb-2">
//       <div className="relative">
//         <img
//           src={image}
//           alt={title}
//           className="h-auto w-full shadow-lg dark:shadow-none"
//         />
//         <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
//           {date}
//           <br />
//           {month}
//           <br />
//           {year}
//         </div>
//       </div>
//       <div className="p-4 pb-8 md:p-6">
//         <p className="font-light text-sm leading-6">
//           By{" "}
//           <a href="#!" className="text-blue-600">
//             {author}
//           </a>
//         </p>
//         <h4 className="font-medium text-2xl">{title}</h4>
//         <p className="opacity-60 mt-3 mb-6">{description}</p>
//         <a
//           href="#!"
//           className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition mb-5"
//         >
//           Read More
//         </a>
//       </div>
//     </article>
//   );
// };

// BlogItem.propTypes = {
//   blog: PropTypes.object.isRequired,
// };
interface PropType {
  headline: HeadLine;
}
export const Blog7: React.FC<PropType> = ({ headline }) => {
  console.log(headline);
  return (
    <section className="ezy__blog7 light text-stone-800">
      {/* <pre>{JSON.stringify(headline, null, 2)}</pre> */}

      <Image
        src={`http://localhost:8000${headline.banner_image.url}`}
        alt={headline.title}
        height={1000}
        width={1000}
        className="h-80 max-w-full w-full object-cover"
      />

      <div className="py-10">
        <div className="container px-8 md:px-24">
          <div className="grid grid-cols-12 justify-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
                {headline.title}
              </h2>
              <p className="text-lg font-medium opacity-80 mb-9">
                {headline.subtitle}
              </p>
              <RichText content={headline?.body as unknown} />
              <a
                href="#!"
                className="bg-blue-600 hover:bg-opacity-90 text-white font-bold border border-blue-600 py-3 px-7 rounded transition"
              >
                Load All Posts
              </a>
            </div>
          </div>
          {/* 
          <div className="grid grid-cols-6 mt-12 gap-6">
            {blogs.map((blog, i) => (
              <div
                className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
                key={i}
              >
                <BlogItem blog={blog} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};
