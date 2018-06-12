import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pane extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onActive: PropTypes.func
  }

  componentDidUpdate() {
    if (this.props.onActive) this.props.onActive();
  }

  render() {

    return (
      <div
        id={this.context.panelid}
        role="tabpanel" 
        aria-labelledby={this.context.tabid}
        tabIndex="0">
        {this.props.children}
      </div>
    )
  }
}

Pane.contextTypes = {
  tabid: PropTypes.string,
  panelid: PropTypes.string
}
