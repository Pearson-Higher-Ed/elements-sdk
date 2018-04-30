import React from 'react';

import { TextInput } from '../../../../index';


const TextInputSection = (props) => (
  <div>
    <h2><a href="http://pearson-higher-ed.github.io/design/c/inputs/#single-line-text">Single Line Text Input</a></h2>

      <div className="code">
        <h3>Props:</h3>
        <p>TextInput:</p>
        <ul>
          <li>id:String(required) === "a unique name"</li>
          <li>labelText:String(required) === "a desciptive label"</li>
          <li>fancy:Boolean === true/false</li>
          <li>inputState:String === "default", "error", "disabled", "readOnly"</li>
          <li>placeholder:String  === "a placeholder text (not recommended)"</li>
          <li>changeHandler:Function(required) === "handles changes"</li>
          <li>infoMessage:String === "an optional info message displayed below the input"</li>
          <li>errorMessage:String === "an optional error message displayed below the input"</li>
          <li>value:String === "Value of the input field"</li>
        </ul>
      </div>


      <h3>Single Line - Basic</h3>
      <TextInput
        id            = "a"
        inputState    = "default"
        changeHandler = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="a" inputState="default" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


      <br />
      <br />

      <h3>Single Line</h3>
      <TextInput
        id            = "b"
        fancy         = {true}
        inputState    = "default"
        changeHandler = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        value         = {props.intlDefaultText.textInputDefaultValue}
      />
      <p className="code">{'<TextInput id="b" fancy={true} inputState="default" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message"  />'}</p>


      <br />
      <br />


      <h3>Single Line -  Basic Error</h3>
      <TextInput
        id            = "c"
        inputState    = "error"
        changeHandler = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="c" inputState="error" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message"  />'}</p>


      <br />
      <br />


      <h3>Single Line - Error</h3>
      <TextInput
        id            = "d"
        fancy         = {true}
        inputState    = "error"
        changeHandler = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="d" fancy={true} inputState="error" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message"  />'}</p>


      <br />
      <br />


      <h3>Single Line -  Basic Disabled</h3>
      <TextInput
        id            = "e"
        inputState    = "disabled"
        changeHandler = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="e" inputState="disabled" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message"  />'}</p>


      <br />
      <br />


      <h3>Single Line - Disabled</h3>
      <TextInput
        id            = "f"
        fancy         = {true}
        inputState    = "disabled"
        changeHandler = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="f" fancy={true} inputState="disabled" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message"  />'}</p>


      <br />
      <br />


      <h3>Single Line - Read Only</h3>
      <TextInput
        id            = "g"
        inputState    = "readOnly"
        fancy         = {true}
        changeHandler = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="g" inputState="readOnly" fancy={true} changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>



      <br />
      <br />


      <h3>Single Line - Basic Read Only</h3>
      <TextInput
        id            = "h"
        inputState    = "readOnly"
        changeHandler = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="h" inputState="readOnly" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


  </div>
)


export default TextInputSection;
