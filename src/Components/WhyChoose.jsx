import { IoAirplaneOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import img1 from "../assets/choose.png";
import img2 from "../assets/flight-icon.png";

const WhyChoose = () => {
  return (
    <>
      <section className="overflow-hidden px-10 lg:mx-10 bg-white dark:bg-dark">
        <div className="container">
          <div className="flex lg:justify-between items-center lg:flex-row flex-col md:gap-14 gap-10 justify-center">
            <div
              className="w-full px-4 lg:w-1/2 xl:w-5/12 lg:mr-10"
              data-aos="fade-up-left"
            >
              <div className="mt-10 lg:mt-0">
                <div
                  className="flex items-center gap-10 mb-5"
                  data-aos="flip-down"
                  data-aos-duration="2000"
                >
                  <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
                    Why Choose Us
                  </h1>
                  <IoAirplaneOutline className="text-xl text-[#2986fe]" />
                </div>
                <h2 className="mb-5 text-3xl font-bold font-serif sm:text-[40px]/[48px]">
                  Your trusted flight booking partner
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  We make travel easy with a seamless booking process,
                  competitive prices, and exceptional customer service. Choose
                  us for a hassle-free journey.
                </p>
                <h2 className="text-2xl font-medium uppercase tracking-tight text-[#2986fe]">
                  Book with confidence and explore the world.
                </h2>
                <div className="flex gap-5 items-center mt-6">
                  <div className="space-y-2">
                    <IoCheckmark className="text-2xl text-[#2986fe]" />
                    <IoCheckmark className="text-2xl text-[#2986fe]" />
                    <IoCheckmark className="text-2xl text-[#2986fe]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">
                      Easy and secure flight booking process
                    </h3>
                    <h3 className="font-bold">
                      Access to the best deals and discounts
                    </h3>
                    <h3 className="font-bold">
                      24/7 customer support for a stress-free experience
                    </h3>
                  </div>
                </div>
                <button className="font-medium flex items-center gap-3 uppercase rounded-sm group tracking-tight border border-[#2986fe] transition-all duration-300 p-4 hover:bg-transparent hover:text-[#2986fe] mt-16 text-white bg-[#2986fe]">
                  <span>Book Your</span>{" "}
                  <IoAirplaneOutline className="text-xl -rotate-45 transition-all duration-300 group-hover:rotate-0" />
                </button>
              </div>
            </div>
            <img
              src={img2}
              alt="img2"
              className="lg:w-48 lg:h-[600px] md:w-48 md:h-[500px] w-0 -rotate-4"
            />
            <img
              alt="img1"
              src={img1}
              className="w-full max-w-md object-cover"
              data-aos="zoom-out-up"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
