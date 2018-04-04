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
    changeHandler: PropTypes.func,
    btnImage: PropTypes.string,
    btnImageHeight: PropTypes.string,
    scrollable: PropTypes.bool,
    btnImageWidth: PropTypes.string
  };

  constructor(props) {
    super(props)

    this.focusedItem = 0;

    this.state = {
      open: false,
      selectedItem: '',
      selectedItemDOM: '',
      buttonFocus: true,
      btnImage: props.btnImage
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.clickListener = this.clickListener.bind(this);
    this.getSelectedIndex = this.getSelectedIndex.bind(this);
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

      if (event.which >= 65 && event.which <= 90) {
        // a through z pressed
        const alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let searchIndex = this.focusedItem;
        while (searchIndex >= 0 && searchIndex < this.list.children.length-1) {
          searchIndex++;
          if (this.list.children[searchIndex].attributes['data-item'].nodeValue.toLowerCase().indexOf(alphaArray[event.which-65]) === 0) {
            this.focusedItem = searchIndex;
            break;
          }

          if (searchIndex === this.focusedItem) {
            break;
          }

          if (searchIndex === this.list.children.length-1) {
            searchIndex = 0;
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
      this.props.changeHandler ? this.props.changeHandler(selectedListItem.dataset) : null;
      this.setState({
        open: false,
        selectedItem: selectedListItem.dataset.item,
        selectedItemDOM: selectedListItem
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
        buttonClass='pe-btn__primary dropdown-activator';
        break;
      case 'icon':
        btnIcon = true;
        buttonClass = 'dropdown-activator pe-icon--btn';
        buttonLabel = (
          <Icon name="dropdown-open-sm-24">{this.props.label}</Icon>
        );
        break;
      case 'image':
        let imgPad = '0';
        if (this.props.btnImageHeight < 18) {
          imgPad = Math.floor((18 - this.props.btnImageHeight)/2);
        }
        btnIcon = true;
        buttonClass= 'pe-icon--btn dropdown-activator dropdown-image';
        buttonLabel = (
          <div>
            <img src={this.props.btnImage} height={this.props.btnImageHeight} width={this.props.btnImageWidth} style={{marginTop: imgPad + 'px'}} alt=""/>
            <Icon name="dropdown-open-sm-18">{this.props.label}</Icon>
          </div>
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
        type="button"
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

  getSelectedIndex() {
    let selectedIndex = -1;

    if (this.props.children) {
      for (let i = 0; i < this.props.children.length; i++) {
        const { props = {} } = this.props.children[i] || {};
        if (props.selected) {
          selectedIndex = i;
          break;
        }
      }
    }

    return selectedIndex;
  }

  componentDidMount() {
    const selectedIndex = this.getSelectedIndex();
    document.addEventListener('click', this.clickListener);

    if (selectedIndex >= 0 && this.props.children) {
      this.setState({
        selectedItemDOM: document.getElementById(this.props.id + '-' + this.props.children[selectedIndex].props.selectValue)
      });
    }
  }

  componentDidUpdate() {
    if (this.state.selectedItemDOM && typeof this.state.selectedItemDOM.scrollIntoView === 'function' && this.props.scrollable) {
      // delay necessary so allow the list to appear before trying to scroll into view
      setTimeout(() => {
        this.state.selectedItemDOM.scrollIntoView(true);
      }, 1);
    }
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
            ref={(parent) => { this.list = parent; }}
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
