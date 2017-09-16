import React from 'react';

const marginFour = {marginRight: 4};

const StylesButtonPage = () => (
    <div style={{padding: 14}}>
        <h1>Buttons</h1>

        <p>Use a button to represent a user action&#8212; specifically, pressing it should perform an action on a page
            or document, rather than navigating a user elsewhere. These button styles
            are generally intended for content buttons rather than UI buttons. See below for <a href="#uibuttons">UI
                buttons</a>.</p>
        <button className="pe-btn" style={marginFour}>Default</button>
        <button className="pe-btn pe-btn-primary pe-btn-xl" style={marginFour}>Primary</button>
        <button className="pe-btn pe-btn-cta">Call To Action</button>
        <p className="code" style={{marginTop: 12, marginBottom: 16}}>
            {`<button class="pe-btn">Default</button>`} <br/>
            {`<button class="pe-btn pe-btn-primary pe-btn-xl">Primary</button>`} <br/>
            {`<button class="pe-btn pe-btn-cta">Call To Action</button>`}
        </p>

        <h2>Elements</h2>

        <p style={{marginBottom: 12}}>Button classes can be used with {`<div>`}, {`<span>`}, {`<a>`}, {`<button>`},
            and {`<input>`} elements. But try very hard not to use button styles on divs, spans, or links.</p>
        <div className="pe-btn" tabindex="0" role="button" style={marginFour}>Div</div>
        <a href="#void" className="pe-btn" role="button" style={marginFour}>Link</a>
        <a href="#void" className="pe-btn pe-btn-primary pe-btn-xl" role="button" style={marginFour}>Large Primary
            Link</a>
        <button type="button" className="pe-btn" style={marginFour}>Button</button>
        <input className="pe-btn" type="submit" value="Submit" style={marginFour}/>
        <button type="button" className="pe-btn-link" style={marginFour}>Button</button>
        <button type="button" className="pe-btn-link" style={marginFour}>Link button 2.0</button>
        <button type="button" className="pe-btn-link" disabled style={marginFour}>Disabled link button 2.0</button>
        <p className="code">
            {`<div class="pe-btn" tabindex="0" role="button">Div</div>`} <br/>
            {`<a href="#void" class="pe-btn" role="button">Link</a>`} <br/>
            {`<a href="#void" class="pe-btn pe-btn-primary pe-btn-xl" role="button">Large Primary Link</a>`} <br/>
            {`<button type="button" class="pe-btn">Button</button>`} <br/>
            {`<input class="pe-btn" type="submit" value="Submit" />`} <br/>
            {`<button type="button" class="pe-btn-link">Button</button>`} <br/>
            {`<button type="button" class="pe-btn-link">Link button 2.0</button>`} <br/>
            {`<button type="button" class="pe-btn-link" disabled>Disabled link button 2.0</button>`} <br/>
        </p>

        <aside>
            <h3 className="pe-title">Accessibility: Using non-button elements</h3>
            <p>Where possible, prefer native HTML buttons {`(<button>, <input type="button">) etc`} over other elements
                styled as buttons, so that the User Agent and the OS do most of the work for you.</p>
            <p>If using an element other than a native HTML button, add the <a
                href="http://www.w3.org/TR/wai-aria/roles#button"><code>role="button"</code></a> attribute, and script
                in both click and keyup/down listeners (detect both spacebar and enter keys) to recreate button
                behavior. Also since buttons and inputs (but not divs, spans, or anchors) have a native disabled
                attribute, add <a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-disabled"><code>aria-disabled</code></a>
                to elements you want to disable, as well as manually changing the <code>tabindex</code> value to
                <code>{-1}</code> (or removing it in the case of non-natively focusables like div and span) to prevent
                average keyboarders from being able to tab to it (disabled elements cannot be in the tab order).</p>

            <p>Another thing to be aware of that developers sometimes miss, is that because a focusable, interactive
                element is <strong>not</strong> allowed inside a button (ie, <span
                    style={{color: '#b00'}}>{`<button>Im button text<a href="somewhere"> with a link</a></button>`}</span>),
                the same rule holds for divs or other elements turned into buttons with <code>tabindex</code> and <code>role=button</code>,
                even though an HTML validator currently wont flag this. This also holds true for polyfilled <b>details/summary</b>
                elements!</p>
        </aside>

        <h2>Disabled</h2>

        <p>Buttons can be disabled when an action is not available to the user for the current context. Primary and call
            to action buttons have no disabled state.</p>
        <button className="pe-btn" disabled>Default</button>
        <br/><br/>
        <p className="code">{`<button class="pe-btn" disabled>Default</button>`}</p>

        <p>For elements that do not support the `disabled` attribute, use `pe-btn-disabled` and `aria-disabled`.</p>
        <div className="pe-btn pe-btn-disabled" aria-disabled="true">Not a button</div>
        <br/><br/>
        <p className="code">{`<div class="pe-btn pe-btn-disabled" aria-disabled="true">Not a button</div>`}</p>

        <h2>Sizes</h2>

        <p>Buttons can be made smaller or larger.</p>
        <button className="pe-btn" style={marginFour}>Small</button>
        <button className="pe-btn pe-btn-cta pe-btn-lg" style={marginFour}>CTA Large</button>
        <button className="pe-btn pe-btn-primary pe-btn-xl">Primary xLarge</button>

        <p className="code" style={{padding: 8}}>
            {`<button class="pe-btn">Small</button>`} <br/>
            {`<button class="pe-btn pe-btn-cta pe-btn-lg">CTA Large</button>`} <br/>
            {`<button class="pe-btn pe-btn-primary pe-btn-xl">Primary xLarge</button>`}
        </p>

        <h2>Text overflow</h2>

        <p>When the width of the buttons text exceeds the container width, it will be truncated with an ellipsis.
            <strong>However, you should generally avoid using long text strings with buttons.</strong></p>
        <button className="pe-btn" style={{maxWidth: 200, marginBottom: 10}}>The quick brown fox jumps over the lazy
            dog.
        </button>

        <p className="code">
            {`<button class="pe-btn" style="max-width: 200px">The quick brown fox jumps over the lazy dog.</button>`}
        </p>

        <h2 id="uibuttons">UI Buttons</h2>

        <p>Some buttons, such as "close" buttons or accordion toggles (so-called UI buttons) may in the design not match
            any of the above content buttons, but may only contain an icon (see <a href="#styles-icons">icons
                documentation</a>). The class `pe-btn-icon` removes default button styles such as padding or border,
            allowing the icon alone to represent the control.</p>
        <p>Keep in mind that with just a loose icon, the context needs to make it clear to users that the icon
            represents a control rather than a decoration.</p>

        <button type="button" className="pe-btn-icon">
            <svg role="img"
                 aria-labelledby="b1"
                 focusable="false"
                 className="pe-icon--remove-lg-24">
                <title id="b1">Close dialog</title>
                <use xlinkHref="#remove-lg-24"></use>
            </svg>
        </button>

        <p className="code">
            {`<button type="button" class="pe-btn-icon">`}
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
        <button type="button" className="pe-btn" aria-label="Start date" style={marginFour}>
            Small with icon <svg aria-hidden="true"
                 focusable="false"
                 className="pe-icon--calendar-18">
                <use xlinkHref="#calendar-18"></use>
            </svg>
        </button>
        <button type="button" className="pe-btn pe-btn-lg pe-btn-cta" aria-label="End date" style={marginFour}>
            CTA large with icon <svg aria-hidden="true"
                 focusable="false"
                 className="pe-icon--calendar-18">
                <use xlinkHref="#calendar-18"></use>
            </svg>
        </button>
        <button type="button" className="pe-btn pe-btn-primary pe-btn-xl" aria-label="Start date">
            Primary xLarge with icon <svg aria-hidden="true"
                 focusable="false"
                 className="pe-icon--calendar-18">
                <use xlinkHref="#calendar-18"></use>
            </svg>
        </button>

        <p>With size-24 icon:</p>
        <button type="button" className="pe-btn" aria-label="End date" style={marginFour}>
            Small with icon <svg aria-hidden="true"
                 focusable="false"
                 className="pe-icon--calendar-24">
                <use xlinkHref="#calendar-24"></use>
            </svg>
        </button>
        <button type="button" className="pe-btn pe-btn-lg pe-btn-cta" aria-label="Start date" style={marginFour}>
            CTA large with icon <svg aria-hidden="true"
                 focusable="false"
                 className="pe-icon--calendar-24">
                <use xlinkHref="#calendar-24"></use>
            </svg>
        </button>
        <button type="button" className="pe-btn pe-btn-primary pe-btn-xl" aria-label="End date">
            Primary xLarge with icon <svg aria-hidden="true"
                 focusable="false"
                 className="pe-icon--calendar-24">
                <use xlinkHref="#calendar-24"></use>
            </svg>
        </button>

        <p className="code">
            {`<button type="button" class="pe-btn" aria-label="Start date">`} <br/>
            Small with icon
            <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-18">`} <br/></div>
            <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-18"></use>`} <br/></div>
            <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
            {`</button>`}<br/><br/>
            {`<button type="button" class="pe-btn pe-btn-lg pe-btn-cta" aria-label="End date">`} <br/>
            CTA large with icon
            <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-18">`} <br/></div>
            <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-18"></use>`} <br/></div>
            <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
            {`</button>`}<br/><br/>
            {`<button type="button" class="pe-btn pe-btn-primary pe-btn-xl" aria-label="Start date">`} <br/>
            Primary xLarge with icon
            <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-18">`} <br/></div>
            <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-18"></use>`} <br/></div>
            <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
            {`</button>`}<br/><br/>
            {`<button type="button" class="pe-btn" aria-label="End date">`} <br/>
            Small with icon
            <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-24">`} <br/></div>
            <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-24"></use>`} <br/></div>
            <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
            {`</button>`}<br/><br/>
            {`<button type="button" class="pe-btn pe-btn-lg pe-btn-cta" aria-label="Start date">`} <br/>
            CTA large with icon
            <div style={{paddingLeft: 8}}>{`<svg aria-hidden="true"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`focusable="false"`} <br/></div>
            <div style={{paddingLeft: 36}}>{`class="pe-icon--calendar-24">`} <br/></div>
            <div style={{paddingLeft: 16}}>{`<use xlink:href="#calendar-24"></use>`} <br/></div>
            <div style={{paddingLeft: 8}}>{`</svg>`} <br/></div>
            {`</button>`}<br/><br/>
            {`<button type="button" class="pe-btn pe-btn-primary pe-btn-xl" aria-label="End date">`} <br/>
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
