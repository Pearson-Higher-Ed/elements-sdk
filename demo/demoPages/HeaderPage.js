import React from 'react';
import ReactDOM from 'react-dom';
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
            mobileTitle="Styles"
            id="stylez">
            <DropdownItem dropdownId="styles-buttons" selectValue="style-item-1" label="Styles - Buttons" type="link" url="/elements-sdk/#/styles-buttons" />
            <DropdownItem dropdownId="styles-forms" selectValue="style-item-2" label="Forms" type="link" url="/elements-sdk/#/forms" />
            <DropdownItem dropdownId="styles-icons" selectValue="style-item-3" label="Styles - Icons" type="link" url="/elements-sdk/#/styles-icons" />
            <DropdownItem dropdownId="styles-responsive" selectValue="style-item-4" label="Responsive Utilities" type="link" url="/elements-sdk/#/responsive-utils" />
            <DropdownItem dropdownId="styles-type" selectValue="style-item-5" label="Typography" type="link" url="/elements-sdk/#/typography" />
            <DropdownItem dropdownId="styles-inputs" selectValue="style-item-6" label="Styles - Inputs" type="link" url="/elements-sdk/#/styles-inputs" />
            <DropdownItem dropdownId="styles-color" selectValue="style-item-7" label="Color" type="link" url="/elements-sdk/#/color" />
            <DropdownItem dropdownId="styles-tables" selectValue="style-item-8" label="Styles - Tables" type="link" url="/elements-sdk/#/styles-tables" />
            <DropdownItem dropdownId="styles-presentation" selectValue="style-item-9" label="Presentation Strategies" type="link" url="/elements-sdk/#/presentation-strategies" />
            <DropdownItem dropdownId="styles-grid" selectValue="style-item-10" label="Grid" type="link" url="/elements-sdk/#/grid" />
            <DropdownItem dropdownId="styles-templates" selectValue="style-item-11" label="Templates" type="link" url="/elements-sdk/#/templates" />
          </Dropdown>
        </div>
        <div className="dropdown-wrapper">
          <Dropdown
            type="button"
            label="Components"
            mobileTitle="Components"
            id="react-components">
            <DropdownItem dropdownId="components-buttons" selectValue="component-item-1" label="Buttons" type="link" url="/elements-sdk/#/buttons" />
            <DropdownItem dropdownId="components-icons" selectValue="component-item-2" label="Icons" type="link" url="/elements-sdk/#/icons" />
            <DropdownItem dropdownId="components-inputs" selectValue="component-item-3" label="Inputs" type="link" url="/elements-sdk/#/inputs" />
            <DropdownItem dropdownId="components-dropdown" selectValue="component-item-4" label="Dropdown" type="link" url="/elements-sdk/#/dropdown" />
            <DropdownItem dropdownId="components-footer" selectValue="component-item-5" label="Footer" type="link" url="/elements-sdk/#/footer" />
            <DropdownItem dropdownId="components-tabs" selectValue="component-item-6" label="Tabs" type="link" url="/elements-sdk/#/tabs" />
            <DropdownItem dropdownId="components-loading" selectValue="component-item-7" label="Loading Spinner" type="link" url="/elements-sdk/#/loadingSpinner" />
            <DropdownItem dropdownId="components-alert" selectValue="component-item-8" label="Static Alert" type="link" url="/elements-sdk/#/staticAlert" />
            <DropdownItem dropdownId="components-calendar" selectValue="component-item-9" label="Calendar" type="link" url="/elements-sdk/#/calendar" />
            <DropdownItem dropdownId="components-table" selectValue="component-item-10" label="Table" type="link" url="/elements-sdk/#/table" />
            <DropdownItem dropdownId="components-datepicker" selectValue="component-item-11" label="Date Picker" type="link" url="/elements-sdk/#/datePicker" />
            <DropdownItem dropdownId="components-timepicker" selectValue="component-item-12" label="Time Picker" type="link" url="/elements-sdk/#/timePicker" />
            <DropdownItem dropdownId="components-progressbar" selectValue="component-item-13" label="Progress Bar" type="link" url="/elements-sdk/#/progress-bar" />
            <DropdownItem dropdownId="components-phonenumber" selectValue="component-item-14" label="Phone Number" type="link" url="/elements-sdk/#/phone-number" />
          </Dropdown>
        </div>
      </div>
    </div>
    {children}
  </div>
);

export default HeaderPage;