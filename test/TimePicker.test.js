import jsdom from 'jsdom';
import React     from 'react';
import expect    from 'expect';

import { mount, shallow } from 'enzyme';

import { TimePicker } from '../index';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('TimePicker', () => {

  describe('Basic TimePicker Test', function() {

    it('should render the TimePicker as div element', function() {
      this.wrapper = shallow(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} />);
      expect(this.wrapper.getElement().type).toEqual('div');
    });

    it('should render the TimePicker in error state', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} inputState='error' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic_error');
    });

    it('should render the TimePicker in default state', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should render the TimePicker in readOnly state', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} inputState='readOnly' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--input_readonly');
    });

    it('should render the TimePicker in disabled state', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} inputState='disabled' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    // it('should handle the calendar', function() {
    //   this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} />);
    //   this.wrapper.find('input').simulate('click');
    //   const date ='Thu May 04 2017 00:00:00 GMT-0600 (MDT)';
    //   const testdate = new Date();
    //   this.wrapper.instance().calendarHandler(date);
    //   expect(this.wrapper.instance().state.datepickerValue).toEqual(moment(testdate).format('L'));
    // });

    it('should handle the timelist', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}}/>);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"innerText":"HI THERE"}};
      this.wrapper.instance().listHandler(e);
      expect(this.wrapper.instance().state.timepickerValue).toEqual("HI THERE");
    });

    it('should handle the inputKeyEvents esc key', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} time/>);
      this.wrapper.find('input').simulate('click');
      const e = {"which":27};
      this.wrapper.instance().inputEvents(e);
      this.wrapper.update();
      expect(this.wrapper.find('ul').exists()).toEqual(false);
    });

    it('should handle the inputKeyEvents tab key', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} time/>);
      this.wrapper.find('input').simulate('click');
      const e = {"which":9, preventDefault:() => {}};
      this.wrapper.instance().inputEvents(e);
      this.wrapper.update();
      expect(this.wrapper.find('ul').exists()).toEqual(false);
    });

    it('should close the dropdown with enter key', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} time/>);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"innerText":"Hi there"},"which":13, preventDefault:() => {}};
      this.wrapper.instance().inputEvents(e);
      this.wrapper.update();
      expect(this.wrapper.find('ul').exists()).toEqual(false);
    });

    it('should check classes on the main container', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} id='errorInput' className="hithere" inputState='error' errorMessage='error message' />);
      expect(this.wrapper.find('.hithere').exists()).toEqual(true);
    });

    it('should check inputState error message', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} id='errorInput' inputState='error' errorMessage='error message' />);
      expect(this.wrapper.find('.pe-input--error_message').exists()).toEqual(true);
    });

    it('should check info message', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} id='infoInput' infoMessage='info message' />);
      expect(this.wrapper.find('.pe-input--info_message').exists()).toEqual(true);
    });

    it('should handle the inputKeyEvents default case', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}} />);
      this.wrapper.find('input').simulate('click');
      const e = {"which":1000};
      this.wrapper.instance().inputEvents(e);
      expect(this.wrapper.find('ul').exists()).toEqual(true);
    });

    it('should call the changehandler', function() {
      this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}}/>);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"value":"Hi There"}};
      this.wrapper.instance().changeHandler(e);
      expect(this.wrapper.instance().state.timepickerValue).toEqual("Hi There");
    });

    // it('should handle the inputKeyEvents down key', function() {
    //   this.wrapper = mount(<TimePicker id="test" labelText="test" timeFormat="hh:mm" changeHandler={() => {}}/>);
    //   this.wrapper.find('input').simulate('click');
    //   const e = {"target":{"innerText":"Hi There"},"which":40, preventDefault:() => {}};
    //   this.wrapper.instance().inputEvents(e);
    //   console.log(this.wrapper.find('ul').exists())
    //   expect(this.wrapper.find('ul').exists()).toEqual(true);
    // });

  })
})
