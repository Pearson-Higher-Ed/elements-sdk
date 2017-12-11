import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Footer } from '../index';

describe('Footer', () => {
  const moreLinks = [{ text: 'One', href: 'one'}, { text: 'Two', href: 'two'}];

  describe('Footer tests', function () {
    beforeEach(function () {
      const testLinks = [{ text: 'First', href: 'first'}, { text: 'Second', href: 'second'}];
      this.wrapper = shallow(<Footer links={testLinks} copyrightText="CR text"  />);
    });

    it('should render the Footer', function () {
      expect(this.wrapper.node.type).toEqual('footer');
    });

    it('correctly passes the light prop', function () {
      const lightProp = shallow(<Footer links={moreLinks} light />);
      expect(this.wrapper.instance().props.light).toEqual(false);
      expect(lightProp.instance().props.light).toEqual(true);
    });

    it('correctly assigns the stick class ', function() {
      const stickProp = shallow(<Footer links={moreLinks} singlePageStick />);
      expect(stickProp.find('footer').hasClass('pe-footer--stick')).toEqual(true);
    });

  });
});
