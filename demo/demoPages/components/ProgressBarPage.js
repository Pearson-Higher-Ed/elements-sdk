import React, { Component } from 'react';
import { ProgressBar } from '../../../index';

const initialState = {
  progress: 0
};

export default class ProgressBarPage extends Component {

  state = initialState;

  componentWillMount() {
    this.simulateProgress();
  }

  simulateProgress() {
    setTimeout(() => {
      if (this.state.progress < 100) {
        this.increaseProgress();
      } else {
        this.setState(initialState);
      }
      this.simulateProgress();
    }, (Math.random() * 1 + 1) * 1000);
  }

  increaseProgress() {
    this.setState({
      progress: Math.random() * 30 + this.state.progress
    });
  }

  render() {
    return (
      <div className="displaySection">
        <h2><a href="http://pearson-higher-ed.github.io/design/c/progress-bar/">ProgressBar</a></h2>
        <div className="elementContainer">
          <div className="code">
            <h3>Props</h3>
            <h4>Required:</h4>
            <ul>
              <li className="li-props">id:String - (`a11y`) id that is used for the element representing the progress bar and the label associated with it.</li>
            </ul>
            <h4>Optional:</h4>
            <ul>
              <li className="li-props">min:Number - Set a min value for the ProgressBar.  Defaults to 0.</li>
              <li className="li-props">max:Number - Set a max value for the ProgressBar.  Defaults to 100.</li>
              <li className="li-props">value:Number - Set the value of the ProgressBar.  Defaults to 0.</li>
              <li className="li-props">type:String -  The ProgressBar has a `default` and `animated` type.  Defaults to `default`</li>
              <li className="li-props">alignLabel:String - alignLabel can be `left`, `center`, or `right` moving the text above the ProgessBar
              <br/> to one of those positions. Defaults to `center`.</li>
              <li className="li-props">labelText:String</li>
            </ul>
          </div>
          <h3 style={{marginTop: 4}}>Example Usage</h3>
          <h4>Default</h4>
          <p className="code" style={{width: '80%'}}>
          {`<ProgressBar id="pe-pb" value={30} alignLabel="left" labelText="%" />`}
          </p>
          <ProgressBar id="pe-pb" value={30} alignLabel="left" labelText="%" />

          <h4>Animated</h4>
          <p className="code" style={{width: '80%'}}>
            {`<ProgressBar id="pe-pb1" type="animated" labelText="% complete" value={this.state.progress} />`}
          </p>
          <ProgressBar id="pe-pb1" type="animated" labelText="% complete" value={this.state.progress} />
        </div>
      </div>
    );
  }
};
