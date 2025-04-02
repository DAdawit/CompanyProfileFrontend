import { HeadLine } from "@/types/BlogHeadLineOut";
// import { type BlocksContent } from "@strapi/blocks-react-renderer";
// import BlockRendererClient from "@/common/BlockRendererClient";
import BlogBanner from "./BlogBanner";

interface PropType {
  headline: HeadLine;
}

export const BlogHeadLine: React.FC<PropType> = ({ headline }) => {
  // console.log(headline);
  return (
    <section className="ezy__blog7 light text-stone-800">
      <BlogBanner
        title={headline.title}
        image={headline.banner_image.url}
        slug={headline.slug}
        headline={headline.headline}
        show_back_button={false}
        show_read_more={true}
      />

      <div className="py-8 ">
        <div className="container px-8 mx-auto">
          <p className="text-2xl font-bold text-gray-800">
            {headline.subtitle}
          </p>
          <p className="text-md mb-9 mt-3 text-gray-600">{headline.excerpt}</p>
        </div>
      </div>
    </section>
  );
};
