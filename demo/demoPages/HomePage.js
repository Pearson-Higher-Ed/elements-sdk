import React    from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => (
        <div className="homepage">

          <h1>Atomic React Components</h1>

          <p>Welcome to Compounds SDK! This SDK is an Open Source, Accessible (a11y),
            Unified Brand that is International Ready (i18n, l10n). </p>

          <h2>React Components:</h2>

          <ul className="homepageList">
            <li><Link className="link_homepage" to={`buttons`}>Buttons</Link></li>
            <li><Link className="link_homepage" to={`icons`}>Icons</Link></li>
            <li><Link className="link_homepage" to={`inputs`}>Inputs</Link></li>
            <li><Link className="link_homepage" to={`dropdown`}>Dropdown</Link></li>
            <li><Link className="link_homepage" to={`footer`}>Footer</Link></li>
            <li><Link className="link_homepage" to={`tabs`}>Tabs</Link></li>
            <li><Link className="link_homepage" to={`loadingSpinner`}>Loading Spinner</Link></li>
            <li><Link className="link_homepage" to={`staticAlert`}>Static Alert</Link></li>
          </ul>

          <p>Contributions: <a href="https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md">FAQ</a></p>
          <p>Pearson Elements SDK: <a href="http://pearson-higher-ed.github.io/elements/">http://pearson-higher-ed.github.io/elements/</a></p>
          <p>Design Site: <a href="http://pearson-higher-ed.github.io/design/">http://pearson-higher-ed.github.io/design/</a></p>
          <p>Unit Test Coverage: <a href="https://pearson-higher-ed.github.io/compounds/coverage/lcov-report/">https://pearson-higher-ed.github.io/compounds/coverage/lcov-report/</a></p>
          <p>HipChat Room: PDA-Help</p>
          <p>Email: pearson-design-accelerator@pearson.com</p>

        </div>
      )


export default HomePage;
