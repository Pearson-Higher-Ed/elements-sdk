import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

import './Dropdown.scss';

export default class Dropdown extends Component {

  static propTypes = {
    mobileTitle: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    changeHandler: PropTypes.func
  };

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      selectedItem: ''
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  placement(dropdown) {
    const anchor = dropdown.children[0];
    const element = dropdown.children[1];
    // get window geometry - this is how jQuery does it
    const elementRect = element.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    // then we are past the right side and need to right justify
    const touch_right = window.innerWidth < elementRect.right;
    // we need to push up
    const touch_bottom = elementRect.bottom > window.innerHeight;

    if (touch_bottom) {
      // 4 because of margins
      element.style.top = `-${(elementRect.height + 4)}px`;
    }

    if (touch_right) {
      element.style.left = `-${elementRect.width - anchorRect.width}px`;
    }
  }

  resetPlacement(dropdown) {
    const element = dropdown.children[1];
    element.style.left = null;
    element.style.top = null;
  }

  closeDropdown(e) {
    const currentElement = e.currentTarget;
    // we need to set timeout due to the browser getting the activeElement after a cycle
    // otherwise its still on the wrong active element at the time due to the function being
    // on blur
    setTimeout(() => {
      if (!currentElement.contains(document.activeElement)) {
        this.setState({open: false});
      }
    }, 0);
  }

  handleOutsideClick(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(event.target))) {
      this.setState({ open: false });
    }
  }

  toggleDropdown() {
    this.focusedItem = 0;
    this.setState({ open: !this.state.open });

    if (window.screen.width >= 480) {
      setTimeout(() => {
        this.list.children[this.focusedItem].children[0].focus();
      }, 0);
      // we need timeouts because once again the state will cause a refresh so we need
      // to wait for 1 cycle before we can find the domNode and position it properly
      if (!this.state.open) {
        setTimeout(() => {
          this.placement(ReactDOM.findDOMNode(this));
        }, 0)
      } else {
        setTimeout(() => {
          this.resetPlacement(ReactDOM.findDOMNode(this));
        }, 0)
      }
    }
  };

  handleKeyDown(event) {
    if (this.state.open) {
      if (event.which === 27) {
        // escape
        return this.setState({ open: false });
      }

      if (event.which === 38) {
        // up
        event.preventDefault();
        while (this.focusedItem > 0) {
          this.focusedItem--;
          if (this.list.children[this.focusedItem].attributes.role.value !== 'separator') {
            break;
          }
        }
        this.list.children[this.focusedItem].children[0].focus();
      }

      if (event.which === 40) {
        // down
        event.preventDefault();
        while (this.focusedItem < this.list.children.length-1) {
          this.focusedItem++;
          if (this.list.children[this.focusedItem].attributes.role.value !== 'separator') {
            break;
          }
        }
        this.list.children[this.focusedItem].children[0].focus();
      }
    }
  }

  getParentLiSelected(dom) {
    if (dom.nodeName !== 'LI') {
      return this.getParentLiSelected(dom.parentElement);
    }

    return dom;
  }

  itemSelected(e) {
    const selectedListItem = this.getParentLiSelected(e.target);
    if (selectedListItem.dataset.item !== 'divider') {
      this.props.changeHandler ? this.props.changeHandler(selectedListItem.dataset.item) : null;
      this.setState({
        open: false,
        selectedItem: selectedListItem.dataset.item
      });
    }
  }

  insertAnchor() {
    let buttonClass='pe-icon--btn dropdown-activator';
    let btnIcon=false;
    let buttonLabel = (
      <div>
        {this.props.label} <Icon name="dropdown-open-sm-18">{this.props.label}</Icon>
      </div>
    );

    switch (this.props.type) {
      case 'button':
        buttonClass='pe-btn dropdown-activator';
        break;
      case 'icon':
        btnIcon = true;
        buttonClass = 'dropdown-activator';
        buttonLabel = (
          <Icon name="dropdown-open-sm-24">{this.props.label}</Icon>
        );
        break;
      // if not one of the types go to text
      default:
      case 'text':
        buttonClass = 'pe-icon--btn dropdown-activator';
        break;
    }

    return (
      <Button
        className={buttonClass}
        aria-expanded={this.state.open}
        aria-controls={`${this.props.id.replace(' ', '_')}-dropdown`}
        aria-haspopup="true"
        btnIcon={btnIcon}>
        {buttonLabel}
      </Button>
    );
  }

  addMobileHeader() {
    if (window.screen.width < 480) {
      return (
        <li data-item="divider">
          <div className="mobile-title">
            <h1 className="pe-page-title pe-page-title--small">
              {this.props.mobileTitle}
              <span className="icon-fix">
                <Icon name="remove-lg-18"></Icon>
              </span>
            </h1>
          </div>
        </li>
      );
    }
  }

  render() {
    return (
        <div className="dropdown-container" onClick={this.toggleDropdown} onBlur={this.closeDropdown} >
          {this.insertAnchor()}
          <ul
            role="menu"
            id={`${this.props.id.replace(' ', '_')}-dropdown`}
            ref={(dom) => { this.list = dom; }}
            className={this.state.open ? '' : 'dropdown-menu'}
            onClick={this.itemSelected}
            onKeyDown={this.handleKeyDown}>
            {this.addMobileHeader()}
            {this.props.children}
          </ul>
        </div>
    )
  }
};
