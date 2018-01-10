import React          from 'react';
import enzyme         from 'enzyme';
import { TimePicker } from '../index';

const { mount, shallow } = enzyme;


describe('TimePicker', () => {

  describe('Basic TimePicker Test', function() {

    it('should render the TimePicker as div element', function() {
      const wrapper = shallow(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} />);
      expect(wrapper.getElement(0).type).toEqual('div');
    });

    it('should render the TimePicker in error state', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} inputState='error' />);
      expect(wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic_error');
    });

    it('should render the TimePicker in default state', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} />);
      expect(wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should render the TimePicker in readOnly state', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} inputState='readOnly' />);
      expect(wrapper.instance().state.inputStyle).toEqual('pe-textInput--input_readonly');
    });

    it('should render the TimePicker in disabled state', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} inputState='disabled' />);
      expect(wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should handle the timelist', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}}/>);
      wrapper.find('input').simulate('click');
      const e = {"target":{"innerText":"HI THERE"}};
      wrapper.instance().listHandler(e);
      expect(wrapper.instance().state.timepickerValue).toEqual("HI THERE");
    });

    it('should handle the inputKeyEvents esc key', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} time/>);
      wrapper.find('input').simulate('click');
      const e = {"which":27};
      wrapper.instance().inputEvents(e);
      wrapper.update();
      expect(wrapper.find('ul').exists()).toEqual(false);
    });

    it('should handle the inputKeyEvents tab key', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} time/>);
      wrapper.find('input').simulate('click');
      const e = {"which":9, preventDefault:() => {}};
      wrapper.instance().inputEvents(e);
      wrapper.update();
      expect(wrapper.find('ul').exists()).toEqual(false);
    });

    it('should close the dropdown with enter key', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} time/>);
      wrapper.find('input').simulate('click');
      const e = {"target":{"innerText":"Hi there"},"which":13};
      wrapper.instance().inputEvents(e);
      wrapper.update();
      expect(wrapper.find('ul').exists()).toEqual(false);
    });

    it('should check classes on the main container', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} id='errorInput' className="hithere" inputState='error' errorMessage='error message' />);
      expect(wrapper.find('.hithere').exists()).toEqual(true);
    });

    it('should check inputState error message', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} id='errorInput' inputState='error' errorMessage='error message' />);
      expect(wrapper.find('.pe-input--error_message').exists()).toEqual(true);
    });

    it('should check info message', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} id='infoInput' infoMessage='info message' />);
      expect(wrapper.find('.pe-input--info_message').exists()).toEqual(true);
    });

    it('should handle the inputKeyEvents default case', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} />);
      wrapper.find('input').simulate('click');
      const e = {"which":1000};
      wrapper.instance().inputEvents(e);
      expect(wrapper.find('ul').exists()).toEqual(true);
    });

    it('should call the changehandler', function() {
      const wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}}/>);
      wrapper.find('input').simulate('click');
      const e = {"target":{"value":"Hi There"}};
      wrapper.instance().changeHandler(e);
      expect(wrapper.instance().state.timepickerValue).toEqual("Hi There");
    });

  })
})
