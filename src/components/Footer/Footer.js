import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './Footer.scss';

const currentYear = new Date().getFullYear();

const Footer = ({ copyrightText, links, anchorTarget, light, logo, singlePageStick }) => {

  const renderCopy = () => {
    return <p className="pe-label">{copyrightText}</p>;
  };

  const renderLinks = () => {
    let items = [];

    for (let i = 0; i < links.length; i++) {
      let item = links[i];
      items.push(<li key={i}>
                   <a href={item.href} target={`_${anchorTarget}`}>{item.text}</a>
                 </li>);
    }
    return items;
  };

  const renderFooter = () => {
    if (logo && !light) {
      return (
        <div className="pe-footer--logo">
            <Icon name="pearson-logo">
            Pearson logo
            </Icon>
            <ul>
              {renderLinks()}
            </ul>
        </div>
      );
    } else {
      return (
          <ul>
            {renderLinks()}
          </ul>
      );
    }
  }

  const lightCheck = light ? ' pe-footer--light':'';
  const stickCheck = singlePageStick ? '--stick':'';

    return (
      <footer className={`pe-footer${stickCheck} pe-label${lightCheck}`}>
        {renderFooter()}
        {renderCopy()}
      </footer>
    );
}

export default Footer;

Footer.propTypes = {
  links: PropTypes.array.isRequired,
  light: PropTypes.bool,
  logo: PropTypes.bool,
  singlePageStick: PropTypes.bool,
  anchorTarget: PropTypes.oneOf(['blank', 'self'])
}

Footer.defaultProps = {
  light: false,
  logo: false,
  singlePageStick: false,
  anchorTarget: 'self',
  copyrightText: ['Copyright', <span key='Unique'>&copy;</span>, `${currentYear} Pearson Education Inc. All Rights Reserved.`]
}
