import img1 from "../assets/choose.png";
import img2 from "../assets/img-line.png";

const WhyChoose = () => {
  return (
    <section>
      <div className="mx-auto w-full px-5 py-16 md:px-24 md:py-20">
        <h2
          className="mb-8 text-3xl font-serif font-bold md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          Why Choose Us?
        </h2>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-15">
          <div className="flex flex-col gap-8 lg:justify-between">
            <a
              className="flex max-w-md rounded-md border-l-4 box-border hover:border-black p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px"
              href="#w-tabs-1-data-w-pane-0"
              data-aos="fade-down-right"
              data-aos-duration="2000"
            >
              <img
                alt="hold booking"
                src="https://thumbs.dreamstime.com/b/booking-ticket-online-reservation-travel-flight-concept-85085904.jpg"
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold">Hold Booking Option</p>
                <p className="text-sm text-gray-500">
                  Not ready to finalize your booking? Use our "Hold My Booking"
                  feature to reserve your flight at the current price for a
                  limited time while you finalize your plans.
                </p>
              </div>
            </a>
            <a
              className="flex max-w-md rounded-md border-l-4 box-border border-black p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]"
              href="#w-tabs-1-data-w-pane-1"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <img
                alt="24/7 support"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerFSdBzITxqUJ9SjUSmgTOJdMpXuCzCRCUA&s"
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm text-gray-500">
                  Our dedicated customer service team is available anytime to
                  assist you with any inquiries, changes, or issues before,
                  during, or after your booking.
                </p>
              </div>
            </a>
            <a
              className="flex max-w-md rounded-md border-l-4 box-border hover:border-black p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px"
              href="#w-tabs-1-data-w-pane-2"
              data-aos="fade-up-right"
              data-aos-duration="2000"
            >
              <img
                alt="flexible payment"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5zPm115AwzsUTtxJEg5Y-KuNoQNZAjLCrBPJdd9_wqC_Qtcc1NID8wez0smtENdqsjU&usqp=CAU"
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold">Flexible Payment Plans</p>
                <p className="text-sm text-gray-500">
                  Take advantage of our installment payment options to spread
                  the cost of your flight over time, making it easier to manage
                  your travel expenses.
                </p>
              </div>
            </a>
          </div>
          <img
            src={img2}
            alt="img2"
            className="md:h-[400px] h-0 rounded-xl animate-pulse"
          />
          <img
            alt="img1"
            src={img1}
            className="inline-block  max-h-lg w-full max-w-md object-cover"
            data-aos="zoom-out-up"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
