import CountUp from "react-countup";
import "animate.css";

const GlobalHero = ({ title }) => {
  return (
    <section className="bg-common-hero-pattern px-10 md:mx-20 w-full bg-cover bg-no-repeat rounded-3xl my-28 lg:py-16 py-10 h-[580px]">
      <div className="lg:w-[550px] w-full flex flex-col gap-8">
        <h1 className="text-4xl text-center lg:text-6xl font-serif animate__animated animate__lightSpeedInRight">
          {title}
        </h1>
        <div
          className="overflow-hidden  bg-transparent lg:gap-10 rounded-3xl grid lg:grid-cols-2 grid-cols-2"
          data-aos="zoom-in-down"
        >
          <div
            className="lg:py-8 py-2 flex justify-center items-center border-r-[#3749be] border-r-2 shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="w-full px-12">
              <p className="text-gray-600 mb-2  text-center">Founded</p>
              <h2 className="text-2xl lg:text-4xl font-light text-center">
                <CountUp start={1200} end={2024} duration={3} />
              </h2>
            </div>
          </div>
          <div
            className="lg:py-8 py-2 flex justify-center items-center border-r-[#3749be] border-r-2 shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="w-full px-12">
              <p className="text-gray-600 mb-2 text-center">Total funding</p>
              <h2 className="text-2xl lg:text-4xl font-light text-center">
                $<CountUp start={0} end={9.6} decimals={1} duration={3} />M
              </h2>
            </div>
          </div>
          <div
            className="lg:py-8 py-2 flex justify-center items-center border-r-[#3749be] border-r-2 shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="w-full px-12">
              <p className="text-gray-600 mb-2 text-center">Team members</p>
              <h2 className="text-2xl lg:text-4xl font-light text-center">
                <CountUp start={0} end={110} duration={3} />
              </h2>
            </div>
          </div>
          <div
            className="lg:py-8 py-2 flex justify-center items-center border-r-[#3749be] border-r-2 shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="w-full px-12">
              <p className="text-gray-600 mb-2 text-center">Nationalities</p>
              <h2 className="text-2xl lg:text-4xl font-light text-center">
                <CountUp start={0} end={24} duration={3} />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalHero;
