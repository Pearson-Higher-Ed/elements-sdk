import React, { Component } from 'react';

import { RadioCheckGroup }  from '../../../../index';


class RadioCheckGroupSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      checkboxOptions         : {"tea":"default","coffee":"disabled","soda":"","water":"disabled"},
      checkboxSelectedOptions : ["coffee","water","tea"],
      radioOptions1           : {"tea":"default","coffee":"disabled","soda":"","water":"disabled"},
      radioSelectedOptions1   : ["coffee"],
      radioOptions2           : {"tea":"default","coffee":"","soda":"","water":""},
      radioSelectedOptions2   : ["tea"]
    };

    this.radioHandler1    = _radioHandler1.bind(this);
    this.radioHandler2    = _radioHandler2.bind(this);
    this.checkboxHandler  = _checkboxHandler.bind(this);
  }


  render() {

    return (
      <div>
        <h2><a href="http://pearson-higher-ed.github.io/design/c/inputs/#radio-buttons">RadioCheckGroup</a></h2>

          <div className="code">
            <h3>Props:</h3>
            <p>RadioCheckGroup:</p>
            <ul>
              <li>id:String(required)               === "a unique name"</li>
              <li>legendText:String(required)       === "a desciptive label"</li>
              <li>options:Object(required)          === {'{<option>:<inputState>,<option>:<inputState>, ... }'} where inputState is one of 'default','disabled'. </li>
              <li>name:String(required)             === "a desciptive name"</li>
              <li>selectedOptions:Array             === "the checked options (radio only supports a single selected option by definition)"</li>
              <li>changeHandler:Function(required)  === "handles populating the selected options from the options (see source for example <a href='https://github.com/Pearson-Higher-Ed/compounds/blob/inputs/demo/demoPages/sections/inputsPageSections/RadioCheckGroupSection.js'>https://github.com/Pearson-Higher-Ed/compounds/blob/inputs/demo/demoPages/sections/inputsPageSections/RadioCheckGroupSection.js</a>)"</li>
            </ul>

          </div>
          <h3>RadioButton Group (disabled):</h3>

          <RadioCheckGroup
            inputType       = "radio"
            id              = "radiobutton1"
            name            = "radiobutton1"
            legendText      = "These are radio buttons"
            options         = {this.state.radioOptions1}
            selectedOptions = {this.state.radioSelectedOptions1}
            changeHandler   = {this.radioHandler1}
            />
          <br />
          <p className="code">{'<RadioCheckGroup inputType="radio" id="radiobutton1" legendText="radiobutton1" options={{"tea":"default","coffee":"disabled","soda":"","water":"disabled"}} selectedOptions={["tea"]} changeHandler={() => {}} />'}</p>


          <h3>RadioButton Group:</h3>

          <RadioCheckGroup
            inputType       = "radio"
            id              = "radiobutton2"
            name            = "radiobutton2"
            legendText      = "These are radio buttons"
            options         = {this.state.radioOptions2}
            selectedOptions = {this.state.radioSelectedOptions2}
            changeHandler   = {this.radioHandler2}
            />
          <br />
          <p className="code">{'<RadioCheckGroup inputType="radio" id="radiobutton2" legendText="radiobutton2" options={{"tea":"default","coffee":"","soda":"","water":""}} selectedOptions={["tea"]} changeHandler={() => {}} />'}</p>

          <h3>Checkbox Group:</h3>

          <RadioCheckGroup
            inputType       = "checkbox"
            id              = "checkbox1"
            name            = "checkbox1"
            legendText      = "These are checkboxes"
            options         = {this.state.checkboxOptions}
            selectedOptions = {this.state.checkboxSelectedOptions}
            changeHandler   = {this.checkboxHandler}
            />
          <br />
          <p className="code">{'<RadioCheckGroup inputType="checkbox" id="checkbox1" legendText="checkbox1" options={{"tea":"default","coffee":"disabled","soda":"","water":"disabled"}} selectedOptions={["coffee","water","tea"]} changeHandler={() => {}} />'}</p>

      </div>
    )
  }
}


export default RadioCheckGroupSection;



function _checkboxHandler (e) {
    const newSelection = e.target.value;

    let newSelectionArray;

    if(this.state.checkboxSelectedOptions.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.checkboxSelectedOptions.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.checkboxSelectedOptions, newSelection];
    }

    this.setState({ checkboxSelectedOptions: newSelectionArray });
  }


function _radioHandler1 (e) {
    const newSelection = e.target.value;

    let newSelectionArray;

    if(this.state.radioSelectedOptions1.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.radioSelectedOptions1.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [newSelection];
    }

    this.setState({ radioSelectedOptions1: newSelectionArray });
}

function _radioHandler2 (e) {
    const newSelection = e.target.value;

    let newSelectionArray;

    if(this.state.radioSelectedOptions2.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.radioSelectedOptions2.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [newSelection];
    }

    this.setState({ radioSelectedOptions2: newSelectionArray });
}
