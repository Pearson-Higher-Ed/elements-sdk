import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from '../../index';


const HeaderPage = ({ children }) => (
  <div className="demo-container">
    <div className="header">
      <Link to="/"><h1 className="headerTitle">Pearson Design Accelerator</h1></Link>
      <div className="multi-dd-wrapper">
        <div className="dropdown-wrapper">
          <Dropdown
            type="button"
            label="Styles"
            id="stylez">
            <DropdownItem label="Styles - Buttons" type="link" url="/elements-sdk/#/styles-buttons" />
            <DropdownItem label="Forms" type="link" url="/elements-sdk/#/forms" />
            <DropdownItem label="Styles - Icons" type="link" url="/elements-sdk/#/styles-icons" />
            <DropdownItem label="Responsive Utilities" type="link" url="/elements-sdk/#/responsive-utils" />
            <DropdownItem label="Typography" type="link" url="/elements-sdk/#/typography" />
            <DropdownItem label="Styles - Inputs" type="link" url="/elements-sdk/#/styles-inputs" />
            <DropdownItem label="Color" type="link" url="/elements-sdk/#/color" />
            <DropdownItem label="Styles - Tables" type="link" url="/elements-sdk/#/styles-tables" />
            <DropdownItem label="Presentation Strategies" type="link" url="/elements-sdk/#/presentation-strategies" />
            <DropdownItem label="Grid" type="link" url="/elements-sdk/#/grid" />
            <DropdownItem label="Templates" type="link" url="/elements-sdk/#/templates" />
            <DropdownItem label="Bootstrap - Grid" type="link" url="/elements-sdk/#/bootstrap-grid" />
          </Dropdown>
        </div>
        <div className="dropdown-wrapper">
          <Dropdown
            type="button"
            label="Components"
            id="react-components">
            <DropdownItem label="Buttons" type="link" url="/elements-sdk/#/buttons" />
            <DropdownItem label="Icons" type="link" url="/elements-sdk/#/icons" />
            <DropdownItem label="Inputs" type="link" url="/elements-sdk/#/inputs" />
            <DropdownItem label="Dropdown" type="link" url="/elements-sdk/#/dropdown" />
            <DropdownItem label="Footer" type="link" url="/elements-sdk/#/footer" />
            <DropdownItem label="Tabs" type="link" url="/elements-sdk/#/tabs" />
            <DropdownItem label="Loading Spinner" type="link" url="/elements-sdk/#/loadingSpinner" />
            <DropdownItem label="Static Alert" type="link" url="/elements-sdk/#/staticAlert" />
            <DropdownItem label="Calendar" type="link" url="/elements-sdk/#/calendar" />
            <DropdownItem label="Table" type="link" url="/elements-sdk/#/table" />
            <DropdownItem label="Date Picker" type="link" url="/elements-sdk/#/datePicker" />
            <DropdownItem label="Time Picker" type="link" url="/elements-sdk/#/timePicker" />
            <DropdownItem label="Progress Bar" type="link" url="/elements-sdk/#/progress-bar" />
            <DropdownItem label="Phone Number" type="link" url="/elements-sdk/#/phone-number" />
          </Dropdown>
        </div>
      </div>
    </div>
    {children}
  </div>
);

export default HeaderPage;
