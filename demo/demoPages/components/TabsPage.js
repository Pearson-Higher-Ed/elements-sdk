import React from 'react';
import { Tabs, Pane } from '../../../index';

const pad = {padding: 12};
const eight = {paddingLeft: 8};
const sixteen = {paddingLeft: 16};

const TabsPage = () => (
  <div className="displaySection">
    <h2><a href="http://pearson-higher-ed.github.io/design/c/tab-navigation/beta/">Tabs</a></h2>

    <div className="elementContainer">
      <Tabs>
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

      <h3>Example usage</h3>
        <div className="code">
          {`<Tabs>`} <br/>
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
        </div>

      <div className="code">
        <h3>Tab Props</h3>
        <h4>Required:</h4>
        <ul>
          <li className="li-props">children:Array || Element</li>
        </ul>
        <h4>Optional:</h4>
        <ul>
          <li className="li-props">selected:Number === {`<Tabs selected={2}>`}</li>
          <li className="li-props">The selected prop can be passed the index of
          the tab you would like active on page load. <br/>
          Defaults to 0 if nothing is passed.</li>
          <li className="li-props">light:Boolean === {`<Tabs light>`}</li>
          <li className="li-props">The light prop can be used to provide contrast
          on a darker background. <br/>Defaults to false.</li>
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
