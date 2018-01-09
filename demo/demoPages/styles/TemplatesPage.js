import React from 'react';

const eight = {paddingLeft: 8};
const sixteen = {paddingLeft: 16};
const twentyFour = {paddingLeft: 24};

const TemplatesPage = () => (
  <div style={{padding: 14}}>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/templates/">Templates</a></h1>
    <p>A standard set of page structures for a variety of use cases.
       Templates provide a way of organizing and structuring the content of a page in a consistent and responsive way. There are a variety of templates available for everything from simple single column presentations to more complicated multi-column structures.
    </p>

    <p>Several Presentation Strategies are available for organization of content within the layout areas provided by each templates.</p>

    <p>Feature List:</p>
    <ul>
      <li>Consistent dimensions for a variety of useful page structures</li>
      <li>Responsive strategies for each template</li>
      <li>Accessible implementation</li>
    </ul>

    <p>Usage Guidelines:</p>
    <ul>
      <li>Every page should utilize one or more of these templates to create its high level structure.</li>
    </ul>

    <h2>Single Column</h2>
    <p>The simplest page template, it takes up the full 12 columns available at every breakpoint.</p>

    <p>Dimensions:</p>
    <ul>
      <li>Full 12 column width at all breakpoints</li>
    </ul>
    <p>Responsive:</p>
    <ul>
      <li>Maintain full 12 column width</li>
    </ul>

    <div className='pe-template__single' style={{background:'magenta'}}>
      <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;'>`} <br/>
        <div style={eight}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
      {`</div>`}
    </div>

    <p>The simplest page template, it takes up the full 10 columns available at every breakpoint.</p>

    <p>Dimensions:</p>
    <ul>
      <li>Full 10 column width at all breakpoints</li>
    </ul>

    <p>Responsive:</p>
    <ul>
      <li>Maintain full 10 column width</li>
    </ul>

    <div className='pe-template__single-10-col' style={{background:'magenta'}}>
      <h6 style={{background:'cyan',textAlign:'center', height:40}}>Content Area</h6>
    </div>

    <div className="code">
      {`<div class='pe-template__single-10-col' style='background:magenta;'>`} <br/>
        <div style={eight}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
      {`</div>`}
    </div>

    <h2>Two Column</h2>
    <p>This template devotes 8 columns to a main content area and the remaining 4 to a sidebar which appears on either side. At medium and smaller breakpoints the content areas stack, with the option to put the sidebar above or below the main content area.</p>
    <b>** Option to put sidebar above and below currently on hold</b>

    <p>Dimensions:</p>
    <ul>
      <li>Full 12 column width at all breakpoints</li>
    </ul>

    <p>Responsive:</p>
    <ul>
      <li>Maintain full 12 column width</li>
    </ul>

    <h4>Two Column 4/8 - (right)</h4>

    <div className='pe-template__double' style={{background:'magenta'}}>
      <div className='pe-template__double--main'>
        <h6 style={{background:'cyan', textAlign:'center', height:40}}>Content Area</h6>
      </div>
      <div className="pe-template__double--sidebar">
        <h6 style={{background:'cyan', textAlign:'center', height:40}}>Sidebar Area</h6>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__double' style='background:magenta;'>`}
        <div style={eight}>{`<div class='pe-template__double--main'>`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class="pe-template__double--sidebar">`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Sidebar Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h4>Two Column 4/8 - (left)</h4>

    <div className='pe-template__double' style={{background:'magenta'}}>
      <div className="pe-template__double--sidebar">
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Sidebar Area</h6>
      </div>
      <div className='pe-template__double--main'>
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__double' style='background:magenta;'>`} <br/>
        <div style={eight}>{`<div class="pe-template__double--sidebar">`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Sidebar Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-template__double--main'>`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h4>Two Column 6/6</h4>

    <div className='pe-template__double' style={{background:'magenta'}}>
      <div className='pe-template__double--main_half'>
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
      </div>
      <div className="pe-template__double--sidebar_half">
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Sidebar Area</h6>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__double' style='background:magenta;'>`} <br/>
        <div style={eight}>{`<div class='pe-template__double--main_half'>`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class="pe-template__double--sidebar_half">`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Sidebar Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h2>Three Column</h2>
    <p>This template devotes 4 columns to all content areas. To use add class `pe-template__triple pe-template__triple-[size]`. See below code for example. Using -md would mean that you want the columns to stack when the width is {'<'} 768px. By default (using just ` pe-template__triple`) the columns stack at lg screen size or {'<'} 1024px.</p>

    <p>Note:</p>
    <ul>
      <li>Class size xl does not work</li>
    </ul>

    <p>Dimensions:</p>
    <ul>
      <li>Full 12 column width at all breakpoints</li>
    </ul>

    <p>Responsive:</p>
    <ul>
      <li>Maintain full 12 column width</li>
    </ul>

    <div className='pe-template__triple pe-template__triple-md' style={{background:'magenta'}}>
      <div className="pe-template__triple--content">
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
      </div>
      <div className='pe-template__triple--content'>
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
      </div>
      <div className='pe-template__triple--content'>
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__triple pe-template__triple-md' style='background:magenta;'>`} <br/>
        <div style={eight}>{`<div class="pe-template__triple--content">`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-template__triple--content'>`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-template__triple--content'>`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h2>Static Column</h2>
    <p>The static column presents a single column of fixed width which is centered in the page. At smaller breakpoints it transitions to full width fluid behavior. This column comes in three different sizes; small, medium and large.</p>

    <p>Dimensions:</p>
    <ul>
      <li>The large size is 800px wide at large breakpoints and larger</li>
      <li>Teh small size is 480 px wide at medium breakpoints and larger</li>
    </ul>

    <p>Responsive:</p>
    <ul>
      <li>Below the breakpoints mentioned above, both sizes become 10 grid columns wide and centered</li>
      <li>Below the small breakpoint both sizes become the full 12 column width</li>
    </ul>

    <div className='pe-template__static-medium'>
      <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
    </div>

    <div className="code">
      {`<div class='pe-template__static-medium'>`} <br/>
        <div style={eight}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
      {`</div>`}
    </div>

    <h2>Shared Features</h2>
    <p>Spacing:</p>
    <ul>
      <li>Directly adjoining templates have no vertical space between them</li>
      <li>Small Gap is 40px total</li>
      <li>Large Gap is 80px total</li>
    </ul>

    <p>Backgrounds and Borders:</p>
    <ul>
      <li>Each template section may include a full width border (either color or image)</li>
      <li>Two template sections may be divided with a border that is either full page width or just 12 columns wide</li>
    </ul>

    <h4>Direction Adjoining - (Default)</h4>

    <div className='pe-template__single' style={{background:'magenta'}}>
      <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
    </div>
    <div className='pe-template__double' style={{background:'magenta'}}>
      <div className='pe-template__double--main'>
        <h6 style={{background:'lightblue',textAlign:'center',height:40}}>Content Area</h6>
      </div>
      <div className='pe-template__double--sidebar'>
        <h6 style={{background:'lightblue',textAlign:'center',height:40}}>SideBar Area</h6>
      </div>
    </div>
    <div className='pe-template__single' style={{background:'magenta'}}>
      <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;'>`} <br/>
        <div style={eight}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
      {`</div>`} <br/>
      {`<div class='pe-template__double' style='background:magenta;'>`} <br/>
        <div style={eight}>{`<div class='pe-template__double--main'>`}</div>
          <div style={sixteen}>{`<h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-template__double--sidebar'>`}</div>
          <div style={sixteen}>{`<h6 style='background:lightblue;text-align:center;height:40px;'>SideBar Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`} <br/>
      {`<div class='pe-template__single' style='background:magenta;'>`} <br/>
        <div style={eight}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
      {`</div>`}
    </div>

    <h4>Standard Spacing</h4>

    <div className='pe-template__small-gap'>
      <div className='pe-template__single' style={{background:'magenta'}}>
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
      </div>
      <div className='pe-template__double' style={{background:'magenta'}}>
        <div className='pe-template__double--main'>
          <h6 style={{background:'lightblue',textAlign:'center',height:40}}>Content Area</h6>
        </div>
        <div className='pe-template__double--sidebar'>
          <h6 style={{background:'lightblue',textAlign:'center',height:40}}>SideBar Area</h6>
        </div>
      </div>
      <div className='pe-template__single' style={{background:'magenta'}}>
        <h6 style={{background:'lightblue',textAlign:'center',height:40}}>Content Area</h6>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__small-gap'>`} <br/>
        <div style={eight}>{`<div class='pe-template__single' style='background:magenta;'>`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-template__double' style='background:magenta;'>`}</div>
          <div style={sixteen}>{`<div class='pe-template__double--main'>`}</div>
            <div style={twentyFour}>{`<h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>`}</div>
          <div style={sixteen}>{`</div>`}</div>
          <div style={sixteen}>{`<div class='pe-template__double--sidebar'>`}</div>
            <div style={twentyFour}>{`<h6 style='background:lightblue;text-align:center;height:40px;'>SideBar Area</h6>`}</div>
          <div style={sixteen}>{`</div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-template__single' style='background:magenta;'>`}</div>
          <div style={sixteen}>{`<h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h4>Large Spacing</h4>

    <div className='pe-template__large-gap'>
      <div className='pe-template__single' style={{background:'magenta'}}>
        <h6 style={{background:'cyan',textAlign:'center',height:40}}>Content Area</h6>
      </div>
      <div className='pe-template__double' style={{background:'magenta'}}>
        <div className='pe-template__double--main'>
          <h6 style={{background:'lightblue',textAlign:'center',height:40}}>Content Area</h6>
        </div>
        <div className='pe-template__double--sidebar'>
          <h6 style={{background:'lightblue',textAlign:'center',height:40}}>SideBar Area</h6>
        </div>
      </div>
      <div className='pe-template__single' style={{background:'magenta'}}>
        <h6 style={{background:'lightblue',textAlign:'center',height:40}}>Content Area</h6>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__large-gap'>`}
        <div style={eight}>{`<div class='pe-template__single' style='background:magenta;'>`}</div>
          <div style={sixteen}>{`<h6 style='background:cyan;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-template__double' style='background:magenta;'>`}</div>
          <div style={sixteen}>{`<div class='pe-template__double--main'>`}</div>
            <div style={twentyFour}>{`<h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>`}</div>
          <div style={sixteen}>{`</div>`}</div>
          <div style={sixteen}>{`<div class='pe-template__double--sidebar'>`}</div>
            <div style={twentyFour}>{`<h6 style='background:lightblue;text-align:center;height:40px;'>SideBar Area</h6>`}</div>
          <div style={sixteen}>{`</div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-template__single' style='background:magenta;'>`}</div>
          <div style={sixteen}>{`<h6 style='background:lightblue;text-align:center;height:40px;'>Content Area</h6>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

  </div>
);

export default TemplatesPage;
