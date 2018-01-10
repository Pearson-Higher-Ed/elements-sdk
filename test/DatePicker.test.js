import React          from 'react';
import enzyme         from 'enzyme';
import { DatePicker } from '../index';

const { mount, shallow } = enzyme;


describe('DatePicker', () => {

    it('should render the DatePicker as div element', function() {
      const wrapper = shallow(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} />);
      expect(wrapper.getElement(0).type).toEqual('div');
    });

    it('should render the DatePicker in error state', function() {
      const wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='error' />);
      expect(wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic_error');
    });

    it('should render the DatePicker in default state', function() {
      const wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} />);
      expect(wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should render the DatePicker in readOnly state', function() {
      const wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='readOnly' />);
      expect(wrapper.instance().state.inputStyle).toEqual('pe-textInput--input_readonly');
    });

    it('should render the DatePicker in disabled state', function() {
      const wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='disabled' />);
      expect(wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should check classes on the main container', function() {
      const wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='errorInput' className="hithere" inputState='error' errorMessage='error message' />);
      expect(wrapper.find('.hithere').exists()).toEqual(true);
    });

    it('should check inputState error message', function() {
      const wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='errorInput' inputState='error' errorMessage='error message' />);
      expect(wrapper.find('.pe-input--error_message').exists()).toEqual(true);
    });

    it('should check info message', function() {
      const wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='infoInput' infoMessage='info message' />);
      expect(wrapper.find('.pe-input--info_message').exists()).toEqual(true);
    });

    it('should call the changehandler', function() {
      const wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} time changeHandler={() => {}} />);
      wrapper.find('input').simulate('click');
      const e = {"target":{"value":"Hi There"}};
      wrapper.instance().changeHandler(e);
      expect(wrapper.instance().state.datepickerValue).toEqual("Hi There");
    });

})
