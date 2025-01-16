import { IoAirplaneOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import {
  FaPlane,
  FaMoneyBillWave,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaThumbsUp,
} from "react-icons/fa";

const AboutUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <FaMoneyBillWave className="text-2xl text-white group-hover:text-blue-500" />
      ),
      title: "Affordable Prices",
      description: "We provide competitive pricing for all your travel needs.",
    },
    {
      id: 2,
      icon: (
        <FaPlane className="text-2xl text-white group-hover:text-blue-500" />
      ),
      title: "Easy Booking",
      description:
        "Book your flights quickly and effortlessly with our user-friendly interface.",
    },
    {
      id: 3,
      icon: (
        <FaClock className="text-2xl text-white group-hover:text-blue-500" />
      ),
      title: "On-Time Flights",
      description:
        "Enjoy punctual flights and minimize delays to keep your plans intact.",
    },
    {
      id: 4,
      icon: (
        <FaShieldAlt className="text-2xl text-white group-hover:text-blue-500" />
      ),
      title: "Secure Payments",
      description:
        "Your transactions are safe with our highly secure payment methods.",
    },
    {
      id: 5,
      icon: (
        <FaUsers className="text-2xl text-white group-hover:text-blue-500" />
      ),
      title: "24/7 Customer Support",
      description:
        "Our support team is always ready to assist you at any time.",
    },
    {
      id: 6,
      icon: (
        <FaThumbsUp className="text-2xl text-white group-hover:text-blue-500" />
      ),
      title: "Customer Satisfaction",
      description:
        "We prioritize your satisfaction to ensure the best travel experience.",
    },
  ];
  return (
    <section className="px-10 md:mx-20 mt-16 lg:py-28">
      <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
        <div className="bg-left-bg-pattern bg-no-repeat bg-contain bg-fixed lg:w-[420px] h-[300px] lg:h-[450px] rounded-t-full border"></div>
        <div className="lg:w-[500px] w-full">
          <div
            className="flex justify-center items-center gap-6 mb-5"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
              Check About Us
            </h1>
            <IoAirplaneOutline className="text-xl text-[#2986fe]" />
          </div>
          <p className="mb-5 text-center text-3xl font-serif sm:text-[40px]/[48px]">
            We provide the best business services for seamless flight bookings
            at unbeatable prices
          </p>
          <div className="flex mt-14 flex-col gap-3 justify-center items-center">
            <h3 className="text-2xl font-semibold font-serif">4.9 out of 5</h3>
            <div className="flex gap-2 text-[#FFD700]">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalfOutline />
            </div>
            <h4 className="text-slate-700">Based on 25000+ reviews</h4>
          </div>
        </div>
        <div className="lg:w-[420px] bg-right-bg-pattern bg-contain bg-no-repeat bg-right-top bg-fixed  h-[300px] lg:h-[450px] rounded-t-full border"></div>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <div className="grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 gap-8 grid-cols-1">
          {features.map((feature) => (
            <div
              key={feature.id}
              data-aos="fade-down"
              className="border p-8 flex gap-5 group cursor-pointer hover:bg-blue-500 hover:text-white"
            >
              <div className="bg-blue-500 p-3 rounded-t-full group-hover:bg-white transition-all ease-linear duration-300 border">
                {feature.icon}
              </div>
              <div className="border-b-2 pb-3">
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-gray-600 group-hover:text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
