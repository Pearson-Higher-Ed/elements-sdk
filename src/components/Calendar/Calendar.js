import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './components/Header';
import WeekDays from './components/WeekDays';
import Dates from './components/Dates';
import './Calendar.scss';


export default class Calendar extends Component {

  static propTypes = {
    disablePast: PropTypes.bool,
    minDate: PropTypes.object,
    secondaryDate: PropTypes.array,
    onSelect: PropTypes.func,
    contrast: PropTypes.bool,
    dayNamesFull: PropTypes.array,
    monthNamesFull: PropTypes.array,
    weekStartDay: PropTypes.number,
    dayNamesShort: PropTypes.array,
    newSelectedDt: PropTypes.object
  }

  static defaultProps = {
    disablePast: false,
    contrast: false,
    weekStartDay: 0
  }

  constructor(props) {
    super(props);

    const date = new Date();
    const { minDate, disablePast, contrast, dayNamesFull, monthNamesFull,
            weekStartDay, secondaryDate, dayNamesShort, newSelectedDt } = this.props;

    this.state = {
      year: newSelectedDt ? newSelectedDt.getFullYear() : date.getFullYear(),
      month: newSelectedDt ? newSelectedDt.getMonth() : date.getMonth(),
      selectedYear: newSelectedDt ? newSelectedDt.getFullYear() : date.getFullYear(),
      selectedMonth: newSelectedDt ? newSelectedDt.getMonth() : date.getMonth(),
      selectedDate: newSelectedDt ? newSelectedDt.getDate() : date.getDate(),
      selectedDt: newSelectedDt || new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      weekStartDay: weekStartDay,
      minDate: minDate ? minDate : null,
      secondaryDate: secondaryDate ? secondaryDate : [],
      disablePast: disablePast ? disablePast : false,
      contrast: contrast,
      dayNames: dayNamesShort || ["S", "M", "T", "W", "T", "F", "S"],
      dayNamesFull: dayNamesFull || ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"],
      monthNamesFull: monthNamesFull || ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December"],
      firstOfMonth: null,
      daysInMonth: null
    }
  }

  calc = (year, month) => {
    const selectInverse = this.props.contrast ? '-inverse' :'';
    if (this.state.selectedElement) {
      if (this.state.selectedMonth !== month || this.state.selectedYear !== year) {
        this.state.selectedElement.classList.remove(`pe-cal-selected${selectInverse}`);
      } else {
        this.state.selectedElement.classList.add(`pe-cal-selected${selectInverse}`);
      }
    }
    return {
      firstOfMonth: new Date(year, month, 1),
      daysInMonth: new Date(year, month + 1, 0).getDate()
    };
  }

  componentWillMount() {
    this.setState(this.calc.call(null, this.state.year, this.state.month));
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onSelect && prevState.selectedDt !== this.state.selectedDt) {
      this.props.onSelect.call(ReactDOM.findDOMNode(this), this.state);
    }
  }

  handleKeys = (e) => {
    var which = e.which || e.keyCode;
    if (which === 37 || which === 38 || which === 39 || which === 40) {
      e.preventDefault();
    }

    switch (which) {
      case 13: this.enterSelect(); break;
      case 37: this.leftArrow(); break;
      case 38: this.upArrow(); break;
      case 39: this.rightArrow(); break;
      case 40: this.downArrow(); break;
      default: break;
    }
  }

  leftArrow = () => {
    if (this.state.selectedDate <= 1) {
      this.getPrev();
      this.setState({selectedDate: this.state.daysInMonth});
      document.getElementById(`day${this.state.daysInMonth}`).focus();
    } else {
      this.setState({selectedDate: this.state.selectedDate - 1});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    }
  }

  rightArrow = () => {
    if (this.state.selectedDate >= this.state.daysInMonth) {
      this.getNext();
      this.setState({selectedDate: 1});
      document.getElementById('day1').focus();
    } else {
      this.setState({selectedDate: this.state.selectedDate + 1});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    }
  }

  upArrow = () => {
    if (this.state.selectedDate - 7 < 1) {
      const dayDiff = this.state.selectedDate - 7;
      this.getPrev();
      this.setState({selectedDate: this.state.daysInMonth + dayDiff});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    } else {
      this.setState({selectedDate: this.state.selectedDate - 7});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    }
  }

  downArrow = () => {
    if (this.state.selectedDate + 7 > this.state.daysInMonth) {
      const diff = (this.state.selectedDate + 7) - this.state.daysInMonth;
      this.setState({selectedDate: diff});
      this.getNext();
      document.getElementById(`day${this.state.selectedDate}`).focus();
    } else {
      this.setState({selectedDate: this.state.selectedDate + 7});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    }
  }

  getPrev = () => {
    const state = {};
    if (this.state.month > 0) {
      state.month = this.state.month - 1;
      state.year = this.state.year;
    } else {
      state.month = 11;
      state.year = this.state.year - 1;
    }
    Object.assign(state, this.calc.call(null, state.year, state.month));
    this.setState(state);
  }

  getNext = () => {
    const state = {};
    if (this.state.month < 11) {
      state.month = this.state.month + 1;
      state.year = this.state.year;
    } else {
      state.month = 0;
      state.year = this.state.year + 1;
    }
    Object.assign(state, this.calc.call(null, state.year, state.month));
    this.setState(state);
  }

  selectDate = (year, month, date, element) => {
    if (this.state.selectedElement) {
      this.state.selectedElement.classList.remove('pe-cal-selected');
      this.state.selectedElement.removeAttribute('aria-selected');
    }
    element.target.classList.add('pe-cal-selected');
    element.target.setAttribute('aria-selected', true);
    this.setState({
      selectedYear: year,
      selectedMonth: month,
      selectedDate: date,
      selectedDt: new Date(year, month, date),
      selectedElement: element.target
    });
  }

  enterSelect = () => {
    const icons = document.querySelectorAll('button.pe-arrowIcons');
    const days = document.querySelectorAll('div.pe-cal-cell-square');
    if (this.state.selectedElement) {
      this.state.selectedElement.classList.remove('pe-cal-selected');
      this.state.selectedElement.removeAttribute('aria-selected');
    }
    if (document.activeElement.hasAttribute('aria-disabled')) return;
    for (let i = 0; i < days.length; i++) {
      if (document.activeElement === days[i]) {
        document.activeElement.classList.add('pe-cal-selected');
        document.activeElement.setAttribute('aria-selected', true);
        this.setState({
          selectedYear: this.state.year,
          selectedMonth: this.state.month,
          selectedDate: parseInt(document.activeElement.innerText),
          selectedDt: new Date(this.state.year, this.state.month, parseInt(document.activeElement.innerText)),
          selectedElement: document.activeElement
        });
      }
    }
  }

  render() {
    const { monthNamesFull, month, year, dayNames, weekStartDay, daysInMonth,
            firstOfMonth, selectedDate, disablePast, minDate, dayNamesFull,
            contrast, secondaryDate, selectedDt } = this.state;

    const colorSwap = contrast ? 'calendar-contrast' :'';

    return (
      <div className={`pe-calendar ${colorSwap}`}>
        <div className="pe-inner">
          <Header
            monthNames={monthNamesFull}
            month={month}
            contrast={contrast}
            year={year}
            onPrev={this.getPrev}
            onNext={this.getNext} />

          <WeekDays
            contrast={contrast}
            dayNames={dayNames}
            dayNamesFull={dayNamesFull}
            weekStartDay={weekStartDay} />

          <Dates
            selectedDt={selectedDt}
            month={month}
            monthNames={monthNamesFull}
            year={year}
            contrast={contrast}
            selectedDate={selectedDate}
            daysInMonth={daysInMonth}
            dayNamesFull={dayNamesFull}
            firstOfMonth={firstOfMonth}
            weekStartDay={weekStartDay}
            onSelect={this.selectDate}
            disablePast={disablePast}
            minDate={minDate}
            secondaryDate={secondaryDate} />
        </div>
      </div>
    );
  }
};
