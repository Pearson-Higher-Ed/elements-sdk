import React               from 'react';
import expect              from 'expect';
import { shallow }         from 'enzyme';
import { RadioCheckGroup } from '../index';

describe('RadioCheckGroup', () => {

  describe('Basic RadioCheckGroup Test', function() {

    it('should render the RadioCheckGroup as div element', function() {
      this.wrapper = shallow(<RadioCheckGroup  id="multiTestId" labelText="Multi Label:" legendText="legend"  changeHandler={() => {}} inputType='radio' options={[{value: 0, label: 'coffee', checked: true}, {value: 1, label: 'tea'}, {value: 2, label: 'hot cocoa', disabled: true}]} showText="show" hideText="hide" />);
      expect(this.wrapper.getElement().type).toEqual('fieldset');
    });

  })
})
