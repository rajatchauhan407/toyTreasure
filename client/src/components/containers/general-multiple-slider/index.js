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
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${slideIndex * 30}%)` }}>
        {props.cards.map((el)=>{
          return el;
        })}
        {/* Add more card components if needed */}
      </div>
      <button className="prev-button" onClick={handlePrevSlide} disabled={slideIndex === 0}>
        Prev
      </button>
      <button className="next-button" onClick={handleNextSlide} disabled={slideIndex === props.cards.length-3}>
        Next
      </button>
    </div>
  );
};

export default GeneralMultipleSlider;
