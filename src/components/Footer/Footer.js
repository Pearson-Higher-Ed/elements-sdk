import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const Footer = ({ copyrightText, links, anchorTarget, light, singlePageStick }) => {

  const renderCopy = () => {
    const year = new Date().getFullYear();
    return (<p className="pe-label">
              Copyright &copy; {year} {copyrightText}
            </p>);
  };

  const renderLinks = () => {
    let items = [];

    for (let i = 0; i < links.length; i++) {
      let item = links[i];
      items.push(<li key={i}>
                   <a href={item.href} target={`_${anchorTarget}`}>{item.text}</a>
                   <span aria-hidden={true}>|</span>
                 </li>);
    }
    return items;
  };

  const lightCheck = light ? 'pe-footer--light':'';
  const stickCheck = singlePageStick ? '--stick':'';

  return (
      <footer className={`pe-footer${stickCheck} pe-label ${lightCheck}`}>
        <ul>
          {renderLinks()}
        </ul>
        {renderCopy()}
      </footer>
  );
}

export default Footer;

Footer.propTypes = {
  copyrightText: PropTypes.string,
  links: PropTypes.array.isRequired,
  light: PropTypes.bool,
  singlePageStick: PropTypes.bool,
  anchorTarget: PropTypes.oneOf(['blank', 'self'])
}

Footer.defaultProps = {
  light: false,
  singlePageStick: false,
  anchorTarget: 'self'
}
