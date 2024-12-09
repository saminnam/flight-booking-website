import { useState } from "react";
import { MdFlight } from "react-icons/md";

const GoTopBtn = () => {
  const [isTop, setIsTop] = useState(false);
  const goTop = () => {
    window.scrollTo(0, 0);
    setIsTop(false);
  };
  const goBottom = () => {
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
    setIsTop(true);
  };

  return (
    <div>
      {isTop && isTop ? (
        <button
          className="btn fixed right-5 group bottom-10 bg-[#2986fe] p-3 animate-bounce rounded-lg border border-[#2986fe] hover:bg-transparent transition-transform duration-500 hover:-translate-y-2"
          onClick={goTop}
        >
          <MdFlight className="transition-transform text-xl text-white duration-500 group-hover:text-[#2986fe]" />
        </button>
      ) : (
        <button
          className="btn fixed right-5 group bottom-10 bg-[#2986fe] p-3 animate-bounce rounded-lg border border-[#2986fe] hover:bg-transparent transition-transform duration-500 hover:translate-y-2"
          onClick={goBottom}
        >
          <MdFlight className="transition-transform text-xl rotate-180 text-white duration-500 group-hover:text-[#2986fe]" />
        </button>
      )}
    </div>
  );
};

export default GoTopBtn;
