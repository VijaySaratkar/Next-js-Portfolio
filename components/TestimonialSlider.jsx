import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Raj Yadav",
    position: "Customer",
    message:
      "Working with Vijay Saratkar was an excellent experience. The team delivered a user-friendly, visually stunning, and high-performing website that exceeded our expectations. Their professionalism, timely communication, and attention to detail made the entire process seamless and stress-free.",
  },
  {
    image: "/t-avt-3.png",
    name: "Amit Palaiya",
    position: "Customer",
    message:
      "Partnering with Vijay Saratkar for web development and SEO was a game-changer for our business. The website was not only beautifully designed but also optimized to drive traffic and improve visibility. Their expertise and dedication ensured exceptional results and a smooth collaboration.",
  },
  {
    image: "/t-avt-2.png",
    name: "Debarati Dutta",
    position: "Customer",
    message:
      "Vijay Saratkar and his team did an outstanding job with our web branding and design. They created a cohesive and visually striking brand identity that perfectly captured our vision. Their creativity and professionalism made the entire process enjoyable and highly rewarding.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
