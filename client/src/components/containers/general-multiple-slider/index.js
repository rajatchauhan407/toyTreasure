import React, { useState } from 'react';

const GeneralMultipleSlider = ({cards}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  // Assuming you have an array of card data
  

  const handlePrevSlide = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleNextSlide = () => {
    setSlideIndex(slideIndex + 1);
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {cards.map((card, index) => (
          <div key={index} {...card}>
            {card}
          </div>
        ))}
      </div>
      <button onClick={handlePrevSlide}>Prev</button>
      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
};

export default GeneralMultipleSlider;
