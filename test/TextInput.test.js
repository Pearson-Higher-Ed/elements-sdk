import React         from 'react';
import enzyme        from 'enzyme';
import { TextInput } from '../index';

const { shallow , mount} = enzyme;


describe('Basic TextInput Test', function() {

    it('should render the TextInput as div element', function() {
      const wrapper = shallow(<TextInput id="textInputTestId1" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} />);
      expect(wrapper.getElement(0).type).toEqual('div');
    });


    it('should apply correct style for error type', function(){
      const wrapper = shallow(<TextInput id="textInputTestId2" labelText="TextInput Label:"  changeHandler={() => {}} inputState='error' />);
      wrapper.instance().applyTextInputStyles();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for disabled type', function(){
      const wrapper = shallow(<TextInput id="textInputTestId3" labelText="TextInput Label:"  changeHandler={() => {}} inputState='disabled' />);
      wrapper.instance().applyTextInputStyles();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for readOnly type', function(){
      const wrapper = shallow(<TextInput id="textInputTestId4" labelText="TextInput Label:"  changeHandler={() => {}} inputState='readOnly' />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      const wrapper = shallow(<TextInput id="textInputTestId5" labelText="TextInput Label:"  changeHandler={() => {}} />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      const wrapper = shallow(<TextInput id="textInputTestId6" labelText="TextInput Label:"  changeHandler={() => {}} />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

    it('should have aria-describedby match any messages', function(){
      const wrapper = shallow(<TextInput id="textInputTestId7" labelText="TextInput Label:"  changeHandler={() => {}} infoMessage="This is an info message" />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('input').getElement(0).props['aria-describedby']).toEqual('infoMsg-textInputTestId7')
    });

    it('should have aria-describedby match any errors', function(){
      const wrapper = shallow(<TextInput id="textInputTestId8" labelText="TextInput Label:"  inputState='error' changeHandler={() => {}} errorMessage="This is an error!" />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('input').getElement(0).props['aria-describedby']).toEqual('errMsg-textInputTestId8 ')
    });

    it('should render password', function(){
      const wrapper = shallow(<TextInput password={true} id="pwInputTestId1" labelText="Password Label:" changeHandler={() => {}} />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('input').getElement(0).props.type).toEqual('password')
    });

    it('should render "not visible" message for screen readers', function(){
      const wrapper = shallow(<TextInput password={true} id="pwInputTestId2" labelText="Password Label:" changeHandler={() => {}} isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('.pe-sr-only').text()).toEqual('Password is hidden')
    });

    it('should toggle password', function(){
      const wrapper = mount(<TextInput password={true} id="pwInputTestId3" labelText="Password Label:" changeHandler={() => {}} />);
      wrapper.instance().componentDidMount();
      wrapper.instance().togglePassword();
      wrapper.update();
      expect(wrapper.find('input').getElement(0).props.type).toEqual('text')
    });

    it('should toggle "visible" message for screen readers', function(){
      const wrapper = shallow(<TextInput password={true} id="pwInputTestId4" labelText="Password Label:" changeHandler={() => {}} isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />);
      wrapper.instance().componentDidMount();
      wrapper.instance().togglePassword();
      wrapper.instance().togglePassword();
      wrapper.update();
      expect(wrapper.find('.pe-sr-only').text()).toEqual('Password is visible')
    });

})
