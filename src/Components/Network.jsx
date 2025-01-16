import { useState, useEffect } from "react";
import img1 from "../assets/con1.jpeg";
import img2 from "../assets/con2.png";
import img3 from "../assets/con3.png";
import img4 from "../assets/con4.png";
import img5 from "../assets/con5.jpeg";

const Network = () => {
  const logos = [img1, img2, img3, img4, img5];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section>
      <div className="flex flex-wrap lg:mt-0 mt-5 lg:justify-evenly justify-center items-center">
        <div className="lg:mt-16 md:pe-14">
          <div className="flex items-center">
            <div className="ml-4 mr-4 w-10 border-t border-black"></div>
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
            <div className="mr-4 w-10 border-t border-black"></div>
          </div>
        </div>
        <div>
          <ul className="lg:mt-16 mt-4 grid grid-cols-1 sm:mt-24 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-4">
            {logos.map((logo, index) => (
              <li
                key={index}
                className={`flex justify-center transition-opacity p-3 lg:p-5 duration-1000 ${
                  index === currentLogoIndex ? "opacity-100" : "opacity-50"
                }`}
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="inline-block h-6 w-24"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Network;
