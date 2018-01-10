import React from 'react';
import enzyme from 'enzyme';
import { StaticAlert } from '../index';

const { shallow, mount } = enzyme;

  describe('StaticAlert tests', function () {
    const wrapper = shallow(<StaticAlert type="Success" title="Woo!" message="Successful message" />);

    it('correctly passes the type prop', function() {
      expect(wrapper.find('p').text()).toEqual('Successful message');
    });
    it('correctly passes the title prop', function() {
      expect(wrapper.find('strong').text()).toBe('Woo!');
    });

    it('toggles state when close button is clicked', function() {
      const wrapper = mount(<StaticAlert type="Error" title="Test title" message="Test message" />);
      expect(wrapper.instance().state.isOpen).toEqual(true);

      wrapper.find('.close-title').simulate('click');
      wrapper.update();
      expect(wrapper.instance().state.isOpen).toEqual(false);
    });

});
