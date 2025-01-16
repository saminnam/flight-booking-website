import img1 from "../assets/canada.jpg";
import img2 from "../assets/america.jpg";
import img3 from "../assets/maldives.jpg";
import img4 from "../assets/chicago.jpg";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoAirplaneOutline } from "react-icons/io5";

const Destination = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const destinations = [
    {
      img: img1,
      country: "CANADA",
      rating: 4.1,
      description: "Discover the Stunning Landscapes of Canada",
      icon: <FaStarHalfAlt />,
    },
    {
      img: img2,
      country: "USA",
      rating: 4.9,
      description: "Experience the Diverse Culture of the USA",
      icon: <FaStar />,
    },
    {
      img: img3,
      country: "MALDIVES",
      rating: 4.1,
      description: "Relax on the White Sandy Beaches of the Maldives",
      icon: <FaStarHalfAlt />,
    },
    {
      img: img4,
      country: "CHICAGO",
      rating: 5.0,
      description: "Explore the Architecture and Art of Chicago",
      icon: <FaStar />,
    },
    {
      img: "https://i.pinimg.com/736x/0f/f0/a7/0ff0a776a4853fefee8720a554262f8f.jpg",
      country: "USA",
      rating: 4.9,
      description: "Experience the Diverse Culture of the USA",
      icon: <FaStar />,
    },
    {
      img: img3,
      country: "MALDIVES",
      rating: 4.1,
      description: "Relax on the White Sandy Beaches of the Maldives",
      icon: <FaStarHalfAlt />,
    },
    {
      img: img4,
      country: "CHICAGO",
      rating: 5.0,
      description: "Explore the Architecture and Art of Chicago",
      icon: <FaStar />,
    },
  ];

  return (
    <section className="mt-16 bg-blue-50">
      <div className="mx-auto w-full px-5 py-16 md:px-24 md:py-20">
        <div
          className="flex items-center gap-6"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
            Popular Destinations
          </h1>
          <IoAirplaneOutline className="text-xl text-[#2986fe]" />
        </div>
        <p className="mb-8 mt-4 text-gray-500 lg:mb-10">
          Explore top travel destinations for your next vacation or weekend
          getaway.
        </p>
        <Slider {...settings}>
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="p-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <a
                href="#"
                className="flex flex-col gap-4 group rounded-md px-4 py-8 md:p-0"
              >
                <img
                  src={destination.img}
                  alt={destination.country}
                  className="h-60 object-cover group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 rounded-3xl"
                />
                <div className="flex flex-col items-start py-4">
                  <div className="flex justify-between items-center w-full">
                    <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                      <p className="text-sm font-semibold text-blue-600">
                        {destination.country}
                      </p>
                    </div>
                    <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5 flex items-center gap-2">
                      <p className="text-sm flex gap-2 justify-center items-center font-semibold text-blue-600">
                        {destination.icon} <span>{destination.rating}</span>
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-xl font-bold md:text-2xl">
                    {destination.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Destination;
