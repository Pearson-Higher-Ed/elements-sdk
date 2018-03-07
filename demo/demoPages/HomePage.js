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
      <h2>Styles</h2>
      <ul className="homepageList">
        <li><Link className="homepage-link pe-link" to={`color`}>Color</Link></li>
        <li><Link className="homepage-link pe-link" to={`typography`}>Typography</Link></li>
        <li><Link className="homepage-link pe-link" to={`styles-icons`}>Icons</Link></li>
        <li><Link className="homepage-link pe-link" to={`styles-buttons`}>Buttons</Link></li>
        <li><Link className="homepage-link pe-link" to={`responsive-utils`}>Responsive Utilities</Link></li>
        <li><Link className="homepage-link pe-link" to={`styles-inputs`}>Inputs</Link></li>
        <li><Link className="homepage-link pe-link" to={`forms`}>Forms</Link></li>
        <li><Link className="homepage-link pe-link" to={`styles-tables`}>Table</Link></li>
        <li><Link className="homepage-link pe-link" to={`presentation-strategies`}>Presentation Strategies</Link></li>
        <li><Link className="homepage-link pe-link" to={`grid`}>Grid</Link></li>
        <li><Link className="homepage-link pe-link" to={`templates`}>Templates</Link></li>
      </ul>
    </div>

    <div className="ul-wrapper">
      <h2>React Components</h2>
      <ul className="homepageList">
        <li><Link className="homepage-link pe-link" to={`buttons`}>Buttons</Link></li>
        <li><Link className="homepage-link pe-link" to={`icons`}>Icons</Link></li>
        <li><Link className="homepage-link pe-link" to={`inputs`}>Inputs</Link></li>
        <li><Link className="homepage-link pe-link" to={`dropdown`}>Dropdown</Link></li>
        <li><Link className="homepage-link pe-link" to={`footer`}>Footer</Link></li>
        <li><Link className="homepage-link pe-link" to={`tabs`}>Tabs</Link></li>
        <li><Link className="homepage-link pe-link" to={`loadingSpinner`}>Loading Spinner</Link></li>
        <li><Link className="homepage-link pe-link" to={`staticAlert`}>Static Alert</Link></li>
        <li><Link className="homepage-link pe-link" to={`calendar`}>Calendar</Link></li>
        <li><Link className="homepage-link pe-link" to={`table`}>Table</Link></li>
        <li><Link className="homepage-link pe-link" to={`datePicker`}>Date Picker</Link></li>
        <li><Link className="homepage-link pe-link" to={`timePicker`}>Time Picker</Link></li>
        <li><Link className="homepage-link pe-link" to={`progress-bar`}>Progress Bar</Link></li>
        <li><Link className="homepage-link pe-link" to={`phone-number`}>Phone Number</Link></li>
      </ul>
    </div>

    <p><b>Contributions:</b> <a href="https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md">FAQ</a></p>
    <p><b>Pearson Elements SDK:</b> <a href="http://pearson-higher-ed.github.io/elements/elements/">http://pearson-higher-ed.github.io/elements/elements/</a></p>
    <p><b>Design Site:</b> <a href="http://pearson-higher-ed.github.io/design/">http://pearson-higher-ed.github.io/design/</a></p>
    <p><b>Unit Test Coverage:</b> <a href="https://pearson-higher-ed.github.io/compounds/coverage/lcov-report/">https://pearson-higher-ed.github.io/compounds/coverage/lcov-report/</a></p>
    <p><b>HipChat Room:</b> PDA-Help</p>
    <p><b>Email:</b> pearson-design-accelerator@pearson.com</p>

  </div>
);


export default HomePage;
