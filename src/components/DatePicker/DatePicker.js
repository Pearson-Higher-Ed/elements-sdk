import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import moment               from 'moment';

import './DatePicker.scss';


export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      datepickerValue : this.props.datePickerValue,
      disablePast: this.props.disablePast ? this.props.disablePast : false,
      minDate: this.props.minDate ? this.props.minDate : null
    };

    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);
    this.datePickerOpen        = _datePickerOpen.bind(this);
    this.calendarHandler       = _calendarHandler.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
  }

  componentDidMount() {
    this.applyDatePickerStyles(this.props.inputState);
    document.addEventListener('click', this.clickListener);
  }

  componentWillReceiveProps(nextProps) {
    this.applyDatePickerStyles(nextProps.inputState);
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
      this.setState({ displayOpen: true });
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
    const { inputStyle, labelStyleTmp, labelStyle, displayOpen, datepickerValue,
            spanStyle, dateObject, containerStyle, placeholder, disablePast, minDate
          } = this.state;
    const { className, inputState, id, labelText, dateFormat, infoMessage,
            errorMessage
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
          {`${labelText} (${dateFormat})`}
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
          />
          <span className="pe-icon-wrapper">
            <Icon name="calendar-18" />
          </span>
        </div>

        {infoMessage  &&
          <span id={`infoMsg-${id}`} className="pe-input--info_message">
            {infoMessage}
          </span> }

        {errorMessage && inputState === 'error' &&
          <span id={`errMsg-${id}`} className="pe-input--error_message">
            {errorMessage}
          </span> }

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
            />
          </div> }

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
  minDate       : PropTypes.object
};

function _datePickerOpen() {
  const { inputState } = this.state;
  if(inputState !== 'readOnly' || inputState !== 'disabled'){
    this.setState({ displayOpen: true });
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

function _calendarHandler(date) {
  const changeHandlerParam = {
    target: {
      value: (date.selectedMonth + 1) + '/' + date.selectedDate + '/' + date.selectedYear
    }
  };
  this.setState({
    datepickerValue: moment(date.selectedDt).format('L'),
    dateObject: date.selectedDt,
    displayOpen: false,
    labelStyleTmp: this.state.labelStyle
  });
  this.changeHandler(changeHandlerParam);
};

function _applyDatePickerStyles(inputState) {
  let { labelStyle, inputStyle, labelFocusStyle, labelStyleTmp, containerStyle } = this.state;

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
