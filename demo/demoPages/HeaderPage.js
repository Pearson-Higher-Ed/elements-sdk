import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from '../../index';


const HeaderPage = ({ children }) => {
  return (
    <div className="demo-container">
      <div className="header">
        <Link to="/"><h1 className="headerTitle">Pearson Design Accelerator</h1></Link>
        <div className="multi-dd-wrapper">
          <div className="dropdown-wrapper">
            <Dropdown
              type="button"
              label="Styles"
              id="stylez">
              <DropdownItem label="Styles - Buttons" type="link" url="/#/styles-buttons" />
              <DropdownItem label="Forms" type="link" url="/#/forms" />
              <DropdownItem label="Styles - Icons" type="link" url="/#/styles-icons" />
              <DropdownItem label="Responsive Utilities" type="link" url="/#/responsive-utils" />
              <DropdownItem label="Typography" type="link" url="/#/typography" />
              <DropdownItem label="Styles - Inputs" type="link" url="/#/styles-inputs" />
              <DropdownItem label="Color" type="link" url="/#/color" />
              <DropdownItem label="Styles - Tables" type="link" url="/#/styles-tables" />
              <DropdownItem label="Presentation Strategies" type="link" url="/#/presentation-strategies" />
              <DropdownItem label="Grid" type="link" url="/#/grid" />
              <DropdownItem label="Templates" type="link" url="/#/templates" />
              <DropdownItem label="Bootstrap - Grid" type="link" url="/#/bootstrap-grid" />
            </Dropdown>
          </div>
          <div className="dropdown-wrapper">
            <Dropdown
              type="button"
              label="Components"
              id="react-components">
              <DropdownItem label="Buttons" type="link" url="/#/buttons" />
              <DropdownItem label="Icons" type="link" url="/#/icons" />
              <DropdownItem label="Inputs" type="link" url="/#/inputs" />
              <DropdownItem label="Dropdown" type="link" url="/#/dropdown" />
              <DropdownItem label="Footer" type="link" url="/#/footer" />
              <DropdownItem label="Tabs" type="link" url="/#/tabs" />
              <DropdownItem label="Loading Spinner" type="link" url="/#/loadingSpinner" />
              <DropdownItem label="Static Alert" type="link" url="/#/staticAlert" />
              <DropdownItem label="Calendar" type="link" url="/#/calendar" />
              <DropdownItem label="Table" type="link" url="/#/table" />
              <DropdownItem label="Date Picker" type="link" url="/#/datePicker" />
              <DropdownItem label="Time Picker" type="link" url="/#/timePicker" />
              <DropdownItem label="Progress Bar" type="link" url="/#/progress-bar" />
              <DropdownItem label="Phone Number" type="link" url="/#/phone-number" />
            </Dropdown>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default HeaderPage;
