import { IoEarthOutline } from "react-icons/io5";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GrInProgress, GrAnnounce } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { IoAirplaneOutline } from "react-icons/io5";

const benefitsData = [
  {
    icon: (
      <IoEarthOutline className="text-7xl" />
    ),
    title: "Luxury & Comfort Travel",
    description:
      "As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on money",
    aos: "zoom-out",
  },
  {
    icon: (
      <RiExchangeDollarFill className="text-7xl" />
    ),
    title: "Smart Costing Flight",
    description:
      "Flying should be a pleasure and we’ll make your charter experience as luxurious and more comfortable as soon as possible.",
    aos: "zoom-in",
  },
  {
    icon: (
      <GrInProgress className="text-7xl" />
    ),
    title: "Career progression",
    description:
      "The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately since 1940s",
    aos: "zoom-out",
  },
  {
    icon: (
      <GiNotebook className="text-7xl" />
    ),
    title: "Flexible Schedule",
    description:
      "Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats all over the world.",
    aos: "zoom-out",
  },
  {
    icon: (
      <GrAnnounce className="text-7xl" />
    ),
    title: "Excellent advantages",
    description:
      "Search the world with ease and transparency. As the only tech-forward private aviation company, XO is able to bring you",
    aos: "zoom-in",
  },
  {
    icon: (
      <BsFillEmojiSunglassesFill className="text-7xl" />
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
          <div
            className="flex items-center gap-6"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
              Discover Travel Benefits
            </h1>
            <IoAirplaneOutline className="text-xl text-[#2986fe]" />
          </div>
          <p className="mb-8 mt-4 max-w-xl text-gray-500 md:mb-12 lg:mb-16">
            Experience the convenience of hassle-free upgrades, priority
            services, and added comfort with our Discover Travel Lift benefits!
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 cursor-pointer md:grid-cols-3 md:gap-4 lg:gap-6">
          {benefitsData.map((benefit, index) => (
            <div
              key={index} // Moved the key to the outermost element of the map
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            >
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div
                className="relative z-10 mx-auto max-w-md grid gap-6 rounded-md group border border-solid transition-all duration-500 hover:shadow-xl border-gray-300 p-8 md:p-10"
                data-aos={benefit.aos}
                data-aos-duration="2000"
              >
                <span className="w-0 rounded-full group-hover:text-white bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  {benefit.icon}
                </span>
                <div className="space-y-6 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>{benefit.description}</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-sky-500 transition-all duration-300 group-hover:text-white"
                    >
                      Read the docs &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

// <div
//   key={index}
//   className="grid gap-6 rounded-md group border border-solid transition-all duration-500 hover:shadow-xl border-gray-300 p-8 md:p-10"
//   data-aos={benefit.aos}
//   data-aos-duration="2000"
// >
//   {benefit.icon}
//   <h3 className="text-xl font-semibold">{benefit.title}</h3>
//   <p className="text-sm text-gray-500">{benefit.description}</p>
// </div>
