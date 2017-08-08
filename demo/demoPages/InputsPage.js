import React          from 'react';
import { injectIntl } from 'react-intl';
import { messages }   from '../translations/defaultMessages';

import MultiLineTextSection   from './sections/inputsPageSections/MultiLineTextSection';
import PasswordInputSection   from './sections/inputsPageSections/PasswordInputSection';
import TextInputSection       from './sections/inputsPageSections/TextInputSection';
import RadioCheckGroupSection from './sections/inputsPageSections/RadioCheckGroupSection';
import SelectSection          from './sections/inputsPageSections/SelectSection';


const InputsPage = (props) => {

  const { intl } = props;

  // ======================Internationalization Example=========================
  // intl prop is injected by the injectIntl() at the bottom of the page...
  // Provider Context wraps the root element in demo.js.

  // do the intl string replacement...
  const intlDefaultText =  {
    showText              : intl.formatMessage(messages.showText),
    hideText              : intl.formatMessage(messages.hideText),
    isNotVisibleMsg       : intl.formatMessage(messages.isNotVisibleMsg),
    isVisibleMsg          : intl.formatMessage(messages.isVisibleMsg),
    passwordPlaceholder   : intl.formatMessage(messages.passwordPlaceholder),
    passwordLabel         : intl.formatMessage(messages.passwordLabel),
    textLabel             : intl.formatMessage(messages.textLabel),
    textPlaceholder       : intl.formatMessage(messages.textPlaceholder),
    textInputInfoMessage  : intl.formatMessage(messages.textInputInfoMessage),
    textInputErrorMessage : intl.formatMessage(messages.textInputErrorMessage)
  };

  return (
      <div className="displaySection">
        <div className="elementContainer">
          <TextInputSection       intlDefaultText={intlDefaultText} />
          <PasswordInputSection   intlDefaultText={intlDefaultText} />
          <SelectSection          intlDefaultText={intlDefaultText} />
          <MultiLineTextSection   intlDefaultText={intlDefaultText} />
          <RadioCheckGroupSection intlDefaultText={intlDefaultText} />
        </div>
      </div>
    )
  }


export default injectIntl(InputsPage);
