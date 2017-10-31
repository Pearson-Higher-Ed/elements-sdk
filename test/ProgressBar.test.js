import React       from 'react';
import expect      from 'expect';
import { shallow } from 'enzyme';
import { ProgressBar } from '../index';

describe('ProgressBar', () => {

  it('Should render the ProgressBar', function () {
    this.wrapper = shallow(<ProgressBar />);
    expect(this.wrapper.node.type).toEqual('div');
  });

  it('Calculates the correct ratio', function () {
    const pBar = new ProgressBar({max: 200, value: 50, min: 0 });
    const valueCheck = pBar.calculateRatio();

    expect(valueCheck).toEqual(25);
  });
});
