import React           from 'react';
import enzyme          from 'enzyme';
import { PhoneNumber } from '../index';

const { shallow } = enzyme;


describe('PhoneNumber', () => {

  describe('Basic PhoneNumber Test', function() {

    it('should render the PhoneNumber as a div element', function() {
      const wrapper = shallow(
        <PhoneNumber
          country="US"
          placeholder="555-555-5555"
          labelText="Mobile phone"
          onChange={(num) => console.log(num)}
        />
      );
      expect(wrapper.getElement(0).type).toEqual('div');
    });

    it('should render the PhoneNumber in an error state', function() {
      const wrapper = shallow(
        <PhoneNumber
          country="US"
          placeholder="555-555-5555"
          labelText="Mobile phone"
          onChange={(num) => console.log(num)}
          errorMessage={"Error"}
        />
      );
      expect(wrapper.getElement(0).props.children[1].props.inputClassName).toEqual('react-phone-number-input__phone--error');
    });
  });
});
