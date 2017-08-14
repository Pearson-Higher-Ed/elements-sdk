import React from 'react';

const eight = {paddingLeft: 8};
const sixtn = {paddingLeft: 16};

const ResponsiveUtilitiesPage = () => (
  <div style={{padding: 14}}>

    <h2>Responsive breakpoints and media queries</h2>

    <p>The responsive breakpoints are defined as follows:</p>

    <table>
      <tr>
        <th>Breakpoint</th>
        <th>Min width</th>
        <th>Max width</th>
      </tr>
      <tr>
        <td>xs</td>
        <td>0px</td>
        <td>479px</td>
      </tr>
      <tr>
        <td>sm</td>
        <td>480px</td>
        <td>767px</td>
      </tr>
      <tr>
        <td>md</td>
        <td>768px</td>
        <td>1023px</td>
      </tr>
      <tr>
        <td>lg</td>
        <td>1024px</td>
        <td>1279px</td>
      </tr>
      <tr>
        <td>xl</td>
        <td>1280px</td>
        <td></td>
      </tr>
    </table>

    <h3>Advanced usage with Sass</h3>

    <p>If you are using Sass, you can use the `pe-responsive-breakpoint` mixin to generate media queries for a range of breakpoints:</p>

    <code>
      {`// Sass`} <br/>
      {`.foo {`}
      <div style={eight}>{`color: red;`}</div> <br/>
      <div style={eight}>{`@include pe-responsive-breakpoint(sm) {`}</div>
      <div style={sixtn}>{`color: blue;`}</div>
      <div style={eight}>{`}`}</div> <br/>
      <div style={eight}>{`@include pe-responsive-breakpoint(md to lg) {`}</div>
      <div style={sixtn}>{`color: green;`}</div>
      <div style={eight}>{`}`}</div> <br/>
      <div style={eight}>{`@include pe-responsive-breakpoint(to xs)`}</div>
      <div style={sixtn}>{`color: purple;`}</div>
      <div style={eight}>{`}`}</div>
      {`}`}
    </code> <br/><br/>

    <code>
      {`// Generated CSS`} <br/>
      {`.foo {`}
      <div style={eight}>{`color: red;`}</div>
      {`}`} <br/><br/>
      {`@media (min-width: 480px) {`}
      <div style={eight}>{`.foo {`}</div>
      <div style={sixtn}>{`color: blue;`}</div>
      <div style={eight}>{`}`}</div>
      {`}`} <br/><br/>
      {`@media (min-width: 760px) and (max-width: 1279px) {`}
      <div style={eight}>{`.foo {`}</div>
      <div style={sixtn}>{`color: green;`}</div>
      <div style={eight}>{`}`}</div>
      {`}`} <br/><br/>
      {`@media (max-width: 479px) {`}
      <div style={eight}>{`.foo {`}</div>
      <div style={sixtn}>{`color: purple;`}</div>
      <div style={eight}>{`}`}</div>
      {`}`}
    </code>

    <h2>Visibility</h2>

    <p>Visibility helpers are provided to make it easier to control element visibility based on the current breakpoint.</p>

    <table>
      <tr>
        <th>Selector</th>
        <th>Visible</th>
      </tr>
      <tr>
        <td>.pe-xs--visible</td>
        <td><span className="pe-xs--visible">✓</span></td>
      </tr>
      <tr>
        <td>.pe-sm--visible</td>
        <td><span className="pe-sm--visible">✓</span></td>
      </tr>
      <tr>
        <td>.pe-md--visible</td>
        <td><span className="pe-md--visible">✓</span></td>
      </tr>
      <tr>
        <td>.pe-lg--visible</td>
        <td><span className="pe-lg--visible">✓</span></td>
      </tr>
      <tr>
        <td>.pe-xl--visible</td>
        <td><span className="pe-xl--visible">✓</span></td>
      </tr>
      <tr>
        <td>.pe-xs--hidden</td>
        <td><span className="pe-xs--hidden">✓</span></td>
      </tr>
      <tr>
        <td>.pe-sm--hidden</td>
        <td><span className="pe-sm--hidden">✓</span></td>
      </tr>
      <tr>
        <td>.pe-md--hidden</td>
        <td><span className="pe-md--hidden">✓</span></td>
      </tr>
      <tr>
        <td>.pe-lg-hidden</td>
        <td><span className="pe-lg--hidden">✓</span></td>
      </tr>
      <tr>
        <td>.pe-xl-hidden</td>
        <td><span className="pe-xl--hidden">✓</span></td>
      </tr>
    </table>

    <h3>Visible</h3>

    <div className="pe-xs--visible"><code>.pe-xs--visible</code></div>
    <div className="pe-sm--visible"><code>.pe-sm--visible</code></div>
    <div className="pe-md--visible"><code>.pe-md--visible</code></div>
    <div className="pe-lg--visible"><code>.pe-lg--visible</code></div>
    <div className="pe-xl--visible"><code>.pe-xl--visible</code></div>

    <p className="code">
      {`<div class="pe-xs--visible"><code>.pe-xs--visible</code></div>`} <br/>
      {`<div class="pe-sm--visible"><code>.pe-sm--visible</code></div>`} <br/>
      {`<div class="pe-md--visible"><code>.pe-md--visible</code></div>`} <br/>
      {`<div class="pe-lg--visible"><code>.pe-lg--visible</code></div>`} <br/>
      {`<div class="pe-xl--visible"><code>.pe-xl--visible</code></div>`}
    </p>

    <h3>Hidden</h3>

    <div className="pe-xs--hidden"><code>.pe-xs--hidden</code></div>
    <div className="pe-sm--hidden"><code>.pe-sm--hidden</code></div>
    <div className="pe-md--hidden"><code>.pe-md--hidden</code></div>
    <div className="pe-lg--hidden"><code>.pe-lg--hidden</code></div>
    <div className="pe-xl--hidden"><code>.pe-xl--hidden</code></div>

    <p className="code">
      {`<div class="pe-xs--hidden"><code>.pe-xs--hidden</code></div>`} <br/>
      {`<div class="pe-sm--hidden"><code>.pe-sm--hidden</code></div>`} <br/>
      {`<div class="pe-md--hidden"><code>.pe-md--hidden</code></div>`} <br/>
      {`<div class="pe-lg--hidden"><code>.pe-lg--hidden</code></div>`} <br/>
      {`<div class="pe-xl--hidden"><code>.pe-xl--hidden</code></div>`}
    </p>

    <h3>Accessibility</h3>

    <h4>Making content visible to screen readers</h4>

    <p>Sometimes content needs to be hidden visually but remain visible to assistive technology. Add `pe-sr-only` to an element to hide the element on the page so that it is still read by screen readers.</p>

    <p>This paragraph is visible on the screen.</p>
    <p className="pe-sr-only">
      This paragraph is only visible to assistive technologies
      like screen readers.
    </p>

    <p className="code">
    {`<p>This paragraph is visible on the screen.</p>`} <br/>
    {`<p class="pe-sr-only">`} <br/>
      <div style={eight}>{`This paragraph is only visible to assistive technologies`}</div>
      <div style={eight}>{`like screen readers.`}</div>
    {`</p>`}
    </p>

    <h4>Hiding content from screen readers</h4>

    <p>To hide an element from assistive technology, add the <a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden">aria-hidden</a> attribute.</p>

    <p aria-hidden="true">This paragraph is not visible to assistive technologies.</p>

    <p className="code">
      {`<p aria-hidden="true">This paragraph is not visible to assistive technologies.</p>`}
    </p>


  </div>
);

export default ResponsiveUtilitiesPage;
