import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 text-lighterBg">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="rounded-full bg-link p-4 text-lighterBg shadow-lg hover:bg-hover focus:outline-none focus:ring-2 focus:ring-darkerBg focus:ring-opacity-50 active:bg-link"
        >
          <span className="icon-[mdi--arrow-up] w-10 h-10 text-lighterBg"></span>
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
