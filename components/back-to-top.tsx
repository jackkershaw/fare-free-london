"use client";

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
          className="rounded-full bg-link w-16 h-16 text-lighterBg shadow-lg hover:bg-hover focus:outline-none focus:ring-2 focus:ring-hover focus:ring-opacity-50 active:bg-link flex items-center justify-center"
        >
          <span className="icon-[mdi--arrow-up] w-6 h-6 text-lighterBg"></span>
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
