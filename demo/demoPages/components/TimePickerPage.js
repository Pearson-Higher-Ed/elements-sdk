import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../../translations/defaultMessages';

import { TimePicker, Select } from '../../../index';


class TimePickerPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      timepickerValue1 : null,
      timepickerValue2 : null,
      timepickerValue3 : null
    };
  }

  render() {

    const { intl } = this.props;
    const { inputState, timepickerValue1, timepickerValue2, timepickerValue3 } = this.state;

    // ======================Internationalization Example=========================
    // intl prop is injected by the injectIntl() at the bottom of the page...
    // Provider Context wraps the root element in demo.js.

    // do the intl string replacement...
    const text =  {
      textInputInfoMessage  : intl.formatMessage(messages.textInputInfoMessage),
      textInputErrorMessage : intl.formatMessage(messages.textInputErrorMessage)
    };

    return (
      <div className="displaySection">
        <h1><a href="http://pearson-higher-ed.github.io/design/c/time-picker/v1.0.0">TimePicker - current design (v1.0.0)</a></h1>

        <div className="elementContainer">

          <div className="code">
            <h2>TimePicker:</h2>
            <h3>Props:</h3>

            <ul>
              <li>className:String  === "styles to pass to datepicker"</li>
              <li>id:String === "A unique name for the datepicker"</li>
              <li>twentyFourHour:Boolean  === "render timepicker in 24 hour format"</li>
              <li>dateFormat:String === "format for date/time entry"</li>
              <li>inputState:String === "styles for input state, one of 'error','disabled','readOnly','default'"</li>
              <li>labelText:String === "unique lable for the input field"</li>
              <li>timepickerValue:Date/Time === "value to be displayed by the datepicker/timepicker"</li>
              <li>changeHandler:Function === "function to pass values on change"</li>
              <li>infoMessage:String === "an optional info message displayed below the input"</li>
              <li>errorMessage:String === "an optional error message displayed below the input"</li>
              <li>disableLabel:Boolean === "Allows visual disabling of the label.  Text must still be passed to the labelText even if this is present for a11y purposes."</li>
            </ul>

            <h3>Configure Props:</h3>
            <Select id="select" changeHandler={e => this.setState({inputState:`${e.target.value}`})} selectedOption={inputState} labelText="Select An inputState:" options={["default", "error", "readOnly", "disabled"]} />

          </div>

          <h2>TimePicker (basic time): </h2>
          <TimePicker
            id              = "someGiantId1"
            inputState      = {inputState}
            labelText       = "Select time (hh:mm)"
            timepickerValue = {timepickerValue1}
            changeHandler   = {time => this.setState({ timepickerValue1: time })}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <p className="code">{`<TimePicker id = "someGiantId" inputState = "default" labelText = "Select time (hh:mm)" timepickerValue = {this.state.timepickerValue3} changeHandler = {() => console.log("TimePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

          <h2>TimePicker (basic time range): </h2>
          <TimePicker
            id              = "someGiantId2"
            inputState      = {inputState}
            labelText       = "Select time (hh:mm)"
            timepickerValue = {timepickerValue2}
            changeHandler   = {time => this.setState({ timepickerValue2: time })}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <TimePicker
            id              = "someGiantId3"
            inputState      = {inputState}
            labelText       = "Select time (hh:mm)"
            timepickerValue = {timepickerValue3}
            changeHandler   = {time => this.setState({ timepickerValue3: time })}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <p className="code">{`<TimePicker fancy = {true} id = "someGiantId" inputState = "default" labelText = "Select time (hh:mm)" datepickerValue = {this.state.datepickerValue4} changeHandler = {() => console.log("TimePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

        </div>
      </div>
      )
  }

}

export default injectIntl(TimePickerPage);
