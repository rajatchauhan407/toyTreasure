import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

const MultipleSlider = ({cards}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      }
      
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {cards.map((el)=>{
          return el;
        })}
      </Slider>
    </div>
  );
};

export default MultipleSlider;
