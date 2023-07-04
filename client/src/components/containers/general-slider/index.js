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
    <div className="tt-71-gs-slider">
      <button className="tt-71-gs-slider-btn tt-71-gs-prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="tt-71-gs-slide-container"  ref={slideContainerRef}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'tt-71-gs-slide tt-71-gs-active' : 'tt-71-gs-slide'}
          >
            {card}
          </div>
        ))}
        
      </div>
      <button className="tt-71-gs-slider-btn tt-71-gs-next" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default GeneralSlider;
