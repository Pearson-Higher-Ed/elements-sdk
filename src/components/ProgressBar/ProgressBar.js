import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.scss';

export default class ProgressBar extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    type: PropTypes.oneOf(['default', 'animated']),
    alignLabel: PropTypes.oneOf(['left', 'center', 'right']),
    labelText: PropTypes.string
  };

  static defaultProps = {
    min: 0,
    max: 100,
    value: 0,
    type: 'default',
    alignLabel: 'center'
  };

  render() {
    const { min, max, value, type, alignLabel, labelText } = this.props;

    return (
      <div className="progress-bar-container">
        <p className={`pe-label progress-bar-text-${alignLabel}`}>
          {value} {labelText}
        </p>
        <div
          className={type === 'animated' ? 'pe-progress-bar pb-animated' : 'pe-progress-bar'}
          role="progressbar"
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={`${value}%`}
          max={max}
          value={value}
          style={{width: `${value}%`}}
        >
          <span className="pe-progress-bar-rail" />
        </div>
      </div>
    )
  }
}
