// ComplexLegoLoader.js

import React from 'react';
import './index.scss'; // You can create a CSS file for styling the loader

const LegoLoader = () => {
  return (
    <div className="complex-lego-loader">
      <div className="lego-block red"></div>
      <div className="lego-block yellow"></div>
      <div className="lego-block blue"></div>
      <div className="lego-block green"></div>
    </div>
  );
};

export default LegoLoader;
