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

  calculateRatio() {
    if (this.props.value < this.props.min) return this.props.min;
    if (this.props.value > this.props.max) return this.props.max;
    return Math.round((this.props.value - this.props.min) / (this.props.max - this.props.min) * 100);
  }

  render() {
    const { min, max, value, type, alignLabel, labelText } = this.props;

    return (
      <div className={`progress-bar-container progress-bar-text-${alignLabel}`}>
        <label className="pe-label" htmlFor="pe-pb">
          {this.calculateRatio()}{labelText}
        </label>
        <span className="pe-progress-bar-rail">
          <div
            id="pe-pb"
            className={type === 'animated' ? 'pe-progress-bar pb-animated' : 'pe-progress-bar'}
            role="progressbar"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={this.calculateRatio()}
            style={{width: `${this.calculateRatio()}%`}}
          />
        </span>
      </div>
    )
  }
}
