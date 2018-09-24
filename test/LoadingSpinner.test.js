import React         from 'react';
import expect        from 'expect';
import { shallow }   from 'enzyme';
import { LoadingSpinner } from '../index';

describe('LoadingSpinner', () => {

  describe('Basic LoadingSpinner Test', function() {

    it('should render the LoadinSpinner as a div element', function() {
      const wrapper = shallow(<LoadingSpinner />);
      expect(wrapper.getElement().type).toEqual('div');
    });
  });
});
