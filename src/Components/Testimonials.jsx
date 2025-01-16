import { IoAirplaneOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import test1 from "../assets/test-1.jpg";
import test2 from "../assets/test-2.jpg";
import test3 from "../assets/test-3.avif";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Antony Das",
      position: "Marketing Manager at Stech",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda.",
      image: test1,
    },
    {
      name: "Sophia Lee",
      position: "CEO at TechCorp",
      feedback:
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.",
      image: test3,
    },
    {
      name: "John Doe",
      position: "Product Manager at Innovate",
      feedback:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      image: test2,
    },
  ];

  return (
    <section>
      <div className="px-10 lg:mx-20 w-full py-16 md:py-20">
        <div>
          <div
            className="flex items-center gap-10 mb-5"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
              Testimonials
            </h1>
            <IoAirplaneOutline className="text-xl text-[#2986fe]" />
          </div>

          <h2 className="mb-5 text-3xl font-bold font-serif sm:text-[40px]/[48px]">
            What client's saying
          </h2>

          <main className="relative z-20 xl:w-[1200px] w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-2xl"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full cursor-pointer p-6 bg-blue-600 md:flex justify-center md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12">
                    <img
                      className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                      src={testimonial.image}
                      alt={`${testimonial.name}'s photo`}
                    />

                    <div className="mt-2 md:mx-6">
                      <div>
                        <p className="text-xl font-medium tracking-tight text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-blue-200">{testimonial.position}</p>
                      </div>

                      <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                        “{testimonial.feedback}”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center lg:flex-col gap-5 mt-6 md:justify-start absolute -bottom-8 right-[100px] lg:bottom-52 lg:right-[-200px]">
              <button
                title="left arrow"
                className="prev-btn p-2 cursor-pointer text-white bg-blue-500 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                title="right arrow"
                className="next-btn p-2 text-white cursor-pointer transition-colors bg-blue-500 duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
