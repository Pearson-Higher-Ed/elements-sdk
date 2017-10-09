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

    this.focusedItem = 0;

    this.state = {
      open: false,
      selectedItem: '',
      buttonFocus: true
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.clickListener = this.clickListener.bind(this);
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

  toggleDropdown() {
    this.setState({ open: !this.state.open }, () => {
      this.list.children[0].children[0].focus();
      if (this.state.open) {
        this.placement(ReactDOM.findDOMNode(this));
      } else {
        this.resetPlacement(ReactDOM.findDOMNode(this));
        this.focusedItem = 0;
      }
    });
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

      if (event.which === 9) {
        // tab
        this.setState({
          open: false
        });
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
      this.container.children[0].focus();
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
        buttonClass = 'dropdown-activator pe-icon--btn';
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
        btnIcon={btnIcon}
        focus={this.state.buttonFocus}
        onClick={this.toggleDropdown}
        >
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

  clickListener(e) {
    const currentElement = e.target;

    if (!this.container.contains(currentElement)) {
      this.setState({open: false});
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.clickListener);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickListener);
  }

  render() {
    return (
        <div className="dropdown-container" ref={(dom) => { this.container = dom; }}>
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
