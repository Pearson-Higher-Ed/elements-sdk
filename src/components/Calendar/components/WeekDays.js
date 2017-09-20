import React, { Component } from 'react';

export default class WeekDays extends Component {

  render() {
    const { dayNamesFull, dayNames, weekStartDay, contrast } = this.props;
    const dayNumbers = Array(...{ length: 7 }).map(Number.call, Number);
    const inverseColor = contrast ? 'inverse-dayNames' :'';

    return (
      <div className="pe-cal-row pe-cal-weekdays">
        {dayNumbers.map((item, i) => {
          return (
            <div className={`pe-cal-cell pe-label--small pe-cal-cell-dayNames ${inverseColor}`}
                 key={`weekday${i}`}
            >
              <abbr title={dayNamesFull[(weekStartDay + i) % 7]}>
                {dayNames[(weekStartDay + i) % 7]}
              </abbr>
            </div>
          );
        })}
      </div>
    );
  }
};
