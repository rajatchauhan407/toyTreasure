import React, { useState } from 'react';
import './index.scss';
import arrowLeft from './arrow_left.png';
import arrowRight from './arrow_right.png';

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
      <div className="tt-71-slider" style={{ transform:`translateX(-${slideIndex * 100}%)` }}>
        {props.cards.map((el)=>{
          return el;
        })}
        {/* Add more card components if needed */}
      </div>
      <button className="tt-71-prev-button" onClick={handlePrevSlide} disabled={slideIndex === 0}>
          <img src={arrowLeft} alt="arrow-left"/>
      </button>
      <button className="tt-71-next-button" onClick={handleNextSlide} disabled={slideIndex === props.cards.length-3}>
          <img src={arrowRight} alt="arrow-right"/>
      </button>
    </div>
  );
};

export default GeneralMultipleSlider;
