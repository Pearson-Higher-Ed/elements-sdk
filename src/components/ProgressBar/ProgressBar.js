import React from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.scss';

const ProgressBar = ({ min, max, type, alignLabel, labelText, id, value, valueText}) => {

  const calculateRatio = () => {
    if (value < min) return min;
    if (value > max) return max;
    return Math.round((value - min) / (max - min) * 100);
  };

  return (
    <div className={`progress-bar-container progress-bar-text-${alignLabel}`}>
      <label className="pe-label" htmlFor={id}>
        {calculateRatio()}{labelText}
      </label>
      <span className="pe-progress-bar-rail">
        <div
          id={id}
          className={type === 'animated' ? 'pe-progress-bar pb-animated' : 'pe-progress-bar'}
          tabIndex="-1"
          role="progressbar"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={calculateRatio()}
          aria-valuetext={valueText}
          style={{width: `${calculateRatio()}%`}}
        />
      </span>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  type: PropTypes.oneOf(['default', 'animated']),
  alignLabel: PropTypes.oneOf(['left', 'center', 'right']),
  labelText: PropTypes.string,
  valueText: PropTypes.string,
  id: PropTypes.string.isRequired
};

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  type: 'default',
  alignLabel: 'center'
};
