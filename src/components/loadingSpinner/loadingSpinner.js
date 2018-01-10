import React from 'react';
import "./LoadingSpinner.scss";

const LoadingSpinner = () => (
  <div className="pe-loadingSpinner">
    <div className="pe-loadingSpinner-container pe-loadingSpinner-container1">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
    </div>
    <div className="pe-loadingSpinner-container pe-loadingSpinner-container2">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
    </div>
  </div>
);

export default LoadingSpinner;
