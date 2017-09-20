import React, { Component } from 'react';

export default class Dates extends Component {

  statics = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    today: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
  }

  render() {
    let haystack;
    let day;
    let d;
    let current;
    let onClick;
    let isDate;
    let className;
    let isSecondaryDate;
    let isCurrentDate;
    let newSelectedDtClass='';
    const weekStack = Array(...{ length: 7 }).map(Number.call, Number);
    const { contrast, daysInMonth, firstOfMonth, year, monthNames, month, selectedDate,
            disablePast, minDate, onSelect, secondaryDate, dayNamesFull,
            selectedDt, weekStartDay } = this.props;
    const dayContrast = contrast ? 'date-inverse' :'';
    const disabledContrast = contrast ? '-inverse' : '';
    const that = this;
    const startDay = firstOfMonth.getUTCDay();
    const first = firstOfMonth.getDay();
    const janOne = new Date(year, 0, 1);
    let rows = 5;

    if (startDay === 5 && daysInMonth === 31 || startDay === 6 && daysInMonth > 29) rows = 6;
    if (startDay === 0 && daysInMonth === 28) rows = 4;

    className = rows === 6 ? 'pe-cal-dates' : 'pe-cal-dates pe-cal-fix';
    haystack = Array(...{ length: rows }).map(Number.call, Number);
    day = this.props.weekStartDay + 1 - first;
    while (day > 1) {
      day -= 7;
    }
    day -= 1;

    return (
      <div className={className}
           role="grid"
           tabIndex="0"
           aria-activedescendant={`day${selectedDate}`}
           aria-labelledby="pe-cal-month"
      >
        {haystack.map((item, i) => {
          d = day + i * 7;
          return (
            <div className="pe-cal-row" role="row" key={`row${i}`}>
              {weekStack.map((item, i) => {
                d += 1;
                isDate = d > 0 && d <= daysInMonth;

                if (isDate) {
                  current = new Date(year, month, d);
                  className = "pe-cal-cell pe-cal-date";
                  if (disablePast && current < that.statics.today) {
                       className += " pe-cal-past";
                  } else if (minDate !== null && current < minDate) {
                              className += " pe-cal-past";
                  }

                  if (/pe-cal-past/.test(className)) {
                    return (
                      <div className={`${className}${disabledContrast} pe-label`}
                           aria-disabled={true}
                           id={`day${d}`}
                           key={`day${d}`}
                           tabIndex="-1"
                      >
                        {d}
                      </div>
                    );
                  }
                  {isCurrentDate = current.getDate().toString().split(' ')==that.statics.date && firstOfMonth.getMonth().toString().split(' ')==that.statics.month;}
                  {isSecondaryDate = secondaryDate.some(date => date.getTime()===current.getTime())}
                  {newSelectedDtClass = (selectedDt.getTime() === current.getTime() && (selectedDt.getDate() !== that.statics.date || selectedDt.getMonth() !== that.statics.month)) ? 'pe-cal-selected' :'';}

                  return (
                    <div className={`${className} pe-label ${dayContrast}`} key={`day${d}`}>
                      <div className={isCurrentDate ? 'currentDate-box': ''}>
                         <div className={`pe-cal-cell-square ${isSecondaryDate ? 'secondary-date':''} ${newSelectedDtClass}`}
                            id={`day${d}`}
                            role="gridcell"
                            aria-label={`${dayNamesFull[(i + weekStartDay) % 7]} ${monthNames[month]} ${d}`}
                            aria-current={isCurrentDate ? 'date' : null}
                            tabIndex="-1"
                            onClick={onSelect.bind(that, year, month, d)}
                           >
                           {d}
                           {isCurrentDate && <span className="pe-sr-only">Current date</span>}
                           {isSecondaryDate && <span className="pe-sr-only">Secondary date</span>}
                         </div>
                       </div>
                    </div>
                  );
                }

                return <div className="pe-cal-cell" key={`day${d}`} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
};