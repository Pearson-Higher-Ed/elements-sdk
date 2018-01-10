import React              from 'react';
import enzyme             from 'enzyme';
import { LoadingSpinner } from '../index';

const { shallow } = enzyme;


describe('LoadingSpinner', () => {

  describe('Basic LoadingSpinner Test', function() {

    it('should render the LoadinSpinner as a div element', function() {
      const wrapper = shallow(<LoadingSpinner />);
      expect(wrapper.getElement(0).type).toEqual('div');
    });
  });
});
