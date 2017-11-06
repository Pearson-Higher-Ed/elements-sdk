import React from 'react';
import { PhoneNumber } from '../../../index';

const eight = {paddingLeft: 8};

const PhoneNumberPage = () => (
  <div className="displaySection">
    <h2>Phone Number</h2> <br/>
    <div elementContainer>
      <div className="code">
        <h3>Props</h3>
        <h4>Optional:</h4>
          <ul>
            <li className="li-props">labelText:String === {`<PhoneNumber labelText="Your label" />`}</li>
            <li className="li-props">Text value displayed above the Input</li>
            <li className="li-props">infoMessage:String === {`<PhoneNumber infoMessage="How informative!" />`}</li>
            <li className="li-props">Message displayed below the Input</li>
            <li className="li-props">errorMessage:String === {`<PhoneNumber errorMessage="Error message" />`}</li>
            <li className="li-props">Mesage displayed below the Input during an error state.</li>
            <li className="li-props">country:String === {`<PhoneNumber country="US" />`}</li>
            <li className="li-props">Two-letter country code to be used as the default country. <br/>Full list of codes can be found here&nbsp;
            <a href="https://github.com/catamphetamine/react-phone-number-input/blob/master/source/country%20names.json" target="_blank">Country codes</a></li>
            <li className="li-props">placeholder:String === {`<PhoneNumber placeholder="Placeholder text"`}</li>
            <li className="li-props">onChange:Function === {`<PhoneNumber onChange={(n) => console.log(n)}`}</li>
            <li className="li-props">This handler is called each time the {`<input />`} changes its textual value.</li>
            <li className="li-props">value:String ==={`<PhoneNumber value="Populate the input's value" />`}</li>
            <li className="li-props">onKeyDown:Function === {`<PhoneNumber onKeyDown={(key) => console.log(key)}`}</li>
            <li className="li-props">Can be used in special cases, for example when enter is pressed.</li>
            <li className="li-props">disabled:Boolean === {`<PhoneNumber disabled />`}</li>
            <li className="li-props">Disables both the {`<input />`} and {`<select />`}.</li>
            <li className="li-props">onCountryChange:Function</li>
            <li className="li-props">Callback called when the selected country changes.</li>
            <li className="li-props">countries:Array === {`<Calendar countries=['US', 'UK'] />`}</li>
            <li className="li-props">Optional list of allowed countries.</li>
            <li className="li-props">international:Boolean</li>
            <li className="li-props">Adds the `International` option to the list of countries.</li>
            <li className="li-props">convertToNational:Boolean</li>
            <li className="li-props">Converts the initially passed phone number value to a number for its country.</li>
            <li className="li-props">selectMaxItems:Number === {`<Calendar selectMaxItems={5} />`}</li>
            <li className="li-props">Defines the height of the dropdown country select list.</li>
            <li className="li-props">className:String</li>
            <li className="li-props">Component CSS class.</li>
            <li className="li-props">inputClassName:String</li>
            <li className="li-props">{`<input />`} CSS class.</li>
          </ul>
      </div> <br/>

    <PhoneNumber
      country="US"
      placeholder="555-555-5555"
      labelText="Mobile phone"
      onChange={(num) => console.log(num)}
    />

    <h3>Example usage</h3>
    <p className="code">
      {`<PhoneNumber`} <br/>
        <div style={eight}>{`country="US"`}</div>
        <div style={eight}>{`placeholder="555-555-5555"`}</div>
        <div style={eight}>{`labelText="Mobile phone"`}</div>
        <div style={eight}>{`onChange={(num) => console.log(num)}`}</div>
      {`/>`}
    </p>

    </div>

  </div>
);

export default PhoneNumberPage;
