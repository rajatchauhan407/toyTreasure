// NoInternetComponent.js
import "./index.scss";
import React from 'react';
import logo from "./appLogo.svg"
import nowifi from "./no-wifi.png"

const NoInternetComponent = () => {
  return (
    <div className="noConnectionContainer">     
        <img className="site-logo-no-connection" src={logo} alt={"siteLogo"}/>
        <div className='noConnection'>             
            <img className="noWifi" src={nowifi} alt={"nowifi"}/>
            <h3>No internet connection. Please check your network settings.</h3>           
        </div>      
    </div>
  );
};

export default NoInternetComponent;
