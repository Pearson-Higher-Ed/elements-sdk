import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../../translations/defaultMessages';

import { DatePicker, Select } from '../../../index';


class DatePickerPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      datePickerValue1 : null,
      datePickerValue2 : null,
      datePickerValue3 : null
    };

  }

  render() {

    const { intl } = this.props;
    const { inputState, datePickerValue1, datePickerValue2, datePickerValue3 } = this.state;

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
        <h1><a href="http://pearson-higher-ed.github.io/design/c/date-picker/v2.0.0">DatePicker - current design (v2.0.0)</a></h1>

          <div className="elementContainer">

            <div className="code">
              <h2>DatePicker:</h2>
              <h3>Props:</h3>

              <ul>
                <li>time:Boolean  === "render datepicker as timepicker"</li>
                <li>className:String  === "styles to pass to datepicker"</li>
                <li>id:String === "A unique name for the datepicker"</li>
                <li>dateFormat:String === "format for date/time entry"</li>
                <li>inputState:String === "styles for input state, one of 'error','disabled','readOnly','default'"</li>
                <li>labelText:String === "unique lable for the input field"</li>
                <li>datePickerValue:Date/Time === "value to be displayed by the datepicker/timepicker"</li>
                <li>changeHandler:Function === "function to pass values on change"</li>
                <li>infoMessage:String === "an optional info message displayed below the input"</li>
                <li>errorMessage:String === "an optional error message displayed below the input"</li>
                <li>disablePast: Boolean === "Disable all past dates"</li>
                <li>minDate:Object === "Accepts a date object which disables all dates prior to that date."</li>
              </ul>

              <h3>Configure Props:</h3>
              <Select id="select" changeHandler={e => this.setState({inputState:`${e.target.value}`}) } selectedOption={inputState} labelText="Select An inputState:" options={["default", "error", "readOnly", "disabled"]} />
            </div>

            <h2>DatePicker</h2>
            <DatePicker
              id              = "someGiantId1"
              dateFormat      = "dd/mm/yyyy"
              inputState      = {inputState}
              labelText       = "Select date"
              datepickerValue = {datePickerValue1}
              changeHandler   = {value => this.setState({datePickerValue1:value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{`<DatePicker id = "someGiantId" dateFormat = "dd/mm/yyyy" inputState = "default" labelText = "Select date" datepickerValue = {this.state.datepickerValue2} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

            <h2>DatePicker (range): </h2>
            <DatePicker
              id              = "someGiantId2"
              dateFormat      = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select Start date"
              datepickerValue = {datePickerValue2}
              changeHandler   = {value => this.setState({datePickerValue2:value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <DatePicker
              id              = "someGiantId3"
              dateFormat      = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select End date"
              datepickerValue = {datePickerValue3}
              changeHandler   = {value => this.setState({datePickerValue3:value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{`<DatePicker id = "someGiantId" dateFormat = "mm/dd/yyyy" inputState = "default" labelText = "Select date" datepickerValue = {this.state.datepickerValue2} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

          </div>
        </div>
      )
    }

}

export default injectIntl(DatePickerPage);
