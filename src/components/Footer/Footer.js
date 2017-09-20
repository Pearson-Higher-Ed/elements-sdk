import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

export default class Footer extends Component {

  static propTypes = {
    copyrightText: PropTypes.string,
    links: PropTypes.array.isRequired,
    light: PropTypes.bool,
    singlePageStick: PropTypes.bool,
    anchorTarget: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
  }

  static defaultProps = {
    light: false,
    singlePageStick: false,
    anchorTarget: '_self'
  }

  constructor(props) {
    super(props)
  }

  renderCopy() {
    const year = new Date().getFullYear();
    return (<p className="pe-label">
              Copyright &copy; {year} {this.props.copyrightText}
            </p>);
  }

  renderLinks() {
    let items = [];
    const { links, anchorTarget } = this.props;

    for (let i = 0; i < links.length; i++) {
      let item = links[i];
      items.push(<li key={i}>
                   <a href={item.href} target={anchorTarget}>{item.text}</a>
                   <span aria-hidden={true}>|</span>
                 </li>);
    }
    return items;
  }

  render() {

    const { light, singlePageStick } = this.props;
    const lightCheck = light ? 'pe-footer--light':'';
    const stickCheck = singlePageStick ? '--stick':'';

    return (
        <footer className={`pe-footer${stickCheck} pe-label ${lightCheck}`}>
          <ul>
            {this.renderLinks()}
          </ul>
          {this.renderCopy()}
        </footer>
    )
  }
}
