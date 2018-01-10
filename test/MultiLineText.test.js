import React             from 'react';
import enzyme            from 'enzyme';
import { MultiLineText } from '../index';

const { shallow } = enzyme;


describe('MultiLineText', () => {

  describe('Basic MultiLineText Test', function() {

    it('should render the MultiLineText as div element', function() {
      const wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" />);
      expect(wrapper.getElement(0).type).toEqual('div');
    });

    it('should apply correct style for error type', function(){
      const wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" inputState='error' />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for readOnly type', function(){
      const wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" inputState='readOnly' />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      const wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      const wrapper = shallow(<MultiLineText id="multiTestId" labelText="Multi Label:" placeholder="place" changeHandler={() => {}}  showText="show" hideText="hide" />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

  })
})
