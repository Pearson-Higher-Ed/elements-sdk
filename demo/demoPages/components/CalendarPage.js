import React from 'react';
import { Calendar } from '../../../index';

const CalendarPage = () => (
  <div className="displaySection">
    <h2><a href="http://pearson-higher-ed.github.io/design/c/calendar/" target="_blank">Calendar</a></h2>
    <div className="elementContainer">
      <div className="code">
        <h3>Props</h3>
        <h4>Optional:</h4>
          <ul>
            <li className="li-props" style={{fontSize: 14}}><b>If needing to i8ln, pass those new values into the following three props.
            Otherwise, they default to English.</b></li>
            <li className="li-props">dayNamesFull:Array === {`['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', `}<br/>
            {`'Saturday', 'Sunday']`}</li>
            <li className="li-props">Passed into the weekdays {`<abbr>`}.</li>
            <li className="li-props">dayNamesShort:Array === {`['S', 'M', 'T', 'W', 'T', 'F', 'S']`}</li>
            <li className="li-props">Days displayed in the Calendar.</li>
            <li className="li-props">monthNamesFull:Array === {`["January", "February", "March", "April", "May", "June", `}<br/>
            {`"July", "August", "September", "October", "November", "December"]`}</li>
            <li className="li-props">disablePast:Boolean === {`<Calendar disablePast />`}</li>
            <li className="li-props"><i>disablePast</i> will disable all dates prior to the current date.</li>
            <li className="li-props">minDate:Object === {`<Calendar minDate={new Date(2017, 8, 13)} />`}</li>
            <li className="li-props"><i>minDate</i> accepts a Date Object (year, month, date) and will disable
            everything prior to the <br/>specified date.</li>
            <li className="li-props">newSelectedDt:Object === {`<Calendar newSelectedDt={new Date(2017, 9, 15)}`}</li>
            <li className="li-props"><i>newSelectedDt</i> accepts a Date Object (year, month, date) and will update
            the selectedDt in state and <br/>have it selected on load.</li>
            <li className="li-props">onSelect:Function === {`<Calendar onSelect={(date) => console.log(date)} />`}</li>
            <li className="li-props">Callback fired on new date selection.  This will expose the state Object.</li>
            <li className="li-props">contrast:Boolean === {`<Calendar contrast />`}</li>
            <li className="li-props"><i>contrast</i> will apply a blue background and make the text white.</li>
            <li className="li-props">weekStartDay:Number === {`<Calendar weekStartDay={1} />`}</li>
            <li className="li-props">The Calendar will default to Sunday starting the week.  <i>weekStartDay</i>
            allows you to change that by <br/>passing in the index of the day you would like.
            0 - 6 are acceptable to use.</li>
            <li className="li-props">secondaryDate:Array === {`<Calendar secondaryDate={[new Date(2017, 8, 13)]} />`}</li>
            <li className="li-props"><i>secondaryDate</i> accepts a Date object (year, month, date) and is
            used to apply a secondary indicator<br/> for the specified date(s).</li>
          </ul>
      </div>

      <h3 style={{marginTop: 4}}>Example Usage</h3>
        <p className="code" style={{width: '20%', textAlign: 'center'}}>
          {`<Calendar />`}
        </p>

      <Calendar />
    </div>

  </div>
);

export default CalendarPage;
