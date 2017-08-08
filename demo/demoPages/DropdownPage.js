import React from 'react';
import { Dropdown } from '../../index';

const simpleList = ['Thing one', 'Thing two'];
const listItems = ['Pearson', 'Design', 'divider', 'Accelerator', '!!'];
const mobileTitle = "Test title";

const DropdownPage = () => (
    <div className="displaySection">
    <h2><a href="https://pearson-higher-ed.github.io/design/c/dropdown/beta/">Dropdown</a></h2>

      <div className="elementContainer">

        <div className="code">
          <h3>Props</h3>
          <h4>Required:</h4>
          <ul>
            <li className="li-props">dropdownControlLabel:String === "Descriptive text of what the button will be doing"</li>
            <li className="li-props">presentationType:String === "label", "button", "icon"</li>
            <li className="li-props">list:Array = ["one", "two", "three"] || ["one", "two", "divider", "three"]</li>
            <li className="li-props">The "divider" option may be used in conjunction with any of
            the presentationType for <br/>separating options presented in your list.</li>
          </ul>
          <h4>Optional:</h4>
          <ul>
            <li className="li-props">presentationText:String === "Your label or button text"</li>
            <li className="li-props">mobileTitle:String === "Your mobile title"</li>
            <li className="li-props">A different view is used for mobile and this title will be reflected
              in the mobile header <br/>when the dropdown is open.</li>
            <li className="li-props">dropup:Boolean === {`<Dropdown dropup />`}</li>
            <li className="li-props">The dropdown menu can be changed to expand upwards
              by using the <i>dropup</i> prop</li>
            <li className="li-props">alignRight:Boolean === {`<Dropdown alignRight />`}</li>
            <li className="li-props">By default, a dropdown menu is left aligned. Add the&nbsp;
              <i>alignRight</i> prop to right align the <br/> dropdown menu.</li>
            <li className="li-props">killFocus:Boolean === {`<Dropdown killFocus />`}</li>
            <li className="li-props">The killFocus prop will assign a tabIndex of -1 inside of the list items.</li>
            <li className="li-props">changeHandler:Function === {`<Dropdown changeHandler={(item) => { console.log(item) } }`}</li>
            <li className="li-props">Callback that is fired when an item is selected in the Dropdown menu.</li>
          </ul>
        </div>

        <h3>label /w Icon (non-selectable options)</h3>
          <Dropdown
            dropdownControlLabel="Dropdown open"
            presentationType="label"
            presentationText="label"
            list={simpleList}
            mobileTitle={mobileTitle}
          />
          <p className="code">
            {`const simpleList = ['Thing one', 'Thing two'];`} <br/>
            {`<Dropdown
              dropdownControlLabel="Dropdown open"
              presentationType="label"
              presentationText="label"
              list={simpleList}
              mobileTitle="Mobile title"
            />`}
          </p>

          <h3>button /w Icon (selectable options)</h3>
            <Dropdown
              dropdownControlLabel="Button that opens Dropdown"
              presentationType="button"
              presentationText="button"
              list={simpleList}
              mobileTitle={mobileTitle}
            />
            <p className="code">
              {`const simpleList = ['Thing one', 'Thing two'];`} <br/>
              {`<Dropdown
                dropdownControlLabel="Button that opens Dropdown"
                presentationType="button"
                presentationText="button"
                list={simpleList}
                mobileTitle="Mobile title"
              />`}
            </p>

          <h3>Icon only (selectable options)</h3>
            <Dropdown
              dropup
              dropdownControlLabel="Icon that opens Dropdown"
              presentationType="icon"
              list={listItems}
              mobileTitle={mobileTitle}
            />
            <p className="code">
              {`const listItems = ['Pearson', 'Design', 'divider', 'Accelerator', '!!'];`}
              <br/>
              {`<Dropdown
                dropup
                dropdownControlLabel="Icon that opens Dropdown"
                presentationType="icon"
                list={listItems}
                mobileTitle="Mobile title"
              />`}
            </p>

      </div>
    </div>
);

export default DropdownPage;
