"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
// import FadeInDown from "@/common/Animations/FadeInDown";
// import HeaderTitle from "@/common/HeaderTitle";
import FadeOut from "@/common/Animations/FadeOut";
import { TestimonialsOutI } from "@/types/TestimonialOut";
interface TestimonialProps {
  testimonials: TestimonialsOutI;
}
export default class Testimonials extends Component<TestimonialProps> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    // const styles2 = {
    //   backgroundImage: `url('/banner2.jpg')`,
    //   backgroundSize: "cover",
    // };
    const { testimonials } = this.props;
    return (
      <div>
        <div className="bg-fixed bg-cover bg-center pb-7 container mx-auto max-w-7xl mt-16">
          <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
            <div className="flex justify-center text-center mb-6 lg:mb-12">
              <div className="max-w-lg">
                <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
                  What Our Clients Say
                </h2>
                <p className="text-lg opacity-80">
                  Assumenda non repellendus distinctio nihil dicta sapiente,
                  quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
                </p>
              </div>
            </div>
          </div>
          <FadeOut>
            <div className="container mx-auto px-6 mt-3">
              <Slider {...settings}>
                {testimonials.data.map((testimonial) => (
                  <>
                    <div
                      key={testimonial.id}
                      className="bg-white shadow-lg rounded-xl hover:-translate-y-1  duration-300 p-6 h-max m-3 mb-10"
                    >
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-6">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <Image
                                src={`http://localhost:8000${testimonial?.image.url}`}
                                alt={testimonial.full_name}
                                className="h-14 w-14 pointer-events-none rounded-full border p-1 border-gray-500"
                                width={100}
                                height={200}
                              />
                            </div>
                            <div>
                              <h5 className="text-xl break-all font-medium">
                                {testimonial.full_name}
                              </h5>
                            </div>
                          </div>
                          <div className="text-yellow-400 flex items-start text-sm">
                            {[1, 2, 3, 4, 5].map((key) => (
                              <StarRateIcon fontSize="small" key={key} />
                            ))}
                          </div>
                        </div>
                        <p className="leading-[1.8] opacity-80 mb-6 trancate max-h-36 overflow-clip">
                          {testimonial.feedback}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          </FadeOut>
        </div>
      </div>
    );
  }
}
