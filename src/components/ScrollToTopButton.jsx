import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-4 right-4 ${isVisible ? "block" : "hidden"}`}>
      <button
        onClick={scrollToTop}
        className="p-2 inner text-white rounded-full shadow-lg"
      >
        <FaArrowCircleUp className=" h-6 w-6" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
