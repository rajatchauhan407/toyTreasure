import React, { useState,useRef } from 'react';
import './index.scss';

const GeneralSlider = ({ cards }) => {
    const slideContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const scrollToSlide = (index) => {
    const slideWidth = slideContainerRef.current.offsetWidth;
    const scrollLeft = index * slideWidth;
    slideContainerRef.current.scrollLeft = scrollLeft;
  };
  return (
    <div className="slider">
      <button className="slider-btn prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="slide-container"  ref={slideContainerRef}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            {card}
          </div>
        ))}
      </div>
      <button className="slider-btn next" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default GeneralSlider;
