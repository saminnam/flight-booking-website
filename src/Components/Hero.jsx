import { MdSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import user from "../assets/user.png";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section className="bg-hero-pattern relative bg-cover bg-no-repeat rounded-3xl px-10 md:mx-20 mt-28 lg:ps-28 lg:pe-14 lg:py-28 pt-16 h-[600px]">
      <div className="flex flex-col justify-center gap-4 items-start">
        <p
          className="text-xl  font-bold"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Elevate Your Travel Journey
        </p>
        <h4
          className="md:text-7xl text-4xl font-serif"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Experience
        </h4>
        <h4
          className="md:text-7xl text-4xl font-serif"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          {" "}
          The Magic Of
        </h4>
        <h4
          className="md:text-7xl text-4xl font-serif"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          Flight
        </h4>
      </div>
      <div className="flex gap-5 items-center lg:mb-0 mb-10">
        <div className="mt-12">
          <Link
            to={"/booktrip"}
            className="bg-[#2986fe] py-3 px-6 text-xs rounded-full border hover:bg-transparent transition-all duration-300 border-[#2986fe] hover:text-[#2986fe] text-white"
          >
            Book A Trip Now
          </Link>
        </div>
        <div className="bg-white p-2 rounded-full mt-12 animate-bounce cursor-pointer">
          <MdSlowMotionVideo className="text-xl text-[#2986fe]" />
        </div>
      </div>
      <div
        className="flex flex-col absolute lg:right-5 bottom-0 gap-3"
        data-aos="zoom-in-up"
      >
        <div className="flex items-center gap-10 group cursor-pointer">
          <h4 className="text-xl font-bold lg:mb-0 mb-5">Know More</h4>
          <HiArrowSmallRight className="text-2xl mt-1 transition-transform duration-200 transform group-hover:translate-x-2 lg:mb-0 mb-5" />
        </div>
        <div className="flex border border-none bg-slate-200 w-[280px] items-center gap-5 rounded-lg h-auto p-[10px]">
          <img src={user} alt="" className="w-[80px] h-[50px] rounded-full" />
          <div className="flex flex-col">
            <h2 className="font-bold">Awesome Places</h2>
            <h2 className="font-thin">
              One of the best travel experience in Air
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
