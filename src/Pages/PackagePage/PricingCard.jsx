import { IoAirplaneOutline } from "react-icons/io5";

const pricingData = [
  {
    id: 1,
    title: "Economy Class",
    description: "Affordable and comfortable travel with basic amenities.",
    features: [
      "Free cabin baggage",
      "Complimentary snacks and beverages",
      "Flexible rescheduling options",
    ],
    oldPrice: 199.99,
    newPrice: 99.99,
    currency: "USD",
    buttonText: "Book Economy",
    buttonLink: "https://example.com/economy-booking",
  },
  {
    id: 2,
    title: "Business Class",
    description:
      "Experience premium comfort with extra legroom and exclusive services.",
    features: [
      "Priority boarding and check-in",
      "Premium meals and beverages",
      "Access to airport lounges",
    ],
    oldPrice: 399.99,
    newPrice: 299.99,
    currency: "USD",
    buttonText: "Book Business",
    buttonLink: "https://example.com/business-booking",
  },
  {
    id: 3,
    title: "First Class",
    description:
      "Luxurious travel experience with personalized services and privacy.",
    features: [
      "Fully reclining seats",
      "Gourmet dining options",
      "Private suites and top-tier amenities",
    ],
    oldPrice: 999.99,
    newPrice: 799.99,
    currency: "USD",
    buttonText: "Book First Class",
    buttonLink: "https://example.com/firstclass-booking",
  },
];

const PricingCard = () => {
  return (
    <div className="bg-white dark:bg-blue-100 min-h-screen">
      <div className="relative pt-8">
        <div className="absolute inset-0 h-1/2 bg-gray-100 dark:bg-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pricingData.map((pricing) => (
              <div
                key={pricing.id}
                className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none flex flex-col bg-gray-50"
              >
                <div className="px-6 py-8 lg:p-12 flex-1">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {pricing.title}
                  </h3>
                  <p className="mt-6 text-base text-gray-500">
                    {pricing.description}
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-rose-600">
                        What's included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200 dark:border-gray-600"></div>
                    </div>
                    <ul
                      role="list"
                      className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-y-5"
                    >
                      {pricing.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-400 dark:text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50">
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    Limited Time Offer
                  </p>
                  <div className="mt-4">
                    <span
                      style={{ opacity: 0.5 }}
                      className="font-mono text-xl md:text-lg font-medium text-gray-400 dark:text-gray-400"
                    >
                      {pricing.currency}
                    </span>
                    <span
                      style={{ opacity: 0.5 }}
                      className="h1 line-through text-gray-600 dark:text-gray-400"
                    >
                      {pricing.oldPrice}
                    </span>
                    <span className="line-through relative text-gray-600 dark:text-gray-400 text-center text-sm mb-4">
                      /mo
                    </span>
                    <span className="text-red-600 text-sm">
                      Special promotion
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                    <span>${pricing.newPrice}</span>
                    <span className="ml-3 text-xl font-medium text-gray-500 dark:text-gray-400">
                      {pricing.currency}
                    </span>
                  </div>
                  <div className="mt-10 flex justify-center">
                    <button className="font-medium flex text-xs items-center gap-3 uppercase rounded-lg group tracking-tight border border-[#2986fe] transition-all duration-300 py-2 px-4 hover:bg-transparent hover:text-[#2986fe] text-white bg-[#2986fe]">
                      <span> {pricing.buttonText}</span>
                      <IoAirplaneOutline className="text-xl -rotate-45 transition-all duration-300 group-hover:rotate-0" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
