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
    btnImageWidth: PropTypes.string,
    btnImageAlt: PropTypes.string
  };

  constructor(props) {
    super(props)

    this.focusedItem = 0;

    this.state = {
      open: false,
      selectedItem: '',
      selectedItemDOM: '',
      buttonFocus: true,
      btnImage: props.btnImage,
      width: window.innerWidth
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.clickListener = this.clickListener.bind(this);
    this.getSelectedIndex = this.getSelectedIndex.bind(this);
    this.placeInBody = this.placeInBody.bind(this);
  }

  placement(dropdown) {
    const anchor = dropdown.children[0];
    // fetch by ID vs children
    //const element = dropdown.children[1];
    const element = document.getElementById(this.props.id.replace(" ", "_")+"-dropdown")
    // get window geometry - this is how jQuery does it
    const elementRect = element.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    // then we are past the right side and need to right justify
    const touch_right = window.innerWidth < elementRect.right;
    // we need to push up
    const touch_bottom = elementRect.bottom > window.innerHeight;
    // get how close button is from top
    const top_tooclose = elementRect.top < elementRect.height;

    if (touch_bottom) {
          // 4 because of margins
          element.style.top = `-${(elementRect.height + 4)}px`;
    }

    if (touch_right) {
    	if (window.screen.width >= 768) {
      		element.style.left = `-${elementRect.width - anchorRect.width}px`;
      }
    }
  }

  resetPlacement(dropdown) {
    const element = document.getElementById(this.props.id.replace(" ", "_")+"-dropdown")
    element.style.left = null;
    element.style.top = null;
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
          this.placement(ReactDOM.findDOMNode(this));
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
          this.resetPlacement(ReactDOM.findDOMNode(this));
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

      this.resetPlacement(ReactDOM.findDOMNode(this));
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
          this.handleSetItem()
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
        	this.setState({
        	  open: false
        	});
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
        this.props.changeHandler ? this.props.changeHandler(selectedListItem.dataset) : null;
        this.setState({
          open: false,
          selectedItem: selectedListItem.dataset.item,
          selectedValue: selectedListItem.getAttribute('data-value'),
          selectedItemDOM: selectedListItem
        }, () => {
          this.handleSetItem()
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
        {this.props.label} <Icon name="dropdown-open-sm-18"></Icon>
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
            <img src={this.props.btnImage} height={this.props.btnImageHeight} width={this.props.btnImageWidth} style={{marginTop: imgPad + 'px'}} alt={this.props.btnImageAlt} />
            <Icon name="dropdown-open-sm-18"></Icon>
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
    // responsiveness events
    window.addEventListener("orientationChange", function() {
    this.placeInBody

    }, false)
    window.addEventListener("resize", this.placeInBody)

    if (selectedIndex >= 0 && this.props.children) {
      this.setState({
        selectedItemDOM: document.getElementById(this.props.id + '-' + this.props.children[selectedIndex].props.selectValue)
      });
    }

    // If it's on mobile, place the dropdown as a child of the body
    this.placeInBody()
  }

  placeInBody() {

    var id = this.props.id.replace(" ", "_")+"-dropdown",
        menu = document.getElementById(this.props.id.replace(" ", "_")+"-dropdown"),
        fakeId = id+"--placeholder"
    // don't manipulate DOM for tests
    if(menu != null){
      if(window.screen.width < 768){
        var divWrapper = document.createElement("div"),
            divContainer = document.createElement("div"),
            placeholder = document.createElement("div"),
            curParent = menu.parentElement
        placeholder.setAttribute("id", fakeId),
        placeholder.setAttribute("style", "display:none;")
        divWrapper.className = "dropdown-wrapper"
        divContainer.className = "dropdown-container"

        // insert a placeholder
        curParent.insertBefore(placeholder, menu)

        // put the new stuff on the DOM
        divContainer.appendChild(menu)
        divWrapper.appendChild(divContainer)
        document.body.appendChild(divWrapper)
      } else {
        if(menu.parentElement.parentElement.parentElement.tagName === "BODY"){
          var placeholder = document.getElementById(fakeId),
              curParent = placeholder.parentElement
          curParent.replaceChild(menu, placeholder)
        }
      }
    }
  }

  componentDidUpdate() {
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
    window.removeEventListener("orientationChange", this.placeInBody)
    window.removeEventListener("resize", this.placeInBody)
  }

  render() {
    const isMobile = window.screen.width < 768;

    if (isMobile) {
      return (
        <div className="dropdown-container" ref={(dom) => { this.container = dom; }}>
          {this.insertAnchor()}
          <ul
            role="menu"
            id={`${this.props.id.replace(' ', '_')}-dropdown`}
            ref={(parent) => { this.list = parent; }}
            className={this.state.open ? '' : 'dropdown-menu'}
            //aria-labelledby={`${this.props.id.replace(' ', '_')}-title`}
            onClick={this.itemSelected}
            onKeyDown={this.handleKeyDown}>
            {this.addMobileHeader()}
            {React.Children.map(this.props.children, child => React.cloneElement(child, {itemSelected: this.state.selectedValue}))}
          </ul>
        </div>

      )
    } else {
      return (
        <div className="dropdown-container" ref={(dom) => { this.container = dom; }}>
          {this.insertAnchor()}
          <ul
            role="menu"
            id={`${this.props.id.replace(' ', '_')}-dropdown`}
            ref={(parent) => { this.list = parent; }}
            className={this.state.open ? '' : 'dropdown-menu'}
            //aria-labelledby={`${this.props.id.replace(' ', '_')}-title`}
            onClick={this.itemSelected}
            onKeyDown={this.handleKeyDown}>
            {this.addMobileHeader()}
            {React.Children.map(this.props.children, child => React.cloneElement(child, {itemSelected: this.state.selectedValue}))}
          </ul>
        </div>
      )
    }
  }
};
