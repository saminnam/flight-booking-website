import { IoMdBusiness } from "react-icons/io";

const Status = () => {
  return (
    <>
      <section className="bg-black lg:py-10 py-5 ">
        <div className="grid grid-cols-1 gap-8 mt-10 text-center sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2986fe] to-blue-900">
                6+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-white">
              Years in business
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2986fe] to-blue-900">
                44,821+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-white">
              Passengers reviews
            </p>
            <p className="text-base mt-0.5 text-gray-500">In last 2 years</p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2986fe] to-blue-900">
                37+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-white">
              Team members
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Working for your success
            </p>
          </div>
        </div>
      </section>
      <section className="bg-status-bg-pattern bg-cover bg-no-repeat bg-fixed py-10 lg:py-40">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-16" data-aos="zoom-in" >
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="bg-white p-5 rounded-full">
            <IoMdBusiness className="text-6xl text-[#2986fe]" />
            </div>
            <h1 className="text-5xl text-center font-semibold font-serif text-white uppercase">
              <span className="text-[#2986fe]">Great things in business are never done by one person.</span> They’re
              done by a team of people.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Status;
