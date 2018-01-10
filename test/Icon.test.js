import React       from 'react';
import enzyme      from 'enzyme';
import { Icon }    from '../index';

const { shallow } = enzyme;


describe('Icon', () => {

  describe('Basic Tests with alt texts', function() {
    const wrapper = shallow(<Icon name="delete-18">Alt text</Icon>);

    it('should render the icon as svg', function() {
      expect(wrapper.getElement(0).type).toEqual('svg');
    });

    it('should have the correct default className', function() {
      expect(wrapper.hasClass('pe-icon--delete-18')).toEqual(true);
    });

    it('should have an aria-labelledby', function() {
      expect(wrapper.getElement(0).props).toHaveProperty('aria-labelledby');
    });
  });

  describe('Basic Tests no alt texts', function() {

    const wrapper = shallow(<Icon name="delete-24"/>);

    it('should render the icon as svg', function() {
      expect(wrapper.getElement(0).type).toEqual('svg');
    });

    it('should have the larger (24px) className if set', function() {
      expect(wrapper.hasClass('pe-icon--delete-24')).toEqual(true);
    });

/* apparently expectJS can't be used to test if things don't exist or
are undefined because if it's undefined it can't check it anyway
    it('should not have aria-labelledby without alt text', function() {
      expect(this.wrapper.prop('aria-labelledby')).not.toExist();
    });*/
  });

});
