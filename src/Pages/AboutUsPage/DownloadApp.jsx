import flightApp from "../../assets/flight-app.png";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <section className="bg-download-bg-pattern bg-cover bg-fixed bg-no-repeat">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2" data-aos="flip-left"  data-aos-duration="1500">
          <img
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] bg-white object-contain rounded-full"
            src={flightApp}
            alt="web-app"
          />
        </div>
        <div className="flex flex-col items-center xl:items-start bg-white p-5 rounded-lg lg:w-[600px]" data-aos="zoom-in">
          <h2 className="text-2xl font-semibold tracking-tight xl:text-3xl">
            Download our free mobile app
          </h2>
          <p className="block max-w-2xl mt-4 text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            corporis esse dolorum, illum, consectetur earum provident alias
            dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam
            fugiat consequuntur nostrum odio.
          </p>
          <div className="mt-6 sm:-mx-2">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <FaGooglePlay className="text-2xl" />
              <span className="mx-2">Get it on Google Play</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <FaApple className="text-2xl"/>
              <span className="mx-2">Get it on IOS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
