import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../../index';

import './DatePicker.scss';


export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      datepickerValue : this.props.datePickerValue
    };

    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);
    this.datePickerOpen        = _datePickerOpen.bind(this);
    this.calendarHandler       = _calendarHandler.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
    this.parseDate             = _parseDate.bind(this);
  }

  componentDidMount() {
    this.applyDatePickerStyles(this.props.inputState);
    document.addEventListener('click', this.clickListener);
  }

  componentWillReceiveProps(nextProps) {
    this.applyDatePickerStyles(nextProps.inputState);
    this.setState({datepickerValue: nextProps.datePickerValue});
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickListener);
  }

  clickListener = (e) => {
    const currentElement = e.target;

    if (!this.container.contains(currentElement)) {
      this.setState({ displayOpen: false });
    }
  }

  handleKeys = (e) => {
    if (e.which === 27) {
      this.setState({ displayOpen: false });
      this.input.focus();
    }
    if (e.altKey && e.which === 40) {
      const enteredDate = this.parseDate(e.target.value);
      this.setState({
        displayOpen: true,
        dateObject: enteredDate
      });
    }
  }

  focusCheck = (e) => {
    if (document.activeElement === this.cal.children[0].children[0].children[2]) {
      if (!(e.shiftKey) && e.which === 9) {
        this.setState({ displayOpen: false });
      }
    }
    if (document.activeElement === this.cal.children[0].children[0].children[0].children[1]) {
      if (e.shiftKey && e.which === 9) {
        this.setState({ displayOpen: false });
      }
    }
  }

  render() {
    const { inputStyle, labelStyleTmp, displayOpen, datepickerValue,
            dateObject, containerStyle, placeholder } = this.state;
    const { className, inputState, id, labelText, infoMessage, errorMessage,
            dayNamesFull, monthNamesFull, weekStartDay, dayNamesShort, disablePast, minDate
          } = this.props;

    const em                  = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby     = em + (infoMessage ? `infoMsg-${id}` : '');
    const mainContainerStyles = className  ? `pe-datepicker-main ${className}`:`pe-datepicker-main`;
    const inputStyles         = inputStyle ? `pe-datepicker-input-styles ${inputStyle}`:`pe-datepicker-input-styles`;

    return (
      <div
        className={mainContainerStyles}
        onKeyDown={this.handleKeys}
        onClick={this.datePickerOpen}
        ref={(dom) => this.container = dom}
      >
        <label className={labelStyleTmp} htmlFor={id}>
          {labelText}
        </label>

        <div className={containerStyle}>
          <input
            ref              = {(input) => this.input = input}
            type             = "text"
            id               = {id}
            placeholder      = {placeholder}
            value            = {datepickerValue}
            className        = {inputStyles}
            aria-describedby = {ariaDescribedby}
            aria-invalid     = {inputState === 'error'}
            disabled         = {inputState === 'disabled'}
            readOnly         = {inputState === 'readOnly'}
            onChange         = {this.changeHandler}
            autoComplete     = "off"
          />
          <span className="pe-icon-wrapper">
            <Icon name="calendar-18" />
          </span>
        </div>

        {infoMessage  &&
          <span id={`infoMsg-${id}`} className="pe-input--info_message">
            {infoMessage}
          </span>}

        {errorMessage && inputState === 'error' &&
          <span id={`errMsg-${id}`} className="pe-input--error_message">
            <Icon name="warning-sm-18">Error</Icon> {errorMessage}
          </span>}

        {displayOpen  && inputState !== 'readOnly' &&
          <div
            ref={(div) => this.cal = div}
            onKeyDown={this.focusCheck}
          >
            <Calendar
              disablePast={disablePast}
              minDate={minDate}
              newSelectedDt={dateObject}
              onSelect={this.calendarHandler}
              dayNamesFull={dayNamesFull}
              monthNamesFull={monthNamesFull}
              weekStartDay={weekStartDay}
              dayNamesShort={dayNamesShort}
            />
          </div>}

      </div>
    );

  }

}

DatePicker.propTypes = {
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  dateFormat    : PropTypes.string.isRequired,
  changeHandler : PropTypes.func.isRequired,
  infoMessage   : PropTypes.string,
  errorMessage  : PropTypes.string,
  inputState    : PropTypes.string,
  className     : PropTypes.string,
  disablePast   : PropTypes.bool,
  minDate       : PropTypes.object,
  dayNamesFull  : PropTypes.arrayOf(PropTypes.string),
  monthNamesFull: PropTypes.arrayOf(PropTypes.string),
  weekStartDay  : PropTypes.number,
  dayNamesShort : PropTypes.arrayOf(PropTypes.string)
};

DatePicker.defaultProps = {
  dateFormat: 'mm/dd/yyyy',
  inputState: ''
}

function _datePickerOpen() {
  const { inputState } = this.props;
  const enteredDate = this.parseDate(this.state.datepickerValue || '');

  if (inputState === '' || inputState === 'default' || inputState === 'error') {
    this.setState({
      dateObject: enteredDate,
      displayOpen: true
    });
  }
};

function _changeHandler(e) {
  this.setState({
    datepickerValue: e.target.value,
    displayOpen: false,
    labelStyleTmp: this.state.labelStyle
  });
  this.props.changeHandler.call(this, e.target.value);
  this.input.focus();
};

function _parseDate(dateString) {
  const dateParts = dateString.split('/');
  if (dateParts.length !== 3) {
    return
  };

  const dayPart = this.props.dateFormat.toLowerCase() === 'dd/mm/yyyy' ? dateParts[0] : dateParts[1];
  const monthPart = this.props.dateFormat.toLowerCase() === 'dd/mm/yyyy' ? dateParts[1] : dateParts[0];

  const year = Number.parseInt(dateParts[2]);
  if (Number.isNaN(year) || year < 1900 || year > 9999) {
    return
  };

  const isLeapYear = year % 4 === 0;

  const month = Number.parseInt(monthPart);
  if (Number.isNaN(month) || month < 1 || month > 12) {
    return
  };

  const day = Number.parseInt(dayPart);
  if (Number.isNaN(day) || day < 1 || day > 31) {
    return
  };

  if ((!isLeapYear && month === 2 && day > 28) ||
      (isLeapYear && month === 2 && day > 29) ||
      ([4, 6, 9, 11].includes(month) && day > 30)) {
    return;
  }

  return new Date(year, month - 1, day);
}

function _calendarHandler(date) {
  let dateString = (date.selectedMonth + 1) + '/' + date.selectedDate + '/' + date.selectedYear;

  if (this.props.dateFormat.toLowerCase() === 'dd/mm/yyyy') {
    dateString = date.selectedDate + '/' + (date.selectedMonth + 1) + '/' + date.selectedYear;
  }

  const changeHandlerParam = {
    target: {
      value: dateString
    }
  };

  this.setState({
    datepickerValue: dateString,
    dateObject: date.selectedDt,
    displayOpen: false,
    labelStyleTmp: this.state.labelStyle
  });
  this.changeHandler(changeHandlerParam);
};

function _applyDatePickerStyles(inputState) {
  let { labelStyle, inputStyle, labelFocusStyle, containerStyle } = this.state;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      inputStyle      = 'pe-textInput--basic_error';
      containerStyle  = 'pe-datepicker-container';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      containerStyle  = 'pe-datepicker-container';
      inputStyle      = 'pe-textInput--basic';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--input_readonly';
      containerStyle  = 'pe-datepicker-container';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
      inputStyle      = 'pe-textInput--basic';
      containerStyle  = 'pe-datepicker-container';
  };

  this.setState({
    labelStyle,
    labelStyleTmp: labelStyle,
    inputStyle,
    labelFocusStyle,
    containerStyle
  });
};
