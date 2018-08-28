import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon }             from '../../index';

class MultiLineText extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.applyMultiLineStyles = _applyMultiLineStyles.bind(this);
  }

  componentDidMount() {
    this.applyMultiLineStyles();
  }


  render() {

      const { id, labelText, placeholder, infoMessage, errorMessage, inputState, changeHandler } = this.props;
      const { labelStyle, inputStyle, labelFocusStyleTmp } = this.state;

      const em = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
      const ariaDescribedby =  em + ((infoMessage) ? `infoMsg-${id}` : '');

      return (
        <div>
          <label className={labelFocusStyleTmp} htmlFor={id}>{labelText}</label>
          <textarea className   = {inputStyle}
                    id          = {id}
                    cols        = "30"
                    rows        = "5"
                    placeholder = {placeholder}
                    aria-invalid     = {inputState === 'error'}
                    aria-describedby = {ariaDescribedby}
                    disabled         = {inputState === 'disabled'}
                    readOnly         = {inputState === 'readOnly'}
                    onChange    = {changeHandler}
                    >
          </textarea>
            {infoMessage  && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
            {inputState === 'error' && errorMessage && <span id={`errMsg-${id}`} className="pe-input--error_message"><Icon name="warning-sm-18">Error</Icon> {errorMessage}</span>}
        </div>
      )

  }

}


export default MultiLineText;


MultiLineText.propTypes = {
  id           : PropTypes.string.isRequired,
  labelText    : PropTypes.string.isRequired,
  placeholder  : PropTypes.string.isRequired,
  'aria-describedby' : PropTypes.string,
  'aria-invalid'     : PropTypes.bool,
  infoMessage  : PropTypes.string,
  errorMessage : PropTypes.string
};


function _applyMultiLineStyles() {

  let { labelStyle, inputStyle, labelFocusStyleTmp } = this.state;
  const { inputState } = this.props;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-multiLineText--error';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label--label-disabled';
      inputStyle      = 'pe-multiLineText--disabled';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-multiLineText--readOnly';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-multiLineText';
  };

  labelFocusStyleTmp = labelStyle;

  this.setState({labelStyle, inputStyle, labelFocusStyleTmp});

};
