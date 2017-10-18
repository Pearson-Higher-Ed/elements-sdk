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
      this.progress.setAttribute('value', newValue)
      this.span.textContent = parseInt(newValue)
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
            className={type === 'animated' ? 'pe-progress-bar-animated' : 'pe-progress-bar'}
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

// var LongNameSpacedPearsonTestObject=PO={
//
//             init: function() {
//                 var i=0,
//                     j=0,
//                     button=document.getElementsByTagName('button')[0],
//                     progress_bar=document.getElementById('pb'),
//                     progress_span=progress_bar.getElementsByTagName('SPAN')[0];
//
//                 button.onclick=function() {
//                     // Suzanne:
//                     // you need to put focus on the progressbar
//                     // for this to work with VoiceOver as of 11/9/2014
//
//                     // Mallory:
//                     // test, can we put focus there just once at the beginning?
//                     progress_bar.focus();
//                     PO.animate(i,j,progress_bar,progress_span);
//                 };
//             },
//
//             animate: function(i,j,progress_bar,progress_span) {
//                 var current_frame=requestAnimationFrame(function() {
//                     PO.animate(i,j,progress_bar,progress_span);
//                 });
//
//                 j++;
//                 if(j%5==0){i++};
//
//                 Basis.setAttributes(progress_bar, {
//                     'aria-valuenow': i,
//                     'aria-valuetext': i+'%'
//                 });
//                 progress_bar.value = i;
//                 progress_span.textContent = i+'%';
//
//                 if (i>99) {
//                   cancelAnimationFrame(current_frame);
//                   i=0;
//                 }
//             }
//         };
//         Basis.start(PO.init);
