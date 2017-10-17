import React from 'react';

const eight = {paddingLeft: 8};
const sixteen = {paddingLeft: 16};

const GridPage = () => (
  <div style={{padding: 14}}>
    <h1>Grid</h1>
    <p>A low level framework for positioning elements on the page.
      <a href="https://pearson-higher-ed.github.io/design/c/grid/">Design and Redlines</a>
    </p>

    <h2>Equal Columns</h2>

    <p>pe-col-1</p>
    <div className="pe-container">
      <div className='pe-row'>
        <div className="pe-col-1"><p style={{background:'cyan'}}>one</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>two</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>three</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>four</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>five</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>six</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>seven</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>eight</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>nine</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>ten</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>eleven</p></div>
        <div className="pe-col-1"><p style={{background:'cyan'}}>twelve</p></div>
      </div>
    </div>

    <p className="code">
      {`<p>pe-col-1</p>`} <br/>
      {`<div class="pe-container">`} <br/>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">one</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">two</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">three</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">four</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">five</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">six</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">seven</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">eight</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">nine</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">ten</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">eleven</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">twelve</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </p>

    <h2>Span multiple columns</h2>

    <div className="pe-container">
      <div className='pe-row'>
        <div className="pe-col-4"><p style={{background:'cyan'}}>one</p></div>
        <div className="pe-col-4"><p style={{background:'cyan'}}>two</p></div>
        <div className="pe-col-4"><p style={{background:'cyan'}}>three</p></div>
      </div>
    </div>

    <p className="code">
      {`<div class="pe-container">`} <br/>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-4"><p style="background:cyan">one</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-4"><p style="background:cyan">two</p></div>`}</div>
          <div style={sixteen}>{`<div class="pe-col-4"><p style="background:cyan">three</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </p>

    <h2>Span columns</h2>

    <div className="pe-container">
      <div className='pe-row'>
        <div className="pe-col-1"><p style={{background:'cyan'}}>one</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-2"><p style={{background:'cyan'}}>two</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-3"><p style={{background:'cyan'}}>three</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-4"><p style={{background:'cyan'}}>four</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-5"><p style={{background:'cyan'}}>five</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-6"><p style={{background:'cyan'}}>six</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-7"><p style={{background:'cyan'}}>seven</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-8"><p style={{background:'cyan'}}>eight</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-9"><p style={{background:'cyan'}}>nine</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-10"><p style={{background:'cyan'}}>ten</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-11"><p style={{background:'cyan'}}>eleven</p></div>
      </div>
      <div className='pe-row'>
        <div className="pe-col-12"><p style={{background:'cyan'}}>twelve</p></div>
      </div>
    </div>

    <p className="code">
      {`<div class="pe-container">`} <br/>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-1"><p style="background:cyan">one</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-2"><p style="background:cyan">two</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-3"><p style="background:cyan">three</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-4"><p style="background:cyan">four</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-5"><p style="background:cyan">five</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-6"><p style="background:cyan">six</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-7"><p style="background:cyan">seven</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-8"><p style="background:cyan">eight</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-9"><p style="background:cyan">nine</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-10"><p style="background:cyan">ten</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-11"><p style="background:cyan">eleven</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-row'>`}</div>
          <div style={sixteen}>{`<div class="pe-col-12"><p style="background:cyan">twelve</p></div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </p>



    <h2>Feature list</h2>
    <ul>
      <li>Adapts to standard breakpoints</li>
      <li>Consistent fluid behavior</li>
      <li>Handy 12 column grid that can support many layouts</li>
      <li>Integration with Templates component for easy usage</li>
    </ul>

    <h2>Usage guidelines</h2>
    <p>You should generally not use this component directly, prefer instead to use Templates and Presentation Strategies in your designs.</p>

    <h2>Grid structure</h2>
    <p>The grid consists of four key parts: the Container, Container Margins, Columns, and Gutters.</p>

    <p>All columns reside within the Container, which is located at the root level of a page. Depending on the breakpoint, the container will have Container Margins of various sizes. The container also has a maximum width property, beyond which only the container margins grow in size.</p>

    <p>The container is divided into 12 proportional Columns which contain actual content. These are separated by Gutters of a fixed size (which varies based on the breakpoint again).</p>

    <p>See the redlines for the exact dimensions of each feature at each breakpoint.</p>

    <h2>Redline details</h2>
    <p>Container: Maximum width of 1140px & always horizontally centered</p>

    <p>Container Margins: ≥ 40px at Large and Extra Large breakpoints 20px at Small and Medium breakpoints 10px at Extra Small breakpoints</p>

    <p>Gutters: 40px at Medium and larger breakpoints 20px at Small breakpoints 10px at Extra Small breakpoints</p>

    <p>Columns: Equal widths, size determined by remaining space after accounting for the container width and gutter size</p>

  </div>
);

export default GridPage;
