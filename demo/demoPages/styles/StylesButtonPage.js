import React from 'react';

const marginFour = {marginRight: 14};

const StylesButtonPage = () => (
  <div style={{padding: 14}}>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/buttons/">Buttons</a></h1>

    <p>Use a button to represent a user action&#8212; specifically, pressing it should perform an action on a page or document, rather than navigating a user elsewhere. These button styles
    are generally intended for content buttons rather than UI buttons. See below for <a href="#uibuttons">UI buttons</a>.</p>
    <p>There are four types of buttons:
      <ul>
        <li>
          CTA button is your Call To Action button. It is the single most important action on the page and takes higher priority over the Primary button type. It should be used only in specific instances such as the Sign-In process. It can only be used once per page.
        </li>
        <li>
          Primary button indicates the main call to action and should only appear once per group of buttons.
        </li>
        <li>
          Default button is your basic button, it can appear multiple times in a given group. Note that it is transparent so you are responsible for using it over a contrast compliant background.
        </li>
        <li>
          Tertiary button is for reduced importance actions which should be de-emphasized compared to the default button type.
        </li>
      </ul>
    </p>
      <button className="pe-btn__cta" style={marginFour}>Call To Action</button>
      <button className="pe-btn__primary" style={marginFour}>Primary</button>
      <button className="pe-btn" style={marginFour}>Default</button>
      <button className="pe-btn__tertiary">Tertiary</button>
    <p className="code" style={{marginTop: 12, marginBottom: 16}}>
      {`<button class="pe-btn__cta">Call To Action</button>`} <br/>
      {`<button class="pe-btn__primary">Primary</button>`} <br/>
      {`<button class="pe-btn">Default</button>`} <br/>
      {`<button class="pe-btn__tertiary">Tertiary</button>`}
    </p>

    <h2>Elements</h2>

    <p style={{marginBottom: 12}}>Button classes can be used with {`<div>`}, {`<span>`}, {`<a>`}, {`<button>`}, and {`<input>`} elements. But try very hard not to use button styles on divs, spans, or links.</p>
      <div className="pe-btn" tabIndex="0" role="button" style={marginFour}>Div</div>
      <a href="#void" className="pe-btn" role="button" style={marginFour}>Link</a>
      <a href="#void" className="pe-btn__primary--btn_xlarge" role="button" style={marginFour}>xLarge Primary Link</a>
      <button type="button" className="pe-btn" style={marginFour}>Button</button>
      <input className="pe-btn" type="submit" value="Submit" style={marginFour} />
      <button type="button" className="pe-link" style={marginFour}>Button</button>
      <button type="button" className="pe-link--btn" style={marginFour}>Link button 2.0</button>
      <button type="button" className="pe-link--btn" disabled style={marginFour}>Disabled link button 2.0</button>
    <p className="code">
      {`<div class="pe-btn" tabindex="0" role="button">Div</div>`} <br/>
      {`<a href="#void" class="pe-btn" role="button">Link</a>`} <br/>
      {`<a href="#void" class="pe-btn__primary--btn_xlarge" role="button">xLarge Primary Link</a>`} <br/>
      {`<button type="button" class="pe-btn">Button</button>`} <br/>
      {`<input class="pe-btn" type="submit" value="Submit" />`} <br/>
      {`<button type="button" class="pe-link">Button</button>`} <br/>
      {`<button type="button" class="pe-link--btn">Link button 2.0</button>`} <br/>
      {`<button type="button" class="pe-link--btn" disabled>Disabled link button 2.0</button>`} <br/>
    </p>

    <aside>
      <h3 className="pe-title">Accessibility: Using non-button elements</h3>
      <p>Where possible, prefer native HTML buttons {`(<button>, <input type="button">) etc`} over other elements styled as buttons, so that the User Agent and the OS do most of the work for you.</p>
      <p>If using an element other than a native HTML button, add the <a href="http://www.w3.org/TR/wai-aria/roles#button"><code>role="button"</code></a> attribute, and script in both click and keyup/down listeners (detect both spacebar and enter keys) to recreate button behavior. Also since buttons and inputs (but not divs, spans, or anchors) have a native disabled attribute, add <a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-disabled"><code>aria-disabled</code></a> to elements you want to disable, as well as manually changing the <code>tabindex</code> value to <code>{-1}</code> (or removing it in the case of non-natively focusables like div and span) to prevent average keyboarders from being able to tab to it (disabled elements cannot be in the tab order).</p>

      <p>Another thing to be aware of that developers sometimes miss, is that because a focusable, interactive element is <strong>not</strong> allowed inside a button (ie, <span style={{color:'#b00'}}>{`<button>Im button text<a href="somewhere"> with a link</a></button>`}</span>), the same rule holds for divs or other elements turned into buttons with <code>tabindex</code> and <code>role=button</code>, even though an HTML validator currently wont flag this. This also holds true for polyfilled <b>details/summary</b> elements!</p>
    </aside>

    <h2>Disabled</h2>

    <p>Buttons can be disabled when an action is not available to the user for the current context. Primary and call to action buttons have no disabled state.</p>
    <button className="pe-btn" disabled>Default</button><br/><br/>
    <p className="code">{`<button class="pe-btn" disabled>Default</button>`}</p>

    <p>For elements that do not support the `disabled` attribute, use `pe-btn--disabled` and `aria-disabled`.</p>
    <div className="pe-btn pe-btn--disabled" aria-disabled="true">Not a button</div> <br/><br/>
    <p className="code">{`<div class="pe-btn pe-btn--disabled" aria-disabled="true">Not a button</div>`}</p>

    <h2>Sizes</h2>

    <p>Buttons can be made smaller or larger. Large is the standard button size, prefer this button as a default size unless there is a reason to go up or down.</p>
    <button className="pe-btn--btn_small" style={marginFour}>Small</button>
    <button className="pe-btn__cta--btn_large" style={marginFour}>CTA Large</button>
    <button className="pe-btn__primary--btn_xlarge" style={marginFour}>Primary xLarge</button>
    <p className="code" style={{padding: 8}}>
      {`<button class="pe-btn--btn_small">Small</button>`} <br/>
      {`<button class="pe-btn__cta">CTA Large</button>`} <br/>
      {`<button class="pe-btn__primary--btn_xlarge">Primary xLarge</button>`}
    </p>

    <h2>Text overflow</h2>

    <p>Since the custom focus indicator on buttons requires overflow to be set to visible, a span tag with class btn-overflow must be placed inside the button to control text overflow properties. When the width of the text inside the button exceeds its container width, it will be truncated with an ellipsis. <strong>However, you should generally avoid using long text strings with buttons.</strong></p>
    <button className="pe-btn" style={{maxWidth: 200, marginBottom: 10}}><span className="btn-overflow">The quick brown fox jumps over the lazy dog.</span></button>

    <p className="code">
      {`<button class="pe-btn" style="max-width: 200px"><span class="btn-overflow">The quick brown fox jumps over the lazy dog.</span></button>`}
    </p>

    <h2 id="uibuttons">UI Buttons</h2>

    <p>Some buttons, such as "close" buttons or accordion toggles (so-called UI buttons) may in the design not match any of the above content buttons, but may only contain an icon (see <a href="#styles-icons">icons documentation</a>). The class `pe-icon--btn` removes default button styles such as padding or border, allowing the icon alone to represent the control.</p>
    <p>Keep in mind that with just a loose icon, the context needs to make it clear to users that the icon represents a control rather than a decoration.</p>

    <button type="button" className="pe-icon--btn">
      <svg role="img"
           aria-labelledby="b1"
           focusable="false"
           className="pe-icon--remove-lg-24">
        <title id="b1">Close dialog</title>
        <use xlinkHref="#remove-lg-24"></use>
      </svg>
    </button>

    <p className="code">
      {`<button type="button" class="pe-icon--btn">`}
      <div style={{paddingLeft: 8}}>{`<svg role="img"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`aria-labelledby="b1"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`class="pe-icon--remove-lg-24">`} <br/></div>
      <div style={{paddingLeft: 16}}>{`<title id="b1">Close dialog</title>`} <br/></div>
      <div style={{paddingLeft: 16}}>{`<use xlink:href="#remove-lg-24"></use>`} <br/></div>
      <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
      {`</button>`}
    </p>

    <h2>Icon alignment inside buttons</h2>

    <p>With size-18 icon:</p>
    <button type="button" className="pe-btn--btn_small" aria-label="Start date" style={marginFour}>
      Small with icon
      <svg aria-hidden="true"
           focusable="false"
           className="pe-icon--calendar-18">
        <use xlinkHref="#calendar-18"></use>
      </svg>
    </button>
    <button type="button" className="pe-btn__cta" aria-label="End date" style={marginFour}>
      CTA large with icon
      <svg aria-hidden="true"
           focusable="false"
           className="pe-icon--calendar-18">
        <use xlinkHref="#calendar-18"></use>
      </svg>
    </button>
    <button type="button" className="pe-btn__primary--btn_xlarge" aria-label="End date" style={marginFour}>
      Primary xLarge with icon
      <svg aria-hidden="true"
           focusable="false"
           className="pe-icon--calendar-18">
        <use xlinkHref="#calendar-18"></use>
      </svg>
    </button>

    <p>With size-24 icon:</p>
    <button type="button" className="pe-btn--btn_small" aria-label="End date" style={marginFour}>
      Small with icon
      <svg aria-hidden="true"
           focusable="false"
           className="pe-icon--calendar-24">
        <use xlinkHref="#calendar-24"></use>
      </svg>
    </button>
    <button type="button" className="pe-btn__cta" aria-label="Start date" style={marginFour}>
      CTA large with icon
      <svg aria-hidden="true"
           focusable="false"
           className="pe-icon--calendar-24">
        <use xlinkHref="#calendar-24"></use>
      </svg>
    </button>
    <button type="button" className="pe-btn__primary--btn_xlarge" aria-label="Start date" style={marginFour}>
      Primary xLarge with icon
      <svg aria-hidden="true"
           focusable="false"
           className="pe-icon--calendar-24">
        <use xlinkHref="#calendar-24"></use>
      </svg>
    </button>

    <p className="code">
      {`<button type="button" class="pe-btn--btn_small" aria-label="Start date">`} <br/>
      Small with icon
      <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-18">`} <br/></div>
      <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-18"></use>`} <br/></div>
      <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
      {`</button>`}<br/>
      {`<button type="button" class="pe-btn__cta" aria-label="End date">`} <br/>
      CTA large with icon
      <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-18">`} <br/></div>
      <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-18"></use>`} <br/></div>
      <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
      {`</button>`}<br/>
      {`<button type="button" class="pe-btn__primary--btn_xlarge" aria-label="End date">`} <br/>
      Primary xLarge with icon
      <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-18">`} <br/></div>
      <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-18"></use>`} <br/></div>
      <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
      {`</button>`}<br/>
      {`<button type="button" class="pe-btn--btn_small" aria-label="End date">`} <br/>
      Small with icon
      <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-24">`} <br/></div>
      <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-24"></use>`} <br/></div>
      <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
      {`</button>`}<br/>
      {`<button type="button" class="pe-btn__cta" aria-label="Start date">`} <br/>
      CTA large with icon
      <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-24">`} <br/></div>
      <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-24"></use>`} <br/></div>
      <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
      {`</button>`}<br/>
      {`<button type="button" class="pe-btn__primary--btn_xlarge" aria-label="End date">`} <br/>
      Primary xLarge with icon
      <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
      <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-24">`} <br/></div>
      <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-24"></use>`} <br/></div>
      <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
      {`</button>`}
    </p>

  </div>
);

export default StylesButtonPage;
