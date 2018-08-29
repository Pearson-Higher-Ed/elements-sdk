import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const currentYear = new Date().getFullYear();

const Footer = ({ copyrightText, links, anchorTarget, light, glp, singlePageStick }) => {

  const renderCopy = () => {
    return <p className="pe-label">{copyrightText}</p>;
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

  const lightCheck = light ? ' pe-footer--light':'';
  const stickCheck = singlePageStick ? '--stick':'';
  const glpCheck = glp ? ' pe-footer--glp':'';

  return (
      <footer className={`pe-footer${stickCheck} pe-label${lightCheck}${glpCheck}`}>
        <ul>
          {renderLinks()}
        </ul>
        {renderCopy()}
      </footer>
  );
}

export default Footer;

Footer.propTypes = {
  links: PropTypes.array.isRequired,
  light: PropTypes.bool,
  glp: PropTypes.bool,
  singlePageStick: PropTypes.bool,
  anchorTarget: PropTypes.oneOf(['blank', 'self'])
}

Footer.defaultProps = {
  light: false,
  singlePageStick: false,
  anchorTarget: 'self',
  copyrightText: ['Copyright', <span key='Unique'>&copy;</span>, `${currentYear} Pearson Education Inc. All Rights Reserved.`]
}
