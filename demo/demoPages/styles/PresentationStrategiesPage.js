import React from 'react';

const eight = {paddingLeft: 8};
const sixteen = {paddingLeft: 16};

const PresentationStrategiesPage = () => (
  <div style={{padding: 14}}>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/presentation-strategies/">Presentation Strategies</a></h1>

    <p>This component provides several standard strategies for presenting content within a layout template.
        Layout Templates help you structure a page at a high level and chunk it into major layout areas.
        Presentation strategies operate at one level lower, helping to actually fill out those layout areas
        in a standard and rational way. </p>

    <p>Feature List</p>
    <ul>
      <li>Support for common layout patterns</li>
      <li>Full integration with the standard templates</li>
    </ul>

    <p>Usage Guidelines</p>
    <ul>
      <li>All content within a template should specify a presentation strategy to use.</li>
    </ul>

    <h3>Overview</h3>
    <p>Each strategy defines the location of one or more content areas which should each contain a single piece of content.</p>

    <h3>Stacking</h3>
    <p>Similarly to the templates themselves, strategies can be combined into stacks within a given template area.</p>

    <h3>Spacing</h3>
    <p>Stacked strategies have the same spacing options as templates: Directly Adjoining, Small Gap, and Large Gap.</p>

    <h3>Responsive behavior</h3>
    <p>Strategies don’t include inherent responsive behavior, preferring instead to leave that up to their containing templates. More advanced designs may change between various strategies at the standard breakpoints.</p>

    <h2>Default</h2>
    <p>The default strategy is the normal browser layout flow of left aligning content.</p>

    <div className='pe-template__single' style={{background:'magenta', width:300}}>
      <div className='pe-strategy__default'>
        <div style={{background:'cyan', textAlign: 'center', height: 40, width: 100}}>Content Area</div>
        <div style={{background:'blueViolet',textAlign:'center',height:40,width:100}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:300px;'>`} <br/>
        <div style={eight}>{`<div class='pe-strategy__default'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h2>Centered</h2>
    <p>The centered strategy simply centers its contents within the containing area.</p>

    <div className='pe-template__single' style={{background:'magenta', width:300}}>
      <div className='pe-strategy__centered'>
        <div style={{background:'cyan', textAlign:'center', height:40, width:100}}>Content Area</div>
        <div style={{background:'blueViolet',textAlign:'center',height:40,width:100}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:300px;'>`} <br/>
        <div style={eight}>{`<div class='pe-strategy__centered'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h2>Left/Right</h2>
    <p>This strategy aligns one chunk of content to the left and another chunk to the right.</p>

    <div className='pe-template__single' style={{background:'magenta', width:300}}>
      <div className='pe-strategy__left_right'>
        <div style={{background:'cyan',textAlign:'center',height:40,width:100}}>Content Area</div>
        <div style={{background:'blueViolet',textAlign:'center',height:40,width:100}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:300px;'>`} <br/>
        <div style={eight}>{`<div class='pe-strategy__left_right'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h2>Basic Grid</h2>
    <p>The basic grid strategy arranges equally sized chunks of content into two, three, or four rows. Each chunk should maintain the same height. The gutter size is configurable to be either small (10px) or large (20px). Chunks fill the content area in a left-to-right, top-to-bottom pattern.</p>

    <h4>Basic Grid (--small-2col)</h4>

    <div className='pe-template__single' style={{background:'magenta',width:'100%',height:140}}>
      <div className='pe-strategy__basic-grid--small-2col'>
        <div style={{background:'cyan', textAlign:'center'}}>Content Area</div>
        <div style={{background:'blueViolet', textAlign:'center'}}>Content Area</div>
        <div style={{background:'whiteSmoke', textAlign:'center'}}>Content Area</div>
        <div style={{background:'greenYellow', textAlign:'center'}}>Content Area</div>
        <div style={{background:'lightBlue', textAlign:'center'}}>Content Area</div>
        <div style={{background:'BurlyWood', textAlign:'center'}}>Content Area</div>
        <div style={{background:'HotPink', textAlign:'center'}}>Content Area</div>
        <div style={{background:'OliveDrab', textAlign:'center'}}>Content Area</div>
        <div style={{background:'Orange', textAlign:'center'}}>Content Area</div>
        <div style={{background:'Plum', textAlign:'center'}}>Content Area</div>
        <div style={{background:'Silver', textAlign:'center'}}>Content Area</div>
        <div style={{background:'SlateBlue', textAlign:'center'}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:100%;height:140px;'>`} <br/>
        <div style={eight}>{`<div class='pe-strategy__basic-grid--small-2col'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:whiteSmoke;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:greenYellow;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:lightBlue;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:BurlyWood;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:HotPink;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:OliveDrab;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Orange;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Plum;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Silver;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:SlateBlue;text-align:center;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h4>Basic Grid (--small-3col)</h4>

    <div className='pe-template__single' style={{background:'magenta',width:'100%',height:90}}>
      <div className='pe-strategy__basic-grid--small-3col'>
        <div style={{background:'cyan', textAlign:'center'}}>Content Area</div>
        <div style={{background:'blueViolet', textAlign:'center'}}>Content Area</div>
        <div style={{background:'whiteSmoke', textAlign:'center'}}>Content Area</div>
        <div style={{background:'greenYellow', textAlign:'center'}}>Content Area</div>
        <div style={{background:'lightBlue', textAlign:'center'}}>Content Area</div>
        <div style={{background:'BurlyWood', textAlign:'center'}}>Content Area</div>
        <div style={{background:'HotPink', textAlign:'center'}}>Content Area</div>
        <div style={{background:'OliveDrab', textAlign:'center'}}>Content Area</div>
        <div style={{background:'Orange', textAlign:'center'}}>Content Area</div>
        <div style={{background:'Plum', textAlign:'center'}}>Content Area</div>
        <div style={{background:'Silver', textAlign:'center'}}>Content Area</div>
        <div style={{background:'SlateBlue', textAlign:'center'}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:100%;height:90px'>`} <br/>
        <div style={eight}>{`<div class='pe-strategy__basic-grid--small-3col'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:whiteSmoke;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:greenYellow;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:lightBlue;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:BurlyWood;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:HotPink;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:OliveDrab;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Orange;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Plum;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Silver;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:SlateBlue;text-align:center;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h4>Basic Grid (--large-2col)</h4>

    <div className='pe-template__single' style={{background:'magenta',width:'100%',height:225}}>
      <div className='pe-strategy__basic-grid--large-2col'>
        <div style={{background:'cyan',textAlign:'center'}}>Content Area</div>
        <div style={{background:'blueViolet',textAlign:'center'}}>Content Area</div>
        <div style={{background:'whiteSmoke',textAlign:'center'}}>Content Area</div>
        <div style={{background:'greenYellow',textAlign:'center'}}>Content Area</div>
        <div style={{background:'lightBlue',textAlign:'center'}}>Content Area</div>
        <div style={{background:'BurlyWood',textAlign:'center'}}>Content Area</div>
        <div style={{background:'HotPink',textAlign:'center'}}>Content Area</div>
        <div style={{background:'OliveDrab',textAlign:'center'}}>Content Area</div>
        <div style={{background:'Orange',textAlign:'center'}}>Content Area</div>
        <div style={{background:'Plum',textAlign:'center'}}>Content Area</div>
        <div style={{background:'Silver',textAlign:'center'}}>Content Area</div>
        <div style={{background:'SlateBlue',textAlign:'center'}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:100%;height:225px;'>`} <br/>
        <div style={eight}>{`<div class='pe-strategy__basic-grid--large-2col'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:whiteSmoke;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:greenYellow;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:lightBlue;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:BurlyWood;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:HotPink;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:OliveDrab;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Orange;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Plum;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:Silver;text-align:center;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:SlateBlue;text-align:center;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h2>Spacing</h2>
    <p>Stacked strategies have the same spacing options as templates: Directly Adjoining, Small Gap, and Large Gap.</p>

    <h4>Directly Adjoining (Default)</h4>

    <div className='pe-template__single' style={{background:'magenta',width:300}}>
      <div className='pe-strategy__centered'>
        <div style={{background:'cyan',textAlign:'center', height:40,width:100}}>Content Area</div>
        <div style={{background:'blueViolet',textAlign:'center', height:40,width:100}}>Content Area</div>
      </div>
      <div className='pe-strategy__centered'>
        <div style={{background:'cyan',textAlign:'center', height:40,width:100}}>Content Area</div>
        <div style={{background:'blueViolet',textAlign:'center', height:40,width:100}}>Content Area</div>
      </div>
      <div className='pe-strategy__centered'>
        <div style={{background:'cyan',textAlign:'center', height:40,width:100}}>Content Area</div>
        <div style={{background:'blueViolet',textAlign:'center', height:40,width:100}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:300px;'>`}
        <div style={eight}>{`<div class='pe-strategy__centered'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-strategy__centered'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-strategy__centered'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h4>Small Gap</h4>

    <div className='pe-template__single' style={{background:'magenta', width:300}}>
      <div className='pe-strategy__centered--small-gap'>
        <div style={{background:'cyan', textAlign:'center',height:40, width:100}}>Content Area</div>
        <div style={{background:'blueViolet', textAlign:'center',height:40, width:100}}>Content Area</div>
      </div>
      <div className='pe-strategy__centered--small-gap'>
        <div style={{background:'cyan', textAlign:'center',height:40, width:100}}>Content Area</div>
        <div style={{background:'blueViolet', textAlign:'center',height:40, width:100}}>Content Area</div>
      </div>
      <div className='pe-strategy__centered--small-gap'>
        <div style={{background:'cyan', textAlign:'center',height:40, width:100}}>Content Area</div>
        <div style={{background:'blueViolet', textAlign:'center',height:40, width:100}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:300px;'>`} <br/>
        <div style={eight}>{`<div class='pe-strategy__centered--small-gap'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-strategy__centered--small-gap'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-strategy__centered--small-gap'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h4>Large gap</h4>

    <div className='pe-template__single' style={{background:'magenta', width:300}}>
      <div className='pe-strategy__centered--large-gap'>
        <div style={{background:'cyan', textAlign:'center', height:40, width:100}}>Content Area</div>
        <div style={{background:'blueViolet', textAlign:'center', height:40, width:100}}>Content Area</div>
      </div>
      <div className='pe-strategy__centered--large-gap'>
        <div style={{background:'cyan', textAlign:'center', height:40, width:100}}>Content Area</div>
        <div style={{background:'blueViolet', textAlign:'center', height:40, width:100}}>Content Area</div>
      </div>
      <div className='pe-strategy__centered--large-gap'>
        <div style={{background:'cyan', textAlign:'center', height:40, width:100}}>Content Area</div>
        <div style={{background:'blueViolet', textAlign:'center', height:40, width:100}}>Content Area</div>
      </div>
    </div>

    <div className="code">
      {`<div class='pe-template__single' style='background:magenta;width:300px;'>`} <br/>
        <div style={eight}>{`<div class='pe-strategy__centered--large-gap'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-strategy__centered--large-gap'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
        <div style={eight}>{`<div class='pe-strategy__centered--large-gap'>`}</div>
          <div style={sixteen}>{`<div style='background:cyan;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
          <div style={sixteen}>{`<div style='background:blueViolet;text-align:center;height:40px;width:100px;'>Content Area</div>`}</div>
        <div style={eight}>{`</div>`}</div>
      {`</div>`}
    </div>

    <h2>Redlines</h2>
    <h3>Strategies</h3>

    <h4>Default</h4>
    <ul>
      <li>Apply no specific positioning, just follow the standard left-aligned browser flow</li>
    </ul>

    <h4>Centered</h4>
    <ul>
      <li>Center the content item horizontally within the container</li>
    </ul>

    <h4> Left / Right</h4>
    <ul>
      <li>One content item is left aligned and the other is right aligned</li>
      <li>Both content items are vertically aligned to their top edges</li>
    </ul>

    <h4>Basic Grid</h4>
    <ul>
      <li>Each content area is either 50%, 33.333333%, or 25% wide (including a gutter’s width)</li>
      <li>Small gutters are 10px, large are 20px</li>
      <li>Negative margins or a similar technique should be used to position the left and right edges of the content areas directly against the edge of the container</li>
      <li>Each item should have the same height</li>
      <li>Items are filled in a left-to-right and then top-to-bottom order</li>
    </ul>

    <h4>Spacing</h4>
    <ul>
      <li>Directly adjoining strategies should have no gap between them</li>
      <li>Small Gap is 40px total</li>
      <li>Large gap is 80px total</li>
    </ul>

  </div>
);

export default PresentationStrategiesPage;
