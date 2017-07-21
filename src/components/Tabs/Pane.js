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
      <div role="tabpanel" aria-describedby={this.context.id}>
        {this.props.children}
      </div>
    )
  }
}

Pane.contextTypes = {
  id: PropTypes.string
}
