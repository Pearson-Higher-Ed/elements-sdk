import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from './source/Input.js';
import metadata from 'libphonenumber-js/metadata.min.json';

import './component/rrui.css';
import './component/style.css';

export default class PhoneNumber extends Component {

  static propTypes = {
    id: PropTypes.string,
    labelText: PropTypes.string,
    infoMessage: PropTypes.string,
    errorMessage: PropTypes.string
  }

  static defaultProps = {
    fancy: true,
    error: false
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { id, country, placeholder, onChange, value, onKeyDown, disabled,
            onCountryChange, countries, international, convertToNational,
            selectMaxItems, className, inputClassName, labelText,
            infoMessage, errorMessage, fancy } = this.props;

    const errorLabel = errorMessage ? '--label_error' :'';
    const errorInput = errorMessage ? 'react-phone-number-input__phone--error' : inputClassName;
    const error = errorMessage ? true : false;

    return (
      <div>
        <label className={`pe-textLabelInput__label${errorLabel}`}>{labelText}</label>

        <Phone
          id={id}
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
          metadata={metadata}
          fancy={fancy}
          error={error}
        />
        {infoMessage && <p className="pe-input--info_message" aria-describedby={id}>{infoMessage}</p>}
        {errorMessage && <p className="pe-input--error_message" aria-describedby={id}>{errorMessage}</p>}

      </div>
    );
  }
}
