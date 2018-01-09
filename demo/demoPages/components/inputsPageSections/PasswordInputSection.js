import React from 'react';

import { TextInput } from '../../../../index';


const PasswordInputSection = (props) => (
  <div>
    <h2><a href="http://pearson-higher-ed.github.io/design/c/inputs/#specialized-inputs">Password Input</a></h2>

      <div className="code">
        <h3>Props:</h3>
        <p>PasswordInput:</p>
        <ul>
          <li>id:String(required) === "a unique name"</li>
          <li>password:Boolean    === true/false</li>
          <li>fancy:Boolean       === true/false</li>
          <li>labelText:String(required)    === "a desciptive label"</li>
          <li>placeholder:String  === "a placeholder text (not recommended)"</li>
          <li>inputState:String    === "default", "error", "disabled", "readOnly"</li>
          <li>changeHandler:Function(required) === handles selection</li>
          <li>showText:String     === "'show' button text"</li>
          <li>hideText:String     === "'hide' button text"</li>
          <li>isNotVisibleMsg:String     === "pw hidden state text"</li>
          <li>isVisibleMsg:String     === " pw hidden state text"</li>
          <li>infoMessage:String  === "an optional info message displayed below the input"</li>
          <li>errorMessage:String === "an optional error message displayed below the input"</li>
        </ul>
      </div>

      <h3>PasswordInput - Fancy:</h3>
        <TextInput
          password        = {true}
          fancy           = {true}
          id              = "PasswordInputFancy"
          changeHandler   = {() => {}}
          labelText       = {props.intlDefaultText.passwordLabel}
          placeholder     = {props.intlDefaultText.passwordPlaceholder}
          infoMessage     = {props.intlDefaultText.textInputInfoMessage}
          errorMessage    = {props.intlDefaultText.textInputErrorMessage}
          showText        = {props.intlDefaultText.showText}
          hideText        = {props.intlDefaultText.hideText}
          isNotVisibleMsg = {props.intlDefaultText.isNotVisibleMsg}
          isVisibleMsg    = {props.intlDefaultText.isVisibleMsg}
          />
        <p className="code">{'<TextInput password={true} fancy={true} id="PasswordInputFancy" changeHandler={() => {}} labelText="Password" placeholder="Your password" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />'}</p>


      <br />
      <br />


      <h3>PasswordInput - Basic:</h3>
        <TextInput
          password        = {true}
          id              = "PasswordInputBasic"
          changeHandler   = {() => {}}
          labelText       = {props.intlDefaultText.passwordLabel}
          placeholder     = {props.intlDefaultText.passwordPlaceholder}
          infoMessage     = {props.intlDefaultText.textInputInfoMessage}
          errorMessage    = {props.intlDefaultText.textInputErrorMessage}
          showText        = {props.intlDefaultText.showText}
          hideText        = {props.intlDefaultText.hideText}
          isNotVisibleMsg = {props.intlDefaultText.isNotVisibleMsg}
          isVisibleMsg    = {props.intlDefaultText.isVisibleMsg}
          />
        <p className="code">{'<TextInput password={true} id="PasswordInputBasic" changeHandler={() => {}} labelText="Password" placeholder="Your password" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />'}</p>


        <br />
        <br />


      <h3>PasswordInput - Basic Error:</h3>
        <TextInput
          password        = {true}
          id              = "PasswordInputBasicError"
          inputState      = "error"
          changeHandler   = {() => {}}
          labelText       = {props.intlDefaultText.passwordLabel}
          errorMessage    = {props.intlDefaultText.textInputErrorMessage}
          showText        = {props.intlDefaultText.showText}
          hideText        = {props.intlDefaultText.hideText}
          isNotVisibleMsg = {props.intlDefaultText.isNotVisibleMsg}
          isVisibleMsg    = {props.intlDefaultText.isVisibleMsg}
          />
        <p className="code">{'<TextInput password={true} id="PasswordInputBasicError" inputState="error" changeHandler={() => {}} labelText="Password" value="12345" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />'}</p>



      <br />
      <br />


      <h3>PasswordInput - Fancy Error:</h3>
        <TextInput
          password        = {true}
          id              = "PasswordInputFancyError"
          fancy           = {true}
          inputState      = "error"
          changeHandler   = {() => {}}
          labelText       = {props.intlDefaultText.passwordLabel}
          infoMessage     = {props.intlDefaultText.textInputInfoMessage}
          errorMessage    = {props.intlDefaultText.textInputErrorMessage}
          showText        = {props.intlDefaultText.showText}
          hideText        = {props.intlDefaultText.hideText}
          isNotVisibleMsg = {props.intlDefaultText.isNotVisibleMsg}
          isVisibleMsg    = {props.intlDefaultText.isVisibleMsg}
          />
        <p className="code">{'<PasswordInput password={true} id="PasswordInputFancyError" fancy={true} inputState="error" changeHandler={() => {}} labelText="Password" value="12345" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible"  />'}</p>


      <br />
      <br />


      <h3>PasswordInput - Basic Disabled:</h3>
        <TextInput
          password        = {true}
          id              = "PasswordInputBasicDisabled"
          inputState      = "disabled"
          changeHandler   = {() => {}}
          labelText       = {props.intlDefaultText.passwordLabel}
          placeholder     = {props.intlDefaultText.passwordPlaceholder}
          infoMessage     = {props.intlDefaultText.textInputInfoMessage}
          errorMessage    = {props.intlDefaultText.textInputErrorMessage}
          showText        = {props.intlDefaultText.showText}
          hideText        = {props.intlDefaultText.hideText}
          isNotVisibleMsg = {props.intlDefaultText.isNotVisibleMsg}
          isVisibleMsg    = {props.intlDefaultText.isVisibleMsg}
          />
        <p className="code">{'<TextInput password={true} id="PasswordInputBasicDisabled" inputState="disabled" changeHandler={() => {}} labelText="Password" placeholder="Your password" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />'}</p>


      <br />
      <br />


      <h3>PasswordInput - Fancy Disabled:</h3>
        <TextInput
          password        = {true}
          id              = "PasswordInputFancyDisabled"
          fancy           = {true}
          inputState      = "disabled"
          changeHandler   = {() => {}}
          labelText       = {props.intlDefaultText.passwordLabel}
          placeholder     = {props.intlDefaultText.passwordPlaceholder}
          infoMessage     = {props.intlDefaultText.textInputInfoMessage}
          errorMessage    = {props.intlDefaultText.textInputErrorMessage}
          showText        = {props.intlDefaultText.showText}
          hideText        = {props.intlDefaultText.hideText}
          isNotVisibleMsg = {props.intlDefaultText.isNotVisibleMsg}
          isVisibleMsg    = {props.intlDefaultText.isVisibleMsg}
          />
        <p className="code">{'<PasswordInput password={true} id="PasswordInputFancyDisabled" fancy={true} inputState="disabled" changeHandler={() => {}} labelText="Password" placeholder="Your password" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible"  />'}</p>


      <br />
      <br />


      <h3>PasswordInput - Basic readOnly:</h3>
      <p>It is not recommended to have readonly password inputs.</p>
        <TextInput
          password        = {true}
          id              = "PasswordInputBasicReadOnly"
          inputState      = "readOnly"
          changeHandler   = {() => {}}
          labelText       = {props.intlDefaultText.passwordLabel}
          errorMessage    = {props.intlDefaultText.textInputErrorMessage}
          showText        = {props.intlDefaultText.showText}
          hideText        = {props.intlDefaultText.hideText}
          isNotVisibleMsg = {props.intlDefaultText.isNotVisibleMsg}
          isVisibleMsg    = {props.intlDefaultText.isVisibleMsg}
          />
        <p className="code">{'<TextInput password={true} id="PasswordInputBasicReadOnly" inputState="readOnly" changeHandler={() => {}} labelText="Password" value="12345" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />'}</p>


      <br />
      <br />


      <h3>PasswordInput - Fancy readOnly:</h3>
        <TextInput
          password        = {true}
          id              = "PasswordInputFancyReadOnly"
          fancy           = {true}
          inputState      = "readOnly"
          changeHandler   = {() => {}}
          labelText       = {props.intlDefaultText.passwordLabel}
          errorMessage    = {props.intlDefaultText.textInputErrorMessage}
          showText        = {props.intlDefaultText.showText}
          hideText        = {props.intlDefaultText.hideText}
          isNotVisibleMsg = {props.intlDefaultText.isNotVisibleMsg}
          isVisibleMsg    = {props.intlDefaultText.isVisibleMsg}
          />
        <p className="code">{'<PasswordInput password={true} id="PasswordInputFancyReadOnly" fancy={true} inputState="readOnly" changeHandler={() => {}} labelText="Password" value="12345" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible"  />'}</p>

  </div>
)


export default PasswordInputSection;
