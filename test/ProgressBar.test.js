import React       from 'react';
import expect      from 'expect';
import { shallow } from 'enzyme';
import { ProgressBar } from '../index';

describe('ProgressBar', () => {

  it('Should render the ProgressBar', function () {
    this.wrapper = shallow(<ProgressBar id="test" />);
    expect(this.wrapper.getElement().type).toEqual('div');
  });
});
