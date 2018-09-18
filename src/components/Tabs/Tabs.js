import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import './Tabs.scss';

export default class Tabs extends Component {

  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired,
    light: PropTypes.bool,
    bar: PropTypes.bool
  }

  static defaultProps = {
    selected: 0,
    light: false
  }

  constructor(props) {
    super(props)

    this.state = {
      selected: this.props.selected,
      focused: this.props.selected,
      tabId: '',
      panelId: ''
    }
  };

  getChildContext() {
    return { tabid: this.state.tabId.concat('', this.state.selected),
             panelid: this.state.panelId.concat('', this.state.selected) };
  }

  handleClick(i, e) {
    if (this.props.callback !== undefined) {
      this.props.callback(i);
    }

    this.setState({
      selected: i
    });
    this.getDimensions(e.target);
  }

  getDimensions(activetab) {
    this.slider.style.width = activetab.offsetWidth + 'px';
    this.slider.style.left = activetab.offsetLeft + 'px';
  }

  componentDidMount() {
    const parentUl = this.doc;
    const tabArray = parentUl.querySelectorAll('[role=tab]'),
          selectedTab = parentUl.querySelector('.activeTab');
    const lastTabArray = tabArray.length - 1;
    //set up the initial active bottom bar
    this.getDimensions(selectedTab);
    
    //for keyboard users to navigate through tabs
    parentUl.addEventListener("keydown", (event) => {
      const focusedIndex = this.state.focused;
      if (focusedIndex === 0 && event.keyCode === 37) {
        tabArray[lastTabArray].focus();
        this.setState({ focused: lastTabArray });
      }
      if (focusedIndex === lastTabArray && event.keyCode === 39) {
        tabArray[0].focus();
        this.setState({ focused: 0 });
      }
      if (focusedIndex !== 0 && event.keyCode === 37) {
        tabArray[focusedIndex - 1].focus();
        this.setState({ focused: (focusedIndex - 1) });
      }
      if (focusedIndex !== lastTabArray && event.keyCode === 39) {
        tabArray[focusedIndex + 1].focus();
        this.setState({ focused: (focusedIndex + 1) });
      }
      //tabs only get actived on space and enter key
      if (event.keyCode === 13 || event.keyCode === 32) {
        let targetid = event.target.id;
        let current = targetid.substr(targetid.length - 1);
        this.setState({ selected: current });
      }
    }, true)

    //update the slider position when screen resizes
    window.addEventListener("resize", () => {
      const selectedTab = parentUl.querySelector('.activeTab');
      this.getDimensions(selectedTab);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => {
      const selectedTab = parentUl.querySelector('.activeTab');
      this.getDimensions(selectedTab);
    });
}

  renderLabels() {
    function labels(child, i) {
      let activeClass = this.state.selected === i ? 'activeTab' : '';
      let tabI = activeClass ? null : '-1';
      let ariaSelected = activeClass ? true : false;
      
      return (
        <button
          className={`pe-tabs--btn ${activeClass}`} 
          id={this.state.tabId+i}
          key={i}
          role="tab"
          tabIndex={tabI}
          aria-controls={this.state.panelId+i} 
          aria-selected={ariaSelected}
          onClick={this.handleClick.bind(this, i)}
          >{child.props.label}  
        </button>
      );
    }
    const themeCheck = this.props.light ? 'light' : this.props.bar ? 'bar': '';
    return (
      <div className={`pe-tabs ${themeCheck}`} role="tablist" ref={(div) => { this.doc = div}} onFocus={() => this.setState({ tabId: `_${uuid.v1()}`,  panelId: `_${uuid.v4()}`})}>
        {this.props.children.map(labels.bind(this))}
        <div className="pe-tabs--slider" ref={ref => this.slider = ref }></div>
      </div>
    );
  }

  renderContent() {
    return (
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {

    return (
      <div>
        {this.renderLabels()}
        {this.renderContent()}
      </div>
    )
  };
};

Tabs.childContextTypes = {
  tabid: PropTypes.string,
  panelid: PropTypes.string
}
