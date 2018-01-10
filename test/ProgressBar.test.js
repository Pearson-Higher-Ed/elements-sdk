import React           from 'react';
import enzyme          from 'enzyme';
import { ProgressBar } from '../index';

const { shallow } = enzyme;


describe('ProgressBar', () => {

  it('Should render the ProgressBar', function () {
    const wrapper = shallow(<ProgressBar id="test" />);
    expect(wrapper.getElement(0).type).toEqual('div');
  });
});
