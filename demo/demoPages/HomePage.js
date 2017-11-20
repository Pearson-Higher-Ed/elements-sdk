import React    from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="homepage">

    <h1>Atomic React Components</h1>

    <p>Welcome to the ElementsSDK! This SDK is an Open Source, Accessible (a11y),
      Unified Brand that is International Ready (i18n, l10n). <br/>
      The ElementsSDK is split into two sections: Styles & Components. <br/><br/>
      Styles contain basic HTML elements with css styles.  Components provide more
      functionality using React and Javascript to accomplish this.
    </p>

    <div className="ul-wrapper">
      <h2>Styles:</h2>
      <ul className="homepageList">
        <li><Link className="linkz pe-link" to={`color`}>Color</Link></li>
        <li><Link className="linkz pe-link" to={`typography`}>Typography</Link></li>
        <li><Link className="linkz pe-link" to={`styles-icons`}>Icons</Link></li>
        <li><Link className="linkz pe-link" to={`styles-buttons`}>Buttons</Link></li>
        <li><Link className="linkz pe-link" to={`responsive-utils`}>Responsive Utilities</Link></li>
        <li><Link className="linkz pe-link" to={`styles-inputs`}>Inputs</Link></li>
        <li><Link className="linkz pe-link" to={`forms`}>Forms</Link></li>
        <li><Link className="linkz pe-link" to={`styles-tables`}>Table</Link></li>
        <li><Link className="linkz pe-link" to={`presentation-strategies`}>Presentation Strategies</Link></li>
        <li><Link className="linkz pe-link" to={`grid`}>Grid</Link></li>
        <li><Link className="linkz pe-link" to={`templates`}>Templates</Link></li>
        <li><Link className="linkz pe-link" to={`bootstrap-grid`}>Bootstrap - Grid</Link></li>
      </ul>
    </div>

    <div className="ul-wrapper">
      <h2>React Components:</h2>
      <ul className="homepageList">
        <li><Link className="linkz pe-link" to={`buttons`}>Buttons</Link></li>
        <li><Link className="linkz pe-link" to={`icons`}>Icons</Link></li>
        <li><Link className="linkz pe-link" to={`inputs`}>Inputs</Link></li>
        <li><Link className="linkz pe-link" to={`dropdown`}>Dropdown</Link></li>
        <li><Link className="linkz pe-link" to={`footer`}>Footer</Link></li>
        <li><Link className="linkz pe-link" to={`tabs`}>Tabs</Link></li>
        <li><Link className="linkz pe-link" to={`loadingSpinner`}>Loading Spinner</Link></li>
        <li><Link className="linkz pe-link" to={`staticAlert`}>Static Alert</Link></li>
        <li><Link className="linkz pe-link" to={`calendar`}>Calendar</Link></li>
        <li><Link className="linkz pe-link" to={`table`}>Table</Link></li>
        <li><Link className="linkz pe-link" to={`datePicker`}>Date Picker</Link></li>
        <li><Link className="linkz pe-link" to={`timePicker`}>Time Picker</Link></li>
        <li><Link className="linkz pe-link" to={`progress-bar`}>Progress Bar</Link></li>
        <li><Link className="linkz pe-link" to={`phone-number`}>Phone Number</Link></li>
      </ul>
    </div>

    <p>Contributions: <a href="https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md">FAQ</a></p>
    <p>Pearson Elements SDK: <a href="http://pearson-higher-ed.github.io/elements/">http://pearson-higher-ed.github.io/elements/</a></p>
    <p>Design Site: <a href="http://pearson-higher-ed.github.io/design/">http://pearson-higher-ed.github.io/design/</a></p>
    <p>Unit Test Coverage: <a href="https://pearson-higher-ed.github.io/compounds/coverage/lcov-report/">https://pearson-higher-ed.github.io/compounds/coverage/lcov-report/</a></p>
    <p>HipChat Room: PDA-Help</p>
    <p>Email: pearson-design-accelerator@pearson.com</p>

  </div>
);


export default HomePage;
