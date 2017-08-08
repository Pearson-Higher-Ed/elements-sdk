import React            from 'react';
import { LoadingSpinner } from '../../index';


const LoadingSpinnerPage = () => (
      <div className="displaySection">
        <h2>Loading Spinner</h2>

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
