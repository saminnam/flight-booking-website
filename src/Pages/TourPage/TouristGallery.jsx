import { IoAirplaneOutline } from "react-icons/io5";
import img1 from "../../assets/tourist-3.avif";
import img2 from "../../assets/tourist-4.jpg";
import img3 from "../../assets/tourist-5.jpg";
import img4 from "../../assets/tourist-6.jpg";

const TouristGallery = () => {
  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div className="w-full px-5 py-16 md:px-20 md:py-20">
        <div
          className="flex items-center justify-center gap-6"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
            Our Tourist Click's
          </h1>
          <IoAirplaneOutline className="text-xl text-[#2986fe]" />
        </div>
        <p className="mb-8 mt-4 text-center text-gray-500 lg:mb-10">
          Plan your travel effortlessly with our advanced flight booking
          features. From finding the best deals to managing your bookings,
          <br /> we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row mx-auto mt-24">
          <a href="#_">
            <img
              src={img1}
              className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="#_"
            />
          </a>
          <a href="#_">
            <img
              src={img2}
              className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="#_"
            />
          </a>
          <a href="#_">
            <img
              src={img3}
              className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="#_"
            />
          </a>
          <a href="#_">
            <img
              src={img4}
              className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="#_"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TouristGallery;
