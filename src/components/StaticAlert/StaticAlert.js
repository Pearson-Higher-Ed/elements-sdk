import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './StaticAlert.scss';

export default class StaticAlert extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    disable: PropTypes.bool
  }

  static defaultProps = {
    inline: false,
    disable: false
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: true
    }
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  typeCheck = () => {
    if (this.props.type === 'Error') {
      return (
        <span className="static-error-svg">
          <Icon name="warning-18" />
        </span>
      );
    }
    if (this.props.type === 'Success') {
      return (
        <span className="static-success-svg">
          <Icon name="check-lg-18" />
        </span>
      );
    }
  }

  render() {

    const { type, title, message, inline, disable } = this.props;
    const infoCheck = type === 'Information' ? 'info':'';
    const inlineCheck = inline ? '-inline':'';
    const disableCheck = disable ? 'disabled': null;

    return (
      <div>
        {this.state.isOpen &&
          <div className={`static-pe-alert${inlineCheck} static-alert-${type}`}>
            <div className="static-alert-content-container">
              {this.typeCheck()}
              <div className={`static-alert-content-${infoCheck}`}>
                <h2 className="pe-label static-alert-title">
                  <strong>{title}</strong>
                </h2>
                <p className="pe-paragraph static-alert-text">
                  {message}
                </p>
              </div>
            </div>

            <button className="pe-icon--btn static-close-title"
                    disabled={disableCheck}
                    onClick={this.handleClose}
                    aria-label="Close alert">
              <Icon name="remove-sm-24" />
            </button>
          </div>
        }
      </div>
    )
  }
}
