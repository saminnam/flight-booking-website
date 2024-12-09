import CountUp from "react-countup";
import 'animate.css';

const GlobalHero = ({ title }) => {
  return (
    <section className="bg-common-hero-pattern md:mx-20 bg-cover bg-no-repeat rounded-3xl my-28 lg:py-16 py-10 h-[480px]">
      <h1
        className="text-center text-5xl lg:text-7xl font-bold font-serif max-w-lg lg:max-w-3xl mx-auto pt-14 animate__animated animate__lightSpeedInRight"
      >
        {title}
      </h1>
      <div
        className="border border-gray-300 border-t-white border-t-2 bg-transparent shadow-sm shadow-[#2986fe] lg:gap-10 rounded-3xl grid lg:grid-cols-4 grid-cols-2 lg:w-[1000px] w-[350px] absolute lg:left-[250px] left-10 top-[350px] lg:top-[500px]"
        data-aos="zoom-in-down"
      >
        <div
          className="lg:py-8 py-2"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="md:border-r border-gray-300 px-12">
            <p className="text-gray-600 mb-2 text-center">Founded</p>
            <h2 className="text-2xl lg:text-5xl font-semibold text-center">
              <CountUp start={1200} end={2024} duration={3} />
            </h2>
          </div>
        </div>
        <div
          className="lg:py-8 py-2"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="lg:border-r border-gray-300 px-12">
            <p className="text-gray-600 mb-2 text-center">Total funding</p>
            <h2 className="text-2xl lg:text-5xl font-semibold text-center">
              $<CountUp start={0} end={9.6} decimals={1} duration={3} />M
            </h2>
          </div>
        </div>
        <div
          className="lg:py-8 py-2"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="md:border-r border-gray-300 px-12">
            <p className="text-gray-600 mb-2 text-center">Team members</p>
            <h2 className="text-2xl lg:text-5xl font-semibold text-center">
              <CountUp start={0} end={110} duration={3} />
            </h2>
          </div>
        </div>
        <div
          className="lg:py-8 py-2"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="px-12">
            <p className="text-gray-600 mb-2 text-center">Nationalities</p>
            <h2 className="text-2xl lg:text-5xl font-semibold text-center">
              <CountUp start={0} end={24} duration={3} />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalHero;
