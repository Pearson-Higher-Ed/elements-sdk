import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon }             from '../index.js';


class Select extends Component {

  constructor(props){
    super(props);
    this.state = {};

    this.applySelectStyles = _applySelectStyles.bind(this);

  }

  componentDidMount() {
    this.applySelectStyles();
  }


  render() {

    const { labelStyle, inputStyle, spanStyle, selectStyle, containerStyle, containerFocusStyle, disabledStyle, containerStyleTmp, labelFocusStyle, labelStyleTmp } = this.state;
    const { id, fancy, labelText, inputState, options, infoMessage, errorMessage, changeHandler, selectedOption } = this.props;

    const em = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby =  em + ((infoMessage) ? `infoMsg-${id}` : '');

      return (
        <div>
          <label className={labelStyleTmp} htmlFor={id}>{labelText}</label>
          <div className={containerStyleTmp}>
            <select id           = {id}
                    defaultValue = {selectedOption}
                    className    = {selectStyle}
                    aria-invalid     = {inputState === 'error'}
                    aria-describedby = {ariaDescribedby}
                    disabled         = {inputState === 'disabled'}
                    readOnly         = {inputState === 'readOnly'}
                    onFocus      = { () => this.setState({labelStyleTmp:labelFocusStyle, containerStyleTmp:containerFocusStyle}) }
                    onBlur       = { () => this.setState({labelStyleTmp:labelStyle, containerStyleTmp:containerStyle}) }
                    onChange     = { changeHandler }
                    >
              {options.map((o, i) => <option key={`select-${id}-${i}`}>{o}</option>)}
            </select>
            {fancy && <span className={spanStyle} />}
            <Icon name='dropdown-open-18' />
          </div>
            {infoMessage  && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
            {inputState === 'error' && errorMessage && <span id={`errMsg-${id}`} className="pe-input--error_message">{errorMessage}</span>}
        </div>
      )

  }

};


export default Select;


Select.propTypes = {
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  options       : PropTypes.array.isRequired,
  'aria-describedby' : PropTypes.string,
  'aria-invalid'     : PropTypes.bool,
  changeHandler : PropTypes.func.isRequired,
  infoMessage   : PropTypes.string,
  errorMessage  : PropTypes.string,
  fancy         : PropTypes.bool,
  inputState    : PropTypes.string
};


function _applySelectStyles() {

        let { containerStyle, containerStyleTmp, containerFocusStyle, labelStyle, selectStyle, spanStyle, disabledStyle, labelFocusStyle, labelStyleTmp } = this.state;
        const { fancy, inputState } = this.props;

        switch (inputState) {
          case 'error':
            labelStyle          = 'pe-textLabelInput__label--label_error';
            selectStyle         = fancy ? 'pe-selectInput-fancy-error' : 'pe-select--basic_error';
            spanStyle           = fancy ? 'pe-inputError_underline'          : '';
            containerStyle      = fancy ? 'pe-select-container-fancy-error'       : 'pe-select-container-error';
            labelFocusStyle     = 'pe-textLabelInput__label--label_error';
            containerFocusStyle = fancy ? 'pe-select-container-fancy-error-focus' : 'pe-select-container-focus-error';
            break;
          case 'disabled':
            labelStyle      = 'pe-textLabelInput__label';
            selectStyle     = fancy ? 'pe-selectInput-fancy-disabled'      : 'pe-select-container-disabled';
            spanStyle       = '';
            disabledStyle   = 'disabled';
            containerStyle  = fancy ? 'pe-select-container-fancy-disabled' : 'pe-select-container-disabled';
            labelFocusStyle = 'pe-textLabelInput__label';
            break;
          case 'readOnly':
            labelStyle      = 'pe-textLabelInput__label';
            selectStyle     = fancy ? 'pe-selectInput-fancy-readonly' : 'pe-select-container-readonly';
            spanStyle       = '';
            disabledStyle   = 'disabled';
            containerStyle  = fancy ? 'pe-select-container-fancy-readonly' : 'pe-select-container-readonly';
            labelFocusStyle = 'pe-textLabelInput__label';
            break;
          default:
            labelStyle      = 'pe-textLabelInput__label';
            selectStyle     = fancy ? 'pe-selectInput--fancy'      : 'pe-selectInput--basic';
            spanStyle       = fancy ? 'pe-input_underline'         : '';
            containerStyle  = fancy ? 'pe-select-container--fancy' : 'pe-select-container';
            labelFocusStyle = 'pe-textLabelInput__label--label_focus';

            containerFocusStyle = fancy ? 'pe-select-container-fancy-focus' : 'pe-select-container-focus';
        };

        labelStyleTmp     = labelStyle;
        containerStyleTmp = containerStyle;

        this.setState({containerStyle, containerFocusStyle, labelStyle, selectStyle, spanStyle, disabledStyle, labelFocusStyle, labelStyleTmp, containerStyleTmp});

};
