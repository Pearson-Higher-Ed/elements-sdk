import React               from 'react';
import enzyme              from 'enzyme';
import { RadioCheckGroup } from '../index';

const { shallow } = enzyme;

describe('RadioCheckGroup', () => {

  describe('Basic RadioCheckGroup Test', function() {

    it('should render the RadioCheckGroup as div element', function() {
      const wrapper = shallow(<RadioCheckGroup  id="multiTestId" labelText="Multi Label:" legendText="legend"  changeHandler={() => {}} inputType='radio' options={[{value: 0, label: 'coffee', checked: true}, {value: 1, label: 'tea'}, {value: 2, label: 'hot cocoa', disabled: true}]} showText="show" hideText="hide" />);
      expect(wrapper.getElement(0).type).toEqual('fieldset');
    });

  })
})
