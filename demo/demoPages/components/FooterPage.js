import React from 'react';
import { Footer } from '../../../index';

import { injectIntl } from 'react-intl';
import { messages }   from '../../translations/defaultMessages';


const copyrightText = 'Pearson Education Inc. All Rights Reserved.';

const FooterPage = (props) => {

  const { intl } = props;

  const testLinks = [{
    text: 'First link',
    href: 'first'
  }, {
    text: 'Second link',
    href: 'second'
  }, {
    text: 'Last link',
    href: 'last'
  }];

  const intlText = {
    copyrightText : intl.formatMessage(messages.copyrightText)
  };

  return (
    <div className="displaySection">
      <h2><a href="http://pearson-higher-ed.github.io/design/c/footer/">Footer</a></h2>

      <div className="elementContainer">
        <div className="code">
          <h3>Props</h3>
          <h4>Required:</h4>
          <ul>
            <li className="li-props">links:Array === {`[{ text: 'First link', href: 'First href'},
              { text: 'Second link', href: 'Second href' }]`}</li>
          </ul>
          <h4>Optional:</h4>
          <ul>
            <li className="li-props">copyrightText:String</li>
            <li className="li-props">Used to insert copyright information.</li>
            <li className="li-props">light:Boolean === {`<Footer light />`}</li>
            <li className="li-props">The <b>light</b> prop can be used to provide contrast
            on a darker background.</li>
            <li className="li-props">singlePageStick:Boolean === {`<Footer singlePageStick />`}</li>
            <li className="li-props">The <b>singlePageStick</b> prop can be used if the page you are using the Footer on does <br/>
            not exceed the screen&#39;s height. If the page exceeds one screen in height do not use <br/>
            this prop as this will absolutely position the Footer over your content.</li>
            <li className="li-props">anchorTarget:String === {`'blank' || 'self'`}</li>
            <li className="li-props">The anchorTarget prop specifies where to open the linked document.</li>
          </ul>
        </div>

        <h3>Example usage</h3>
          <p className="code">
            {`const testLinks = [{
              text: 'First link',
              href: 'first'
            }, {
              text: 'Second link',
              href: 'second'
            }, {
              text: 'Last link',
              href: 'last'
            }];`} <br/>
            {`const crText= 'Pearson Education Inc.
            All Rights Reserved.';`} <br/><br/>
            {`<Footer links={testLinks} copyrightText={crText} singlePageStick />`}
          </p>
        <Footer links={testLinks} anchorTarget="blank" copyrightText={intlText.copyrightText} singlePageStick />
      </div>
    </div>
    );
};

export default injectIntl(FooterPage);
