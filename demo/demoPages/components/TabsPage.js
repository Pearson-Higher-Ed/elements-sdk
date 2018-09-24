import React from 'react';
import { Tabs, Pane } from '../../../index';

const pad = {padding: 12};
const eight = {paddingLeft: 8};
const sixteen = {paddingLeft: 16};

const testHandler = function(i){
  // test handler
  //console.log(i)
}

const TabsPage = () => (
  <div className="displaySection">
    <h2><a href="http://pearson-higher-ed.github.io/design/c/tab-navigation/beta/">Tabs</a></h2>
    <div className="elementContainer">
      <div className='tab-reposition-demo'>
      <Tabs
        callback={testHandler} bar
      >
        <Pane label="Tabby">
          <div style={pad}>A bunch of words in Tab 1</div>
        </Pane>
        <Pane label="Tabetha">
          <div style={pad}>More words in Tab 2</div>
        </Pane>
        <Pane label="Tabberino">
          <div style={pad}>You get the point</div>
        </Pane>
      </Tabs>
      </div>

      <h3>Example usage</h3>
        <p className="code">
          {`<Tabs bar>`} <br/>
          <div style={eight}>{`<Pane label="Tabby">`} <br/> </div>
          <div style={sixteen}>{`<div>Tab 1</div>`} <br/> </div>
          <div style={eight}>{`</Pane>`} <br/> </div>
          <div style={eight}>{`<Pane label="Tabetha">`} <br/> </div>
          <div style={sixteen}>{`<div>Tab 2</div>`} <br/> </div>
          <div style={eight}>{`</Pane>`} <br/> </div>
          <div style={eight}>{`<Pane label="Tabberino">`} <br/> </div>
          <div style={sixteen}>{`<div>Tab 3</div>`} <br/> </div>
          <div style={eight}>{`</Pane>`} <br/> </div>
          {`</Tabs>`}
        </p>

      <div className="code">
        <h3>Tab Props</h3>
        <h4>Required:</h4>
        <ul>
          <li className="li-props">children:Array || Element</li>
        </ul>
        <h4>Optional:</h4>
        <ul>
          <li className="li-props">add a callback to communicate with a higher order component {`<Tabs callback={function}>`}</li>
          <li className="li-props">selected:Number === {`<Tabs selected={2}>`}</li>
          <li className="li-props">The selected prop can be passed the index of
          the tab you would like active on page load. <br/>
          Defaults to 0 if nothing is passed.</li>
          <li className="li-props">light:Boolean === {`<Tabs light>`}</li>
          <li className="li-props">The light prop can be used to provide contrast
          on a darker background. <br/>Defaults to false.</li>
          <li className="li-props">bar:Boolean === {`<Tabs bar>`}</li>
          <li className="li-props">The bar prop can be used to provide bar style tabs. <br/>Defaults to false.</li>
        </ul>

        <h3>Pane Props</h3>
        <h4>Required:</h4>
        <ul>
          <li className="li-props">label:String === "Your Pane label"</li>
          <li className="li-props">children:Element</li>
        </ul>
        <h4>Optional:</h4>
        <ul>
          <li className="li-props">onActive:Function</li>
          <li className="li-props">Callback function that is fired when the Pane is activated</li>
        </ul>
      </div>
    </div>
  </div>
);

export default TabsPage;
