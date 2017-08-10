import React from 'react';

const padEight = {paddingLeft: 8};
const padSxtn = {paddingLeft: 16};

const FormsPage = () => (
  <div style={{padding: 14}}>
    <h1>Forms</h1>

    <p>The basic form consists of several parts: a form name (class: pe-form--name or pe-form--name-bold), an optional top level error (class: pe-form--error),
    an optional form/error description (pe-form--desc), one or more input fields (contained in class: pe-form--group), and a Next/Submit button (class: pe-btn__cta
    or pe-btn__primary).</p>

    <p className="code">
      {`<form class="pe-form">`} <br/>
      {`</form>`}
    </p>

    <h2>Elements</h2>

    <p>Form classes should be used within a form tag with the pe-form class.  All form elements should be contained within this form tag.</p>

    <h2>Form Name</h2>

    <p>For accessibility purposes, the form name should use a standard HTML header tag (e.g. h1-h6) but should also have the class pe-form--name added to it.  The purpose of this
    class is to insure proper spacing while the HTML header tag will handle typography.</p>

    <h2>Top Level error</h2>

    <p>Individual input fields should present their own errors following the styles dictated for input components.  Fields with errors should always be accompanied by error text,
    unless a top level error message is sufficient to understand and fix the problem(s).</p>

    <p>Top level errors relevant to the form as a whole may be presented above the first input and below the form name.  It should consist of a single line message (class: pe-form--error)
    and then optional chunk of body copy (class: pe-form--desc) that explains the situation in more detail.</p>

    <h2>Form description</h2>

    <p>An optional form description may be added should the form fields themselves be insufficient to properly explain the information requested.  This optional area should be
    standard body copy using the appropriate semantic HTML but should contain the pe-form--desc class in order to enforce proper spacing.</p>

    <h2>Input Fields</h2>

    <p>One or more input fields from the input components may be included in the form.  Each form element must be contained within a container (e.g. div) with the class pe-form--group
    added to insure proper spacing between form fields.  Form fields will occupy 100% of the form width and stack.</p>

    <h2>Next/Submit button</h2>

    <p>The Next/Submit button should start out as a default button and become a primary (pe-btn__primary) or a CTA (pe-btn__cta) once the form has been completely filled out.  Since
    this change cannot be accomplished strictly via CSS, the application will need to detect the circumstances where the button will change upon form completion.</p>

    <p>If the form is broken up into multiple pages, use a "Continue" or "Next" button to advance the form series. Maintain the same form name between each page.  The UI will also need
    to provide the means to return to previous steps in the process when appropriate.</p>

    <form className="pe-form">
      <h1 className="pe-form--name-bold">Form Name</h1>
      <p className="pe-form--error">Initial error description (target one line or less)</p>
      <p className="pe-form--desc">Additional error details or form instructions for the form can go here.  This is optional.</p>
      <div className="pe-form--group">
        <label className="pe-textLabelInput__label" htmlFor="a">First Name</label>
        <input type="text" className="pe-textInput" id="a" placeholder="First Name" />
        <span className="pe-input_underline"></span>
      </div>
      <div className="pe-form--group">
        <label className="pe-textLabelInput__label" htmlFor="b">Last Name</label>
        <input type="text" className="pe-textInput" id="b" placeholder="Last Name" />
        <span className="pe-input_underline"></span>
      </div>
      <button className="pe-btn__cta">Submit</button>
    </form>

    <p className="code">
      {`<form class="pe-form">`}
        <div style={padEight}>{`<h1 class="pe-form--name-bold">Form Name</h1>`}</div>
        <div style={padEight}>{`<p class="pe-form--error">Initial error description (target one line or less)</p>`}</div>
        <div style={padEight}>{`<p class="pe-form--desc">Additional error details or form instructions for the form can go here.  This is optional.</p>`}</div>
        <div style={padEight}>{`<div class="pe-form--group">`}</div>
          <div style={padSxtn}>{`<label class="pe-textLabelInput__label" for="a">First Name</label>`}</div>
          <div style={padSxtn}>{`<input type="text" class="pe-textInput" id="a" placeholder="First Name">`}</div>
          <div style={padSxtn}>{`<span class="pe-input_underline"></span>`}</div>
        <div style={padEight}>{`</div>`}</div>
        <div style={padEight}>{`<div class="pe-form--group">`}</div>
            <div style={padSxtn}>{`<label class="pe-textLabelInput__label" for="b">Last Name</label>`}</div>
            <div style={padSxtn}>{`<input type="text" class="pe-textInput" id="b" placeholder="Last Name">`}</div>
            <div style={padSxtn}>{`<span class="pe-input_underline"></span>`}</div>
        <div style={padEight}>{`</div>`}</div>
        <div style={padEight}>{`<button class="pe-btn__cta">Submit</button>`}</div>
      {`</form>`}
    </p>

  </div>
);

export default FormsPage;
