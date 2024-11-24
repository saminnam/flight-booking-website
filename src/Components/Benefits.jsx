import { IoEarthOutline } from "react-icons/io5";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GrInProgress, GrAnnounce } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

const benefitsData = [
  {
    icon: (
      <IoEarthOutline className="text-8xl transition-all duration-500 group-hover:text-[#2986fe] group-hover:translate-x-24" />
    ),
    title: "Luxury & Comfort Travel",
    description:
      "As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on money",
    aos: "zoom-out",
  },
  {
    icon: (
      <RiExchangeDollarFill className="text-8xl transition-all duration-500 group-hover:text-[#2986fe] group-hover:translate-x-24" />
    ),
    title: "Smart Costing Flight",
    description:
      "Flying should be a pleasure and we’ll make your charter experience as luxurious and more comfortable as soon as possible.",
    aos: "zoom-in",
  },
  {
    icon: (
      <GrInProgress className="text-8xl transition-all duration-500 group-hover:text-[#2986fe] group-hover:translate-x-24" />
    ),
    title: "Career progression",
    description:
      "The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately since 1940s",
    aos: "zoom-out",
  },
  {
    icon: (
      <GiNotebook className="text-8xl transition-all duration-500 group-hover:text-[#2986fe] group-hover:translate-x-24" />
    ),
    title: "Flexible Schedule",
    description:
      "Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats all over the world.",
    aos: "zoom-out",
  },
  {
    icon: (
      <GrAnnounce className="text-8xl transition-all duration-500 group-hover:text-[#2986fe] group-hover:translate-x-24" />
    ),
    title: "Excellent advantages",
    description:
      "Search the world with ease and transparency. As the only tech-forward private aviation company, XO is able to bring you",
    aos: "zoom-in",
  },
  {
    icon: (
      <BsFillEmojiSunglassesFill className="text-8xl transition-all duration-500 group-hover:text-[#2986fe] group-hover:translate-x-24" />
    ),
    title: "Coolest Environment",
    description:
      "Charter an entire jet, or offer the seats you don’t need through our app a need for full or even fractional jet ownership",
    aos: "zoom-out",
  },
];

const Benefits = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-3xl font-bold md:text-5xl font-serif"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Discover Travel Lift Benefits
          </h2>
          <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            Experience the convenience of hassle-free upgrades, priority
            services, and added comfort with our Discover Travel Lift benefits!
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 cursor-pointer md:grid-cols-3 md:gap-4 lg:gap-6">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="grid gap-6 rounded-md group border border-solid transition-all duration-500 hover:shadow-xl border-gray-300 p-8 md:p-10"
              data-aos={benefit.aos}
              data-aos-duration="2000"
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
