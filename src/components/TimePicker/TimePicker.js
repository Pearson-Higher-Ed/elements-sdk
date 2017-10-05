import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon }             from '../../index';
import { List }             from './components/List';
import moment               from 'moment';

import './TimePicker.scss';


export default class TimePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusStartIndex : 0,
      timepickerValue : this.props.timepickerValue
    };

    this.applyTimePickerStyles = _applyTimePickerStyles.bind(this);
    this.timepickerOpen       = _timepickerOpen.bind(this);
    this.listHandler           = _listHandler.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
    this.inputEvents           = _inputEvents.bind(this);
    this.listEventInterface    = _listEventInterface.bind(this);

  }

  componentDidMount(){
    this.applyTimePickerStyles(this.props.inputState);
    document.addEventListener('click', this.clickListener);
  }

  componentWillReceiveProps(nextProps){
    this.applyTimePickerStyles(this.state.validatedState ? this.state.validatedState : nextProps.inputState);
    this.setState({timepickerValue: nextProps.timepickerValue});
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

  render() {

    const { inputStyle, labelStyleTmp, labelStyle, displayOpen, timepickerValue,
            spanStyle, containerStyle, placeholder
          } = this.state;
    const { className, inputState, id, labelText, timeFormat, infoMessage,
            errorMessage, twentyFourHour, TWENTYFOUR_HOURS, HOURS, disableLabel
          } = this.props;

    const em                  = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby     = em + (infoMessage ? `infoMsg-${id}` : '');
    const mainContainerStyles = className  ? `pe-timepicker-main ${className}`:`pe-timepicker-main`;
    const inputStyles         = inputStyle ? `pe-timepicker-input-styles ${inputStyle}`:`pe-timepicker-input-styles`;
    const hoursToList         = twentyFourHour ? TWENTYFOUR_HOURS : HOURS;
    const labelCheck          = disableLabel ? ' pe-sr-only' :'';

    return (
      <div
        className={mainContainerStyles}
        onKeyDown={this.inputEvents}
        onClick={this.timepickerOpen}
        ref={(dom) => this.container = dom}
      >
        <label className={`${labelStyleTmp}${labelCheck}`} htmlFor={id}>
          {`${labelText} (${timeFormat})`}
        </label>

        <div className={containerStyle}>
          <input
            ref              = {(input) => this.input = input}
            type             = "text"
            id               = {id}
            placeholder      = {placeholder}
            value            = {timepickerValue}
            className        = {inputStyles}
            aria-describedby = {ariaDescribedby}
            aria-invalid     = {inputState === 'error'}
            disabled         = {inputState === 'disabled'}
            readOnly         = {inputState === 'readOnly'}
            onChange         = {this.changeHandler}
          />
          <span className="pe-icon-wrapper">
            <Icon name="clock-18" />
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
          <div className="pe-dropdown-container">
            <List
              id={`${id}-list`}
              listRef={ul => this.list = ul}
              listEvents={this.listEventInterface}
              itemsToList={hoursToList}
              selectedItem={timepickerValue}
              itemToParent={this.listHandler}
            />
          </div> }

      </div>
    );

  }

}


TimePicker.defaultProps = {
  HOURS            : ["1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"],
  TWENTYFOUR_HOURS : ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]
};


TimePicker.propTypes = {
  id               : PropTypes.string.isRequired,
  labelText        : PropTypes.string.isRequired,
  timeFormat       : PropTypes.string.isRequired,
  changeHandler    : PropTypes.func.isRequired,
  infoMessage      : PropTypes.string,
  errorMessage     : PropTypes.string,
  inputState       : PropTypes.string,
  className        : PropTypes.string,
  HOURS            : PropTypes.array,
  TWENTYFOUR_HOURS : PropTypes.array,
  twentyFourHour   : PropTypes.bool,
  disableLabel     : PropTypes.bool
};


function _timepickerOpen(){
  const { inputState } = this.state;
  if(inputState !== 'readOnly' || inputState !== 'disabled'){
    this.setState({ displayOpen: !this.state.displayOpen });
    this.input.focus();
  }
};

function _changeHandler(e){
  this.setState({
    timepickerValue: e.target.value,
    displayOpen: false,
    labelStyleTmp: this.state.labelStyle
  });
  this.props.changeHandler.call(this, e.target.value);
};

function _listHandler(e){
  const changeHandlerParam = {
    target: {
      value: e.target.innerText.toUpperCase()
    }
  };
  this.setState({
    timepickerValue: e.target.innerText,
    displayOpen: false,
    labelStyleTmp: this.state.labelStyle
  });
  this.changeHandler(changeHandlerParam);
};

function _inputEvents(e){
  switch(e.which){
    case 40:  //down arrow
      e.preventDefault();
      this.list.children[0].focus();
      break;
    case 27:  //esc
      this.setState({ displayOpen:false, labelStyleTmp:this.state.labelStyle });
      this.input.focus();
      break;
    case 9:   //tab
      this.setState({ displayOpen:false, labelStyleTmp:this.state.labelStyle });
      break;
    case 13:
      this.setState({ displayOpen: !this.state.displayOpen });
      break;
  };
};

function _listEventInterface(e) {
  let { focusStartIndex } = this.state;

  switch(e.which){
    case 40:  //down arrow
      e.stopPropagation();
      e.preventDefault();
      if(focusStartIndex >= 0 && focusStartIndex < this.list.children.length - 1){
        focusStartIndex++;
        this.setState({focusStartIndex});
        this.list.children[focusStartIndex].focus();
        this.list.setAttribute("aria-activedescendant", this.list.children[focusStartIndex].id);
      }
      break;
    case 38:  //up arrow
      e.stopPropagation();
      e.preventDefault();
      if(focusStartIndex > 0 && focusStartIndex < this.list.children.length){
        focusStartIndex--;
        this.setState({focusStartIndex});
        this.list.children[focusStartIndex].focus();
        this.list.setAttribute("aria-activedescendant", this.list.children[focusStartIndex].id);
      }
      break;
    case 13:  //enter
      e.preventDefault();
      this.listHandler(e);
      this.setState({ displayOpen: false });
      this.input.focus();
      break;
  };
};

function _applyTimePickerStyles(inputState) {
  let { labelStyle, inputStyle, labelFocusStyle, labelStyleTmp, containerStyle } = this.state;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      inputStyle      = 'pe-textInput--basic_error';
      containerStyle  = 'pe-timepicker-container';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      containerStyle  = 'pe-timepicker-container';
      inputStyle      = 'pe-textInput--basic';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--input_readonly';
      containerStyle  = 'pe-timepicker-container';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
      inputStyle      = 'pe-textInput--basic';
      containerStyle  = 'pe-timepicker-container';
  };

  this.setState({
    labelStyle,
    labelStyleTmp: labelStyle,
    inputStyle,
    labelFocusStyle,
    containerStyle
  });
};
