import React             from 'react';
import expect            from 'expect';
import { shallow }       from 'enzyme';
import { MultiLineText } from '../index';

describe('MultiLineText', () => {

  describe('Basic MultiLineText Test', function() {

    it('should render the MultiLineText as div element', function() {
      this.wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" />);
      expect(this.wrapper.getElement().type).toEqual('div');
    });

    it('should apply correct style for error type', function(){
      this.wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" inputState='error' />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for readOnly type', function(){
      this.wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" inputState='readOnly' />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      this.wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      this.wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

  })
})
