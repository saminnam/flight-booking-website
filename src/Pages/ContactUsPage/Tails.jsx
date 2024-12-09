import { FaEnvelope, FaHeadset, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "animate.css";

const Tails = () => {
  return (
    <section className="mx-20">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">
            Contact us
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            We’d love to hear from you
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Our friendly team is always here to chat.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-4 rounded-lg bg-blue-50 md:p-6" data-aos="zoom-in" data-aos-duration="2000">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-white">
              <FaEnvelope className="w-5 h-5" />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800">
              Chat to sales
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Speak to our friendly team.
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              innam8264@gmail.com
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6" data-aos="zoom-in" >
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-white">
              <FaHeadset className="w-5 h-5" />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800">
              Chat to support
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              We’re here to help.
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              Start new chat
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6" data-aos="zoom-out">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-white">
              <FaMapMarkerAlt className="w-5 h-5" />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800">
              Visit us
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Visit our office HQ..
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              100 Smith Street Collingwood VIC 3066 AU
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6" data-aos="zoom-out" >
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-white">
              <FaPhone className="w-5 h-5" />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800">
              Call us
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Mon-Fri from 8am to 5pm.
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              +1 (555) 000-0000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tails;
