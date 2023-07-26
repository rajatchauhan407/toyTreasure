// ToyLoader.js

import React from 'react';
import './index.scss'; // You can create a CSS file for styling the loader

const ToyLoader = () => {
  return (
    <div className="toy-loader">
      <div className="toy-car-container">
        <div className="toy-car"></div>
        <div className="toy-car"></div>
        <div className="toy-car"></div>
      </div>
      <div className="toy-ball"></div>
    </div>
  );
};

export default ToyLoader;
