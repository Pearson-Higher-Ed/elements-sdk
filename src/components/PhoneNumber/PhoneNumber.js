import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from './components/Input.js';
import metadata from 'libphonenumber-js/metadata.full.json';

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
    errorMessage: '',
    validate: false
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { id, country, placeholder, onChange, value, onKeyDown, disabled,
            onCountryChange, countries, international, convertToNational,
            selectMaxItems, className, inputClassName, labelText,
            infoMessage, errorMessage, fancy, validate } = this.props;

    const errorLabel = errorMessage ? '--label_error' :'';
    const errorInput = errorMessage ? 'react-phone-number-input__phone--error' : inputClassName;

    return (
      <div className="pe-phoneNumberInput">
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
          error={errorMessage}
          labelText={labelText}
          indicateInvalid={validate}
          ref={(instance) => {this.inputComponent = instance}}
        />

      </div>
    );
  }
}

export {
	parse as parse_phone_number,
	parse as parsePhoneNumber,
	format as format_phone_number,
	format as formatPhoneNumber,
	is_valid_number as is_valid_number,
	is_valid_number as isValidNumber
} from './components/Input.js';
