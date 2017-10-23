import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.scss';

export default class ProgressBar extends Component {
  static propTypes = {
    max: PropTypes.number,
    value: PropTypes.number,
    type: PropTypes.oneOf(['default', 'animated']),
    alignLabel: PropTypes.oneOf(['left', 'center', 'right']),
    labelText: PropTypes.string
  };

  static defaultProps = {
    max: 100,
    value: 0,
    type: 'default',
    alignLabel: 'center'
  };

  animate = () => {
    window.setInterval(() => {
      let value = parseFloat(this.progress.getAttribute('value'));
      let newValue = value + 0.3;
      if (newValue > this.props.max) newValue = 0;
      this.progress.setAttribute('value', newValue);
      this.span.textContent = parseInt(newValue);
    }, 30)
  }

  render() {
    const { max, value, type, alignLabel, labelText } = this.props;

    return (
      <div>
        <div className={`progress-bar-text-${alignLabel}`}>
          <p className="pe-label">
            <span ref={span => this.span = span}>
              {value}</span>{labelText}
          </p>
          <progress
            className={type === 'animated' ? 'pe-progress-bar pb-animated' : 'pe-progress-bar'}
            role="progressbar"
            aria-valuemax={max}
            aria-valuenow={value}
            aria-valuetext={`${value}%`}
            max={max}
            value={value}
            ref={progress => this.progress = progress}
          />
        </div>
        <button onClick={this.animate}>
          Click it!
        </button>
      </div>
    )
  }
}
