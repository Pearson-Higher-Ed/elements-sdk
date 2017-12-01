import React from 'react';
import { Dropdown, DropdownItem } from '../../../index';

const mobileTitle = 'Introduction to mobile';

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
              <ul>
                <li className="li-props">type === text, button, icon, image</li>
                <li className="li-props">label === text for the button/label to activate dropdown</li>
                <li className="li-props">id === unique id</li>
              </ul>
            <h4>Optional:</h4>
            <ul>
              <li className="li-props">mobileTitle:String === "Your mobile title"</li>
              <li className="li-props">
                changeHandler:Function === {`<Dropdown changeHandler={(item) => { console.log(item) } }`}
                <br/>
                Callback that is fired when an item is selected in the Dropdown menu.
              </li>
              <li className="li-props">btnImage:String === "URL to the image" (if dropdown is image type)</li>
              <li className="li-props">btnImageHeight:String === "Display height of image in pixels" (if dropdown is image type)</li>
              <li className="li-props">btnImageWidth:String === "Display width of the image in pixels" (if dropdown is image type)</li>
            </ul>
            <h3>Dropdown item Props </h3>
            <h4>Required:</h4>
            <ul>
              <li className="li-props">type: divider, button, link, imageButton</li>
              <li className="li-props">label: accessibility label (except for divider type)</li>
              <li className="li-props">url: only required for link type</li>
            </ul>
            <h4>Optional:</h4>
            <ul>
              <li className="li-props">checkmark: whether or not to leave spacing for a selected checkmark</li>
              <li className="li-props">selected: accessibility/globalization word for 'selected'</li>
              <li className="li-props">selectedName: accessibility label for name of item</li>
              <li className="li-props">imgUrl: URL to image (if type is imgButton)</li>
              <li className="li-props">imgHeight: Display height of image (if type is imgButton)</li>
              <li className="li-props">imgWidth: Display width of image (if type is imgButton)</li>
            </ul>
          </div>

          <h3>label /w Icon (shows selectable and actual connections to changeHandler)</h3>
          <Dropdown
            dropdownControlLabel="Dropdown open"
            mobileTitle={mobileTitle}
            changeHandler={(data) => {
              console.log('item clicked', data.item);
              if (data.item === 'list item 1') {
                this.setState({buttonSelected:true});
              }
            }}
            type="text"
            label="text"
            id="text">
            <DropdownItem checkmark selected={this.state.buttonSelected}
              selectedName="selected" label="list item 1" type="button" />
            <DropdownItem type="divider" />
            <DropdownItem checkmark label="list item 2" type="link" url="http://www.google.com" />
            <DropdownItem checkmark label="list item 3" type="link" url="http://www.google.com" />
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
                <DropdownItem checkmark label="list item 1" />
                <DropdownItem checkmark divider />
                <DropdownItem checkmark label="list item 2" />
              </Dropdown>`}
          </p>

          <h3>button /w Icon (no changehandler connection)</h3>
          <Dropdown
            mobileTitle={mobileTitle}
            type="button"
            label="Button text"
            id="buttontext">
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
              id="iconText">
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
            <h3>Image Icon w/ Image Options (w/ changehandler connection)</h3>
            <Dropdown
              dropdownControlLabel="Dropdown open"
              mobileTitle={mobileTitle}
              changeHandler={(data) => {
                console.log('item clicked', data.value);
                if (data.value === 'US') {
                  this.setState({buttonImageSelected:true});
                }
              }}
              type="image"
              label="image"
              id="image"
              btnImage="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg"
              btnImageHeight="10"
              btnImageWidth="20">
              <DropdownItem checkmark selected={this.state.buttonImageSelected}
                selectedName="selected" label="image item 1" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg" imgHeight="10" imgWidth="20" selectValue="US" />
              <DropdownItem type="divider" />
              <DropdownItem checkmark label="image item 2" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" imgHeight="10" imgWidth="20" selectValue="GB" />
              <DropdownItem checkmark label="image item 3" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/af.svg" imgHeight="10" imgWidth="20" selectValue="AF" />
            </Dropdown>
            <p className="code">
              {`<Dropdown
                dropdownControlLabel="Dropdown open"
                mobileTitle={mobileTitle}
                changeHandler={(data) => {
                  console.log('item clicked', data.value);
                  if (data.value === 'US') {
                    this.setState({buttonImageSelected:true});
                  }
                }}
                type="image"
                label="image"
                id="image"
                btnImage="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg"
                btnImageHeight="10"
                btnImageWidth="20">
                <DropdownItem checkmark selected={this.state.buttonImageSelected}
                  selectedName="selected" label="image item 1" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg" imgHeight="10" imgWidth="20" selectValue="US" />
                <DropdownItem type="divider" />
                <DropdownItem checkmark label="image item 2" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" imgHeight="10" imgWidth="20" selectValue="GB" />
                <DropdownItem checkmark label="image item 3" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/af.svg" imgHeight="10" imgWidth="20" selectValue="AF" />
              </Dropdown>`}
            </p>
        </div>
      </div>
    );
  }
};
export default DropdownPage;
