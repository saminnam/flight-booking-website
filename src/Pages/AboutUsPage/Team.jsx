import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import piolet from "../../assets/team1.jpg";
import team from "../../assets/test-1.jpg";
import team1 from "../../assets/test-2.jpg";
import team2 from "../../assets/test-3.avif";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoAirplaneOutline } from "react-icons/io5";

const Team = () => {
  const teamMembers = [
    {
      name: "Mia",
      role: "Piolet",
      image: piolet,
    },
    {
      name: "John Doe",
      role: "Passenger Services Team Lead",
      image: team,
    },
    {
      name: "Mark Antony",
      role: "Airport Management and Administration",
      image: team1,
    },
    {
      name: "Mia",
      role: "Air Traffic Controler",
      image: piolet,
    },
    {
      name: "Alex",
      role: "Security",
      image: team2,
    },
  ];

  return (
    <section className="mx-auto w-full px-5 py-16 md:px-10 md:py-20 bg-[#F4FCFA]">
      <div className="container ">
        <div className="flex items-center gap-10 xl:flex-row flex-col">
          <div className="xl:w-1/2 xl:mx-12 flex flex-col gap-20">
            <div>
              <div
                className="flex items-center gap-6"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
                  Our Team
                </h1>
                <IoAirplaneOutline className="text-xl text-[#2986fe]" />
              </div>
              <p className="max-w-2xl mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                incidunt ex placeat modi magni quia error alias, adipisci rem
                similique, at omnis eligendi optio eos harum.
              </p>
            </div>
            <div className="flex lg:flex-row flex-col gap-5 relative">
              <div
                className="p-8 border space-y-2 cursor-pointer rounded shadow-lg group relative"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="absolute top-[-35px] bg-[#006CB7] transition-all duration-300 p-5 rounded-full group-hover:bg-white border border-[#006CB7]">
                  <FaPeopleGroup className="text-2xl text-white transition-all duration-300 group-hover:text-[#006CB7]" />
                </div>
                <h2 className="font-bold text-xl group-hover:text-[#006CB7]">
                  Free Consultation
                </h2>
                <p className="group-hover:text-[#006CB7]">
                  Book your Free Consultation now for expert advice
                </p>
              </div>
              <div
                className="p-8 border space-y-2 cursor-pointer rounded shadow-lg group relative"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="absolute top-[-35px] bg-[#006CB7] transition-all duration-300 p-5 rounded-full group-hover:bg-white border border-[#006CB7]">
                  <TbDeviceDesktopCog className="text-2xl text-white transition-all duration-300 group-hover:text-[#006CB7]" />
                </div>
                <h2 className="font-bold text-xl group-hover:text-[#006CB7]">
                  Quality Service
                </h2>
                <p className="group-hover:text-[#006CB7]">
                  Providing reliable, top-quality solutions tailored to your
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:mt-0 xl:mx-4 xl:w-[600px] h-[500px] w-full">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center">
                    <img
                      className="object-contain rounded-xl h-[400px] mx-auto"
                      src={member.image}
                      alt={member.name}
                    />
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
                      {member.name}
                    </h1>
                    <p className="mt-2 text-gray-500 capitalize">
                      {member.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
