import React, { Component } from 'react';
import PropTypes            from 'prop-types';


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
      const { labelStyle, inputStyle, labelFocusStyle, labelFocusStyleTmp } = this.state;

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
                    onFocus     = {() => this.setState({labelFocusStyleTmp:labelFocusStyle})}
                    onBlur      = {() => this.setState({labelFocusStyleTmp:labelStyle})}
                    onChange    = {changeHandler}
                    >
          </textarea>
            {infoMessage  && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
            {inputState === 'error' && errorMessage && <span id={`errMsg-${id}`} className="pe-input--error_message">{errorMessage}</span>}
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

  let { labelStyle, inputStyle, labelFocusStyle, labelFocusStyleTmp } = this.state;
  const { inputState } = this.props;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      inputStyle      = 'pe-multiLineText--error';
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-multiLineText--disabled';
      labelFocusStyle = 'pe-textLabelInput__label';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-multiLineText--readOnly';
      labelFocusStyle = 'pe-textLabelInput__label';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-multiLineText';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
  };

  labelFocusStyleTmp = labelStyle;

  this.setState({labelStyle, inputStyle, labelFocusStyle, labelFocusStyleTmp});

};
