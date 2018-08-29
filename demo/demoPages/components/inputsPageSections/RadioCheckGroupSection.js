import React, { Component } from 'react';

import { RadioCheckGroup }  from '../../../../index';


export default class RadioCheckGroupSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkboxOptions1         : [{value: 0, label: 'coffee'}, {value: 1, label: 'tea'}, {value: 2, label: 'hot cocoa'}],
      checkboxOptions2         : [{value: 0, label: 'coffee'}, {value: 1, label: 'tea'}, {value: 2, label: 'hot cocoa'}],
      checkboxOptions3         : [{value: 0, label: 'coffee'}, {value: 1, label: 'tea'}, {value: 2, label: 'hot cocoa'}],
      radioOptions1           : [{value: 0, label: 'coffee', checked: true, disabled: true}, {value: 1, label: 'tea', disabled: true}, {value: 2, label: 'hot cocoa', disabled: true}],
      radioOptions2           : [{value: 0, label: 'coffee', checked: true}, {value: 1, label: 'tea'}, {value: 2, label: 'hot cocoa'}]
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }

  checkboxHandler (options) {
    const updatedOptions = (e) => {
    const checkboxOptions = this.state[options].map((option) => {
      if (option.value.toString() === e.target.value) {
        return option.checked ? Object.assign(option, { checked: false }) : Object.assign(option, { checked: true });
      }
      return option
    });

    this.setState({
      [options]: checkboxOptions
    });
  }
  return updatedOptions
  }

  radioHandler (options) {
    const updatedOptions = (e) => {
      const radioOptions = this.state[options].map((option) => {
        if (option.value.toString() === e.target.value) {
          return Object.assign(option, { checked: true });
        }
        return Object.assign(option, { checked: false });
      });

      this.setState({
        [options]: radioOptions
      });
    }
    return updatedOptions
  }

  render() {

    return (
      <div>
        <h2><a href="http://pearson-higher-ed.github.io/design/c/inputs/#radio-buttons">RadioCheckGroup</a></h2>

          <div className="code">
            <h3>Props:</h3>
            <p>RadioCheckGroup:</p>
            <ul>
              <li>inputType:String(required)       === "radio or checkbox"</li>
              <li>glpType:Boolean</li>
              <li>glpTopLevel:Boolean</li>
              <li>id:String(required)              === "a unique name"</li>
              <li>legendText:String(required)      === "a desciptive label"</li>
              <li>options:Array(required)          === "[{'value', 'label', 'checked', 'disabled'}, {'value', 'label', 'checked', 'disabled'}] where checked and disabled take a boolean." </li>
              <li>name:String(required)            === "a desciptive name"</li>
              <li>changeHandler:Function(required) === "handles populating the selected options from the options (see source for example <a href='https://github.com/Pearson-Higher-Ed/compounds/blob/inputs/demo/demoPages/sections/inputsPageSections/RadioCheckGroupSection.js'>https://github.com/Pearson-Higher-Ed/compounds/blob/inputs/demo/demoPages/sections/inputsPageSections/RadioCheckGroupSection.js</a>)"</li>
            </ul>

          </div>
          <h3>RadioButton Group (disabled):</h3>

          <RadioCheckGroup
            inputType       = "radio"
            id              = "radiobutton1"
            name            = "radiobutton1"
            legendText      = "These are radio buttons"
            options         = {this.state.radioOptions1}
            changeHandler   = {this.radioHandler('radioOptions1')}
            />
          <p className="code">{'<RadioCheckGroup inputType="radio" id="radiobutton1" legendText="radiobutton1" options={[{value: 0, label: "coffee", checked: true, disabled: true}, {value: 1, label: "tea", disabled: true}, {value: 2, label: "hot cocoa", disabled: true}]} changeHandler={() => {}} />'}</p>


          <h3>RadioButton Group:</h3>

          <RadioCheckGroup
            inputType       = "radio"
            id              = "radiobutton2"
            name            = "radiobutton2"
            legendText      = "These are radio buttons"
            options         = {this.state.radioOptions2}
            changeHandler   = {this.radioHandler('radioOptions2')}
            />
          <br />
          <p className="code">{'<RadioCheckGroup inputType="radio" id="radiobutton2" legendText="radiobutton2" options={[{value: 0, label: "coffee", checked: true}, {value: 1, label: "tea"}, {value: 2, label: "hot cocoa", disabled: true}]} changeHandler={() => {}} />'}</p>

          <h3>Checkbox Group:</h3>

          <RadioCheckGroup
            inputType       = "checkbox"
            id              = "checkbox1"
            name            = "checkbox1"
            legendText      = "These are checkboxes"
            options         = {this.state.checkboxOptions1}
            changeHandler   = {this.checkboxHandler('checkboxOptions1')}
            />
          <p className="code">{'<RadioCheckGroup inputType="checkbox" id="checkbox1" legendText="checkbox1" options={[{value: 0, label: "coffee", checked: true}, {value: 1, label: "tea"}, {value: 2, label: "hot cocoa"}]} changeHandler={() => {}} />'}</p>


          <h3>GLP Rounded Checkbox Group - Top Level:</h3>

            <RadioCheckGroup
              inputType       = "checkbox"
              glpType         = {true}
              glpTopLevel     = {true}
              id              = "checkbox2"
              name            = "checkbox2"
              legendText      = "These are checkboxes"
              options         = {this.state.checkboxOptions2}
              changeHandler   = {this.checkboxHandler('checkboxOptions2')}
              />
            <p className="code">{'<RadioCheckGroup inputType="checkbox" id="checkbox2" legendText="checkbox2" options={[{value: 0, label: "coffee", checked: true}, {value: 1, label: "tea"}, {value: 2, label: "hot cocoa"}]} changeHandler={() => {}} />'}</p>

          <h3>GLP Rounded Checkbox Group - Second Level:</h3>

            <RadioCheckGroup
              inputType       = "checkbox"
              glpType         = {true}
              id              = "checkbox3"
              name            = "checkbox3"
              legendText      = "These are checkboxes"
              options         = {this.state.checkboxOptions3}
              changeHandler   = {this.checkboxHandler('checkboxOptions3')}
              />
            <p className="code">{'<RadioCheckGroup inputType="checkbox" id="checkbox2" legendText="checkbox2" options={[{value: 0, label: "coffee", checked: true}, {value: 1, label: "tea"}, {value: 2, label: "hot cocoa"}]} changeHandler={() => {}} />'}</p>
        </div>
    )
  }
}
