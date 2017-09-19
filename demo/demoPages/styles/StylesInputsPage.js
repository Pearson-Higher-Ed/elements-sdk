import React from 'react';

const eight = {paddingLeft: 8};
const sixtn = {paddingLeft: 16};
const twntyFr = {paddingLeft: 24};

const StylesInputsPage = () => (
  <div style={{padding: 14}}>
    <h1>Inputs</h1>
    <p>An input is a field used to save a response from a user.</p>
    <a href="http://pearson-higher-ed.github.io/design/c/inputs/">Design and Redlines</a>

    <h2>Labels</h2>
    <p>All inputs must have direct labels, even when the visual design such as the field being physically close to other text can give some users a good idea of what to fill in. Labels need to be programmatically associated with the inputs, by having a `for` attribute which matches the input&#39;s (unique to the page!) `id` attribute.</p>

    <p>Wrapping a label around an input (which avoids the need for using `for` and `id` pairing) is legal and valid HTML. However there are some assistive tech which are buggy with this setup and have been for many years (differing browsers and AT have had problems at different times). For this reason, ElementsSDK encourages separate labels with programmatic association (`for` and `id` matching attributes).</p>

    <h2>Placeholders</h2>
    <p>Placeholders are shown here so consuming teams can see what they look like in the current Elements design. However, they are generally not recommended. If they are merely repeating what the label says, they are little more than distractions and may fool end-users into thinking the inputs are already filled in (see <a href="https://www.nngroup.com/articles/form-design-placeholders/">nngroup research</a>). If the placeholder offers useful hints (such as the desired formatting of data), consider adding this as info text under the input and linked using `aria-describedby`, or adding it to the label (see <a href="https://www.digitalgov.gov/2014/11/24/placeholder-text-think-outside-the-box/">placing hints outside inputs</a>).</p>

    <h2>Error states</h2>
    <p>When someone has made an error, that error state should be clear and obvious, as well as what exactly the problem is. For some assistive tech users, we can programmatically associate an error message with its input using `aria-describedby`, and we can set the input&#39;s state with `aria-invalid`.</p>

    <p>`aria-describedby`&#39;s value is the id of the element with the message you want to link. `aria-invalid` can either be used as a boolean, or it can have a type as a value (`aria-invalid="spelling"` for example).</p>

    <p>Be aware: hiding an error message that is present in the DOM using `display: none` or `visibility: hidden` will still have that error message read out to screen reader users when they focus on the input, even when the input is not in an error state.
    The message or the input&#39;s `aria-describedby` link to the message cannot be present in the DOM until there *is* an error state. </p>

    <p>When there is no error state, any of these techniques will work:</p>
    <ul>
      <li>leave the error message absent (empty element) until the input is shown invalid</li>
      <li>don&#39;t have the error element present at all (appears when there&#39;s an error state)</li>
      <li>don&#39;t have the error element have the matching id</li>
      <li>don&#39;t have the error element&#39;s id in the `aria-describedby` value</li>
    </ul>

    <p>The `aria-invalid` attribute should only be set to true *after validation*, not before.</p>

    <h2>Inputs - Fancy (single line)</h2>

    <label className="pe-textLabelInput__label" htmlFor="name1">First Name</label>
    <input type="text" className="pe-textInput" id="name1" placeholder="weee I'm placeholder" />
    <span className="pe-input_underline"></span>

    <p className="code">
    {`<label class="pe-textLabelInput__label" for="name1">First Name</label>`} <br/>
    {`<input type="text" class="pe-textInput" id="name1" placeholder="weee I'm placeholder">`} <br/>
    {`<span class="pe-input_underline"></span>`}
    </p>

    <h2>Inputs - Fancy (single line - focus)</h2>

    <label className="pe-textLabelInput__label--label_focus" htmlFor="name1_again">First Name</label>
    <input type="text" className="pe-textInput" id="name1_again" placeholder="m0ar placeholder" />
    <span className="pe-input_underline"></span>

    <p className="code">
    {`<label class="pe-textLabelInput__label--label_focus" for="name1_again">First Name</label>`} <br/>
    {`<input type="text" class="pe-textInput" id="name1_again" placeholder="m0ar placeholder">`} <br/>
    {`<span class="pe-input_underline"></span>`}
    </p>

    <h2>Inputs - Fancy (single line - error)</h2>

    <label className="pe-textLabelInput__label--label_error" htmlFor="name2">First Name</label>
    <input type="text" className="pe-textInput--input_error" id="name2" value="Cher" aria-describedby="someError" aria-invalid="true" />
    <span className="pe-inputError_underline"></span>
    <span id="someError" className="pe-input--error_message">this is an error message</span>

    <p className="code">
    {`<label class="pe-textLabelInput__label--label_error" for="name2">First Name</label>`} <br/>
    {`<input type="text" class="pe-textInput--input_error" id="name2" value="Cher" aria-describedby="someError" aria-invalid="true">`} <br/>
    {`<span class="pe-inputError_underline"></span>`} <br/>
    {`<span id="someError" class="pe-input--error_message">this is an error message</span>`}
    </p>

    <h2>Inputs - Fancy (single line - disabled)</h2>

    <label className="pe-textLabelInput__label--label-disabled" htmlForfor="name3">First Name</label>
    <input type="text" className="pe-textInput" id="name3" value="The Donald" disabled />

    <p className="code">
    {`<label class="pe-textLabelInput__label--label-disabled" for="name3">First Name</label>`} <br/>
    {`<input type="text" class="pe-textInput" id="name3" value="The Donald" disabled>`}
    </p>

    <h2>Inputs (single line - read only)</h2>

    <label className="pe-textLabelInput__label" htmlForfor="name4">First Name</label>
    <input type="text" className="pe-textInput--input_readonly" id="name4" value="The Donald" readonly />

    <p className="code">
    {`<label class="pe-textLabelInput__label" for="name4">First Name</label>`} <br/>
    {`<input type="text" class="pe-textInput--input_readonly" id="name4" value="The Donald" readonly>`}
    </p>

    <h2>Inputs - Basic (single line)</h2>

    <label className="pe-textLabelInput__label" htmlFor="anInput">Label</label>
    <input type="text" className="pe-textInput--basic" id="anInput" aria-describedby="someHint" />
    <span id="someHint" className="pe-input--info_message">this is an info message</span>

    <p className="code">
    {`<label class="pe-textLabelInput__label" for="anInput">Label</label>`} <br/>
    {`<input type="text" class="pe-textInput--basic" id="anInput" aria-describedby="someHint">`} <br/>
    {`<span id="someHint" class="pe-input--info_message">this is an info message</span>`}
    </p>

    <h2>Inputs - Basic (single line - focus)</h2>
    <p>This is just showing that, on focus, the label should turn blue. This needs JavaScript to show, and is not naturally included in Elements css.</p>

    <label className="pe-textLabelInput__label--label_focus" htmlFor="anotherInput">Label</label>
    <input type="text" className="pe-textInput--basic" id="anotherInput" placeholder="Example placeholder" />

    <p className="code">
    {`<label class="pe-textLabelInput__label--label_focus" for="anotherInput">Label</label>`} <br/>
    {`<input type="text" class="pe-textInput--basic" id="anotherInput" placeholder="Example placeholder">`}
    </p>

    <h2>Inputs - Basic (single line - error)</h2>

    <label className="pe-textLabelInput__label--label_error" htmlFor="emailz">Email address</label>
    <input type="text" className="pe-textInput--basic_error" id="emailz" value="email@domain" aria-invalid="true" aria-describedby="no_tld_error" />
    <p id="no_tld_error" className="pe-input--error_message">This address looks like it&#39;s missing the TLD.</p>

    <p className="code">
    {`<label class="pe-textLabelInput__label--label_error" for="emailz">Email address</label>`} <br/>
    {`<input type="text" class="pe-textInput--basic_error" id="emailz" value="email@domain" aria-invalid="true" aria-describedby="no_tld_error">`} <br/>
    {`<p id="no_tld_error" class="pe-input--error_message">This address looks like it's missing the TLD.</p>`}
    </p>

    <h2>Inputs - Basic (single line - disabled)</h2>

    <label className="pe-textLabelInput__label--label-disabled" htmlFor="x">Label</label>
    <input type="text" className="pe-textInput--basic" id="x" disabled value="some pre-filled value" />

    <p className="code">
    {`<label class="pe-textLabelInput__label--label-disabled" for="x">Label</label>`} <br/>
    {`<input type="text" class="pe-textInput--basic" id="x" disabled value="some pre-filled value">`}
    </p>

    <h2> Inputs - Basic (single line - readonly)</h2>

    <label className="pe-textLabelInput__label" htmlFor="y">Label</label>
    <input type="text" className="pe-textInput--input_readonly" id="y" value="read only" readonly />

    <p className="code">
    {`<label class="pe-textLabelInput__label" for="y">Label</label>`} <br/>
    {`<input type="text" class="pe-textInput--input_readonly" id="y" value="read only" readonly>`}
    </p>

    <h2>Inputs - Fancy (password)</h2>

    <label htmlFor="PasswordInputFancy" className="pe-textLabelInput__label">Set a Password</label>
    <input type="password" id="PasswordInputFancy" className="pe-textInput" aria-describedby="password_hint" />
    <span className="pe-input_underline"></span>
    <button type="button" id="showbutton-PasswordInputFancy" className="pe-textInput__showButton">show<span className="pe-sr-only"> password</span></button>
    <span id="password_hint" className="pe-input--info_message">Password must contain 1 uppercase letter, 1 lowercase letter, the Fibonacci sequence, a solution to the healthcare crisis, and a copy of your DNA.</span>

    <p className="code">
    {`<label for="PasswordInputFancy" class="pe-textLabelInput__label">Set a Password</label>`} <br/>
    {`<input type="password" id="PasswordInputFancy" class="pe-textInput" aria-describedby="password_hint">`} <br/>
    {`<span class="pe-input_underline"></span>`} <br/>
    {`<button type="button" id="showbutton-PasswordInputFancy" class="pe-textInput__showButton">show<span class="pe-sr-only"> password</span></button>`} <br/>
    {`<span id="password_hint" class="pe-input--info_message">Password must contain 1 uppercase letter, 1 lowercase letter, the Fibonacci sequence, a solution to the healthcare crisis, and a copy of your DNA.</span>`}
    </p>

    <p>this needs javascript to action show/hide `function`, and label focus --</p>
    <a href='https://github.com/Pearson-Higher-Ed/compounds/src/PasswordInput'>https://github.com/Pearson-Higher-Ed/compounds/src/TextInput</a>

    <h2>Inputs (password) - Fancy (error)</h2>

    <label htmlFor="PasswordInputFancyError" className="pe-textLabelInput__label--label_error">Set a Password</label>
    <input type="password" id="PasswordInputFancyError" className="pe-textInput--input_error" aria-describedby="password_error2 password_hint2" aria-invalid="true" />
    <span className="pe-inputError_underline"></span>
    <button type="button" id="showbutton-PasswordInputFancyError" className="pe-textInput__showButton--error">show</button>
    <span id="password_hint2" className="pe-input--info_message">This is an info message</span>
    <span id="password_error2" className="pe-input--error_message">This is an error message</span>

    <p className="code">
    {`<label for="PasswordInputFancyError" class="pe-textLabelInput__label--label_error">Set a Password</label>`} <br/>
    {`<input type="password" id="PasswordInputFancyError" class="pe-textInput--input_error" aria-describedby="password_error2 password_hint2" aria-invalid="true">`} <br/>
    {`<span class="pe-inputError_underline"></span>`} <br/>
    {`<button type="button" id="showbutton-PasswordInputFancyError" class="pe-textInput__showButton--error">show</button>`} <br/>
    {`<span id="password_hint2" class="pe-input--info_message">This is an info message</span>`} <br/>
    {`<span id="password_error2" class="pe-input--error_message">This is an error message</span>`}
    </p>

    <h2>Inputs (password) - Fancy (readonly)</h2>
    <p>Consider the usefulness (or not) of a readonly password input.</p>

    <label htmlFor="PasswordInputFancyReadOnly" className="pe-textLabelInput__label">Your chosen password</label>
    <input type="password" id="PasswordInputFancyReadOnly" readonly className="pe-textInput--input_readonly" aria-describedby="password_hint3" value="*********" />
    <button type="button" id="showbutton-PasswordInputFancyReadOnly" className="pe-textInput__showButton">show</button>
    <span id="password_hint3" className="pe-input--info_message">This is an info message</span>

    <p className="code">
    {`<label for="PasswordInputFancyReadOnly" class="pe-textLabelInput__label">Your chosen password</label>`} <br/>
    {`<input type="password" id="PasswordInputFancyReadOnly" readonly class="pe-textInput--input_readonly" aria-describedby="password_hint3" value="*********">`} <br/>
    {`<button type="button" id="showbutton-PasswordInputFancyReadOnly" class="pe-textInput__showButton">show</button>`} <br/>
    {`<span id="password_hint3" class="pe-input--info_message">This is an info message</span>`}
    </p>

    <h2>Inputs (password) - Fancy (disabled)</h2>

    <label htmlFor="PasswordInputFancyDisabled" className="pe-textLabelInput__label--label-disabled">Choose a password</label>
    <input type="password" id="PasswordInputFancyDisabled" disabled className="pe-textInput" />
    <span className=""></span>
    <button type="button" id="showbutton-PasswordInputFancyDisabled" disabled className="pe-textInput__showButton--disabled">show</button>

    <p className="code">
    {`<label htmlFor="PasswordInputFancyDisabled" className="pe-textLabelInput__label--label-disabled">Choose a password</label>`} <br/>
    {`<input type="password" id="PasswordInputFancyDisabled" disabled className="pe-textInput">`} <br/>
    {`<span className=""></span>`} <br/>
    {`<button type="button" id="showbutton-PasswordInputFancyDisabled" disabled className="pe-textInput__showButton--disabled">show</button>`}
    </p>

    <h2>Inputs (password) - Basic</h2>

    <label htmlFor="PasswordInputBasic" className="pe-textLabelInput__label">Password: </label>
    <input type="password" id="PasswordInputBasic" placeholder="not your pet's first name" className="pe-textInput--basic" />
    <span className=""></span>
    <button type="button" id="showbutton-PasswordInputBasic" className="pe-textInput__showButton-basic">show</button>
    <span id="pw_hint" className="pe-input--info_message">This is an info message</span>
    <span id="pw_error" className="pe-input--error_message"></span>

    <p className="code">
    {`<label for="PasswordInputBasic" class="pe-textLabelInput__label">Password: </label>`} <br/>
    {`<input type="password" id="PasswordInputBasic" placeholder="not your pet's first name" class="pe-textInput--basic">`} <br/>
    {`<span class=""></span>`} <br/>
    {`<button type="button" id="showbutton-PasswordInputBasic" class="pe-textInput__showButton-basic">show</button>`} <br/>
    {`<span id="pw_hint" class="pe-input--info_message">This is an info message</span>`} <br/>
    {`<span id="pw_error" class="pe-input--error_message"></span>`}
    </p>

    <h2>Inputs (password) - Basic (error)</h2>

    <label htmlFor="PasswordInputBasicError" className="pe-textLabelInput__label--label_error">Password: </label>
    <input type="password" id="PasswordInputBasicError" value="star wars" className="pe-textInput--basic_error" aria-invalid="true" aria-describedby="pw_error2 pw_hint2" />
    <span className=""></span>
    <button type="button" id="showbutton-PasswordInputBasicError" className="pe-textInput__showButton-basic">show</button>
    <span id="pw_hint2" className="pe-input--info_message">"star wars" is a terrible password. So is "12345" and "1a2b3c4d" and "password". Do not use these.. Or do, I&#39;m not your mother.</span>
    <span id="pw_error2" className="pe-input--error_message">Srsly. Choose something more secure.</span>

    <p className="code">
    {`<label for="PasswordInputBasicError" class="pe-textLabelInput__label--label_error">Password: </label>`} <br/>
    {`<input type="password" id="PasswordInputBasicError" value="star wars" class="pe-textInput--basic_error" aria-invalid="true" aria-describedby="pw_error2 pw_hint2">`} <br/>
    {`<span class=""></span>`} <br/>
    {`<button type="button" id="showbutton-PasswordInputBasicError" class="pe-textInput__showButton-basic">show</button>`} <br/>
    {`<span id="pw_hint2" class="pe-input--info_message">"star wars" is a terrible password. So is "12345" and "1a2b3c4d" and "password". Don't use these.</span>`} <br/>
    {`<span id="pw_error2" class="pe-input--error_message">Srsly. Choose something more secure.</span>`}
    </p>

    <h2>Inputs (password) - Basic (disabled)</h2>

    <label htmlFor="PasswordInputBasicDisabled" className="pe-textLabelInput__label--label-disabled">Password</label>
    <input type="password" id="PasswordInputBasicDisabled" value="***********" disabled className="pe-textInput--basic" />
    <span className=""></span>
    <button type="button" id="showbutton-PasswordInputBasicDisabled" disabled className="pe-textInput__showButton-basic--disabled">show</button>

    <p className="code">
    {`<label for="PasswordInputBasicDisabled" class="pe-textLabelInput__label--label-disabled">Password</label>`} <br/>
    {`<input type="password" id="PasswordInputBasicDisabled" value="***********" disabled class="pe-textInput--basic">`} <br/>
    {`<span class=""></span>`} <br/>
    {`<button type="button" id="showbutton-PasswordInputBasicDisabled" disabled class="pe-textInput__showButton-basic--disabled">show</button>`} <br/>
    </p>

    <h2>Inputs (password) - Basic (readonly)</h2>

    <label htmlFor="PasswordInputBasicReadOnly" className="pe-textLabelInput__label">Password</label>
    <input type="password" id="PasswordInputBasicReadOnly" value="zomgwtfbbq" readonly className="pe-textInput--input_readonly" />
    <button type="button" id="showbutton-PasswordInputBasicReadOnly" className="pe-textInput__showButton">show</button>

    <p className="code">
    {`<label for="PasswordInputBasicReadOnly" class="pe-textLabelInput__label">Password</label>`} <br/>
    {`<input type="password" id="PasswordInputBasicReadOnly" value="zomgwtfbbq" readonly class="pe-textInput--input_readonly">`} <br/>
    {`<button type="button" id="showbutton-PasswordInputBasicReadOnly" class="pe-textInput__showButton">show</button>`}
    </p>

    <h2>Select Inputs - Basic</h2>

    <p>Select dropdowns are generally meant for times when a user needs to make a single choice from among many options. People can choose more than one option if the `mutliple` attribute is added, however checkboxes are much more user-friendly for multiple selections.</p>

    <ul>
      <li>Generally only 1 option is visible at a time, unless the `size` attribute is present (points to a string representing the number of options visible by default). We recommend leaving size to its default of "1".</li>
      <li>When there is more than 1 option that could be selected, use checkboxes instead.</li>
    </ul>

    <p><strong>Note:</strong> A separate label should be present and visible for the select box. We do not recommend using one of the options to display a question: browsers differ on how they truncate options before the user focuses on selects.</p>

    <label className="pe-textLabelInput__label" htmlFor="send_message">Send message to</label>
    <div className="pe-select-container">
      <select className="pe-selectInput--basic" id="send_message">
        <option value="GBPTF">Grizzly Bear Prevention Task Force</option>
        <option value="1234B">Boaty McBoatface</option>
        <option value="GDL">GDL</option>
        <option value="LED">LED</option>
      </select>
      <svg aria-hidden="true"
        focusable="false"
        className="pe-icon--dropdown-open-18">
      <use xlinkHref="#dropdown-open-18"></use>
      </svg>
    </div>

    <p className="code">
    {`<label class="pe-textLabelInput__label" for="send_message">Send message to</label>`} <br/>
    {`<div class="pe-select-container">`} <br/>
      <div style={eight}>{`<select class="pe-selectInput--basic" id="send_message">`}</div>
        <div style={sixtn}>{`<option value="GBPTF">Grizzly Bear Prevention Task Force</option>`}</div>
        <div style={sixtn}>{`<option value="1234B">Boaty McBoatface</option>`}</div>
        <div style={sixtn}>{`<option value="GDL">GDL</option>`}</div>
        <div style={sixtn}>{`<option value="LED">LED</option>`}</div>
      <div style={eight}>{`</select>`}</div>
      <div style={eight}>{`<svg aria-hidden="true"`}</div>
        <div style={sixtn}>{`focusable="false"`}</div>
        <div style={sixtn}>{`class="pe-icon--dropdown-open-sm-24">`}</div>
      <div style={eight}>{`<use xlink:href="#dropdown-open-sm-24"></use>`}</div>
      <div style={eight}>{`</svg>`}</div>
    {`</div>`}
    </p>

    <h2>Select Inputs - Basic (error)</h2>

    <label className="pe-textLabelInput__label--label_error" htmlFor="fout">Error label</label>
    <div className="pe-select-container-error">
      <select className="pe-selectInput--basic" id="fout" aria-describedby="select_error">
        <option value="uno">Uno</option>
        <option value="dos">Dos</option>
        <option value="tres">Tres</option>
        <option value="quatro">Quatro</option>
      </select>
      <svg aria-hidden="true"
        focusable="false"
        className="pe-icon--dropdown-open-18">
      <use xlinkHref="#dropdown-open-18"></use>
      </svg>
    </div>
    <p id="select_error" className="pe-input--error_message">error message</p>

    <p className="code">
    {`<label class="pe-textLabelInput__label--label_error" for="fout">Error label</label>`} <br/>
    {`<div class="pe-select-container-error">`} <br/>
      <div style={eight}>{`<select class="pe-selectInput--basic" id="fout" aria-describedby="select_error">`}</div>
        <div style={sixtn}>{`<option value="uno">Uno</option>`}</div>
        <div style={sixtn}>{`<option value="dos">Dos</option>`}</div>
        <div style={sixtn}>{`<option value="tres">Tres</option>`}</div>
        <div style={sixtn}>{`<option value="quatro">Quatro</option>`}</div>
      <div style={eight}>{`</select>`}</div>
      <div style={eight}>{`<svg aria-hidden="true"`}</div>
        <div style={sixtn}>{`focusable="false"`}</div>
        <div style={sixtn}>{`class="pe-icon--dropdown-open-sm-24">`}</div>
      <div style={eight}>{`<use xlink:href="#dropdown-open-sm-24"></use>`}</div>
      <div style={eight}>{`</svg>`}</div>
    {`</div>`}
    {`<p id="select_error" className="pe-input--error_message">error message</p>`}
    </p>

    <h2>Select Inputs - Basic (readOnly)</h2>

    <p>Select&#39;s don&#39;t have a readonly state. To fake it, you would have to remove all the other options with JavaScript.</p>

    <label className="pe-textLabelInput__label" htmlFor="readonly_zomg">Readonly label</label>
    <div className="pe-select-container-readonly">
      <select className="pe-select-container-readonly" id="readonly_zomg">
        <option value="tres">Three</option>
      </select>
      <svg aria-hidden="true"
        focusable="false"
        className="pe-icon--dropdown-open-18">
      <use xlinkHref="#dropdown-open-18"></use>
      </svg>
    </div>
    <p id="readonly_hint" className="pe-input--info_message">Only valid with coupon</p>

    <p className="code">
    {`<label class="pe-textLabelInput__label" htmlFor="readonly_zomg">Readonly label</label>`} <br/>
    {`<div class="pe-select-container-readonly">`} <br/>
      <div style={eight}>{`<select class="pe-select-container-readonly" id="readonly_zomg">`}</div>
        <div style={sixtn}>{`<option value="tres">Three</option>`}</div>
      <div style={eight}>{`</select>`}</div>
      <div style={eight}>{`<svg aria-hidden="true"`}</div>
        <div style={sixtn}>{`focusable="false"`}</div>
        <div style={sixtn}>{`class="pe-icon--dropdown-open-sm-24">`}</div>
      <div style={eight}>{`<use xlink:href="#dropdown-open-sm-24"></use>`}</div>
      <div style={eight}>{`</svg>`}</div>
    {`</div>`} <br/>
    {`<p id="readonly_hint" class="pe-input--info_message">Only valid with coupon</p>`}
    </p>

    <h2>Select Inputs - fancy</h2>

    <label htmlFor="select_fancy" className="pe-textLabelInput__label">Select Label:</label>
      <div className="pe-select-container--fancy">
         <select id="select_fancy" className="pe-selectInput--fancy" aria-describedby="hinty_mchint">
           <option>ipad</option>
           <option>mac</option>
           <option>iphone</option>
         </select>
         <span className="pe-input_underline"></span>
         <svg focusable="false" aria-hidden="true" className="pe-icon--dropdown-open-18">
           <use xlinkHref="#dropdown-open-18"></use>
         </svg>
      </div>
      <span id="hinty_mchint" className="pe-input--info_message">This is an info message</span>

    <p className="code">
    {`<label for="select_fancy" class="pe-textLabelInput__label">Select Label:</label>`} <br/>
      <div style={eight}>{`<div class="pe-select-container--fancy">`}</div>
        <div style={sixtn}>{`<select id="select_fancy" class="pe-selectInput--fancy" aria-describedby="hinty_mchint">`}</div>
          <div style={twntyFr}>{`<option>ipad</option>`}</div>
          <div style={twntyFr}>{`<option>mac</option>`}</div>
          <div style={twntyFr}>{`<option>iphone</option>`}</div>
        <div style={sixtn}>{`</select>`}</div>
        <div style={sixtn}>{`<span class="pe-input_underline"></span>`}</div>
        <div style={sixtn}>{`<svg focusable="false" aria-hidden="true" class="pe-icon--dropdown-open-sm-24">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#dropdown-open-sm-24"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div style={eight}>{`</div>`}</div>
      <div style={eight}>{`<span id="hinty_mchint" class="pe-input--info_message">This is an info message</span>`}</div>
    </p>

    <h2>Select Inputs - fancy (error)</h2>

    <label htmlFor="select_fancy_error" className="pe-textLabelInput__label--label_error">Select Label:</label>
      <div className="pe-select-container-fancy-error">
        <select id="select_fancy_error" className="pe-selectInput-fancy-error" aria-invalid="true" aria-describedby="fancy_error">
          <option>ipad</option>
          <option>mac</option>
          <option>iphone</option>
        </select>
        <span className="pe-inputError_underline"></span>
        <svg focusable="false" aria-hidden="true" className="pe-icon--dropdown-open-18">
          <use xlinkHref="#dropdown-open-18"></use>
        </svg>
      </div>
      <span id="fancy_error" className="pe-input--error_message">This is an error message</span>

    <p className="code">
    {`<label for="select_fancy_error" class="pe-textLabelInput__label--label_error">Select Label:</label>`} <br/>
      <div style={eight}>{`<div class="pe-select-container-fancy-error">`}</div>
        <div style={sixtn}>{`<select id="select_fancy_error" class="pe-selectInput-fancy-error" aria-invalid="true" aria-describedby="fancy_error">`}</div>
          <div style={twntyFr}>{`<option>ipad</option>`}</div>
          <div style={twntyFr}>{`<option>mac</option>`}</div>
          <div style={twntyFr}>{`<option>iphone</option>`}</div>
        <div style={sixtn}>{`</select>`}</div>
        <div style={sixtn}>{`<span class="pe-inputError_underline"></span>`}</div>
        <div style={sixtn}>{`<svg focusable="false" aria-hidden="true" class="pe-icon--dropdown-open-sm-24">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#dropdown-open-sm-24"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div style={eight}>{`</div>`}</div>
      <div style={eight}>{`<span id="fancy_error" class="pe-input--error_message">This is an error message</span>`}</div>
    </p>

    <h2>Select Inputs - fancy (disabled)</h2>

    <label htmlFor="select_disabled" className="pe-textLabelInput__label--label-disabled">Select Label:</label>
      <div className="pe-select-container-fancy-disabled">
        <select id="select_disabled" disabled className="pe-selectInput-fancy-disabled">
          <option>ipad</option>
          <option>mac</option>
          <option>iphone</option>
        </select>
        <span className=""></span>
        <svg focusable="false" aria-hidden="true" className="pe-icon--dropdown-open-18">
          <use xlinkHref="#dropdown-open-18"></use>
        </svg>
      </div>

    <p className="code">
    {`<label for="select_disabled" class="pe-textLabelInput__label--label-disabled">Select Label:</label>`}
      <div style={eight}>{`<div class="pe-select-container-fancy-disabled">`}</div>
        <div style={sixtn}>{`<select id="select_disabled" disabled class="pe-selectInput-fancy-disabled">`}</div>
          <div style={twntyFr}>{`<option>ipad</option>`}</div>
          <div style={twntyFr}>{`<option>mac</option>`}</div>
          <div style={twntyFr}>{`<option>iphone</option>`}</div>
        <div style={sixtn}>{`</select>`}</div>
        <div style={sixtn}>{`<span class=""></span>`}</div>
        <div style={sixtn}>{`<svg focusable="false" aria-hidden="true" class="pe-icon--dropdown-open-sm-24">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#dropdown-open-sm-24"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div style={eight}>{`</div>`}</div>
    </p>

    <h2>Select Inputs - fancy (readonly)</h2>

    <label htmlFor="select_readonly" className="pe-textLabelInput__label">Select Label:</label>
      <div className="pe-select-container-fancy-readonly">
        <select id="select_readonly" disabled="" className="pe-selectInput-fancy-readonly">
          <option>ipad</option>
          <option>mac</option>
          <option>iphone</option>
        </select>
        <span className=""></span>
        <svg focusable="false" aria-hidden="true" className="pe-icon--dropdown-open-18">
          <use xlinkHref="#dropdown-open-18"></use>
        </svg>
      </div>

    <p className="code">
    {`<label for="select_readonly" class="pe-textLabelInput__label">Select Label:</label>`}
      <div stlye={eight}>{`<div class="pe-select-container-fancy-readonly">`}</div>
        <div style={sixtn}>{`<select id="select_readonly" disabled="" class="pe-selectInput-fancy-readonly">`}</div>
          <div style={twntyFr}>{`<option>ipad</option>`}</div>
          <div style={twntyFr}>{`<option>mac</option>`}</div>
          <div style={twntyFr}>{`<option>iphone</option>`}</div>
        <div style={sixtn}>{`</select>`}</div>
        <div style={sixtn}>{`<span class=""></span>`}</div>
        <div style={sixtn}>{`<svg focusable="false" aria-hidden="true" class="pe-icon--dropdown-open-sm-24">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#dropdown-open-sm-24"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div stlye={eight}>{`</div>`}</div>
    </p>

    <h2>Multiple Line text</h2>

    <label className="pe-textLabelInput__label" htmlFor="multi_vlaai">Multi-line label</label>
    <textarea className="pe-multiLineText" id="multi_vlaai" cols="30" rows="5"
      placeholder="Many words displayed over multiple lines.">
    </textarea>

    <p className="code">
    {`<label class="pe-textLabelInput__label" for="multi_vlaai">Multi-line label</label>`} <br/>
    {`<textarea class="pe-multiLineText" id="multi_vlaai" cols="30" rows="5"`} <br/>
      {`placeholder="Many words displayed over multiple lines.">`} <br/>
    {`</textarea>`}
    </p>

    <h2>Multiple line text - error</h2>

    <label className="pe-textLabelInput__label--label_error" htmlFor="vlaai_fout">Multi-line label</label>
    <textarea className="pe-multiLineText--error" id="vlaai_fout" cols="30" rows="5"
      aria-invalid="true" aria-describedby="vlaai_error">You Can&#39;t Have Too Much Truck </textarea>
    <p id="vlaai_error" className="pe-input--error_message">Too much truck</p>

    <p className="code">
    {`<label class="pe-textLabelInput__label--label_error" for="vlaai_fout">Multi-line label</label>`} <br/>
    {`<textarea class="pe-multiLineText--error" id="vlaai_fout" cols="30" rows="5"`} <br/>
      {`aria-invalid="true" aria-describedby="vlaai_error">You Can't Have Too Much Truck </textarea>`} <br/>
    {`<p id="vlaai_error" class="pe-input--error_message">Too much truck</p>`}
    </p>

    <h2>Multiple line text - disabled</h2>

    <label className="pe-textLabelInput__label--label-disabled" htmlFor="nope">Multi-line label</label>
    <textarea className="pe-multiLineText--disabled" id="nope" cols="30" rows="5" disabled> </textarea>

    <p className="code">
    {`<label class="pe-textLabelInput__label--label-disabled" for="nope">Multi-line label</label>`} <br/>
    {`<textarea class="pe-multiLineText--disabled" id="nope" cols="30" rows="5" disabled> </textarea>`}
    </p>

    <h2>Multiple line text - readonly</h2>

    <label className="pe-textLabelInput__label" htmlFor="andale">Multi-line label</label>
    <textarea className="pe-multiLineText--readOnly" id="andale" cols="30" rows="5" readonly>Read this</textarea>

    <p className="code">
    {`<label class="pe-textLabelInput__label" for="andale">Multi-line label</label>`} <br/>
    {`<textarea class="pe-multiLineText--readOnly" id="andale" cols="30" rows="5" readonly>Read this</textarea>`}
    </p>

    <h2>Inputs (checkbox)</h2>

    <p>Checkboxes are for times when the user needs to make one or more binary choices about a related item.</p>

    <ul>
      <li>Unlike radio buttons, where a group of radio buttons represents a single choice, each check box in a group represents a separate, independent choice.</li>
      <li>When there is more than one option but only one can be selected, use a radio button instead.</li>
    </ul>

    Unselected
    <div className="pe-checkbox">
      <input type="checkbox"  id="checkboxInput" value="1" />
      <label htmlFor="checkboxInput">Bacon</label>
      <span>
        <svg aria-hidden="true"
             focusable="false"
             className="pe-icon--check-sm-18">
          <use xlinkHref="#check-sm-18"></use>
        </svg>
      </span>
    </div>

    <p className="code">
    {`<div class="pe-checkbox">`}
      <div style={eight}>{`<input type="checkbox"  id="checkboxInput" value="1" />`}</div>
      <div style={eight}>{`<label for="checkboxInput">Bacon</label>`}</div>
      <div style={eight}>{`<span>`}</div>
        <div style={sixtn}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#check-sm-18"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div style={eight}>{`</span>`}</div>
    {`</div>`}
    </p>

    Selected
     <div className="pe-checkbox">
       <input type="checkbox" id="checkboxInput2" value="1" checked/>
       <label htmlFor="checkboxInput2">Pastrami</label>
       <span>
         <svg aria-hidden="true"
            focusable="false"
            className="pe-icon--check-sm-18">
          <use xlinkHref="#check-sm-18"></use>
         </svg>
       </span>
     </div>

    <p className="code">
     {`<div class="pe-checkbox">`} <br/>
       <div style={eight}>{`<input type="checkbox" id="checkboxInput2" value="1" checked/>`}</div>
       <div style={eight}>{`<label for="checkboxInput2">Pastrami</label>`}</div>
       <div style={eight}>{`<span>`}</div>
         <div style={sixtn}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#check-sm-18"></use>`}</div>
         <div style={sixtn}>{`</svg>`}</div>
       <div style={eight}>{`</span>`}</div>
     {`</div>`}
    </p>

    Disabled Selected
    <div className="pe-checkbox">
      <input type="checkbox" id="checkboxInput5" checked disabled/>
      <label htmlFor="checkboxInput5">Tripe</label>
      <span>
        <svg aria-hidden="true"
             focusable="false"
             className="pe-icon--check-sm-18">
          <use xlinkHref="#check-sm-18"></use>
        </svg>
      </span>
    </div>

    <p className="code">
    {`<div class="pe-checkbox">`}
      <div style={eight}>{`<input type="checkbox" id="checkboxInput5" checked disabled/>`}</div>
      <div style={eight}>{`<label for="checkboxInput5">Tripe</label>`}</div>
      <div style={eight}>{`<span>`}</div>
        <div style={sixtn}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#check-sm-18"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div style={eight}>{`</span>`}</div>
    {`</div>`}
    </p>

    Disabled Unselected
    <div className="pe-checkbox">
      <input type="checkbox" id="checkboxInput6" disabled/>
      <label htmlFor="checkboxInput6">Meatball</label>
      <span>
        <svg aria-hidden="true"
             focusable="false"
             className="pe-icon--check-sm-18">
          <use xlinkHref="#check-sm-18"></use>
        </svg>
      </span>
    </div>

    <p className="code">
    {`<div class="pe-checkbox">`}
      <div style={eight}>{`<input type="checkbox" id="checkboxInput6" disabled/>`}</div>
      <div style={eight}>{`<label for="checkboxInput6">Meatball</label>`}</div>
      <div style={eight}>{`<span>`}</div>
        <div style={sixtn}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#check-sm-18"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div style={eight}>{`</span>`}</div>
    {`</div>`}
    </p>

    <h2>Inputs (radio buttons)</h2>

    <p>Radio buttons are for times when the user needs to make a single choice among many options. Unlike a select box, all options are available and visible to all users at once.</p>

    <ul>
      <li>Radio buttons are required to be inside a radio group (the most common example is a fieldset element where the fieldset&#39;s {`<legend>`} contains the subject the user is making a choice about).  They are required to have a label (which names the choice). Thus there is almost always a combination of a subject regarding the group (like a question), and a label per option.</li>
      <li>Radio buttons within a radio group are also required to share the same `name` attribute. There cannot be only 1 radio button in a radio group.</li>
      <li>It is <strong>strongly recommended</strong> that one of the radio buttons are selected by default, rather than letting browsers choose to either pre-select the first item or leave them all unselected.</li>
      <li>When a subject line and individual options, or using a fieldset/legend seem unnecessary for your question, consider using a select element instead.</li>
      <li>When there is more than one option that could be selected, use checkboxes instead.</li>
    </ul>
    <p>Example showing unselected, selected, and disabled unselected versions:</p>

    <fieldset className="pe-fieldset">
      <legend>Which scotch do you like with your cookies?</legend>
      <div className="pe-radio">
        <input type="radio" name="scotch" id="scotchTB" />
        <label htmlFor="scotchTB">T&#233; Bheag (unselected)</label>
        <span>
          <svg aria-hidden="true"
               focusable="false"
               className="pe-icon--radio-dot">
            <use xlinkHref="#new-notification-9"></use>
          </svg>
        </span>
      </div>

      <div className="pe-radio">
        <input type="radio" name="scotch" id="scotchMS" checked="checked" />
        <label htmlFor="scotchMS">Monkey Shoulder (selected)</label>
        <span>
          <svg aria-hidden="true"
               focusable="false"
               className="pe-icon--radio-dot">
            <use xlinkHref="#new-notification-9"></use>
          </svg>
        </span>
      </div>

      <div className="pe-radio">
        <input type="radio" name="scotch" id="scotchT" disabled />
        <label htmlFor="scotchT">Talisker 18 years (disabled unselected)</label>
        <span>
          <svg aria-hidden="true"
               focusable="false"
               className="pe-icon--radio-dot">
            <use xlinkHref="#new-notification-9"></use>
          </svg>
        </span>
      </div>
    </fieldset>

    <p className="code">
    {`<fieldset class="pe-fieldset">`} <br/>
      <div style={eight}>{`<legend>Which scotch do you like with your cookies?</legend>`}</div>
      <div style={eight}>{`<div class="pe-radio">`}</div>
        <div style={sixtn}>{`<input type="radio" name="scotch" id="scotchTB">`}</div>
        <div style={sixtn}>{`<label for="scotchTB">T&#233; Bheag (unselected)</label>`}</div>
        <div style={sixtn}>{`<span>`}</div>
          <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
            <div style={{paddingLeft: 32}}>{`<use xlink:href="#new-notification-9"></use>`}</div>
          <div style={twntyFr}>{`</svg>`}</div>
        <div style={sixtn}>{`</span>`}</div>
      <div style={eight}>{`</div>`}</div>

      <div style={eight}>{`<div class="pe-radio">`}</div>
        <div style={sixtn}>{`<input type="radio" name="scotch" id="scotchMS" checked="checked">`}</div>
        <div style={sixtn}>{`<label for="scotchMS">Monkey Shoulder (selected)</label>`}</div>
        <div style={sixtn}>{`<span>`}</div>
          <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
            <div style={{paddingLeft: 32}}>{`<use xlink:href="#new-notification-9"></use>`}</div>
          <div style={twntyFr}>{`</svg>`}</div>
        <div style={sixtn}>{`</span>`}</div>
      <div style={eight}>{`</div>`}</div>

      <div style={eight}>{`<div class="pe-radio">`}</div>
        <div style={sixtn}>{`<input type="radio" name="scotch" id="scotchT" disabled>`}</div>
        <div style={sixtn}>{`<label for="scotchT">Talisker 18 years (disabled unselected)</label>`}</div>
        <div style={sixtn}>{`<span>`}</div>
          <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
            <div style={{paddingLeft: 32}}>{`<use xlink:href="#new-notification-9"></use>`}</div>
          <div style={twntyFr}>{`</svg>`}</div>
        <div style={sixtn}>{`</span>`}</div>
      <div style={eight}>{`</div>`}</div>
    {`</fieldset>`}
    </p>

    <h3>Accessibility Concerns</h3>

    <p>There can be times when a developer cannot have a fieldset+legend but must for some reason use radio buttons. It is possible to use another wrapping element, such as a div, with `role=radiogroup` set on it. Additionally for the legend text, if there is nearby text that is visually being relied upon to do the question/subject work, giving that element a unique id can allow you to add `aria-describedby="that unique id"` on your div.</p>

    <h2 id="cookiemonster">Cookies</h2>
    <div role="radiogroup" aria-describedby="cookiemonster">
      <div className="pe-radio">
        <input type="radio" name="cookiez" id="cookiey" checked />
        <label htmlFor="cookiey">Love them</label>
        <span>
          <svg aria-hidden="true"
               focusable="false"
               className="pe-icon--radio-dot">
            <use xlinkHref="#new-notification-9"></use>
          </svg>
        </span>
      </div>
      <div className="pe-radio">
        <input type="radio" name="cookiez" id="cookien" />
        <label htmlFor="cookien">Hate them</label>
        <span>
          <svg aria-hidden="true"
               focusable="false"
               className="pe-icon--radio-dot">
            <use xlinkHref="#new-notification-9"></use>
          </svg>
        </span>
      </div>
    </div>

    <p className="code">
    {`<h2 id="cookiemonster">Cookies</h2>`} <br/>
    {`<div role="radiogroup" aria-describedby="cookiemonster">`} <br/>
      <div style={eight}>{`<div className="pe-radio">`}</div>
        <div style={sixtn}>{`<input type="radio" name="cookiez" id="cookiey" checked />`}</div>
        <div style={sixtn}>{`<label htmlFor="cookiey">Love them</label>`}</div>
        <div style={sixtn}>{`<span>`}</div>
          <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" className="pe-icon--radio-dot">`}</div>
            <div style={{paddingLeft: 32}}>{`<use xlinkHref="#new-notification-9"></use>`}</div>
          <div style={twntyFr}>{`</svg>`}</div>
        <div style={sixtn}>{`</span>`}</div>
      <div style={eight}>{`</div>`}</div>
      <div style={eight}>{`<div className="pe-radio">`}</div>
        <div style={sixtn}>{`<input type="radio" name="cookiez" id="cookien" />`}</div>
        <div style={sixtn}>{`<label htmlFor="cookien">Hate them</label>`}</div>
        <div style={sixtn}>{`<span>`}</div>
          <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" className="pe-icon--radio-dot">`}</div>
            <div style={{paddingLeft: 32}}>{`<use xlinkHref="#new-notification-9"></use>`}</div>
          <div style={twntyFr}>{`</svg>`}</div>
        <div style={sixtn}>{`</span>`}</div>
      <div style={eight}>{`</div>`}</div>
    {`</div>`}
    </p>

    <p>If the developer does not even have the freedom to wrap the radio buttons, `aria-describedby` can be used directly as well:</p>

    <h2 id="cookiemonster2">Cookies</h2>
    <div className="pe-radio">
      <input type="radio" name="cookiezz" id="cookieyes" checked aria-describedby="cookiemonster2" />
      <label htmlFor="cookieyes">Love them</label>
      <span>
        <svg aria-hidden="true" focusable="false" className="pe-icon--radio-dot">
          <use xlinkHref="#new-notification-9"></use>
        </svg>
      </span>
    </div>
    <div className="pe-radio">
      <input type="radio" name="cookiezz" id="cookieno" aria-describedby="cookiemonster2" />
      <label htmlFor="cookieno">Hate them</label>
      <span>
        <svg aria-hidden="true" focusable="false" className="pe-icon--radio-dot">
          <use xlinkHref="#new-notification-9"></use>
        </svg>
      </span>
    </div>

    <p className="code">
    {`<h2 id="cookiemonster2">Cookies</h2>`} <br/>
    {`<div class="pe-radio">`} <br/>
      <div style={eight}>{`<input type="radio" name="cookiezz" id="cookieyes" checked aria-describedby="cookiemonster2">`}</div>
      <div style={eight}>{`<label for="cookieyes">Love them</label>`}</div>
      <div style={eight}>{`<span>`}</div>
        <div style={sixtn}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#new-notification-9"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div style={eight}>{`</span>`}</div>
    {`</div>`} <br/>
    {`<div class="pe-radio">`} <br/>
      <div style={eight}>{`<input type="radio" name="cookiezz" id="cookieno" aria-describedby="cookiemonster2">`}</div>
      <div style={eight}>{`<label for="cookieno">Hate them</label>`}</div>
      <div style={eight}>{`<span>`}</div>
        <div style={sixtn}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
          <div style={twntyFr}>{`<use xlink:href="#new-notification-9"></use>`}</div>
        <div style={sixtn}>{`</svg>`}</div>
      <div style={eight}>{`</span>`}</div>
    {`</div>`}
    </p>

    <h3>RadioCheckGroup - (radio)</h3>

     <fieldset className="pe-fieldset">
       <legend className="pe-legend">These are radio buttons</legend>
       <div className="pe-radio">
          <input type="radio" id="radiocheck-radiobutton2-tea-0" name="radiobutton2" value="tea" /><label htmlFor="radiocheck-radiobutton2-tea-0">tea</label>
          <span>
             <svg aria-hidden="true" focusable="false" className="pe-icon--radio-dot">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#new-notification-9"></use>
             </svg>
          </span>
       </div>
       <div className="pe-radio">
          <input type="radio" id="radiocheck-radiobutton2-coffee-1" name="radiobutton2" value="coffee" /><label htmlFor="radiocheck-radiobutton2-coffee-1">coffee</label>
          <span>
             <svg aria-hidden="true" focusable="false" className="pe-icon--radio-dot">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#new-notification-9"></use>
             </svg>
          </span>
       </div>
       <div className="pe-radio">
          <input type="radio" id="radiocheck-radiobutton2-soda-2" name="radiobutton2" value="soda" /><label htmlFor="radiocheck-radiobutton2-soda-2">soda</label>
          <span>
             <svg aria-hidden="true" focusable="false" className="pe-icon--radio-dot">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#new-notification-9"></use>
             </svg>
          </span>
       </div>
       <div className="pe-radio">
          <input type="radio" id="radiocheck-radiobutton2-water-3" name="radiobutton2" value="water" /><label htmlFor="radiocheck-radiobutton2-water-3">water</label>
          <span>
             <svg aria-hidden="true" focusable="false" className="pe-icon--radio-dot">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#new-notification-9"></use>
             </svg>
          </span>
       </div>
     </fieldset>

     <p className="code">
     {`<fieldset class="pe-fieldset">`} <br/>
       <div style={eight}>{`<legend class="pe-legend">These are radio buttons</legend>`}</div>
       <div style={eight}>{`<div class="pe-radio">`}</div>
          <div style={sixtn}>{`<input type="radio" id="radiocheck-radiobutton2-tea-0" name="radiobutton2" value="tea"><label for="radiocheck-radiobutton2-tea-0">tea</label>`}</div>
          <div style={sixtn}>{`<span>`}</div>
             <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
                <div style={{paddingLeft: 32}}>{`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#new-notification-9"></use>`}</div>
             <div style={twntyFr}>{`</svg>`}</div>
          <div style={sixtn}>{`</span>`}</div>
       <div style={eight}>{`</div>`}</div>
       <div style={eight}>{`<div class="pe-radio">`}</div>
          <div style={sixtn}>{`<input type="radio" id="radiocheck-radiobutton2-coffee-1" name="radiobutton2" value="coffee"><label for="radiocheck-radiobutton2-coffee-1">coffee</label>`}</div>
          <div style={sixtn}>{`<span>`}</div>
             <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
                <div style={{paddingLeft: 32}}>{`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#new-notification-9"></use>`}</div>
             <div style={twntyFr}>{`</svg>`}</div>
          <div style={sixtn}>{`</span>`}</div>
       <div style={eight}>{`</div>`}</div>
       <div style={eight}>{`<div class="pe-radio">`}</div>
          <div style={sixtn}>{`<input type="radio" id="radiocheck-radiobutton2-soda-2" name="radiobutton2" value="soda"><label for="radiocheck-radiobutton2-soda-2">soda</label>`}</div>
          <div style={sixtn}>{`<span>`}</div>
             <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
                <div style={{paddingLeft: 32}}>{`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#new-notification-9"></use>`}</div>
             <div style={twntyFr}>{`</svg>`}</div>
          <div style={sixtn}>{`</span>`}</div>
      <div style={eight}>{` </div>`}</div>
       <div style={eight}>{`<div class="pe-radio">`}</div>
          <div style={sixtn}>{`<input type="radio" id="radiocheck-radiobutton2-water-3" name="radiobutton2" value="water"><label for="radiocheck-radiobutton2-water-3">water</label>`}</div>
          <div style={sixtn}>{`<span>`}</div>
             <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--radio-dot">`}</div>
                <div style={{paddingLeft: 32}}>{`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#new-notification-9"></use>`}</div>
             <div style={twntyFr}>{`</svg>`}</div>
          <div style={sixtn}>{`</span>`}</div>
       <div style={eight}>{`</div>`}</div>
     {`</fieldset>`}
     </p>

     <h3>RadioCheckGroup - (checkbox)</h3>

     <p className="code">
     {`<fieldset class="pe-fieldset">`} <br/>
       <div style={eight}>{`<legend class="pe-legend">These are checkboxes</legend>`}</div>
       <div style={eight}>{`<div class="pe-checkbox">`}</div>
          <div style={sixtn}>{`<input type="checkbox" id="radiocheck-checkbox1-tea-0" name="checkbox1" value="tea"><label for="radiocheck-checkbox1-tea-0">tea</label>`}</div>
          <div style={sixtn}>{`<span>`}</div>
             <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">`}</div>
                <div style={{paddingLeft: 32}}>{`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-sm-18"></use>`}</div>
             <div style={twntyFr}>{`</svg>`}</div>
          <div style={sixtn}>{`</span>`}</div>
       <div style={eight}>{`</div>`}</div>
       <div style={eight}>{`<div class="pe-checkbox">`}</div>
          <div style={sixtn}>{`<input type="checkbox" id="radiocheck-checkbox1-coffee-1" name="checkbox1" value="coffee" disabled=""><label for="radiocheck-checkbox1-coffee-1">coffee</label>`}</div>
          <div style={sixtn}>{`<span>`}</div>
             <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">`}</div>
                <div style={{paddingLeft: 32}}>{`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-sm-18"></use>`}</div>
             <div style={twntyFr}>{`</svg>`}</div>
          <div style={sixtn}>{`</span>`}</div>
       <div style={eight}>{`</div>`}</div>
       <div style={eight}>{`<div class="pe-checkbox">`}</div>
          <div style={sixtn}>{`<input type="checkbox" id="radiocheck-checkbox1-soda-2" name="checkbox1" value="soda"><label for="radiocheck-checkbox1-soda-2">soda</label>`}</div>
          <div style={sixtn}>{`<span>`}</div>
             <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">`}</div>
                <div style={{paddingLeft: 32}}>{`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-sm-18"></use>`}</div>
             <div style={twntyFr}>{`</svg>`}</div>
          <div style={sixtn}>{`</span>`}</div>
       <div style={eight}>{`</div>`}</div>
       <div style={eight}>{`<div class="pe-checkbox">`}</div>
          <div style={sixtn}>{`<input type="checkbox" id="radiocheck-checkbox1-water-3" name="checkbox1" value="water" disabled=""><label for="radiocheck-checkbox1-water-3">water</label>`}</div>
          <div style={sixtn}>{`<span>`}</div>
             <div style={twntyFr}>{`<svg aria-hidden="true" focusable="false" class="pe-icon--check-sm-18">`}</div>
                <div style={{paddingLeft: 32}}>{`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-sm-18"></use>`}</div>
             <div style={twntyFr}>{`</svg>`}</div>
          <div style={sixtn}>{`</span>`}</div>
       <div style={eight}>{`</div>`}</div>
    {`</fieldset>`}
    </p>

  </div>
);

export default StylesInputsPage;
