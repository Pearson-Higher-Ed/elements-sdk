import jsdom from 'jsdom';
import React     from 'react';
import expect    from 'expect';

import { mount, shallow } from 'enzyme';

import { DatePicker } from '../index';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('DatePicker', () => {

  describe('Basic DatePicker Test', function() {

    it('should render the DatePicker as div element', function() {
      this.wrapper = shallow(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} />);
      expect(this.wrapper.getElement().type).toEqual('div');
    });

    it('should render the DatePicker in error state', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='error' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic_error');
    });

    it('should render the DatePicker in default state', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should render the DatePicker in readOnly state', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='readOnly' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--input_readonly');
    });

    it('should render the DatePicker in disabled state', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='disabled' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should check classes on the main container', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='errorInput' className="hithere" inputState='error' errorMessage='error message' />);
      expect(this.wrapper.find('.hithere').exists()).toEqual(true);
    });

    it('should check inputState error message', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='errorInput' inputState='error' errorMessage='error message' />);
      expect(this.wrapper.find('.pe-input--error_message').exists()).toEqual(true);
    });

    it('should check info message', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='infoInput' infoMessage='info message' />);
      expect(this.wrapper.find('.pe-input--info_message').exists()).toEqual(true);
    });

    it('should call the changehandler', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} time changeHandler={() => {}} />);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"value":"Hi There"}};
      this.wrapper.instance().changeHandler(e);
      expect(this.wrapper.instance().state.datepickerValue).toEqual("Hi There");
    });
  });
})
