import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollUpButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  let showScrollButtonStyle = showScrollButton ? "bottom-4" : "-bottom-1/2";

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY >= 250
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      {/* Scroll up */}
      <a
        href="#"
        id="scroll-up"
        className={`fixed right-4 ${showScrollButtonStyle} bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300 `}
      >
        <RiArrowUpLine />
      </a>
    </>
  );
};

export default ScrollUpButton;
