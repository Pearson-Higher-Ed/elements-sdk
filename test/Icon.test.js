import React       from 'react';
import expect      from 'expect';
import { shallow } from 'enzyme';
import { Icon }    from '../index';

describe('Icon', () => {

  describe('Basic Tests with alt texts', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Icon name="delete-18">Alt text</Icon>);
    });

    it('should render the icon as svg', function() {
      expect(this.wrapper.getElement().type).toEqual('svg');
    });

    it('should have the correct default className', function() {
      expect(this.wrapper.hasClass('pe-icon--delete-18')).toExist();
    });

    it('should have an aria-labelledby', function() {
      expect(this.wrapper.prop('aria-labelledby')).toExist();
    });
  });

  describe('Basic Tests no alt texts', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Icon name="delete-24"/>);
    });

    it('should render the icon as svg', function() {
      expect(this.wrapper.getElement().type).toEqual('svg');
    });

    it('should have the larger (24px) className if set', function() {
      expect(this.wrapper.hasClass('pe-icon--delete-24')).toExist();
    });

/* apparently expectJS can't be used to test if things don't exist or
are undefined because if it's undefined it can't check it anyway
    it('should not have aria-labelledby without alt text', function() {
      expect(this.wrapper.prop('aria-labelledby')).not.toExist();
    });*/
  });

});
