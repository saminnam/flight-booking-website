{/* <div class="relative ">
  <img src="your-image.jpg" alt="Image" class="block w-full h-auto" />
  <div class="absolute bottom-full left-0 right-0 bg-blue-500 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full">
    <div class="text-white text-lg whitespace-nowrap absolute overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Your Text Here
    </div>
  </div>
</div> */}





// <article
//               key={post.id}
//               className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl duration-300 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
//               // data-aos={post.animation.type}
//               // data-aos-duration={post.animation.duration}
//             >
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="absolute inset-0 -z-10 h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
//               <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
//               <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
//                 <time className="mr-8">{post.date}</time>
//                 <div className="-ml-4 flex items-center gap-x-4">
//                   <svg
//                     viewBox="0 0 2 2"
//                     className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
//                   >
//                     <circle cx="1" cy="1" r="1"></circle>
//                   </svg>
//                   <div className="flex gap-x-2.5">
//                     <img
//                       src={post.authorImage}
//                       alt={post.author}
//                       className="h-6 w-6 flex-none rounded-full bg-white/10"
//                     />
//                     {post.author}
//                   </div>
//                 </div>
//               </div>
//               <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
//                 <a href={post.link}>
//                   <span className="absolute inset-0"></span>
//                   {post.title}
//                 </a>
//               </h3>
//             </article>