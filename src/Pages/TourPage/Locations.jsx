import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Keyboard, Navigation } from "swiper/modules";

const Locations = () => {
  return (
    <section className="px-5 py-16 lg:px-20 md:py-20">
      <Swiper
        direction="vertical"
        navigation={true} // Enables navigation arrows
        pagination={{ clickable: true }} // Enables pagination with clickable dots
        keyboard={{ enabled: true }} // Enables keyboard control
        mousewheel={true} // Enables mousewheel scrolling
        modules={[Pagination, Mousewheel, Keyboard, Navigation]}
        className="mySwiper max-w-screen-2xl h-[500px]"
      >
        <SwiperSlide className="flex items-center justify-center bg-blue-200 h-48">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-green-200 h-48">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-red-200 h-48">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-purple-200 h-48">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-yellow-200 h-48">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-pink-200 h-48">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-200 h-48">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-indigo-200 h-48">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-teal-200 h-48">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Locations;
