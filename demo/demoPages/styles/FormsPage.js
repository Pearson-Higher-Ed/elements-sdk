import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../../translations/defaultMessages';

import { StaticAlert, DatePicker, Select } from '../../../index';

class FormsPage extends Component {


constructor(props){
  super(props);

  this.state = {
    datePickerValue1 : null,
    datePickerValue2 : null
  };

}

render() {

      const padEight = {paddingLeft: 8};
      const padSxtn = {paddingLeft: 16};
      const padTwf = {paddingLeft: 24};
      const padTht = {paddingLeft: 32};
      const MarginThirty = {marginBottom: 30};
  
  
      const { intl } = this.props;
      const { inputState, datePickerValue1, datePickerValue2 } = this.state;
  
      // ======================Internationalization Example=========================
      // intl prop is injected by the injectIntl() at the bottom of the page...
      // Provider Context wraps the root element in demo.js.
  
      // do the intl string replacement...
      const text =  {
        textInputInfoMessage  : intl.formatMessage(messages.textInputInfoMessage),
        textInputErrorMessage : intl.formatMessage(messages.textInputErrorMessage)
      };
  
      return (
          <div style={{padding: 14}}>
            <h1><a href="http://pearson-higher-ed.github.io/design/c/forms/">Forms</a></h1>

            <p>The basic form consists of several parts: a form name (class: pe-form--name or pe-form--name-bold), an optional top level error message(alerts component),
            an optional form instructin (pe-form--instr), one or more input fields (contained in class: pe-form--input), and a Next/Submit button (class: pe-btn__cta
            or pe-btn__primary).</p>

            <p className="code">
              {`<form class="pe-form">`} <br/>
              {`</form>`}
            </p>

            <h2>Elements</h2>

            <p>Form classes should be used within a form tag with the pe-form class.  All form elements should be contained within this form tag.</p>

            <h3>Form Name</h3>

            <p>For accessibility purposes, the form name should use a standard HTML header tag (e.g. h1-h6) but should also have the class pe-form--name added to it.  The purpose of this
            class is to insure proper spacing while the HTML header tag will handle typography.</p>

            <h3>Error handling</h3>

            <p>Individual input fields should present their own errors following the styles dictated for input components.  Fields with errors should always be accompanied by error text,
            unless a top level error message is sufficient to understand and fix the problem(s).</p>

            <p>Top level errors relevant to the form as a whole may be presented above the first input and below the form name. Refer to alerts components.</p>

            <h3>Form Instructions</h3>

            <p>An optional form instructin may be added should the form fields themselves be insufficient to properly explain the information requested.  This optional area should be
            standard body copy using the appropriate semantic HTML but should contain the pe-form--instr class in order to enforce proper spacing.</p>

            <h3>Input Fields</h3>

            <p>One or more input fields from the input components may be included in the form.  Can be either the basic or fancy style.  Each form element must be contained within a container (e.g. div) with the class pe-form--input
            added to insure proper spacing between form fields.  Form fields will occupy 100% of the form width and stack.</p>

            <h3>Next/Submit button</h3>

            <p>Where it makes sense, a standard pattern is to have the submit (or equivalent) button start out as a default button(pe-btn) and become a primary(pe-btn__primary) or CTA(pe-btn__cta) button once the form has been completely filled out.</p>

            <p>If the form is broken up into multiple pages, use a “Continue” or “Next” button to advance in the form series. Maintain the same Form Name between each page. You should also include some UI for returning to previous steps in the process, where possible.</p>

            <h3>Form groups</h3>
            <p>If you have many fields, consider organizing related fields into groups. Each group can have a section name. A form group consists of a section name followed by a horizontal line and input fields.</p>

            <h3>Responsive forms</h3>
            <p>The width of the form adjusts to the width of the viewport. For side by side input fields and buttons, stack them into one column when the screen size is small and extra small.</p>

            <h2 style={MarginThirty}>Basic Form</h2>
            <form className="pe-form">
              <h1 className="pe-form--name pe-title">Form Name</h1>
              <div>
                <div className="pe-form--input">
                  <label className="pe-textLabelInput__label" htmlFor="a">First Name</label>
                  <input type="text" className="pe-textInput" id="a" placeholder="First Name" />
                  <span className="pe-input--info_message"></span>
                </div>
                <div className="pe-form--input">
                  <label className="pe-textLabelInput__label" htmlFor="b">Last Name</label>
                  <input type="text" className="pe-textInput" id="b" placeholder="Last Name" />
                  <span className="pe-input--info_message"></span>
                </div>
              </div>
              <div className="pe-form--button-group">
                <button className="pe-btn__primary--btn_large">Primary Action</button>
                <button className="pe-btn--btn_large">Secondary Action</button> 
              </div>
            </form>

            <p className="code">
              {`<form class="pe-form">`}
                <div style={padEight}>{`<h1 class="pe-form--name  pe-title">Form Name</h1>`}</div>
                <div style={padEight}>{`<div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input">`}</div>
                    <div style={padTwf}>{`<label class="pe-textLabelInput__label">First Name</label>`}</div>
                    <div style={padTwf}>{`<input type="text" class="pe-textInput" placeholder="First Name" />`}</div>
                    <div style={padTwf}>{`<span class="pe-input--info_message"></span>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input">`}</div>
                    <div style={padTwf}>{`<label class="pe-textLabelInput__label" >last Name</label>`}</div>
                    <div style={padTwf}>{`<input type="text" class="pe-textInput" placeholder="Last Name" />`}</div>
                    <div style={padTwf}>{`<span class="pe-input--info_message"></span>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                <div style={padEight}>{`</div>`}</div>
                <div style={padEight}>{`<div class="pe-form--button-group">`}</div>
                  <div style={padSxtn}>{`<button class="pe-btn__primary">Primary Action</button>`}</div>
                  <div style={padSxtn}>{`<button class="pe-btn">Secondary Action</button>`}</div>
                <div style={padEight}>{`</div>`}</div>
              {`</form>`}
            </p>
            

            <h2 style={MarginThirty}>Form with Error Messages and Instruction</h2>
            <form className="pe-form">
              <h1 className="pe-form--name pe-title">Form Name</h1>
              <p className="pe-form--instr">This information applies to the entire form. It is optional.</p>
              <StaticAlert inline
                        type="Error"
                        message={`Please complete all required fields.`} />
              <div>
                <div className="pe-form--input">
                  <label className="pe-textLabelInput__label" htmlFor="c">First Name</label>
                  <input type="text" className="pe-textInput--basic" id="c" placeholder="First Name"/>
                  <span className="pe-input--info_message"></span>
                </div>
                <div className="pe-form--input">
                  <label className="pe-textLabelInput__label" htmlFor="d">Last Name</label>
                  <input type="text" className="pe-textInput--basic" id="d" placeholder="Last Name"/>
                  <span className="pe-input--info_message"></span>
                  <span className="pe-input--error_message">This is a field level error message.</span>
                </div>
                <div className="pe-form--input pe-form--inline-input">
                  <DatePicker
                    id              = "someGiantId1"
                    className       = "pe-form--inline-element"
                    dateFormat      = "dd/mm/yyyy"
                    inputState      = {inputState}
                    labelText       = "Select start date (dd/mm/yyyy)"
                    datepickerValue = {datePickerValue1}
                    changeHandler   = {value => this.setState({datePickerValue1:value})}
                    infoMessage     = {text.textInputInfoMessage}
                    errorMessage    = {text.textInputErrorMessage}
                  />
                  <DatePicker
                    id              = "someGiantId2"
                    className       = "pe-form--inline-element"
                    dateFormat      = "dd/mm/yyyy"
                    inputState      = {inputState}
                    labelText       = "Select end date (dd/mm/yyyy)"
                    datepickerValue = {datePickerValue2}
                    changeHandler   = {value => this.setState({datePickerValue2:value})}
                    infoMessage     = {text.textInputInfoMessage}
                    errorMessage    = {text.textInputErrorMessage}
                  />
                </div>
              </div>

              <div className="pe-form--button-group">
                <button className="pe-btn__primary--btn_large">Primary Action</button>
                <button className="pe-btn--btn_large">Secondary Action</button> 
              </div>
            </form>

            <p className="code">
              {`<form class="pe-form">`}
                <div style={padEight}>{`<h1 class="pe-form--name pe-title">Form Name</h1>`}</div>
                <div style={padEight}>{`<p class="pe-form--instr">This information applies to the entire form. It is optional.</p>`}</div>
                <div style={padEight}> {`<StaticAlert`}</div>
                  <div style={padSxtn}> {`inline`}</div>
                  <div style={padSxtn}> {`type="Error"`}</div>
                  <div style={padSxtn}> {`message="Please complete all required fields."`}</div>
                <div style={padEight}> {`/>`}</div>      
                <div style={padEight}>{`<div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input">`}</div>
                    <div style={padTwf}>{`<label class="pe-textLabelInput__label">First Name</label>`}</div>
                    <div style={padTwf}>{`<input type="text" class="pe-textInput" placeholder="First Name">`}</div>
                    <div style={padTwf}>{`<span class="pe-input--info_message"></span>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input">`}</div>
                    <div style={padTwf}>{`<label class="pe-textLabelInput__label">Last Name</label>`}</div>
                    <div style={padTwf}>{`<input type="text" class="pe-textInput" placeholder="Last Name">`}</div>
                    <div style={padTwf}>{`<span class="pe-input--info_message"></span>`}</div>
                    <div style={padTwf}>{`<span class="pe-input--error_message">This is a field level error message.</span>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input pe-form--inline-input">`}</div>
                    <div style={padTwf}> {`<DatePicker`}</div>
                      <div style={padTht}> {`id              = "someGiantId1"`}</div>
                      <div style={padTht}> {`class       = "pe-form--inline-element"`}</div>
                      <div style={padTht}> {`dateFormat      = "dd/mm/yyyy"`}</div>
                      <div style={padTht}> {`inputState      = {inputState}`}</div>
                      <div style={padTht}> {`labelText       = "Select start date (dd/mm/yyyy)"`}</div>
                      <div style={padTht}> {`datepickerValue = {datePickerValue1}`}</div>
                      <div style={padTht}> {`changeHandler   = {value => this.setState({datePickerValue1:value})}`}</div>
                      <div style={padTht}> {`infoMessage     = {text.textInputInfoMessage}`}</div>
                      <div style={padTht}> {`errorMessage    = {text.textInputErrorMessage}`}</div>
                    <div style={padTwf}> {`/>`}</div>
                    <div style={padTwf}> {`<DatePicker`}</div>
                      <div style={padTht}> {`id              = "someGiantId2"`}</div>
                      <div style={padTht}> {`class       = "pe-form--inline-element"`}</div>
                      <div style={padTht}> {`dateFormat      = "dd/mm/yyyy"`}</div>
                      <div style={padTht}> {`inputState      = {inputState}`}</div>
                      <div style={padTht}> {`labelText       = "Select end date (dd/mm/yyyy)"`}</div>
                      <div style={padTht}> {`datepickerValue = {datePickerValue2}`}</div>
                      <div style={padTht}> {`changeHandler   = {value => this.setState({datePickerValue2:value})}`}</div>
                      <div style={padTht}> {`infoMessage     = {text.textInputInfoMessage}`}</div>
                      <div style={padTht}> {`errorMessage    = {text.textInputErrorMessage}`}</div>
                    <div style={padTwf}> {`/>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                <div style={padEight}>{`</div>`}</div>
                <div style={padEight}>{`<div class="pe-form--button-group">`}</div>
                  <div style={padSxtn}>{`<button class="pe-btn__primary">Primary Action</button>`}</div>
                  <div style={padSxtn}>{`<button class="pe-btn">Secondary Action</button>`}</div>
                <div style={padEight}>{`</div>`}</div>
              {`</form>`}
            </p>

            <h2 style={MarginThirty}>Form Groups</h2> 
            <form className="pe-form">
              <h1 className="pe-form--name pe-title">Form Section Name</h1>
              <hr/>
              <div>
                <div className="pe-form--input pe-form--inline-input">
                  <div className="pe-form--inline-element">
                    <label className="pe-textLabelInput__label" htmlFor="e">First Name</label>
                    <input type="text" className="pe-textInput--basic" id="e"/>
                    <span className="pe-input--info_message">this is info msg</span>
                  </div>
                  <div className="pe-form--inline-element">
                    <label className="pe-textLabelInput__label" htmlFor="f">Last Name</label>
                    <input type="text" className="pe-textInput--basic" id="f" />
                    <span className="pe-input--info_message"></span>
                    <span className="pe-input--error_message">This is a field level error message.</span>
                  </div>
                </div>
                <div className="pe-form--input pe-form--inline-input">
                  <div className="pe-form--inline-element">
                    <label className="pe-textLabelInput__label" htmlFor="e">First Name</label>
                    <input type="text" className="pe-textInput--basic" id="e"/>
                    <span className="pe-input--info_message">this is info msg</span>
                  </div>
                  <div className="pe-form--inline-element">
                    <label className="pe-textLabelInput__label" htmlFor="f">Last Name</label>
                    <input type="text" className="pe-textInput--basic" id="f" />
                    <span className="pe-input--info_message"></span>
                    <span className="pe-input--error_message"></span>
                  </div>
                </div>
                <div className="pe-form--input pe-form--inline-input">
                  <div className="pe-form--inline-element">
                    <label className="pe-textLabelInput__label" htmlFor="e">First Name</label>
                    <input type="text" className="pe-textInput--basic" id="e"/>
                    <span className="pe-input--info_message"></span>
                  </div>
                  <div className="pe-form--inline-element">
                    <label className="pe-textLabelInput__label" htmlFor="f">Last Name</label>
                    <input type="text" className="pe-textInput--basic" id="f" />
                    <span className="pe-input--info_message"></span>
                    <span className="pe-input--error_message"></span>
                  </div>
                </div>
              </div>
              <h1 className="pe-form--name pe-title">Form Section Name</h1>
              <hr/>
              <div>
                <div className="pe-form--input pe-form--inline-input">
                  <div className="pe-form--inline-element">
                    <label className="pe-textLabelInput__label" htmlFor="e">First Name</label>
                    <input type="text" className="pe-textInput--basic" id="e"/>
                    <span className="pe-input--info_message"></span>
                  </div>
                  <div className="pe-form--inline-element">
                    <label className="pe-textLabelInput__label" htmlFor="f">Last Name</label>
                    <input type="text" className="pe-textInput--basic" id="f" />
                    <span className="pe-input--info_message"></span>
                    <span className="pe-input--error_message"></span>
                  </div>
                </div>
              </div>
            </form>

            <p className="code">
              {`<form class="pe-form">`}
                <div style={padEight}>{`<h1 class="pe-form--name pe-title">Section Name</h1>`}</div>
                <div style={padEight}>{`<hr/>`}</div>
                <div style={padEight}>{`<div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input pe-form--inline-input">`}</div>
                    <div style={padTwf}>{`<div class="pe-form--inline-element">`}</div>
                      <div style={padTht}>{`<label class="pe-textLabelInput__label">First Name</label>`}</div>
                      <div style={padTht}>{`<input type="text" class="pe-textInput--basic"/>`}</div>
                      <div style={padTht}>{`<span class="pe-input--info_message">this is info msg</span>`}</div>
                    <div style={padTwf}>{`</div>`}</div>
                    <div style={padTwf}>{`<div class="pe-form--inline-element">`}</div>
                      <div style={padTht}>{`<label class="pe-textLabelInput__label">Last Name</label>`}</div>
                      <div style={padTht}>{`<input type="text" class="pe-textInput--basic"/>`}</div>
                      <div style={padTht}>{`<span class="pe-input--info_message"></span>`}</div>
                      <div style={padTht}>{`<span class="pe-input--error_message">This is a field level error message.</span>`}</div>
                    <div style={padTwf}>{`</div>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input pe-form--inline-input">`}</div>
                    <div style={padTwf}>{`<div class="pe-form--inline-element">`}</div>
                      <div style={padTht}>{`<label class="pe-textLabelInput__label">First Name</label>`}</div>
                      <div style={padTht}>{`<input type="text" class="pe-textInput--basic"/>`}</div>
                      <div style={padTht}>{`<span class="pe-input--info_message"></span>`}</div>
                    <div style={padTwf}>{`</div>`}</div>
                    <div style={padTwf}>{`<div class="pe-form--inline-element">`}</div>
                      <div style={padTht}>{`<label class="pe-textLabelInput__label">Last Name</label>`}</div>
                      <div style={padTht}>{`<input type="text" class="pe-textInput--basic"/>`}</div>
                      <div style={padTht}>{`<span class="pe-input--info_message"></span>`}</div>
                      <div style={padTht}>{`<span class="pe-input--error_message"></span>`}</div>
                    <div style={padTwf}>{`</div>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input pe-form--inline-input">`}</div>
                    <div style={padTwf}>{`<div class="pe-form--inline-element">`}</div>
                      <div style={padTht}>{`<label class="pe-textLabelInput__label">First Name</label>`}</div>
                      <div style={padTht}>{`<input type="text" class="pe-textInput--basic"/>`}</div>
                      <div style={padTht}>{`<span class="pe-input--info_message"></span>`}</div>
                    <div style={padTwf}>{`</div>`}</div>
                    <div style={padTwf}>{`<div class="pe-form--inline-element">`}</div>
                      <div style={padTht}>{`<label class="pe-textLabelInput__label">Last Name</label>`}</div>
                      <div style={padTht}>{`<input type="text" class="pe-textInput--basic"/>`}</div>
                      <div style={padTht}>{`<span class="pe-input--info_message"></span>`}</div>
                      <div style={padTht}>{`<span class="pe-input--error_message"></span>`}</div>
                    <div style={padTwf}>{`</div>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                <div style={padEight}>{`</div>`}</div>
                <div style={padEight}>{`<h1 class="pe-form--name pe-title">Section Name</h1>`}</div>
                <div style={padEight}>{`<hr/>`}</div>
                <div style={padEight}>{`<div>`}</div>
                  <div style={padSxtn}>{`<div class="pe-form--input pe-form--inline-input">`}</div>
                    <div style={padTwf}>{`<div class="pe-form--inline-element">`}</div>
                      <div style={padTht}>{`<label class="pe-textLabelInput__label">First Name</label>`}</div>
                      <div style={padTht}>{`<input type="text" class="pe-textInput--basic"/>`}</div>
                      <div style={padTht}>{`<span class="pe-input--info_message">this is info msg</span>`}</div>
                    <div style={padTwf}>{`</div>`}</div>
                    <div style={padTwf}>{`<div class="pe-form--inline-element">`}</div>
                      <div style={padTht}>{`<label class="pe-textLabelInput__label">Last Name</label>`}</div>
                      <div style={padTht}>{`<input type="text" class="pe-textInput--basic"/>`}</div>
                      <div style={padTht}>{`<span class="pe-input--info_message"></span>`}</div>
                      <div style={padTht}>{`<span class="pe-input--error_message">This is a field level error message.</span>`}</div>
                    <div style={padTwf}>{`</div>`}</div>
                  <div style={padSxtn}>{`</div>`}</div>
                <div style={padEight}>{`</div>`}</div>
              {`</form>`}
            </p>

          </div>
      )
    }

  }

    export default injectIntl(FormsPage);