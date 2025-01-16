import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoAirplaneOutline } from "react-icons/io5";
import img1 from "../../assets/canada.jpg";
import img2 from "../../assets/america.jpg";
import img3 from "../../assets/maldives.jpg";
import img4 from "../../assets/chicago.jpg";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    description: "Experience the city of love and iconic landmarks.",
    image: img1,
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    description: "Explore the vibrant culture and delicious cuisine.",
    image: img2,
  },
  {
    id: 3,
    name: "Sydney, Australia",
    description: "Discover the stunning beaches and the Sydney Opera House.",
    image: img3,
  },
  {
    id: 4,
    name: "New York, USA",
    description: "Visit the city that never sleeps and iconic skylines.",
    image: img4,
  },
  {
    id: 5,
    name: "Dubai, UAE",
    description: "Witness luxury, modern architecture, and desert safaris.",
    image: img2,
  },
];

const TouristDestination = () => {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto w-full px-5 py-16 md:px-24 md:py-20">
        <div
          className="flex items-center justify-center gap-6"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
            Book Your Destination
          </h1>
          <IoAirplaneOutline className="text-xl text-[#2986fe]" />
        </div>
        <p className="mb-8 mt-4 text-center text-gray-500 lg:mb-10">
          Explore top travel destinations for your next vacation or weekend
          getaway.
        </p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="container mx-auto mt-10"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <div className="p-8 max-w-sm border group cursor-pointer border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center bg-white">
                <div className="overflow-hidden border shadow rounded-lg w-[340px] h-[250px]">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full group-hover:scale-105 transition-all duration-200 ease-linear"
                  />
                </div>
                <div className="mt-8 text-center">
                  <h4 className="font-bold text-xl text-gray-800">
                    {destination.name}
                  </h4>
                  <p className="mt-2 text-gray-600">
                    {destination.description}
                  </p>
                  <div className="mt-10 flex justify-center">
                    <button className="font-medium text-sm px-3 flex rounded-lg items-center gap-3 uppercase group tracking-tight border border-[#2986fe] transition-all duration-300 p-2 hover:bg-transparent hover:text-[#2986fe] text-white bg-[#2986fe]">
                      <span>Book Now</span>
                      <IoAirplaneOutline className="text-xl -rotate-45 transition-all duration-300 group-hover:rotate-0" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TouristDestination;
