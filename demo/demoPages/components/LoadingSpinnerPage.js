import React            from 'react';
import { LoadingSpinner } from '../../../index';


const LoadingSpinnerPage = () => (
      <div className="displaySection">
        <h2><a href="http://pearson-higher-ed.github.io/design/c/loading-indicator/">Loading Spinner</a></h2>

        <div className="elementContainer">

          <div className="code">
            <h3>Props:</h3>
            <ul>
              <li>No Props</li>
            </ul>
          </div>

          <h3>Loading Spinner</h3>
          <br />
          <LoadingSpinner />
          <br />
          <p className="code">{'<LoadingSpinner />'}</p>
        </div>

      </div>
    )


export default LoadingSpinnerPage;
