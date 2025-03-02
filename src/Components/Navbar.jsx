import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdFlight } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [menuOne, setMenuOne] = useState(false);
  return (
    <section
      className="fixed top-0 z-50 w-full bg-white"
      data-aos="flip-right"
      data-aos-duration="2000"
    >
      <nav className="font-inter lg:relative lg:top-0  mx-10">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4">
          <Link to={"/"}>
            <a href="/">
              <img src={logo} alt="" className="w-[250px] h-[50px]" />
            </a>
          </Link>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <Link
              to={"/"}
              className="font-inter group rounded-lg lg:px-6 lg:py-4 font-semibold active:text-[#2986fe] focus:text-[#2986fe]"
              onClick={() => setIsOpen(!isOpen)}
            >
              HOME
              <div className="h-0.5 bg-[#2986fe] w-0 transition-all duration-300 lg:group-hover:w-full"></div>
            </Link>
            <Link
              to={"/about"}
              className="font-inter group rounded-lg lg:px-6 lg:py-4 font-semibold active:text-[#2986fe] focus:text-[#2986fe]"
              onClick={() => setIsOpen(!isOpen)}
            >
              ABOUT
              <div className="h-0.5 bg-[#2986fe] w-0 transition-all duration-300 lg:group-hover:w-full"></div>
            </Link>
            {/* {menuOne && (
                <div className="z-50 flex w-full flex-col rounded-lg px-5 py-5 lg:absolute lg:top-20 lg:w-[800px] bg-gray-100 lg:flex-row lg:flex-wrap lg:py-7 xl:w-[950px]">
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8"
                    href="#"
                  >
                    <div className="relative">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" fill="#C4C4C4" />
                        <path
                          d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                          fill="black"
                        />
                        <path
                          d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                      Analytics
                    </h2>
                    <p className="font-inter max-w-64 text-sm text-gray-500 lg:max-w-sm">
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8"
                    href="#"
                  >
                    <div className="relative">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" fill="#C4C4C4" />
                        <path
                          d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                          fill="black"
                        />
                        <path
                          d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                      Engagement
                    </h2>
                    <p className="font-inter max-w-64 text-sm text-gray-500 lg:max-w-sm">
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8"
                    href="#"
                  >
                    <div className="relative">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" fill="#C4C4C4" />
                        <path
                          d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                          fill="black"
                        />
                        <path
                          d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                      Automations
                    </h2>
                    <p className="font-inter max-w-64 text-sm text-gray-500 lg:max-w-sm">
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>
                </div>
              )} */}
            <Link
              to={"/tour"}
              className="font-inter group rounded-lg lg:px-6 lg:py-4 font-semibold active:text-[#2986fe] focus:text-[#2986fe]"
              onClick={() => setIsOpen(!isOpen)}
            >
              TOUR
              <div className="h-0.5 bg-[#2986fe] w-0 transition-all duration-300 lg:group-hover:w-full"></div>
            </Link>
            <Link
              to={"/package"}
              className="font-inter group rounded-lg lg:px-6 font-semibold lg:py-4 lg: lg:hover:text-gray-800 active:text-[#2986fe] focus:text-[#2986fe]"
              onClick={() => setIsOpen(!isOpen)}
            >
              PACKAGE
              <div className="h-0.5 bg-[#2986fe] w-0 transition-all duration-300 lg:group-hover:w-full"></div>
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setIsOpen(!isOpen)}
              className="font-inter group lg: rounded-lg pb-8 lg:px-6 font-semibold lg:py-4 lg: lg:hover:text-gray-800 active:text-[#2986fe] focus:text-[#2986fe]"
            >
              CONTACT
              <div className="h-0.5 bg-[#2986fe] w-0 transition-all duration-300 lg:group-hover:w-full"></div>
            </Link>
          </div>
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <Link
              to={"/package"}
              className="font-inter group flex justify-center border-2 items-center gap-2 text-sm rounded-3xl px-6 py-3 text-center hover:bg-transparent hover:text-black border-[#101010] text-white bg-[#101010]"
            >
              <MdFlight className="text-xl group-hover:rotate-90 transition-all duration-500 rotate-45" />
              <p>BOOK NOW</p>
            </Link>
          </div>
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <CgMenuRightAlt className="text-xl mt-3" />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
