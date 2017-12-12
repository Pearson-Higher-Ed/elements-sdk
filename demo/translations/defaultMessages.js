import { defineMessages } from 'react-intl';

//
// Default messages are 'en-US'
//
export const messages = defineMessages({
  showText: {
    id             : 'showText',
    description    : 'PasswordInput show/hide',
    defaultMessage : 'show'
  },
  hideText: {
    id             : 'hideText',
    description    : 'PasswordInput show/hide',
    defaultMessage : 'hide'
  },
  isNotVisibleMsg: {
    id             : 'isNotVisibleMsg',
    description    : 'PasswordInput show/hide status (for screen reader users)',
    defaultMessage : 'Password is hidden'
  },
  isVisibleMsg: {
    id             : 'isVisibleMsg',
    description    : 'PasswordInput show/hide status (for screen reader users)',
    defaultMessage : 'Password is visible'
  },
  passwordPlaceholder: {
    id             : 'passwordPlaceholder',
    description    : 'PasswordInput placeholder',
    defaultMessage : 'Enter Password'
  },
  passwordLabel: {
    id             : 'passwordLabel',
    description    : 'PasswordInput Label',
    defaultMessage : 'Password'
  },
  textLabel: {
    id             : 'textLabel',
    description    : 'TextInput Label',
    defaultMessage : 'First Name'
  },
  textPlaceholder: {
    id             : 'textPlaceholder',
    description    : 'TextInput Placeholder',
    defaultMessage : 'First Name'
  },
  textInputInfoMessage: {
    id             : 'textInputInfoMessage',
    description    : 'an optional info message displayed below input',
    defaultMessage : 'This is an info message'
  },
  textInputErrorMessage: {
    id             : 'textInputErrorMessage',
    description    : 'an optional error message displayed below input',
    defaultMessage : 'This is an error message'
  }
});
