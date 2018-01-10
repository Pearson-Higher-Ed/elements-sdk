import React      from 'react';
import enzyme     from 'enzyme';
import { Footer } from '../index';

const { shallow } = enzyme;

describe('Footer', () => {
  const moreLinks = [{ text: 'One', href: 'one'}, { text: 'Two', href: 'two'}];
  const testLinks = [{ text: 'First', href: 'first'}, { text: 'Second', href: 'second'}];
  const wrapper = shallow(<Footer links={testLinks} copyrightText="CR text"  />);

  describe('Footer tests', function () {

    it('should render the Footer', function () {
      expect(wrapper.getElement(0).type).toEqual('footer');
    });

    it('correctly passes the light prop', function () {
      const lightProp = shallow(<Footer links={moreLinks} light />);
      expect(lightProp.hasClass('pe-footer pe-label pe-footer--light')).toEqual(true);
    });

    it('correctly assigns the stick class ', function() {
      const stickProp = shallow(<Footer links={moreLinks} singlePageStick />);
      expect(stickProp.find('footer').hasClass('pe-footer--stick')).toEqual(true);
    });

  });
});
