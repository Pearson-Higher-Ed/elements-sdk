import React from 'react';
import { Accordion }   from '../../../index';


const AccordionPage = () => (
    <div style={{padding: 12}}>
        <h1><a href="https://pearson.invisionapp.com/boards/ME3FMQI3F5XH9/">Accordion</a></h1>
                
                <p>The main points are:<br/>
                1. Use the same trigger pattern (downward chevron for closed, upward for open)<br/>
                2. Align content to it's own column with the heading text, not the trigger<br/>
                3. Headings can include more complex elements than just text.</p>
      <Accordion title={
      <div>
          <svg focusable="false" className="pe-icon--book-18" role="img" aria-label>
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#book-18" />
                            </svg>
                            <span className="pe-title">Accordion Title One</span>
        </div>}>
        <div className="pe-accordion-item">
            <span className="pe-label">Item One</span>
        </div>
        <div className="pe-accordion-item">
            <span className="pe-label">Item Two</span>
        </div>
        <div className="pe-accordion-item">
            <span className="pe-label">Item Three</span>
        </div>
      </Accordion>
      <Accordion title={<span className="pe-title">Accordion Title Two</span>}>
        <div className="pe-accordion-item">
            <span className="pe-label">Item One</span>
        </div>
        <div className="pe-accordion-item">
            <span className="pe-label">Item Two</span>
        </div>
        <div className="pe-accordion-item">
            <span className="pe-label">Item Three</span>
        </div>
      </Accordion>
    </div>
  );
  
export default AccordionPage;






