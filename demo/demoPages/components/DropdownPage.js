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
                <li className="li-props">type === text, button, icon, image.</li>
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
              <li className="li-props">btnImageAlt:String === "Alt text for image" (if dropdown is image type)</li>

            </ul>
            <h3>Dropdown item Props </h3>
            <h4>Required:</h4>
            <ul>
              <li className="li-props">type: divider, button, link, imageButton</li>
              <li className="li-props">label: accessibility label (except for divider type)</li>
              <li className="li-props">url: only required for link type</li>
              <li className="li-props">dropdownId: unique identifier of group of dropdown items</li>
              <li className="li-props">selectValue: unique identifier of dropdown item</li>

            </ul>
            <h4>Optional:</h4>
            <ul>
              <li className="li-props">checkmark: whether or not to leave spacing for a selected checkmark</li>
              <li className="li-props">selected: accessibility/globalization word for 'selected'</li>
              <li className="li-props">disabled: Boolean - Defaults to false.  If true the button will be disabled.</li>
              <li className="li-props">selectedName: accessibility label for name of icon</li>
              <li className="li-props">imgUrl: URL to image (if type is imageButton)</li>
              <li className="li-props">imgHeight: Display height of image (if type is imgButton)</li>
              <li className="li-props">imgWidth: Display width of image (if type is imgButton)</li>
              <li className="li-props">imgAlt: Alt text of image (if type is imgButton)</li>
            </ul>
          </div>

          <h3>label /w Icon (shows selectable and actual connections to checkmark)</h3>
          <Dropdown
            dropdownControlLabel="Dropdown open"
            mobileTitle={mobileTitle}
            type="text"
            label="text"
            id="text">
            <DropdownItem checkmark dropdownId="dropTextIcons" selectValue="list-item-1"
              selectedName="selected" label="list item 1" type="button" />
            <DropdownItem type="divider" />
            <DropdownItem checkmark dropdownId="dropTextIcons" selectValue="list-item-2" label="list item 2" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIcons" selectValue="list-item-3" label="list item 3" type="link" url="http://www.google.com" />
          </Dropdown>
          <p className="code">
            {`<Dropdown
            dropdownControlLabel="Dropdown open"
            mobileTitle={mobileTitle}
            type="text"
            label="text"
            id="text">
            <DropdownItem checkmark dropdownId="dropTextIcons" selectValue="list-item-1"
              selectedName="selected" label="list item 1" type="button" />
            <DropdownItem type="divider" />
            <DropdownItem checkmark dropdownId="dropTextIcons" selectValue="list-item-2" label="list item 2" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIcons" selectValue="list-item-3" label="list item 3" type="link" url="http://www.google.com" />
          </Dropdown>`}
          </p>
			
		  <h3>label /w Icon and long list (scrollable and selectable)</h3>
          <Dropdown
            dropdownControlLabel="Dropdown open"
            mobileTitle={mobileTitle}
            scrollable
            type="text"
            label="text"
            id="text-long">
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-1" 
              selectedName="selected" label="list item 1" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-2" 
              selectedName="selected" label="list item 2" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-3" 
              selectedName="selected" label="list item 3" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-4" 
              selectedName="selected" label="list item 4" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-5" 
              selectedName="selected" label="list item 5" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-6" 
              selectedName="selected" label="list item 6" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-7" 
              selectedName="selected" label="list item 7" type="button" />
            <DropdownItem type="divider" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-8" label="list item 8" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-9" label="list item 9" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-10" label="list item 10" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-11" label="list item 11" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-12" label="list item 12" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-13" label="list item 13" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-14" label="list item 14" type="link" url="http://www.google.com" />
          </Dropdown>
          <p className="code">
            {` <Dropdown
            dropdownControlLabel="Dropdown open"
            mobileTitle={mobileTitle}
            scrollable
            type="text"
            label="text"
            id="text-long">
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-1" 
              selectedName="selected" label="list item 1" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-2" 
              selectedName="selected" label="list item 2" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-3" 
              selectedName="selected" label="list item 3" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-4" 
              selectedName="selected" label="list item 4" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-5" 
              selectedName="selected" label="list item 5" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-6" 
              selectedName="selected" label="list item 6" type="button" />
              <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-7" 
              selectedName="selected" label="list item 7" type="button" />
            <DropdownItem type="divider" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-8" label="list item 8" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-9" label="list item 9" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-10" label="list item 10" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-11" label="list item 11" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-12" label="list item 12" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-13" label="list item 13" type="link" url="http://www.google.com" />
            <DropdownItem checkmark dropdownId="dropTextIconsLong" selectValue="list-item-14" label="list item 14" type="link" url="http://www.google.com" />
          </Dropdown>`}
          </p>
          
          <h3>button /w Icon (no checkmarks)</h3>
          <Dropdown
            mobileTitle={mobileTitle}
            type="button"
            label="Button text"
            id="buttontext">
            <DropdownItem dropdownId="dropBtnIcons" selectValue="list-item-1" label="list item 1" type="button" />
            <DropdownItem type="divider" />
            <DropdownItem dropdownId="dropBtnIcons" selectValue="list-item-2" label="list item 2" type="link" url="www.google.com"/>
          </Dropdown>
          <p className="code">
            {`<Dropdown
            mobileTitle={mobileTitle}
            type="button"
            label="Button text"
            id="buttontext">
            <DropdownItem dropdownId="dropBtnIcons" selectValue="list-item-1" label="list item 1" type="button" />
            <DropdownItem type="divider" />
            <DropdownItem dropdownId="dropBtnIcons" selectValue="list-item-2" label="list item 2" type="link" url="www.google.com"/>
          </Dropdown>`}
          </p>

          <h3>Icon only (no checkmarks)</h3>
            <Dropdown
              mobileTitle={mobileTitle}
              type="icon"
              label="icon text"
              id="iconText">
              <DropdownItem dropdownId="dropIcon" selectValue="list-item-1" label="list item 1" type="button" />
              <DropdownItem type="divider" />
              <DropdownItem dropdownId="dropIcon" selectValue="list-item-2" label="list item 2" type="link" url="www.google.com" />
            </Dropdown>
            <p className="code">
              {`<Dropdown
              mobileTitle={mobileTitle}
              type="icon"
              label="icon text"
              id="iconText">
              <DropdownItem dropdownId="dropIcon" selectValue="list-item-1" label="list item 1" type="button" />
              <DropdownItem type="divider" />
              <DropdownItem dropdownId="dropIcon" selectValue="list-item-2" label="list item 2" type="link" url="www.google.com" />
            </Dropdown>`}
            </p>
            <h3>Image Icon w/ Image Options (w/ checkmarks)</h3>
            <Dropdown
              dropdownControlLabel="Dropdown open"
              dropdownId="dropImg"
              mobileTitle={mobileTitle}
              type="image"
              label="image"
              id="image"
              btnImage="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg"
              btnImageHeight="10"
              btnImageWidth="20"
              btnImageAlt="US flag">
              <DropdownItem checkmark selectedName="selected" dropdownId="dropImg" label="image item 1" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg" imgHeight="10" imgWidth="20" selectValue="US" imgAlt="US flag" />
              <DropdownItem type="divider" />
              <DropdownItem checkmark selectedName="selected" dropdownId="dropImg" label="image item 2" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" imgHeight="10" imgWidth="20" selectValue="GB" imgAlt="UK flag" />
              <DropdownItem checkmark selectedName="selected" dropdownId="dropImg" label="image item 3" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/af.svg" imgHeight="10" imgWidth="20" selectValue="AF" imgAlt="African flag" />
            </Dropdown>
            <p className="code">
              {`<Dropdown
              dropdownControlLabel="Dropdown open"
              dropdownId="dropImg"
              mobileTitle={mobileTitle}
              type="image"
              label="image"
              id="image"
              btnImage="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg"
              btnImageHeight="10"
              btnImageWidth="20"
              btnImageAlt="US flag">
              <DropdownItem checkmark selectedName="selected" dropdownId="dropImg" label="image item 1" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg" imgHeight="10" imgWidth="20" selectValue="US" imgAlt="US flag" />
              <DropdownItem type="divider" />
              <DropdownItem checkmark selectedName="selected" dropdownId="dropImg" label="image item 2" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" imgHeight="10" imgWidth="20" selectValue="GB" imgAlt="UK flag" />
              <DropdownItem checkmark selectedName="selected" dropdownId="dropImg" label="image item 3" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/af.svg" imgHeight="10" imgWidth="20" selectValue="AF" imgAlt="African flag" />
            </Dropdown>`}
            </p>
        </div>
      </div>
    );
  }
};

export default DropdownPage;
