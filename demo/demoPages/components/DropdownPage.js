import React from 'react';
import { Dropdown, DropdownItem, Icon, Button } from '../../../index';

const simpleList = ['Thing one', 'Thing two'];
const listItems = ['Pearson', 'Design', 'divider', 'Accelerator', '!!'];
const mobileTitle = "Introduction to mobile";

class DropdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonSelected : false
    };
  }
  render() {
    return (
      <div className="displaySection">
      <h2><a href="https://pearson-higher-ed.github.io/design/c/dropdown/beta/">Dropdown</a></h2>

      <div className="elementContainer">

        <div className="code">
          <h3>Props</h3>
          <h4>Required:</h4>
            <li className="li-props">type === text, button, icon</li>
            <li className="li-props">label === text for the button/label to activate dropdown</li>
            <li className="li-props">id === unique id</li>
          <h4>Optional:</h4>
          <ul>
            <li className="li-props">mobileTitle:String === "Your mobile title"</li>
            <li className="li-props">
              changeHandler:Function === {`<Dropdown changeHandler={(item) => { console.log(item) } }`}
              <br/>
              Callback that is fired when an item is selected in the Dropdown menu.
            </li>
          </ul>
        </div>

        <h3>label /w Icon (shows selectable and actual connections to changeHandler)</h3>
          <Dropdown
            dropdownControlLabel="Dropdown open"
            mobileTitle={mobileTitle}
            changeHandler={(item) => {
              console.log('item clicked', item);
              if (item === 'list item 1') {
                this.setState({buttonSelected:true});
              }
            }}
            type="text"
            label="text"
            id="text"
          >
            <DropdownItem selected={this.state.buttonSelected} selectedName="selected" label="list item 1" type="button" />
            <DropdownItem type="divider" />
            <DropdownItem label="list item 2" type="link" url="http://www.google.com" />
            <DropdownItem label="list item 3" type="link" url="http://www.google.com" />
          </Dropdown>
          <p className="code">
            {`<Dropdown
                dropdownControlLabel="Dropdown open"
                mobileTitle={mobileTitle}
                changeHandler={(item) => {
                  console.log(item);
                }}
                type="text"
                label="text"
                id="text"
              >
                <DropdownItem label="list item 1" />
                <DropdownItem divider />
                <DropdownItem label="list item 2" />
              </Dropdown>`}
          </p>
          <h3>button /w Icon (no changehandler connection)</h3>
            <Dropdown
              mobileTitle={mobileTitle}
              type="button"
              label="Button text"
              id="buttontext"
            >
              <DropdownItem label="list item 1" type="button" />
              <DropdownItem type="divider" />
              <DropdownItem label="list item 2" type="link" url="www.google.com"/>
            </Dropdown>
            <p className="code">
              {`<Dropdown
                  mobileTitle={mobileTitle}
                  type="button"
                  label="Button text"
                  id="buttontext"
                >
                  <DropdownItem label="list item 1" />
                  <DropdownItem divider />
                  <DropdownItem label="list item 2" />
                </Dropdown>`}
            </p>

          <h3>Icon only (no changehandler connection)</h3>
            <Dropdown
              mobileTitle={mobileTitle}
              type="icon"
              label="icon text"
              id="iconText"
            >
              <DropdownItem label="list item 1" type="button" />
              <DropdownItem type="divider" />
              <DropdownItem label="list item 2" type="link" url="www.google.com" />
            </Dropdown>
            <p className="code">
              {`<Dropdown
                  mobileTitle={mobileTitle}
                  type="icon"
                  label="icon text"
                  id="iconText"
                >
                  <DropdownItem label="list item 1" />
                  <DropdownItem divider />
                  <DropdownItem label="list item 2" />
                </Dropdown>`}
            </p>
      </div>
    </div>
    );
  }
};

export default DropdownPage;
