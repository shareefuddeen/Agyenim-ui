import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 200,
      smooth: true,
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-600 text-white shadow-lg hover:bg-gray-700 z-50 transition-colors text-4xl "
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
