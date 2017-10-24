import React, { Component } from 'react';
import { ProgressBar } from '../../../index';

export default class ProgressBarPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{padding: 12}}>
      <ProgressBar value={35} labelText="% complete" />
      <br/>
      <br/>
      <ProgressBar type="animated" labelText="% complete" value={20} />
      </div>
    );
  }
};
