import React              from 'react';
import ReactDOM           from 'react-dom';

import '../src/styles/elements.scss';

// Styles
import StylesButtonPage           from './demoPages/styles/StylesButtonPage';
import FormsPage                  from './demoPages/styles/FormsPage';
import StylesIconsPage            from './demoPages/styles/StylesIconsPage';
import ResponsiveUtilitiesPage    from './demoPages/styles/ResponsiveUtilitiesPage';
import TypographyPage             from './demoPages/styles/TypographyPage';
import StylesInputsPage           from './demoPages/styles/StylesInputsPage';
import ColorPage                  from './demoPages/styles/ColorPage';
import StylesTablesPage           from './demoPages/styles/StylesTablesPage';
import PresentationStrategiesPage from './demoPages/styles/PresentationStrategiesPage';
import GridPage                   from './demoPages/styles/GridPage';
import TemplatesPage              from './demoPages/styles/TemplatesPage';
import BootstrapGridPage          from './demoPages/styles/BootstrapGridPage';


// Components
import ButtonPage         from './demoPages/components/ButtonPage';
import IconPage           from './demoPages/components/IconPage';
import HomePage           from './demoPages/HomePage';
import HeaderPage         from './demoPages/HeaderPage';
import InputsPage         from './demoPages/components/InputsPage';
import DropdownPage       from './demoPages/components/DropdownPage';
import FooterPage         from './demoPages/components/FooterPage';
import TabsPage           from './demoPages/components/TabsPage';
import LoadingSpinnerPage from './demoPages/components/LoadingSpinnerPage';
import StaticAlertPage    from './demoPages/components/StaticAlertPage';
import CalendarPage       from './demoPages/components/CalendarPage';
import TablePage          from './demoPages/components/TablePage';
import DatePickerPage     from './demoPages/components/DatePickerPage';
import TimePickerPage     from './demoPages/components/TimePickerPage';
import ProgressBarPage    from './demoPages/components/ProgressBarPage';
import PhoneNumberPage    from './demoPages/components/PhoneNumberPage';

import { HashRouter as Router, Route } from 'react-router-dom';

const DemoRouter = (props) => (
  <Router>
    <div>
      <HeaderPage />
        <Route path="/" exact                  component={HomePage} />
        <Route path="/styles-buttons"          component={StylesButtonPage} />
        <Route path="/forms"                   component={FormsPage} />
        <Route path="/styles-icons"            component={StylesIconsPage} />
        <Route path="/responsive-utils"        component={ResponsiveUtilitiesPage} />
        <Route path="/typography"              component={TypographyPage} />
        <Route path="/styles-inputs"           component={StylesInputsPage} />
        <Route path="/color"                   component={ColorPage} />
        <Route path="/styles-tables"           component={StylesTablesPage} />
        <Route path="/presentation-strategies" component={PresentationStrategiesPage} />
        <Route path="/grid"                    component={GridPage} />
        <Route path="/templates"               component={TemplatesPage} />
        <Route path="/bootstrap-grid"          component={BootstrapGridPage} />

        <Route path="/icons"                   component={IconPage} />
        <Route path="/inputs"                  component={InputsPage} />
        <Route path="/buttons"                 component={ButtonPage} />
        <Route path="/dropdown"                component={DropdownPage} />
        <Route path="/footer"                  component={FooterPage} />
        <Route path="/tabs"                    component={TabsPage} />
        <Route path="/loadingSpinner"          component={LoadingSpinnerPage} />
        <Route path="/StaticAlert"             component={StaticAlertPage} />
        <Route path="/calendar"                component={CalendarPage} />
        <Route path="/table"                   component={TablePage} />
        <Route path="/datePicker"              component={DatePickerPage} />
        <Route path="/timePicker"              component={TimePickerPage} />
        <Route path="/progress-bar"            component={ProgressBarPage} />
        <Route path="/phone-number"   component={PhoneNumberPage} />
    </div>
  </Router>
);

export default DemoRouter;
