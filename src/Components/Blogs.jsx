import { IoAirplaneOutline } from "react-icons/io5";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import author from "../assets/author.jpg"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence: Trends and Challenges",
    date: "Oct 11, 2023",
    author: "John",
    authorImage: author,
    image: blog1,
    link: "/tech-blog/post1",
    animation: { type: "zoom-in-up", duration: "2000" },
  },
  {
    id: 2,
    title: "The Rise of Blockchain Technology: A Comprehensive Guide",
    date: "Sept 25, 2023",
    author: "Jane",
    authorImage: author,
    image: blog2,
    link: "/tech-blog/post2",
    animation: { type: "zoom-out-up", duration: "2000" },
  },
  {
    id: 3,
    title: "How Quantum Computing Will Revolutionize Data Security",
    date: "Sept 24, 2023",
    author: "Michael",
    authorImage: author,
    image:
    blog3,
    link: "/tech-blog/post3",
    animation: { type: "zoom-in-up", duration: "2000" },
  },
];

const Blogs = () => {
  return (
    <div className="mx-auto w-full px-5 py-16 md:px-10 md:py-20 bg-[#F4FCFA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div
          className="flex items-center justify-center gap-6"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <h1 className="block text-sm border-b border-[#2986fe] lg:text-lg text-[#2986fe] font-semibold text-primary">
            From The Blogs
          </h1>
          <IoAirplaneOutline className="text-xl text-[#2986fe]" />
        </div>
        <p className="mb-8 text-center mt-4 text-gray-500 md:mb-12 lg:mb-16">
          Perfect for hiking enthusiasts and peace seekers, mountain
          destinations offer breathtaking views and tranquility.
        </p>
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="relative cursor-pointer group h-[400px] isolate flex flex-col justify-end overflow-hidden rounded-2xl duration-300 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              data-aos={post.animation.type}
              data-aos-duration={post.animation.duration}
            >
              <img
                src={post.image}
                alt={post.title}
                className="absolute block inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute bottom-full bg-[#0000004d] left-0 right-0 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10">
                <div className="text-white text-lg absolute overflow-hidd bottom-14 w-[300px] left-5 transform">
                  <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300">
                    <time className="mr-8">{post.date}</time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx="1" cy="1" r="1"></circle>
                      </svg>
                      <div className="flex gap-x-2.5">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="h-6 w-6 flex-none rounded-full bg-white/10"
                        />
                        {post.author}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={post.link}>
                      <span className="absolute inset-0"></span>
                      {post.title}
                    </a>
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
