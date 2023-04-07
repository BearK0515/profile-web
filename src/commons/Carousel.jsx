import React, { useEffect, useRef, useState, memo } from "react";

const Carousel = memo(({ slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const container = useRef(null);

  const next = () => {
    setCurrent(current === slides.length ? 0 : current + 1);
  };

  useEffect(() => {
    if (!autoSlide) return;

    let slideInterval = setInterval(next, autoSlideInterval);

    if (current === 0) {
      container.current.style.animation = "none";
      clearInterval(slideInterval);
      slideInterval = setInterval(next, 20);
    }

    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <ul className='relative grow overflow-hidden'>
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
});

export default Carousel;
