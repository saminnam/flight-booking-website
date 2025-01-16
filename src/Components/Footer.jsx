import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdFlight } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#f0fbfa] shadow-2xl px-20 pt-20 pb-5 w-full">
        <div className="flex flex-wrap gap-5 justify-between items-center">
          <div className="w-[400px]">
            <Link to={"/"}>
              <a href="/">
                <img src={logo} alt="" className="w-[250px] h-[50px]" />
              </a>
              <div className="mt-5 text-justify">
                <p>
                  Travel Lift was founded in 2024 by a group of the
                  safety-foused professionals who created wingman standard for
                  rigorously vetting air charter operators.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <h2 className="text-[#2986fe] font-serif font-bold">EUROPE</h2>
            <p>Europe 45 Gloucester Road</p>
            <p>London DT1M 3BF</p>
            <p>+44 123456789</p>
          </div>
          <div>
            <h2 className="text-[#2986fe] font-serif font-bold">
              ASIA & PACIFIC
            </h2>
            <p>2473 Red Road Ste 9B</p>
            <p>Singapore SG</p>
            <p>+44 123456789</p>
          </div>
          <div>
            <h2 className="text-[#2986fe] font-serif font-bold">
              NORTH AMERICA
            </h2>
            <p>Europe 45 Gloucester Road</p>
            <p>London DT1M 3BF</p>
            <p>+44 123456789</p>
          </div>
        </div>
        <div className="w-full lg:border-[#2986fe] my-10 md:my-16 py-14 lg:border-2 rounded-xl">
          <div className="flex md:flex-row flex-col md:justify-evenly gap-5">
            <div>
              <h2 className="font-bold">Get Started</h2>
              <div className="bg-[#2986fe] w-12 h-1 rounded-full"></div>
              <ul className="mt-5">
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Private Jet
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Register
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Current Jet Deals{" "}
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Flynext Mobile App
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">How It Works</h2>
              <div className="bg-[#2986fe] w-12 h-1 rounded-full"></div>
              <ul className="mt-5">
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  How It Works
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Ways To Fly
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Ways To Buy
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Private Charter
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Private Jet Cost
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">About Us</h2>
              <div className="bg-[#2986fe] w-12 h-1 rounded-full"></div>
              <ul className="mt-5">
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  News & Press
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Blog
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  FAQs
                </li>
                <li className="cursor-pointer hover:text-[#2986fe] hover:translate-x-2 transition-all duration-300">
                  Careers
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">Newsletter</h2>
              <div className="bg-[#2986fe] w-12 h-1 rounded-full"></div>
              <ul action="" className="mt-5">
                <li className="md:w-[400px]">Subscribe Us To Be In Touch</li>
                <li className="my-2">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="p-3 mb-2 w-[200px]  border md:w-[400px] outline-[#2986fe] rounded-lg"
                  />
                </li>
                <li>
                  <Link
                    type="submit"
                    className="p-3 w-[200px] md:w-[400px] hover:bg-transparent border-[#2986fe] hover:text-[#2986fe] border group flex justify-center items-center gap-3 bg-[#2986fe] text-white font-bold rounded-lg"
                  >
                    <p>Subscribe Us</p>
                    <MdFlight className="text-xl group-hover:rotate-90 transition-all duration-500 rotate-45" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center">
            <div className="mr-4 md:w-10 border-t border-black"></div>
            <a
              href="https://www.linkedin.com/in/innamul-hasan-8663b82b8"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 inline-block hover:bg-[#2986fe] hover:text-white border-2 w-auto h-auto py-1 px-2 rounded-lg transition ease-in-out"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/sam_innam/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 inline-block border-2 hover:bg-[#2986fe] hover:text-white  w-auto h-auto py-2 px-2 rounded-lg transition ease-in-out"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://wa.me/918608373370"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 inline-block border-2 hover:bg-[#2986fe] hover:text-white  w-auto h-auto py-2 px-2 rounded-lg transition ease-in-out"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <a
              href="https://github.com/saminnam"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 inline-block border-2 hover:bg-[#2986fe] hover:text-white  w-auto h-auto py-1 px-2 rounded-lg transition ease-in-out"
              aria-label="Github"
            >
              <i className="bi bi-github"></i>
            </a>
            <div className="mr-4 md:w-10 border-t border-black"></div>
          </div>
          <div>
            <p>© 2024 Travel Lift Airlines. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
