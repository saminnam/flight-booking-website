import { useState, useEffect, useRef } from "react";
import about from "../assets/aboutimg.png";
import { FaRegStar } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { PiSecurityCamera } from "react-icons/pi";
import CountUp from "react-countup";

const AboutUs = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mt-16 bg-gray-100 px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl ">
        <h2
          className="mb-2 text-3xl text-center font-serif font-bold md:text-5xl lg:mb-3"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          Your Gateway to the World
        </h2>
        <p className="text-center">
          Our mission is to simplify the flight booking process by providing a
          user-friendly platform
        </p>
        <div className="flex justify-between lg:flex-row flex-col items-center mt-16 gap-24">
          <img
            src={about}
            alt="about us"
            data-aos="flip-left"
            data-aos-duration="2000"
            className="inline-block w-[600px] rounded-2xl object-cover"
          />
          <div
            className="flex flex-col gap-12 w-full bg-white rounded-2xl border border-solid border-gray-300 p-12"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <div>
              <div className="flex justify-center gap-3 md:gap-14">
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {isInView && (
                      <CountUp end={45000} duration={3} separator="," /> // Trigger only when in view
                    )}
                    +
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {isInView && (
                      <CountUp end={125000} duration={3} separator="," />
                    )}
                    +
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    Best Feedbacks
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {isInView && (
                      <CountUp end={2000} duration={5} separator="," />
                    )}
                    +
                  </h3>
                  <p className="text-sm text-gray-500">Tour Plans</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2 className="font-semibold text-3xl md:px-5">
                  Find the best deals and options that suit your needs.
                </h2>
                <div className="w-full bg-[#2986fe] h-1 mt-5 rounded-2xl"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-center gap-5 md:gap-20">
                <div>
                  <FaRegStar className="text-3xl mb-3" />
                  <p className="text-sm text-gray-500 md:text-center">
                    Best Quality
                  </p>
                </div>
                <div>
                  <MdSupportAgent className="text-3xl mb-3" />
                  <p className="text-sm text-gray-500 md:text-center">
                    24/7 Support
                  </p>
                </div>
                <div>
                  <PiSecurityCamera className="text-3xl mb-3" />
                  <p className="text-sm text-gray-500">High Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
