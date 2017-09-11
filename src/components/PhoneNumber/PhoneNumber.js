import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from 'react-phone-number-input';

import './rrui.css';
import './style.css';

export default class PhoneNumber extends Component {

  static propTypes = {
    labelText: PropTypes.string,
    infoMessage: PropTypes.string,
    errorMessage: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { country, placeholder, onChange, value, onKeyDown, disabled,
            onCountryChange, countries, international, convertToNational,
            selectMaxItems, className, inputClassName, labelText,
            infoMessage, errorMessage } = this.props;

    const errorLabel = errorMessage ? '--label_error' :'';
    const errorInput = errorMessage ? 'react-phone-number-input__phone--error' : inputClassName;

    return (
      <div>
        <label className={`pe-textLabelInput__label${errorLabel}`}>{labelText}</label>

        <Phone
          value={value}
          country={country}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={disabled}
          onCountryChange={onCountryChange}
          countries={countries}
          international={international}
          convertToNational={convertToNational}
          selectMaxItems={selectMaxItems}
          className={className}
          inputClassName={errorInput}
        />
        {infoMessage && <p className="pe-input--info_message">{infoMessage}</p>}
        {errorMessage && <p className="pe-input--error_message">{errorMessage}</p>}

      </div>
    );
  }
}
