import React from 'react';
import { ProgressBar } from '../../../index';

const ProgressBarPage = () => (
  <div style={{padding: 12}}>
    <ProgressBar value={25} labelText="% complete" />
    <ProgressBar type="animated" labelText="% complete" value={20} />
  </div>
);

export default ProgressBarPage;
