import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Tether from 'tether';
import Button from '../Button';
import Icon from '../Icon';

import './Dropdown.scss';

export default class Dropdown extends Component {

  static propTypes = {
    mobileTitle: PropTypes.string,
    type: PropTypes.oneOf(['text', 'button', 'icon', 'icon-round', 'image']).isRequired,
    label: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    id: PropTypes.string.isRequired,
    changeHandler: PropTypes.func,
    btnImage: PropTypes.string,
    btnImageHeight: PropTypes.string,
    scrollable: PropTypes.bool,
    btnImageWidth: PropTypes.string,
    btnImageAlt: PropTypes.string,
    disabled: PropTypes.bool,
    btnHover: PropTypes.bool,
    btnOpen: PropTypes.bool,
    iconName: PropTypes.string,
    scrollParentId: PropTypes.string,
  };

  static defaultProps = {
    type: 'button',
    btnHover: false,
    btnOpen: false,
    iconName: 'drop-down-18',
  }

  constructor(props) {
    super(props)

    this.focusedItem = 0;
    this.menuTether = null;

    this.state = {
      open: false,
      selectedItem: '',
      selectedItemDOM: '',
      buttonFocus: true,
      btnImage: props.btnImage,
      width: window.innerWidth,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.clickListener = this.clickListener.bind(this);
    this.getSelectedIndex = this.getSelectedIndex.bind(this);
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open }, () => {
      const dropdown = document.getElementById(this.props.id.replace(" ", "_")+"-dropdown")
      // don't run in tests (DOM manipulation)
      if(dropdown != null){
        const parentWrapper = dropdown.parentElement.parentElement

        //need to return focus to checked item
        if (dropdown.hasAttribute("aria-activedescendant")) {
        	var activeDescId = dropdown.getAttribute("aria-activedescendant"),
        		activeDescendant = document.getElementById(activeDescId),
        		activeDescIndex = [].indexOf.call(activeDescendant.parentNode.children, activeDescendant);

        	activeDescendant.children[0].focus();
        	this.focusedItem = activeDescIndex;
        } else {
        	if (window.screen.width < 768) {
        		this.list.children[1].children[0].focus();
        		this.focusedItem = 1;
        	}
        	else {
        		this.list.children[0].children[0].focus();
        	}
        }


        if (this.state.open) {
          if(window.screen.width < 768){
            // hide children of body
            for(let key in document.body.children){
              let child = document.body.children[key]
              if(child != parentWrapper && child.tagName != "SCRIPT" && child.style){
                child.style.display = "none"
              }
            }
          }
        } else {
          this.focusedItem = 0;
          if(window.screen.width < 768){
            // show children of body
            for(let key in document.body.children){
              let child = document.body.children[key]
              if(child != parentWrapper && child.tagName != "SCRIPT" && child.style){
                child.style.display = ""
              }
            }
          }
        }
      }
    });
  };

  handleSetItem() {
    const dropdown = document.getElementById(this.props.id.replace(" ", "_")+"-dropdown")
    // don't run for tests (DOM maniplation)
    if(dropdown != null){
      const parentWrapper = dropdown.parentElement.parentElement

      this.focusedItem = 0;

      if(window.screen.width < 768){
        // show children of body
        for(let key in document.body.children){
          let child = document.body.children[key]
          if(child != parentWrapper && child.tagName != "SCRIPT" && child.style){
            child.style.display = ""
          }
        }
      }
    }
  }

  handleKeyDown(event) {
    if (this.state.open) {
      if (event.which === 27) {
        // escape
        return this.setState({ open: false }, () => {
          this.handleSetItem();
        });
      }

      if (event.which === 38) {
        // up
        event.preventDefault();
        //for mobile, skip header
        if (window.screen.width < 768) {
        	if (this.focusedItem > 1) {
				if (this.list.children[this.focusedItem-1].attributes.role.value !== 'separator') {
            		this.focusedItem--;
          		}
          		else {
					this.focusedItem = this.focusedItem - 2;
          		}
	        }
	        else {
        	  this.focusedItem = this.list.children.length-1;
         	}
        }
    	//desktop or tablet
        else {
      		if (this.focusedItem > 0) {

				if (this.list.children[this.focusedItem-1].attributes.role.value !== 'separator') {
            		this.focusedItem--;
          		}

          		else {
					this.focusedItem = this.focusedItem - 2;
          		}
        	}
        	else {
        		this.focusedItem = this.list.children.length-1;
        	}
       }
        this.list.children[this.focusedItem].children[0].focus();
	  }

      if (event.which === 40) {
        // down
        event.preventDefault();
        if (this.focusedItem < this.list.children.length-1) {
        	if (this.list.children[this.focusedItem+1].attributes.role.value !== 'separator') {
        		this.focusedItem++;
        	}
        	else {
        		this.focusedItem = this.focusedItem + 2;
        	}
        }
        else {
        	if (window.screen.width < 768) {
        		this.focusedItem = 1;
        	} else {
        		this.focusedItem = 0;
        	}
        }
        this.list.children[this.focusedItem].children[0].focus();
      }

      if (event.which === 9) {
        // tab
        event.preventDefault();
        if (window.screen.width < 768) {
        	//for mobile, tab should cycle between close button and list
        	if (document.activeElement.parentNode.hasAttribute("role")) {
        		this.list.children[0].querySelector('button').focus();
        	} else {
        		this.list.children[1].children[0].focus();
        	}
        }
        else {
          this.setState({ open: false });
        }
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
    if ((dom.nodeName !== 'LI') && (dom.nodeName !== 'UL')) {
      return this.getParentLiSelected(dom.parentElement);
    }

    return dom;

  }

  itemSelected(e) {
    const selectedListItem = this.getParentLiSelected(e.target);
    if (selectedListItem.nodeName == 'LI') {
      if (selectedListItem.dataset.item !== 'divider') {
        if (selectedListItem.children[0].disabled) {
          return;
        }
        this.props.changeHandler ? this.props.changeHandler(selectedListItem.dataset) : null;
        this.setState({
          open: false,
          selectedItem: selectedListItem.dataset.item,
          selectedValue: selectedListItem.getAttribute('data-value'),
          selectedItemDOM: selectedListItem
        }, () => {
          this.handleSetItem();
        });

        //for mobile need setTimeout so button can get display before focus
        if (window.screen.width < 768) {
            //    	this.container.children[0].focus();

        	var buttonToFocus = this.container.children[0];
        	setTimeout(function(){ buttonToFocus.focus(); }, 0);
        }
        else {
        	this.container.children[0].focus();
        }
        selectedListItem.parentNode.setAttribute('aria-activedescendant', selectedListItem.id);
      }
    }
  }

  insertAnchor() {
    let buttonClass='pe-icon--btn dropdown-activator';
    let btnIcon=false;
    let buttonLabel = (
      <div>
        {this.props.label} <Icon name={this.props.iconName}></Icon>
      </div>
    );
    let ariaLabel = (!this.props.label && this.props.ariaLabel) ? this.props.ariaLabel : null;

    // add the selected value to to the aria-label
    if (this.props.ariaLabel && this.state.selectedValue) {
        ariaLabel = `${this.state.selectedValue} selected, ${this.props.ariaLabel}`;
    } else if (this.props.ariaLabel && this.props.label) {
        ariaLabel = `${this.props.label}, ${this.props.ariaLabel}`;
    }

    switch (this.props.type) {
      case 'button':
        buttonClass='pe-btn__primary dropdown-activator';
        break;
      case 'icon':
        btnIcon = true;
        buttonClass = 'dropdown-activator pe-icon--btn';
        buttonLabel = (
          <Icon name={this.props.iconName}>{this.props.label}</Icon>
        );
        break;
      case 'icon-round':
        btnIcon = true;
        buttonClass = 'dropdown-activator pe-icon--btn dropdown-round-btn';
        buttonLabel = (
          <Icon name={this.props.iconName}>{this.props.label}</Icon>
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
            <img src={this.props.btnImage} height={this.props.btnImageHeight} width={this.props.btnImageWidth} style={{marginTop: imgPad + 'px'}} alt={this.props.btnImageAlt} />
            <Icon name={this.props.iconName}></Icon>
          </div>
        );

        if (this.props.ariaLabel && this.state.selectedValue) {
            ariaLabel = `${this.state.selectedValue} selected, ${this.props.ariaLabel}`;
        } else
            if (this.props.ariaLabel && this.props.btnImageAlt) {
            ariaLabel = `${this.props.btnImageAlt}, ${this.props.ariaLabel}`;
        }
      break;
      // if not one of the types go to text
      default:
      case 'text':
        buttonClass = 'pe-icon--btn dropdown-activator';
        break;
    }

    if (this.props.btnHover) {
      buttonClass = `${buttonClass} dropdown-hover-btn`;
    }

    return (
      <Button
        id={`${this.props.id}-button`}
        className={buttonClass}
        type="button"
        aria-expanded={this.state.open}
        aria-label={ariaLabel}
        aria-controls={`${this.props.id.replace(' ', '_')}-dropdown`}
        aria-haspopup="true"
        btnIcon={btnIcon}
        focus={this.state.buttonFocus}
        onClick={this.toggleDropdown}
        disabled={this.props.disabled}
      >
        {buttonLabel}
      </Button>
    );
  }

  addMobileHeader() {
    if (window.screen.width < 768) {
      return (
        <li data-item="divider">
          <div className="mobile-title">
            <h1 className="pe-title pe-title--small"
            	id={`${this.props.id.replace(' ', '_')}-title`}>
              {this.props.mobileTitle}
              </h1>
              <button className="pe-icon--btn icon-fix"
                    onClick={this.toggleDropdown}
                    aria-label="Close dropdown">
              <Icon name="remove-lg-18" />
            </button>

          </div>
        </li>
      );
    }
  }

  clickListener(e) {
    if (window.screen.width > 767) {
    	const currentElement = e.target;

    	if (!this.container.contains(currentElement)) {
        this.setState({open: false});
    	}
    } else {
    	return
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

    this.tetherMenu();

    if (selectedIndex >= 0 && this.props.children) {
      this.setState({
        selectedItemDOM: document.getElementById(this.props.id + '-' + this.props.children[selectedIndex].props.selectValue)
      });
    }
  }

  tetherMenu = () => {
    const propId = this.props.id.replace(' ', '_');
    const menuElement = document.getElementById(`${propId}-dropdown`);
    const containerElement = document.getElementById(`${propId}-dropdown-container`);

    // don't manipulate DOM for tests...?
    if (!menuElement) return;

    this.menuTether = new Tether({
      element: menuElement,
      target: containerElement,

      attachment: 'top right',
      targetAttachment: 'bottom right',

      // optimizations: {
      //   moveElement: false,
      //   gpu: false,
      // },

      constraints: [
        {
          to: 'scrollParent',
          attachment: 'together none',
        },
        {
          to: 'window',
          attachment: 'together',
        },
      ]
    })
  }

  componentDidUpdate(prevProps, prevState) {

    const scrollParent = document.getElementById(this.props.scrollParentId);

    // menu was opened... update menu position and disable scrolling
    if (this.state.open && !prevState.open) {
      this.menuTether && this.menuTether.position();
      scrollParent && scrollParent.classList.add('stop-scrolling');
      scrollParent && document.body.classList.add('stop-scrolling');
    }

    // menu was closed... re-enable scrolling
    if (prevState.open && !this.state.open) {
      scrollParent && scrollParent.classList.remove('stop-scrolling');
      scrollParent && document.body.classList.remove('stop-scrolling');
    }

    if (this.state.selectedItemDOM && this.props.scrollable) {
      // delay necessary so allow the list to appear before trying to scroll into view
      setTimeout(() => {
        this.state.selectedItemDOM.parentNode.scrollTop = this.state.selectedItemDOM.offsetTop;
      }, 1);
    }
  }

  componentWillUnmount() {
    // garbage cleanup
    document.removeEventListener('click', this.clickListener);

    // remove menu from DOM
    const menuElement = document.getElementById(`${this.props.id.replace(' ', '_')}-dropdown`);
    menuElement && menuElement.remove();
    this.menuTether && this.menuTether.destroy();

    // re-enable scrolling
    const scrollParent = document.getElementById(this.props.scrollParentId);
    scrollParent && document.body.classList.remove('stop-scrolling');
    scrollParent && scrollParent.classList.remove('stop-scrolling');
  }

  render() {

    return (
      <div id={`${this.props.id.replace(' ', '_')}-dropdown-container`} className="dropdown-container" ref={(dom) => { this.container = dom; }}>
        {this.insertAnchor()}
        <ul
          role="menu"
          id={`${this.props.id.replace(' ', '_')}-dropdown`}
          ref={(parent) => { this.list = parent; }}
          className={this.state.open ? 'dropdown-menu-open' : 'dropdown-menu-closed'}
          //aria-labelledby={`${this.props.id.replace(' ', '_')}-title`}
          onClick={this.itemSelected}
          onKeyDown={this.handleKeyDown}>
          {this.addMobileHeader()}
          {React.Children.map(this.props.children, child => React.isValidElement(child) && typeof child.type === 'function' ? React.cloneElement(child, {itemSelected: this.state.selectedValue}) : child)}
        </ul>

      </div>
    )
  }
};
