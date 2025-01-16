import { IoAirplaneOutline } from "react-icons/io5";

const offers = [
  {
    title: "Flexible Flight Options",
    description:
      "Enjoy the flexibility of booking flights that can be easily modified or canceled with minimal fees. Perfect for travelers who need flexibility in their plans.",
    link: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-10 w-10 text-white transition-all"
      >
        <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Priority Boarding",
    description:
      "Get priority boarding with our exclusive offers, ensuring that you get on your flight quickly and comfortably, ahead of the crowds.",
    link: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-10 w-10 text-white transition-all"
      >
        <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Extra Luggage Allowance",
    description:
      "Travel with peace of mind with an extra luggage allowance. Carry more on your flight without worrying about excess baggage fees.",
    link: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-10 w-10 text-white transition-all"
      >
        <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

const Offer = () => {
  return (
    <div className="relative flex flex-col px-5 py-16 md:px-10 md:py-20 justify-center items-center overflow-hidden bg-gray-50">
      <div
        className="flex items-center justify-center gap-6"
        data-aos="flip-down"
        data-aos-duration="2000"
      >
        <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
          What We Offer
        </h1>
        <IoAirplaneOutline className="text-xl text-[#2986fe]" />
      </div>
      <p className="mb-8 mt-4 text-center max-w-xl text-gray-500 md:mb-12 lg:mb-16">
        Experience the convenience of hassle-free upgrades, priority services,
        and added comfort with our Discover Travel Lift benefits!
      </p>
      <div className="grid lg:grid-cols-3 justify-between w-full gap-5 md:grid-cols-2 grid-cols-1">
        {offers.map((offer, index) => (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                {offer.icon}
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>{offer.description}</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href={offer.link}
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read more &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="font-medium flex items-center gap-3 uppercase rounded-sm group tracking-tight border border-[#2986fe] transition-all duration-300 p-4 hover:bg-transparent hover:text-[#2986fe] mt-16 text-white bg-[#2986fe]">
        <span>Know More</span>
        <IoAirplaneOutline className="text-xl -rotate-45 transition-all duration-300 group-hover:rotate-0" />
      </button>
    </div>
  );
};

export default Offer;
