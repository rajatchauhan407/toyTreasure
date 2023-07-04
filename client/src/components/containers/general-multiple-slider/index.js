import React, { useState } from 'react';
import './index.scss';
const GeneralMultipleSlider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="tt-71-slider-container">
      <div className="tt-71-slider" style={{ transform: `translateX(-${slideIndex * 30}%)` }}>
        {props.cards.map((el)=>{
          return el;
        })}
        {/* Add more card components if needed */}
      </div>
      <button className="tt-71-prev-button" onClick={handlePrevSlide} disabled={slideIndex === 0}>
        Prev
      </button>
      <button className="tt-71-next-button" onClick={handleNextSlide} disabled={slideIndex === props.cards.length-3}>
        Next
      </button>
    </div>
  );
};

export default GeneralMultipleSlider;
