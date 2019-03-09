import React         from 'react';
import expect        from 'expect';
import { shallow , mount}   from 'enzyme';
import { TextInput } from '../index';

describe('TextInput', () => {

  describe('Basic TextInput Test', function() {

    it('should render the TextInput as div element', function() {
      this.wrapper = shallow(<TextInput id="textInputTestId1" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} />);
      expect(this.wrapper.getElement().type).toEqual('div');
    });


    it('should apply correct style for error type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId2" labelText="TextInput Label:"  changeHandler={() => {}} inputState='error' />);
      this.wrapper.instance().applyTextInputStyles();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for disabled type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId3" labelText="TextInput Label:"  changeHandler={() => {}} inputState='disabled' />);
      this.wrapper.instance().applyTextInputStyles();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for readOnly type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId4" labelText="TextInput Label:"  changeHandler={() => {}} inputState='readOnly' />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId5" labelText="TextInput Label:"  changeHandler={() => {}} />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId6" labelText="TextInput Label:"  changeHandler={() => {}} />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

    it('should have aria-describedby match any messages', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId7" labelText="TextInput Label:"  changeHandler={() => {}} infoMessage="This is an info message" />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('input').getElement().props['aria-describedby']).toEqual('infoMsg-textInputTestId7')
    });

    it('should have aria-describedby match any errors', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId8" labelText="TextInput Label:"  inputState='error' changeHandler={() => {}} errorMessage="This is an error!" />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('input').getElement().props['aria-describedby']).toEqual('errMsg-textInputTestId8 ')
    });

    it('should render password', function(){
      this.wrapper = shallow(<TextInput password={true} id="pwInputTestId1" labelText="Password Label:" changeHandler={() => {}} />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('input').getElement().props.type).toEqual('password')
    });

    it('should render "not visible" message for screen readers', function(){
      this.wrapper = shallow(<TextInput password={true} id="pwInputTestId2" labelText="Password Label:" changeHandler={() => {}} isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('.pe-sr-only').text()).toEqual('Password is hidden')
    });

    it('should toggle password', function(){
      this.wrapper = shallow(<TextInput password={true} id="pwInputTestId3" labelText="Password Label:" changeHandler={() => {}} />);
      this.wrapper.instance().componentDidMount();
      this.wrapper.instance().togglePassword();
      this.wrapper.update();
      expect(this.wrapper.find('input').getElement().props.type).toEqual('text')
    });

    it('should toggle "visible" message for screen readers', function(){
      this.wrapper = shallow(<TextInput password={true} id="pwInputTestId4" labelText="Password Label:" changeHandler={() => {}} isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />);
      this.wrapper.instance().componentDidMount();
      this.wrapper.instance().togglePassword();
      this.wrapper.instance().togglePassword();
      this.wrapper.update();
      expect(this.wrapper.find('.pe-sr-only').text()).toEqual('Password is visible')
    });

  })
})
