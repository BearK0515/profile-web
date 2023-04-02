import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const container = useRef(null);
  const next = () => {
    setCurrent((current) => (current === slides.length ? 0 : current + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    if (current === 0) {
      container.current.style.animation="none"
      autoSlideInterval= 13
    }
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <ul className=' relative grow overflow-hidden'>
      <div
        ref={container}
        className={`w-full h-full flex flex-col items-center ${
          current === 0 ? "" : "duration-500"
        } `}
        style={{ transform: `translate3d(0,${-current * 100}%,0)` }}
      >
        {slides?.map((slide, index) => (
          <li key={index} className='h-full'>
            {slide}
          </li>
        ))}
        <li key={slides.length} className='h-full'>
          {slides[0]}
        </li>
      </div>
    </ul>
  );
};

export default Carousel;
